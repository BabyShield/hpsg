import Link from "next/link";

import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { ContentImage } from "@/components/ui/ContentImage";
import { CtaBand } from "@/components/ui/CtaBand";
import { ServiceCard } from "@/components/ui/ServiceCard";
import {
  bathroomRoomPhotos,
  photoCredit,
  refurbRoomPhotos,
  servicePhotos,
} from "@/data/photos";
import { publishedProjects } from "@/data/projects";
import { services } from "@/data/services";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Typical kitchens, bathrooms and interiors in North West London | HPSG",
  description:
    "Typical kitchen renovation, bathroom renovation and interiors in Hampstead and North West London. Named case studies are published from supplied summaries only. 020 7101 3168.",
  path: "/projects/",
  image: servicePhotos["kitchen-renovation"].src,
  imageAlt: servicePhotos["kitchen-renovation"].alt,
});

const typical = [
  {
    title: "Kitchens",
    text: "Rear-return galleys, compact mansion-flat rooms and family kitchens scribed to chimney breasts. Layout follows the stacks, the extract and the access — not a catalogue island.",
    href: "/kitchen-renovation/",
    photo: servicePhotos["kitchen-renovation"],
  },
  {
    title: "Bathrooms",
    text: "Tanking, extract and compact layouts in conversions and mansion flats. Wet rooms are finished and tested before decoration closes around them.",
    href: "/bathroom-renovation/",
    photo: bathroomRoomPhotos.shower,
  },
  {
    title: "Painting and decorating",
    text: "Preparation, original joinery and occupied homes. A written prep specification, not a quick refresh over failed plaster.",
    href: "/painting-decorating/",
    photo: servicePhotos["painting-decorating"],
  },
  {
    title: "Light refurbishment",
    text: "Kitchen, bathroom, floors and decoration as one programme, without changing the structure. Sequence is written: wet trades first, paint last.",
    href: "/light-refurbishment/",
    photo: refurbRoomPhotos.sitting,
  },
] as const;

export default function ProjectsPage() {
  const live = publishedProjects();

  return (
    <>
      <Container className="py-16 sm:py-28">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Work", href: "/projects/" },
          ]}
        />
        <p className="rule mb-8" aria-hidden="true" />
        <h1 className="font-display text-5xl font-light sm:text-6xl">Work</h1>
        <div className="mt-8 max-w-measure space-y-5 text-base leading-relaxed text-grey-700">
          <p className="lede text-xl text-grey-600 md:text-2xl">
            Typical kitchens, bathrooms and interiors in the housing stock we
            take on. Named case studies are published only from supplied
            summaries.
          </p>
          <p>{photoCredit}</p>
          <p>
            Kitchen renovation, bathroom renovation, painting and light
            refurbishment pages carry the method, the housing types and the
            local pages. This page is a way into that work, not a gallery of
            invented projects.
          </p>
        </div>

        <ul className="mt-20 grid gap-x-8 gap-y-14 md:grid-cols-2">
          {typical.map((item) => (
            <li key={item.title}>
              <ContentImage
                photo={item.photo}
                className="aspect-[4/3] w-full"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
              <h2 className="mt-6 font-display text-3xl font-normal">{item.title}</h2>
              <p className="mt-3 text-base leading-relaxed text-grey-700">{item.text}</p>
              <p className="mt-4">
                <Link href={item.href} className="btn-line text-navy">
                  {item.title} in North West London
                </Link>
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-24">
          <p className="kicker mb-8">Services</p>
          <h2 className="font-display text-4xl font-light sm:text-5xl">
            The four programmes
          </h2>
        </div>
        <ul className="mosaic mt-12 lg:grid-cols-12">
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
                <Link href={`/projects/${project.slug}/`} className="block border-t border-grey-200 py-8">
                  <p className="kicker">
                    {project.serviceLabel} · {project.areaLabel}
                  </p>
                  <h2 className="mt-3 font-display text-3xl font-normal">{project.title}</h2>
                  <p className="mt-3 text-base leading-relaxed text-grey-700">{project.summary}</p>
                </Link>
              </li>
            ))}
          </ul>
        ) : null}
      </Container>
      <CtaBand
        title="Request a quote for work in North West London"
        text="Tell us the property and the rooms in scope. We visit before we write a proposal."
      />
    </>
  );
}
