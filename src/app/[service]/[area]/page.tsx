import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getCombo, getCombos } from "@/lib/matrix";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return getCombos().map((combo) => ({
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
  if (!combo) return {};
  const title = `${combo.service.name} ${combo.area.name} ${combo.area.postcode} | HPSG`;
  return {
    title: { absolute: title },
    description: `${combo.service.name} in ${combo.area.name}, ${combo.area.postcode}. Hampstead Property Services Group. 020 7101 3168.`,
  };
}

export default async function ComboPage({
  params,
}: {
  params: Promise<{ service: string; area: string }>;
}) {
  const { service: serviceSlug, area: areaSlug } = await params;
  const combo = getCombo(serviceSlug, areaSlug);
  if (!combo) notFound();

  return (
    <main>
      <h1>
        {combo.service.name} in {combo.area.name}, {combo.area.postcode}
      </h1>
    </main>
  );
}
