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
          lede={service.heroLine}
        />
        <Container className="prose-measure py-16 sm:py-20">
          <div className="max-w-measure space-y-5 text-base text-grey-700">
            {content.intro.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
        </Container>

        <section className="border-y border-grey-200 py-16">
          <Container>
            <h2 className="text-3xl">Who it is for</h2>
            <div className="mt-8 max-w-measure space-y-5 text-base text-grey-700">
              {content.forWhom.map((paragraph) => (
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
          </Container>
        </section>

        <section className="py-16">
          <Container>
            <h2 className="text-3xl">What is included</h2>
            <p className="mt-4 max-w-measure text-base text-grey-700">
              The list is the core of a typical instruction. The written proposal
              after survey is the contract scope.
            </p>
            <ul className="mt-8 max-w-3xl list-disc space-y-3 pl-5 text-base text-grey-700">
              {service.included.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Container>
        </section>

        <section className="border-y border-grey-200 py-16">
          <Container>
            <h2 className="text-3xl">How we work</h2>
            <ol className="mt-10 grid gap-8 md:grid-cols-2">
              {service.processSteps.map((step, index) => (
                <li key={step.title}>
                  <p className="text-sm uppercase tracking-[0.14em] text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 text-xl">{step.title}</h3>
                  <p className="mt-3 text-base text-grey-700">{step.text}</p>
                </li>
              ))}
            </ol>
          </Container>
        </section>

        <section className="py-16">
          <Container>
            <h2 className="text-3xl">Specification</h2>
            <div className="mt-8 max-w-measure space-y-5 text-base text-grey-700">
              {content.specification.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
          </Container>
        </section>

        <section className="border-y border-grey-200 py-16">
          <Container>
            <h2 className="text-3xl">Areas we cover</h2>
            <p className="mt-4 max-w-measure text-base text-grey-700">
              {content.areasIntro}
            </p>
            {comboAreas.length > 0 ? (
              <div className="mt-10">
                <h3 className="mb-4 text-sm font-medium uppercase tracking-[0.14em] text-grey-600">
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
            <div className="mt-10">
              <AreaLinkGrid areas={tier2Areas()} heading="Tier 2 area hubs" />
            </div>
          </Container>
        </section>

        <section className="py-16">
          <Container>
            <h2 className="text-3xl">Questions</h2>
            <div className="mt-10 max-w-3xl">
              <FaqAccordion items={service.faqs} />
            </div>
          </Container>
        </section>

        <section className="border-t border-grey-200 py-16">
          <Container>
            <h2 className="text-3xl">Related services</h2>
            <ul className="mt-8 grid gap-4 md:grid-cols-3">
              {others.map((item) => (
                <li key={item.slug}>
                  <ServiceCard service={item} />
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
