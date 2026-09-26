// Public endpoint only. Provider keys and database credentials never enter the browser bundle.
export const enquiryApi = (process.env.NEXT_PUBLIC_HPSG_ENQUIRIES_URL || "").replace(/\/$/, "");
export const measurementPreferenceKey = "hpsg-contact-statistics";

export function contactMeasurementAllowed() {
  if (navigator.doNotTrack === "1" || (navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl) return false;
  try { return localStorage.getItem(measurementPreferenceKey) !== "off"; } catch { return false; }
}

export function recordContactClick(event: "call_click" | "whatsapp_click", service = "") {
  if (!enquiryApi || !contactMeasurementAllowed()) return;
  void fetch(`${enquiryApi}/events`, {
    method: "POST", headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ event, service }), keepalive: true, credentials: "omit",
  }).catch(() => {});
}
