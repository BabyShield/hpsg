"use client";

import Link from "next/link";
import { useEffect, useRef, useState, useSyncExternalStore, type FormEvent } from "react";
import { areas } from "@/data/areas";
import { services } from "@/data/services";
import { otherServiceGroups } from "@/data/other-services";
import { site } from "@/data/site";
import { buildEnquiryEmail } from "@/lib/enquiry-email";
import { selectedService } from "@/lib/enquiry-service-options";
import { whatsappHref } from "@/lib/enquiry-links";
import { enquiryApi } from "@/lib/enquiry-api";
import { EnquiryVerification } from "./EnquiryVerification";

const fieldClass = "mt-3 block w-full border-b border-grey-300 bg-transparent px-0 py-3 text-base text-navy outline-none focus:border-gold";
const subscribeToUrl = (changed: () => void) => {
  window.addEventListener("popstate", changed);
  return () => window.removeEventListener("popstate", changed);
};
const browserSearch = () => window.location.search;
const serverSearch = () => "";

export function EmailEnquiryForm() {
  const [prepared, setPrepared] = useState(false);
  const query = new URLSearchParams(useSyncExternalStore(subscribeToUrl, browserSearch, serverSearch));
  const [chosenService, setService] = useState<string | null>(null);
  const [chosenArea, setArea] = useState<string | null>(null);
  const service = chosenService ?? selectedService(query.get("service"))?.slug ?? "";
  const matchedArea = areas.find((item) => item.slug === query.get("area") || `${item.name} ${item.postcode}` === query.get("area"));
  const area = chosenArea ?? (matchedArea ? `${matchedArea.name} ${matchedArea.postcode}` : "");
  const [siteKey, setSiteKey] = useState("");
  const [token, setToken] = useState("");
  const [attempt, setAttempt] = useState(0);
  const [sending, setSending] = useState(false);
  const [receipt, setReceipt] = useState("");
  const [error, setError] = useState("");
  const submission = useRef({ data: "", id: "" });
  useEffect(() => {
    if (!enquiryApi) return;
    const controller = new AbortController();
    fetch(`${enquiryApi}/status`, { signal: controller.signal, credentials: "omit" })
      .then((response) => response.ok ? response.json() : null)
      .then((result) => { if (result?.enabled === true && typeof result.siteKey === "string") setSiteKey(result.siteKey); })
      .catch(() => {});
    return () => controller.abort();
  }, []);
  function emailDraft(form: HTMLFormElement) {
    const data = Object.fromEntries(new FormData(form).entries());
    data.service = selectedService(service)?.name || service;
    window.location.href = buildEnquiryEmail(data);
    setPrepared(true);
  }
  async function prepare(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!siteKey) { emailDraft(event.currentTarget); return; }
    if (sending || receipt) return;
    if (!token) { setError("Please complete the verification, or use email or WhatsApp below."); return; }
    const data = Object.fromEntries(new FormData(event.currentTarget).entries());
    delete data["cf-turnstile-response"];
    const signature = JSON.stringify(data);
    if (signature !== submission.current.data) submission.current = { data: signature, id: crypto.randomUUID() };
    setSending(true); setError(""); setPrepared(false);
    try {
      const response = await fetch(`${enquiryApi}/enquiries`, {
        method: "POST", credentials: "omit", signal: AbortSignal.timeout(15000),
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, submissionId: submission.current.id, turnstileToken: token }),
      });
      const result = await response.json();
      if (response.status === 202 && result.received === true && typeof result.reference === "string") setReceipt(result.reference);
      else setError(response.status === 429 ? "Too many attempts. Please wait or contact us by phone or WhatsApp." : "We could not confirm receipt. Your details are still here; please retry or use email or WhatsApp.");
    } catch { setError("We could not confirm receipt. Retry using the same details, or contact us directly."); }
    finally { setSending(false); setToken(""); setAttempt((value) => value + 1); }
  }
  return (
    <form id="enquiry" onSubmit={prepare} className="scroll-mt-28 space-y-8 border-t border-gold/50 pt-10 lg:col-span-7 lg:border-t-0 lg:border-l lg:border-gold/40 lg:pl-14 lg:pt-20">
      <p className="kicker">Main and Other services enquiries</p>
      <p className="text-sm leading-relaxed text-grey-600">{siteKey ? "Send your enquiry securely. A reference appears once it has been received." : `This form prepares an email to ${site.email} in your email application. Review it and press send there. Nothing is submitted to HPSG by this page.`}</p>
      <label className="block"><span className="kicker text-navy">Name</span><input required autoComplete="name" name="name" minLength={2} maxLength={100} className={fieldClass} /></label>
      <label className="block"><span className="kicker text-navy">Email</span><input required autoComplete="email" type="email" name="email" maxLength={254} className={fieldClass} /></label>
      <label className="block"><span className="kicker text-navy">Phone (optional)</span><input autoComplete="tel" type="tel" name="phone" maxLength={40} className={fieldClass} /></label>
      <label className="block"><span className="kicker text-navy">Area (optional)</span><select name="area" className={fieldClass} value={area} onChange={(event) => setArea(event.target.value)}><option value="">Select an area</option>{areas.map((area) => <option key={area.slug} value={`${area.name} ${area.postcode}`}>{area.name} {area.postcode}</option>)}<option value="Other area">Other area — describe in your message</option></select></label>
      <label className="block"><span className="kicker text-navy">Service</span><select required name="service" className={fieldClass} value={service} onChange={(event) => setService(event.target.value)}><option value="" disabled>Select a service</option><optgroup label="Main services">{services.map((service) => <option key={service.slug} value={service.slug}>{service.name}</option>)}</optgroup>{otherServiceGroups.map((group) => <optgroup key={group.slug} label={`Other services: ${group.name}`}>{group.services.map((service) => <option key={service.slug} value={service.slug}>{service.name}</option>)}</optgroup>)}</select></label>
      <label className="block"><span className="kicker text-navy">Message</span><textarea required name="message" rows={5} minLength={10} maxLength={2000} className={fieldClass} /></label>
      <p className="text-sm leading-relaxed text-grey-600">Include the property location and the work required. Enquiry details are used to respond; see our <Link href="/privacy/" className="underline decoration-gold underline-offset-4">privacy notice</Link>. Sending an enquiry does not book work; see the <Link href="/terms/" className="underline decoration-gold underline-offset-4">website terms</Link>.</p>
      <div hidden aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
      {siteKey && !receipt ? <EnquiryVerification siteKey={siteKey} onToken={setToken} attempt={attempt} /> : null}
      <button type="submit" disabled={sending || Boolean(receipt)} className="btn btn-primary disabled:cursor-not-allowed disabled:opacity-60">{receipt ? "Enquiry received" : sending ? "Sending…" : siteKey ? "Send enquiry" : "Prepare email"}</button>
      {receipt ? <p role="status" className="break-words text-sm leading-relaxed">Your enquiry has been received. Reference: {receipt}. This does not book work or confirm availability.</p> : null}
      {error ? <p role="alert" className="text-sm leading-relaxed">{error}</p> : null}
      {siteKey && !receipt ? <button type="button" className="quiet-link text-sm" onClick={(event) => { const form = event.currentTarget.form; if (form?.reportValidity()) emailDraft(form); }}>Use my email application instead</button> : null}
      {prepared ? <p role="status" className="text-sm leading-relaxed text-grey-700">Your email application was requested. This website has not sent your enquiry. If no email draft opened, email {site.email} directly or use WhatsApp below.</p> : null}
      <noscript><p>Email <a href={`mailto:${site.email}`}>{site.email}</a> directly or use the WhatsApp link below.</p></noscript>
      <p className="text-sm"><a className="quiet-link" href={whatsappHref(selectedService(service)?.name, area)}>WhatsApp {site.whatsappDisplay}</a></p>
    </form>
  );
}
