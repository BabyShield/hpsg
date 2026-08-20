import Image from "next/image";

import type { Photo } from "@/data/photos";

export function ContentImage({
  photo,
  priority = false,
  className = "",
  sizes = "100vw",
}: {
  photo: Photo;
  priority?: boolean;
  className?: string;
  sizes?: string;
}) {
  return (
    <div className={`relative overflow-hidden bg-grey-100 ${className}`.trim()}>
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
    </div>
  );
}
