"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { services } from "@/data/services";
import { site } from "@/data/site";
import { tier1Areas } from "@/lib/matrix";

import { Container } from "../ui/Container";
import { MobileNav } from "./MobileNav";
import { Wordmark } from "./Wordmark";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const [menuPath, setMenuPath] = useState(pathname);
  const areasRef = useRef<HTMLLIElement>(null);
  const dropdownAreas = tier1Areas().slice(0, 8);
  const home = pathname === "/";
  const overlay = home && !scrolled;

  // Navigating closes the Areas menu. Derived during render rather than in an
  // effect, which would cascade an extra render.
  if (menuPath !== pathname) {
    setMenuPath(pathname);
    if (areasOpen) setAreasOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Escape and outside-click close the Areas menu.
  useEffect(() => {
    if (!areasOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setAreasOpen(false);
    };
    const onPointer = (event: PointerEvent) => {
      if (!areasRef.current?.contains(event.target as Node)) setAreasOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [areasOpen]);

  return (
    <header
      className={[
        // Fixed in both states on the home page: switching between absolute and
        // sticky put the header in and out of flow and shifted the document.
        home ? "fixed" : "sticky",
        "inset-x-0 top-0 z-50 transition-colors duration-300",
        overlay
          ? "bg-gradient-to-b from-bone/90 via-bone/55 to-transparent"
          : "border-b border-navy/6 bg-bone/85 backdrop-blur-md",
      ].join(" ")}
    >
      <div className="h-px bg-gold" aria-hidden="true" />
      <Container className="flex items-center justify-between gap-6 py-4">
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
              <li className="relative" ref={areasRef}>
                <button
                  type="button"
                  className="nav-link cursor-pointer"
                  aria-expanded={areasOpen}
                  aria-controls="areas-menu"
                  onClick={() => setAreasOpen((value) => !value)}
                >
                  Areas
                </button>
                {areasOpen ? (
                  <ul
                    id="areas-menu"
                    className="absolute right-0 z-30 mt-3 w-56 border border-grey-200 bg-bone py-2 text-navy"
                  >
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
                ) : null}
              </li>
              <li>
                <Link href="/guides/" className="nav-link">
                  Guides
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
            <Link href="/contact/" className="btn btn-primary min-w-0 px-5 py-2.5 text-[0.68rem]">
              Request a quote
            </Link>
          </span>
          <div className="text-navy">
            <MobileNav />
          </div>
        </div>
      </Container>
    </header>
  );
}
