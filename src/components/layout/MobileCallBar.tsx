import { site } from "@/data/site";

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 lg:hidden">
      <a
        href={`tel:${site.phoneTel}`}
        className="flex h-14 items-center justify-center bg-gold text-sm font-medium text-navy"
      >
        Call {site.phoneDisplay}
      </a>
    </div>
  );
}
