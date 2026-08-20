import Link from "next/link";

import { JsonLd } from "@/components/seo/JsonLd";
import { AreaLinkGrid } from "@/components/ui/AreaLinkGrid";
import { Container } from "@/components/ui/Container";
import { CtaBand } from "@/components/ui/CtaBand";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { PageHero } from "@/components/ui/PageHero";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { servicePhotos } from "@/data/photos";
import { serviceHubContent } from "@/data/service-hub-content";
import { services } from "@/data/services";
import type { Service } from "@/data/types";
import { getCombosForService, tier2Areas } from "@/lib/matrix";
import { publicCopy } from "@/lib/public-copy";
import { absoluteUrl, faqSchema, serviceSchema } from "@/lib/schema";

export function ServiceHub({ service }: { service: Service }) {
  const content = serviceHubContent[service.slug];
  const combos = getCombosForService(service.slug);
  const comboAreas = combos.map((combo) => combo.area);
  const others = services.filter((item) => item.slug !== service.slug);
  const hrReferral = service.slug === "light-refurbishment";

  const crumbs = [
    { name: "Home", href: "/" },
    { name: service.name, href: `/${service.slug}/` },
  ];

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: service.name,
          url: absoluteUrl(`/${service.slug}/`),
          areaServed: "North West London",
        })}
      />
      <JsonLd data={faqSchema(service.faqs)} />
      <article>
        <PageHero
          photo={servicePhotos[service.slug]}
          crumbs={crumbs}
          kicker="North West London"
          title={`${service.name} in North West London`}
          lede={publicCopy(service.heroLine)}
        />
        <Container className="grid gap-12 py-20 sm:py-28 lg:grid-cols-12 lg:gap-16">
          <div className="space-y-5 text-base leading-relaxed text-grey-700 lg:col-span-7">
            {content.intro.map((paragraph) => publicCopy(paragraph)).filter(Boolean).map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
          <div className="lg:col-span-5">
            <h2 className="font-display text-3xl font-medium">Who it is for</h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-grey-700">
              {content.forWhom.map((paragraph) => publicCopy(paragraph)).filter(Boolean).map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
              {hrReferral ? (
                <p>
                  For design and build, extensions, loft conversions or structural
                  openings, see{" "}
                  <a
                    href="https://hampsteadrenovations.co.uk"
                    className="text-navy underline decoration-gold underline-offset-4 hover:text-gold"
                  >
                    Hampstead Renovations
                  </a>
                  .
                </p>
              ) : null}
            </div>
          </div>
        </Container>

        <section className="border-y border-grey-200 py-20 sm:py-28">
          <Container>
            <h2 className="font-display text-4xl font-medium sm:text-5xl">What is included</h2>
            <p className="mt-5 max-w-measure text-base leading-relaxed text-grey-700">
              The list is the core of a typical instruction. The written proposal
              after survey is the contract scope.
            </p>
            <ul className="mt-10 max-w-3xl divide-y divide-grey-200 border-y border-grey-200">
              {service.included.map((item) => publicCopy(item)).filter(Boolean).map((item) => (
                <li key={item} className="flex gap-5 py-4 text-base leading-relaxed text-grey-700">
                  <span className="mt-3 h-px w-6 shrink-0 bg-gold" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Container>
        </section>

        <section className="py-20 sm:py-28">
          <Container>
            <h2 className="font-display text-4xl font-medium sm:text-5xl">How we work</h2>
            <ol className="mt-12 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
              {service.processSteps.map((step, index) => (
                <li key={step.title}>
                  <p className="font-display text-3xl text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-medium">{step.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-grey-700">{publicCopy(step.text)}</p>
                </li>
              ))}
            </ol>
          </Container>
        </section>

        <section className="border-y border-grey-200 py-20 sm:py-28">
          <Container className="grid gap-10 lg:grid-cols-12">
            <h2 className="font-display text-4xl font-medium sm:text-5xl lg:col-span-4">
              Specification
            </h2>
            <div className="space-y-5 text-base leading-relaxed text-grey-700 lg:col-span-8">
              {content.specification.map((paragraph) => publicCopy(paragraph)).filter(Boolean).map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-20 sm:py-28">
          <Container>
            <h2 className="font-display text-4xl font-medium sm:text-5xl">Areas we cover</h2>
            <p className="mt-5 max-w-measure text-base leading-relaxed text-grey-700">
              {content.areasIntro}
            </p>
            {comboAreas.length > 0 ? (
              <div className="mt-12">
                <h3 className="mb-5 font-sans text-[0.68rem] font-medium uppercase tracking-[0.2em] text-grey-500">
                  {service.name} by area
                </h3>
                <ul className="grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
                  {comboAreas.map((area) => (
                    <li key={area.slug}>
                      <Link
                        href={`/${service.slug}/${area.slug}/`}
                        className="text-base text-navy hover:text-gold"
                      >
                        {service.name} in {area.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            <div className="mt-12">
              <AreaLinkGrid areas={tier2Areas()} heading="Tier 2 area hubs" />
            </div>
          </Container>
        </section>

        <section className="border-y border-grey-200 py-20 sm:py-28">
          <Container className="grid gap-12 lg:grid-cols-12">
            <h2 className="font-display text-4xl font-medium sm:text-5xl lg:col-span-4">
              Questions
            </h2>
            <div className="lg:col-span-8">
              <FaqAccordion items={service.faqs} />
            </div>
          </Container>
        </section>

        <section className="py-20 sm:py-28">
          <Container>
            <h2 className="font-display text-4xl font-medium sm:text-5xl">Related services</h2>
            <ul className="mt-12 grid gap-3 md:grid-cols-3">
              {others.map((item) => (
                <li key={item.slug} className="min-h-[20rem]">
                  <ServiceCard service={item} className="h-full min-h-[20rem]" />
                </li>
              ))}
            </ul>
          </Container>
        </section>
      </article>
      <CtaBand />
    </>
  );
}
