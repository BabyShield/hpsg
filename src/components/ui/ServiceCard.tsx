import Link from "next/link";

import { servicePhotos } from "@/data/photos";
import type { Service } from "@/data/types";

import { ContentImage } from "./ContentImage";

export function ServiceCard({
  service,
  href,
}: {
  service: Service;
  href?: string;
}) {
  const photo = servicePhotos[service.slug];
  const to = href ?? `/${service.slug}/`;

  return (
    <article className="group h-full overflow-hidden bg-navy">
      <Link href={to} className="relative block">
        <ContentImage
          photo={photo}
          className="img-zoom aspect-[4/3] w-full"
          sizes="(min-width: 768px) 50vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-6 text-bone">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
            {service.navLabel}
          </p>
          <h3 className="mt-2 text-2xl text-bone">{service.name}</h3>
          <p className="mt-2 line-clamp-2 text-sm text-bone/80">{service.heroLine}</p>
        </div>
      </Link>
    </article>
  );
}
