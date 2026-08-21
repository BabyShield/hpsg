import Link from "next/link";

import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { ContentImage } from "@/components/ui/ContentImage";
import { CtaBand } from "@/components/ui/CtaBand";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { PhotoTile } from "@/components/ui/PhotoTile";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { homeFaqs, homeMethod, whyHpsg } from "@/data/home";
import { areaPhotos, homeHero, officeNeighbourhood } from "@/data/photos";
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
  "maida-vale",
  "primrose-hill",
  "highgate",
  "hampstead-garden-suburb",
] as const;

const serviceMosaic = [
  "min-h-[22rem] lg:col-span-7 lg:min-h-[46rem]",
  "min-h-[22rem] lg:col-span-5 lg:min-h-[46rem]",
  "min-h-[18rem] lg:col-span-5 lg:min-h-[28rem]",
  "min-h-[18rem] lg:col-span-7 lg:min-h-[28rem]",
] as const;

const areaMosaic = [
  "min-h-[22rem] md:col-span-2 lg:col-span-7 lg:min-h-[36rem]",
  "min-h-[16rem] lg:col-span-5 lg:min-h-[36rem]",
  "min-h-[14rem] lg:col-span-3 lg:min-h-[18rem]",
  "min-h-[14rem] lg:col-span-3 lg:min-h-[18rem]",
  "min-h-[14rem] lg:col-span-3 lg:min-h-[18rem]",
  "min-h-[14rem] lg:col-span-3 lg:min-h-[18rem]",
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
        <div className="absolute inset-0 bg-gradient-to-t from-navy/82 via-navy/18 to-navy/10" />
        <Container className="relative flex min-h-svh flex-col justify-end pb-24 pt-28 md:pb-28">
          <p className="rule mb-8" aria-hidden="true" />
          <h1 className="hero-type max-w-5xl font-display text-[2.35rem] font-light leading-[1.08] text-bone sm:text-6xl md:text-7xl">
            Kitchen, Bathroom & Refurbishment
            <span className="block">Specialists in North West London</span>
          </h1>
          <p className="lede hero-type mt-6 max-w-lg text-xl text-bone/90 md:mt-8 md:text-2xl">
            Period houses, conversions and mansion flats — survey-led, from a
            Finchley Road office.
          </p>
          <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <Link href="/contact/" className="btn btn-gold">
              Request a quote
            </Link>
            <a href={`tel:${site.phoneTel}`} className="btn-line text-bone">
              {site.phoneDisplay}
            </a>
          </div>
          <p className="caption mt-14 text-bone/55">{addressSingleLine}</p>
        </Container>
      </section>

      <section className="py-24 sm:py-32">
        <Container>
          <p className="kicker mb-8">The method</p>
          <p className="lede max-w-4xl text-3xl text-navy md:text-5xl">
            One visit, one written proposal, one programme — kitchens, bathrooms,
            decoration and floors sequenced together.
          </p>
          <ol className="mt-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {homeMethod.map((step, index) => (
              <li key={step.title}>
                <p className="font-display text-3xl text-gold">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-4 font-display text-2xl font-normal">{step.title}</h2>
                <p className="mt-3 text-base leading-relaxed text-grey-700">{step.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="pb-24 sm:pb-32">
        <Container className="mb-12 grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="kicker mb-6">Services</p>
            <h2 className="max-w-xl font-display text-4xl font-normal sm:text-5xl">
              Four services, from a Hampstead office.
            </h2>
          </div>
          <p className="lede max-w-md text-xl text-grey-600 lg:col-span-5">
            Kitchen renovation, bathroom renovation, painting and light
            refurbishment as one programme — in the conversions, mansion flats
            and family houses around Finchley Road.
          </p>
        </Container>
        <div className="bleed">
          <ul className="mosaic grid-cols-1 lg:grid-cols-12">
            {services.map((service, index) => (
              <li key={service.slug} className={serviceMosaic[index]}>
                <ServiceCard
                  service={service}
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
            </Link>{" "}
            and{" "}
            <Link href="/painting-decorating/highgate/" className="quiet-link text-navy">
              painting in Highgate
            </Link>
            .
          </p>
        </Container>
      </section>

      <section className="pb-24 sm:pb-32">
        <Container className="mb-12 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="kicker mb-6">Areas</p>
            <h2 className="font-display text-4xl font-normal sm:text-5xl">
              North West London neighbourhoods
            </h2>
            <p className="lede mt-6 max-w-xl text-xl text-grey-600">
              From Hampstead and Belsize Park to St John&apos;s Wood, Maida Vale,
              Highgate and the wider list.
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
      </section>

      <section className="border-y border-grey-200 py-24 sm:py-32">
        <Container className="grid items-start gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <ContentImage
              photo={officeNeighbourhood}
              className="aspect-[4/5] w-full"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
            <p className="caption mt-4">{addressSingleLine}</p>
          </div>
          <div className="lg:col-span-7">
            <p className="kicker mb-6">The office</p>
            <h2 className="font-display text-4xl font-normal sm:text-5xl">Why HPSG</h2>
            <ul className="mt-12">
              {whyHpsg.map((item, index) => (
                <li
                  key={item.title}
                  className="grid grid-cols-[auto_1fr] gap-6 border-t border-grey-200 py-8 last:border-b"
                >
                  <span className="font-display text-3xl leading-none text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-normal">{item.title}</h3>
                    <p className="mt-2 max-w-measure text-base leading-relaxed text-grey-700">
                      {item.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <Link href="/about/" className="btn-line mt-10 text-navy">
              About the company
            </Link>
          </div>
        </Container>
      </section>

      <FeaturedProjects />

      <section className="border-t border-grey-200 py-24 sm:py-32">
        <Container className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="kicker mb-6">Enquiry</p>
            <h2 className="font-display text-4xl font-normal sm:text-5xl">Questions</h2>
          </div>
          <div className="lg:col-span-8">
            <FaqAccordion items={homeFaqs} />
          </div>
        </Container>
      </section>

      <CtaBand photo={officeNeighbourhood} />
    </>
  );
}
