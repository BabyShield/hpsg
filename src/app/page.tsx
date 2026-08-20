import Link from "next/link";

import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { ContentImage } from "@/components/ui/ContentImage";
import { CtaBand } from "@/components/ui/CtaBand";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { PhotoTile } from "@/components/ui/PhotoTile";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { homeFaqs, whyHpsg } from "@/data/home";
import { areaPhotos, homeHero, officeNeighbourhood } from "@/data/photos";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";
import { tier1Areas } from "@/lib/matrix";
import { absoluteUrl, faqSchema, itemListSchema } from "@/lib/schema";

export const metadata = pageMetadata({
  title: site.homeMetaTitle,
  description: site.homeMetaDescription,
  path: "/",
  image: homeHero.src,
  imageAlt: homeHero.alt,
});

const mosaicSlugs = [
  "hampstead",
  "st-johns-wood",
  "maida-vale",
  "primrose-hill",
  "highgate",
  "hampstead-garden-suburb",
] as const;

const serviceMosaic = [
  "lg:col-span-7 lg:min-h-[38rem]",
  "lg:col-span-5 lg:min-h-[38rem]",
  "lg:col-span-5 lg:min-h-[24rem]",
  "lg:col-span-7 lg:min-h-[24rem]",
] as const;

export default function HomePage() {
  const mosaic = mosaicSlugs
    .map((slug) => tier1Areas().find((area) => area.slug === slug))
    .filter((area): area is NonNullable<typeof area> => Boolean(area));
  const [featuredArea, ...otherAreas] = mosaic;

  return (
    <>
      <JsonLd data={faqSchema(homeFaqs)} />
      <JsonLd
        data={itemListSchema(
          "North West London property services",
          services.map((service) => ({
            name: service.name,
            url: absoluteUrl(`/${service.slug}/`),
          })),
        )}
      />
      <section className="relative min-h-[calc(100svh-4.5rem)] overflow-hidden text-bone">
        {/* eslint-disable-next-line @next/next/no-img-element -- wide hero crop is unreliable with next/image fill */}
        <img
          src={homeHero.src}
          alt={homeHero.alt}
          className="absolute inset-0 h-full w-full object-cover object-[center_80%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/45 to-navy/15" />
        <Container className="relative flex min-h-[calc(100svh-4.5rem)] flex-col justify-end pb-16 pt-20 md:pb-24">
          <p className="mb-6 h-px w-12 bg-gold" aria-hidden="true" />
          <h1 className="max-w-4xl font-display text-4xl font-medium text-bone sm:text-6xl md:text-7xl">
            {site.homeH1}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-bone/85">
            Kitchen renovation, bathroom renovation, painting and decorating, and
            light refurbishment for period houses, conversions and mansion
            flats — from a Hampstead office.
          </p>
          <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <Link href="/contact/" className="btn btn-gold">
              Request a quote
            </Link>
            <a href={`tel:${site.phoneTel}`} className="btn-line text-bone">
              {site.phoneDisplay}
            </a>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="mb-5 h-px w-12 bg-gold" aria-hidden="true" />
            <h2 className="max-w-xl font-display text-4xl font-medium sm:text-5xl">
              Four services, from a Hampstead office.
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-grey-700 lg:col-span-5">
            We take on kitchens, bathrooms, decoration and light refurbishment as
            one programme — not a collection of separate trades. The work is in
            the housing around our office: period conversions, mansion flats and
            family houses in North West London.
          </p>
        </Container>
        <Container className="mt-12">
          <ul className="grid gap-3 lg:grid-cols-12">
            {services.map((service, index) => (
              <li key={service.slug} className={serviceMosaic[index]}>
                <ServiceCard
                  service={service}
                  className="h-full min-h-[20rem]"
                  sizes="(min-width: 1024px) 55vw, 100vw"
                />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-navy py-20 text-bone sm:py-28">
        <Container>
          <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-5">
              <p className="mb-5 h-px w-12 bg-gold" aria-hidden="true" />
              <h2 className="font-display text-4xl font-medium text-bone sm:text-5xl">
                North West London neighbourhoods
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-bone/75">
                From Hampstead and Belsize Park to St John&apos;s Wood, Maida Vale,
                Highgate and the wider list of areas on this site.
              </p>
              <Link href="/areas/" className="btn-line mt-8 text-bone">
                All areas
              </Link>
            </div>
            {featuredArea && areaPhotos[featuredArea.slug] ? (
              <div className="min-h-[22rem] lg:col-span-7 lg:min-h-[30rem]">
                <PhotoTile
                  photo={areaPhotos[featuredArea.slug]}
                  href={`/areas/${featuredArea.slug}/`}
                  title={featuredArea.name}
                  caption={featuredArea.postcode}
                  className="h-full min-h-[22rem] lg:min-h-[30rem]"
                  sizes="(min-width: 1024px) 55vw, 100vw"
                />
              </div>
            ) : null}
          </div>
          <ul className="mt-3 grid grid-cols-2 gap-3 md:grid-cols-5">
            {otherAreas.map((area) => {
              const photo = areaPhotos[area.slug];
              if (!photo) return null;
              return (
                <li key={area.slug} className="min-h-[10rem] md:min-h-[14rem]">
                  <PhotoTile
                    photo={photo}
                    href={`/areas/${area.slug}/`}
                    title={area.name}
                    caption={area.postcode}
                    className="h-full min-h-[10rem] md:min-h-[14rem]"
                    sizes="(min-width: 768px) 20vw, 50vw"
                  />
                </li>
              );
            })}
          </ul>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <ContentImage
              photo={officeNeighbourhood}
              className="aspect-[4/5] w-full"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>
          <div className="lg:col-span-7">
            <p className="mb-5 h-px w-12 bg-gold" aria-hidden="true" />
            <h2 className="font-display text-4xl font-medium sm:text-5xl">Why HPSG</h2>
            <ul className="mt-10 divide-y divide-grey-200 border-y border-grey-200">
              {whyHpsg.map((item, index) => (
                <li key={item.title} className="grid grid-cols-[auto_1fr] gap-6 py-7">
                  <span className="font-display text-2xl text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-medium">{item.title}</h3>
                    <p className="mt-2 max-w-measure text-base leading-relaxed text-grey-700">
                      {item.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <div className="bg-grey-50">
        <FeaturedProjects />
      </div>

      <section className="py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="mb-5 h-px w-12 bg-gold" aria-hidden="true" />
            <h2 className="font-display text-4xl font-medium sm:text-5xl">Questions</h2>
          </div>
          <div className="lg:col-span-8">
            <FaqAccordion items={homeFaqs} />
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
