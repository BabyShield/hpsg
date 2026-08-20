import Link from "next/link";

import type { Photo } from "@/data/photos";

import { ContentImage } from "./ContentImage";

export function PhotoTile({
  photo,
  href,
  title,
  caption,
  className = "",
  sizes = "100vw",
}: {
  photo: Photo;
  href: string;
  title: string;
  caption?: string;
  className?: string;
  sizes?: string;
}) {
  return (
    <Link href={href} className={`group relative block overflow-hidden bg-navy ${className}`.trim()}>
      <ContentImage photo={photo} fillParent className="img-zoom" sizes={sizes} />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/55 via-transparent to-transparent transition-colors duration-700 group-hover:from-navy/70" />
      <div className="absolute inset-x-0 bottom-0 p-4 md:p-6">
        <p className="font-display text-xl font-normal text-bone md:text-2xl">{title}</p>
        {caption ? <p className="caption mt-1 text-bone/55">{caption}</p> : null}
      </div>
    </Link>
  );
}
