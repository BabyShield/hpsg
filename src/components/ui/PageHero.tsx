import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { Breadcrumbs, type Crumb } from "@/components/seo/Breadcrumbs";
import type { Photo } from "@/data/photos";
import { site } from "@/data/site";

import { Container } from "./Container";
import { EntityRail } from "./EntityRail";

function HeroPhoto({ photo }: { photo: Photo }) {
  // The LCP element on photo-led pages: preload + fetchpriority via `priority`.
  return (
    <Image
      src={photo.src}
      alt={photo.alt}
      fill
      priority
      sizes="100vw"
      className="object-cover object-[center_65%]"
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
    <>
      <section className="relative min-h-[calc(100svh-3.5rem)] overflow-hidden text-bone md:min-h-[38rem]">
        {photo ? <HeroPhoto photo={photo} /> : <div className="absolute inset-0 bg-navy" />}
        <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/48 to-navy/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/60 via-navy/15 to-transparent" />
        <Container className="relative flex min-h-[calc(100svh-3.5rem)] flex-col justify-end pb-32 pt-10 md:min-h-[38rem] md:pb-16 md:pt-14">
          {crumbs ? <Breadcrumbs items={crumbs} tone="light" /> : null}
          {kicker ? (
            <p className="kicker hero-type mb-5 text-gold">{kicker}</p>
          ) : (
            <p className="rule mb-5" aria-hidden="true" />
          )}
          <h1 className="hero-type max-w-4xl font-display text-4xl font-light leading-[1.05] text-bone sm:text-5xl md:text-6xl">
            {title}
          </h1>
          {lede ? (
            <div className="lede hero-type mt-5 max-w-xl text-xl leading-relaxed text-bone/90 md:text-2xl">
              {lede}
            </div>
          ) : null}
          {showCta ? (
            <div className="mt-8 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
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
      <EntityRail />
    </>
  );
}
