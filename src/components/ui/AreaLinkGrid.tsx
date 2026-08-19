import Link from "next/link";

import type { Area } from "@/data/types";

export function AreaLinkGrid({
  areas,
  heading,
}: {
  areas: Area[];
  heading?: string;
}) {
  return (
    <div>
      {heading ? (
        <h3 className="mb-4 text-sm font-medium uppercase tracking-[0.14em] text-grey-600">
          {heading}
        </h3>
      ) : null}
      <ul className="grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
        {areas.map((area) => (
          <li key={area.slug}>
            <Link
              href={`/areas/${area.slug}/`}
              className="text-base text-navy hover:text-gold"
            >
              {area.name} {area.postcode}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
