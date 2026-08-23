import { areas } from "@/data/areas";
import { services } from "@/data/services";
import type { Faq } from "@/data/types";
import { site } from "@/data/site";
import { publicCopy } from "./public-copy";

const BUSINESS_ID = `${site.url}/#business`;
const WEBSITE_ID = `${site.url}/#website`;

export function absoluteUrl(path: string): string {
  const normalised = path.endsWith("/") ? path : `${path}/`;
  if (normalised === "/") return `${site.url}/`;
  return `${site.url}${normalised}`;
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["HomeAndConstructionBusiness", "LocalBusiness"],
    "@id": BUSINESS_ID,
    name: site.tradingName,
    legalName: site.legalName,
    alternateName: site.shortName,
    url: site.url,
    telephone: site.phoneTel,
    email: site.email,
    description: site.homeMetaDescription,
    identifier: {
      "@type": "PropertyValue",
      name: "Company Number",
      value: site.companyNumber,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: `${site.address.line1}, ${site.address.line2}`,
      addressLocality: site.address.city,
      postalCode: site.address.postcode,
      addressRegion: "Greater London",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    hasMap: `https://www.openstreetmap.org/?mlat=${site.geo.latitude}&mlon=${site.geo.longitude}#map=17/${site.geo.latitude}/${site.geo.longitude}`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: site.phoneTel,
      email: site.email,
      contactType: "customer service",
      areaServed: "GB",
      availableLanguage: "English",
    },
    areaServed: [
      { "@type": "AdministrativeArea", name: "North West London" },
      { "@type": "AdministrativeArea", name: "London Borough of Camden" },
      { "@type": "AdministrativeArea", name: "City of Westminster" },
      { "@type": "AdministrativeArea", name: "London Borough of Barnet" },
      { "@type": "AdministrativeArea", name: "London Borough of Haringey" },
      ...areas.map((area) => ({
        "@type": "Place",
        name: `${area.name}, ${area.postcode}`,
      })),
    ],
    knowsAbout: [
      "Kitchen renovation",
      "Bathroom renovation",
      "Painting and decorating",
      "Light refurbishment",
      "Period conversions",
      "Mansion flats",
      "Conservation areas",
      "Licence to alter",
    ],
    image: [
      absoluteUrl("/images/home/hero.jpg"),
      absoluteUrl("/images/about/office-neighbourhood.jpg"),
    ],
    logo: absoluteUrl("/images/about/office-neighbourhood.jpg"),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "North West London property services",
      itemListElement: services.map((service, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          url: absoluteUrl(`/${service.slug}/`),
        },
        position: index + 1,
      })),
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: site.url,
    name: site.tradingName,
    inLanguage: "en-GB",
    publisher: { "@id": BUSINESS_ID },
    about: { "@id": BUSINESS_ID },
  };
}

export function webPageSchema({
  name,
  url,
  description,
  image,
}: {
  name: string;
  url: string;
  description?: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name,
    description: description ? publicCopy(description) : undefined,
    inLanguage: "en-GB",
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": BUSINESS_ID },
    primaryImageOfPage: image ? absoluteUrl(image) : undefined,
  };
}

export function placeSchema(name: string, postcode: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Place",
    name: `${name}, ${postcode}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: name,
      postalCode: postcode,
      addressRegion: "Greater London",
      addressCountry: "GB",
    },
  };
}

export function howToSchema({
  name,
  description,
  steps,
}: {
  name: string;
  description: string;
  steps: { title: string; text: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description: publicCopy(description),
    inLanguage: "en-GB",
    step: steps
      .map((step) => ({
        title: publicCopy(step.title),
        text: publicCopy(step.text),
      }))
      .filter((step) => step.title && step.text)
      .map((step, index) => ({
        "@type": "HowToStep",
        position: index + 1,
        name: step.title,
        text: step.text,
      })),
  };
}

export function serviceSchema({
  name,
  url,
  areaServed,
  description,
  image,
  serviceType,
}: {
  name: string;
  url: string;
  areaServed: string | string[];
  description?: string;
  image?: string;
  serviceType?: string;
}) {
  const places = (Array.isArray(areaServed) ? areaServed : [areaServed]).map((place) => ({
    "@type": "Place",
    name: place,
  }));
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    serviceType: serviceType ?? name,
    url,
    description: description ? publicCopy(description) : undefined,
    image: image ? absoluteUrl(image) : undefined,
    provider: { "@id": BUSINESS_ID },
    brand: { "@id": BUSINESS_ID },
    areaServed: places,
    audience: {
      "@type": "Audience",
      geographicArea: places,
    },
    offers: {
      "@type": "Offer",
      url,
      availability: "https://schema.org/InStock",
      description: "Written proposal after a visit. We do not quote from photographs.",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
    },
  };
}

export function breadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.href),
    })),
  };
}

export function faqSchema(faqs: Faq[]) {
  const visible = faqs
    .map((faq) => ({ q: publicCopy(faq.q), a: publicCopy(faq.a) }))
    .filter((faq) => faq.q && faq.a);
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: visible.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export function itemListSchema(
  name: string,
  items: { name: string; url: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: item.url,
    })),
  };
}
