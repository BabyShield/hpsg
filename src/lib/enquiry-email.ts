/** Preparing a draft is not sending an enquiry. All values remain in the mailto body. */
export function buildEnquiryEmail(fields: Record<string, unknown>): string {
  const labels = { name: "Name", email: "Email", phone: "Phone", area: "Area", service: "Service", message: "Message" };
  const body = Object.entries(labels).map(([key, label]) => {
    const value = typeof fields[key] === "string" ? fields[key] : "";
    return `${label}: ${value}`;
  }).join("\n\n");
  return `mailto:office@hpsg.co.uk?subject=${encodeURIComponent("HPSG website enquiry")}&body=${encodeURIComponent(body)}`;
}
