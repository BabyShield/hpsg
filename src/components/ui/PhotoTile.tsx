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
      <div className="absolute inset-0 bg-gradient-to-t from-navy/75 via-navy/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-4 md:p-6">
        <p className="font-display text-xl font-medium text-bone md:text-2xl">{title}</p>
        {caption ? <p className="mt-1 text-sm text-bone/65">{caption}</p> : null}
      </div>
    </Link>
  );
}
