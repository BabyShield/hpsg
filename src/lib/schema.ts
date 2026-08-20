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
    url: site.url,
    telephone: site.phoneTel,
    email: site.email,
    description: site.homeMetaDescription,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${site.address.line1}, ${site.address.line2}`,
      addressLocality: site.address.city,
      postalCode: site.address.postcode,
      addressRegion: "England",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    areaServed: areas.map((area) => ({
      "@type": "Place",
      name: `${area.name}, ${area.postcode}`,
    })),
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
  };
}

export function serviceSchema({
  name,
  url,
  areaServed,
  description,
  image,
}: {
  name: string;
  url: string;
  areaServed: string | string[];
  description?: string;
  image?: string;
}) {
  const places = (Array.isArray(areaServed) ? areaServed : [areaServed]).map((place) => ({
    "@type": "Place",
    name: place,
  }));
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    serviceType: name,
    url,
    description: description ? publicCopy(description) : undefined,
    image: image ? absoluteUrl(image) : undefined,
    provider: { "@id": BUSINESS_ID },
    areaServed: places,
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
