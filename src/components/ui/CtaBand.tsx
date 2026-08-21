import Link from "next/link";

import { homeHero, type Photo } from "@/data/photos";
import { site } from "@/data/site";

import { Container } from "./Container";

export function CtaBand({
  title = "Request a quote",
  text = "Tell us about the property and the rooms in scope. We visit before we write a proposal.",
  photo = homeHero,
}: {
  title?: string;
  text?: string;
  photo?: Photo;
}) {
  return (
    <section className="relative overflow-hidden text-bone">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={photo.src}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-[center_70%]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/84 via-navy/58 to-navy/38" />
      <Container className="relative flex flex-col items-start justify-between gap-12 py-32 sm:py-40 lg:flex-row lg:items-end">
        <div className="max-w-2xl">
          <p className="rule mb-8" aria-hidden="true" />
          <h2 className="font-display text-4xl font-light text-bone sm:text-6xl">{title}</h2>
          <p className="lede mt-6 text-xl text-bone/85 md:text-2xl">{text}</p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
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
