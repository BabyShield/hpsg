import Link from "next/link";

export function Wordmark({
  compact = false,
  inverted = false,
}: {
  compact?: boolean;
  inverted?: boolean;
}) {
  const size = compact ? "text-[0.8rem] leading-4" : "text-[0.95rem] leading-[1.15]";
  return (
    <Link href="/" className={`block ${inverted ? "text-bone" : "text-navy"}`}>
      <span className={`block font-semibold tracking-tight ${size}`}>Hampstead</span>
      <span className={`block font-semibold tracking-tight ${size}`}>Property Services</span>
      <span className={`block font-semibold tracking-tight ${size}`}>Group</span>
      <span
        className={`mt-2 block h-0.5 w-10 ${inverted ? "bg-gold" : "bg-gold"}`}
        aria-hidden="true"
      />
    </Link>
  );
}
