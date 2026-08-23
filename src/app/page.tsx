import Link from "next/link";

import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { HousingStrip } from "@/components/home/HousingStrip";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { ContentImage } from "@/components/ui/ContentImage";
import { CtaBand } from "@/components/ui/CtaBand";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { PhotoTile } from "@/components/ui/PhotoTile";
import { ServiceCard } from "@/components/ui/ServiceCard";
import {
  homeFaqs,
  homeMethod,
  homeMoreAreas,
  homeServiceLines,
  whyHpsg,
} from "@/data/home";
import { areaPhotos, homeHero, officeNeighbourhood, servicePhotos } from "@/data/photos";
import { services } from "@/data/services";
import { addressSingleLine, site } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";
import { tier1Areas } from "@/lib/matrix";
import { absoluteUrl, faqSchema, itemListSchema, webPageSchema } from "@/lib/schema";

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
  "west-hampstead",
  "belsize-park",
  "maida-vale",
  "primrose-hill",
  "highgate",
  "hampstead-garden-suburb",
] as const;

const serviceMosaic = [
  "min-h-[22rem] lg:col-span-7 lg:min-h-[42rem]",
  "min-h-[22rem] lg:col-span-5 lg:min-h-[42rem]",
  "min-h-[18rem] lg:col-span-5 lg:min-h-[26rem]",
  "min-h-[18rem] lg:col-span-7 lg:min-h-[26rem]",
] as const;

const areaMosaic = [
  "min-h-[20rem] md:col-span-2 lg:col-span-6 lg:min-h-[32rem]",
  "min-h-[16rem] lg:col-span-6 lg:min-h-[32rem]",
  "min-h-[14rem] lg:col-span-3 lg:min-h-[16rem]",
  "min-h-[14rem] lg:col-span-3 lg:min-h-[16rem]",
  "min-h-[14rem] lg:col-span-3 lg:min-h-[16rem]",
  "min-h-[14rem] lg:col-span-3 lg:min-h-[16rem]",
  "min-h-[16rem] lg:col-span-6 lg:min-h-[20rem]",
  "min-h-[16rem] lg:col-span-6 lg:min-h-[20rem]",
] as const;

