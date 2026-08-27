import Link from "next/link";
import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { CtaBand } from "@/components/ui/CtaBand";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { areas } from "@/data/areas";
import { getGuide, guides } from "@/data/guides";
import { services } from "@/data/services";
import { pageMetadata } from "@/lib/metadata";
import { publicCopy } from "@/lib/public-copy";
import { absoluteUrl, articleSchema } from "@/lib/schema";
import { servicePlainName } from "@/lib/seo-copy";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return pageMetadata({
    title: guide.metaTitle,
    description: guide.metaDescription,
    path: `/guides/${guide.slug}/`,
  });
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const pageUrl = absoluteUrl(`/guides/${guide.slug}/`);
  const faqs = (guide.faqs ?? [])
    .map((item) => ({ q: publicCopy(item.q), a: publicCopy(item.a) }))
    .filter((item) => item.q && item.a);

  const comboLinks = guide.relatedCombos
    .map((item) => {
      const service = services.find((entry) => entry.slug === item.service);
      const area = areas.find((entry) => entry.slug === item.area);
      return service && area
        ? {
            href: `/${service.slug}/${area.slug}/`,
            label: `${servicePlainName(service)} in ${area.name} ${area.postcode}`,
          }
        : null;
    })
    .filter((item): item is { href: string; label: string } => item !== null);

  const serviceLinks = guide.relatedServices
    .map((serviceSlug) => services.find((entry) => entry.slug === serviceSlug))
    .filter((service): service is NonNullable<typeof service> => Boolean(service));

  const related = guide.relatedGuides
    .map((relatedSlug) => getGuide(relatedSlug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  return (
    <>
      <JsonLd
        data={articleSchema({
          headline: guide.title,
          url: pageUrl,
          description: guide.metaDescription,
          datePublished: guide.datePublished,
          dateModified: guide.dateModified,
        })}
      />
      <article>
        <Container className="pt-10">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Guides", href: "/guides/" },
              { name: guide.title, href: `/guides/${guide.slug}/` },
            ]}
          />
        </Container>
        <Container className="grid gap-12 pb-16 pt-8 lg:grid-cols-12 lg:gap-16">
          <header className="lg:col-span-8">
            <p className="rule mb-8" aria-hidden="true" />
            <p className="kicker mb-6">Guide</p>
            <h1 className="font-display text-4xl font-light sm:text-5xl md:text-6xl">
              {guide.title}
            </h1>
            <p className="lede mt-8 max-w-measure text-xl text-grey-600 md:text-2xl">
              {publicCopy(guide.lede)}
            </p>
          </header>
        </Container>

        {guide.sections.map((section, index) => (
          <section
            key={section.heading}
            className={
              index % 2 === 1
                ? "border-y border-grey-200 bg-grey-50/50 py-16 sm:py-20"
                : "py-16 sm:py-20"
            }
          >
            <Container className="grid gap-10 lg:grid-cols-12 lg:gap-16">
              <h2 className="font-display text-3xl font-normal sm:text-4xl lg:col-span-4">
                {section.heading}
              </h2>
              <div className="space-y-5 text-base leading-relaxed text-grey-700 lg:col-span-8">
                {section.paragraphs
                  .map((paragraph) => publicCopy(paragraph))
                  .filter(Boolean)
                  .map((paragraph) => (
                    <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                  ))}
              </div>
            </Container>
          </section>
        ))}

        {faqs.length > 0 ? (
          <section className="border-t border-grey-200 py-20 sm:py-24">
            <Container className="grid gap-12 lg:grid-cols-12">
              <h2 className="font-display text-3xl font-normal sm:text-4xl lg:col-span-4">
                Questions
              </h2>
              <div className="lg:col-span-8">
                <FaqAccordion items={faqs} />
              </div>
            </Container>
          </section>
        ) : null}

        <section className="border-t border-grey-200 py-20 sm:py-24">
          <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <p className="rule mb-8" aria-hidden="true" />
              <h2 className="font-display text-3xl font-normal sm:text-4xl">
                The work this applies to
              </h2>
              <ul className="mt-8 flex flex-col gap-3">
                {serviceLinks.map((service) => (
                  <li key={service.slug}>
                    <Link href={`/${service.slug}/`} className="quiet-link text-base text-navy">
                      {servicePlainName(service)} in North West London
                    </Link>
                  </li>
                ))}
              </ul>
              <h3 className="caption mt-10 text-grey-500">Where this comes up</h3>
              <ul className="mt-5 flex flex-col gap-3">
                {comboLinks.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="quiet-link text-base text-navy">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {related.length > 0 ? (
              <div className="lg:col-span-6">
                <p className="rule mb-8" aria-hidden="true" />
                <h2 className="font-display text-3xl font-normal sm:text-4xl">Related guides</h2>
                <ul className="mt-8 flex flex-col gap-6">
                  {related.map((item) => (
                    <li key={item.slug} className="border-t border-grey-200 pt-5">
                      <Link
                        href={`/guides/${item.slug}/`}
                        className="font-display text-2xl font-normal text-navy"
                      >
                        {item.title}
                      </Link>
                      <p className="mt-2 text-base leading-relaxed text-grey-700">
                        {publicCopy(item.lede)}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </Container>
        </section>
      </article>
      <CtaBand
        title="Request a quote"
        text="Tell us the property and the rooms in scope. We visit before we write a proposal."
      />
    </>
  );
}
