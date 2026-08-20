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
    <section className="relative min-h-[28rem] overflow-hidden text-bone md:min-h-[38rem]">
      {photo ? <HeroPhoto photo={photo} /> : <div className="absolute inset-0 bg-navy" />}
      <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-navy/15" />
      <Container className="relative flex min-h-[28rem] flex-col justify-end pb-12 pt-10 md:min-h-[38rem] md:pb-20">
        {crumbs ? <Breadcrumbs items={crumbs} tone="light" /> : null}
        {kicker ? (
          <p className="mb-4 font-sans text-[0.68rem] font-medium uppercase tracking-[0.2em] text-bone/65">
            {kicker}
          </p>
        ) : null}
        <h1 className="max-w-4xl font-display text-4xl font-medium text-bone sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {lede ? <div className="mt-5 max-w-xl text-base leading-relaxed text-bone/85">{lede}</div> : null}
      </Container>
    </section>
  );
}
