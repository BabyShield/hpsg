import Link from "next/link";

import { site } from "@/data/site";

import { Container } from "./Container";

export function CtaBand({
  title = "Request a quote",
  text = "Tell us about the property and the rooms in scope. We visit before we write a proposal.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-navy text-bone">
      <Container className="flex flex-col items-start justify-between gap-8 border-t border-gold/40 py-16 sm:flex-row sm:items-center sm:py-20">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            Hampstead office
          </p>
          <h2 className="mt-3 text-3xl text-bone sm:text-4xl">{title}</h2>
          <p className="mt-4 text-base text-bone/80">{text}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="/contact/" className="btn btn-gold">
            Request a quote
          </Link>
          <a href={`tel:${site.phoneTel}`} className="btn btn-ghost text-bone">
            {site.phoneDisplay}
          </a>
        </div>
      </Container>
    </section>
  );
}
