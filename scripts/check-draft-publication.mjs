import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import ts from "typescript";
import { normalise, visibleText } from "./lib/built-text.mjs";

const source = fs.readFileSync("src/lib/public-copy.ts", "utf8");
const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ES2022 } }).outputText;
const { publicCopy } = await import(`data:text/javascript;base64,${Buffer.from(compiled).toString("base64")}`);
assert.equal(publicCopy("An unverified assertion. [VERIFY source]"), "");
assert.equal(publicCopy("A claim with [TBC: evidence] in its middle."), "");
assert.equal(publicCopy("A reviewed fact."), "A reviewed fact.");
assert.equal(publicCopy("Fully insured. [INSURANCE_TBC]"), "Fully insured.");

const drafts = [];
for (const file of fs.readdirSync("src/data").filter((name) => name.endsWith(".ts"))) {
  const filename = `src/data/${file}`;
  const text = fs.readFileSync(filename, "utf8");
  const tree = ts.createSourceFile(filename, text, ts.ScriptTarget.Latest, true);
  function visit(node) {
    if ((ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) && /\[(VERIFY|TBC|REVIEW)(?:\b|:)/i.test(node.text)) {
      assert.equal(publicCopy(node.text), "", filename);
      drafts.push({ file: filename, line: tree.getLineAndCharacterOfPosition(node.getStart()).line + 1, text: node.text });
    }
    ts.forEachChild(node, visit);
  }
  visit(tree);
}
fs.mkdirSync("docs", { recursive: true });
fs.writeFileSync("docs/content-verification-queue.json", JSON.stringify({ policy: "Withheld until checked against a source and approved. Removing a marker alone is not verification.", statements: drafts }, null, 2) + "\n");

const claims = [...new Set(drafts.map((item) => normalise(item.text.replace(/\[(?:VERIFY|TBC|REVIEW)[^\]]*\]/gi, ""))).filter((text) => text.length >= 60))];
const files = [];
function walk(directory) {
  for (const item of fs.readdirSync(directory, { withFileTypes: true })) {
    const filename = path.join(directory, item.name);
    if (item.isDirectory()) walk(filename);
    else if (filename.endsWith(".html")) files.push(filename);
  }
}
walk(".next/server/app");
const violations = [];
for (const filename of files) {
  const html = fs.readFileSync(filename, "utf8");
  const structured = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script[^>]*>/gi)].map((match) => match[1]).join(" ");
  const visible = visibleText(html);
  const structuredText = normalise(structured);
  for (const claim of claims) if (visible.includes(claim) || structuredText.includes(claim)) violations.push({ filename, claim });
}
assert.equal(violations.length, 0, JSON.stringify(violations.slice(0, 12), null, 2));
console.log(JSON.stringify({ withheldStatements: drafts.length, builtPages: files.length, unverifiedPublicationLeaks: violations.length }));
