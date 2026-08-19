import Image from "next/image";

export function ProjectImage({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={1600}
      height={1066}
      sizes="(min-width: 1024px) 720px, 100vw"
      priority={priority}
    />
  );
}
