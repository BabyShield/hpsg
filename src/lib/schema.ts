import { areas } from "@/data/areas";
import type { Faq } from "@/data/types";
import { site } from "@/data/site";

const BUSINESS_ID = `${site.url}/#business`;

export function absoluteUrl(path: string): string {
  const normalised = path.endsWith("/") ? path : `${path}/`;
  if (normalised === "/") return `${site.url}/`;
  return `${site.url}${normalised}`;
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": BUSINESS_ID,
    name: site.tradingName,
    legalName: site.legalName,
    url: site.url,
    telephone: site.phoneTel,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${site.address.line1}, ${site.address.line2}`,
      addressLocality: site.address.city,
      postalCode: site.address.postcode,
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    areaServed: areas.map((area) => area.name),
    image: absoluteUrl("/images/home/hero.jpg"),
    logo: absoluteUrl("/images/about/office-neighbourhood.jpg"),
  };
}

export function serviceSchema({
  name,
  url,
  areaServed,
}: {
  name: string;
  url: string;
  areaServed: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    url,
    provider: { "@id": BUSINESS_ID },
    areaServed,
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
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}
