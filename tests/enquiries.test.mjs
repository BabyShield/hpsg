import test from "node:test";
import assert from "node:assert/strict";
import { DatabaseSync } from "node:sqlite";
import { readFileSync } from "node:fs";
import { randomUUID } from "node:crypto";
import { handle, deliver, validateEnquiry, serviceNames } from "../cloudflare/enquiries/worker.mjs";

function setup() {
  const sqlite = new DatabaseSync(":memory:");
  sqlite.exec(readFileSync(new URL("../cloudflare/enquiries/migrations/0001_enquiries.sql", import.meta.url), "utf8"));
  const DB = { prepare(sql) {
    const statement = sqlite.prepare(sql);
    let params = [];
    return { bind(...values) { params = values; return this; }, async first() { return statement.get(...params) ?? null; }, async run() { statement.run(...params); return { success: true }; }, async all() { return { results: statement.all(...params) }; } };
  } };
  const env = { DB, PUBLIC_ENABLED: "true", ALLOWED_ORIGINS: "https://hpsg.co.uk", TURNSTILE_SITE_KEY: "test-public", TURNSTILE_SECRET_KEY: "test-secret", RESEND_API_KEY: "test-provider", RATE_LIMIT_SECRET: "test-limit-secret" };
  const pending = [];
  const ctx = { waitUntil(promise) { pending.push(promise); } };
  const flush = async () => { await Promise.all(pending.splice(0)); };
  return { sqlite, env, ctx, flush };
}
const payload = () => ({ submissionId: randomUUID(), name: "Local test", email: "test@example.com", phone: "", area: "Hampstead NW3", service: "loft-conversions", message: "Synthetic local enquiry. Do not send.", website: "", turnstileToken: "test-token" });
const request = (body, origin = "https://hpsg.co.uk", path = "/enquiries") => new Request(`https://enquiries.example${path}`, { method: "POST", headers: { Origin: origin, "Content-Type": "application/json", "CF-Connecting-IP": "192.0.2.10" }, body: JSON.stringify(body) });
function provider(calls, options = {}) {
  return async (url, init) => {
    calls.push({ url, init });
    if (new URL(url).href === "https://challenges.cloudflare.com/turnstile/v0/siteverify") return Response.json({ success: !options.badToken, hostname: options.hostname || "hpsg.co.uk", action: options.action || "enquiry" });
    assert.equal(new URL(url).href, "https://api.resend.com/emails");
    if (options.mailFailure) return Response.json({ message: "synthetic failure" }, { status: 503 });
    return Response.json({ id: "synthetic-provider-id" });
  };
}

test("catalogue services remain accepted; unsafe and incomplete payloads are rejected", () => {
  assert.equal(serviceNames.size, 91);
  for (const service of serviceNames.keys()) assert.ok(validateEnquiry({ ...payload(), service }));
  for (const changes of [{ email: "person@example.com\r\nBcc:other@example.com" }, { website: "spam" }, { service: "unknown" }, { message: "short" }, { name: 123 }, { submissionId: "guessable" }, { message: "x".repeat(2001) }]) assert.equal(validateEnquiry({ ...payload(), ...changes }), null);
});

test("disabled service and invalid origin cannot write or send", async () => {
  const { env, ctx, sqlite } = setup(); const calls = [];
  assert.equal((await handle(request(payload(), "https://evil.example"), env, ctx, provider(calls))).status, 403);
  assert.equal((await handle(request(payload()), { ...env, PUBLIC_ENABLED: "false" }, ctx, provider(calls))).status, 503);
  assert.equal(calls.length, 0);
  assert.equal(sqlite.prepare("SELECT COUNT(*) AS n FROM enquiries").get().n, 0);
});

test("Turnstile failure, wrong hostname and wrong action cannot create an enquiry", async () => {
  for (const options of [{ badToken: true }, { hostname: "evil.example" }, { action: "different" }]) {
    const { env, ctx, sqlite } = setup();
    assert.equal((await handle(request(payload()), env, ctx, provider([], options))).status, 400);
    assert.equal(sqlite.prepare("SELECT COUNT(*) AS n FROM enquiries").get().n, 0);
  }
});

test("enquiry is durable before receipt; notifications use only the fixed office recipient", async () => {
  const { env, ctx, sqlite, flush } = setup(); const calls = []; const data = payload();
  const response = await handle(request(data), env, ctx, provider(calls));
  assert.equal(response.status, 202);
  assert.equal((await response.json()).reference, data.submissionId);
  assert.equal(sqlite.prepare("SELECT COUNT(*) AS n FROM enquiries").get().n, 1);
  await flush();
  const sent = calls.find((call) => new URL(call.url).href === "https://api.resend.com/emails");
  const mail = JSON.parse(sent.init.body);
  assert.deepEqual(mail.to, ["office@hpsg.co.uk"]);
  assert.equal(mail.reply_to, data.email);
  assert.match(sent.init.headers["Idempotency-Key"], new RegExp(data.submissionId));
  assert.equal(sqlite.prepare("SELECT status FROM enquiries").get().status, "accepted");
});

