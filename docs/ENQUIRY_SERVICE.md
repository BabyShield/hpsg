# Direct enquiry service

The website implementation and independent `hpsg-enquiries` Worker are prepared
locally. No Worker, database or website has been deployed for this change.
The existing withdrawn-domain Worker and its R2 publication paths must remain
disabled. They are not part of this service.

## Data flow

1. The site reads the configured public enquiry endpoint's `/status`.
2. Direct submission is offered only when the service reports enabled and
   supplies its public Turnstile site key. Otherwise the labelled email-draft
   flow, telephone and retained WhatsApp remain available.
3. The Worker checks the origin, request size, field lengths, known service,
   honeypot, persistent request limit and Turnstile hostname/action.
4. It writes a receipt and payload to D1 before returning HTTP 202. A retry with
   the same UUID and identical details returns the same receipt. Changed details
   cannot reuse that identifier. Storage failure returns an error, not success.
5. Only office@hpsg.co.uk receives a notification. The validated customer email
   is Reply-To. No automatic customer emails are sent.
6. Resend idempotency keys and a database lease prevent duplicate notifications.
   Failed deliveries stay in the outbox; the ten-minute schedule retries within
   a 23-hour window, at most six attempts. `/health` returns an error if a saved
   enquiry has waited over an hour or a notification has failed permanently.

Provider acceptance is recorded as `accepted`, never `delivered`. Inbox receipt
still requires a real authorised delivery test. No such test was sent here.

## Activation prerequisites

- Create a separate D1 database `hpsg-enquiries`; put its real ID in
  `cloudflare/enquiries/wrangler.jsonc` and apply its migration. The checked-in
  all-zero ID is deliberately not a production database.
- Create a Turnstile widget restricted to the actual HPSG website hostnames,
  using action `enquiry` in the client. Set `TURNSTILE_SITE_KEY` in Worker vars.
- Store `TURNSTILE_SECRET_KEY`, a fresh `RATE_LIMIT_SECRET`, and a Resend
  sending-only API key restricted to the verified HPSG domain as Worker secrets.
  Do not copy the local Wrangler OAuth token into the application.
- Set `PUBLIC_ENABLED=true` only after database and provider configuration is
  ready. Deploy this independent Worker; keep the existing site-withdrawal
  configuration unchanged.
- Set `NEXT_PUBLIC_HPSG_ENQUIRIES_URL` to that Worker's HTTPS origin at the
  website build. This is a public URL, never an API key.
- Verify the enabled status, spam controls, saved receipt, email provider
  acceptance and actual office inbox receipt before publishing the website.

Commands (run from the repository root after the required settings exist):

```powershell
npm run test:enquiries
npm run enquiries:check
npx wrangler d1 create hpsg-enquiries --jurisdiction=eu
npx wrangler d1 migrations apply hpsg-enquiries --remote --config cloudflare/enquiries/wrangler.jsonc
npx wrangler secret put TURNSTILE_SECRET_KEY --config cloudflare/enquiries/wrangler.jsonc
npx wrangler secret put RATE_LIMIT_SECRET --config cloudflare/enquiries/wrangler.jsonc
npx wrangler secret put RESEND_API_KEY --config cloudflare/enquiries/wrangler.jsonc
```

`enquiries:check` is only a packaging dry run. It does not validate live secrets,
deploy anything, provision a database or prove email delivery.

## Measurement and operations

The database contains daily aggregate call clicks, WhatsApp clicks, saved
enquiries and notification acceptance/failure counts. Client events cannot
submit enquiry-success counts or arbitrary properties. No form values, URLs,
query strings, browser history or device identifier go into the event table.
Short-lived hashed IP/email counters are solely for abuse prevention, separate
from statistics. The scheduled handler clears expired counters.

Visitors can disable click counting through the footer's Contact click
preferences link. Browser Do Not Track and Global Privacy Control also disable
it. Preference storage failure disables it. Success counts come from persisted
server operations, not a button click. Counts are not unique people or proof of
completed conversations; they are not advertising attribution data.

The owner must review failed/pending outbox records and retention regularly.
Enquiry records must be removed when the purposes in the privacy notice no
longer apply; there is no invented fixed business retention period. Access to
D1 stays within the Cloudflare account. No public endpoint reads enquiry data.
An external recurring health alert has not been configured in this turn.

Official implementation references:

- https://developers.cloudflare.com/d1/worker-api/
- https://developers.cloudflare.com/turnstile/get-started/server-side-validation/
- https://resend.com/docs/api-reference/emails/send-email
- https://resend.com/docs/dashboard/emails/idempotency-keys
- https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guidance-on-the-use-of-storage-and-access-technologies/what-are-the-exceptions/
