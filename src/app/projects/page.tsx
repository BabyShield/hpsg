import type { Metadata } from "next";
import Link from "next/link";

import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { CtaBand } from "@/components/ui/CtaBand";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Case studies from Hampstead Property Services Group. Project write-ups are published from supplied summaries only.",
};

export default function ProjectsPage() {
  return (
    <>
      <Container className="py-16 sm:py-20">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Projects", href: "/projects/" },
          ]}
        />
        <p className="mb-6 h-px w-12 bg-gold" aria-hidden="true" />
        <h1 className="text-4xl sm:text-5xl">Projects</h1>
        <p className="mt-6 max-w-measure text-lg text-grey-700">
          Write-ups will be published from supplied project summaries, rewritten
          in this site&apos;s voice. We do not invent clients, addresses or
          outcomes. [TBC: 6 HR project summaries and photographs]
        </p>
        <ul className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <li key={project.slug}>
              <Link
                href={`/projects/${project.slug}/`}
                className="block border border-grey-200 p-8 hover:border-gold"
              >
                <p className="text-sm uppercase tracking-[0.14em] text-grey-600">
                  {project.serviceLabel} · {project.areaLabel}
                </p>
                <h2 className="mt-3 text-2xl">{project.title}</h2>
                <p className="mt-3 text-base text-grey-700">{project.summary}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
      <CtaBand />
    </>
  );
}
