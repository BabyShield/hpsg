import Link from "next/link";

import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { ContentImage } from "@/components/ui/ContentImage";
import { CtaBand } from "@/components/ui/CtaBand";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { PageHero } from "@/components/ui/PageHero";
import { ServiceCard } from "@/components/ui/ServiceCard";
import {
  aboutFaqs,
  aboutForWhom,
  aboutHousing,
  aboutIntro,
  aboutSteps,
} from "@/data/about";
import { officeNeighbourhood, servicePhotos } from "@/data/photos";
import { services } from "@/data/services";
import { addressSingleLine, site } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";
import { isDraftToken, publicCopy } from "@/lib/public-copy";
import { absoluteUrl, faqSchema, webPageSchema } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "About Hampstead Property Services Group | Kitchen and bathroom renovation | HPSG",
  description:
    "Hampstead Property Services Group Limited (17404557) carries out kitchen renovation, bathroom renovation, painting and light refurbishment in Hampstead and North West London. Survey-led, from Finchley Road. 020 7101 3168.",
  path: "/about/",
  image: officeNeighbourhood.src,
  imageAlt: officeNeighbourhood.alt,
});

const faqs = aboutFaqs
  .map((item) => ({ q: publicCopy(item.q), a: publicCopy(item.a) }))
  .filter((item) => item.q && item.a);

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          name: "About Hampstead Property Services Group",
          url: absoluteUrl("/about/"),
          description:
            "Hampstead Property Services Group Limited (17404557) carries out kitchen renovation, bathroom renovation, painting and light refurbishment in Hampstead and North West London.",
          image: officeNeighbourhood.src,
        })}
      />
      <JsonLd data={faqSchema(faqs)} />
      <PageHero
        photo={officeNeighbourhood}
        crumbs={[
          { name: "Home", href: "/" },
          { name: "About", href: "/about/" },
        ]}
        kicker="The company"
        title="About Hampstead Property Services Group"
        lede={`Kitchen, bathroom, painting and light refurbishment from ${addressSingleLine}.`}
      />
      <Container className="grid gap-12 py-24 sm:py-32 lg:grid-cols-12 lg:gap-16">
        <div className="space-y-5 text-base leading-relaxed text-grey-700 lg:col-span-7">
          {aboutIntro.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
          {isDraftToken(site.directors) ? null : <p>Director(s): {site.directors}.</p>}
          <p>
            Telephone {site.phoneDisplay}. Email{" "}
            <a href={`mailto:${site.email}`} className="quiet-link text-navy">
              {site.email}
            </a>
            .
          </p>
        </div>
        <div className="lg:col-span-5">
          <p className="rule mb-6" aria-hidden="true" />
          <h2 className="font-display text-3xl font-normal">Who the work is for</h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-grey-700">
            {aboutForWhom.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </Container>

      <section className="border-y border-grey-200 py-24 sm:py-32">
        <Container>
          <p className="rule mb-8" aria-hidden="true" />
          <h2 className="font-display text-4xl font-light sm:text-5xl">
            Housing we take on in North West London
          </h2>
          <ul className="mt-16 grid gap-12 lg:grid-cols-3">
            {aboutHousing.map((item) => (
              <li key={item.title}>
                <h3 className="font-display text-2xl font-normal">{item.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-grey-700">{item.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-24 sm:py-32">
        <Container>
          <p className="kicker mb-8">Services</p>
          <h2 className="font-display text-4xl font-light sm:text-5xl">
            Four services, one Finchley Road office
          </h2>
          <p className="lede mt-6 max-w-measure text-xl text-grey-600">
            Local pages sit under each service for Hampstead, St John&apos;s Wood,
            Maida Vale and the neighbourhoods we cover in detail.
          </p>
          <ul className="mosaic mt-16 grid-cols-1 sm:grid-cols-2">
            {services.map((service) => (
              <li key={service.slug} className="min-h-[16rem]">
                <ServiceCard service={service} className="h-full min-h-[16rem]" />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-y border-grey-200 py-24 sm:py-32">
        <Container className="grid items-center gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <ContentImage
              photo={servicePhotos["kitchen-renovation"]}
              className="aspect-[4/5] w-full"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>
          <div className="lg:col-span-7">
            <p className="kicker mb-8">How we work</p>
            <h2 className="font-display text-4xl font-light sm:text-5xl">
              Enquiry, visit, written proposal, one programme
            </h2>
            <ol className="mt-12">
              {aboutSteps.map((step, index) => (
                <li
                  key={step.title}
                  className="grid grid-cols-[auto_1fr] gap-6 border-t border-grey-200 py-7 last:border-b"
                >
                  <span className="font-display text-3xl leading-none text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-normal">{step.title}</h3>
                    <p className="mt-2 max-w-measure text-base leading-relaxed text-grey-700">
                      {step.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      <section className="py-24 sm:py-32">
        <Container className="grid gap-10 lg:grid-cols-12">
          <h2 className="font-display text-4xl font-light sm:text-5xl lg:col-span-4">
            What this company is not
          </h2>
          <div className="space-y-5 text-base leading-relaxed text-grey-700 lg:col-span-8">
            <p>
              Light refurbishment on this site does not include changing the
              carcass of a building — extensions, loft conversions or structural
              openings. That work sits with{" "}
              <a
                href="https://hampsteadrenovations.co.uk"
                className="quiet-link text-navy"
              >
                Hampstead Renovations
              </a>
              , a sister company in the same family.
            </p>
            <p>
              Day-to-day on-demand trades sit with Hampstead On Demand. The
              family is explained on the{" "}
              <Link href="/group/" className="quiet-link text-navy">
                Group
              </Link>{" "}
              page. For kitchens, bathrooms, painting and light refurbishment,
              stay on this site.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-t border-grey-200 py-24 sm:py-32">
        <Container className="grid gap-12 lg:grid-cols-12">
          <h2 className="font-display text-4xl font-light sm:text-5xl lg:col-span-4">
            Company questions
          </h2>
          <div className="lg:col-span-8">
            <FaqAccordion items={faqs} />
          </div>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
