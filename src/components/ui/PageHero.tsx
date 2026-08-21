import Link from "next/link";
import type { ReactNode } from "react";

import { Breadcrumbs, type Crumb } from "@/components/seo/Breadcrumbs";
import type { Photo } from "@/data/photos";
import { site } from "@/data/site";

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
  showCta = true,
}: {
  photo?: Photo;
  crumbs?: Crumb[];
  kicker?: string;
  title: string;
  lede?: ReactNode;
  showCta?: boolean;
}) {
  return (
    <section className="relative min-h-[36rem] overflow-hidden text-bone md:min-h-[50rem]">
      {photo ? <HeroPhoto photo={photo} /> : <div className="absolute inset-0 bg-navy" />}
      <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/22 to-navy/5" />
      <Container className="relative flex min-h-[36rem] flex-col justify-end pb-16 pt-14 md:min-h-[50rem] md:pb-28">
        {crumbs ? <Breadcrumbs items={crumbs} tone="light" /> : null}
        {kicker ? (
          <p className="kicker hero-type mb-6 text-gold">{kicker}</p>
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
        {showCta ? (
          <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <Link href="/contact/" className="btn btn-gold">
              Request a quote
            </Link>
            <a href={`tel:${site.phoneTel}`} className="btn-line text-bone">
              {site.phoneDisplay}
            </a>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
