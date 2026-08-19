import { site } from "@/data/site";

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-grey-200 bg-navy lg:hidden">
      <a
        href={`tel:${site.phoneTel}`}
        className="flex h-16 items-center justify-center text-sm font-medium tracking-wide text-bone"
      >
        Call {site.phoneDisplay}
      </a>
    </div>
  );
}
