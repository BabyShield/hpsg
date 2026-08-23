import type { Faq, ServiceSlug } from "./types";

export type ServiceSeo = {
  audienceH2: string;
  housingH2: string;
  includesH2: string;
  processH2: string;
  specH2: string;
  areasH2: string;
  who: string;
  extraFaqs: Faq[];
};

export function comboHeadings(slug: ServiceSlug, area: string) {
  switch (slug) {
    case "kitchen-renovation":
      return {
        rooms: `Typical kitchens in ${area}`,
        working: `Extract, licence and access in ${area}`,
        spec: `How a ${area} kitchen is specified`,
        includes: "What a typical kitchen instruction includes",
        process: "How a kitchen programme runs",
        questions: `Kitchen questions in ${area}`,
        facts: `Local facts that shape a ${area} kitchen`,
      };
    case "bathroom-renovation":
      return {
        rooms: `Family bathrooms, ensuites and shower rooms in ${area}`,
        working: `Tanking, extract and licence in ${area}`,
        spec: `How a ${area} bathroom is specified`,
        includes: "What a typical bathroom instruction includes",
        process: "How a bathroom programme runs",
        questions: `Bathroom questions in ${area}`,
        facts: `Local facts that shape a ${area} bathroom`,
      };
    case "painting-decorating":
      return {
        rooms: `Typical interiors we decorate in ${area}`,
        working: `Conservation, joinery and occupied homes in ${area}`,
        spec: `How decorating is specified in ${area}`,
        includes: "What a typical decorating instruction includes",
        process: "How a decorating programme runs",
        questions: `Decorating questions in ${area}`,
        facts: `Local facts that shape decorating in ${area}`,
      };
    case "light-refurbishment":
      return {
        rooms: `Typical programmes in ${area}`,
        working: `Licence, sequence and access in ${area}`,
        spec: `How a ${area} programme is specified`,
        includes: "What a typical programme includes",
        process: "How a light-refurbishment programme runs",
        questions: `Refurbishment questions in ${area}`,
        facts: `Local facts that shape a ${area} programme`,
      };
  }
}

export const serviceSeo: Record<ServiceSlug, ServiceSeo> = {
  "kitchen-renovation": {
    audienceH2: "Who this kitchen work is for",
    housingH2: "Conversions, mansion flats and family kitchens",
    includesH2: "What a typical kitchen instruction includes",
    processH2: "How a kitchen programme runs",
    specH2: "How a kitchen is specified",
    areasH2: "Neighbourhoods we cover",
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
    ],
  },
  "bathroom-renovation": {
    audienceH2: "Who this bathroom work is for",
    housingH2: "Conversion bathrooms, mansion flats and family houses",
    includesH2: "What a typical bathroom instruction includes",
    processH2: "How a bathroom programme runs",
    specH2: "How a bathroom is specified",
    areasH2: "Neighbourhoods we cover",
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
    ],
  },
  "painting-decorating": {
    audienceH2: "Who this decorating work is for",
    housingH2: "Occupied houses, conversions and mansion flats",
    includesH2: "What a typical decorating instruction includes",
    processH2: "How a decorating programme runs",
    specH2: "How decorating is specified",
    areasH2: "Neighbourhoods we cover",
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
    ],
  },
  "light-refurbishment": {
    audienceH2: "Who this programme is for",
    housingH2: "Conversion flats, mansion apartments and family houses",
    includesH2: "What a typical programme includes",
    processH2: "How a light-refurbishment programme runs",
    specH2: "How the programme is specified",
    areasH2: "Neighbourhoods we cover",
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
    ],
  },
};
