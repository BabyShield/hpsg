import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { CtaBand } from "@/components/ui/CtaBand";
import { PageHero } from "@/components/ui/PageHero";
import { officeNeighbourhood } from "@/data/photos";
import { addressSingleLine, site } from "@/data/site";
import { isDraftToken } from "@/lib/public-copy";

export const metadata: Metadata = {
  title: "About",
  description:
    "Hampstead Property Services Group Limited is a North West London company for kitchen renovation, bathroom renovation, painting and light refurbishment. 020 7101 3168.",
};

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
      <Container className="prose-measure py-16 sm:py-20">
        <div className="max-w-measure space-y-5 text-base text-grey-700">
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
          <h2 className="pt-4 text-2xl text-navy">How we work</h2>
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
      </Container>
      <CtaBand />
    </>
  );
}
