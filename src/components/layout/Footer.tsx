import Link from "next/link";

import { services } from "@/data/services";
import { site } from "@/data/site";
import { tier1Areas } from "@/lib/matrix";

import { Container } from "../ui/Container";
import { Wordmark } from "./Wordmark";

export function Footer() {
  return (
    <footer className="bg-navy pb-16 text-bone lg:pb-0">
      <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Wordmark compact inverted />
          <p className="mt-6 max-w-xs text-sm text-bone/75">{site.tagline}</p>
          <a href={`tel:${site.phoneTel}`} className="btn btn-gold mt-8">
            {site.phoneDisplay}
          </a>
        </div>
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
            Services
          </h2>
          <ul className="mt-4 flex flex-col gap-2 text-sm">
            {services.map((service) => (
              <li key={service.slug}>
                <Link href={`/${service.slug}/`} className="text-bone/85 hover:text-gold">
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
            Areas
          </h2>
          <ul className="mt-4 columns-2 gap-6 text-sm">
            {tier1Areas().map((area) => (
              <li key={area.slug} className="mb-2 break-inside-avoid">
                <Link href={`/areas/${area.slug}/`} className="text-bone/85 hover:text-gold">
                  {area.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
            Company
          </h2>
          <ul className="mt-4 flex flex-col gap-2 text-sm">
            <li>
              <Link href="/about/" className="text-bone/85 hover:text-gold">
                About
              </Link>
            </li>
            <li>
              <Link href="/projects/" className="text-bone/85 hover:text-gold">
                Work
              </Link>
            </li>
            <li>
              <Link href="/group/" className="text-bone/85 hover:text-gold">
                Group
              </Link>
            </li>
            <li>
              <Link href="/contact/" className="text-bone/85 hover:text-gold">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/privacy/" className="text-bone/85 hover:text-gold">
                Privacy
              </Link>
            </li>
          </ul>
          <address className="mt-8 text-sm not-italic text-bone/75">
            <p>
              <a href={`mailto:${site.email}`} className="hover:text-gold">
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
      <div className="border-t border-bone/15">
        <Container className="flex flex-col gap-3 py-6 text-xs text-bone/60 sm:flex-row sm:items-center sm:justify-between">
          <p>{site.footerLegal}</p>
          <p>
            <a href="https://hampsteadrenovations.co.uk" className="hover:text-gold">
              Hampstead Renovations
            </a>
            {site.sisterBrands[1]?.url ? (
              <>
                {" · "}
                <a href={site.sisterBrands[1].url} className="hover:text-gold">
                  Hampstead On Demand
                </a>
              </>
            ) : null}
          </p>
        </Container>
      </div>
    </footer>
  );
}
