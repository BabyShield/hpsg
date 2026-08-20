import Link from "next/link";

import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { ContentImage } from "@/components/ui/ContentImage";
import { CtaBand } from "@/components/ui/CtaBand";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { LocalFacts } from "@/components/ui/LocalFacts";
import { PageHero } from "@/components/ui/PageHero";
import { PhotoTile } from "@/components/ui/PhotoTile";
import { getAreaFacts } from "@/data/area-facts";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { getComboContent } from "@/data/combo-content";
import { areaHubContent } from "@/data/area-hub-content";
import { areaPhotos } from "@/data/photos";
import { services } from "@/data/services";
import type { Area } from "@/data/types";
import {
  getCombosForArea,
  getNearbyAreas,
  hasPaintingMicrosite,
} from "@/lib/matrix";
import { publicCopy } from "@/lib/public-copy";
import { absoluteUrl, faqSchema, itemListSchema, serviceSchema } from "@/lib/schema";

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
  const photo = areaPhotos[area.slug];

  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Areas", href: "/areas/" },
    { name: area.name, href: `/areas/${area.slug}/` },
  ];

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: `Property services in ${area.name}`,
          url: absoluteUrl(`/areas/${area.slug}/`),
          areaServed: `${area.name}, ${area.postcode}`,
          description: `Kitchen renovation, bathroom renovation, painting and light refurbishment in ${area.name}, ${area.postcode}.`,
          image: photo?.src,
        })}
      />
      <JsonLd data={faqSchema(content.faqs)} />
      {area.tier === 1 ? (
        <JsonLd
          data={itemListSchema(
            `Services in ${area.name}`,
            services
              .filter((service) => serviceHref(area, service.slug))
              .map((service) => ({
                name: `${service.name} in ${area.name}`,
                url: absoluteUrl(`/${service.slug}/${area.slug}/`),
              })),
          )}
        />
      ) : null}
      <article>
        <PageHero
          photo={photo}
          crumbs={crumbs}
          kicker={area.postcode}
          title={`Kitchens, bathrooms and decorating in ${area.name}`}
          lede={`Kitchen renovation, bathroom renovation, painting and light refurbishment in ${area.name}, ${area.postcode}.`}
        />
        <Container className="grid items-start gap-12 py-20 sm:py-28 lg:grid-cols-12 lg:gap-16">
          <div className="space-y-5 text-base leading-relaxed text-grey-700 lg:col-span-7">
            <p className="text-lg">{publicCopy(content.intro)}</p>
            <p>{publicCopy(area.housingStock)}</p>
            {content.typical ? <p>{publicCopy(content.typical)}</p> : null}
          </div>
        </Container>

        <LocalFacts areaName={area.name} facts={getAreaFacts(area.slug)} />

        <section className="border-y border-grey-200 py-20 sm:py-28">
          <Container>
            <h2 className="font-display text-4xl font-medium sm:text-5xl">
              Services in {area.name}
            </h2>
            <p className="mt-5 max-w-measure text-base leading-relaxed text-grey-700">
              {area.tier === 1
                ? `Local pages for kitchen renovation, bathroom renovation, painting and light refurbishment in ${area.name}. Each is written for this neighbourhood, not renamed from a generic template.`
                : `${area.name} is covered from the North West London service pages. Kitchen, bathroom, painting and light refurbishment follow the same method as the rest of the list.`}
            </p>
            <ul className="mt-12 grid gap-8 md:grid-cols-2">
              {services.map((service) => {
                const href = serviceHref(area, service.slug);
                const paintingExcluded =
                  service.slug === "painting-decorating" &&
                  hasPaintingMicrosite(area.slug);
                const local = getComboContent(service.slug, area.slug);
                const caption = publicCopy(local?.lede ?? service.heroLine);
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
                  <li key={service.slug}>
                    <div className="min-h-[18rem]">
                      <ServiceCard
                        service={service}
                        href={href ?? undefined}
                        className="h-full min-h-[18rem]"
                      />
                    </div>
                    {caption ? (
                      <p className="mt-4 text-base leading-relaxed text-grey-700">{caption}</p>
                    ) : null}
                    {href ? (
                      <p className="mt-2">
                        <Link href={href} className="btn-line text-navy">
                          {service.name} in {area.tier === 1 ? area.name : "North West London"}
                        </Link>
                      </p>
                    ) : null}
                  </li>
                );
              })}
            </ul>
            {area.tier === 1 && combos.length > 0 ? (
              <ul className="mt-12 grid gap-2 sm:grid-cols-2">
                {combos.map((combo) => (
                  <li key={combo.service.slug}>
                    <Link
                      href={`/${combo.service.slug}/${area.slug}/`}
                      className="text-base text-navy hover:text-gold"
                    >
                      {combo.service.name} in {area.name}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </Container>
        </section>

        <section className="py-20 sm:py-28">
          <Container className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <h2 className="font-display text-4xl font-medium sm:text-5xl">
                Working in {area.name}
              </h2>
              <div className="mt-8 space-y-5 text-base leading-relaxed text-grey-700">
                <p>
                  <span className="font-medium text-navy">Council. </span>
                  {publicCopy(area.council)}
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
                      {publicCopy(landmark)}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
            {photo ? (
              <div className="lg:col-span-6">
                <ContentImage
                  photo={photo}
                  className="aspect-[4/5] w-full"
                  sizes="(min-width: 1024px) 45vw, 100vw"
                />
                <p className="mt-3 text-sm text-grey-600">
                  {area.name}, {area.postcode}
                </p>
              </div>
            ) : null}
          </Container>
        </section>

        <section className="border-y border-grey-200 py-20 sm:py-28">
          <Container>
            <h2 className="font-display text-4xl font-medium sm:text-5xl">Nearby areas</h2>
            <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {nearby.map((item) => {
                const nearbyPhoto = areaPhotos[item.slug];
                return (
                  <li key={item.slug} className="min-h-[12rem]">
                    {nearbyPhoto ? (
                      <PhotoTile
                        photo={nearbyPhoto}
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
              Questions about {area.name}
            </h2>
            <div className="lg:col-span-8">
              <FaqAccordion items={content.faqs} />
            </div>
          </Container>
        </section>
      </article>
      <CtaBand
        title={`Request a quote for work in ${area.name}`}
        text="Tell us the property and the rooms in scope. We visit before we write a proposal."
      />
    </>
  );
}
