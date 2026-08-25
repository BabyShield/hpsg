import { serviceAreaCue } from "@/data/seo-cues";
import { addressSingleLine, site } from "@/data/site";
import type { Area, Combo, Faq, Service } from "@/data/types";

import { publicCopy } from "./public-copy";

const AREA_HOOKS: Record<string, string> = {
  hampstead: "conversion, village-house and listed-fabric work",
  "west-hampstead": "rear-return conversions off West End Lane",
  "belsize-park": "stucco conversions and avenue mansion flats",
  "st-johns-wood": "mansion-flat apartments on original risers",
  "maida-vale": "1890s mansion blocks and canal-side houses",
  "swiss-cottage": "mansion flats and conversions on the Finchley Road corridor",
  "primrose-hill": "park-facing terraces, lower-ground kitchens and Article 4 streets",
  highgate: "village houses, slope conversions and split-borough conservation fabric",
  "golders-green": "Edwardian and inter-war family houses on the Barnet side",
  "queens-park": "late-Victorian terraces and Estate cottages across Brent and Westminster",
  "muswell-hill": "Edwardian family houses and Broadway conversions",
  "crouch-end": "Victorian conversions around the Broadway",
  "kentish-town": "Victorian conversion flats and stacked half-landing bathrooms",
  kilburn: "conversion flats on the Camden and Brent boundary",
  "hampstead-garden-suburb": "Arts and Crafts houses under Trust and Barnet rules",
  "hampstead-heath": "Heath-edge family houses and Vale of Health lanes",
  "regents-park": "listed terraces and estate-controlled mansion flats",
  archway: "Islington conversions on the Highgate slopes",
  frognal: "large converted houses on the hill between Finchley Road and the village",
  "temple-fortune": "Barnet family houses beside the Suburb boundary",
  "dartmouth-park": "conservation-area family houses on the Highgate slope",
  "tufnell-park": "Camden and Islington conversion streets",
  "east-finchley": "Barnet family houses toward the Suburb and Highgate",
  "kensal-rise": "Victorian terraces and conversion flats west of Queen's Park",
  "south-hampstead": "mansion flats and the South Hampstead Conservation Area",
};

/**
 * Trim copy to a meta-description budget without an ellipsis: prefer a
 * sentence boundary, fall back to a word boundary, always end on a full stop.
 */
export function trimMeta(text: string, max = 158): string {
  const clean = publicCopy(text).replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const slice = clean.slice(0, max);
  const sentence = slice.lastIndexOf(". ");
  if (sentence > max * 0.6) return slice.slice(0, sentence + 1);
  const word = slice.lastIndexOf(" ");
  return `${slice.slice(0, word).replace(/[,;:]$/, "")}.`;
}

const PHONE_TAIL = ` ${site.phoneDisplay}.`;

export function areaHook(area: Area): string {
  return AREA_HOOKS[area.slug] ?? `work in the housing stock of ${area.name} ${area.postcode}`;
}

function serviceSearchName(service: Service): string {
  if (service.slug === "kitchen-renovation") return "a kitchen renovation";
  if (service.slug === "bathroom-renovation") return "a bathroom renovation";
  if (service.slug === "painting-decorating") return "painting and decorating";
  return service.name.toLowerCase();
}

export function servicePlainName(service: Service): string {
  if (service.slug === "kitchen-renovation") return "Kitchen renovation";
  if (service.slug === "bathroom-renovation") return "Bathroom renovation";
  if (service.slug === "painting-decorating") return "Painting and decorating";
  return "Light refurbishment";
}

/** Title-bar variant: ampersand keeps the longest titles inside ~60 chars. */
function serviceTitleName(service: Service): string {
  if (service.slug === "painting-decorating") return "Painting & decorating";
  return servicePlainName(service);
}

export function comboOpening(combo: Combo): string {
  const cue = serviceAreaCue(combo.service.slug, combo.area.slug);
  const council = publicCopy(combo.area.council);
  if (cue) {
    return `${cue.opening} Addresses sit with ${council}. We visit from ${addressSingleLine}; we do not quote from photographs.`;
  }
  return `${servicePlainName(combo.service)} in ${combo.area.name} follows the housing as found. Addresses sit with ${council}. We visit from ${addressSingleLine}; we do not quote from photographs.`;
}

export function comboIncludesLede(combo: Combo): string {
  const cue = serviceAreaCue(combo.service.slug, combo.area.slug);
  const typical = cue ? cue.title.toLowerCase() : areaHook(combo.area);
  return `The list is the core of a typical instruction. In ${combo.area.name} ${combo.area.postcode} that usually means ${typical}. The written proposal after survey is the contract scope.`;
}

export function comboProcessLede(combo: Combo): string {
  const cue = serviceAreaCue(combo.service.slug, combo.area.slug);
  const council = publicCopy(combo.area.council);
  const typical = cue ? cue.title.toLowerCase() : `the housing of ${combo.area.name}`;
  return `Visit, written proposal, then the rooms in order. In ${combo.area.name} that order has to absorb ${typical} and ${council} process. We do not start from photographs.`;
}

export function comboMetaTitle(combo: Combo): string {
  return `${serviceTitleName(combo.service)} in ${combo.area.name} ${combo.area.postcode} | ${site.shortName}`;
}

export function comboMetaDescription(lede: string, stored: string): string {
  const storedClean = publicCopy(stored).replace(/\s+/g, " ").trim();
  const base = storedClean || publicCopy(lede).replace(/\s+/g, " ").trim();
  if (base.includes(site.phoneDisplay)) return trimMeta(base, 158);
  const body = trimMeta(base, 155 - PHONE_TAIL.length).replace(/\.$/, "");
  return `${body}.${PHONE_TAIL}`;
}

export function areaMetaTitle(area: Area): string {
  return `Kitchens & Bathrooms in ${area.name} ${area.postcode} | ${site.shortName}`;
}

export function areaMetaDescription(area: Area): string {
  const hook = areaHook(area);
  const hooked = hook.charAt(0).toUpperCase() + hook.slice(1);
  const lead = `${area.name} ${area.postcode}: kitchen renovation, bathroom renovation, painting and light refurbishment.`;
  const body = trimMeta(`${lead} ${hooked}.`, 160 - PHONE_TAIL.length).replace(/\.$/, "");
  return `${body}.${PHONE_TAIL}`;
}

export function serviceSearchFaqs(service: Service): Faq[] {
  const name = serviceSearchName(service);
  return [
    {
      q: `What does ${name} in North West London cost?`,
      a: `We do not publish standard prices for ${name}. Period fabric, access, extract, tenure and consent in Hampstead, St John's Wood, Maida Vale and the wider list change the figure. We visit, then write a proposal against a defined scope. ${site.phoneDisplay}.`,
    },
    {
      q: `Do I need planning permission for ${name} in a conservation area?`,
      a: `Internal ${name.replace(/^a /, "")} within existing rooms often does not need planning permission. Conservation-area, listed-building, Article 4 and freeholder rules still apply to extract, windows and elevations. We check the address. We do not assume permitted development in Hampstead, Highgate or Hampstead Garden Suburb.`,
    },
    {
      q: `Which North West London neighbourhoods do you cover for ${name.replace(/^a /, "")}?`,
      a: `${service.name} pages on this site cover Hampstead, West Hampstead, Belsize Park, St John's Wood, Maida Vale, Swiss Cottage, Primrose Hill, Highgate and the wider list. If the property sits just outside those pages, contact us and we will say whether we can take it on.`,
    },
  ];
}


