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
    <header className="border-b border-grey-200 bg-bone">
      <Container className="flex items-start justify-between gap-8 py-6">
        <Wordmark />
        <div className="flex items-start gap-8">
          <nav className="hidden lg:block" aria-label="Primary">
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-1 text-sm tracking-wide text-navy">
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
                  <ul className="absolute right-0 z-30 mt-3 w-56 border border-grey-200 bg-bone py-3 shadow-sm">
                    {dropdownAreas.map((area) => (
                      <li key={area.slug}>
                        <Link
                          href={`/areas/${area.slug}/`}
                          className="block px-4 py-1.5 hover:text-gold"
                        >
                          {area.name}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link
                        href="/areas/"
                        className="block border-t border-grey-200 px-4 py-2 mt-2 hover:text-gold"
                      >
                        All areas
                      </Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <Link href="/projects/" className="hover:text-gold">
                  Projects
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
            className="hidden shrink-0 bg-navy px-4 py-2 text-sm tracking-wide text-bone lg:inline-flex"
          >
            {site.phoneDisplay}
          </a>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
