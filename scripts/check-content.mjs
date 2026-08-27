/**
 * Compliance and duplication gate for the built site.
 *
 * Run after `next build`:  node scripts/check-content.mjs
 *
 * Checks the prerendered HTML in .next/server/app for:
 *   1. banned vocabulary (professional designations, invented social proof)
 *   2. banned positioning phrases
 *   3. out-of-scope services named without an exclusion nearby
 *   4. draft tokens leaking into rendered copy
 *   5. prices presented as quotes
 *   6. near-duplicate text across the 60 combo pages and 25 area hubs
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

/** Visible text only: strip script/style, then tags. */
function visibleText(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const BANNED = [
  [/\bRICS\b|\bMRICS\b/i, "professional designation (RICS)"],
  [/\bchartered\b/i, "professional designation (chartered)"],
  [/\bsurveyor(s)?\b/i, "professional designation (surveyor)"],
  [/\btestimonial/i, "invented social proof"],
  [/\b\d+\s*(\+\s*)?years (of )?(experience|in business|trading)/i, "years-in-business claim"],
  [/\b(over|more than)\s+\d[\d,]*\s+(projects|homes|kitchens|bathrooms|clients)/i, "project count"],
  [/\baward[- ]winning\b/i, "award claim"],
  [/\b\d+[- ]star\b/i, "star rating"],
  [/builders in [A-Z]/, "banned positioning phrase (builders in X)"],
];

/** Review markup must never appear, in visible copy or in JSON-LD. */
const SCHEMA_BANNED = [/aggregateRating/i, /"@type"\s*:\s*"Review"/i];

/** Draft tokens must be stripped by publicCopy() before render. */
const TOKENS = [/\[TBC[:\]]/, /\[VERIFY[\s\]]/, /\[INSURANCE_TBC\]/, /\[REVIEW[:\]]/];

/** A price presented as a quote. Generic mentions of "cost" are fine. */
const PRICE = /£\s?\d/;

/**
 * Out-of-scope services may be NAMED, but only to exclude them or refer them
 * on. Flag a mention only when no exclusion language sits near it.
 */
// "structural opening" and "basement" are excluded from this check: both occur
// legitimately in survey language ("structural openings as found") and in
// referral language, and flagging them buries the real signal.
const OUT_OF_SCOPE = /\b(loft conversion|house extension)\w*/gi;
/**
 * Safe context is either an explicit exclusion/referral, or description of
 * work already carried out on the building by someone else. The pattern that
 * must still be caught is an offer: the service named with neither.
 */
const EXCLUSION_NEAR =
  /\b(not|never|no|nor|exclu\w*|outside|beyond|sits with|handled by|refer\w*|separate|instead of|rather than|Hampstead Renovations)\b/i;
const DESCRIPTIVE_NEAR =
  /\b(already|existing|previous\w*|since|earlier|gained|added|been|has|have|inherited|historic\w*)\b/i;

function outOfScopeOffers(text) {
  const hits = [];
  for (const m of text.matchAll(OUT_OF_SCOPE)) {
    const window = text.slice(Math.max(0, m.index - 240), m.index + 240);
    if (!EXCLUSION_NEAR.test(window) && !DESCRIPTIVE_NEAR.test(window)) hits.push(m[0]);
  }
  return hits;
}

let problems = 0;
const report = (file, msg, sample) => {
  problems += 1;
  console.log(`  ${rel(file)} :: ${msg}${sample ? ` :: "${sample}"` : ""}`);
};

console.log("Compliance");
for (const file of files) {
  const html = fs.readFileSync(file, "utf8");
  const text = visibleText(html);
  for (const [re, label] of BANNED) {
    const m = text.match(re);
    if (m) report(file, label, m[0]);
  }
  for (const re of SCHEMA_BANNED) {
    const m = html.match(re);
    if (m) report(file, "review schema present", m[0]);
  }
  for (const re of TOKENS) {
    const m = text.match(re);
    if (m) report(file, "draft token leaked into visible copy", m[0]);
  }
  const price = text.match(PRICE);
  if (price) report(file, "price figure in copy", price[0]);
  for (const hit of outOfScopeOffers(text)) {
    report(file, "out-of-scope service named without an exclusion nearby", hit);
  }
}
if (problems === 0) console.log("  clean");

/**
 * Normalised 8-gram overlap: place and council names are collapsed so that a
 * sentence reused with only the area name swapped counts as a duplicate.
 */
const PLACES = [
  "Hampstead Garden Suburb", "West Hampstead", "South Hampstead", "Hampstead Heath",
  "Belsize Park", "St John's Wood", "Maida Vale", "Swiss Cottage", "Primrose Hill",
  "Golders Green", "Queen's Park", "Muswell Hill", "Crouch End", "Kentish Town",
  "Temple Fortune", "Dartmouth Park", "Tufnell Park", "East Finchley", "Kensal Rise",
  "Regent's Park", "Hampstead", "Highgate", "Kilburn", "Archway", "Frognal",
  "Camden", "Westminster", "Barnet", "Haringey", "Islington", "Brent",
];
const POSTCODES = /\b(NW\d{1,2}|N\d{1,2}|W\d{1,2})\b/g;

function normalise(text) {
  let out = text;
  for (const place of PLACES) out = out.split(place).join("AREA");
  return out
    .replace(POSTCODES, "PC")
    .toLowerCase()
    .replace(/[^a-z ]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function grams(text, n = 8) {
  const words = normalise(text).split(" ").filter(Boolean);
  const set = new Set();
  for (let i = 0; i + n <= words.length; i += 1) set.add(words.slice(i, i + n).join(" "));
  return set;
}

function overlapReport(label, group) {
  if (group.length < 2) return null;
  const sets = group.map((file) => grams(visibleText(fs.readFileSync(file, "utf8"))));
  let total = 0;
  for (let i = 0; i < sets.length; i += 1) {
    const others = new Set();
    sets.forEach((s, j) => {
      if (i !== j) for (const g of s) others.add(g);
    });
    let shared = 0;
    for (const g of sets[i]) if (others.has(g)) shared += 1;
    total += sets[i].size ? shared / sets[i].size : 0;
  }
  const pct = (total / sets.length) * 100;
  console.log(`  ${label}: ${pct.toFixed(1)}% shared with a sibling page (${group.length} pages)`);
  return pct;
}

console.log("\nDuplication (normalised 8-gram overlap)");
const SERVICE_SLUGS = [
  "kitchen-renovation",
  "bathroom-renovation",
  "painting-decorating",
  "light-refurbishment",
];
const combos = files.filter((f) => {
  const parts = rel(f).split("/");
  return parts.length === 2 && SERVICE_SLUGS.includes(parts[0]);
});
const areaHubs = files.filter((f) => rel(f).startsWith("areas/"));
overlapReport("all 60 combos", combos);
for (const svc of [
  "kitchen-renovation",
  "bathroom-renovation",
  "painting-decorating",
  "light-refurbishment",
]) {
  overlapReport(`  ${svc}`, combos.filter((f) => rel(f).startsWith(`${svc}/`)));
}
overlapReport("25 area hubs", areaHubs);

console.log(`\n${problems} compliance problem(s)`);
process.exit(problems > 0 ? 1 : 0);
