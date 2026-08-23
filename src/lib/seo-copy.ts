import { areaTitleCue, serviceAreaCue } from "@/data/seo-cues";
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
  const name = servicePlainName(combo.service);
  const cue = serviceAreaCue(combo.service.slug, combo.area.slug)?.title;
  const base = `${name} in ${combo.area.name} ${combo.area.postcode}`;
  if (cue) return `${base} | ${cue} | HPSG`;
  return `${base} | HPSG`;
}

export function comboMetaDescription(lede: string, stored: string): string {
  const clean = publicCopy(lede).replace(/\s+/g, " ").trim();
  const storedClean = publicCopy(stored).replace(/\s+/g, " ").trim();
  const base = clean.length >= 80 ? clean : storedClean || clean;
  if (base.includes(site.phoneDisplay)) return clipMeta(base, 160);
  return clipMeta(`${base.replace(/\.$/, "")}. ${site.phoneDisplay}.`, 160);
}

export function areaMetaTitle(area: Area): string {
  const cue = areaTitleCue[area.slug];
  const base = `Kitchens and bathrooms in ${area.name} ${area.postcode}`;
  if (cue) return `${base} | ${cue} | HPSG`;
  return `${base} | HPSG`;
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
  const name = serviceSearchName(combo.service);
  const bare = name.replace(/^a /, "");
  const { name: area, postcode } = combo.area;
  const council = publicCopy(combo.area.council);
  const extras: Faq[] = [];

  extras.push({
    q: `What does ${name} in ${area} cost?`,
    a: `We do not publish a price list for ${bare} in ${area}. The room as found, access, extract, tenure and any conservation or freeholder process in ${postcode} change the figure. We visit, then send a written proposal against a defined scope. Telephone ${site.phoneDisplay}.`,
  });

  extras.push({
    q: `Do I need planning permission for ${name} in ${area}?`,
    a: `Internal ${bare} within existing rooms often sits outside planning permission. ${area} is ${council}. Conservation-area, listed-building, Article 4 and freeholder rules can still control extract, windows and elevations. We check the address rather than assuming permitted development.`,
  });

  extras.push({
    q: `Who carries out ${name} in ${area}?`,
    a: `${site.legalName} (company no. ${site.companyNumber}) carries out ${bare} in ${area} from ${addressSingleLine}. The work is survey-led and fully insured. We do not quote from photographs.`,
  });

  extras.push({
    q: `How do I get a quote for ${name} in ${area}?`,
    a: `Call ${site.phoneDisplay} or use the enquiry form. Tell us the ${area} ${postcode} property and the rooms in scope. We visit before we write a proposal.`,
  });

  extras.push({
    q: `Which council covers ${area}?`,
    a: `${area} ${postcode} sits with ${council}. Skip licences, scaffolding and conservation process follow that authority. We check the address rather than assuming one set of rules for North West London.`,
  });

  if (combo.service.slug !== "painting-decorating") {
    extras.push({
      q: `Is a licence to alter needed for ${bare} in ${area}?`,
      a: `Often, for kitchen or bathroom replacement in a leasehold ${area} flat. We can prepare drawings and a method statement. Consent is the freeholder's or agent's, not ours. Notices start in the lead-in, not after strip-out.`,
    });
  }

  if (combo.service.slug === "painting-decorating") {
    extras.push({
      q: `Can I stay in the property during painting and decorating in ${area}?`,
      a: `Yes. Occupied ${area} houses and conversion flats are ordinary decorating work. Rooms are sequenced so a kitchen, a bathroom and a bedroom remain usable. Empty is faster; occupied is the usual brief.`,
    });
  } else {
    extras.push({
      q: `Can I stay in the property during ${bare} in ${area}?`,
      a: `A single kitchen or bathroom in ${area} can often be done around you. A whole-flat programme is usually cleaner if you decant. We will say which, after we have seen the plan.`,
    });
  }

  if (combo.service.slug === "kitchen-renovation") {
    extras.push({
      q: `Do you fit kitchens in ${area}, or only design them?`,
      a: `We plan and fit the kitchen as one renovation: measured survey, first and second fix, cabinetry, worktops, appliances and handover in ${area} ${postcode}. We do not drop in a catalogue kitchen without seeing the building.`,
    });
    extras.push({
      q: `How long does a kitchen renovation in ${area} take?`,
      a: `A compact conversion galley in ${area} ${postcode} with services in the right place is commonly a small number of weeks on site. A family-house kitchen, a new extract run, or a licence to alter takes longer. The written programme follows the survey.`,
    });
    extras.push({
      q: `Do you plan extract as part of a kitchen renovation in ${area}?`,
      a: `Yes. The route is agreed at survey, not as a hole of convenience. Conservation-area and listed elevations in ${area} ${postcode} cannot always take a visible grille on the principal front. We will say so before cabinets come out.`,
    });
    extras.push({
      q: `Can you fit an island in a ${area} kitchen?`,
      a: `Only if the room and the services support it. Rear-return galleys and mansion-flat kitchens in ${area} usually will not. We will not draw an island that the stack, the extract and the floor cannot serve.`,
    });
    extras.push({
      q: `Do you scribe cabinets to chimney breasts in ${area}?`,
      a: `Yes. Period walls in ${area} ${postcode} are rarely square. We scribe the run to the breast rather than boxing it out as a convenience. Inserted kitchens in former bedrooms are laid out around the fabric that exists.`,
    });
  }

  if (combo.service.slug === "bathroom-renovation") {
    extras.push({
      q: `Do you renovate ensuites and shower rooms in ${area}?`,
      a: `Yes, where drainage can reach a stack and extract can be routed without an insensitive grille. Compact ensuites and internal bathrooms are ordinary ${area} work. A room that cannot drain honestly is not forced into a shower.`,
    });
    extras.push({
      q: `Do you tank bathrooms in ${area} as standard?`,
      a: `Wet areas are waterproofed to a documented system. In ${area} ${postcode} that usually means timber floors, a conversion half-landing, or a stacked mansion-flat bathroom over a neighbour. We do not treat tanking as optional in a shower or around a bath.`,
    });
    extras.push({
      q: `How long does a bathroom renovation in ${area} take?`,
      a: `A single bathroom with drainage in the right place is commonly a small number of weeks on site. Two bathrooms, a new extract run, or a licence to alter in ${area} takes longer. The written programme follows the survey.`,
    });
  }

  if (combo.service.slug === "painting-decorating") {
    extras.push({
      q: `Do you decorate occupied houses in ${area}?`,
      a: `Yes. Occupied ${area} houses and conversion flats are ordinary painting work. Prep, protection of joinery and a written coating specification come before colour. We do not treat a period room as a new-build wall.`,
    });
    extras.push({
      q: `How long does painting and decorating in ${area} take?`,
      a: `A conversion flat in ${area} ${postcode} can be a matter of days or a small number of weeks depending on prep. A family house, empty, is typically measured in weeks; occupied, longer, because rooms are sequenced around you. The survey produces the programme.`,
    });
    extras.push({
      q: `Do you paint original sash windows in ${area}?`,
      a: `Yes, where they are in scope, as joinery rather than as a cut-in. Failed cords, staff beads or putty in ${area} ${postcode} are not a paint item. Conservation-area and listed windows are checked on the address before we quote.`,
    });
    extras.push({
      q: `Do you specify lining paper when decorating in ${area}?`,
      a: `Where movement would telegraph through paint, yes. Conversion plaster and later patches in ${area} are the usual reason. Lining is written into the proposal, not slipped in on the day.`,
    });
    extras.push({
      q: `Do you spray or brush when decorating in ${area}?`,
      a: `Per room. Empty ${area} rooms can take spray where it is cleaner. Furnished period interiors, occupied conversions and mansion flats usually take brush and roller around original joinery. We do not run one method as a house slogan.`,
    });
  }

  if (combo.service.slug === "light-refurbishment") {
    extras.push({
      q: `Can you refurbish a whole flat in ${area}?`,
      a: `Yes, if the work stays within kitchens, bathrooms, decoration, flooring and joinery in the existing rooms. A ${area} project that removes walls, drops a floor or adds a storey is not light refurbishment; that sits with Hampstead Renovations.`,
    });
    extras.push({
      q: `How long does light refurbishment in ${area} take?`,
      a: `A conversion flat — kitchen, bathroom, decoration and floors — is commonly a matter of weeks on site once materials are dated. A storey of a family house, or a mansion apartment waiting on a licence to alter in ${area}, takes longer. The written programme follows the survey.`,
    });
    extras.push({
      q: `Do you sand existing floors as part of light refurbishment in ${area}?`,
      a: `Where the boards will take it. Failed subfloors, previous bitumen and boards too thin to sand are listed at survey in ${area} ${postcode}. New timber, engineered or stone finishes are specified in generic categories, not as brand partnerships.`,
    });
    extras.push({
      q: `Do you rewire or replumb as part of light refurbishment in ${area}?`,
      a: `Of the rooms in scope, yes — coordinated with the existing installation in ${area} ${postcode}. A speculative whole-house strip is not assumed. Hidden services are listed as provisional items after survey, not buried in a lump sum.`,
    });
    extras.push({
      q: `Do you protect common parts during light refurbishment in ${area}?`,
      a: `Yes. Shared stairs and hallways in ${area} conversions and mansion blocks are written into the method. The demise is one programme; the stair is a separate instruction unless the freeholder is the client.`,
    });
  }

  return extras;
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


