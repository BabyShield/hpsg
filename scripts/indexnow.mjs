/**
 * Tell IndexNow (Bing and other participants) about the live sitemap.
 *
 * Run only after this commit is deployed, so the key file is reachable:
 *   node scripts/indexnow.mjs
 *
 * The script checks https://hpsg.co.uk/<key>.txt before it submits. It does
 * not submit when the key is missing, which is the state before deploy.
 */
import fs from "node:fs";

const HOST = "hpsg.co.uk";
const keyFile = fs
  .readdirSync("public")
  .find((name) => /^[0-9a-f]{8,128}\.txt$/i.test(name));

if (!keyFile) {
  console.error("No IndexNow key file in public/.");
  process.exit(1);
}

const key = keyFile.replace(/\.txt$/i, "");
const hosted = await fetch(`https://${HOST}/${keyFile}`);
const body = await hosted.text();
if (hosted.status !== 200 || body.trim() !== key) {
  console.error(
    `IndexNow key is not live at https://${HOST}/${keyFile} yet. Deploy first, then run this script again.`,
  );
  process.exit(1);
}

const sitemap = await fetch(`https://${HOST}/sitemap.xml`);
if (!sitemap.ok) {
  console.error(`Sitemap returned ${sitemap.status}.`);
  process.exit(1);
}
const xml = await sitemap.text();
const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
if (urlList.length === 0) {
  console.error("Sitemap contained no URLs.");
  process.exit(1);
}

const response = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: HOST,
    key,
    keyLocation: `https://${HOST}/${keyFile}`,
    urlList,
  }),
});

console.log(`IndexNow ${response.status} for ${urlList.length} URLs.`);
if (!response.ok) {
  console.error(await response.text());
  process.exit(1);
}
