import Link from "next/link";

import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { CtaBand } from "@/components/ui/CtaBand";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { PageHero } from "@/components/ui/PageHero";
import { PhotoTile } from "@/components/ui/PhotoTile";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { faqSchema } from "@/lib/schema";
import { areaHubContent } from "@/data/area-hub-content";
import { areaPhotos } from "@/data/photos";
import { publicCopy } from "@/lib/public-copy";
import { services } from "@/data/services";
import type { Area } from "@/data/types";
import {
  getCombosForArea,
  getNearbyAreas,
  hasPaintingMicrosite,
} from "@/lib/matrix";

function serviceHref(area: Area, serviceSlug: string): string | null {
  if (area.tier === 2) return `/${serviceSlug}/`;
  if (serviceSlug === "painting-decorating" && hasPaintingMicrosite(area.slug)) {
    return null;
  }
  return `/${serviceSlug}/${area.slug}/`;
}

export function AreaHub({ area }: { area: Area }) {
  const content = areaHubContent[area.slug];
  const nearby = getNearbyAreas(area);
  const combos = getCombosForArea(area.slug);

  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Areas", href: "/areas/" },
    { name: area.name, href: `/areas/${area.slug}/` },
  ];

  return (
    <>
      <JsonLd data={faqSchema(content.faqs)} />
      <article>
        <PageHero
          photo={areaPhotos[area.slug]}
          crumbs={crumbs}
          kicker={area.postcode}
          title={`Property services in ${area.name}`}
          lede={`Kitchen, bathroom, painting and light refurbishment in ${area.name}.`}
        />
        <Container className="py-20 sm:py-28">
          <p className="max-w-measure text-lg leading-relaxed text-grey-700">
            {publicCopy(content.intro)}
          </p>
        </Container>

        <section className="border-y border-grey-200 py-20 sm:py-28">
          <Container>
            <h2 className="font-display text-4xl font-medium sm:text-5xl">
              Services in {area.name}
            </h2>
            <ul className="mt-12 grid gap-3 md:grid-cols-2">
              {services.map((service) => {
                const href = serviceHref(area, service.slug);
                const paintingExcluded =
                  service.slug === "painting-decorating" &&
                  hasPaintingMicrosite(area.slug);
                if (paintingExcluded) {
                  return (
                    <li key={service.slug} className="border-t border-grey-200 py-8">
                      <h3 className="font-display text-3xl font-medium">{service.name}</h3>
                      <p className="mt-3 text-base leading-relaxed text-grey-700">
                        Painting in {area.name} is handled by our specialist local
                        painting company.
                      </p>
                    </li>
                  );
                }
                return (
                  <li key={service.slug} className="min-h-[20rem]">
                    <ServiceCard
                      service={service}
                      href={href ?? undefined}
                      className="h-full min-h-[20rem]"
                    />
                  </li>
                );
              })}
            </ul>
            {area.tier === 1 && combos.length > 0 ? (
              <p className="mt-8 text-sm text-grey-600">
                Combination pages for {area.name} are listed from each service
                card above.
              </p>
            ) : null}
          </Container>
        </section>

        <section className="py-20 sm:py-28">
          <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <h2 className="font-display text-4xl font-medium sm:text-5xl">
                Working in {area.name}
              </h2>
              <div className="mt-8 space-y-5 text-base leading-relaxed text-grey-700">
                <p>
                  <span className="font-medium text-navy">Council. </span>
                  {area.council}
                </p>
                <p>
                  <span className="font-medium text-navy">Conservation. </span>
                  {publicCopy(area.conservationNotes)}
                </p>
                <p>{publicCopy(content.working)}</p>
                <p>{publicCopy(area.localNotes)}</p>
              </div>
              {area.landmarks.length > 0 ? (
                <ul className="mt-8 flex flex-wrap gap-3 text-sm text-grey-600">
                  {area.landmarks.map((landmark) => (
                    <li key={landmark} className="border-b border-grey-200 pb-1">
                      {landmark}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </Container>
        </section>

        <section className="border-y border-grey-200 py-20 sm:py-28">
          <Container>
            <h2 className="font-display text-4xl font-medium sm:text-5xl">Nearby areas</h2>
            <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {nearby.map((item) => {
                const photo = areaPhotos[item.slug];
                return (
                  <li key={item.slug} className="min-h-[12rem]">
                    {photo ? (
                      <PhotoTile
                        photo={photo}
                        href={`/areas/${item.slug}/`}
                        title={item.name}
                        caption={item.postcode}
                        className="h-full min-h-[12rem]"
                        sizes="(min-width: 1024px) 33vw, 50vw"
                      />
                    ) : (
                      <Link
                        href={`/areas/${item.slug}/`}
                        className="text-base text-navy hover:text-gold"
                      >
                        Property services in {item.name}, {item.postcode}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </Container>
        </section>

        <section className="py-20 sm:py-28">
          <Container className="grid gap-12 lg:grid-cols-12">
            <h2 className="font-display text-4xl font-medium sm:text-5xl lg:col-span-4">
              Questions
            </h2>
            <div className="lg:col-span-8">
              <FaqAccordion items={content.faqs} />
            </div>
          </Container>
        </section>
      </article>
      <CtaBand />
    </>
  );
}
