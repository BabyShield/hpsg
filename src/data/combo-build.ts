import type { ComboContent, Faq } from "./types";

export function combo(input: {
  lede: string;
  intro: string[];
  rooms: string;
  working: string[];
  specification: string[];
  scopeNotes?: string[];
  processNote?: string;
  consent?: string;
  faqs: Faq[];
  metaDescription: string;
}): ComboContent {
  return {
    lede: input.lede,
    intro: input.intro,
    rooms: input.rooms,
    working: input.working,
    specification: input.specification,
    scopeNotes: input.scopeNotes,
    processNote: input.processNote,
    consent: input.consent,
    localFaqs: input.faqs,
    metaDescription: input.metaDescription,
  };
}
