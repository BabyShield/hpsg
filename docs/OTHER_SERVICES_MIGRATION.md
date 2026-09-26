# HPSG Other services

Owner instructions, 26 September 2026: remove the old claims; use hpsg.co.uk as
the main website; retain its four main services; group this system's wider
catalogue under Other services; consolidate repetitive pages; check contacts;
complete privacy and website terms. Retain WhatsApp 07459 345456. No restoration
of the withdrawn domain was requested.

## Publication source

- `content/other-services.json`: 87 named other services in eight categories,
  plus links to the four main HPSG services. All service directories in the old
  output are accounted for, including underscore aliases and overlapping hubs.
- `content/site-policies.json`: privacy and website terms for the actual
  email-draft enquiry flow. Retention is described by criteria, not an invented
  fixed period. Hosting providers are described by category; Google Workspace
  and WhatsApp are identified for communications.
- `python scripts/build_hpsg_catalogue.py`: builds only the reviewed content in
  `release/`. It never imports the legacy prose or uploads anything. The local
  HTML is marked noindex and the local robots file disallows crawling.
- The HPSG repository contains the integrated Next.js implementation at
  `/other-services/` and `/other-services/[category]/`, navigation, contact form,
  privacy, terms and sitemap changes. The two JSON files are mirrored there.

The 267,154 historical HTML files in `output/` are retained as an offline
snapshot for recovery and comparison. They are not the publication output.
Their unsupported awards, memberships, insurance amounts, guarantees, reviews,
price figures and project claims are not carried into the reviewed catalogue.
Both Worker entrypoints now return 410, and the old R2 publishing script exits
before any upload. The active Cloudflare configuration remains the shutdown
Worker. Existing deployment workflows remain disabled.

`release/legacy-service-destinations.json` records 103 service-family destination
equivalences for review. It is not an active redirect policy. Unrelated keyword,
location, comparison and testimonial pages are not redirected indiscriminately.
The new catalogue has nine content URLs, not a service-by-location expansion.

## Contact findings

Checked 26 September 2026:

- The public WhatsApp landing page for `447459345456` displays
  `HAMPSTEAD PROPERTY SERVICES GROUP`. No message was sent or profile changed.
- The connected Resend account lists one verified domain,
  `hampsteadrenovations.co.uk`; it does not list `hpsg.co.uk`. Sending from
  `office@hpsg.co.uk` through that account is not verified.
- HPSG MX points to `smtp.google.com`; `google._domainkey.hpsg.co.uk` contains a
  public DKIM key. SPF is `v=spf1 include:_spf.mail.hostinger.com ~all`, which
  does not authorise Google Workspace. DMARC is `v=DMARC1; p=none`.
- No DNS, provider settings or mailbox content was changed. No delivery test
  was sent. Inbox delivery is not claimed.
- The HPSG contact form remains a client-side email draft. It now correctly
  encodes all enquiry fields in the mailto body, labels the button Prepare
  email, explains that the user must send it, and offers the retained WhatsApp.

Before adding an automatic submission endpoint, verify the HPSG sender with the
chosen provider and test provider acceptance and inbox delivery separately.
Reconcile SPF with actual sending providers while preserving required senders.

## Validation

- Catalogue preservation and isolation tests: 3 passing.
- Worker, shutdown and route policy tests: 44 passing, provider calls mocked.
- HPSG production build and TypeScript: passing with webpack. Turbopack rejects
  the temporary worktree's shared node_modules junction; no app compile failure.
- The existing middleware/Edge dependency warnings remain; no framework or
  dependency upgrade is included.
- HPSG catalogue check validates all 87 service anchors, 12 routes and their
  canonical URLs, internal links, removed claims and safe email encoding.
- The Snyk MCP scan required by the legacy repository instruction was not
  available in this session. No dependency was added.

No production assets or Worker were deployed. The old domain remains withdrawn.
The prepared HPSG changes must be published only as an intentional later release.

References used for policy and mail review:

- https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/individual-rights/the-right-to-be-informed/what-privacy-information-should-we-provide/
- https://hpsg.co.uk/contact/
- https://resend.com/domains

Desktop and mobile-layout browser checks passed, including menu navigation, category navigation, service selection and the unchanged WhatsApp destination. Local synthetic form fields were entered but never submitted. The full built-site content check found no blocked claims or leaked placeholders; the link audit found zero orphaned pages. The build now runs these publication checks automatically.
