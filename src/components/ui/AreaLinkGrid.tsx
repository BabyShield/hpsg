import Link from "next/link";

import { areaPhotos } from "@/data/photos";
import type { Area } from "@/data/types";

import { ContentImage } from "./ContentImage";

export function AreaLinkGrid({
  areas,
  heading,
  withPhotos = false,
}: {
  areas: Area[];
  heading?: string;
  withPhotos?: boolean;
}) {
  if (!withPhotos) {
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

  return (
    <div>
      {heading ? (
        <h3 className="mb-4 text-sm font-medium uppercase tracking-[0.14em] text-grey-600">
          {heading}
        </h3>
      ) : null}
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {areas.map((area) => {
          const photo = areaPhotos[area.slug];
          return (
            <li key={area.slug}>
              <Link href={`/areas/${area.slug}/`} className="block hover:opacity-95">
                {photo ? (
                  <ContentImage
                    photo={photo}
                    className="aspect-[16/9] w-full"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                ) : null}
                <p className="mt-3 text-base text-navy">
                  {area.name} {area.postcode}
                </p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
