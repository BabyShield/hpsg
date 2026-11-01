import { areas } from "@/data/areas";
import { guides } from "@/data/guides";
import { otherServiceGroups } from "@/data/other-services";
import { services } from "@/data/services";
import { addressSingleLine, site } from "@/data/site";
import { getCombos } from "@/lib/matrix";
import { publicCopy } from "@/lib/public-copy";
import { absoluteUrl } from "@/lib/schema";

function sentence(text: string | undefined | null): string {
  if (!text) return "";
  return publicCopy(text).replace(/\s+/g, " ").trim();
}

function bullet(title: string, url: string, description?: string): string {
  const detail = description ? sentence(description) : "";
  return detail ? `- [${title}](${url}): ${detail}` : `- [${title}](${url})`;
}

function plainFile(path: string): string {
  return `${site.url}${path}`;
}

function serviceName(slug: string, fallback: string): string {
  if (slug === "painting-decorating") return "Painting and decorating";
  if (slug === "kitchen-renovation") return "Kitchen renovation";
  if (slug === "bathroom-renovation") return "Bathroom renovation";
  if (slug === "light-refurbishment") return "Light refurbishment";
  return fallback;
}

/**
 * llms.txt index, following https://llmstxt.org/. Facts are taken from the
 * same source as the pages. Draft markers are withheld by publicCopy.
 */
export function buildLlmsTxt(): string {
  const lines: string[] = [
    `# ${site.tradingName}`,
    "",
    `> ${site.tagline}. ${site.legalName}, company number ${site.companyNumber}, registered in England and Wales.`,
    "",
    `${site.legalName} was incorporated on 17 August 2026. The office is ${addressSingleLine}. Telephone ${site.phoneDisplay}. Email ${site.email}. The company is fully insured. A written proposal follows a visit. The site does not publish prices, reviews, star ratings or project counts.`,
    "",
    "The four main services are kitchen renovation, bathroom renovation, painting and decorating, and light refurbishment of existing rooms. Light refurbishment covers the kitchen, bathroom, decoration and floors in rooms that already exist. It does not include forming openings, loft conversions, extensions or basements. Wider work is listed under Other services. The written proposal identifies the business responsible for a particular job.",
    "",
    `A longer plain-text digest is at ${plainFile("/llms-full.txt")}.`,
    "",
    "## Services",
    "",
    ...services.map((service) =>
      bullet(
        serviceName(service.slug, service.name),
        absoluteUrl(`/${service.slug}/`),
        sentence(service.summary),
      ),
    ),
    "",
    "## Neighbourhoods",
    "",
    ...areas.map((area) => {
      const council = sentence(area.council);
      const stock = sentence(area.housingStock);
      return bullet(
        `${area.name} ${area.postcode}`,
        absoluteUrl(`/areas/${area.slug}/`),
        [council, stock].filter(Boolean).join(" "),
      );
    }),
    "",
    "## Service in each neighbourhood",
    "",
    ...getCombos().map((combo) =>
      bullet(
        `${serviceName(combo.service.slug, combo.service.name)} in ${combo.area.name} ${combo.area.postcode}`,
        absoluteUrl(`/${combo.service.slug}/${combo.area.slug}/`),
      ),
    ),
    "",
    "## Guides",
    "",
    ...guides.map((guide) =>
      bullet(guide.title, absoluteUrl(`/guides/${guide.slug}/`), sentence(guide.lede)),
    ),
    "",
    "## Other services",
    "",
    bullet(
      "Other services",
      absoluteUrl("/other-services/"),
      "The wider catalogue of the same company. Scope and the business responsible are confirmed in the proposal.",
    ),
    ...otherServiceGroups.map((group) =>
      bullet(group.name, absoluteUrl(`/other-services/${group.slug}/`), sentence(group.intro)),
    ),
    "",
    "## Company",
    "",
    bullet("About", absoluteUrl("/about/"), `${site.legalName}, company number ${site.companyNumber}.`),
    bullet("Contact", absoluteUrl("/contact/"), `${site.phoneDisplay}. ${site.email}. ${addressSingleLine}.`),
    bullet("Areas we cover", absoluteUrl("/areas/"), "Twenty-five neighbourhoods in North West London."),
    bullet("Work", absoluteUrl("/projects/"), "Typical rooms. Named case studies are published only from completed instructions."),
    bullet("Privacy", absoluteUrl("/privacy/")),
    bullet("Website terms", absoluteUrl("/terms/")),
    bullet(
      "Companies House",
      site.companiesHouseUrl,
      `Company number ${site.companyNumber}. Incorporated 17 August 2026.`,
    ),
    "",
  ];
  return lines.join("\n");
}

