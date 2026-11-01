import Link from "next/link";

import { site } from "@/data/site";

import { Container } from "./Container";

const items = [
  {
    label: "Office",
    value: "250 Finchley Road",
    detail: "London NW3 6DN",
    href: "/contact/",
  },
  {
    label: "Telephone",
    value: site.phoneDisplay,
    detail: "Call the office",
    href: `tel:${site.phoneTel}`,
  },
  {
    label: "Email",
    value: site.email,
    detail: "Quotes and enquiries",
    href: `mailto:${site.email}`,
  },
  {
    label: "Company",
    value: `No. ${site.companyNumber}`,
    detail: "Fully insured",
    href: "/about/",
  },
] as const;

function RailLink({ href, className, children }: { href: string; className: string; children: string }) {
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}

/**
 * The same four facts on every page, so a visitor and a crawler meet the
 * company in one place.
 */
export function EntityRail() {
  return (
    <aside aria-label="Company details" className="border-y border-grey-200 bg-bone text-ink">
      <Container>
        <dl className="grid grid-cols-2 gap-x-8 gap-y-6 py-5 sm:py-6 lg:grid-cols-4">
          {items.map((item) => (
            <div key={item.label}>
              <dt className="kicker">{item.label}</dt>
              <dd className="mt-2 text-sm font-medium leading-snug text-navy">
                <RailLink href={item.href} className="quiet-link text-navy">
                  {item.value}
                </RailLink>
              </dd>
              <p className="mt-1 text-xs leading-relaxed text-grey-600">
                {item.detail}
              </p>
            </div>
          ))}
        </dl>
      </Container>
    </aside>
  );
}
