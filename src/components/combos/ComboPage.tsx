import Link from "next/link";

import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { ContentImage } from "@/components/ui/ContentImage";
import { CtaBand } from "@/components/ui/CtaBand";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { LocalFacts } from "@/components/ui/LocalFacts";
import { PageHero } from "@/components/ui/PageHero";
import { PhotoTile } from "@/components/ui/PhotoTile";
import { getServiceAreaFacts } from "@/data/service-area-facts";
import { areaPhotos, servicePhotos } from "@/data/photos";
import { services } from "@/data/services";
import type { Combo, ComboContent } from "@/data/types";
import { comboHeadings } from "@/data/service-seo";
import { serviceAreaCue } from "@/data/seo-cues";
import { addressSingleLine, site } from "@/data/site";
import { getNearbyAreas, isCombo } from "@/lib/matrix";
import { publicCopy } from "@/lib/public-copy";
import { absoluteUrl, faqSchema, placeSchema, serviceSchema, webPageSchema } from "@/lib/schema";
import {
  comboIncludesLede,
  comboOpening,
  comboProcessLede,
  comboSearchFaqs,
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
  const seenFaqs = new Set<string>();
  const faqs = [...content.localFaqs, ...comboSearchFaqs(combo)]
    .map((item) => ({ q: publicCopy(item.q), a: publicCopy(item.a) }))
    .filter((item) => {
      if (!item.q || !item.a || seenFaqs.has(item.q)) return false;
      seenFaqs.add(item.q);
      return true;
    });

  const serviceName = servicePlainName(combo.service);
  const headings = comboHeadings(combo.service.slug, combo.area.name);
  const cue = serviceAreaCue(combo.service.slug, combo.area.slug);
  const heroPhoto = {
    ...servicePhotos[combo.service.slug],
    alt: cue
      ? `${serviceName} in ${combo.area.name} — ${cue.title.toLowerCase()}`
      : `${servicePhotos[combo.service.slug].alt} — ${combo.area.name} ${combo.area.postcode}`,
  };
  const crumbs = [
    { name: "Home", href: "/" },
    { name: serviceName, href: `/${combo.service.slug}/` },
    {
      name: `${serviceName} in ${combo.area.name}`,
      href: `/${combo.service.slug}/${combo.area.slug}/`,
    },
  ];
  const pageUrl = absoluteUrl(`/${combo.service.slug}/${combo.area.slug}/`);
  const opening = comboOpening(combo);

  const introParas = content.intro.map((paragraph) => publicCopy(paragraph)).filter(Boolean);
  const workingParas = content.working.map((paragraph) => publicCopy(paragraph)).filter(Boolean);
  const specParas = content.specification.map((paragraph) => publicCopy(paragraph)).filter(Boolean);
  const rooms = publicCopy(content.rooms);
  const included = combo.service.included.map((item) => publicCopy(item)).filter(Boolean);

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: `${serviceName} in ${combo.area.name}`,
          url: pageUrl,
          areaServed: [`${combo.area.name}, ${combo.area.postcode}`, "North West London"],
          description: content.lede,
          image: servicePhotos[combo.service.slug].src,
          serviceType: serviceName,
        })}
      />
      <JsonLd
        data={webPageSchema({
          name: `${serviceName} in ${combo.area.name} ${combo.area.postcode}`,
          url: pageUrl,
          description: content.lede,
          image: servicePhotos[combo.service.slug].src,
          imageAlt: heroPhoto.alt,
        })}
      />
      <JsonLd data={placeSchema(combo.area.name, combo.area.postcode)} />
      <JsonLd data={faqSchema(faqs)} />
      <article>
        <PageHero
          photo={heroPhoto}
          crumbs={crumbs}
          kicker={`${combo.area.name} ${combo.area.postcode}`}
          title={`${serviceName} in ${combo.area.name}`}
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

        {rooms ? (
          <section className="border-y border-grey-200 py-24 sm:py-32">
            <Container className="grid gap-10 lg:grid-cols-12">
              <h2 className="font-display text-4xl font-normal sm:text-5xl lg:col-span-4">
                {headings.rooms}
              </h2>
              <p className="text-base leading-relaxed text-grey-700 lg:col-span-8">{rooms}</p>
            </Container>
          </section>
        ) : null}

        <LocalFacts
          areaName={combo.area.name}
          facts={getServiceAreaFacts(combo.service.slug, combo.area.slug)}
          heading={headings.facts}
          lede={`Checkable facts that shape ${serviceName.toLowerCase()} in ${combo.area.name} ${combo.area.postcode} — housing, council and the room as found.`}
        />

        <section className="py-24 sm:py-32">
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
                <p>{publicCopy(combo.area.conservationNotes)}</p>
                <p>{publicCopy(combo.area.localNotes)}</p>
              </div>
              <ContentImage
                photo={servicePhotos[combo.service.slug]}
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
          <section className="border-y border-grey-200 py-24 sm:py-32">
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

        <section className="py-24 sm:py-32">
          <Container>
            <p className="rule mb-8" aria-hidden="true" />
            <h2 className="font-display text-4xl font-normal sm:text-5xl">
              {headings.includes}
            </h2>
            <p className="mt-5 max-w-measure text-base leading-relaxed text-grey-700">
              {comboIncludesLede(combo)}
            </p>
            <ul className="mt-10 max-w-3xl divide-y divide-grey-200 border-y border-grey-200">
              {included.map((item) => (
                <li key={item} className="flex gap-5 py-4 text-base leading-relaxed text-grey-700">
                  <span className="mt-3 h-px w-6 shrink-0 bg-gold" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Container>
        </section>

        <section className="border-y border-grey-200 py-24 sm:py-32">
          <Container>
            <p className="rule mb-8" aria-hidden="true" />
            <h2 className="font-display text-4xl font-normal sm:text-5xl">
              {headings.process}
            </h2>
            <p className="mt-5 max-w-measure text-base leading-relaxed text-grey-700">
              {comboProcessLede(combo)}
            </p>
            <ol className="mt-16 grid gap-x-10 gap-y-12 md:grid-cols-2">
              {combo.service.processSteps.map((step, index) => (
                <li key={step.title}>
                  <p className="font-display text-3xl text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-normal">{step.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-grey-700">
                    {publicCopy(step.text)}
                  </p>
                </li>
              ))}
            </ol>
          </Container>
        </section>

        <section className="py-24 sm:py-32">
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
      />
    </>
  );
}
