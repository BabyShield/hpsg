import Link from "next/link";

import { servicePhotos } from "@/data/photos";
import type { Service } from "@/data/types";

import { ContentImage } from "./ContentImage";

export function ServiceCard({
  service,
  href,
  caption,
  className = "",
  sizes = "(min-width: 768px) 50vw, 100vw",
}: {
  service: Service;
  href?: string;
  caption?: string;
  className?: string;
  sizes?: string;
}) {
  const photo = servicePhotos[service.slug];
  const to = href ?? `/${service.slug}/`;

  return (
    <article className={`group relative min-h-[18rem] overflow-hidden bg-navy ${className}`.trim()}>
      <Link href={to} className="absolute inset-0 block">
        <ContentImage photo={photo} fillParent className="img-zoom" sizes={sizes} />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/68 via-navy/10 to-transparent transition-opacity duration-700 group-hover:from-navy/80" />
        <div className="absolute inset-x-0 bottom-0 p-6 text-bone md:p-8">
          <p className="rule mb-4" aria-hidden="true" />
          <h3 className="font-display text-2xl font-normal text-bone md:text-4xl">{service.name}</h3>
          {caption ? (
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-bone/70">{caption}</p>
          ) : null}
        </div>
      </Link>
    </article>
  );
}
