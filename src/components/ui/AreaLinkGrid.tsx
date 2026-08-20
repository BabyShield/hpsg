import Link from "next/link";

import { areaPhotos } from "@/data/photos";
import type { Area } from "@/data/types";

import { PhotoTile } from "./PhotoTile";

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
          <h3 className="mb-5 font-sans text-[0.68rem] font-medium uppercase tracking-[0.2em] text-grey-500">
            {heading}
          </h3>
        ) : null}
        <ul className="grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((area) => (
            <li key={area.slug}>
              <Link href={`/areas/${area.slug}/`} className="text-base text-navy hover:text-gold">
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
        <h3 className="mb-5 font-sans text-[0.68rem] font-medium uppercase tracking-[0.2em] text-grey-500">
          {heading}
        </h3>
      ) : null}
      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {areas.map((area) => {
          const photo = areaPhotos[area.slug];
          return (
            <li key={area.slug} className="min-h-[16rem]">
              {photo ? (
                <PhotoTile
                  photo={photo}
                  href={`/areas/${area.slug}/`}
                  title={area.name}
                  caption={area.postcode}
                  className="h-full min-h-[16rem]"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              ) : (
                <Link href={`/areas/${area.slug}/`} className="text-base text-navy hover:text-gold">
                  {area.name} {area.postcode}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