test("retrying the same submission does not duplicate the lead or email", async () => {
  const { env, ctx, sqlite, flush } = setup(); const calls = []; const data = payload(); const transport = provider(calls);
  await handle(request(data), env, ctx, transport); await flush();
  assert.equal((await handle(request(data), env, ctx, transport)).status, 202);
  assert.equal((await handle(request({ ...data, message: "Changed details with the same id." }), env, ctx, transport)).status, 409);
  await flush();
  assert.equal(sqlite.prepare("SELECT COUNT(*) AS n FROM enquiries").get().n, 1);
  assert.equal(calls.filter((call) => new URL(call.url).href === "https://api.resend.com/emails").length, 1);
});

test("provider failure retains the enquiry and an idempotent retry can recover it", async () => {
  const { env, ctx, sqlite, flush } = setup(); const data = payload();
  assert.equal((await handle(request(data), env, ctx, provider([], { mailFailure: true }))).status, 202);
  await flush();
  const row = sqlite.prepare("SELECT * FROM enquiries").get();
  assert.equal(row.status, "retry"); assert.equal(row.attempts, 1);
  const calls = [];
  await deliver(env, data.submissionId, provider(calls), row.next_attempt + 1);
  assert.equal(sqlite.prepare("SELECT status FROM enquiries").get().status, "accepted");
  assert.equal(calls.length, 1);
});

test("database failure never reports success or sends a notification", async () => {
  const { env, ctx } = setup(); const calls = [];
  env.DB = { prepare() { throw new Error("synthetic database failure"); } };
  assert.equal((await handle(request(payload()), env, ctx, provider(calls))).status, 503);
  assert.equal(calls.length, 0);
});

test("rate limits persist across requests and prevent unlimited attempts", async () => {
  const { env, ctx } = setup(); const calls = [];
  for (let index = 0; index < 20; index++) assert.equal((await handle(request({}), env, ctx, provider(calls))).status, 400);
  assert.equal((await handle(request(payload()), env, ctx, provider(calls))).status, 429);
  assert.equal(calls.length, 0);
});

test("metrics accept only fixed click labels and never customer fields or arbitrary URLs", async () => {
  const { env, ctx, sqlite } = setup();
  assert.equal((await handle(request({ event: "whatsapp_click" }, undefined, "/events"), env, ctx)).status, 204);
  for (const body of [{ event: "enquiry_received" }, { event: "call_click", email: "test@example.com" }, { event: "call_click", service: "private-address" }]) assert.equal((await handle(request(body, undefined, "/events"), env, ctx)).status, 400);
  const rows = sqlite.prepare("SELECT * FROM daily_metrics").all();
  assert.equal(rows.length, 1); assert.equal(rows[0].count, 1); assert.equal(rows[0].event, "whatsapp_click");
});

test("oversize or malformed request bodies fail without storing an enquiry", async () => {
  const { env, ctx, sqlite } = setup();
  assert.equal((await handle(request({ padding: "x".repeat(20000) }), env, ctx)).status, 400);
  assert.equal(sqlite.prepare("SELECT COUNT(*) AS n FROM enquiries").get().n, 0);
});

test("two delivery attempts cannot concurrently claim the same notification", async () => {
  const { env, sqlite } = setup(); const data = payload(); const now = Date.now();
  sqlite.prepare("INSERT INTO enquiries(id,digest,created_at,payload,next_attempt) VALUES (?,?,?,?,?)").run(data.submissionId, "test", now, JSON.stringify(validateEnquiry(data).payload), now);
  const calls = []; const transport = provider(calls);
  await Promise.all([deliver(env, data.submissionId, transport, now), deliver(env, data.submissionId, transport, now)]);
  assert.equal(calls.length, 1);
  assert.equal(sqlite.prepare("SELECT attempts FROM enquiries").get().attempts, 1);
});

test("health reports overdue saved enquiries without exposing customer information", async () => {
  const { env, sqlite, ctx } = setup(); const data = payload(); const now = Date.now();
  const health = () => handle(new Request("https://enquiries.example/health"), env, ctx);
  assert.equal((await health()).status, 200);
  sqlite.prepare("INSERT INTO enquiries(id,digest,created_at,payload,next_attempt) VALUES (?,?,?,?,?)").run(data.submissionId, "test", now - 7200000, JSON.stringify(validateEnquiry(data).payload), now);
  const response = await health();
  assert.equal(response.status, 503);
  assert.deepEqual(await response.json(), { status: "attention_required" });
});
