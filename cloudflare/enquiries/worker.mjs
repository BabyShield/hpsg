import catalogue from "../../src/data/other-services.json" with { type: "json" };

const MAIN = [
  ["kitchen-renovation", "Kitchen Renovation"],
  ["bathroom-renovation", "Bathroom Renovation"],
  ["painting-decorating", "Painting & Decorating"],
  ["light-refurbishment", "Light Refurbishment"],
];
export const serviceNames = new Map([...MAIN, ...catalogue.groups.flatMap((group) => group.services.map((item) => [item.slug, item.name]))]);
const CONTACT = "office@hpsg.co.uk";
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const encoder = new TextEncoder();
const ready = (env) => env.PUBLIC_ENABLED === "true" && Boolean(env.DB && env.TURNSTILE_SITE_KEY && env.TURNSTILE_SECRET_KEY && env.RESEND_API_KEY && env.RATE_LIMIT_SECRET);
const origins = (env) => (env.ALLOWED_ORIGINS || "").split(",").map((value) => value.trim()).filter(Boolean);

function reply(request, env, body, status = 200) {
  const origin = request.headers.get("Origin");
  const headers = { "Content-Type": "application/json", "Cache-Control": "no-store", "X-Robots-Tag": "noindex, nofollow", "Vary": "Origin", "X-Content-Type-Options": "nosniff" };
  if (origins(env).includes(origin)) {
    headers["Access-Control-Allow-Origin"] = origin;
    headers["Access-Control-Allow-Methods"] = "GET, POST, OPTIONS";
    headers["Access-Control-Allow-Headers"] = "Content-Type";
  }
  if (status === 429) headers["Retry-After"] = "900";
  return new Response(status === 204 ? null : JSON.stringify(body), { status, headers });
}

async function readJson(request, limit) {
  if (!request.headers.get("Content-Type")?.startsWith("application/json")) throw new Error("content_type");
  const reader = request.body?.getReader();
  if (!reader) throw new Error("body");
  const chunks = []; let size = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    size += value.byteLength;
    if (size > limit) { await reader.cancel(); throw new Error("body_too_large"); }
    chunks.push(value);
  }
  const bytes = new Uint8Array(size); let offset = 0;
  for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.length; }
  return JSON.parse(new TextDecoder().decode(bytes));
}

export function validateEnquiry(input) {
  if (!input || typeof input !== "object" || Array.isArray(input)) return null;
  const fields = { name: 100, email: 254, phone: 40, area: 100, service: 100, message: 2000 };
  const payload = {};
  for (const [key, maximum] of Object.entries(fields)) {
    const value = input[key] ?? "";
    if (typeof value !== "string" || value.length > maximum || /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/.test(value)) return null;
    if (key !== "message" && /[\r\n]/.test(value)) return null;
    payload[key] = value.trim();
  }
  if (payload.name.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email) || payload.message.length < 10 || !serviceNames.has(payload.service)) return null;
  if (!UUID.test(input.submissionId || "") || (input.website ?? "") !== "" || typeof input.turnstileToken !== "string" || input.turnstileToken.length > 2048) return null;
  return { payload, id: input.submissionId, token: input.turnstileToken };
}

async function digest(value) {
  return Array.from(new Uint8Array(await crypto.subtle.digest("SHA-256", encoder.encode(value))), (byte) => byte.toString(16).padStart(2, "0")).join("");
}

async function limit(env, identity, period, maximum, now) {
  // The digest rotates each period; raw IP addresses and email addresses are not stored here.
  const bucket = await digest(`${env.RATE_LIMIT_SECRET}:${Math.floor(now / period)}:${identity}`);
  const row = await env.DB.prepare("INSERT INTO rate_limits(bucket,hits,expires_at) VALUES (?,1,?) ON CONFLICT(bucket) DO UPDATE SET hits=hits+1 RETURNING hits").bind(bucket, now + period).first();
  return row.hits <= maximum;
}

export async function metric(env, event, service = "", now = Date.now()) {
  const day = new Date(now).toISOString().slice(0, 10);
  await env.DB.prepare("INSERT INTO daily_metrics(day,event,service,count) VALUES (?,?,?,1) ON CONFLICT(day,event,service) DO UPDATE SET count=count+1").bind(day, event, service).run();
}

export async function deliver(env, id, fetcher = fetch, now = Date.now()) {
  if (!env.RESEND_API_KEY) return;
  const row = await env.DB.prepare("UPDATE enquiries SET status='sending', lease_until=?, attempts=attempts+1 WHERE id=? AND attempts<6 AND created_at>? AND next_attempt<=? AND (status IN ('pending','retry') OR (status='sending' AND lease_until<?)) RETURNING *").bind(now + 60000, id, now - 23 * 3600000, now, now).first();
  if (!row) return;
  let accepted = null; let error = "provider_unavailable";
  try {
    const enquiry = JSON.parse(row.payload);
    const result = await fetcher("https://api.resend.com/emails", {
      method: "POST", signal: AbortSignal.timeout(10000),
      headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, "Content-Type": "application/json", "Idempotency-Key": `hpsg-enquiry/${row.id}` },
      body: JSON.stringify({ from: `HPSG Website <${CONTACT}>`, to: [CONTACT], reply_to: enquiry.email, subject: `HPSG website enquiry ${row.id}`, text: `Reference: ${row.id}\nName: ${enquiry.name}\nEmail: ${enquiry.email}\nPhone: ${enquiry.phone || "Not provided"}\nArea: ${enquiry.area || "Not provided"}\nService: ${serviceNames.get(enquiry.service)}\n\n${enquiry.message}` }),
    });
    if (result.ok) { const body = await result.json(); if (typeof body.id === "string" && body.id.length < 200) accepted = body.id; }
    error = `provider_${result.status}`;
  } catch { /* Keep the durable outbox entry. Never log the payload or provider response. */ }
  if (accepted) {
    await env.DB.prepare("UPDATE enquiries SET status='accepted', provider_id=?, lease_until=0, last_error=NULL WHERE id=?").bind(accepted, id).run();
    await metric(env, "notification_accepted", "", now);
  } else {
    const status = row.attempts >= 6 ? "failed" : "retry";
    await env.DB.prepare("UPDATE enquiries SET status=?, next_attempt=?, lease_until=0, last_error=? WHERE id=?").bind(status, now + Math.min(3600000, 60000 * 2 ** row.attempts), error, id).run();
    await metric(env, "notification_failed", "", now);
  }
}

