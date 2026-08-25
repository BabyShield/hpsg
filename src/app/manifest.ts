import type { MetadataRoute } from "next";

import { site } from "@/data/site";
import { brand } from "@/lib/brand";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.tradingName,
    short_name: site.shortName,
    description: site.homeMetaDescription,
    start_url: "/",
    display: "browser",
    background_color: brand.bone,
    theme_color: brand.navy,
    icons: [{ src: "/images/logo.png", sizes: "512x512", type: "image/png" }],
  };
}
