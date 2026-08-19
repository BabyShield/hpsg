import Link from "next/link";

export function Wordmark({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="block text-navy">
      <span className={compact ? "block text-sm leading-5" : "block text-base leading-5"}>
        Hampstead
      </span>
      <span className={compact ? "block text-sm leading-5" : "block text-base leading-5"}>
        Property Services
      </span>
      <span className={compact ? "block text-sm leading-5" : "block text-base leading-5"}>
        Group
      </span>
      <span className="mt-2 block h-px w-10 bg-gold" aria-hidden="true" />
    </Link>
  );
}
