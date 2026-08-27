import Link from "next/link";

import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { CtaBand } from "@/components/ui/CtaBand";
import { guides } from "@/data/guides";
import { pageMetadata } from "@/lib/metadata";
import { publicCopy } from "@/lib/public-copy";
import { absoluteUrl, itemListSchema, webPageSchema } from "@/lib/schema";

const TITLE = "Guides to Renovation in North West London | HPSG";
const DESCRIPTION =
  "Licences to alter, conservation-area consent, mansion-flat logistics and what actually decides the cost of a kitchen or bathroom. 020 7101 3168.";

export const metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/guides/",
});

export default function GuidesPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          name: "Guides",
          url: absoluteUrl("/guides/"),
          description: DESCRIPTION,
        })}
      />
      <JsonLd
        data={itemListSchema(
          "Renovation guides for North West London",
          guides.map((guide) => ({
            name: guide.title,
            url: absoluteUrl(`/guides/${guide.slug}/`),
          })),
        )}
      />
      <Container className="pt-10">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Guides", href: "/guides/" },
          ]}
        />
      </Container>
      <Container className="grid gap-12 pb-16 pt-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <p className="rule mb-8" aria-hidden="true" />
          <h1 className="font-display text-4xl font-light sm:text-5xl md:text-6xl">
            Guides
          </h1>
          <p className="lede mt-8 max-w-measure text-xl text-grey-600 md:text-2xl">
            The questions that decide how a job runs in this housing stock:
            consent, tenure, services and sequence.
          </p>
        </div>
        <div className="space-y-5 self-end text-base leading-relaxed text-grey-700 lg:col-span-5">
          <p>
            These are written for the buildings we work in — period conversions,
            purpose-built mansion flats and family houses across Camden,
            Westminster, Barnet and Haringey. They set out how a process works
            and what it usually asks of you, rather than offering legal advice
            on a particular address.
          </p>
          <p>
            Where a fact depends on the individual property, we say so instead of
            generalising. The answer for your address is a matter for the survey.
          </p>
        </div>
      </Container>

      <section className="border-t border-grey-200">
        <Container>
          <ul>
            {guides.map((guide, index) => (
              <li key={guide.slug} className="border-b border-grey-200">
                <Link
                  href={`/guides/${guide.slug}/`}
                  className="group grid gap-6 py-12 lg:grid-cols-12 lg:gap-16"
                >
                  <p className="font-display text-3xl text-gold-deep lg:col-span-2">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <div className="lg:col-span-7">
                    <h2 className="font-display text-3xl font-normal sm:text-4xl">
                      {guide.title}
                    </h2>
                    <p className="mt-4 max-w-measure text-base leading-relaxed text-grey-700">
                      {publicCopy(guide.lede)}
                    </p>
                  </div>
                  <p className="btn-line self-start text-navy lg:col-span-3 lg:justify-self-end">
                    Read the guide
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBand
        title="Request a quote"
        text="Tell us the property and the rooms in scope. We visit before we write a proposal."
      />
    </>
  );
}
