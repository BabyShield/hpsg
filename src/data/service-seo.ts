import type { Faq, ServiceSlug } from "./types";

export type ServiceSeo = {
  audienceH2: string;
  housingH2: string;
  includesH2: string;
  processH2: string;
  specH2: string;
  areasH2: string;
  consentH2: string;
  questionsH2: string;
  costH2: string;
  costParas: string[];
  who: string;
  extraFaqs: Faq[];
};

export function comboHeadings(slug: ServiceSlug, area: string) {
  switch (slug) {
    case "kitchen-renovation":
      return {
        rooms: `Galleys, chimney breasts and compact kitchens in ${area}`,
        working: `Extract, licence and access in ${area}`,
        spec: `How a ${area} kitchen renovation is specified`,
        includes: "What a typical kitchen instruction includes",
        process: "How a kitchen programme runs",
        questions: `Kitchen renovation questions in ${area}`,
        facts: `Local facts that shape a ${area} kitchen`,
        audience: `Who kitchen renovation in ${area} is for`,
        failures: `What has to be right in a ${area} kitchen`,
        survey: `What a visit settles before a ${area} kitchen is priced`,
        materials: `Worktops, cabinetry and finishes for ${area} kitchens`,
        programme: `A ${area} kitchen, stage by stage`,
        access: `Deliveries, parking and the stair in ${area}`,
        cost: `What moves the figure on a ${area} kitchen`,
        living: `Cooking, dust and daily life while the ${area} kitchen is out`,
        handover: `Handover, snagging and the year after in ${area}`,
        pitfalls: `How a ${area} kitchen goes wrong, and what prevents it`,
      };
    case "bathroom-renovation":
      return {
        rooms: `Family bathrooms, ensuites and shower rooms in ${area}`,
        working: `Bathroom tanking, extract and licence in ${area}`,
        spec: `How a ${area} bathroom is specified`,
        includes: "What a typical bathroom instruction includes",
        process: "How a bathroom programme runs",
        questions: `Bathroom questions in ${area}`,
        facts: `Local facts that shape a ${area} bathroom`,
        audience: `Who bathroom renovation in ${area} is for`,
        failures: `What has to be right in a ${area} bathroom`,
        survey: `What a visit settles before a ${area} bathroom is priced`,
        materials: `Tanking, tiling and sanitaryware in ${area}`,
        programme: `A ${area} bathroom, stage by stage`,
        access: `Deliveries, parking and the stair in ${area}`,
        cost: `What moves the figure on a ${area} bathroom`,
        living: `Washing, dust and daily life while the ${area} bathroom is out`,
        handover: `Handover, watertightness and the year after in ${area}`,
        pitfalls: `How a ${area} bathroom fails, and what prevents it`,
      };
    case "painting-decorating":
      return {
        rooms: `Occupied houses, sashes and original joinery in ${area}`,
        working: `Painters and decorators in ${area}: prep, conservation and occupied homes`,
        spec: `How decorating is specified in ${area}`,
        includes: "What a typical decorating instruction includes",
        process: "How a decorating programme runs",
        questions: `Painting and decorating questions in ${area}`,
        facts: `Local facts that shape decorating in ${area}`,
        audience: `Who painting and decorating in ${area} is for`,
        failures: `What has to be right before decorating in ${area}`,
        survey: `What a visit settles before decorating starts in ${area}`,
        materials: `Coatings, sheens and joinery systems in ${area}`,
        programme: `A ${area} decorating programme, stage by stage`,
        access: `Deliveries, parking and protection in ${area}`,
        cost: `What moves the figure on a ${area} decorate`,
        living: `Staying in the house while ${area} rooms are decorated`,
        handover: `Handover, touch-in and the year after in ${area}`,
        pitfalls: `How decorating in ${area} disappoints, and what prevents it`,
      };
    case "light-refurbishment":
      return {
        rooms: `Flat refurbishment in ${area}: kitchen, bathroom, floors and decoration`,
        working: `Licence, sequence and access for ${area} refurbishment`,
        spec: `How a ${area} programme is specified`,
        includes: "What a typical light-refurbishment instruction includes",
        process: "How a light-refurbishment programme runs",
        questions: `Light refurbishment questions in ${area}`,
        facts: `Local facts that shape a ${area} programme`,
        audience: `Who light refurbishment in ${area} is for`,
        failures: `What has to be right on a ${area} programme`,
        survey: `What a visit settles before a ${area} programme is priced`,
        materials: `Materials, finishes and one standard across ${area} rooms`,
        programme: `A ${area} programme, stage by stage`,
        access: `Deliveries, parking and common parts in ${area}`,
        cost: `What moves the figure on a ${area} programme`,
        living: `Staying put or decanting in ${area}`,
        handover: `Handover, provisional items and the year after in ${area}`,
        pitfalls: `How a ${area} programme slips, and what prevents it`,
      };
  }
}

