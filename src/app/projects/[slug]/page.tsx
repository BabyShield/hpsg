import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { CtaBand } from "@/components/ui/CtaBand";
import { getProject, publishedProjects } from "@/data/projects";
import { isDraftToken, publicCopy } from "@/lib/public-copy";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return publishedProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project || isDraftToken(project.title)) return {};
  return {
    title: publicCopy(project.title),
    description: publicCopy(project.summary),
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project || isDraftToken(project.title)) notFound();

  const title = publicCopy(project.title);
  const summary = publicCopy(project.summary);
  const approach = publicCopy(project.approach);
  const highlights = project.specHighlights
    .map((item) => publicCopy(item))
    .filter(Boolean);

  return (
    <>
      <Container className="py-16 sm:py-24">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Projects", href: "/projects/" },
            { name: title, href: `/projects/${project.slug}/` },
          ]}
        />
        <p className="rule mb-8" aria-hidden="true" />
        <p className="kicker">
          {publicCopy(project.serviceLabel)} in {publicCopy(project.areaLabel)}{" "}
          {publicCopy(project.postcode)}
        </p>
        <h1 className="mt-4 font-display text-4xl font-light sm:text-6xl">{title}</h1>
        <div className="mt-10 max-w-measure space-y-5 text-base leading-relaxed text-grey-700">
          <p>{summary}</p>
          {approach ? (
            <>
              <h2 className="pt-4 font-display text-3xl font-normal text-navy">Approach</h2>
              <p>{approach}</p>
            </>
          ) : null}
          {highlights.length > 0 ? (
            <>
              <h2 className="pt-4 font-display text-3xl font-normal text-navy">Specification</h2>
              <ul className="space-y-3">
                {highlights.map((item) => (
                  <li key={item} className="flex gap-4">
                    <span className="mt-3 h-px w-6 shrink-0 bg-gold" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </>
          ) : null}
        </div>
      </Container>
      <CtaBand />
    </>
  );
}
