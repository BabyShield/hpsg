import Link from "next/link";

import { JsonLd } from "@/components/seo/JsonLd";
import { PageContents } from "@/components/seo/PageContents";
import { Container } from "@/components/ui/Container";
import { ContentImage } from "@/components/ui/ContentImage";
import { CtaBand } from "@/components/ui/CtaBand";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { LocalFacts } from "@/components/ui/LocalFacts";
import { NumberedList } from "@/components/ui/NumberedList";
import { PageHero } from "@/components/ui/PageHero";
import { PhotoTile } from "@/components/ui/PhotoTile";
import { guidesForCombo } from "@/data/guides";
import { getServiceAreaFacts } from "@/data/service-area-facts";
import { areaPhotos, getComboPhotos } from "@/data/photos";
import { services } from "@/data/services";
import type { Combo, ComboContent } from "@/data/types";
import { comboHeadings } from "@/data/service-seo";
import { serviceAreaCue } from "@/data/seo-cues";
import { addressSingleLine, site } from "@/data/site";
import { getNearbyAreas, isCombo } from "@/lib/matrix";
import { publicCopy } from "@/lib/public-copy";
import {
  absoluteUrl,
  faqSchema,
  howToSchema,
  placeSchema,
  serviceSchema,
  webPageSchema,
} from "@/lib/schema";
import {
  comboIncludesLede,
  comboOpening,
  comboProcessLede,
  comboSearchFaqs,
  mergeFaqs,
  servicePlainName,
} from "@/lib/seo-copy";

function siblingCombos(combo: Combo) {
  return getNearbyAreas(combo.area)
    .filter((area) => area.tier === 1)
    .filter((area) => isCombo(combo.service.slug, area.slug))
    .slice(0, 4);
}

