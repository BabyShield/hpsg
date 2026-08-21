"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import { services } from "@/data/services";
import { site } from "@/data/site";
import { tier1Areas } from "@/lib/matrix";

import { Wordmark } from "./Wordmark";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const dropdownAreas = tier1Areas().slice(0, 8);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const panel = (
    <div
      id="mobile-navigation"
      className="fixed inset-0 z-[60] overflow-y-auto bg-bone px-5 py-6 sm:px-8"
    >
      <div className="flex items-center justify-between">
        <Wordmark compact />
        <button
          type="button"
          className="text-sm font-medium text-navy"
          onClick={() => setOpen(false)}
        >
          Close
        </button>
      </div>
      <nav className="mt-10 pb-28" aria-label="Mobile">
        <ul className="flex flex-col gap-5">
          {services.map((service) => (
            <li key={service.slug}>
              <Link
                href={`/${service.slug}/`}
                className="font-display text-3xl text-navy"
                onClick={() => setOpen(false)}
              >
                {service.name}
              </Link>
            </li>
          ))}
          <li className="pt-6">
            <p className="kicker">
              Areas
            </p>
            <ul className="mt-4 flex flex-col gap-2.5 text-base text-navy">
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
            <Link href="/projects/" className="text-lg text-navy" onClick={() => setOpen(false)}>
              Work
            </Link>
          </li>
          <li>
            <Link href="/about/" className="text-lg text-navy" onClick={() => setOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link href="/contact/" className="text-lg text-navy" onClick={() => setOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
        <a href={`tel:${site.phoneTel}`} className="btn btn-primary mt-10">
          {site.phoneDisplay}
        </a>
      </nav>
    </div>
  );

  return (
    <div className="lg:hidden">
      <button
        type="button"
        className="text-sm font-medium"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? "Close" : "Menu"}
      </button>
      {mounted && open ? createPortal(panel, document.body) : null}
    </div>
  );
}
