import { site } from "@/data/site";

export function enquiryHref(service: string, area?: string): string {
  const query = new URLSearchParams({ service });
  if (area) query.set("area", area);
  return `/contact/?${query.toString()}#enquiry`;
}

export function whatsappHref(service?: string, area?: string): string {
  if (!service) return site.whatsappUrl;
  const text = `Hello HPSG, I would like to enquire about ${service}${area ? ` in ${area}` : ""}.`;
  return `${site.whatsappUrl}?${new URLSearchParams({ text })}`;
}
