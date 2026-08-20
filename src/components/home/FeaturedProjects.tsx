import Link from "next/link";

import { services } from "@/data/services";

import { Container } from "../ui/Container";
import { ServiceCard } from "../ui/ServiceCard";

export function FeaturedProjects() {
  const featured = services.slice(0, 3);

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="mb-5 h-px w-12 bg-gold" aria-hidden="true" />
            <h2 className="font-display text-4xl font-medium sm:text-5xl">Typical work</h2>
            <p className="mt-5 max-w-measure text-base leading-relaxed text-grey-700">
              Photographs show the kind of rooms and housing we take on. Named
              case studies will follow from supplied summaries.
            </p>
          </div>
          <Link href="/projects/" className="btn-line text-navy">
            All work
          </Link>
        </div>
        <ul className="mt-12 grid gap-3 lg:grid-cols-12">
          {featured.map((service, index) => (
            <li
              key={service.slug}
              className={
                index === 0
                  ? "min-h-[22rem] lg:col-span-8 lg:row-span-2 lg:min-h-[36rem]"
                  : "min-h-[16rem] lg:col-span-4 lg:min-h-[17.5rem]"
              }
            >
              <ServiceCard
                service={service}
                className="h-full"
                sizes={index === 0 ? "(min-width: 1024px) 66vw, 100vw" : "(min-width: 1024px) 33vw, 100vw"}
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
