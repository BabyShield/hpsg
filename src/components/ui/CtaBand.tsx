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
      <Container className="flex flex-col items-start gap-6 py-16 sm:flex-row sm:items-center sm:justify-between sm:py-20">
        <div className="max-w-measure">
          <p className="mb-3 h-px w-12 bg-gold" aria-hidden="true" />
          <h2 className="text-3xl text-bone">{title}</h2>
          <p className="mt-3 text-base text-bone/85">{text}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact/"
            className="inline-flex items-center justify-center bg-gold px-6 py-3 text-sm font-medium tracking-wide text-navy"
          >
            Request a quote
          </Link>
          <a
            href={`tel:${site.phoneTel}`}
            className="inline-flex items-center justify-center border border-bone/40 px-6 py-3 text-sm font-medium tracking-wide text-bone"
          >
            {site.phoneDisplay}
          </a>
        </div>
      </Container>
    </section>
  );
}
