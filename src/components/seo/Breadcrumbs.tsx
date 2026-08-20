import Link from "next/link";

import { breadcrumbSchema } from "@/lib/schema";

import { JsonLd } from "./JsonLd";

export type Crumb = { name: string; href: string };

export function Breadcrumbs({
  items,
  tone = "dark",
}: {
  items: Crumb[];
  tone?: "dark" | "light";
}) {
  const light = tone === "light";
  return (
    <nav
      aria-label="Breadcrumb"
      className={`mb-6 text-xs ${light ? "text-bone/65" : "text-grey-600"}`}
    >
      <JsonLd data={breadcrumbSchema(items)} />
      <ol className="flex flex-wrap gap-2">
        {items.map((item, index) => {
          const last = index === items.length - 1;
          return (
            <li key={`${item.href}-${item.name}`} className="flex items-center gap-2">
              {last ? (
                <span className={light ? "text-bone" : "text-navy"}>{item.name}</span>
              ) : (
                <Link href={item.href} className="quiet-link">
                  {item.name}
                </Link>
              )}
              {last ? null : <span aria-hidden="true">›</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
