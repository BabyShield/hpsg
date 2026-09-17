export const SERVICE_SLUGS = [
  "kitchen-renovation",
  "bathroom-renovation",
  "painting-decorating",
  "light-refurbishment",
] as const;

export type ServiceSlug = (typeof SERVICE_SLUGS)[number];

export type AreaTier = 1 | 2;

export type Faq = {
  q: string;
  a: string;
};

export type ProcessStep = {
  title: string;
  text: string;
};

export type Service = {
  slug: ServiceSlug;
  name: string;
  navLabel: string;
  heroLine: string;
  summary: string;
  included: string[];
  processSteps: ProcessStep[];
  faqs: Faq[];
  metaTitle: string;
  metaDescription: string;
};

export type Area = {
  slug: string;
  name: string;
  postcode: string;
  tier: AreaTier;
  council: string;
  housingStock: string;
  conservationNotes: string;
  localNotes: string;
  landmarks: string[];
  nearbyAreaSlugs: string[];
};

export type Combo = {
  service: Service;
  area: Area;
};

export type ComboContent = {
  /** Short hero line. */
  lede: string;
  /** Opening paragraphs under the hero. */
  intro: string[];
  /** Typical room, plan and fabric for this service in this area. */
  rooms: string;
  /** Council, conservation, access and tenure as they affect this job. */
  working: string[];
  /** How the specification is written here — not a generic brochure. */
  specification: string[];
  /**
   * What a typical instruction covers in THIS area's stock, and what it
   * deliberately excludes. Replaces the service-wide included[] list, which
   * rendered verbatim on the hub and all fifteen of its combo pages.
   */
  scopeNotes?: string[];
  /** How the standard sequence actually runs here (licence lead-in, access). */
  processNote?: string;
  /** Conservation, tenure and consent as they bear on THIS service here. */
  consent?: string;
  /** Who this service in THIS area is for. */
  audience?: string[];
  /** Four constraints that decide whether the job here actually works. */
  failures?: { title: string; text: string }[];
  localFaqs: Faq[];
  metaDescription: string;
};
