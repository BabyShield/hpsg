import Link from "next/link";

import { JsonLd } from "@/components/seo/JsonLd";
import { AreaLinkGrid } from "@/components/ui/AreaLinkGrid";
import { Container } from "@/components/ui/Container";
import { CtaBand } from "@/components/ui/CtaBand";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { PageHero } from "@/components/ui/PageHero";
import { PhotoTile } from "@/components/ui/PhotoTile";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { areaPhotos, servicePhotos } from "@/data/photos";
import { serviceHubContent } from "@/data/service-hub-content";
import { services } from "@/data/services";
import type { Service } from "@/data/types";
import { getCombosForService, tier2Areas } from "@/lib/matrix";
import { publicCopy } from "@/lib/public-copy";
import {
  absoluteUrl,
  faqSchema,
  howToSchema,
  itemListSchema,
  serviceSchema,
  webPageSchema,
} from "@/lib/schema";
import { serviceSearchFaqs } from "@/lib/seo-copy";

export function ServiceHub({ service }: { service: Service }) {
  const content = serviceHubContent[service.slug];
  const combos = getCombosForService(service.slug);
  const comboAreas = combos.map((combo) => combo.area);
  const others = services.filter((item) => item.slug !== service.slug);
  const hrReferral = service.slug === "light-refurbishment";

  const crumbs = [
    { name: "Home", href: "/" },
    { name: `${service.name} in North West London`, href: `/${service.slug}/` },
  ];
  const pageUrl = absoluteUrl(`/${service.slug}/`);
  const faqs = [...serviceSearchFaqs(service), ...service.faqs]
    .map((item) => ({ q: publicCopy(item.q), a: publicCopy(item.a) }))
    .filter((item) => item.q && item.a);

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: `${service.name} in North West London`,
          url: pageUrl,
          areaServed: ["North West London", ...comboAreas.map((area) => `${area.name}, ${area.postcode}`)],
          description: service.metaDescription,
          image: servicePhotos[service.slug].src,
        })}
      />
      <JsonLd
        data={webPageSchema({
          name: `${service.name} in North West London`,
          url: pageUrl,
          description: service.metaDescription,
          image: servicePhotos[service.slug].src,
        })}
      />
      <JsonLd
        data={howToSchema({
          name: `How we carry out ${service.name.toLowerCase()} in North West London`,
          description: service.summary,
          steps: service.processSteps,
        })}
      />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={itemListSchema(
          `${service.name} by neighbourhood`,
          comboAreas.map((area) => ({
            name: `${service.name} in ${area.name}`,
            url: absoluteUrl(`/${service.slug}/${area.slug}/`),
          })),
        )}
      />
      <article>
        <PageHero
          photo={servicePhotos[service.slug]}
          crumbs={crumbs}
          kicker="North West London"
          title={`${service.name} in North West London`}
          lede={publicCopy(service.heroLine)}
        />
        <Container className="grid gap-12 py-24 sm:py-32 lg:grid-cols-12 lg:gap-16">
          <div className="space-y-5 text-base leading-relaxed text-grey-700 lg:col-span-7">
            {content.intro.map((paragraph) => publicCopy(paragraph)).filter(Boolean).map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
          <div className="lg:col-span-5">
            <p className="rule mb-6" aria-hidden="true" />
            <h2 className="font-display text-3xl font-normal">
              {service.name} for North West London houses and flats
            </h2>
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
                    className="quiet-link text-navy"
                  >
                    Hampstead Renovations
                  </a>
                  .
                </p>
              ) : null}
            </div>
          </div>
        </Container>

        {content.housing.length > 0 ? (
          <section className="border-y border-grey-200 py-24 sm:py-32">
            <Container>
              <p className="rule mb-8" aria-hidden="true" />
              <h2 className="font-display text-4xl font-normal sm:text-5xl">
                {service.name} by housing type
              </h2>
              <ul className="mt-16 grid gap-12 lg:grid-cols-3">
                {content.housing.map((section) => (
                  <li key={section.title}>
                    <h3 className="font-display text-2xl font-normal">{section.title}</h3>
                    <p className="mt-4 text-base leading-relaxed text-grey-700">
                      {publicCopy(section.text)}
                    </p>
                    <ul className="mt-5 flex flex-col gap-2 text-sm">
                      {section.links.map((link) => (
                        <li key={link.href}>
                          <Link href={link.href} className="quiet-link text-navy">
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </Container>
          </section>
        ) : null}

        {content.permissions.length > 0 ? (
          <section className="py-24 sm:py-32">
            <Container className="grid gap-10 lg:grid-cols-12">
              <h2 className="font-display text-4xl font-normal sm:text-5xl lg:col-span-4">
                Consent, extract and the building
              </h2>
              <div className="space-y-5 text-base leading-relaxed text-grey-700 lg:col-span-8">
                {content.permissions
                  .map((paragraph) => publicCopy(paragraph))
                  .filter(Boolean)
                  .map((paragraph) => (
                    <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                  ))}
              </div>
            </Container>
          </section>
        ) : null}

        <section className="border-y border-grey-200 py-24 sm:py-32">
          <Container>
            <p className="rule mb-8" aria-hidden="true" />
            <h2 className="font-display text-4xl font-normal sm:text-5xl">
              What {service.name.toLowerCase()} in North West London includes
            </h2>
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

        <section className="py-24 sm:py-32">
          <Container>
            <p className="rule mb-8" aria-hidden="true" />
            <h2 className="font-display text-4xl font-normal sm:text-5xl">
              How we carry out {service.name.toLowerCase()} in North West London
            </h2>
            <ol className="mt-16 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
              {service.processSteps.map((step, index) => (
                <li key={step.title}>
                  <p className="font-display text-3xl text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-normal">{step.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-grey-700">{publicCopy(step.text)}</p>
                </li>
              ))}
            </ol>
          </Container>
        </section>

        <section className="border-y border-grey-200 py-24 sm:py-32">
          <Container className="grid gap-10 lg:grid-cols-12">
            <h2 className="font-display text-4xl font-normal sm:text-5xl lg:col-span-4">
              {service.name} specification
            </h2>
            <div className="space-y-5 text-base leading-relaxed text-grey-700 lg:col-span-8">
              {content.specification.map((paragraph) => publicCopy(paragraph)).filter(Boolean).map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-24 sm:py-32">
          <Container>
            <p className="rule mb-8" aria-hidden="true" />
            <h2 className="font-display text-4xl font-normal sm:text-5xl">
              {service.name} in North West London neighbourhoods
            </h2>
            <p className="lede mt-6 max-w-measure text-xl text-grey-600">
              {publicCopy(content.areasIntro)}
            </p>
            {comboAreas.length > 0 ? (
              <ul className="mosaic mt-16 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                {comboAreas.map((area) => {
                  const photo = areaPhotos[area.slug];
                  return (
                    <li key={area.slug} className="min-h-[10rem]">
                      {photo ? (
                        <PhotoTile
                          photo={photo}
                          href={`/${service.slug}/${area.slug}/`}
                          title={area.name}
                          caption={area.postcode}
                          className="h-full min-h-[10rem]"
                          sizes="(min-width: 1024px) 20vw, 50vw"
                        />
                      ) : (
                        <Link
                          href={`/${service.slug}/${area.slug}/`}
                          className="quiet-link text-base text-navy"
                        >
                          {service.name} in {area.name}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            ) : null}
            <div className="mt-12">
              <AreaLinkGrid areas={tier2Areas()} heading="Also covering" />
            </div>
          </Container>
        </section>

        <section className="border-y border-grey-200 py-24 sm:py-32">
          <Container className="grid gap-12 lg:grid-cols-12">
            <h2 className="font-display text-4xl font-normal sm:text-5xl lg:col-span-4">
              {service.name} questions
            </h2>
            <div className="lg:col-span-8">
              <FaqAccordion items={faqs} />
            </div>
          </Container>
        </section>

        <section className="py-24 sm:py-32">
          <Container>
            <p className="rule mb-8" aria-hidden="true" />
            <h2 className="font-display text-4xl font-normal sm:text-5xl">Related services</h2>
            <ul className="mosaic mt-16 md:grid-cols-3">
              {others.map((item) => (
                <li key={item.slug} className="min-h-[20rem]">
                  <ServiceCard service={item} className="h-full min-h-[20rem]" />
                </li>
              ))}
            </ul>
          </Container>
        </section>
      </article>
      <CtaBand
        title={`Request a quote for ${service.navLabel.toLowerCase()} in North West London`}
        text="Tell us the property and the rooms in scope. We visit before we write a proposal."
      />
    </>
  );
}
