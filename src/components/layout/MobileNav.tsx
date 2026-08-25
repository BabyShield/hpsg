"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { services } from "@/data/services";
import { site } from "@/data/site";
import { tier1Areas } from "@/lib/matrix";

import { Wordmark } from "./Wordmark";

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dropdownAreas = tier1Areas().slice(0, 8);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Move focus into the panel, and keep Tab inside it while it is open.
    const panel = panelRef.current;
    const trigger = triggerRef.current;
    panel?.querySelector<HTMLElement>(FOCUSABLE)?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
        return;
      }
      if (event.key !== "Tab" || !panel) return;
      const items = Array.from(panel.querySelectorAll<HTMLElement>(FOCUSABLE));
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previous;
      trigger?.focus();
    };
  }, [open, close]);

  const panel = (
    <div
      ref={panelRef}
      id="mobile-navigation"
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
      className="fixed inset-0 z-[60] overflow-y-auto bg-bone px-5 py-6 sm:px-8"
    >
      <div className="flex items-center justify-between">
        <Wordmark compact />
        <button type="button" className="text-sm font-medium text-navy" onClick={close}>
          Close
        </button>
      </div>
      <nav className="mt-10 pb-28" aria-label="Mobile">
        <ul className="flex flex-col gap-5">
          {services.map((service) => (
            <li key={service.slug}>
              <Link href={`/${service.slug}/`} className="font-display text-3xl text-navy" onClick={close}>
                {service.name}
              </Link>
            </li>
          ))}
          <li className="pt-6">
            <p className="kicker">Areas</p>
            <ul className="mt-4 flex flex-col gap-2.5 text-base text-navy">
              {dropdownAreas.map((area) => (
                <li key={area.slug}>
                  <Link href={`/areas/${area.slug}/`} onClick={close}>
                    {area.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/areas/" onClick={close}>
                  All areas
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/about/" className="text-lg text-navy" onClick={close}>
              About
            </Link>
          </li>
          <li>
            <Link href="/contact/" className="text-lg text-navy" onClick={close}>
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
        ref={triggerRef}
        type="button"
        className="text-sm font-medium"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? "Close" : "Menu"}
      </button>
      {open && typeof document !== "undefined" ? createPortal(panel, document.body) : null}
    </div>
  );
}
