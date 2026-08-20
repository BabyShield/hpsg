import { site } from "@/data/site";

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 lg:hidden">
      <div className="h-px bg-gold" aria-hidden="true" />
      <a
        href={`tel:${site.phoneTel}`}
        className="flex h-14 items-center justify-center bg-navy text-sm font-medium uppercase tracking-[0.14em] text-bone"
      >
        Call {site.phoneDisplay}
      </a>
    </div>
  );
}
