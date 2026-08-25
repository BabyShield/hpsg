import { publicCopy } from "@/lib/public-copy";

import { Container } from "./Container";
import { NumberedList } from "./NumberedList";

export function LocalFacts({
  areaName,
  facts,
  heading,
  lede,
}: {
  areaName: string;
  facts: string[];
  heading?: string;
  lede?: string;
}) {
  const visible = facts.map((fact) => publicCopy(fact)).filter(Boolean);
  if (visible.length === 0) return null;

  return (
    <section className="border-y border-grey-200 py-24 sm:py-32">
      <Container>
        <p className="rule mb-8" aria-hidden="true" />
        <h2 className="font-display text-4xl font-normal sm:text-5xl">
          {heading ?? `Ten facts about ${areaName}`}
        </h2>
        <p className="lede mt-6 max-w-xl text-xl text-grey-600 md:text-2xl">
          {lede ?? "Checkable local facts that shape access, conservation and the building."}
        </p>
        <NumberedList variant="facts" items={visible.map((fact) => ({ text: fact }))} />
      </Container>
    </section>
  );
}
