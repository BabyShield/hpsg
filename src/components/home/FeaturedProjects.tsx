import Link from "next/link";

import { servicePhotos } from "@/data/photos";
import { services } from "@/data/services";

import { Container } from "../ui/Container";
import { ContentImage } from "../ui/ContentImage";
import { SectionHeading } from "../ui/SectionHeading";

export function FeaturedProjects() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          kicker="Interiors"
          title="Typical work"
          text="Photographs show the kind of rooms and housing we take on. Named case studies will follow from supplied summaries."
        />
        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          {services.slice(0, 3).map((service) => (
            <li key={service.slug}>
              <Link href={`/${service.slug}/`} className="group block">
                <ContentImage
                  photo={servicePhotos[service.slug]}
                  className="img-zoom aspect-[4/5] w-full"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                  {service.navLabel}
                </p>
                <h3 className="mt-2 text-xl">{service.name}</h3>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
