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
