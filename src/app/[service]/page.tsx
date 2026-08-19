import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ServiceHub } from "@/components/services/ServiceHub";
import { services } from "@/data/services";
import { getService, isServiceSlug } from "@/lib/matrix";
import { pageMetadata } from "@/lib/metadata";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ service: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string }>;
}): Promise<Metadata> {
  const { service: slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return pageMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/${service.slug}/`,
  });
}

export default async function ServiceHubPage({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const { service: slug } = await params;
  if (!isServiceSlug(slug)) notFound();
  const service = getService(slug);
  if (!service) notFound();

  return <ServiceHub service={service} />;
}
