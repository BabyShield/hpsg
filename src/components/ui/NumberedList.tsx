import type { ReactNode } from "react";

export type NumberedItem = {
  title?: string;
  text: ReactNode;
};

/**
 * The one gold-numbered list on the site. Variants exist so the three page
 * templates do not all render the same block:
 *   grid     - service hubs: a wide multi-column set of steps
 *   timeline - combo pages: a vertical run down a hairline
 *   facts    - area hubs and LocalFacts: two columns of numbered facts
 */
export function NumberedList({
  items,
  variant = "grid",
  tone = "light",
  columns = 4,
  start = 1,
}: {
  items: NumberedItem[];
  variant?: "grid" | "timeline" | "facts";
  tone?: "light" | "dark";
  columns?: 2 | 3 | 4;
  start?: number;
}) {
  if (items.length === 0) return null;

  const numeral = tone === "dark" ? "text-gold" : "text-gold-deep";
  const heading = tone === "dark" ? "text-bone" : "text-navy";
  const body = tone === "dark" ? "text-bone/75" : "text-grey-700";
  const rule = tone === "dark" ? "border-bone/20" : "border-grey-200";

  if (variant === "timeline") {
    const numeralBg = tone === "dark" ? "bg-navy" : "bg-bone";
    return (
      <ol className={`mt-12 border-l ${rule} pl-10 sm:pl-14`}>
        {items.map((item, index) => (
          <li
            key={typeof item.title === "string" ? item.title : index}
            className="relative pb-12 last:pb-0"
          >
            {/* Sits on the rule with a matching background so the line reads
                as broken by the numeral rather than struck through it. */}
            <span
              className={`absolute -left-[1.6rem] top-0 py-1 font-display text-xl leading-none sm:-left-[1.85rem] ${numeralBg} ${numeral}`}
            >
              {String(index + start).padStart(2, "0")}
            </span>
            {item.title ? (
              <h3 className={`font-display text-2xl font-normal ${heading}`}>{item.title}</h3>
            ) : null}
            <div className={`mt-2 max-w-measure text-base leading-relaxed ${body}`}>
              {item.text}
            </div>
          </li>
        ))}
      </ol>
    );
  }

  if (variant === "facts") {
    return (
      <ol className="mt-16 grid gap-x-20 gap-y-12 md:grid-cols-2">
        {items.map((item, index) => (
          <li
            key={typeof item.title === "string" ? item.title : index}
            className="grid grid-cols-[auto_1fr] items-start gap-5"
          >
            <span className={`font-display text-3xl leading-none ${numeral}`}>
              {String(index + start).padStart(2, "0")}
            </span>
            <div className={`text-base leading-relaxed ${body}`}>{item.text}</div>
          </li>
        ))}
      </ol>
    );
  }

  const gridCols =
    columns === 2 ? "sm:grid-cols-2" : columns === 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2 lg:grid-cols-4";

  return (
    <ol className={`mt-16 grid gap-x-10 gap-y-12 ${gridCols}`}>
      {items.map((item, index) => (
        <li key={typeof item.title === "string" ? item.title : index}>
          <p className={`font-display text-3xl ${numeral}`}>
            {String(index + start).padStart(2, "0")}
          </p>
          {item.title ? (
            <h3 className={`mt-4 font-display text-2xl font-normal ${heading}`}>{item.title}</h3>
          ) : null}
          <div className={`mt-3 text-base leading-relaxed ${body}`}>{item.text}</div>
        </li>
      ))}
    </ol>
  );
}