/** Longer digest for assistants that fetch one file. Pages remain the source of detail. */
export function buildLlmsFullTxt(): string {
  const lines: string[] = [
    buildLlmsTxt().trimEnd(),
    "",
    "## How an instruction runs",
    "",
    "The company visits the property, then writes a proposal. It does not quote from photographs. There is no price list on the site.",
    "",
  ];

  for (const service of services) {
    const name = serviceName(service.slug, service.name);
    lines.push(`## ${name}`, "");
    const summary = sentence(service.summary);
    const hero = sentence(service.heroLine);
    if (summary) lines.push(summary, "");
    if (hero && hero !== summary) lines.push(hero, "");
    lines.push(`Page: ${absoluteUrl(`/${service.slug}/`)}`, "", "Sequence:", "");
    service.processSteps.forEach((step, index) => {
      const title = sentence(step.title);
      const text = sentence(step.text);
      if (!title) return;
      lines.push(`${index + 1}. ${title}${text ? `. ${text}` : ""}`);
    });
    lines.push("");
  }

  lines.push("## Neighbourhood housing", "");
  for (const area of areas) {
    const stock = sentence(area.housingStock);
    const council = sentence(area.council);
    lines.push(`### ${area.name} ${area.postcode}`, "");
    lines.push(
      `${council ? `${council}. ` : ""}Page: ${absoluteUrl(`/areas/${area.slug}/`)}`,
    );
    if (stock) lines.push("", stock);
    const combos = getCombos().filter((combo) => combo.area.slug === area.slug);
    if (combos.length > 0) {
      lines.push("", "Local service pages:");
      for (const combo of combos) {
        lines.push(
          `- ${serviceName(combo.service.slug, combo.service.name)}: ${absoluteUrl(`/${combo.service.slug}/${combo.area.slug}/`)}`,
        );
      }
    }
    lines.push("");
  }

  lines.push("## Guides in full", "");
  for (const guide of guides) {
    lines.push(`### ${guide.title}`, "");
    lines.push(`Updated ${guide.dateModified}. ${absoluteUrl(`/guides/${guide.slug}/`)}`, "");
    const lede = sentence(guide.lede);
    if (lede) lines.push(lede, "");
    for (const section of guide.sections) {
      const heading = sentence(section.heading);
      const paragraphs = section.paragraphs.map(sentence).filter(Boolean);
      if (!heading || paragraphs.length === 0) continue;
      lines.push(`#### ${heading}`, "");
      for (const paragraph of paragraphs) lines.push(paragraph, "");
    }
  }

  lines.push("## Other services catalogue", "");
  lines.push(
    "These pages belong to the same company. They are not a separate legal entity. The proposal for a job names the business responsible.",
    "",
  );
  for (const group of otherServiceGroups) {
    lines.push(`### ${group.name}`, "");
    lines.push(absoluteUrl(`/other-services/${group.slug}/`), "");
    const intro = sentence(group.intro);
    if (intro) lines.push(intro, "");
    for (const item of group.services) {
      const detail = sentence(item.detail);
      lines.push(detail ? `- ${item.name}: ${detail}` : `- ${item.name}`);
    }
    lines.push("");
  }

  return `${lines.join("\n").trimEnd()}\n`;
}
