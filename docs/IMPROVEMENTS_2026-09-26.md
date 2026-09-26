# HPSG improvements, 26 September 2026

## Completed account changes

- Updated the single root SPF record to
  `v=spf1 include:_spf.google.com include:_spf.mail.hostinger.com ~all`.
  The existing Hostinger sender remains authorised. Google MX, both providers'
  existing DKIM, DMARC, website A/www and verification records were preserved.
- Added HPSG to Resend and added exactly the three records supplied by its
  dashboard: `resend._domainkey` TXT, `rsend` CNAME and `send` CNAME.
  Public DNS returned all three. Resend displayed the domain and all records as
  **verified**, with receiving left disabled. No mailbox routing was changed.
  [Resend domain](https://resend.com/domains/b49af032-7dd2-4ccd-923e-fb9cae67e877).
- Submitted a prefix removal for `https://hampsteadrenovationsgroup.co.uk/` in
  Search Console. Its confirmation explicitly covers www/non-www/http/https
  variants. The recorded state is **Processing request**, not completed removal.
  The preceding overview still reported 26,975 indexed URLs; that is a delayed
  Google report, not proof of current live availability. The temporary search
  block lasts about six months; the site's permanent 410 withdrawal remains.
  [Removal request](https://search.google.com/search-console/removals?resource_id=https%3A%2F%2Fhampsteadrenovationsgroup.co.uk%2F).

No API key was created or exposed. No outgoing email or WhatsApp message was
sent. Verification proves domain authentication, not mailbox delivery.

## Prepared website and service changes

- Search across all 87 Other services, with matching results and enquiry links.
- Service-specific enquiry and WhatsApp links. Main service/area calls to action
  also carry the service and area through to the form. The number stays
  07459 345456. The form now precedes the longer explanatory contact sections.
- A separate direct-submission service with D1 storage before acknowledgement,
  Turnstile, persistent limits, validation, duplicate suppression, fixed office
  notification recipient, delivery leases and retries. The website offers it
  only when an explicitly configured service reports ready; otherwise it keeps
  the truthful Prepare email flow. See [activation requirements](ENQUIRY_SERVICE.md).
- Aggregate call/WhatsApp counts, saved-enquiry counts and notification outcomes
  are separate. Visitors have a clear opt-out, and browser privacy signals are
  respected. No message or contact fields enter the statistics table.
- The publication helper now withholds a whole statement containing an unresolved
  VERIFY, TBC or REVIEW marker. It no longer hides only the warning. There are
  1,065 marked source strings in the review queue, including already withheld
  placeholders; this is not a count of false claims or newly removed paragraphs.
  The build checks visible content and JSON-LD for the corresponding long claims.
- Case studies now require completion, a source record, owner approval and photo
  permission before they can be published. No approved project records were
  available. [Required evidence](PROJECT_EVIDENCE.md).
- Privacy and website terms describe the actual enabled/fallback enquiry flows,
  providers and measurement choice. Policy JSON is mirrored to the retired
  system's reviewed catalogue; its legacy output is still excluded.

## Verification and release boundary

- Production webpack build and TypeScript pass. The shared node_modules junction
  still requires webpack in this temporary worktree.
- Built-site checks: 121 HTML pages; 87 Other services; zero blocked-claim or
  placeholder problems; zero leaked marked long claims; zero orphaned pages.
- All 12 enquiry tests pass using real in-memory SQLite and mocked verification/email HTTP.
  They cover storage failure, retry recovery, duplicate/conflicting submissions,
  recipient restriction, spam rejection, rate limits, metrics field rejection,
  concurrent delivery and overdue-outbox health. No external message is sent.
- Worker packaging dry run passes. It is not a live deployment.
- Lint passes, and the retired-system catalogue's three tests pass. Its generator
  now writes consistent LF output on Windows, keeping repeat builds unchanged.
- Browser checks verified search, Other-service preselection, main service plus
  area preselection, WhatsApp text/number and the preference control. The narrow
  browser viewport was actually 520 pixels, with 500 pixels of content and no
  horizontal overflow; narrower mobile sizes are not claimed.
- Live availability checks passed for old apex, www, lead endpoint and sitemap
  (410/noindex) and the current HPSG homepage (200).

All code remains local. No website or Worker was published, and no D1 database,
Turnstile widget, production secrets or recurring health alert was provisioned.
Direct submission and click measurement therefore remain inactive. HPSG's
current live website is unchanged. A real inbox delivery test remains outstanding.

The unavailable Snyk MCP scan was not run. No dependency was added or upgraded.
