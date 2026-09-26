"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { areas } from "@/data/areas";
import { services } from "@/data/services";
import { otherServiceGroups } from "@/data/other-services";
import { site } from "@/data/site";
import { buildEnquiryEmail } from "@/lib/enquiry-email";

const fieldClass = "mt-3 block w-full border-b border-grey-300 bg-transparent px-0 py-3 text-base text-navy outline-none focus:border-gold";

export function EmailEnquiryForm() {
  const [prepared, setPrepared] = useState(false);
  function prepare(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    window.location.href = buildEnquiryEmail(Object.fromEntries(data.entries()));
    setPrepared(true);
  }
  return (
    <form onSubmit={prepare} className="space-y-8 border-t border-gold/50 pt-10 lg:col-span-7 lg:border-t-0 lg:border-l lg:border-gold/40 lg:pl-14 lg:pt-20">
      <p className="kicker">Main and Other services enquiries</p>
      <p className="text-sm leading-relaxed text-grey-600">This form prepares an email to {site.email} in your email application. Review it and press send there. Nothing is submitted to HPSG by this page.</p>
      <label className="block"><span className="kicker text-navy">Name</span><input required autoComplete="name" name="name" maxLength={100} className={fieldClass} /></label>
      <label className="block"><span className="kicker text-navy">Email</span><input required autoComplete="email" type="email" name="email" maxLength={254} className={fieldClass} /></label>
      <label className="block"><span className="kicker text-navy">Phone (optional)</span><input autoComplete="tel" type="tel" name="phone" maxLength={40} className={fieldClass} /></label>
      <label className="block"><span className="kicker text-navy">Area (optional)</span><select name="area" className={fieldClass} defaultValue=""><option value="">Select an area</option>{areas.map((area) => <option key={area.slug} value={`${area.name} ${area.postcode}`}>{area.name} {area.postcode}</option>)}<option value="Other area">Other area — describe in your message</option></select></label>
      <label className="block"><span className="kicker text-navy">Service</span><select required name="service" className={fieldClass} defaultValue=""><option value="" disabled>Select a service</option><optgroup label="Main services">{services.map((service) => <option key={service.slug} value={service.name}>{service.name}</option>)}</optgroup>{otherServiceGroups.map((group) => <optgroup key={group.slug} label={`Other services: ${group.name}`}>{group.services.map((service) => <option key={service.slug} value={service.name}>{service.name}</option>)}</optgroup>)}</select></label>
      <label className="block"><span className="kicker text-navy">Message</span><textarea required name="message" rows={5} maxLength={2000} className={fieldClass} /></label>
      <p className="text-sm leading-relaxed text-grey-600">Include the property location and the work required. Enquiry details are used to respond; see our <Link href="/privacy/" className="underline decoration-gold underline-offset-4">privacy notice</Link>. Sending an enquiry does not book work; see the <Link href="/terms/" className="underline decoration-gold underline-offset-4">website terms</Link>.</p>
      <button type="submit" className="btn btn-primary">Prepare email</button>
      {prepared ? <p role="status" className="text-sm leading-relaxed text-grey-700">Your email application was requested. This website has not sent your enquiry. If no email draft opened, email {site.email} directly or use WhatsApp below.</p> : null}
      <noscript><p>Email <a href={`mailto:${site.email}`}>{site.email}</a> directly or use the WhatsApp link below.</p></noscript>
      <p className="text-sm"><a className="quiet-link" href={site.whatsappUrl}>WhatsApp {site.whatsappDisplay}</a></p>
    </form>
  );
}
