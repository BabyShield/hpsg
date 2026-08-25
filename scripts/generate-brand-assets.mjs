/**
 * Generates raster brand assets from the canonical monogram artwork:
 *   - src/app/apple-icon.png  (180x180 touch icon)
 *   - public/images/logo.png  (512x512 square logo for schema.org / manifest)
 *
 * Run: node scripts/generate-brand-assets.mjs
 * The monogram is drawn as geometry (no font dependency) and must stay in
 * step with src/app/icon.svg.
 */
import { writeFile } from "node:fs/promises";
import sharp from "sharp";

const monogram = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" fill="#16263F"/>
  <rect width="64" height="2.5" fill="#B68A3E"/>
  <g fill="#F7F4EE">
    <rect x="19" y="16" width="9" height="2"/>
    <rect x="36" y="16" width="9" height="2"/>
    <rect x="21.5" y="16" width="4" height="32"/>
    <rect x="38.5" y="16" width="4" height="32"/>
    <rect x="25.5" y="30.25" width="13" height="3.5"/>
    <rect x="19" y="46" width="9" height="2"/>
    <rect x="36" y="46" width="9" height="2"/>
  </g>
</svg>
`;

const svg = Buffer.from(monogram);

await writeFile(
  "src/app/apple-icon.png",
  await sharp(svg, { density: 72 * (180 / 64) }).resize(180, 180).png().toBuffer(),
);
await writeFile(
  "public/images/logo.png",
  await sharp(svg, { density: 72 * (512 / 64) }).resize(512, 512).png().toBuffer(),
);
console.log("Wrote src/app/apple-icon.png and public/images/logo.png");
