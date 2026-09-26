import fs from "node:fs";
const targets = [
  ["https://hampsteadrenovationsgroup.co.uk/", 410],
  ["https://www.hampsteadrenovationsgroup.co.uk/", 410],
  ["https://hampsteadrenovationsgroup.co.uk/api/lead", 410],
  ["https://hampsteadrenovationsgroup.co.uk/sitemap.xml", 410],
  ["https://hpsg.co.uk/", 200],
];
const checks = await Promise.all(targets.map(async ([url, expected]) => {
  try {
    const response = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0 HPSG-availability-check" }, redirect: "manual", signal: AbortSignal.timeout(15000) });
    const robots = response.headers.get("X-Robots-Tag") || "";
    await response.body?.cancel();
    return { url, expected, status: response.status, robots, passed: response.status === expected && (expected !== 410 || robots.includes("noindex")) };
  } catch { return { url, expected, status: null, passed: false }; }
}));
const report = { checkedAt: new Date().toISOString(), checks, passed: checks.every((check) => check.passed) };
fs.mkdirSync("docs", { recursive: true });
fs.writeFileSync("docs/live-withdrawal-check.json", JSON.stringify(report, null, 2) + "\n");
console.log(JSON.stringify(report, null, 2));
if (!report.passed) process.exitCode = 1;
