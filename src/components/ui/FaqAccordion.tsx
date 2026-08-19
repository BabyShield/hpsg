"use client";

import { useId, useState } from "react";

import type { Faq } from "@/data/types";

export function FaqAccordion({ items }: { items: Faq[] }) {
  const baseId = useId();
  const [open, setOpen] = useState<Record<number, boolean>>({ 0: true });

  return (
    <div className="divide-y divide-grey-200 border-y border-grey-200">
      {items.map((item, index) => {
        const panelId = `${baseId}-panel-${index}`;
        const buttonId = `${baseId}-button-${index}`;
        const isOpen = Boolean(open[index]);
        return (
          <div key={item.q}>
            <h3>
              <button
                id={buttonId}
                type="button"
                className="flex w-full items-baseline justify-between gap-6 py-5 text-left text-lg text-navy"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() =>
                  setOpen((current) => ({ ...current, [index]: !current[index] }))
                }
              >
                <span>{item.q}</span>
                <span aria-hidden="true" className="text-gold">
                  {isOpen ? "–" : "+"}
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="pb-5 text-base text-grey-700"
            >
              <p>{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