export function ComboPage({
  combo,
  content,
}: {
  combo: Combo;
  content: ComboContent;
}) {
  const siblings = siblingCombos(combo);
  const otherServices = services.filter((item) => item.slug !== combo.service.slug);
  const faqs = mergeFaqs(comboSearchFaqs(combo), content.localFaqs);

  const serviceName = servicePlainName(combo.service);
  const headings = comboHeadings(combo.service.slug, combo.area.name);
  const cue = serviceAreaCue(combo.service.slug, combo.area.slug);
  const comboPhotos = getComboPhotos(combo.service.slug, combo.area.slug);
  const heroPhoto = {
    ...comboPhotos.hero,
    alt: cue
      ? `${serviceName} in ${combo.area.name} — ${cue.title.toLowerCase()}`
      : `${comboPhotos.hero.alt} — ${combo.area.name} ${combo.area.postcode}`,
  };
  const crumbs = [
    { name: "Home", href: "/" },
    { name: serviceName, href: `/${combo.service.slug}/` },
    {
      name: `${combo.area.name} ${combo.area.postcode}`,
      href: `/${combo.service.slug}/${combo.area.slug}/`,
    },
  ];
  const pageUrl = absoluteUrl(`/${combo.service.slug}/${combo.area.slug}/`);
  const opening = comboOpening(combo);
  const relatedServices = otherServices
    .filter((item) => isCombo(item.slug, combo.area.slug))
    .map((item) => ({
      name: `${servicePlainName(item)} in ${combo.area.name}`,
      url: absoluteUrl(`/${item.slug}/${combo.area.slug}/`),
    }));
  const introParas = content.intro.map((paragraph) => publicCopy(paragraph)).filter(Boolean);
  const workingParas = content.working.map((paragraph) => publicCopy(paragraph)).filter(Boolean);
  const specParas = content.specification.map((paragraph) => publicCopy(paragraph)).filter(Boolean);
  const rooms = publicCopy(content.rooms);
  const scopeNotes = (content.scopeNotes ?? []).map((item) => publicCopy(item)).filter(Boolean);
  const processNote = publicCopy(content.processNote ?? "");
  const consent = publicCopy(content.consent ?? "");
  const audienceParas = (content.audience ?? []).map((item) => publicCopy(item)).filter(Boolean);
  const failures = (content.failures ?? [])
    .map((item) => ({ title: publicCopy(item.title), text: publicCopy(item.text) }))
    .filter((item) => item.title && item.text);
  const comboGuides = guidesForCombo(combo.service.slug, combo.area.slug).slice(0, 2);
  const contents = [
    audienceParas.length > 0 ? { href: "#who", label: headings.audience } : null,
    rooms ? { href: "#rooms", label: headings.rooms } : null,
    failures.length > 0 ? { href: "#must-be-right", label: headings.failures } : null,
    { href: "#facts", label: headings.facts },
    { href: "#working", label: headings.working },
    specParas.length > 0 ? { href: "#spec", label: headings.spec } : null,
    { href: "#includes", label: headings.includes },
    { href: "#process", label: headings.process },
    faqs.length > 0 ? { href: "#questions", label: headings.questions } : null,
  ].filter((item): item is { href: string; label: string } => item !== null);

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: `${serviceName} in ${combo.area.name}`,
          url: pageUrl,
          areaServed: [`${combo.area.name}, ${combo.area.postcode}`, "North West London"],
          description: content.lede,
          image: heroPhoto.src,
          imageAlt: heroPhoto.alt,
          imageWidth: heroPhoto.width,
          imageHeight: heroPhoto.height,
          serviceType: serviceName,
          related: [
            {
              name: `${serviceName} in North West London`,
              url: absoluteUrl(`/${combo.service.slug}/`),
            },
            ...relatedServices,
          ],
        })}
      />
      <JsonLd
        data={webPageSchema({
          name: `${serviceName} in ${combo.area.name} ${combo.area.postcode}`,
          url: pageUrl,
          description: content.lede,
          image: heroPhoto.src,
          imageAlt: heroPhoto.alt,
          imageWidth: heroPhoto.width,
          imageHeight: heroPhoto.height,
          mainEntityId: `${pageUrl}#service`,
          breadcrumb: true,
          significantLinks: [
            absoluteUrl(`/${combo.service.slug}/`),
            absoluteUrl(`/areas/${combo.area.slug}/`),
            absoluteUrl("/contact/"),
          ],
          relatedLinks: [
            ...relatedServices.map((item) => item.url),
            ...siblings.map((area) => absoluteUrl(`/${combo.service.slug}/${area.slug}/`)),
          ],
        })}
      />
      <JsonLd
        data={howToSchema({
          name: `How ${serviceName.toLowerCase()} in ${combo.area.name} runs`,
          description: processNote || comboProcessLede(combo),
          steps: combo.service.processSteps.map((step) => ({ title: step.title })),
          url: pageUrl,
        })}
      />
      {faqs.length > 0 ? <JsonLd data={faqSchema(faqs)} /> : null}
      <JsonLd data={placeSchema(combo.area.name, combo.area.postcode)} />
      <article>
        <PageHero
          photo={heroPhoto}
          crumbs={crumbs}
          kicker={`${combo.area.name} ${combo.area.postcode}`}
          title={`${serviceName} in ${combo.area.name}, ${combo.area.postcode}`}
          lede={publicCopy(content.lede)}
        />

        <section className="py-24 sm:py-32">
          <Container className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="space-y-5 text-base leading-relaxed text-grey-700 lg:col-span-7">
              <p>{opening}</p>
              {introParas.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
              <p>
                {site.legalName} (company no. {site.companyNumber}) carries out
                this work in {combo.area.name} from {addressSingleLine}.
              </p>
              <p>
                See also{" "}
                <Link href={`/${combo.service.slug}/`} className="quiet-link text-navy">
                  {serviceName.toLowerCase()} in North West London
                </Link>{" "}
                and{" "}
                <Link href={`/areas/${combo.area.slug}/`} className="quiet-link text-navy">
                  kitchens, bathrooms and decorating in {combo.area.name}
                </Link>
                .
              </p>
              <PageContents items={contents} />
            </div>
            {areaPhotos[combo.area.slug] ? (
              <div className="lg:col-span-5">
                <ContentImage
                  photo={areaPhotos[combo.area.slug]}
                  className="aspect-[4/5] w-full"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
                <p className="caption mt-3">
                  {combo.area.name}, {combo.area.postcode}
                </p>
              </div>
            ) : null}
          </Container>
        </section>

        {audienceParas.length > 0 ? (
          <section id="who" className="scroll-mt-28 border-t border-grey-200 py-24 sm:py-32">
            <Container className="grid gap-10 lg:grid-cols-12">
              <h2 className="font-display text-4xl font-normal sm:text-5xl lg:col-span-4">
                {headings.audience}
              </h2>
              <div className="space-y-5 text-base leading-relaxed text-grey-700 lg:col-span-8">
                {audienceParas.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                ))}
              </div>
            </Container>
          </section>
        ) : null}

        {rooms ? (
          <section id="rooms" className="scroll-mt-28 border-y border-grey-200 py-24 sm:py-32">
            <Container className="grid gap-10 lg:grid-cols-12">
              <h2 className="font-display text-4xl font-normal sm:text-5xl lg:col-span-4">
                {headings.rooms}
              </h2>
              <p className="text-base leading-relaxed text-grey-700 lg:col-span-8">{rooms}</p>
            </Container>
          </section>
        ) : null}

        {failures.length > 0 ? (
          <section id="must-be-right" className="band-navy scroll-mt-28 py-24 sm:py-32">
            <Container>
              <p className="rule mb-8" aria-hidden="true" />
              <h2 className="font-display text-4xl font-normal text-bone sm:text-5xl">
                {headings.failures}
              </h2>
              <NumberedList
                tone="dark"
                columns={4}
                items={failures.map((item) => ({
                  title: item.title,
                  text: item.text,
                }))}
              />
            </Container>
          </section>
        ) : null}

        <LocalFacts
          id="facts"
          areaName={combo.area.name}
          facts={getServiceAreaFacts(combo.service.slug, combo.area.slug)}
          heading={headings.facts}
          lede={`Checkable facts that shape ${serviceName.toLowerCase()} in ${combo.area.name} ${combo.area.postcode} — housing, council and the room as found.`}
        />

        <section id="working" className="scroll-mt-28 py-24 sm:py-32">
          <Container>
            <p className="rule mb-8" aria-hidden="true" />
            <h2 className="font-display text-4xl font-normal sm:text-5xl">
              {headings.working}
            </h2>
            <p className="mt-6 text-sm text-grey-600">
              {publicCopy(combo.area.council)}
            </p>
            <div className="mt-10 grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-5 text-base leading-relaxed text-grey-700">
                {workingParas.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                ))}
                {consent ? (
                  <p>{consent}</p>
                ) : (
                  <>
                    <p>{publicCopy(combo.area.conservationNotes)}</p>
                    <p>{publicCopy(combo.area.localNotes)}</p>
                  </>
                )}
                <p>
                  <Link href={`/areas/${combo.area.slug}/`} className="quiet-link text-navy">
                    Council, conservation and access in {combo.area.name}
                  </Link>
                  .
                </p>
                {comboGuides.length > 0 ? (
                  <ul className="space-y-2 border-t border-grey-200 pt-5">
                    {comboGuides.map((guide) => (
                      <li key={guide.slug}>
                        <Link
                          href={`/guides/${guide.slug}/`}
                          className="quiet-link text-navy"
                        >
                          {guide.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
              <ContentImage
                photo={comboPhotos.secondary}
                className="aspect-[4/3] w-full"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
            {combo.area.landmarks.length > 0 ? (
              <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-grey-600">
                {combo.area.landmarks.map((landmark) => (
                  <li key={landmark} className="border-b border-grey-200 pb-1">
                    {publicCopy(landmark)}
                  </li>
                ))}
              </ul>
            ) : null}
          </Container>
        </section>

        {specParas.length > 0 ? (
          <section id="spec" className="scroll-mt-28 border-y border-grey-200 py-24 sm:py-32">
            <Container className="grid gap-10 lg:grid-cols-12">
              <h2 className="font-display text-4xl font-normal sm:text-5xl lg:col-span-4">
                {headings.spec}
              </h2>
              <div className="space-y-5 text-base leading-relaxed text-grey-700 lg:col-span-8">
                {specParas.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                ))}
              </div>
            </Container>
          </section>
        ) : null}

        <section id="includes" className="scroll-mt-28 py-24 sm:py-32">
          <Container className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="rule mb-8" aria-hidden="true" />
              <h2 className="font-display text-4xl font-normal sm:text-5xl">
                {headings.includes}
              </h2>
            </div>
            <div className="lg:col-span-8">
              {scopeNotes.length > 0 ? (
                <div className="space-y-5 text-base leading-relaxed text-grey-700">
                  {scopeNotes.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                  ))}
                </div>
              ) : (
                <p className="text-base leading-relaxed text-grey-700">
                  {comboIncludesLede(combo)}
                </p>
              )}
              <p className="mt-8 text-base leading-relaxed text-grey-700">
                <Link href={`/${combo.service.slug}/`} className="quiet-link text-navy">
                  The full inclusion list is on the {serviceName.toLowerCase()} in North West
                  London page
                </Link>
                .
              </p>
            </div>
          </Container>
        </section>

        <section id="process" className="scroll-mt-28 border-y border-grey-200 py-24 sm:py-32">
          <Container className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="rule mb-8" aria-hidden="true" />
              <h2 className="font-display text-4xl font-normal sm:text-5xl">
                {headings.process}
              </h2>
              <p className="mt-6 text-base leading-relaxed text-grey-700">
                {processNote || comboProcessLede(combo)}
              </p>
              <p className="mt-6 text-base leading-relaxed text-grey-700">
                <Link href={`/${combo.service.slug}/`} className="quiet-link text-navy">
                  Each step in full
                </Link>
                .
              </p>
            </div>
            <div className="lg:col-span-8">
              <NumberedList
                variant="timeline"
                items={combo.service.processSteps.map((step) => ({
                  title: step.title,
                }))}
              />
            </div>
          </Container>
        </section>

        <section id="questions" className="scroll-mt-28 py-24 sm:py-32">
          <Container className="grid gap-12 lg:grid-cols-12">
            <h2 className="font-display text-4xl font-normal sm:text-5xl lg:col-span-4">
              {headings.questions}
            </h2>
            <div className="lg:col-span-8">
              <FaqAccordion items={faqs} />
            </div>
          </Container>
        </section>

        <section className="border-t border-grey-200 py-24 sm:py-32">
          <Container className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl font-normal">
                Other services in {combo.area.name}
              </h2>
              <ul className="mt-6 flex flex-col gap-3 text-base text-navy">
                {otherServices.map((service) =>
                  isCombo(service.slug, combo.area.slug) ? (
                    <li key={service.slug}>
                      <Link
                        href={`/${service.slug}/${combo.area.slug}/`}
                        className="quiet-link"
                      >
                        {servicePlainName(service)} in {combo.area.name}
                      </Link>
                    </li>
                  ) : null,
                )}
                <li>
                  <Link href={`/areas/${combo.area.slug}/`} className="quiet-link">
                    All property services in {combo.area.name}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-display text-3xl font-normal">
                {serviceName} nearby
              </h2>
              <p className="mt-4">
                <Link href={`/${combo.service.slug}/`} className="quiet-link text-navy">
                  {serviceName} in North West London
                </Link>
              </p>
              <ul className="mosaic mt-6 grid-cols-2">
                {siblings.map((area) => {
                  const photo = areaPhotos[area.slug];
                  return (
                    <li key={area.slug} className="min-h-[8rem]">
                      {photo ? (
                        <PhotoTile
                          photo={photo}
                          href={`/${combo.service.slug}/${area.slug}/`}
                          title={area.name}
                          caption={area.postcode}
                          className="h-full min-h-[8rem]"
                          sizes="(min-width: 1024px) 20vw, 50vw"
                        />
                      ) : (
                        <Link
                          href={`/${combo.service.slug}/${area.slug}/`}
                          className="quiet-link text-navy"
                        >
                          {serviceName} in {area.name}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </Container>
        </section>
      </article>
      <CtaBand
        title={`Request a quote for ${combo.service.navLabel.toLowerCase()} in ${combo.area.name}`}
        text="Tell us the property and the rooms in scope. We visit before we write a proposal."
        photo={comboPhotos.area}
      />
    </>
  );
}
