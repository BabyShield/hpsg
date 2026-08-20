import Link from "next/link";

import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { CtaBand } from "@/components/ui/CtaBand";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { PageHero } from "@/components/ui/PageHero";
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
        <Container className="prose-measure py-16">
          <p className="max-w-measure text-lg text-grey-700">{publicCopy(content.intro)}</p>
        </Container>

        <section className="border-y border-grey-200 py-16">
          <Container>
            <h2 className="text-3xl">Services in {area.name}</h2>
            <ul className="mt-10 grid gap-4 md:grid-cols-2">
              {services.map((service) => {
                const href = serviceHref(area, service.slug);
                const paintingExcluded =
                  service.slug === "painting-decorating" &&
                  hasPaintingMicrosite(area.slug);
                if (paintingExcluded) {
                  return (
                    <li key={service.slug} className="border border-grey-200 p-8">
                      <h3 className="text-2xl">{service.name}</h3>
                      <p className="mt-3 text-base text-grey-700">
                        Painting in {area.name} is handled by our specialist local
                        painting company.
                      </p>
                    </li>
                  );
                }
                return (
                  <li key={service.slug}>
                    <ServiceCard service={service} href={href ?? undefined} />
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

        <section className="py-16">
          <Container>
            <h2 className="text-3xl">Working in {area.name}</h2>
            <div className="mt-8 max-w-measure space-y-5 text-base text-grey-700">
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
                  <li key={landmark} className="border border-grey-200 px-3 py-1">
                    {landmark}
                  </li>
                ))}
              </ul>
            ) : null}
          </Container>
        </section>

        <section className="border-y border-grey-200 py-16">
          <Container>
            <h2 className="text-3xl">Nearby areas</h2>
            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {nearby.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/areas/${item.slug}/`}
                    className="text-base text-navy hover:text-gold"
                  >
                    Property services in {item.name}, {item.postcode}
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </section>

        <section className="py-16">
          <Container>
            <h2 className="text-3xl">Questions</h2>
            <div className="mt-10 max-w-3xl">
              <FaqAccordion items={content.faqs} />
            </div>
          </Container>
        </section>
      </article>
      <CtaBand />
    </>
  );
}
