import Link from "next/link";

import { services } from "@/data/services";
import { site } from "@/data/site";
import { tier1Areas } from "@/lib/matrix";

import { Container } from "../ui/Container";
import { MobileNav } from "./MobileNav";
import { Wordmark } from "./Wordmark";

export function Header() {
  const dropdownAreas = tier1Areas().slice(0, 8);

  return (
    <header className="sticky top-0 z-50 border-b border-navy/8 bg-bone/90 backdrop-blur-md">
      <Container className="flex items-center justify-between gap-6 py-3.5">
        <Wordmark compact />
        <div className="flex items-center gap-7">
          <nav className="hidden lg:block" aria-label="Primary">
            <ul className="flex items-center gap-x-6 text-[0.9375rem] font-medium text-navy">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={`/${service.slug}/`} className="hover:text-gold">
                    {service.navLabel}
                  </Link>
                </li>
              ))}
              <li className="relative">
                <details className="group">
                  <summary className="cursor-pointer list-none hover:text-gold [&::-webkit-details-marker]:hidden">
                    Areas
                  </summary>
                  <ul className="absolute right-0 z-30 mt-3 w-56 border border-grey-200 bg-bone py-2">
                    {dropdownAreas.map((area) => (
                      <li key={area.slug}>
                        <Link
                          href={`/areas/${area.slug}/`}
                          className="block px-4 py-2 font-normal hover:bg-grey-50 hover:text-gold"
                        >
                          {area.name}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link
                        href="/areas/"
                        className="mt-1 block border-t border-grey-200 px-4 py-2 font-normal hover:text-gold"
                      >
                        All areas
                      </Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <Link href="/projects/" className="hover:text-gold">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/about/" className="hover:text-gold">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact/" className="hover:text-gold">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <a
            href={`tel:${site.phoneTel}`}
            className="hidden text-sm font-medium text-navy hover:text-gold xl:inline"
          >
            {site.phoneDisplay}
          </a>
          <span className="hidden lg:inline-flex">
            <Link href="/contact/" className="btn btn-primary py-2.5">
              Request a quote
            </Link>
          </span>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
