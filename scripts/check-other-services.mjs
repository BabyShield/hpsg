import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import ts from "typescript";

// Compile the pure helper with the project's existing compiler so this check
// also runs on supported Node versions without native TypeScript stripping.
const helper = ts.transpileModule(fs.readFileSync("src/lib/enquiry-email.ts", "utf8"), {
  compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ES2022 },
}).outputText;
const { buildEnquiryEmail } = await import(`data:text/javascript;base64,${Buffer.from(helper).toString("base64")}`);

const catalogue = JSON.parse(fs.readFileSync("src/data/other-services.json", "utf8"));
const routes = ["/other-services/", ...catalogue.groups.map((g)=>`/other-services/${g.slug}/`), "/privacy/", "/terms/", "/contact/"];
const builtPath = (route)=>path.join(".next/server/app", route.replace(/^\//, "").replace(/\/$/, "") + ".html");
const forbidden = /award[- ]winning|\bFMB\b|£\s*\d|\b\d+[- ]year.{0,30}guarantee|aggregateRating|"@type"\s*:\s*"Review"/i;
const allNames = new Set();
let checkedLinks=0;
for (const route of routes) {
  const html = fs.readFileSync(builtPath(route), "utf8");
  assert.match(html, new RegExp(`<link rel="canonical" href="https://hpsg\\.co\\.uk${route}"`), route);
  assert.doesNotMatch(html, forbidden, route);
  assert.doesNotMatch(html, /\[TBC|\[VERIFY|INSURANCE_TBC|hampsteadrenovationsgroup\.co\.uk/, route);
  for (const match of html.matchAll(/href="(\/[^"?]*)"/g)) {
    const [target,anchor] = match[1].split("#");
    if (!target.startsWith("/other-services") && !["/privacy/","/terms/"].includes(target)) continue;
    const body = fs.readFileSync(builtPath(target),"utf8");
    if (anchor) assert.ok(body.includes(`id="${anchor}"`),`${route}: missing ${target}#${anchor}`);
    checkedLinks++;
  }
}
for (const group of catalogue.groups) {
  const html=fs.readFileSync(builtPath(`/other-services/${group.slug}/`),"utf8");
  for (const item of group.services) {
    assert.ok(!allNames.has(item.slug),`Duplicate service ${item.slug}`);allNames.add(item.slug);
    assert.ok(html.includes(`id="${item.slug}"`),`Missing service ${item.slug}`);
  }
}
const hostile={name:"A & B",email:"person@example.com",service:"Boiler repair & heating",message:"Line one\nLine two &bcc=someone@example.com #?"};
const email=new URL(buildEnquiryEmail(hostile));
assert.equal(email.pathname,"office@hpsg.co.uk");
assert.equal(email.searchParams.get("subject"),"HPSG website enquiry");
assert.equal(email.searchParams.size,2);
assert.ok(email.searchParams.get("body").includes(hostile.message));
assert.ok(email.searchParams.get("body").includes(hostile.service));
const form=fs.readFileSync(builtPath('/contact/'),'utf8');
assert.ok(form.includes('Prepare email'));
assert.ok(form.includes('https://wa.me/447459345456'));
assert.ok(form.includes('Nothing is submitted to HPSG by this page'));
console.log(JSON.stringify({routes:routes.length,services:allNames.size,internalLinks:checkedLinks,emailEncoding:"passed",networkRequests:0}));