export default function HomePage() {
  const mosaic = mosaicSlugs
    .map((slug) => tier1Areas().find((area) => area.slug === slug))
    .filter((area): area is NonNullable<typeof area> => Boolean(area));

  return (
    <>
      <JsonLd
        data={webPageSchema({
          name: site.homeMetaTitle,
          url: absoluteUrl("/"),
          description: site.homeMetaDescription,
          image: homeHero.src,
          imageAlt: homeHero.alt,
        })}
      />
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

      <section className="relative min-h-svh overflow-hidden text-bone">
        {/* eslint-disable-next-line @next/next/no-img-element -- wide hero crop is unreliable with next/image fill */}
        <img
          src={homeHero.src}
          alt={homeHero.alt}
          className="absolute inset-0 h-full w-full object-cover object-[center_70%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/22 to-navy/8" />
        <Container className="relative flex min-h-svh flex-col justify-end pb-28 pt-28 md:pb-28">
          <p className="kicker hero-type mb-6 text-gold">Hampstead · Finchley Road</p>
          <p className="rule mb-7" aria-hidden="true" />
          <h1 className="hero-type max-w-5xl font-display text-[2.2rem] font-light leading-[1.08] text-bone sm:text-5xl md:text-6xl lg:text-[5.35rem]">
            <span className="block">Kitchen, bathroom</span>
            <span className="block">& refurbishment specialists</span>
            <span className="block">in North West London</span>
          </h1>
          <p className="lede hero-type mt-6 max-w-2xl text-xl text-bone/90 md:mt-8 md:text-2xl">
            Kitchen renovation, bathroom renovation, painting and light
            refurbishment in period houses, conversions and mansion flats —
            survey-led, from a Finchley Road office.
          </p>
          <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <Link href="/contact/" className="btn btn-gold">
              Request a quote
            </Link>
            <a href={`tel:${site.phoneTel}`} className="btn-line text-bone">
              {site.phoneDisplay}
            </a>
          </div>
          <p className="mt-10 max-w-xl text-sm leading-relaxed text-bone/60">
            {addressSingleLine}. Structural openings, lofts and extensions sit
            with Hampstead Renovations.
          </p>
        </Container>
      </section>

      <HousingStrip />

      <section className="py-24 sm:py-32">
        <Container>
          <div className="grid items-end gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="kicker mb-6">The method</p>
              <h2 className="max-w-xl font-display text-4xl font-light sm:text-5xl">
                One visit, one written proposal, one programme
              </h2>
            </div>
            <p className="lede max-w-md text-xl text-grey-600 lg:col-span-5">
              Kitchens, bathrooms, decoration and floors sequenced together so a
              late plumber is not destroying a finish. We do not quote from
              photographs.
            </p>
          </div>
          <ol className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {homeMethod.map((step, index) => (
              <li key={step.title}>
                <p className="font-display text-3xl text-gold">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 font-display text-2xl font-normal">{step.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-grey-700">{step.text}</p>
              </li>
            ))}
          </ol>
        </Container>
        <div className="bleed mt-20">
          <ContentImage
            photo={servicePhotos["kitchen-renovation"]}
            className="aspect-[16/7] w-full min-h-[16rem]"
            sizes="100vw"
          />
        </div>
      </section>

      <section className="pb-24 sm:pb-32">
        <Container className="mb-12 grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="kicker mb-6">Services</p>
            <h2 className="max-w-xl font-display text-4xl font-light sm:text-5xl">
              Four services, from a Hampstead office
            </h2>
          </div>
          <p className="lede max-w-md text-xl text-grey-600 lg:col-span-5">
            Kitchen renovation, bathroom renovation, painting and light
            refurbishment as coordinated programmes — in the conversions,
            mansion flats and family houses around Finchley Road.
          </p>
        </Container>
        <div className="bleed">
          <ul className="mosaic grid-cols-1 lg:grid-cols-12">
            {services.map((service, index) => (
              <li key={service.slug} className={serviceMosaic[index]}>
                <ServiceCard
                  service={service}
                  caption={homeServiceLines[service.slug]}
                  className="h-full min-h-[18rem]"
                  sizes="(min-width: 1024px) 55vw, 100vw"
                />
              </li>
            ))}
          </ul>
        </div>
        <Container>
          <p className="mt-10 max-w-3xl text-sm leading-relaxed text-grey-600">
            Local pages include{" "}
            <Link href="/kitchen-renovation/hampstead/" className="quiet-link text-navy">
              kitchen renovation in Hampstead
            </Link>
            ,{" "}
            <Link href="/bathroom-renovation/st-johns-wood/" className="quiet-link text-navy">
              bathroom renovation in St John&apos;s Wood
            </Link>
            ,{" "}
            <Link href="/kitchen-renovation/maida-vale/" className="quiet-link text-navy">
              kitchen renovation in Maida Vale
            </Link>
            ,{" "}
            <Link href="/painting-decorating/highgate/" className="quiet-link text-navy">
              painting in Highgate
            </Link>{" "}
            and{" "}
            <Link href="/light-refurbishment/west-hampstead/" className="quiet-link text-navy">
              light refurbishment in West Hampstead
            </Link>
            .
          </p>
        </Container>
      </section>

      <section className="pb-24 sm:pb-32">
        <Container className="mb-12 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="kicker mb-6">Areas</p>
            <h2 className="font-display text-4xl font-light sm:text-5xl">
              North West London neighbourhoods
            </h2>
            <p className="lede mt-6 max-w-xl text-xl text-grey-600">
              From Hampstead and Belsize Park to St John&apos;s Wood, Maida Vale,
              Highgate and the wider list. Each page is the housing of that
              neighbourhood, not a renamed copy of this one.
            </p>
          </div>
          <Link href="/areas/" className="btn-line text-navy">
            All areas
          </Link>
        </Container>
        <div className="bleed">
          <ul className="mosaic grid-cols-2 lg:grid-cols-12">
            {mosaic.map((area, index) => {
              const photo = areaPhotos[area.slug];
              if (!photo) return null;
              return (
                <li key={area.slug} className={areaMosaic[index]}>
                  <PhotoTile
                    photo={photo}
                    href={`/areas/${area.slug}/`}
                    title={area.name}
                    caption={area.postcode}
                    className="h-full min-h-[14rem] lg:min-h-full"
                    sizes={
                      index < 2
                        ? "(min-width: 1024px) 50vw, 100vw"
                        : "(min-width: 1024px) 25vw, 50vw"
                    }
                  />
                </li>
              );
            })}
          </ul>
        </div>
        <Container>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-navy">
            {homeMoreAreas.map((area) => (
              <li key={area.slug}>
                <Link href={`/areas/${area.slug}/`} className="quiet-link">
                  {area.name}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="band-navy py-24 sm:py-32">
        <Container className="grid items-start gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <ContentImage
              photo={officeNeighbourhood}
              className="aspect-[4/5] w-full"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
            <p className="caption mt-4 text-bone/50">{addressSingleLine}</p>
          </div>
          <div className="lg:col-span-7">
            <p className="kicker mb-6">The office</p>
            <h2 className="font-display text-4xl font-light text-bone sm:text-5xl">
              Why HPSG
            </h2>
            <ul className="mt-12">
              {whyHpsg.map((item) => (
                <li key={item.title} className="border-t border-bone/15 py-8 last:border-b">
                  <h3 className="font-display text-2xl font-normal text-bone">{item.title}</h3>
                  <p className="mt-3 max-w-measure text-base leading-relaxed text-bone/75">
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-8">
              <Link href="/about/" className="btn-line text-bone">
                About the company
              </Link>
              <Link href="/group/" className="btn-line text-bone">
                The Group
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <FeaturedProjects />

      <section className="border-t border-grey-200 py-24 sm:py-32">
        <Container className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="kicker mb-6">Enquiry</p>
            <h2 className="font-display text-4xl font-light sm:text-5xl">
              Questions before a visit
            </h2>
            <p className="lede mt-6 max-w-sm text-xl text-grey-600">
              If the brief is actually a loft or an extension, we will say so
              rather than stretch the word renovation.
            </p>
          </div>
          <div className="lg:col-span-8">
            <FaqAccordion items={homeFaqs} />
          </div>
        </Container>
      </section>

      <CtaBand
        title="Request a quote"
        text="Tell us the property and the rooms in scope. We visit from Finchley Road before we write a proposal."
      />
    </>
  );
}
