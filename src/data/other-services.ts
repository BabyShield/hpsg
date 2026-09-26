import catalogue from "./other-services.json";

export const otherServiceGroups = catalogue.groups;
export const otherServicesRevised = catalogue.revised;
export const otherServiceCount = otherServiceGroups.reduce((count, group) => count + group.services.length, 0);

export function getOtherServiceGroup(slug: string) {
  return otherServiceGroups.find((group) => group.slug === slug);
}
