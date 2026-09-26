"use client";

import { useState, useSyncExternalStore } from "react";
import { contactMeasurementAllowed, measurementPreferenceKey } from "@/lib/enquiry-api";

const subscribe = (changed: () => void) => {
  window.addEventListener("storage", changed);
  window.addEventListener("hpsg-statistics-choice", changed);
  return () => { window.removeEventListener("storage", changed); window.removeEventListener("hpsg-statistics-choice", changed); };
};
const serverPreference = () => false;

export function MeasurementPreference() {
  const allowed = useSyncExternalStore(subscribe, contactMeasurementAllowed, serverPreference);
  const [message, setMessage] = useState("");
  return <section id="statistics" className="scroll-mt-28 max-w-3xl border-t border-grey-200 pb-16 pt-10">
    <h2 className="font-display text-3xl">Contact click preferences</h2>
    <p className="mt-5 text-grey-700">When measurement is enabled, we count phone and WhatsApp link clicks to improve this website. These totals contain no enquiry text, contact details or browsing history. A click is not a completed call or message.</p>
    <label className="mt-6 flex items-start gap-3 text-sm"><input type="checkbox" checked={allowed} onChange={(event) => {
      try {
        localStorage.setItem(measurementPreferenceKey, event.target.checked ? "on" : "off");
        window.dispatchEvent(new Event("hpsg-statistics-choice"));
        setMessage("Preference saved for this browser. Browser privacy signals can also turn counting off.");
      } catch { setMessage("This browser could not save the preference. Click counting stays off when browser storage is unavailable."); }
    }} className="mt-1 size-4" />Allow aggregate contact click counts</label>
    <p className="mt-4 text-sm text-grey-600">We store only this choice in your browser when you change it. Turning counting off does not affect enquiries. We also respect Do Not Track and Global Privacy Control.</p>
    {message ? <p className="mt-4 text-sm" role="status">{message}</p> : null}
  </section>;
}
