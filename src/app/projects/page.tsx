import Link from "next/link";

import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { CtaBand } from "@/components/ui/CtaBand";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { photoCredit, servicePhotos } from "@/data/photos";
import { publishedProjects } from "@/data/projects";
import { services } from "@/data/services";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Typical work | Hampstead Property Services Group",
  description:
    "Typical kitchens, bathrooms and interiors from Hampstead Property Services Group. Named case studies are published from supplied summaries only.",
  path: "/projects/",
  image: servicePhotos["kitchen-renovation"].src,
  imageAlt: servicePhotos["kitchen-renovation"].alt,
});

export default function ProjectsPage() {
  const live = publishedProjects();

  return (
    <>
      <Container className="py-16 sm:py-24">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Projects", href: "/projects/" },
          ]}
        />
        <p className="mb-6 h-px w-12 bg-gold" aria-hidden="true" />
        <h1 className="font-display text-5xl font-medium sm:text-6xl">Work</h1>
        <p className="mt-6 max-w-measure text-lg leading-relaxed text-grey-700">
          {photoCredit} Kitchen renovation, bathroom renovation, painting and
          light refurbishment pages carry the method. Named case studies will
          be published here only from supplied summaries.
        </p>
        <ul className="mt-14 grid gap-3 lg:grid-cols-12">
          {services.map((service, index) => {
            const mosaic = [
              "min-h-[22rem] lg:col-span-7 lg:min-h-[32rem]",
              "min-h-[16rem] lg:col-span-5 lg:min-h-[32rem]",
              "min-h-[16rem] lg:col-span-5 lg:min-h-[22rem]",
              "min-h-[16rem] lg:col-span-7 lg:min-h-[22rem]",
            ] as const;
            return (
              <li key={service.slug} className={mosaic[index]}>
                <ServiceCard
                  service={service}
                  className="h-full"
                  sizes="(min-width: 1024px) 55vw, 100vw"
                />
              </li>
            );
          })}
        </ul>
        {live.length > 0 ? (
          <ul className="mt-16 grid gap-6 md:grid-cols-2">
            {live.map((project) => (
              <li key={project.slug}>
                <Link href={`/projects/${project.slug}/`} className="block border-t border-grey-200 py-8 hover:text-gold">
                  <p className="font-sans text-[0.68rem] font-medium uppercase tracking-[0.2em] text-grey-500">
                    {project.serviceLabel} · {project.areaLabel}
                  </p>
                  <h2 className="mt-3 font-display text-3xl font-medium">{project.title}</h2>
                  <p className="mt-3 text-base leading-relaxed text-grey-700">{project.summary}</p>
                </Link>
              </li>
            ))}
          </ul>
        ) : null}
      </Container>
      <CtaBand />
    </>
  );
}
