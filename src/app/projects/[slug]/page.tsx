import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Container } from "@/components/ui/Container";
import { CtaBand } from "@/components/ui/CtaBand";
import { getProject, projects } from "@/data/projects";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      <Container className="py-16 sm:py-20">
        <p className="mb-6 h-px w-12 bg-gold" aria-hidden="true" />
        <p className="text-sm uppercase tracking-[0.14em] text-grey-600">
          {project.serviceLabel} in {project.areaLabel} {project.postcode}
        </p>
        <h1 className="mt-4 text-4xl sm:text-5xl">{project.title}</h1>
        <div className="mt-10 max-w-measure space-y-5 text-base text-grey-700">
          <p>{project.summary}</p>
          <h2 className="text-2xl text-navy">Approach</h2>
          <p>{project.approach}</p>
          <h2 className="text-2xl text-navy">Specification</h2>
          <ul className="list-disc pl-5">
            {project.specHighlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>
            Photographs will sit at {project.photoDir} with alt text in the
            pattern &quot;{"{service}"} in {"{area}"} — {"{detail}"}&quot;. No
            client surnames and no exact addresses.
          </p>
        </div>
      </Container>
      <CtaBand />
    </>
  );
}
