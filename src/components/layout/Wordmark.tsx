import Link from "next/link";

export function Wordmark({
  compact = false,
  inverted = false,
}: {
  compact?: boolean;
  inverted?: boolean;
}) {
  return (
    <Link href="/" className={`block ${inverted ? "text-bone" : "text-navy"}`}>
      <span
        className={`block font-display font-normal tracking-tight ${
          compact ? "text-[1.7rem] leading-none" : "text-[2.85rem] leading-none"
        }`}
      >
        HPSG
      </span>
      <span
        className={`mt-1.5 block font-sans text-[0.62rem] font-medium uppercase tracking-[0.22em] ${
          inverted ? "text-gold" : "text-grey-600"
        }`}
      >
        {compact ? "Hampstead" : "Hampstead · NW3"}
      </span>
    </Link>
  );
}
