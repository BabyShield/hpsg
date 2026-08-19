import type { Metadata } from "next";
import Link from "next/link";

import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { CtaBand } from "@/components/ui/CtaBand";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "The group",
  description:
    "Hampstead Property Services Group Limited and the sister companies in the same family. 020 7101 3168.",
};

export default function GroupPage() {
  return (
    <>
      <Container className="py-16 sm:py-20">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Group", href: "/group/" },
          ]}
        />
        <p className="mb-6 h-px w-12 bg-gold" aria-hidden="true" />
        <h1 className="text-4xl sm:text-5xl">The Hampstead Property Services Group family</h1>
        <div className="mt-10 max-w-measure space-y-5 text-base text-grey-700">
          <p>
            Hampstead Property Services Group Limited (company no.{" "}
            {site.companyNumber}) is the company behind this site. It is the
            place for kitchen renovation, bathroom renovation, painting and
            decorating, and light refurbishment in North West London.
          </p>
          <p>
            The same family includes other companies for work that sits outside
            those four services. Each is a genuine business with its own site.
            This page exists to explain the family, not to harvest links.
          </p>
          <h2 className="pt-4 text-2xl text-navy">Hampstead Renovations</h2>
          <p>
            Hampstead Renovations takes on major design-and-build work — the
            projects that change the carcass of a house. One link:{" "}
            <a
              href="https://hampsteadrenovations.co.uk"
              className="text-navy underline decoration-gold underline-offset-4"
            >
              hampsteadrenovations.co.uk
            </a>
            .
          </p>
          <h2 className="pt-4 text-2xl text-navy">Hampstead On Demand</h2>
          <p>
            Hampstead On Demand is the on-demand trades company in the family.
            One link:{" "}
            {site.sisterBrands[1]?.url ? (
              <a
                href={site.sisterBrands[1].url}
                className="text-navy underline decoration-gold underline-offset-4"
              >
                {site.sisterBrands[1].url}
              </a>
            ) : (
              <span>[TBC: URL]</span>
            )}
            .
          </p>
          <h2 className="pt-4 text-2xl text-navy">Local painting companies</h2>
          <p>
            The group also operates local painting companies. Where a microsite
            already exists for an area, this site will link out rather than
            duplicate a painting combination page. [TBC: list of names and URLs]
          </p>
          {site.paintingBrands.length > 0 ? (
            <ul>
              {site.paintingBrands.map((brand) => (
                <li key={brand.name}>
                  <a href={brand.url}>{brand.name}</a>
                </li>
              ))}
            </ul>
          ) : null}
          <p>
            For kitchens, bathrooms, painting (where we take it on) and light
            refurbishment, stay on{" "}
            <Link href="/" className="text-navy underline decoration-gold underline-offset-4">
              hpsg.co.uk
            </Link>
            .
          </p>
        </div>
      </Container>
      <CtaBand />
    </>
  );
}
