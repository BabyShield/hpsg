# Four-area renovation links

Ross asked for the four-area lead plan to be implemented, deployed and checked live. Its sister-site scope is links only. The main Hampstead Renovations stages are live through BabyShield/nw-renovation-ai#1015.

The four existing HPSG hubs for Hampstead, St John's Wood, Primrose Hill and Highgate each gain an ordinary link to the corresponding Renovations hub. Their eight kitchen and bathroom pages link the matching local service. Their four light-refurbishment pages link house refurbishment, explicitly labelled as wider renovation work. These are 16 existing, indexable pages; no new URL is created. Painting pages are outside this mapping because the four-area Renovations service inventory has no matching painting service.

The note adds no claims about HPSG, ownership or accreditations. Existing copy, metadata, canonicals, indexing, redirects, dates, forms and navigation are unchanged. The four main services and the footer-only Other services catalogue retain their positions.

Use this repository's current Vercel integration with GitHub main, then check the 16 public pages and their targets. Do not deploy the older Cloudflare preview or activate the independent enquiry Worker. No enquiry is submitted by these checks.

Local installation note: the existing lockfile fails npm ci on Windows with missing optional @emnapi runtime/core entries. npm 10 install --no-save installs the local dependencies without modifying package.json or package-lock.json. Run the production build and its publication checks before release, and record the hosted Vercel build separately.