export const serviceSeo: Record<ServiceSlug, ServiceSeo> = {
  "kitchen-renovation": {
    audienceH2: "Who kitchen renovation in North West London is for",
    housingH2: "Conversions, mansion flats and family kitchens in North West London",
    includesH2: "What a typical kitchen renovation includes",
    processH2: "How a kitchen renovation programme runs",
    specH2: "How a North West London kitchen is specified",
    areasH2: "Kitchen renovation neighbourhoods in North West London",
    consentH2: "Licence, extract and the building",
    questionsH2: "Kitchen renovation questions",
    costH2: "What kitchen renovation in North West London costs",
    costParas: [
      "We do not publish a price list for kitchen renovation in North West London. A rear-return galley in West Hampstead, a compact mansion-flat kitchen on original risers in St John's Wood, and a family room wrapping a chimney breast in Highgate are different jobs. Access, extract, tenure and the services as found change the figure more than the postcode does.",
      "The written proposal after a visit is the price. It is set against a defined scope: measured survey, first and second fix, cabinetry scribed to the room, worktops in generic material categories, appliance installation and handover. Provisional items are listed for what we cannot see. We do not quote from photographs. Telephone 020 7101 3168.",
    ],
    who: "Hampstead Property Services Group Limited (company no. 17404557) plans and fits kitchens from Unit 3 Palace Court, 250 Finchley Road, London NW3 6DN. Telephone 020 7101 3168.",
    extraFaqs: [
      {
        q: "How do I start a kitchen renovation in a leasehold flat?",
        a: "Tell us the address and whether a managing agent is involved. We visit, then write a proposal. A licence to alter is often needed before cabinets come out; we can prepare drawings and a method statement. Consent is the freeholder's, not ours.",
      },
      {
        q: "Do you work across Camden and Westminster?",
        a: "Yes. Hampstead, West Hampstead, Belsize Park and Kentish Town sit with Camden. St John's Wood and Maida Vale sit with Westminster. We check the address rather than treating North West London as one set of rules.",
      },
      {
        q: "Is a catalogue kitchen dropped into a conversion?",
        a: "No. The run is scribed to the room as found: chimney breast, stack, extract and the stair. We do not quote a showroom layout from photographs.",
      },
      {
        q: "Do you plan extract before cabinets come out?",
        a: "Yes. The route is agreed at survey, particularly in conservation areas and listed fabric. We will not assume a grille on a principal elevation in Hampstead, Highgate, Primrose Hill or the Suburb.",
      },
      {
        q: "Do you order kitchen units before measuring the stair?",
        a: "No. Units are ordered only once lift, stair and room dimensions are confirmed on site. In St John's Wood and Maida Vale mansion blocks the stair is the working assumption until we measure.",
      },
      {
        q: "Do you renovate small kitchens in North West London conversions?",
        a: "Yes. Rear-return galleys and compact mansion-flat rooms are ordinary work. Layout follows the window, the stack and the door, not a catalogue island. We will not draw an island that the room cannot serve.",
      },
      {
        q: "Can you renovate a kitchen in a listed Hampstead or Highgate house?",
        a: "Internal kitchen renovation within the existing room is ordinary work. Listed and conservation rules bite when extract, windows or the elevation change. We check the address before we plan a grille. We do not form openings in listed fabric.",
      },
      {
        q: "Do you work in NW3, NW8 and NW6?",
        a: "Yes. Hampstead and Belsize Park are NW3. St John's Wood is NW8. West Hampstead, Kilburn and Queen's Park sit in NW6. Each kitchen page on this site is written for that postcode's housing, council and conservation map.",
      },
      {
        q: "What is not included in a kitchen renovation?",
        a: "Structural openings, kitchen-diners that remove a wall, loft conversions and extensions. Those sit with Hampstead Renovations. A kitchen renovation on this site is a fit-out of the room that exists.",
      },
    ],
  },
  "bathroom-renovation": {
    audienceH2: "Who bathroom renovation in North West London is for",
    housingH2: "Conversion bathrooms, mansion flats and family houses in North West London",
    includesH2: "What a typical bathroom renovation includes",
    processH2: "How a bathroom renovation programme runs",
    specH2: "How a North West London bathroom is specified",
    areasH2: "Bathroom renovation neighbourhoods in North West London",
    consentH2: "Licence, building control and extract",
    questionsH2: "Bathroom renovation questions",
    costH2: "What bathroom renovation in North West London costs",
    costParas: [
      "We do not publish a price list for bathroom renovation in North West London. Timber floors in a Hampstead conversion, a stacked mansion-flat bathroom in Maida Vale, and a family bathroom in a Highgate house are different jobs. Floor depth, the stack, extract and whether a licence to alter is needed change the figure.",
      "The written proposal after a visit is the price. It covers tanking as a documented system, first and second fix, tiling, sanitaryware as specified products, mechanical extract and a watertightness check. We do not quote a suite from a photograph. Telephone 020 7101 3168.",
    ],
    who: "Hampstead Property Services Group Limited (company no. 17404557) renovates bathrooms from Unit 3 Palace Court, 250 Finchley Road, London NW3 6DN. Telephone 020 7101 3168.",
    extraFaqs: [
      {
        q: "How do I start a bathroom renovation in a leasehold flat?",
        a: "Tell us the address, whether there is a second bathroom, and whether a managing agent is involved. We visit, then write a proposal. A licence to alter is often needed before the room is stripped.",
      },
      {
        q: "Can two bathrooms be done in the same programme?",
        a: "Yes. Wet rooms run together, then decoration closes around them. Separate contractors sequencing themselves is how a finished bathroom is opened again.",
      },
      {
        q: "Do you work in Camden and Westminster mansion blocks?",
        a: "Yes. Stacked bathrooms in St John's Wood, Maida Vale and Swiss Cottage, and timber-floor conversions in Hampstead and West Hampstead, are ordinary work. The stack and the neighbour below decide the layout.",
      },
      {
        q: "Do you renovate small bathrooms in mansion flats?",
        a: "Yes. Compact stacked rooms in St John's Wood, Maida Vale and Swiss Cottage are ordinary work. Layout follows the stack and the neighbour below. A bath crate is often a stair problem until we measure the lift.",
      },
      {
        q: "Can you add a shower to a family bathroom in a conversion?",
        a: "Where the floor depth, the waterproofing system and the extract will take it. A conversion rarely has the build-up of a new-build slab. We will not draw a level-access wet room onto joists that cannot accept the fall.",
      },
      {
        q: "Do you renovate bathrooms in listed buildings?",
        a: "Internal bathroom renovation within the existing room is ordinary work. Listed and conservation rules bite when extract or the elevation change. We check the address before we plan a grille.",
      },
      {
        q: "What is not included in a bathroom renovation?",
        a: "New external soil pipes on principal elevations, structural openings, and work that cuts into another demise without the building's process. The bathroom stays in the envelope that exists unless the stack will honestly serve a change.",
      },
    ],
  },
  "painting-decorating": {
    audienceH2: "Who painting and decorating in North West London is for",
    housingH2: "Occupied houses, conversions and mansion flats in North West London",
    includesH2: "What a typical decorating instruction includes",
    processH2: "How a decorating programme runs",
    specH2: "How decorating is specified in North West London",
    areasH2: "Painting and decorating neighbourhoods in North West London",
    consentH2: "Conservation, joinery and occupied homes",
    questionsH2: "Painting and decorating questions",
    costH2: "What painting and decorating in North West London costs",
    costParas: [
      "We do not publish a price list for painting and decorating in North West London. A Hampstead drawing room with original joinery, an occupied West Hampstead conversion and a Maida Vale mansion flat are different jobs. Substrate, ceiling height, sash repair and whether the house stays occupied change the figure more than the colour does.",
      "The written proposal after a visit is the price. It is set against a prep specification: washing down, filling, lining where movement would telegraph, coats, sheen and joinery treated as joinery. Samples are painted on the wall. We do not quote a refresh from a chart. Telephone 020 7101 3168.",
    ],
    who: "Hampstead Property Services Group Limited (company no. 17404557) decorates period interiors from Unit 3 Palace Court, 250 Finchley Road, London NW3 6DN. Telephone 020 7101 3168.",
    extraFaqs: [
      {
        q: "How do I start a decorating programme in an occupied house?",
        a: "Tell us the rooms, whether you are staying, and whether the building has hours. We survey substrates and joinery, write a prep specification, and sequence rooms so a kitchen, a bathroom and a bedroom stay usable.",
      },
      {
        q: "Do you decorate listed interiors without changing the elevation?",
        a: "Interior decoration within existing rooms is ordinary work. Listed and conservation rules bite when coatings, windows or external joinery change. We check the address before we open a tin.",
      },
      {
        q: "Is a quick refresh the same as a specified decorate?",
        a: "No. Preparation takes the majority of the time. Failed plaster, lime backgrounds and original sashes are specified as joinery and substrate, not as a cheap emulsion over defects.",
      },
      {
        q: "Do you specify lining paper in conversion interiors?",
        a: "Where movement would telegraph through paint, yes. It is written into the proposal, not slipped in on the day. Mixed later patches in West Hampstead, Kentish Town and Crouch End conversions are the usual reason.",
      },
      {
        q: "Do you paint original sash windows as joinery?",
        a: "Yes, where they are in scope. Failed cords, staff beads or putty are not a paint item; we say so before we start. Conservation-area and listed windows are checked on the address.",
      },
      {
        q: "Do you decorate a single room, or only whole houses?",
        a: "A single drawing room, a floor of a conversion, or a whole house. The prep specification is written either way. A cheap emulsion over unprepared walls is not the work.",
      },
      {
        q: "Can you paint lime plaster in period interiors?",
        a: "Yes, with a system that suits the substrate. Lime, gypsum and mixed later patches are surveyed first. We will not put a modern acrylic over lime as a default.",
      },
      {
        q: "Do you paint exteriors in Hampstead Garden Suburb?",
        a: "Previously painted windows, doors and joinery where access and weather allow. A new outside colour in the Suburb is not assumed. Internal decoration that does not change the elevation is ordinary work.",
      },
    ],
  },
  "light-refurbishment": {
    audienceH2: "Who light refurbishment in North West London is for",
    housingH2: "Conversion flats, mansion apartments and family houses in North West London",
    includesH2: "What a typical light-refurbishment programme includes",
    processH2: "How a light-refurbishment programme runs",
    specH2: "How a North West London programme is specified",
    areasH2: "Light refurbishment neighbourhoods in North West London",
    consentH2: "Licence, sequence and the envelope",
    questionsH2: "Light refurbishment questions",
    costH2: "What light refurbishment in North West London costs",
    costParas: [
      "We do not publish a price list for light refurbishment in North West London. A West Hampstead conversion flat, a Maida Vale mansion apartment and a storey of a Highgate house are different programmes. Kitchen and bathroom scope, floor condition, licence lead-in and whether you decant change the figure.",
      "The written proposal after a visit is the price for a defined programme: kitchen and bathroom if they are in, decoration, floors, joinery and the services those rooms need. Structural openings, lofts and extensions are not in that price because they are not this service. Telephone 020 7101 3168.",
    ],
    who: "Hampstead Property Services Group Limited (company no. 17404557) runs light-refurbishment programmes from Unit 3 Palace Court, 250 Finchley Road, London NW3 6DN. Telephone 020 7101 3168.",
    extraFaqs: [
      {
        q: "How do I start a whole-flat refurbishment?",
        a: "Tell us the property and whether kitchen, bathroom, decoration and floors sit in one brief. We visit, write what is in and what is out, and say if the work is actually structural. We do not quote from photographs.",
      },
      {
        q: "What sits outside light refurbishment?",
        a: "Structural openings, loft conversions, extensions and basement works. Those sit with Hampstead Renovations. We will say so at the first visit rather than stretch the word.",
      },
      {
        q: "Is a buy-to-let refresh a light refurbishment?",
        a: "Often, if the plan stays as it is: kitchen and bathroom if they need it, decoration and floors to one standard, one programme and one account.",
      },
      {
        q: "Do you rewire or replumb as part of a light-refurbishment programme?",
        a: "Of the rooms in scope, yes — coordinated with the existing installation. A speculative whole-house strip is not assumed. Hidden services are listed as provisional items after survey.",
      },
      {
        q: "Do you protect common parts in conversion and mansion-block programmes?",
        a: "Yes. Shared stairs and hallways are written into the method. The demise is one programme; the stair is a separate instruction unless the freeholder is the client.",
      },
      {
        q: "What is the difference between light refurbishment and a full renovation?",
        a: "Light refurbishment keeps the structure. Kitchen, bathroom, decoration, floors and the services those rooms need. A full renovation that moves walls, adds a storey or forms an extension sits with Hampstead Renovations.",
      },
      {
        q: "Do you refurbish mansion flats in St John's Wood and Maida Vale?",
        a: "Yes. The plan stays as it is. Kitchen and bathroom replaced, floors and decoration brought to one standard, the building's hours and licence-to-alter process followed. We do not alter the carcass.",
      },
    ],
  },
};
