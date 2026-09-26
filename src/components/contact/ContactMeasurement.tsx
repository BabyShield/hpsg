"use client";

import { useEffect } from "react";
import { recordContactClick } from "@/lib/enquiry-api";

export function ContactMeasurement() {
  useEffect(() => {
    function clicked(event: MouseEvent) {
      if (!(event.target instanceof Element)) return;
      const anchor = event.target.closest("a");
      if (!anchor) return;
      const target = new URL(anchor.href, window.location.origin);
      // Send only a fixed event label: never hrefs, query strings or form fields.
      if (target.protocol === "tel:") recordContactClick("call_click");
      else if (target.hostname === "wa.me" && target.pathname === "/447459345456") recordContactClick("whatsapp_click");
    }
    document.addEventListener("click", clicked);
    return () => document.removeEventListener("click", clicked);
  }, []);
  return null;
}
