import type { ReactNode } from "react";

import { Breadcrumbs, type Crumb } from "@/components/seo/Breadcrumbs";
import type { Photo } from "@/data/photos";

import { Container } from "./Container";

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
    <section className="relative min-h-[28rem] overflow-hidden text-bone md:min-h-[36rem]">
      {photo ? (
        // eslint-disable-next-line @next/next/no-img-element -- full-bleed hero crop
        <img
          src={photo.src}
          alt={photo.alt}
          className="absolute inset-0 h-full w-full object-cover object-[center_65%]"
        />
      ) : (
        <div className="absolute inset-0 bg-navy" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/45 to-navy/15" />
      <Container className="relative flex min-h-[28rem] flex-col justify-end pb-12 pt-10 md:min-h-[36rem] md:pb-16">
        {crumbs ? <Breadcrumbs items={crumbs} tone="light" /> : null}
        {kicker ? (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            {kicker}
          </p>
        ) : null}
        <h1 className="max-w-4xl text-4xl text-bone sm:text-5xl md:text-6xl">{title}</h1>
        {lede ? <div className="mt-5 max-w-xl text-base text-bone/90">{lede}</div> : null}
      </Container>
    </section>
  );
}
