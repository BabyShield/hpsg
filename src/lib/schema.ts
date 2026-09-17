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

/**
 * Absolute URL for a static asset (image, file). Unlike page URLs, asset URLs
 * must NOT carry a trailing slash — Workers Static Assets 404s on
 * "/images/foo.jpg/". Asserts at build time that the path looks like a file.
 */
export function assetUrl(path: string): string {
  const last = path.split("/").pop() ?? "";
  if (!last.includes(".")) {
    throw new Error(`assetUrl expects a file path (got "${path}") — use absoluteUrl for pages`);
  }
  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
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
    slogan: site.tagline,
    // sameAs would go here once verified profiles for this company exist.
    // It is not for sister brands: those are separate legal entities.
    // [TBC: Google Business Profile and any social profiles]
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
      assetUrl("/images/home/hero.jpg"),
      assetUrl("/images/about/office-neighbourhood.jpg"),
    ],
    logo: {
      "@type": "ImageObject",
      url: assetUrl("/images/logo.png"),
      width: 512,
      height: 512,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "North West London property services",
      itemListElement: services.map((service, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name:
            service.slug === "painting-decorating"
              ? "Painting and decorating"
              : service.slug === "kitchen-renovation"
                ? "Kitchen renovation"
                : service.slug === "bathroom-renovation"
                  ? "Bathroom renovation"
                  : "Light refurbishment",
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
    potentialAction: {
      "@type": "ContactAction",
      name: "Request a quote",
      target: absoluteUrl("/contact/"),
    },
  };
}

export function webPageSchema({
  name,
  url,
  description,
  image,
  imageAlt,
  imageWidth,
  imageHeight,
  mainEntityId,
  significantLinks,
  relatedLinks,
}: {
  name: string;
  url: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  mainEntityId?: string;
  significantLinks?: string[];
  relatedLinks?: string[];
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
    publisher: { "@id": BUSINESS_ID },
    mainEntity: mainEntityId ? { "@id": mainEntityId } : undefined,
    primaryImageOfPage: image
      ? {
          "@type": "ImageObject",
          url: assetUrl(image),
          caption: imageAlt ?? name,
          width: imageWidth,
          height: imageHeight,
        }
      : undefined,
    significantLink: significantLinks && significantLinks.length > 0 ? significantLinks : undefined,
    relatedLink: relatedLinks && relatedLinks.length > 0 ? relatedLinks : undefined,
    potentialAction: {
      "@type": "ReadAction",
      target: url,
    },
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
    containedInPlace: {
      "@type": "AdministrativeArea",
      name: "North West London",
    },
  };
}

export function howToSchema({
  name,
  description,
  steps,
  url,
}: {
  name: string;
  description: string;
  steps: { title: string; text?: string }[];
  url?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description: publicCopy(description),
    inLanguage: "en-GB",
    url,
    step: steps
      .map((step) => ({
        title: publicCopy(step.title),
        text: step.text ? publicCopy(step.text) : "",
      }))
      .filter((step) => step.title)
      .map((step, index) => ({
        "@type": "HowToStep",
        position: index + 1,
        name: step.title,
        ...(step.text ? { text: step.text } : {}),
      })),
  };
}

export function serviceSchema({
  name,
  url,
  areaServed,
  description,
  image,
  imageAlt,
  imageWidth,
  imageHeight,
  serviceType,
  related,
  catalog,
}: {
  name: string;
  url: string;
  areaServed: string | string[];
  description?: string;
  image?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  serviceType?: string;
  related?: { name: string; url: string }[];
  catalog?: { name: string; url: string }[];
}) {
  const places = (Array.isArray(areaServed) ? areaServed : [areaServed]).map((place) => ({
    "@type": "Place",
    name: place,
  }));
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name,
    serviceType: serviceType ?? name,
    category: serviceType ?? name,
    url,
    description: description ? publicCopy(description) : undefined,
    image: image
      ? {
          "@type": "ImageObject",
          url: assetUrl(image),
          caption: imageAlt,
          width: imageWidth,
          height: imageHeight,
        }
      : undefined,
    provider: { "@id": BUSINESS_ID },
    brand: { "@id": BUSINESS_ID },
    areaServed: places,
    audience: {
      "@type": "Audience",
      geographicArea: places,
    },
    providerMobility: "dynamic",
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: absoluteUrl("/contact/"),
      servicePhone: {
        "@type": "ContactPoint",
        telephone: site.phoneTel,
        contactType: "customer service",
        availableLanguage: "English",
      },
    },
    offers: {
      "@type": "Offer",
      url,
      availability: "https://schema.org/InStock",
      description: "Written proposal after a visit. We do not quote from photographs.",
      areaServed: places,
    },
    isRelatedTo: related?.map((item) => ({
      "@type": "Service",
      name: item.name,
      url: item.url,
    })),
    hasOfferCatalog:
      catalog && catalog.length > 0
        ? {
            "@type": "OfferCatalog",
            name: `${name} by neighbourhood`,
            itemListElement: catalog.map((item, index) => ({
              "@type": "Offer",
              position: index + 1,
              itemOffered: {
                "@type": "Service",
                name: item.name,
                url: item.url,
              },
            })),
          }
        : undefined,
    potentialAction: {
      "@type": "ContactAction",
      name: "Request a quote",
      target: absoluteUrl("/contact/"),
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

export function contactPageSchema(url: string, name: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${url}#webpage`,
    url,
    name,
    description: publicCopy(description),
    inLanguage: "en-GB",
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": BUSINESS_ID },
    mainEntity: { "@id": BUSINESS_ID },
  };
}

export function articleSchema({
  headline,
  url,
  description,
  datePublished,
  dateModified,
}: {
  headline: string;
  url: string;
  description: string;
  datePublished: string;
  dateModified: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    url,
    description: publicCopy(description),
    inLanguage: "en-GB",
    // Attributed to the company: no staff names are published anywhere.
    author: { "@id": BUSINESS_ID },
    publisher: { "@id": BUSINESS_ID },
    datePublished,
    dateModified,
    isPartOf: { "@id": WEBSITE_ID },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
    },
  };
}