export async function handle(request, env, ctx, fetcher = fetch) {
  const path = new URL(request.url).pathname.replace(/\/$/, "");
  if (request.method === "GET" && path === "/status") return reply(request, env, { enabled: ready(env), siteKey: ready(env) ? env.TURNSTILE_SITE_KEY : null });
  if (request.method === "GET" && path === "/health") {
    if (!ready(env)) return reply(request, env, { status: "disabled" }, 503);
    try {
      const row = await env.DB.prepare("SELECT COUNT(*) AS total FROM enquiries WHERE status='failed' OR (status IN ('pending','retry','sending') AND created_at<?)").bind(Date.now() - 3600000).first();
      return reply(request, env, { status: row.total ? "attention_required" : "ok" }, row.total ? 503 : 200);
    } catch { return reply(request, env, { status: "unavailable" }, 503); }
  }
  if (!origins(env).includes(request.headers.get("Origin"))) return reply(request, env, { error: "origin" }, 403);
  if (request.method === "OPTIONS") return reply(request, env, null, 204);
  if (request.method !== "POST" || !["/enquiries", "/events"].includes(path)) return reply(request, env, { error: "not_found" }, 404);
  if (!ready(env)) return reply(request, env, { error: "unavailable" }, 503);
  try {
    const now = Date.now();
    const ip = request.headers.get("CF-Connecting-IP");
    if (!ip) return reply(request, env, { error: "unavailable" }, 503);
    if (!await limit(env, `${path}:${ip}`, 900000, path === "/events" ? 60 : 20, now)) return reply(request, env, { error: "rate_limit" }, 429);
    if (path === "/events") {
      const input = await readJson(request, 512);
      if (!input || !["call_click", "whatsapp_click"].includes(input.event) || Object.keys(input).some((key) => !["event", "service"].includes(key)) || (input.service && !serviceNames.has(input.service))) return reply(request, env, { error: "invalid" }, 400);
      await metric(env, input.event, input.service || "", now);
      return reply(request, env, null, 204);
    }
    let input;
    try { input = validateEnquiry(await readJson(request, 16000)); } catch { return reply(request, env, { error: "invalid" }, 400); }
    if (!input) return reply(request, env, { error: "invalid" }, 400);
    const fingerprint = await digest(JSON.stringify(input.payload));
    const prior = await env.DB.prepare("SELECT digest FROM enquiries WHERE id=?").bind(input.id).first();
    if (prior) return reply(request, env, prior.digest === fingerprint ? { received: true, reference: input.id } : { error: "conflict" }, prior.digest === fingerprint ? 202 : 409);
    const check = await fetcher("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST", signal: AbortSignal.timeout(10000), headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ secret: env.TURNSTILE_SECRET_KEY, response: input.token, remoteip: ip, idempotency_key: input.id }),
    });
    const challenge = await check.json();
    const hostname = new URL(request.headers.get("Origin")).hostname;
    if (!check.ok || challenge.success !== true || challenge.hostname !== hostname || challenge.action !== "enquiry") return reply(request, env, { error: "verification" }, 400);
    if (!await limit(env, `email:${input.payload.email.toLowerCase()}`, 86400000, 5, now)) return reply(request, env, { error: "rate_limit" }, 429);
    const inserted = await env.DB.prepare("INSERT OR IGNORE INTO enquiries(id,digest,created_at,payload,next_attempt) VALUES (?,?,?,?,?) RETURNING id").bind(input.id, fingerprint, now, JSON.stringify(input.payload), now).first();
    if (inserted) {
      ctx.waitUntil(Promise.allSettled([metric(env, "enquiry_received", input.payload.service, now), deliver(env, input.id, fetcher, now)]));
    } else {
      const duplicate = await env.DB.prepare("SELECT digest FROM enquiries WHERE id=?").bind(input.id).first();
      if (duplicate?.digest !== fingerprint) return reply(request, env, { error: "conflict" }, 409);
    }
    return reply(request, env, { received: true, reference: input.id }, 202);
  } catch { return reply(request, env, { error: "unavailable" }, 503); }
}

const worker = {
  fetch: handle,
  async scheduled(_event, env) {
    if (!ready(env)) return;
    const now = Date.now();
    await env.DB.prepare("DELETE FROM rate_limits WHERE expires_at<?").bind(now).run();
    await env.DB.prepare("UPDATE enquiries SET status='failed', last_error='retry_window_expired' WHERE status IN ('pending','retry','sending') AND (created_at<? OR attempts>=6) AND lease_until<?").bind(now - 23 * 3600000, now).run();
    const rows = await env.DB.prepare("SELECT id FROM enquiries WHERE next_attempt<=? AND (status IN ('pending','retry') OR (status='sending' AND lease_until<?)) LIMIT 20").bind(now, now).all();
    for (const row of rows.results) await deliver(env, row.id, fetch, now);
  },
};
export default worker;
