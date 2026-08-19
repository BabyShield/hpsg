import Link from "next/link";

import { services } from "@/data/services";
import { site } from "@/data/site";
import { tier1Areas } from "@/lib/matrix";

import { Container } from "../ui/Container";
import { Wordmark } from "./Wordmark";

export function Footer() {
  const paintingNote =
    site.paintingBrands.length === 0
      ? "[TBC: names/URLs for local painting companies]"
      : null;

  return (
    <footer className="border-t border-grey-200 bg-bone pb-20 lg:pb-0">
      <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Wordmark compact />
          <p className="mt-6 text-sm text-grey-700">{site.tagline}</p>
        </div>
        <div>
          <h2 className="text-sm font-medium uppercase tracking-[0.14em] text-grey-600">
            Services
          </h2>
          <ul className="mt-4 flex flex-col gap-2 text-sm text-navy">
            {services.map((service) => (
              <li key={service.slug}>
                <Link href={`/${service.slug}/`} className="hover:text-gold">
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-medium uppercase tracking-[0.14em] text-grey-600">
            Areas
          </h2>
          <ul className="mt-4 flex flex-col gap-2 text-sm text-navy">
            {tier1Areas().map((area) => (
              <li key={area.slug}>
                <Link href={`/areas/${area.slug}/`} className="hover:text-gold">
                  {area.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-medium uppercase tracking-[0.14em] text-grey-600">
            Company
          </h2>
          <ul className="mt-4 flex flex-col gap-2 text-sm text-navy">
            <li>
              <Link href="/about/" className="hover:text-gold">
                About
              </Link>
            </li>
            <li>
              <Link href="/projects/" className="hover:text-gold">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/group/" className="hover:text-gold">
                Group
              </Link>
            </li>
            <li>
              <Link href="/contact/" className="hover:text-gold">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/privacy/" className="hover:text-gold">
                Privacy
              </Link>
            </li>
          </ul>
          <address className="mt-8 text-sm not-italic text-grey-700">
            <p>
              <a href={`tel:${site.phoneTel}`} className="text-navy hover:text-gold">
                {site.phoneDisplay}
              </a>
            </p>
            <p>
              <a href={`mailto:${site.email}`} className="text-navy hover:text-gold">
                {site.email}
              </a>
            </p>
            <p className="mt-2">
              {site.address.line1}
              <br />
              {site.address.line2}
              <br />
              {site.address.city} {site.address.postcode}
            </p>
          </address>
        </div>
      </Container>
      <div className="border-t border-grey-200">
        <Container className="py-8">
          <p className="text-sm text-grey-600">
            Part of the Hampstead Property Services Group family
          </p>
          <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm text-navy">
            {site.sisterBrands.map((brand) => (
              <li key={brand.name}>
                {brand.url ? (
                  <a href={brand.url} className="hover:text-gold">
                    {brand.name}
                  </a>
                ) : (
                  <span>
                    {brand.name} [TBC: URL]
                  </span>
                )}
              </li>
            ))}
            {site.paintingBrands.map((brand) => (
              <li key={brand.name}>
                <a href={brand.url} className="hover:text-gold">
                  {brand.name}
                </a>
              </li>
            ))}
          </ul>
          {paintingNote ? (
            <p className="mt-2 text-sm text-grey-600">{paintingNote}</p>
          ) : null}
        </Container>
      </div>
      <div className="border-t border-grey-200">
        <Container className="py-6">
          <p className="text-xs leading-5 text-grey-600">{site.footerLegal}</p>
        </Container>
      </div>
    </footer>
  );
}
