import { addressSingleLine, site } from "@/data/site";
import type { Area, Combo, Faq, Service } from "@/data/types";

import { publicCopy } from "./public-copy";

const AREA_HOOKS: Record<string, string> = {
  hampstead: "conversion, village-house and listed-fabric work",
  "west-hampstead": "rear-return kitchens and conversion flats off West End Lane",
  "belsize-park": "inserted kitchens in stucco conversions and avenue mansion flats",
  "st-johns-wood": "compact mansion-flat rooms on original risers",
  "maida-vale": "1890s mansion-block rear kitchens and canal-side houses",
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

export function clipMeta(text: string, max = 158): string {
  const clean = publicCopy(text).replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const slice = clean.slice(0, max - 1);
  const breakAt = slice.lastIndexOf(" ");
  return `${slice.slice(0, breakAt > 80 ? breakAt : max - 1)}…`;
}

export function areaHook(area: Area): string {
  return AREA_HOOKS[area.slug] ?? `work in the housing stock of ${area.name} ${area.postcode}`;
}

export function comboOpening(combo: Combo): string {
  return `${combo.service.name} in ${combo.area.name} (${combo.area.postcode}) is ${areaHook(combo.area)}, carried out from ${addressSingleLine}. Addresses here sit with ${publicCopy(combo.area.council)}. We visit the property before we write a proposal; we do not quote from photographs.`;
}

export function comboMetaTitle(combo: Combo): string {
  return `${combo.service.name} in ${combo.area.name} ${combo.area.postcode} | HPSG`;
}

export function areaMetaTitle(area: Area): string {
  return `Kitchens, bathrooms and painting in ${area.name} ${area.postcode} | HPSG`;
}

export function areaMetaDescription(area: Area): string {
  const hook = areaHook(area);
  const hooked = hook.charAt(0).toUpperCase() + hook.slice(1);
  return clipMeta(
    `${area.name} ${area.postcode}: kitchen renovation, bathroom renovation, painting and light refurbishment. ${hooked}. ${site.phoneDisplay}.`,
    180,
  );
}

export function comboSearchFaqs(combo: Combo): Faq[] {
  const service = combo.service.name.toLowerCase();
  const { name: area, postcode } = combo.area;
  const council = publicCopy(combo.area.council);
  const extras: Faq[] = [];

  extras.push({
    q: `What does ${service} in ${area} cost?`,
    a: `We do not publish a price list for ${service} in ${area}. The room as found, access, extract, tenure and any conservation or freeholder process in ${postcode} change the figure. We visit, then send a written proposal against a defined scope. Telephone ${site.phoneDisplay}.`,
  });

  extras.push({
    q: `Do I need planning permission for ${service} in ${area}?`,
    a: `Internal ${service} within existing rooms often sits outside planning permission. ${area} is ${council}. Conservation-area, listed-building, Article 4 and freeholder rules can still control extract, windows and elevations. We check the address rather than assuming permitted development.`,
  });

  extras.push({
    q: `Who carries out ${service} in ${area}?`,
    a: `${site.legalName} (company no. ${site.companyNumber}) carries out ${service} in ${area} from ${addressSingleLine}. The work is survey-led and fully insured. We do not quote from photographs.`,
  });

  if (combo.service.slug === "kitchen-renovation") {
    extras.push({
      q: `Do you fit kitchens in ${area}, or only design them?`,
      a: `We plan and fit the kitchen as one renovation: measured survey, first and second fix, cabinetry, worktops, appliances and handover in ${area} ${postcode}. We do not drop in a catalogue kitchen without seeing the building.`,
    });
  }

  if (combo.service.slug === "bathroom-renovation") {
    extras.push({
      q: `Do you renovate ensuites and shower rooms in ${area}?`,
      a: `Yes, where drainage can reach a stack and extract can be routed without an insensitive grille. Compact ensuites and internal bathrooms are ordinary ${area} work. A room that cannot drain honestly is not forced into a shower.`,
    });
  }

  if (combo.service.slug === "painting-decorating") {
    extras.push({
      q: `Do you decorate occupied houses in ${area}?`,
      a: `Yes. Occupied ${area} houses and conversion flats are ordinary painting work. Prep, protection of joinery and a written coating specification come before colour. We do not treat a period room as a new-build wall.`,
    });
  }

  if (combo.service.slug === "light-refurbishment") {
    extras.push({
      q: `Can you refurbish a whole flat in ${area}?`,
      a: `Yes, if the work stays within kitchens, bathrooms, decoration, flooring and joinery in the existing rooms. A ${area} project that removes walls, drops a floor or adds a storey is not light refurbishment; that sits with Hampstead Renovations.`,
    });
  }

  return extras;
}

export function localizeServiceFaq(faq: Faq, combo: Combo): Faq {
  return {
    q: faq.q,
    a: `${publicCopy(faq.a)} In ${combo.area.name} (${combo.area.postcode}) that is read against ${publicCopy(combo.area.council)} and the building as found.`,
  };
}

export function areaSearchFaqs(area: Area): Faq[] {
  return [
    {
      q: `What property services do you offer in ${area.name}?`,
      a: `Kitchen renovation, bathroom renovation, painting and decorating, and light refurbishment in ${area.name}, ${area.postcode}. The work is ${areaHook(area)}. Structural openings, loft conversions and extensions sit with Hampstead Renovations, not on this site.`,
    },
    {
      q: `How do I get a quote for work in ${area.name}?`,
      a: `Call ${site.phoneDisplay} or use the enquiry form. Tell us the ${area.name} property and the rooms in scope. We visit before we write a proposal.`,
    },
    {
      q: `Is ${area.name} covered from the Hampstead office?`,
      a: `Yes. ${site.legalName} is based at ${addressSingleLine}. ${area.name} ${area.postcode} is on the North West London list we work from that office.`,
    },
    {
      q: `Can you do a kitchen and bathroom in the same programme in ${area.name}?`,
      a: `Yes. That is ordinary ${area.name} work: wet rooms first, decoration last, one account. Separate contractors sequencing themselves is how finishes get damaged.`,
    },
    {
      q: `Do I need to move out for work in ${area.name}?`,
      a: `A single kitchen or bathroom in ${area.name} can often be done around you. A whole-flat light refurbishment is usually cleaner if you decant. We will say which, after we have seen the plan.`,
    },
  ];
}

export function serviceSearchFaqs(service: Service): Faq[] {
  const name = service.name.toLowerCase();
  return [
    {
      q: `What does ${name} in North West London cost?`,
      a: `We do not publish standard prices for ${name}. Period fabric, access, extract, tenure and consent in Hampstead, St John's Wood, Maida Vale and the wider list change the figure. We visit, then write a proposal against a defined scope. ${site.phoneDisplay}.`,
    },
    {
      q: `Do I need planning permission for ${name} in a conservation area?`,
      a: `Internal ${name} within existing rooms often does not need planning permission. Conservation-area, listed-building, Article 4 and freeholder rules still apply to extract, windows and elevations. We check the address. We do not assume permitted development in Hampstead, Highgate or Hampstead Garden Suburb.`,
    },
    {
      q: `Which North West London neighbourhoods do you cover for ${name}?`,
      a: `${service.name} pages on this site cover Hampstead, West Hampstead, Belsize Park, St John's Wood, Maida Vale, Swiss Cottage, Primrose Hill, Highgate and the wider list. If the property sits just outside those pages, contact us and we will say whether we can take it on.`,
    },
  ];
}


