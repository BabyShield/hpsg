import Link from "next/link";

import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { JsonLd } from "@/components/seo/JsonLd";
import { AreaLinkGrid } from "@/components/ui/AreaLinkGrid";
import { Container } from "@/components/ui/Container";
import { ContentImage } from "@/components/ui/ContentImage";
import { CtaBand } from "@/components/ui/CtaBand";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { homeFaqs, whyHpsg } from "@/data/home";
import { homeHero, photoCredit } from "@/data/photos";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";
import { tier1Areas, tier2Areas } from "@/lib/matrix";
import { faqSchema } from "@/lib/schema";

export const metadata = pageMetadata({
  title: site.homeMetaTitle,
  description: site.homeMetaDescription,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(homeFaqs)} />
      <section className="border-b border-grey-200">
        <ContentImage
          photo={homeHero}
          priority
          className="aspect-[16/9] max-h-[70vh] w-full"
          sizes="100vw"
        />
        <Container className="py-16 sm:py-24">
          <p className="mb-4 text-xs tracking-wide text-grey-600">{photoCredit}</p>
          <p className="mb-6 h-px w-12 bg-gold" aria-hidden="true" />
          <h1 className="max-w-4xl text-4xl sm:text-5xl">{site.homeH1}</h1>
          <p className="mt-6 max-w-measure text-lg text-grey-700">
            Based in Hampstead, we take on kitchen renovation, bathroom
            renovation, painting and decorating, and light refurbishment across
            North West London — from St John&apos;s Wood and Maida Vale to
            Highgate, Queen&apos;s Park and the wider list of areas we cover.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center bg-navy px-6 py-3 text-sm font-medium tracking-wide text-bone"
            >
              Request a quote
            </Link>
            <a
              href={`tel:${site.phoneTel}`}
              className="inline-flex items-center justify-center border border-navy px-6 py-3 text-sm font-medium tracking-wide text-navy"
            >
              {site.phoneDisplay}
            </a>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <p className="mb-3 h-px w-12 bg-gold" aria-hidden="true" />
          <h2 className="text-3xl">Services</h2>
          <ul className="mt-10 grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <li key={service.slug}>
                <ServiceCard service={service} />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-y border-grey-200 py-20">
        <Container>
          <p className="mb-3 h-px w-12 bg-gold" aria-hidden="true" />
          <h2 className="text-3xl">Where we work</h2>
          <p className="mt-4 max-w-measure text-base text-grey-700">
            The work is in North West London, from a Hampstead office. Area
            pages are local landing points; the service pages for each
            neighbourhood are where the detail sits.
          </p>
          <div className="mt-10 space-y-10">
            <AreaLinkGrid areas={tier1Areas()} heading="Tier 1" />
            <AreaLinkGrid areas={tier2Areas()} heading="Also covering" />
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <p className="mb-3 h-px w-12 bg-gold" aria-hidden="true" />
          <h2 className="text-3xl">Why HPSG</h2>
          <ul className="mt-10 grid gap-8 md:grid-cols-2">
            {whyHpsg.map((item) => (
              <li key={item.title}>
                <h3 className="text-xl">{item.title}</h3>
                <p className="mt-3 text-base text-grey-700">{item.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <div className="border-y border-grey-200">
        <FeaturedProjects />
      </div>

      <section className="py-20">
        <Container>
          <p className="mb-3 h-px w-12 bg-gold" aria-hidden="true" />
          <h2 className="text-3xl">Questions</h2>
          <div className="mt-10 max-w-3xl">
            <FaqAccordion items={homeFaqs} />
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
