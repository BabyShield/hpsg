import Link from "next/link";

import { areas } from "@/data/areas";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { tier1Areas } from "@/lib/matrix";

import { Container } from "../ui/Container";
import { Wordmark } from "./Wordmark";

/**
 * Eight combo pages spread across all four services, linked sitewide with
 * their postcode in the anchor text.
 */
const POPULAR_COMBOS: { service: string; area: string }[] = [
  { service: "kitchen-renovation", area: "hampstead" },
  { service: "bathroom-renovation", area: "st-johns-wood" },
  { service: "painting-decorating", area: "belsize-park" },
  { service: "light-refurbishment", area: "west-hampstead" },
  { service: "kitchen-renovation", area: "highgate" },
  { service: "bathroom-renovation", area: "maida-vale" },
  { service: "painting-decorating", area: "primrose-hill" },
  { service: "light-refurbishment", area: "kentish-town" },
];

const SERVICE_LABEL: Record<string, string> = {
  "kitchen-renovation": "Kitchen renovation",
  "bathroom-renovation": "Bathroom renovation",
  "painting-decorating": "Painting & decorating",
  "light-refurbishment": "Light refurbishment",
};

export function Footer() {
  const popular = POPULAR_COMBOS.map((item) => {
    const area = areas.find((entry) => entry.slug === item.area);
    return area
      ? {
          href: `/${item.service}/${item.area}/`,
          label: `${SERVICE_LABEL[item.service]} in ${area.name} ${area.postcode}`,
        }
      : null;
  }).filter((item): item is { href: string; label: string } => item !== null);

  return (
    <footer className="band-navy pb-16 lg:pb-0">
      <Container className="grid gap-16 pt-24 sm:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Wordmark inverted />
          <p className="lede mt-8 max-w-xs text-xl text-bone/75">{site.tagline}</p>
          <a href={`tel:${site.phoneTel}`} className="btn-line mt-10 text-bone">
            {site.phoneDisplay}
          </a>
        </div>
        <div className="lg:col-span-2">
          <h2 className="kicker text-bone/70">Services</h2>
          <ul className="mt-6 flex flex-col gap-3 text-sm text-bone/85">
            {services.map((service) => (
              <li key={service.slug}>
                <Link href={`/${service.slug}/`}>{service.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-3">
          <h2 className="kicker text-bone/70">Areas</h2>
          <ul className="mt-6 columns-2 gap-8 text-sm text-bone/85">
            {tier1Areas().map((area) => (
              <li key={area.slug} className="mb-3 break-inside-avoid">
                <Link href={`/areas/${area.slug}/`}>{area.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-3">
          <h2 className="kicker text-bone/70">Company</h2>
          <ul className="mt-6 flex flex-col gap-3 text-sm text-bone/85">
            <li>
              <Link href="/about/">About</Link>
            </li>
            <li>
              <Link href="/projects/">Work</Link>
            </li>
            <li>
              <Link href="/group/">Group</Link>
            </li>
            <li>
              <Link href="/contact/">Contact</Link>
            </li>
            <li>
              <Link href="/privacy/">Privacy</Link>
            </li>
          </ul>
          <address className="mt-10 text-sm not-italic leading-relaxed text-bone/70">
            <p>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
            <p className="mt-4">
              {site.address.line1}
              <br />
              {site.address.line2}
              <br />
              {site.address.city} {site.address.postcode}
            </p>
          </address>
        </div>
      </Container>
      <Container className="pb-20 pt-4">
        <h2 className="kicker text-bone/70">Popular local pages</h2>
        <ul className="mt-6 grid gap-x-10 gap-y-3 text-sm text-bone/85 sm:grid-cols-2 lg:grid-cols-4">
          {popular.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </Container>
      <div className="border-t border-bone/10">
        <Container className="flex flex-col gap-3 py-7 text-xs tracking-wide text-bone/70 sm:flex-row sm:items-center sm:justify-between">
          <p>{site.footerLegal}</p>
          <p>
            <a href="https://hampsteadrenovations.co.uk">Hampstead Renovations</a>
            {site.sisterBrands[1]?.url ? (
              <>
                {" · "}
                <a href={site.sisterBrands[1].url}>Hampstead On Demand</a>
              </>
            ) : null}
          </p>
        </Container>
      </div>
    </footer>
  );
}
