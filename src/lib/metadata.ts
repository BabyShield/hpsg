import type { Metadata } from "next";

import { site } from "@/data/site";
import { absoluteUrl, assetUrl } from "./schema";

export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle = true,
  image,
  imageAlt,
  imageWidth,
  imageHeight,
  keywords,
  category,
  geoPlacename,
}: {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
  image?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  keywords?: string[];
  category?: string;
  geoPlacename?: string;
}): Metadata {
  const url = absoluteUrl(path);
  const ogImage = image ? assetUrl(image) : absoluteUrl("/opengraph-image");
  const ogImages = [
    {
      url: ogImage,
      alt: imageAlt ?? title,
      ...(imageWidth && imageHeight ? { width: imageWidth, height: imageHeight } : {}),
    },
  ];
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    applicationName: site.tradingName,
    authors: [{ name: site.legalName, url: site.url }],
    creator: site.legalName,
    publisher: site.legalName,
    category,
    keywords,
    alternates: {
      canonical: url,
      languages: { "en-GB": url, "x-default": url },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: "en_GB",
      url,
      siteName: site.tradingName,
      title,
      description,
      images: ogImages,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImages,
    },
    other: {
      "geo.region": "GB-LND",
      "geo.placename": geoPlacename ?? "Hampstead, London",
      "geo.position": `${site.geo.latitude};${site.geo.longitude}`,
      ICBM: `${site.geo.latitude}, ${site.geo.longitude}`,
    },
  };
}
