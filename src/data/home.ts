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
];

export const whyHpsg = [
  {
    title: "Fully insured",
    text: "All work is carried out fully insured. We will not open up a kitchen, bathroom or occupied house without that in place.",
  },
  {
    title: "Hampstead office",
    text: "We are based at Unit 3 Palace Court, 250 Finchley Road, London NW3 6DN, and the work is in the neighbourhoods around that office.",
  },
  {
    title: "Part of an established London property group",
    text: "Hampstead Property Services Group sits alongside sister companies in the same family. The group is introduced on the Group page.",
  },
  {
    title: "Dedicated project management",
    text: "One programme and one point of contact for the rooms in scope, rather than a collection of separate trades to coordinate yourself.",
  },
] as const;
