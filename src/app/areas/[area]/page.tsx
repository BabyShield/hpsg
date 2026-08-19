import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { AreaHub } from "@/components/areas/AreaHub";
import { areaHubContent } from "@/data/area-hub-content";
import { areas } from "@/data/areas";
import { assertAreaGraph, getArea } from "@/lib/matrix";

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
  const title = `Property Services ${area.name} ${area.postcode} | Kitchens, Bathrooms & Decorating | HPSG`;
  return {
    title: { absolute: title },
    description: `Property services in ${area.name}, ${area.postcode}: kitchens, bathrooms, painting and light refurbishment. Hampstead Property Services Group. 020 7101 3168.`,
  };
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
