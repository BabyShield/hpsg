import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ComboPage } from "@/components/combos/ComboPage";
import { getComboContent } from "@/data/combo-content";
import { servicePhotos } from "@/data/photos";
import { getCombo, getCombos } from "@/lib/matrix";
import { pageMetadata } from "@/lib/metadata";
import { comboMetaDescription, comboMetaTitle } from "@/lib/seo-copy";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  const combos = getCombos();
  const missing = combos.filter(
    (combo) => !getComboContent(combo.service.slug, combo.area.slug),
  );
  if (missing.length > 0) {
    throw new Error(
      `Missing combo content for: ${missing
        .map((combo) => `${combo.service.slug}/${combo.area.slug}`)
        .join(", ")}`,
    );
  }
  return combos.map((combo) => ({
    service: combo.service.slug,
    area: combo.area.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string; area: string }>;
}): Promise<Metadata> {
  const { service: serviceSlug, area: areaSlug } = await params;
  const combo = getCombo(serviceSlug, areaSlug);
  const content = getComboContent(serviceSlug, areaSlug);
  if (!combo || !content) return {};
  const photo = servicePhotos[combo.service.slug];
  return pageMetadata({
    title: comboMetaTitle(combo),
    description: comboMetaDescription(content.lede, content.metaDescription),
    path: `/${combo.service.slug}/${combo.area.slug}/`,
    image: photo.src,
    imageAlt: photo.alt,
  });
}

export default async function ServiceAreaPage({
  params,
}: {
  params: Promise<{ service: string; area: string }>;
}) {
  const { service: serviceSlug, area: areaSlug } = await params;
  const combo = getCombo(serviceSlug, areaSlug);
  const content = getComboContent(serviceSlug, areaSlug);
  if (!combo || !content) notFound();

  return <ComboPage combo={combo} content={content} />;
}
