import Link from "next/link";

import { photoCredit, servicePhotos } from "@/data/photos";
import { services } from "@/data/services";

import { Container } from "../ui/Container";
import { ContentImage } from "../ui/ContentImage";

export function FeaturedProjects() {
  const featured = services.slice(0, 3);

  return (
    <section className="py-20">
      <Container>
        <p className="mb-3 h-px w-12 bg-gold" aria-hidden="true" />
        <h2 className="text-3xl">Typical work</h2>
        <p className="mt-4 max-w-measure text-base text-grey-700">
          {photoCredit} Named case studies will follow from supplied project
          summaries. [TBC: 6 HR project summaries]
        </p>
        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {featured.map((service) => (
            <li key={service.slug}>
              <Link href={`/${service.slug}/`} className="block hover:opacity-95">
                <ContentImage
                  photo={servicePhotos[service.slug]}
                  className="aspect-[16/9] w-full"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
                <p className="mt-4 text-sm uppercase tracking-[0.14em] text-grey-600">
                  {service.navLabel}
                </p>
                <h3 className="mt-2 text-xl text-navy">{service.name}</h3>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
