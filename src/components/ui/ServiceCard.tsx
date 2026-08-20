import Link from "next/link";

import { servicePhotos } from "@/data/photos";
import type { Service } from "@/data/types";

import { ContentImage } from "./ContentImage";

export function ServiceCard({ service }: { service: Service }) {
  const photo = servicePhotos[service.slug];

  return (
    <article className="flex h-full flex-col border border-grey-200 bg-bone">
      <Link href={`/${service.slug}/`} className="block">
        <ContentImage
          photo={photo}
          className="aspect-[16/9] w-full"
          sizes="(min-width: 768px) 50vw, 100vw"
        />
      </Link>
      <div className="flex flex-1 flex-col p-8">
        <p className="mb-4 h-px w-10 bg-gold" aria-hidden="true" />
        <h3 className="text-2xl">
          <Link href={`/${service.slug}/`} className="hover:text-gold">
            {service.name}
          </Link>
        </h3>
        <p className="mt-3 flex-1 text-base text-grey-700">{service.summary}</p>
        <p className="mt-6 text-sm font-medium tracking-wide text-navy">
          <Link href={`/${service.slug}/`} className="hover:text-gold">
            {service.navLabel}
          </Link>
        </p>
      </div>
    </article>
  );
}
