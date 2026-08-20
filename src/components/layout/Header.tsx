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
    <header className="sticky top-0 z-50 border-b border-navy/6 bg-bone/85 backdrop-blur-md">
      <div className="h-[2px] bg-gold" aria-hidden="true" />
      <Container className="flex items-center justify-between gap-6 py-3.5">
        <Wordmark compact />
        <div className="flex items-center gap-8">
          <nav className="hidden lg:block" aria-label="Primary">
            <ul className="flex items-center gap-x-7 text-[0.9rem] font-medium text-navy">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={`/${service.slug}/`} className="nav-link">
                    {service.navLabel}
                  </Link>
                </li>
              ))}
              <li className="relative">
                <details className="group">
                  <summary className="nav-link cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                    Areas
                  </summary>
                  <ul className="absolute right-0 z-30 mt-3 w-56 border border-grey-200 bg-bone py-2">
                    {dropdownAreas.map((area) => (
                      <li key={area.slug}>
                        <Link
                          href={`/areas/${area.slug}/`}
                          className="block px-4 py-2 font-normal hover:bg-grey-50"
                        >
                          {area.name}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link
                        href="/areas/"
                        className="mt-1 block border-t border-grey-200 px-4 py-2 font-normal"
                      >
                        All areas
                      </Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <Link href="/projects/" className="nav-link">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/about/" className="nav-link">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact/" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <a
            href={`tel:${site.phoneTel}`}
            className="hidden text-sm font-medium text-navy xl:inline"
          >
            {site.phoneDisplay}
          </a>
          <span className="hidden lg:inline-flex">
            <Link href="/contact/" className="btn btn-primary py-2.5 px-4 text-[0.7rem]">
              Request a quote
            </Link>
          </span>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
