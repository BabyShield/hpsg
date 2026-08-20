import type { ReactNode } from "react";

import { Breadcrumbs, type Crumb } from "@/components/seo/Breadcrumbs";
import type { Photo } from "@/data/photos";

import { Container } from "./Container";

function HeroPhoto({ photo }: { photo: Photo }) {
  // Native img: next/image fill crops unreliably on full-bleed heroes.
  // eslint-disable-next-line @next/next/no-img-element
  return (
    <img
      src={photo.src}
      alt={photo.alt}
      className="absolute inset-0 h-full w-full object-cover object-[center_65%]"
    />
  );
}

export function PageHero({
  photo,
  crumbs,
  kicker,
  title,
  lede,
}: {
  photo?: Photo;
  crumbs?: Crumb[];
  kicker?: string;
  title: string;
  lede?: ReactNode;
}) {
  return (
    <section className="relative min-h-[32rem] overflow-hidden text-bone md:min-h-[44rem]">
      {photo ? <HeroPhoto photo={photo} /> : <div className="absolute inset-0 bg-navy" />}
      <div className="absolute inset-0 bg-gradient-to-t from-navy/75 via-navy/28 to-navy/8" />
      <Container className="relative flex min-h-[32rem] flex-col justify-end pb-16 pt-12 md:min-h-[44rem] md:pb-28">
        {crumbs ? <Breadcrumbs items={crumbs} tone="light" /> : null}
        {kicker ? (
          <p className="caption hero-type mb-5 text-bone">{kicker}</p>
        ) : (
          <p className="rule mb-6" aria-hidden="true" />
        )}
        <h1 className="hero-type max-w-4xl font-display text-4xl font-light text-bone sm:text-6xl md:text-7xl">
          {title}
        </h1>
        {lede ? (
          <div className="lede hero-type mt-6 max-w-xl text-xl leading-relaxed text-bone/90 md:text-2xl">
            {lede}
          </div>
        ) : null}
      </Container>
    </section>
  );
}
