import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { AreaHub } from "@/components/areas/AreaHub";
import { areaHubContent } from "@/data/area-hub-content";
import { areas } from "@/data/areas";
import { areaPhotos } from "@/data/photos";
import { assertAreaGraph, getArea } from "@/lib/matrix";
import { pageMetadata } from "@/lib/metadata";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  assertAreaGraph();
  const missing = areas.filter((area) => !areaHubContent[area.slug]);
  if (missing.length > 0) {
    throw new Error(
      `Missing area hub content for: ${missing.map((area) => area.slug).join(", ")}`,
    );
  }
  return areas.map((area) => ({ area: area.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ area: string }>;
}): Promise<Metadata> {
  const { area: slug } = await params;
  const area = getArea(slug);
  if (!area) return {};
  const photo = areaPhotos[area.slug];
  return pageMetadata({
    title: `Kitchens, Bathrooms and Decorating in ${area.name} ${area.postcode} | HPSG`,
    description: `Kitchen renovation, bathroom renovation, painting and light refurbishment in ${area.name}, ${area.postcode}. Hampstead Property Services Group. 020 7101 3168.`,
    path: `/areas/${area.slug}/`,
    image: photo?.src,
    imageAlt: photo?.alt,
  });
}

export default async function AreaHubPage({
  params,
}: {
  params: Promise<{ area: string }>;
}) {
  const { area: slug } = await params;
  const area = getArea(slug);
  if (!area || !areaHubContent[slug]) notFound();

  return <AreaHub area={area} />;
}
