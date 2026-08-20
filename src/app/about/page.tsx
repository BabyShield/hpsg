import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { ContentImage } from "@/components/ui/ContentImage";
import { CtaBand } from "@/components/ui/CtaBand";
import { PageHero } from "@/components/ui/PageHero";
import { officeNeighbourhood } from "@/data/photos";
import { services } from "@/data/services";
import { addressSingleLine, site } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";
import { isDraftToken } from "@/lib/public-copy";

export const metadata = pageMetadata({
  title: "About Hampstead Property Services Group | HPSG",
  description:
    "Hampstead Property Services Group Limited is a North West London company for kitchen renovation, bathroom renovation, painting and light refurbishment. 020 7101 3168.",
  path: "/about/",
  image: officeNeighbourhood.src,
  imageAlt: officeNeighbourhood.alt,
});

const steps = [
  {
    title: "Enquiry",
    text: "Call, email or use the form. Tell us the property, the rooms in scope, and whether the building has a managing agent.",
  },
  {
    title: "Visit",
    text: "We visit before we write a proposal. Period walls, stacks and access are rarely as photographs suggest.",
  },
  {
    title: "Written proposal",
    text: "A specification, a programme and a price against that scope. Variations later are written, not verbal.",
  },
  {
    title: "One programme",
    text: "Kitchen, bathroom, decoration and floors are sequenced so trades are not left coordinating themselves.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        photo={officeNeighbourhood}
        crumbs={[
          { name: "Home", href: "/" },
          { name: "About", href: "/about/" },
        ]}
        kicker="The company"
        title="About Hampstead Property Services Group"
        lede={`Based at ${addressSingleLine}.`}
      />
      <Container className="grid gap-12 py-20 sm:py-28 lg:grid-cols-12 lg:gap-16">
        <div className="space-y-5 text-base leading-relaxed text-grey-700 lg:col-span-7">
          <p>
            Hampstead Property Services Group Limited is a company registered in
            England and Wales (company no. {site.companyNumber}). This site is
            the place for kitchen renovation, bathroom renovation, painting and
            decorating, and light refurbishment in North West London — period
            conversions, mansion flats and family houses around a Hampstead
            office.
          </p>
          <p>
            The office is at {addressSingleLine}. Telephone {site.phoneDisplay}.
            Email {site.email}.
          </p>
          {isDraftToken(site.directors) ? null : <p>Director(s): {site.directors}.</p>}
          <p>
            Work is fully insured. We do not quote from photographs. We do not
            invent reviews, prices or case studies on this site.
          </p>
        </div>
        <div className="lg:col-span-5">
          <ContentImage
            photo={officeNeighbourhood}
            className="aspect-[4/5] w-full"
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
          <p className="mt-4 text-sm text-grey-600">{addressSingleLine}</p>
        </div>
      </Container>

      <section className="border-y border-grey-200 py-20 sm:py-28">
        <Container>
          <h2 className="font-display text-4xl font-medium sm:text-5xl">What we do</h2>
          <p className="mt-5 max-w-measure text-base leading-relaxed text-grey-700">
            Four services, one office. Local pages sit under each service for
            the neighbourhoods we cover in detail.
          </p>
          <ul className="mt-12 grid gap-10 sm:grid-cols-2">
            {services.map((service) => (
              <li key={service.slug}>
                <h3 className="font-display text-2xl font-medium">
                  <Link href={`/${service.slug}/`} className="hover:text-gold">
                    {service.name}
                  </Link>
                </h3>
                <p className="mt-3 text-base leading-relaxed text-grey-700">{service.heroLine}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <h2 className="font-display text-4xl font-medium sm:text-5xl">How we work</h2>
          <ol className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <li key={step.title}>
                <p className="font-display text-3xl text-gold">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-display text-2xl font-medium">{step.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-grey-700">{step.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="border-t border-grey-200 py-20 sm:py-28">
        <Container className="grid gap-10 lg:grid-cols-12">
          <h2 className="font-display text-4xl font-medium sm:text-5xl lg:col-span-4">
            What this site is not
          </h2>
          <div className="space-y-5 text-base leading-relaxed text-grey-700 lg:col-span-8">
            <p>
              Light refurbishment on this site does not include changing the
              carcass of a building — extensions, loft conversions or structural
              openings. That work sits with{" "}
              <a
                href="https://hampsteadrenovations.co.uk"
                className="text-navy underline decoration-gold underline-offset-4"
              >
                Hampstead Renovations
              </a>
              , a sister company in the same family.
            </p>
            <p>
              Day-to-day on-demand trades sit with Hampstead On Demand. The
              family is explained on the{" "}
              <Link href="/group/" className="text-navy underline decoration-gold underline-offset-4">
                Group
              </Link>{" "}
              page. For kitchens, bathrooms, painting and light refurbishment,
              stay on this site.
            </p>
          </div>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
