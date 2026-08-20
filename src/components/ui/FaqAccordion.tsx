"use client";

import { useId, useState } from "react";

import type { Faq } from "@/data/types";
import { publicCopy } from "@/lib/public-copy";

export function FaqAccordion({ items }: { items: Faq[] }) {
  const baseId = useId();
  const [open, setOpen] = useState<Record<number, boolean>>({ 0: true });
  const visible = items
    .map((item) => ({ q: publicCopy(item.q), a: publicCopy(item.a) }))
    .filter((item) => item.q && item.a);

  return (
    <div className="divide-y divide-grey-200 border-y border-grey-200">
      {visible.map((item, index) => {
        const panelId = `${baseId}-panel-${index}`;
        const buttonId = `${baseId}-button-${index}`;
        const isOpen = Boolean(open[index]);
        return (
          <div key={item.q}>
            <h3>
              <button
                id={buttonId}
                type="button"
                className="flex w-full items-baseline justify-between gap-6 py-6 text-left font-display text-xl font-medium text-navy md:text-2xl"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() =>
                  setOpen((current) => ({ ...current, [index]: !current[index] }))
                }
              >
                <span>{item.q}</span>
                <span aria-hidden="true" className="font-sans text-lg font-light text-gold">
                  {isOpen ? "–" : "+"}
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="pb-6 font-sans text-base text-grey-700"
            >
              <p className="max-w-measure leading-relaxed">{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
