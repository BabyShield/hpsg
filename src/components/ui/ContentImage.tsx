import Image from "next/image";

import type { Photo } from "@/data/photos";

export function ContentImage({
  photo,
  priority = false,
  className = "",
  imageClassName = "",
  sizes = "100vw",
  fillParent = false,
}: {
  photo: Photo;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
  sizes?: string;
  fillParent?: boolean;
}) {
  return (
    <div
      className={`${fillParent ? "absolute inset-0" : "relative"} overflow-hidden bg-grey-100 ${className}`.trim()}
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes={sizes}
        priority={priority}
        className={`object-cover ${imageClassName}`.trim()}
      />
    </div>
  );
}
