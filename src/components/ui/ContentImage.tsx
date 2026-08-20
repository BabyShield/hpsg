import type { Photo } from "@/data/photos";

function Photo({ photo }: { photo: Photo }) {
  // Native img: next/image fill reports height 0 inside overlay tiles.
  // eslint-disable-next-line @next/next/no-img-element
  return (
    <img
      src={photo.src}
      alt={photo.alt}
      className="absolute inset-0 h-full w-full object-cover"
    />
  );
}

export function ContentImage({
  photo,
  className = "",
  fillParent = false,
}: {
  photo: Photo;
  priority?: boolean;
  className?: string;
  sizes?: string;
  fillParent?: boolean;
}) {
  return (
    <div
      className={`${fillParent ? "absolute inset-0" : "relative"} overflow-hidden bg-grey-100 ${className}`.trim()}
    >
      <Photo photo={photo} />
    </div>
  );
}
