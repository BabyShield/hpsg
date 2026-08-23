import type { Photo } from "@/data/photos";

function Photo({ photo, imageClassName = "" }: { photo: Photo; imageClassName?: string }) {
  // Native img: next/image fill reports height 0 inside overlay tiles.
  // eslint-disable-next-line @next/next/no-img-element
  return (
    <img
      src={photo.src}
      alt={photo.alt}
      className={`absolute inset-0 h-full w-full object-cover ${imageClassName}`.trim()}
    />
  );
}

export function ContentImage({
  photo,
  className = "",
  imageClassName = "",
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
      <Photo photo={photo} imageClassName={imageClassName} />
    </div>
  );
}
