import Link from "next/link";

import type { Photo } from "@/data/photos";
import { site } from "@/data/site";

import { Container } from "./Container";

export function StatementBand({
  photo,
  kicker = "The visit",
  title,
  text,
}: {
  photo: Photo;
  kicker?: string;
  title: string;
  text?: string;
}) {
  return (
    <section className="relative min-h-[32rem] overflow-hidden text-bone md:min-h-[42rem]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={photo.src}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-[center_60%]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/78 via-navy/42 to-navy/12" />
      <Container className="relative flex min-h-[32rem] flex-col justify-end py-20 md:min-h-[42rem] md:py-28">
        <p className="kicker text-gold">{kicker}</p>
        <h2 className="mt-6 max-w-3xl font-display text-4xl font-light text-bone sm:text-6xl">
          {title}
        </h2>
        {text ? (
          <p className="lede mt-6 max-w-xl text-xl text-bone/88 md:text-2xl">{text}</p>
        ) : null}
        <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
          <Link href="/contact/" className="btn btn-gold">
            Request a quote
          </Link>
          <a href={`tel:${site.phoneTel}`} className="btn-line text-bone">
            {site.phoneDisplay}
          </a>
        </div>
      </Container>
    </section>
  );
}
