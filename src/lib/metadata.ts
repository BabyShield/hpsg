import type { Metadata } from "next";

import { site } from "@/data/site";
import { absoluteUrl } from "./schema";

export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle = true,
}: {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
}): Metadata {
  const url = absoluteUrl(path);
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "en_GB",
      url,
      siteName: site.tradingName,
      title,
      description,
      images: [{ url: absoluteUrl("/opengraph-image") }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
