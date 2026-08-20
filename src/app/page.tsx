import Link from "next/link";

import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { ContentImage } from "@/components/ui/ContentImage";
import { CtaBand } from "@/components/ui/CtaBand";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { homeFaqs, whyHpsg } from "@/data/home";
import { areaPhotos, homeHero } from "@/data/photos";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";
import { tier1Areas } from "@/lib/matrix";
import { faqSchema } from "@/lib/schema";

export const metadata = pageMetadata({
  title: site.homeMetaTitle,
  description: site.homeMetaDescription,
  path: "/",
});

const mosaicSlugs = [
  "hampstead",
  "st-johns-wood",
  "maida-vale",
  "primrose-hill",
  "highgate",
  "hampstead-garden-suburb",
] as const;

export default function HomePage() {
  const mosaic = mosaicSlugs
    .map((slug) => tier1Areas().find((area) => area.slug === slug))
    .filter((area): area is NonNullable<typeof area> => Boolean(area));

  return (
    <>
      <JsonLd data={faqSchema(homeFaqs)} />
      <section className="relative min-h-[32rem] overflow-hidden text-bone md:min-h-[42rem]">
        {/* eslint-disable-next-line @next/next/no-img-element -- wide hero crop is unreliable with next/image fill */}
        <img
          src={homeHero.src}
          alt={homeHero.alt}
          className="absolute inset-0 h-full w-full object-cover object-[center_80%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/45 to-navy/20" />
        <Container className="relative flex min-h-[32rem] flex-col justify-end pb-14 pt-16 md:min-h-[42rem] md:pb-20">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
            Hampstead · North West London
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl text-bone sm:text-5xl md:text-6xl">
            {site.homeH1}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-bone/85">
            Kitchen renovation, bathroom renovation, painting and decorating, and
            light refurbishment for period houses, conversions and mansion
            flats — from a Hampstead office.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact/" className="btn btn-gold">
              Request a quote
            </Link>
            <a href={`tel:${site.phoneTel}`} className="btn btn-ghost text-bone">
              {site.phoneDisplay}
            </a>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading kicker="What we do" title="Four services, one programme" />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {services.map((service) => (
              <li key={service.slug}>
                <ServiceCard service={service} />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-navy py-16 text-bone sm:py-24">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              light
              kicker="Where we work"
              title="North West London neighbourhoods"
              text="From Hampstead and Belsize Park to St John's Wood, Maida Vale, Highgate and the wider list of areas on this site."
            />
            <Link href="/areas/" className="btn btn-ghost text-bone">
              All areas
            </Link>
          </div>
          <ul className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3">
            {mosaic.map((area) => {
              const photo = areaPhotos[area.slug];
              return (
                <li key={area.slug}>
                  <Link href={`/areas/${area.slug}/`} className="group relative block">
                    {photo ? (
                      <ContentImage
                        photo={photo}
                        className="img-zoom aspect-[4/3] w-full"
                        sizes="(min-width: 768px) 33vw, 50vw"
                      />
                    ) : null}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                    <p className="absolute inset-x-0 bottom-0 p-4 text-sm font-medium text-bone">
                      {area.name}
                      <span className="ml-2 text-bone/60">{area.postcode}</span>
                    </p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading kicker="The practice" title="Why HPSG" />
          <ul className="mt-12 grid gap-px bg-grey-200 sm:grid-cols-2">
            {whyHpsg.map((item, index) => (
              <li key={item.title} className="bg-bone p-8 sm:p-10">
                <p className="text-xs font-semibold tracking-[0.2em] text-gold">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 text-2xl">{item.title}</h3>
                <p className="mt-3 max-w-measure text-base text-grey-700">{item.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <div className="bg-grey-50">
        <FeaturedProjects />
      </div>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading kicker="Advice" title="Questions" />
          <div className="mt-10 max-w-3xl">
            <FaqAccordion items={homeFaqs} />
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
