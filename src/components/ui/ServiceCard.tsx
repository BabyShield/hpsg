import Link from "next/link";

import { servicePhotos } from "@/data/photos";
import type { Service } from "@/data/types";

import { ContentImage } from "./ContentImage";

export function ServiceCard({
  service,
  href,
  className = "",
  sizes = "(min-width: 768px) 50vw, 100vw",
}: {
  service: Service;
  href?: string;
  className?: string;
  sizes?: string;
}) {
  const photo = servicePhotos[service.slug];
  const to = href ?? `/${service.slug}/`;

  return (
    <article className={`group relative min-h-[18rem] overflow-hidden bg-navy ${className}`.trim()}>
      <Link href={to} className="absolute inset-0 block">
        <ContentImage photo={photo} fillParent className="img-zoom" sizes={sizes} />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-navy/5 to-transparent transition-opacity duration-700 group-hover:from-navy/70" />
        <div className="absolute inset-x-0 bottom-0 p-6 text-bone md:p-8">
          <h3 className="font-display text-2xl font-normal text-bone md:text-3xl">{service.name}</h3>
        </div>
      </Link>
    </article>
  );
}
