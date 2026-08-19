import type { Metadata } from "next";
import Link from "next/link";

import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { CtaBand } from "@/components/ui/CtaBand";
import { addressSingleLine, site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Hampstead Property Services Group Limited is a North West London company for kitchen renovation, bathroom renovation, painting and light refurbishment. 020 7101 3168.",
};

export default function AboutPage() {
  return (
    <>
      <Container className="py-16 sm:py-20">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "About", href: "/about/" },
          ]}
        />
        <p className="mb-6 h-px w-12 bg-gold" aria-hidden="true" />
        <h1 className="text-4xl sm:text-5xl">About Hampstead Property Services Group</h1>
        <div className="mt-10 max-w-measure space-y-5 text-base text-grey-700">
          <p>
            Hampstead Property Services Group Limited is a company registered in
            England and Wales (company no. {site.companyNumber}). It brings the
            group&apos;s refurbishment, decorating and on-demand trades under one
            roof for kitchen renovation, bathroom renovation, painting and
            decorating, and light refurbishment in North West London.
          </p>
          <p>
            The office is at {addressSingleLine}. The telephone number is{" "}
            {site.phoneDisplay}. The email address is {site.email}.
          </p>
          <p>
            Director(s): {site.directors}. We do not publish a founding story,
            a team gallery, or a count of years in business that has not been
            supplied.
          </p>
          <h2 className="pt-4 text-2xl text-navy">How we work</h2>
          <p>
            Enquiry, visit, written proposal, then a single programme for the
            rooms in scope. We do not quote from photographs. Work is fully
            insured. [INSURANCE_TBC]
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
