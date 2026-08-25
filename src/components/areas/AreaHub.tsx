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
import { areaPhotos, getComboPhotos } from "@/data/photos";
import { services } from "@/data/services";
import type { Area } from "@/data/types";
import {
  getCombosForArea,
  getNearbyAreas,
  hasPaintingMicrosite,
} from "@/lib/matrix";
import { areaTitleCue } from "@/data/seo-cues";
import { addressSingleLine, site } from "@/data/site";
import { publicCopy } from "@/lib/public-copy";
import { absoluteUrl, faqSchema, itemListSchema, placeSchema, serviceSchema, webPageSchema } from "@/lib/schema";
import { areaHook, areaMetaDescription, servicePlainName } from "@/lib/seo-copy";

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
  // A room from the area's dominant housing character — the hero already
  // carries the street view, so this must not repeat it.
  const insetPhoto = getComboPhotos("light-refurbishment", area.slug).hero;
  const landmarks = area.landmarks.map((item) => publicCopy(item)).filter(Boolean);
  const cue = areaTitleCue[area.slug];
  const heroPhoto = photo
    ? {
        ...photo,
        alt: cue
          ? `${area.name} ${area.postcode} — ${cue.toLowerCase()}`
          : photo.alt,
      }
    : undefined;

  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Areas", href: "/areas/" },
    { name: `${area.name} ${area.postcode}`, href: `/areas/${area.slug}/` },
  ];
  const pageUrl = absoluteUrl(`/areas/${area.slug}/`);
  const localFaqs = content.faqs
    .map((item) => ({ q: publicCopy(item.q), a: publicCopy(item.a) }))
    .filter((item) => item.q && item.a);
  // The five generated area FAQs duplicated hero, body and home-page copy on
  // all 25 hubs; the hand-written set carries the page.
  const faqs = localFaqs;
  const description = areaMetaDescription(area);

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: `Property services in ${area.name}`,
          url: pageUrl,
          areaServed: `${area.name}, ${area.postcode}`,
          description,
          image: heroPhoto?.src,
        })}
      />
      <JsonLd
        data={webPageSchema({
          name: `Kitchens and bathrooms in ${area.name} ${area.postcode}`,
          url: pageUrl,
          description,
          image: heroPhoto?.src,
          imageAlt: heroPhoto?.alt,
        })}
      />
      <JsonLd data={placeSchema(area.name, area.postcode)} />
      <JsonLd data={faqSchema(faqs)} />
      {area.tier === 1 ? (
        <JsonLd
          data={itemListSchema(
            `Services in ${area.name}`,
            services
              .filter((service) => serviceHref(area, service.slug))
              .map((service) => ({
                name: `${servicePlainName(service)} in ${area.name}`,
                url: absoluteUrl(`/${service.slug}/${area.slug}/`),
              })),
          )}
        />
      ) : null}
      <article>
        <PageHero
          photo={heroPhoto}
          crumbs={crumbs}
          kicker={area.postcode}
          title={`Kitchens, bathrooms and decorating in ${area.name}`}
          lede={`${area.name} ${area.postcode} is ${areaHook(area)}. Kitchen, bathroom, painting and light refurbishment from Finchley Road.`}
        />
        <Container className="grid items-start gap-12 py-20 sm:py-24 lg:grid-cols-12 lg:gap-16">
          <div className="prose-measure space-y-5 text-base leading-relaxed text-grey-700 lg:col-span-7">
            <p className="lede text-xl text-grey-700 md:text-2xl">{publicCopy(content.intro)}</p>
            <p>{publicCopy(area.housingStock)}</p>
            {content.typical ? <p>{publicCopy(content.typical)}</p> : null}
            <p>
              The council is {publicCopy(area.council)}. Work is carried out from{" "}
              {addressSingleLine}. We visit the {area.name} property before we
              write a proposal; we do not quote from photographs.
            </p>
            <ul className="flex flex-col gap-2 text-navy">
              {services.map((service) => {
                const href = serviceHref(area, service.slug);
                if (!href) return null;
                return (
                  <li key={service.slug}>
                    <Link href={href} className="quiet-link">
                      {servicePlainName(service)} in {area.tier === 1 ? area.name : "North West London"}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <aside className="band-navy p-8 lg:col-span-5 lg:p-10">
            <p className="kicker text-gold">At a glance</p>
            <dl className="mt-8 space-y-6">
              <div className="border-t border-bone/15 pt-5">
                <dt className="caption text-bone/70">Postcode</dt>
                <dd className="mt-2 font-display text-3xl font-normal text-bone">
                  {area.postcode}
                </dd>
              </div>
              <div className="border-t border-bone/15 pt-5">
                <dt className="caption text-bone/70">Council</dt>
                <dd className="mt-2 text-base leading-relaxed text-bone/85">
                  {publicCopy(area.council)}
                </dd>
              </div>
              <div className="border-t border-bone/15 pt-5">
                <dt className="caption text-bone/70">Worked from</dt>
                <dd className="mt-2 text-base leading-relaxed text-bone/85">
                  {site.address.line1}, {site.address.line2}, {site.address.postcode}
                </dd>
              </div>
            </dl>
            {landmarks.length > 0 ? (
              <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 border-t border-bone/15 pt-6 text-sm text-bone/75">
                {landmarks.map((landmark) => (
                  <li key={landmark}>{landmark}</li>
                ))}
              </ul>
            ) : null}
          </aside>
        </Container>

        <LocalFacts
          areaName={area.name}
          facts={getAreaFacts(area.slug)}
          heading={`Ten facts about ${area.name}`}
        />

        <section className="border-y border-grey-200 py-24 sm:py-32">
          <Container>
            <p className="rule mb-8" aria-hidden="true" />
            <h2 className="font-display text-4xl font-normal sm:text-5xl">
              Work we take on in {area.name}
            </h2>
            <p className="lede mt-6 max-w-measure text-xl text-grey-600">
              {area.tier === 1
                ? `Local pages for kitchen renovation, bathroom renovation, painting and light refurbishment in ${area.name}. Each is written for this neighbourhood, not renamed from a generic template.`
                : `${area.name} is covered from the North West London service pages. Kitchen, bathroom, painting and light refurbishment follow the same method as the rest of the list.`}
            </p>
            <ul className="mt-16 grid gap-10 md:grid-cols-2">
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
                      <h3 className="font-display text-3xl font-normal">
                        {servicePlainName(service)}
                      </h3>
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
                          {servicePlainName(service)} in{" "}
                          {area.tier === 1 ? area.name : "North West London"}
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
                      className="quiet-link text-base text-navy"
                    >
                      {servicePlainName(combo.service)} in {area.name}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </Container>
        </section>

        <section className="py-24 sm:py-32">
          <Container className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <p className="rule mb-8" aria-hidden="true" />
              <h2 className="font-display text-4xl font-normal sm:text-5xl">
                Council, conservation and access in {area.name}
              </h2>
              <div className="mt-8 space-y-5 text-base leading-relaxed text-grey-700">
                <p>
                  <span className="font-medium text-navy">Conservation. </span>
                  {publicCopy(area.conservationNotes)}
                </p>
                <p>{publicCopy(content.working)}</p>
                <p>{publicCopy(area.localNotes)}</p>
              </div>
            </div>
            <div className="lg:col-span-6">
              <ContentImage
                photo={insetPhoto}
                className="aspect-[4/5] w-full"
                sizes="(min-width: 1024px) 45vw, 100vw"
              />
              <p className="caption mt-3">{insetPhoto.alt}</p>
            </div>
          </Container>
        </section>

        <section className="border-y border-grey-200 py-24 sm:py-32">
          <Container>
            <p className="rule mb-8" aria-hidden="true" />
            <h2 className="font-display text-4xl font-normal sm:text-5xl">
              Near {area.name}
            </h2>
            <ul className="mosaic mt-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
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
                        className="quiet-link text-base text-navy"
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

        <section className="py-24 sm:py-32">
          <Container className="grid gap-12 lg:grid-cols-12">
            <h2 className="font-display text-4xl font-normal sm:text-5xl lg:col-span-4">
              Questions about {area.name}
            </h2>
            <div className="lg:col-span-8">
              <FaqAccordion items={faqs} />
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
