import type { Faq } from "./types";

export const homeFaqs: Faq[] = [
  {
    q: "Which areas of North West London do you cover?",
    a: "We work from our Hampstead office across North West London, including Hampstead, West Hampstead, Belsize Park, St John's Wood, Maida Vale, Swiss Cottage, Primrose Hill, Highgate and the wider list of areas on this site. If your property is just outside those pages, contact us and we will say whether we can take it on.",
  },
  {
    q: "How long does a typical project take?",
    a: "A single bathroom or a straightforward kitchen is often a small number of weeks on site. A light refurbishment of a whole flat is typically measured in weeks rather than days. Listed-building consent, freeholder licences and long-lead materials extend that. We issue a written programme after survey, not a generic promise.",
  },
  {
    q: "How do you work?",
    a: "Enquiry, visit, written proposal, then a single programme with one point of contact. We do not quote from photographs. Kitchens, bathrooms, decoration and flooring are coordinated so trades are not left sequencing themselves.",
  },
  {
    q: "Are you insured?",
    a: "Yes. Hampstead Property Services Group is fully insured.",
  },
  {
    q: "How do I get a quote?",
    a: "Call 020 7101 3168 or use the enquiry form. We visit the property, record constraints, and send a written proposal against a defined scope.",
  },
  {
    q: "What are your working hours?",
    a: "Working hours are agreed for the property. In mansion blocks we also follow the building's own rules for noisy work and common-parts access.",
  },
  {
    q: "How much does a kitchen or bathroom renovation in Hampstead cost?",
    a: "We do not publish a price list. A Hampstead conversion, a St John's Wood mansion flat and a Maida Vale rear kitchen are different jobs. We visit, then send a written proposal against a defined scope. Telephone 020 7101 3168.",
  },
  {
    q: "Do I need planning permission to renovate a kitchen or bathroom in North West London?",
    a: "Internal work within existing rooms often sits outside planning permission. Conservation areas, listed buildings, Article 4 directions and freeholder licences can still control extract, windows and elevations. We check the address rather than assuming permitted development.",
  },
  {
    q: "Are you kitchen fitters or a renovation company?",
    a: "We plan and fit kitchens, bathrooms, painting and light refurbishment as coordinated programmes in North West London housing. We are not a catalogue kitchen showroom, and we are not a structural design-and-build contractor. Extensions and loft conversions sit with Hampstead Renovations.",
  },
  {
    q: "Do you work in mansion blocks and conservation areas?",
    a: "Yes. Compact kitchens on original risers, licence-to-alter packs, and extract that a conservation elevation will actually accept are ordinary work. Hampstead, St John's Wood, Maida Vale, Highgate and Hampstead Garden Suburb each have their own rules; we check the address.",
  },
];

export const homeMethod = [
  {
    title: "Visit",
    text: "We record the rooms, the stacks, access and the building’s rules. We do not quote from photographs.",
  },
  {
    title: "Written proposal",
    text: "A specification, a programme and a price against that scope — not a verbal estimate.",
  },
  {
    title: "One programme",
    text: "Kitchen, bathroom, decoration and floors sequenced together, with one point of contact.",
  },
  {
    title: "Handover",
    text: "A snagging pass against the written specification, then a clean set of rooms.",
  },
] as const;

export const whyHpsg = [
  {
    title: "Fully insured",
    text: "All work is carried out fully insured. We will not open up a kitchen, bathroom or occupied house without that in place.",
  },
  {
    title: "Hampstead office",
    text: "We are based at Unit 3 Palace Court, 250 Finchley Road, London NW3 6DN. Hampstead, Belsize Park, Swiss Cottage and West Hampstead are a short run; St John's Wood, Maida Vale, Primrose Hill and Highgate are ordinary working territory from that office.",
  },
  {
    title: "Part of an established London property group",
    text: "Hampstead Property Services Group sits alongside sister companies in the same family. Kitchens, bathrooms, painting and light refurbishment stay on this site. Extensions and lofts sit with Hampstead Renovations. The family is explained on the Group page.",
  },
  {
    title: "Dedicated project management",
    text: "One programme and one point of contact for the rooms in scope, rather than a collection of separate trades to coordinate yourself. Wet rooms first, decoration last, a snag against the written specification.",
  },
] as const;
