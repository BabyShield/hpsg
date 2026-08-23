import Link from "next/link";

import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { CtaBand } from "@/components/ui/CtaBand";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";
import { publicCopy } from "@/lib/public-copy";

export const metadata = pageMetadata({
  title: "The Hampstead Property Services Group family | HPSG",
  description:
    "Hampstead Property Services Group Limited (17404557) for kitchen, bathroom, painting and light refurbishment in North West London, and the sister companies in the same family. 020 7101 3168.",
  path: "/group/",
});

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
        <p className="rule mb-8" aria-hidden="true" />
        <h1 className="max-w-3xl font-display text-4xl font-light sm:text-6xl">
          The Hampstead Property Services Group family
        </h1>
        <div className="mt-10 max-w-measure space-y-5 text-base leading-relaxed text-grey-700">
          <p className="lede text-xl text-grey-600 md:text-2xl">
            Four services on this site. Other work in the same family sits on
            its own company pages, not here.
          </p>
          <p>
            Hampstead Property Services Group Limited (company no.{" "}
            {site.companyNumber}) is the company behind hpsg.co.uk. It is the
            place for kitchen renovation, bathroom renovation, painting and
            decorating, and light refurbishment in North West London — rooms
            that already exist, run as one programme from Finchley Road.
          </p>
          <p>
            The same family includes other companies for work that sits outside
            those four services. Each is a genuine business with its own site.
            This page exists to explain the family, not to harvest links. If
            the brief is a kitchen, a bathroom, decoration or a light
            refurbishment of rooms that already exist, stay on this site.
          </p>
        </div>
        <ul className="mt-16 divide-y divide-grey-200 border-y border-grey-200">
          <li className="grid gap-4 py-10 lg:grid-cols-12">
            <h2 className="font-display text-3xl font-normal text-navy lg:col-span-4">
              This site — HPSG
            </h2>
            <div className="max-w-measure text-base leading-relaxed text-grey-700 lg:col-span-8">
              <p>
                Kitchens, bathrooms, painting and light refurbishment in
                conversions, mansion flats and family houses across the North
                West London list. Survey, written proposal, one programme. Not
                a catalogue showroom and not a structural contractor.
              </p>
              <p className="mt-4">
                <Link href="/" className="btn-line text-navy">
                  hpsg.co.uk
                </Link>
              </p>
            </div>
          </li>
          <li className="grid gap-4 py-10 lg:grid-cols-12">
            <h2 className="font-display text-3xl font-normal text-navy lg:col-span-4">
              Hampstead Renovations
            </h2>
            <div className="max-w-measure text-base leading-relaxed text-grey-700 lg:col-span-8">
              <p>
                Hampstead Renovations takes on major design-and-build work —
                the projects that change the carcass of a house: extensions,
                loft conversions, structural openings and whole-house
                programmes that sit outside light refurbishment on this site. A
                brief that starts as a kitchen and becomes a wall to remove is
                a single introduction, not a stretch of the word refurbishment.
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
            <h2 className="font-display text-3xl font-normal text-navy lg:col-span-4">
              Hampstead On Demand
            </h2>
            <div className="max-w-measure text-base leading-relaxed text-grey-700 lg:col-span-8">
              <p>
                Hampstead On Demand is the on-demand trades company in the
                family — day-to-day call-outs rather than a planned kitchen,
                bathroom or light-refurbishment programme. A leaking tap is not
                a renovation instruction; a renovation is not a call-out.
              </p>
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
              <h2 className="font-display text-3xl font-normal text-navy lg:col-span-4">
                Local painting companies
              </h2>
              <div className="max-w-measure text-base leading-relaxed text-grey-700 lg:col-span-8">
                <p>{paintingNote}</p>
                {site.paintingBrands.length > 0 ? (
                  <ul className="mt-4 space-y-2">
                    {site.paintingBrands.map((brand) => (
                      <li key={brand.name}>
                        <a href={brand.url} className="quiet-link text-navy">
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
        <p className="mt-16 max-w-measure text-base leading-relaxed text-grey-700">
          For kitchens, bathrooms, painting (where we take it on) and light
          refurbishment, stay on this site.
        </p>
        <ul className="mt-8 flex flex-col gap-2 text-navy">
          <li>
            <Link href="/kitchen-renovation/" className="quiet-link">
              Kitchen renovation in North West London
            </Link>
          </li>
          <li>
            <Link href="/bathroom-renovation/" className="quiet-link">
              Bathroom renovation in North West London
            </Link>
          </li>
          <li>
            <Link href="/painting-decorating/" className="quiet-link">
              Painting and decorating in North West London
            </Link>
          </li>
          <li>
            <Link href="/light-refurbishment/" className="quiet-link">
              Light refurbishment in North West London
            </Link>
          </li>
        </ul>
      </Container>
      <CtaBand />
    </>
  );
}
