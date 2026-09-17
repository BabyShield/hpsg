import Link from "next/link";

import { JsonLd } from "@/components/seo/JsonLd";
import { PageContents } from "@/components/seo/PageContents";
import { AreaLinkGrid } from "@/components/ui/AreaLinkGrid";
import { Container } from "@/components/ui/Container";
import { ContentImage } from "@/components/ui/ContentImage";
import { CtaBand } from "@/components/ui/CtaBand";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { LocalFacts } from "@/components/ui/LocalFacts";
import { NumberedList } from "@/components/ui/NumberedList";
import { PageHero } from "@/components/ui/PageHero";
import { PhotoTile } from "@/components/ui/PhotoTile";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { areaPhotos, servicePhotos } from "@/data/photos";
import { guidesForService } from "@/data/guides";
import { serviceHubContent } from "@/data/service-hub-content";
import { getServiceHubFacts } from "@/data/service-area-facts";
import { serviceSeo } from "@/data/service-seo";
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
import { mergeFaqs, servicePlainName, serviceSearchFaqs } from "@/lib/seo-copy";

export function ServiceHub({ service }: { service: Service }) {
  const content = serviceHubContent[service.slug];
  const combos = getCombosForService(service.slug);
  const comboAreas = combos.map((combo) => combo.area);
  const others = services.filter((item) => item.slug !== service.slug);
  const hrReferral = service.slug === "light-refurbishment";
  const heading = servicePlainName(service);
  const seo = serviceSeo[service.slug];
  const relatedGuides = guidesForService(service.slug);

  const crumbs = [
    { name: "Home", href: "/" },
    { name: `${heading} in North West London`, href: `/${service.slug}/` },
  ];
  const pageUrl = absoluteUrl(`/${service.slug}/`);
  const heroPhoto = servicePhotos[service.slug];
  const featuredAreas = ["hampstead", "st-johns-wood", "maida-vale", "west-hampstead"];
  const catalog = comboAreas.map((area) => ({
    name: `${heading} in ${area.name}`,
    url: absoluteUrl(`/${service.slug}/${area.slug}/`),
  }));
  const related = others.map((item) => ({
    name: `${servicePlainName(item)} in North West London`,
    url: absoluteUrl(`/${item.slug}/`),
  }));
  const faqs = mergeFaqs(serviceSearchFaqs(service), seo.extraFaqs, service.faqs);
  const contents = [
    { href: "#who", label: seo.audienceH2 },
    content.typicalRooms && content.typicalRooms.length > 0
      ? { href: "#rooms", label: content.roomsHeading ?? `Typical ${service.navLabel.toLowerCase()} we take on` }
      : null,
    { href: "#includes", label: seo.includesH2 },
    { href: "#process", label: seo.processH2 },
    { href: "#cost", label: seo.costH2 },
    { href: "#areas", label: seo.areasH2 },
    { href: "#questions", label: seo.questionsH2 },
  ].filter((item): item is { href: string; label: string } => item !== null);

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: `${heading} in North West London`,
          url: pageUrl,
          areaServed: ["North West London", ...comboAreas.map((area) => `${area.name}, ${area.postcode}`)],
          description: service.summary,
          image: heroPhoto.src,
          imageAlt: heroPhoto.alt,
          imageWidth: heroPhoto.width,
          imageHeight: heroPhoto.height,
          serviceType: heading,
          related,
          catalog,
        })}
      />
      <JsonLd
        data={webPageSchema({
          name: `${heading} in North West London`,
          url: pageUrl,
          description: service.metaDescription,
          image: heroPhoto.src,
          imageAlt: heroPhoto.alt,
          imageWidth: heroPhoto.width,
          imageHeight: heroPhoto.height,
          mainEntityId: `${pageUrl}#service`,
          significantLinks: [
            absoluteUrl("/contact/"),
            ...featuredAreas
              .filter((slug) => comboAreas.some((area) => area.slug === slug))
              .map((slug) => absoluteUrl(`/${service.slug}/${slug}/`)),
          ],
          relatedLinks: related.map((item) => item.url),
        })}
      />
      <JsonLd
        data={howToSchema({
          name: `How ${heading.toLowerCase()} in North West London runs`,
          description: service.summary,
          steps: service.processSteps,
          url: pageUrl,
        })}
      />
      {faqs.length > 0 ? <JsonLd data={faqSchema(faqs)} /> : null}
      <JsonLd data={itemListSchema(`${heading} by neighbourhood`, catalog)} />
      <article>
        <PageHero
          photo={servicePhotos[service.slug]}
          crumbs={crumbs}
          kicker="North West London"
          title={`${heading} in North West London`}
          lede={publicCopy(service.heroLine)}
        />
        <Container className="grid gap-12 py-24 sm:py-32 lg:grid-cols-12 lg:gap-16">
          <div className="space-y-5 text-base leading-relaxed text-grey-700 lg:col-span-7">
            {content.intro.map((paragraph) => publicCopy(paragraph)).filter(Boolean).map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
            <p>{seo.who}</p>
            <PageContents items={contents} />
          </div>
          <div id="who" className="scroll-mt-28 lg:col-span-5">
            <p className="rule mb-6" aria-hidden="true" />
            <h2 className="font-display text-3xl font-normal">
              {seo.audienceH2}
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

        <LocalFacts
          id="facts"
          areaName="North West London"
          facts={getServiceHubFacts(service.slug)}
          heading={`Facts that shape ${heading.toLowerCase()} in North West London`}
          lede="Checkable facts — office, councils, conservation dates and the housing stock — not a brochure."
        />

        {content.failures && content.failures.length > 0 ? (
          <section id="must-be-right" className="band-navy scroll-mt-28 py-24 sm:py-32">
            <Container>
              <p className="rule mb-8" aria-hidden="true" />
              <h2 className="font-display text-4xl font-normal text-bone sm:text-5xl">
                {content.failuresHeading ?? "What has to be right"}
              </h2>
              {content.failuresLede ? (
                <p className="lede mt-6 max-w-measure text-xl text-bone/80">
                  {content.failuresLede}
                </p>
              ) : null}
              <NumberedList
                tone="dark"
                columns={4}
                items={content.failures.map((item) => ({
                  title: item.title,
                  text: publicCopy(item.text),
                }))}
              />
            </Container>
          </section>
        ) : null}

        {content.typicalRooms && content.typicalRooms.length > 0 ? (
          <section id="rooms" className="scroll-mt-28 py-24 sm:py-32">
            <Container>
              <p className="rule mb-8" aria-hidden="true" />
              <h2 className="font-display text-4xl font-normal sm:text-5xl">
                {content.roomsHeading ?? `Typical ${service.navLabel.toLowerCase()} we take on`}
              </h2>
              {content.roomsLede ? (
                <p className="lede mt-6 max-w-measure text-xl text-grey-600">
                  {content.roomsLede}
                </p>
              ) : null}
              <ul className="mt-16 grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
                {content.typicalRooms.map((room) => (
                  <li key={room.title}>
                    {room.photo ? (
                      <ContentImage
                        photo={room.photo}
                        className="aspect-[4/3] w-full"
                        sizes="(min-width: 1024px) 30vw, (min-width: 768px) 50vw, 100vw"
                      />
                    ) : (
                      <p className="rule mb-6" aria-hidden="true" />
                    )}
                    <h3 className="mt-6 font-display text-2xl font-normal">{room.title}</h3>
                    <p className="mt-3 text-base leading-relaxed text-grey-700">
                      {publicCopy(room.text)}
                    </p>
                    {room.href && room.linkLabel ? (
                      <p className="mt-4">
                        <Link href={room.href} className="quiet-link text-navy">
                          {room.linkLabel}
                        </Link>
                      </p>
                    ) : null}
                  </li>
                ))}
              </ul>
            </Container>
          </section>
        ) : null}

        {content.housing.length > 0 ? (
          <section id="housing" className="scroll-mt-28 border-y border-grey-200 py-24 sm:py-32">
            <Container>
              <p className="rule mb-8" aria-hidden="true" />
              <h2 className="font-display text-4xl font-normal sm:text-5xl">
                {seo.housingH2}
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
          <section id="consent" className="scroll-mt-28 py-24 sm:py-32">
            <Container className="grid gap-10 lg:grid-cols-12">
              <h2 className="font-display text-4xl font-normal sm:text-5xl lg:col-span-4">
                {seo.consentH2}
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

        <section id="includes" className="scroll-mt-28 border-y border-grey-200 py-24 sm:py-32">
          <Container>
            <p className="rule mb-8" aria-hidden="true" />
            <h2 className="font-display text-4xl font-normal sm:text-5xl">
              {seo.includesH2}
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

        <section id="process" className="scroll-mt-28 py-24 sm:py-32">
          <Container>
            <p className="rule mb-8" aria-hidden="true" />
            <h2 className="font-display text-4xl font-normal sm:text-5xl">
              {seo.processH2}
            </h2>
            <NumberedList
              columns={3}
              items={service.processSteps.map((step) => ({
                title: step.title,
                text: publicCopy(step.text),
              }))}
            />
          </Container>
        </section>

        <section id="spec" className="scroll-mt-28 border-y border-grey-200 py-24 sm:py-32">
          <Container className="grid gap-10 lg:grid-cols-12">
            <h2 className="font-display text-4xl font-normal sm:text-5xl lg:col-span-4">
              {seo.specH2}
            </h2>
            <div className="space-y-5 text-base leading-relaxed text-grey-700 lg:col-span-8">
              {content.specification.map((paragraph) => publicCopy(paragraph)).filter(Boolean).map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
          </Container>
        </section>

        <section id="cost" className="scroll-mt-28 py-24 sm:py-32">
          <Container className="grid gap-10 lg:grid-cols-12">
            <h2 className="font-display text-4xl font-normal sm:text-5xl lg:col-span-4">
              {seo.costH2}
            </h2>
            <div className="space-y-5 text-base leading-relaxed text-grey-700 lg:col-span-8">
              {seo.costParas.map((paragraph) => publicCopy(paragraph)).filter(Boolean).map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
          </Container>
        </section>

        <section id="areas" className="scroll-mt-28 py-24 sm:py-32">
          <Container>
            <p className="rule mb-8" aria-hidden="true" />
            <h2 className="font-display text-4xl font-normal sm:text-5xl">
              {seo.areasH2}
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
                          {heading} in {area.name}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            ) : null}
            {comboAreas.length > 0 ? (
              <div className="mt-14 border-t border-grey-200 pt-10">
                <h3 className="caption text-grey-500">Every {heading.toLowerCase()} page</h3>
                <ul className="mt-6 grid gap-x-10 gap-y-3 text-base sm:grid-cols-2 lg:grid-cols-3">
                  {comboAreas.map((area) => (
                    <li key={`link-${area.slug}`}>
                      <Link
                        href={`/${service.slug}/${area.slug}/`}
                        className="quiet-link text-navy"
                      >
                        {heading} in {area.name} {area.postcode}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            <div className="mt-12">
              <AreaLinkGrid areas={tier2Areas()} heading="Also covering" />
            </div>
          </Container>
        </section>

        {relatedGuides.length > 0 ? (
          <section id="guides" className="scroll-mt-28 py-20 sm:py-24">
            <Container className="grid gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-4">
                <p className="rule mb-8" aria-hidden="true" />
                <h2 className="font-display text-4xl font-normal sm:text-5xl">
                  Guides
                </h2>
                <p className="mt-6 text-base leading-relaxed text-grey-700">
                  How consent, tenure and sequence work on this kind of job.
                </p>
              </div>
              <ul className="grid gap-8 lg:col-span-8 sm:grid-cols-2">
                {relatedGuides.map((guide) => (
                  <li key={guide.slug} className="border-t border-grey-200 pt-5">
                    <Link
                      href={`/guides/${guide.slug}/`}
                      className="font-display text-2xl font-normal text-navy"
                    >
                      {guide.title}
                    </Link>
                    <p className="mt-2 text-base leading-relaxed text-grey-700">
                      {publicCopy(guide.lede)}
                    </p>
                  </li>
                ))}
              </ul>
            </Container>
          </section>
        ) : null}

        <section id="questions" className="scroll-mt-28 border-y border-grey-200 py-24 sm:py-32">
          <Container className="grid gap-12 lg:grid-cols-12">
            <h2 className="font-display text-4xl font-normal sm:text-5xl lg:col-span-4">
              {seo.questionsH2}
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
        text={
          hrReferral
            ? "Tell us the property and whether kitchen, bathroom, decoration and floors sit in one programme. We visit before we write a proposal."
            : "Tell us the property and the rooms in scope. We visit before we write a proposal."
        }
        photo={servicePhotos[service.slug]}
      />
    </>
  );
}
