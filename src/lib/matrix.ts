import { areas, getAreaBySlug } from "@/data/areas";
import { getServiceBySlug, services } from "@/data/services";
import type { Area, Combo, Service, ServiceSlug } from "@/data/types";
import { SERVICE_SLUGS } from "@/data/types";

/**
 * Area slugs that already have a live group painting microsite.
 * Painting combos for these areas are omitted from the matrix; area hubs
 * will link out instead. [TBC: list to be supplied]
 */
export const PAINTING_MICROSITE_AREAS: readonly string[] = [];

export function isServiceSlug(value: string): value is ServiceSlug {
  return (SERVICE_SLUGS as readonly string[]).includes(value);
}

export function getService(slug: string): Service | undefined {
  return getServiceBySlug(slug);
}

export function getArea(slug: string): Area | undefined {
  return getAreaBySlug(slug);
}

export function tier1Areas(): Area[] {
  return areas.filter((area) => area.tier === 1);
}

export function tier2Areas(): Area[] {
  return areas.filter((area) => area.tier === 2);
}

export function hasPaintingMicrosite(areaSlug: string): boolean {
  return PAINTING_MICROSITE_AREAS.includes(areaSlug);
}

export function isCombo(serviceSlug: string, areaSlug: string): boolean {
  if (!isServiceSlug(serviceSlug)) return false;
  const area = getArea(areaSlug);
  if (!area || area.tier !== 1) return false;
  if (serviceSlug === "painting-decorating" && hasPaintingMicrosite(areaSlug)) {
    return false;
  }
  return true;
}

export function getCombos(): Combo[] {
  const combos: Combo[] = [];
  for (const area of tier1Areas()) {
    for (const service of services) {
      if (service.slug === "painting-decorating" && hasPaintingMicrosite(area.slug)) {
        continue;
      }
      combos.push({ service, area });
    }
  }
  return combos;
}

export function getCombo(serviceSlug: string, areaSlug: string): Combo | undefined {
  if (!isCombo(serviceSlug, areaSlug)) return undefined;
  const service = getService(serviceSlug);
  const area = getArea(areaSlug);
  if (!service || !area) return undefined;
  return { service, area };
}

export function getNearbyAreas(area: Area): Area[] {
  return area.nearbyAreaSlugs
    .map((slug) => getArea(slug))
    .filter((nearby): nearby is Area => nearby !== undefined);
}

export function getCombosForService(serviceSlug: ServiceSlug): Combo[] {
  return getCombos().filter((combo) => combo.service.slug === serviceSlug);
}

export function getCombosForArea(areaSlug: string): Combo[] {
  return getCombos().filter((combo) => combo.area.slug === areaSlug);
}

export function assertAreaGraph(): void {
  const slugs = new Set(areas.map((area) => area.slug));
  if (areas.length !== 25) {
    throw new Error(`Expected 25 areas, found ${areas.length}`);
  }
  if (tier1Areas().length !== 15) {
    throw new Error(`Expected 15 Tier 1 areas, found ${tier1Areas().length}`);
  }
  if (services.length !== 4) {
    throw new Error(`Expected 4 services, found ${services.length}`);
  }
  for (const area of areas) {
    if (area.nearbyAreaSlugs.length < 3 || area.nearbyAreaSlugs.length > 4) {
      throw new Error(
        `${area.slug} has ${area.nearbyAreaSlugs.length} nearbyAreaSlugs; expected 3–4`,
      );
    }
    for (const slug of area.nearbyAreaSlugs) {
      if (!slugs.has(slug)) {
        throw new Error(`${area.slug} nearbyAreaSlugs includes unknown slug "${slug}"`);
      }
    }
  }
}
