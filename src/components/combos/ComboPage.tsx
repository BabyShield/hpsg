import Link from "next/link";

import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { ContentImage } from "@/components/ui/ContentImage";
import { CtaBand } from "@/components/ui/CtaBand";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { areaPhotos, photoCredit, servicePhotos } from "@/data/photos";
import { absoluteUrl, faqSchema, serviceSchema } from "@/lib/schema";
import type { ComboContent } from "@/data/types";
import type { Combo } from "@/data/types";
import { getNearbyAreas, isCombo } from "@/lib/matrix";

function variantIndex(areaSlug: string): 0 | 1 | 2 {
  const sum = [...areaSlug].reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return (sum % 3) as 0 | 1 | 2;
}

function siblingCombos(combo: Combo) {
  const nearby = getNearbyAreas(combo.area)
    .filter((area) => area.tier === 1)
    .filter((area) => isCombo(combo.service.slug, area.slug))
    .slice(0, 3);
  return nearby;
}

export function ComboPage({
  combo,
  content,
}: {
  combo: Combo;
  content: ComboContent;
}) {
  const variant = variantIndex(combo.area.slug);
  const siblings = siblingCombos(combo);
  const serviceFaqs = combo.service.faqs.slice(0, 3);
  const faqs = [...serviceFaqs, ...content.localFaqs];

  const crumbs = [
    { name: "Home", href: "/" },
    { name: combo.service.name, href: `/${combo.service.slug}/` },
    {
      name: combo.area.name,
      href: `/${combo.service.slug}/${combo.area.slug}/`,
    },
  ];

  const intro = (
    <section key="intro" className="py-16 sm:py-20">
      <Container>
        <Breadcrumbs items={crumbs} />
        <p className="mb-6 h-px w-12 bg-gold" aria-hidden="true" />
        <h1 className="max-w-4xl text-4xl sm:text-5xl">
          {combo.service.name} in {combo.area.name}, {combo.area.postcode}
        </h1>
        <div className="mt-8 max-w-measure space-y-5 text-base text-grey-700">
          <p>{content.intro}</p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <div>
            <ContentImage
              photo={servicePhotos[combo.service.slug]}
              className="aspect-[16/9] w-full"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
          {areaPhotos[combo.area.slug] ? (
            <div>
              <ContentImage
                photo={areaPhotos[combo.area.slug]}
                className="aspect-[16/9] w-full"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
          ) : null}
        </div>
        <p className="mt-3 text-xs text-grey-600">{photoCredit}</p>
      </Container>
    </section>
  );

  const included = (
    <section key="included" className="border-y border-grey-200 py-16">
      <Container>
        <h2 className="text-3xl">What is included</h2>
        <ul className="mt-8 max-w-3xl list-disc space-y-3 pl-5 text-base text-grey-700">
          {combo.service.included.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Container>
    </section>
  );

  const working = (
    <section key="working" className="py-16">
      <Container>
        <h2 className="text-3xl">Working in {combo.area.name}</h2>
        <div className="mt-8 max-w-measure space-y-5 text-base text-grey-700">
          <p>
            <span className="font-medium text-navy">Council. </span>
            {combo.area.council}
          </p>
          <p>{combo.area.conservationNotes}</p>
          <p>{content.localNote}</p>
          <p>{combo.area.localNotes}</p>
        </div>
      </Container>
    </section>
  );

  const process = (
    <section key="process" className="border-y border-grey-200 py-16">
      <Container>
        <h2 className="text-3xl">How we work</h2>
        <ol className="mt-8 max-w-measure space-y-6">
          {combo.service.processSteps.map((step, index) => (
            <li key={step.title}>
              <h3 className="text-xl">
                {index + 1}. {step.title}
              </h3>
              <p className="mt-2 text-base text-grey-700">{step.text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );

  const order =
    variant === 0
      ? [intro, included, working, process]
      : variant === 1
        ? [intro, working, included, process]
        : [intro, process, working, included];

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: combo.service.name,
          url: absoluteUrl(`/${combo.service.slug}/${combo.area.slug}/`),
          areaServed: `${combo.area.name}, ${combo.area.postcode}`,
        })}
      />
      <JsonLd data={faqSchema(faqs)} />
      <article>
        {order}
        <section className="py-16">
          <Container>
            <h2 className="text-3xl">Questions</h2>
            <div className="mt-10 max-w-3xl">
              <FaqAccordion items={faqs} />
            </div>
          </Container>
        </section>
        <section className="border-t border-grey-200 py-16">
          <Container>
            <h2 className="text-3xl">Also in this neighbourhood</h2>
            <ul className="mt-6 flex flex-col gap-2 text-base text-navy">
              <li>
                <Link href={`/${combo.service.slug}/`} className="hover:text-gold">
                  {combo.service.name} in North West London
                </Link>
              </li>
              <li>
                <Link href={`/areas/${combo.area.slug}/`} className="hover:text-gold">
                  Property services in {combo.area.name}
                </Link>
              </li>
              {siblings.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/${combo.service.slug}/${area.slug}/`}
                    className="hover:text-gold"
                  >
                    {combo.service.name} in {area.name}
                  </Link>
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
