"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";

type Turnstile = {
  render: (element: HTMLElement, options: Record<string, unknown>) => string;
  remove: (id: string) => void;
};
declare global { interface Window { turnstile?: Turnstile } }

export function EnquiryVerification({ siteKey, onToken, attempt }: { siteKey: string; onToken: (token: string) => void; attempt: number }) {
  const container = useRef<HTMLDivElement>(null);
  const callback = useRef(onToken);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  useEffect(() => { callback.current = onToken; }, [onToken]);
  useEffect(() => {
    if (!ready || !container.current || !window.turnstile) return;
    const id = window.turnstile.render(container.current, {
      sitekey: siteKey, action: "enquiry", theme: "light", size: "flexible",
      callback: (token: string) => { setFailed(false); callback.current(token); },
      "expired-callback": () => callback.current(""),
      "error-callback": () => { callback.current(""); setFailed(true); },
    });
    return () => { window.turnstile?.remove(id); };
  }, [ready, siteKey, attempt]);
  return <div>
    <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit" onReady={() => setReady(true)} onError={() => setFailed(true)} />
    <div ref={container} />
    {failed ? <p className="mt-3 text-sm" role="status">Verification could not load. Please use the email or WhatsApp option below.</p> : null}
  </div>;
}
