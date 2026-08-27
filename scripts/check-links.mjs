/**
 * Internal-link audit for the built site.
 *
 * Run after `next build`:  node scripts/check-links.mjs
 *
 * Reports how many pages link to each class of page. The combo pages are the
 * commercial landing pages, so they should not be starved of internal links
 * relative to the hubs.
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = ".next/server/app";
const files = [];
(function walk(dir) {
  for (const entry of fs.readdirSync(dir)) {
    const p = path.join(dir, entry);
    if (fs.statSync(p).isDirectory()) walk(p);
    else if (entry.endsWith(".html")) files.push(p);
  }
})(ROOT);

const rel = (f) => f.split(path.sep).join("/").replace(`${ROOT}/`, "").replace(/\.html$/, "");

/** Inbound page-count per href (a page linking twice counts once). */
const inbound = new Map();
for (const file of files) {
  const html = fs.readFileSync(file, "utf8");
  const seen = new Set();
  for (const m of html.matchAll(/href="(\/[^"#?]*)"/g)) seen.add(m[1]);
  for (const href of seen) inbound.set(href, (inbound.get(href) ?? 0) + 1);
}

const SERVICES = [
  "kitchen-renovation",
  "bathroom-renovation",
  "painting-decorating",
  "light-refurbishment",
];

const classify = (r) => {
  const parts = r.split("/");
  if (r === "index") return "home";
  if (parts[0] === "areas" && parts.length === 2) return "area hub";
  if (parts.length === 2 && SERVICES.includes(parts[0])) return "combo";
  if (parts.length === 1 && SERVICES.includes(parts[0])) return "service hub";
  return null;
};

const groups = {};
for (const file of files) {
  const r = rel(file);
  const kind = classify(r);
  if (!kind) continue;
  const href = `/${r === "index" ? "" : `${r}/`}`;
  const count = inbound.get(href) ?? 0;
  (groups[kind] = groups[kind] || []).push({ href, count });
}

console.log(`Inbound internal links (of ${files.length} built pages)\n`);
for (const [kind, entries] of Object.entries(groups)) {
  entries.sort((a, b) => a.count - b.count);
  const counts = entries.map((e) => e.count);
  const min = counts[0];
  const max = counts[counts.length - 1];
  const avg = counts.reduce((a, b) => a + b, 0) / counts.length;
  console.log(
    `${kind.padEnd(12)} ${String(entries.length).padStart(3)} pages  min ${String(min).padStart(3)}  avg ${avg.toFixed(0).padStart(3)}  max ${String(max).padStart(3)}`,
  );
  if (min < 10) {
    const worst = entries.filter((e) => e.count === min).slice(0, 4);
    console.log(`             fewest: ${worst.map((e) => `${e.href} (${e.count})`).join(", ")}`);
  }
}

/** Orphans: built pages nothing links to. */
const orphans = files
  .map(rel)
  .filter((r) => classify(r))
  .filter((r) => (inbound.get(`/${r === "index" ? "" : `${r}/`}`) ?? 0) === 0);
console.log(`\n${orphans.length} orphaned page(s)${orphans.length ? `: ${orphans.join(", ")}` : ""}`);
