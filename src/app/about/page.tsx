import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { ContentImage } from "@/components/ui/ContentImage";
import { CtaBand } from "@/components/ui/CtaBand";
import { PageHero } from "@/components/ui/PageHero";
import { officeNeighbourhood } from "@/data/photos";
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
            England and Wales (company no. {site.companyNumber}). It brings the
            group&apos;s refurbishment, decorating and on-demand trades under one
            roof for kitchen renovation, bathroom renovation, painting and
            decorating, and light refurbishment in North West London.
          </p>
          <p>
            The office is at {addressSingleLine}. Telephone {site.phoneDisplay}.
            Email {site.email}.
          </p>
          {isDraftToken(site.directors) ? null : <p>Director(s): {site.directors}.</p>}
          <h2 className="pt-6 font-display text-3xl font-medium text-navy">How we work</h2>
          <p>
            Enquiry, visit, written proposal, then a single programme for the
            rooms in scope. We do not quote from photographs. Work is fully
            insured.
          </p>
          <p>
            Light refurbishment on this site does not include changing the
            carcass of a building. Sister companies in the same family are
            introduced on the{" "}
            <Link href="/group/" className="text-navy underline decoration-gold underline-offset-4">
              Group
            </Link>{" "}
            page.
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
      <CtaBand />
    </>
  );
}
