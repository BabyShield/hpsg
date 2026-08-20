import type { Metadata } from "next";
import Link from "next/link";

import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { CtaBand } from "@/components/ui/CtaBand";
import { site } from "@/data/site";
import { publicCopy } from "@/lib/public-copy";

export const metadata: Metadata = {
  title: "The group",
  description:
    "Hampstead Property Services Group Limited and the sister companies in the same family. 020 7101 3168.",
};

export default function GroupPage() {
  const onDemandUrl = site.sisterBrands[1]?.url;
  const paintingNote = publicCopy(
    "The group also operates local painting companies. Where a microsite already exists for an area, this site will link out rather than duplicate a painting combination page. [TBC: list of names and URLs]",
  );

  return (
    <>
      <Container className="py-16 sm:py-24">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Group", href: "/group/" },
          ]}
        />
        <p className="mb-6 h-px w-12 bg-gold" aria-hidden="true" />
        <h1 className="max-w-3xl font-display text-4xl font-medium sm:text-6xl">
          The Hampstead Property Services Group family
        </h1>
        <div className="mt-10 max-w-measure space-y-5 text-base leading-relaxed text-grey-700">
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
        </div>
        <ul className="mt-16 divide-y divide-grey-200 border-y border-grey-200">
          <li className="grid gap-4 py-10 lg:grid-cols-12">
            <h2 className="font-display text-3xl font-medium text-navy lg:col-span-4">
              Hampstead Renovations
            </h2>
            <div className="max-w-measure text-base leading-relaxed text-grey-700 lg:col-span-8">
              <p>
                Hampstead Renovations takes on major design-and-build work — the
                projects that change the carcass of a house.
              </p>
              <p className="mt-4">
                <a
                  href="https://hampsteadrenovations.co.uk"
                  className="btn-line text-navy"
                >
                  hampsteadrenovations.co.uk
                </a>
              </p>
            </div>
          </li>
          <li className="grid gap-4 py-10 lg:grid-cols-12">
            <h2 className="font-display text-3xl font-medium text-navy lg:col-span-4">
              Hampstead On Demand
            </h2>
            <div className="max-w-measure text-base leading-relaxed text-grey-700 lg:col-span-8">
              <p>Hampstead On Demand is the on-demand trades company in the family.</p>
              {onDemandUrl ? (
                <p className="mt-4">
                  <a href={onDemandUrl} className="btn-line text-navy">
                    {onDemandUrl.replace(/^https?:\/\//, "")}
                  </a>
                </p>
              ) : null}
            </div>
          </li>
          {paintingNote ? (
            <li className="grid gap-4 py-10 lg:grid-cols-12">
              <h2 className="font-display text-3xl font-medium text-navy lg:col-span-4">
                Local painting companies
              </h2>
              <div className="max-w-measure text-base leading-relaxed text-grey-700 lg:col-span-8">
                <p>{paintingNote}</p>
                {site.paintingBrands.length > 0 ? (
                  <ul className="mt-4 space-y-2">
                    {site.paintingBrands.map((brand) => (
                      <li key={brand.name}>
                        <a href={brand.url} className="text-navy hover:text-gold">
                          {brand.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </li>
          ) : null}
        </ul>
        <p className="mt-12 max-w-measure text-base leading-relaxed text-grey-700">
          For kitchens, bathrooms, painting (where we take it on) and light
          refurbishment, stay on{" "}
          <Link href="/" className="text-navy underline decoration-gold underline-offset-4">
            hpsg.co.uk
          </Link>
          .
        </p>
      </Container>
      <CtaBand />
    </>
  );
}
