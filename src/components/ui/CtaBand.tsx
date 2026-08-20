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
      <Container className="flex flex-col items-start justify-between gap-10 py-20 sm:py-28 lg:flex-row lg:items-end">
        <div className="max-w-xl">
          <p className="mb-6 h-px w-12 bg-gold" aria-hidden="true" />
          <h2 className="font-display text-4xl font-medium text-bone sm:text-5xl">{title}</h2>
          <p className="mt-5 text-base leading-relaxed text-bone/75">{text}</p>
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
