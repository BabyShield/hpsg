import { services } from "@/data/services";
import { otherServiceGroups } from "@/data/other-services";

export const enquiryServices = [
  ...services.map(({ slug, name }) => ({ slug, name })),
  ...otherServiceGroups.flatMap((group) => group.services.map(({ slug, name }) => ({ slug, name }))),
];

export function selectedService(value: string | null) {
  return enquiryServices.find((service) => service.slug === value || service.name === value);
}
