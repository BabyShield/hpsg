"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { services } from "@/data/services";
import { site } from "@/data/site";
import { tier1Areas } from "@/lib/matrix";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const dropdownAreas = tier1Areas().slice(0, 8);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        className="text-xs font-semibold uppercase tracking-[0.16em] text-navy"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? "Close" : "Menu"}
      </button>
      {open ? (
        <div
          id="mobile-navigation"
          className="fixed inset-x-0 top-[4.5rem] bottom-14 z-40 overflow-y-auto border-t border-grey-200 bg-bone px-6 py-8"
        >
          <nav aria-label="Mobile">
            <ul className="flex flex-col gap-4 text-lg text-navy">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={`/${service.slug}/`} onClick={() => setOpen(false)}>
                    {service.navLabel}
                  </Link>
                </li>
              ))}
              <li>
                <p className="text-sm uppercase tracking-[0.14em] text-grey-600">Areas</p>
                <ul className="mt-3 flex flex-col gap-2 text-base">
                  {dropdownAreas.map((area) => (
                    <li key={area.slug}>
                      <Link href={`/areas/${area.slug}/`} onClick={() => setOpen(false)}>
                        {area.name}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link href="/areas/" onClick={() => setOpen(false)}>
                      All areas
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/projects/" onClick={() => setOpen(false)}>
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/about/" onClick={() => setOpen(false)}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact/" onClick={() => setOpen(false)}>
                  Contact
                </Link>
              </li>
            </ul>
            <a
              href={`tel:${site.phoneTel}`}
              className="mt-8 inline-flex bg-navy px-5 py-3 text-sm text-bone"
            >
              {site.phoneDisplay}
            </a>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
