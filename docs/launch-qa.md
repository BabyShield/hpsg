# Prompt 10 — Compliance QA and launch checklist

Generated from a repo-wide search of `src/`, `README.md` and `AGENTS.md`. `node_modules` excluded.

## 1. Forbidden-strings report

| String | Result |
|---|---|
| RICS / MRICS / chartered | Pass. Only in `AGENTS.md` as a prohibition. |
| surveyors | Pass. Only in `AGENTS.md` as a prohibition. |
| 020 8054 / 020 7101 4590 | Pass. No hits. |
| VAT | Pass. Only in `AGENTS.md` as a prohibition. |
| £ | Pass. No hits. |
| aggregateRating / Review schema | Pass. Mentioned only as something we do not emit (`src/lib/internal-links.ts`). |
| award / guarantee | Pass. No marketing uses. |
| review / rating | No customer reviews or star ratings. Hits on `preview` (Cloudflare) and `[REVIEW: not legal advice]` on `/privacy/` are not customer-review claims. |

### design and build / extension / loft / structural — for sign-off

Allowed only as Hampstead Renovations referral lines, or as an explicit exclusion of that work. Occurrences:

| File | Use |
|---|---|
| `src/data/services.ts` | Kitchen survey notes existing structural openings; light-refurbishment **definition and FAQ** refer work to Hampstead Renovations (extension, loft, structural, design and build). |
| `src/data/service-hub-content.ts` | Kitchen: we do not specify structural steels. Light refurbishment: exclusion + one introduction to Hampstead Renovations. |
| `src/components/services/ServiceHub.tsx` | Light-refurbishment hub: one link to Hampstead Renovations for design and build, extensions, loft conversions or structural openings. |
| `src/app/group/page.tsx` | Group page: Hampstead Renovations takes on major design-and-build work. |
| `src/data/areas.ts` | Hampstead housing stock: “later kitchen extensions that we do not form”. Regent's Park: “not facade or structural work”. |
| `AGENTS.md` | Positioning rule (not site copy). |

Sign-off needed on the housing-stock sentence in `areas.ts` (Hampstead) and the kitchen “structural openings as found” survey item — they are exclusions/description, not targeting those services.

## 2. NAP consistency

Canonical values in `src/data/site.ts`:

- Phone display: `020 7101 3168`
- Phone tel: `+442071013168`
- Email: `office@hpsg.co.uk`
- Address: Unit 3 Palace Court, 250 Finchley Road, London NW3 6DN
- Company no.: 17404557
- Footer legal line matches the standing context.

Every `020` in the repo is `020 7101 3168`. No other emails. Address strings match.

## 3. Remaining `[TBC]` / `[VERIFY]` / `[INSURANCE_TBC]`

### Blocking (resolve before launch)

| Item | Where |
|---|---|
| Insurance insurer + cover level | `[INSURANCE_TBC]` on homepage, service FAQs, area FAQs, Why HPSG |
| Painting microsite list (names + URLs) | `PAINTING_MICROSITE_AREAS` in `src/lib/matrix.ts`; footer; group page; area hub painting card; painting hub `areasIntro` |
| Director name(s) as at Companies House | `site.directors`; `/about/` |
| Group brand URLs | Hampstead On Demand URL; painting brand list |
| 6 HR project summaries + photographs | `src/data/projects.ts`; `/projects/`; homepage featured strip |
| Form endpoint | `site.formEndpoint`; `/contact/` currently mailto |
| Opening hours | `site.openingHours`; homepage FAQ; light-refurbishment FAQ |
| Tagline and homepage H1 sign-off | `site.tagline`, `site.homeH1` (draft in standing context) |
| Default meta description refinement | root layout `[TBC: default meta description to be refined]` |
| Privacy retention / marketing / processor | `/privacy/` |

### Non-blocking (soft local facts)

`[VERIFY]` on conservation-area names and boundaries, CPZ codes, split-borough addresses (Highgate, Queen's Park, Kilburn, Tufnell Park, Regent's Park), TPO/tree notice, listed status, licence-to-alter phrasing, Finchley Road highway authority, Canal & River Trust, Crown Estate, HGS Trust vs CA maps, geo coords for 250 Finchley Road (`51.552879, -0.18806`), OpenNext/Wrangler dashboard labels, Rich Results Test of live schema, GBP category names.

Price ranges remain `[TBC: Ross to supply typical range if a range is to be shown]` — omit until authorised.

## 4. Launch checklist

1. Zone `hpsg.co.uk` on Cloudflare.
2. `npm run deploy` (OpenNext + Wrangler worker `hpsg`). Confirm `HPSG_NOINDEX` is **not** `true` on production.
3. Custom domain: apex `hpsg.co.uk` on the worker.
4. Redirect Rule: `www.hpsg.co.uk` → `https://hpsg.co.uk` 301, preserve path. Always Use HTTPS.
5. Submit `https://hpsg.co.uk/sitemap.xml` in a **new** Google Search Console property for hpsg.co.uk.
6. Bing Webmaster Tools, same sitemap.
7. Create a **new** Google Business Profile for Hampstead Property Services Group at Unit 3 Palace Court, 250 Finchley Road, London NW3 6DN, phone 020 7101 3168. Do not reuse or merge an existing profile. Suggested categories: remodeler / kitchen / bathroom / painter — [VERIFY exact names in the GBP UI]. Website field: `https://hpsg.co.uk`. No review import.
8. Confirm production HTML does not contain `noindex`.
9. Run Google Rich Results Test on home, one hub, one combo [VERIFY].

## 5. Post-launch (outside this repo)

Add reciprocal footer/group links **from** hampsteadrenovations.co.uk, Hampstead On Demand, and the painting microsites **to** hpsg.co.uk so group linking runs both ways.

---

# Addendum — site improvement pass

Everything below is the state after the visual, content and SEO work. The
automated gate that replaces most of section 1 is `node scripts/check-content.mjs`,
run against the prerendered HTML after `npm run build`; it exits non-zero on a
breach and is the check to run before any deploy.

## What changed that affects launch

- **Indexing is now off by default.** `wrangler.jsonc` sets `HPSG_NOINDEX="true"`
  because the only live host is `*.workers.dev` while `hpsg.co.uk` is parked at
  Hostinger. Launch item 2 below is therefore a *flip*, not a confirmation:
  set it to `"false"` at the same time as attaching the domain, or the
  production site will ship `noindex`.
- **Asset URLs.** `og:image`, schema `image`/`logo` and every sitemap
  `<image:loc>` used to carry a trailing slash and 404. Fixed via `assetUrl()`;
  verified on the Workers runtime that all 31 unique sitemap image URLs return
  200.
- **Icons and logo.** `icon.svg`, `apple-icon.png`, `manifest.webmanifest` and
  a real square `logo.png` now exist; schema `logo` no longer points at a
  photograph of a mansion block. Regenerate the rasters with
  `node scripts/generate-brand-assets.mjs`.
- **Schema.** `FAQPage` removed from combos and area hubs and kept only on the
  four service hubs; `HowTo` removed entirely (both retired as rich results,
  both were carrying near-duplicate payloads). `ContactPage` added on
  `/contact/`. `Article` added on guides, authored by the Organization —
  no personal names are published anywhere.
- **`sameAs` removed** from the LocalBusiness node: it pointed at a sister
  brand, which is a separate legal entity. Add it back when this company has
  verified profiles of its own (GBP, social) — see `[TBC]` in `src/lib/schema.ts`.
- **`/guides/`** is a new section of 12 pages. It takes the header slot vacated
  by Work, which moves to the footer while no case studies exist.
- **Sitemap** now carries 109 URLs (was 96): 12 guides, the guides index, and
  `/projects/` dropped to priority 0.3.

## Still blocked on supplied information

Unchanged from section 3 above, and all still `[TBC]` in the source:

1. **Project case studies.** All six entries in `src/data/projects.ts` are
   drafts, so `/projects/[slug]/` generates nothing. The index page now says so
   plainly rather than implying a portfolio exists.
2. **Insurance specifics** — `[INSURANCE_TBC]`. Copy says only "fully insured".
3. **Opening hours** — `[TBC]`, so `openingHoursSpecification` is deliberately
   absent from the LocalBusiness schema rather than invented.
4. **Form endpoint** — `site.formEndpoint` is `null`, so the contact form still
   opens a mail client. The page now sets out what to include in an enquiry and
   how quoting works, but there is no lead capture until an endpoint exists.
5. **Response-time expectation** on `/contact/` — omitted rather than promised.
6. **Director names**, **Hampstead On Demand URL**, **painting microsite list**
   (`PAINTING_MICROSITE_AREAS` is `[]`).

## Local facts

The new copy follows the existing convention: `[VERIFY]` is appended in the
same sentence as any conservation-area boundary, Article 4 direction, CPZ code,
date, attribution or named street that is not certain. `publicCopy()` strips
those tokens before render, and `check-content.mjs` fails the build if one
reaches the visible HTML. They are visible in the source data for anyone
checking the underlying claim — which is the point of them.

## Launch checklist, revised

1. Zone `hpsg.co.uk` on Cloudflare (nameserver move from Hostinger).
2. In `wrangler.jsonc`: `"routes": [{ "pattern": "hpsg.co.uk", "custom_domain": true }]`,
   `"workers_dev": false`, `"preview_urls": false`, and
   `"vars": { "HPSG_NOINDEX": "false" }`. All four together.
3. `npm run deploy`.
4. Confirm production HTML contains no `noindex` and that a `*.workers.dev`
   URL no longer serves the site.
5. Redirect rule `www.hpsg.co.uk` → `https://hpsg.co.uk`, Always Use HTTPS.
6. Submit `https://hpsg.co.uk/sitemap.xml` to a new Google Search Console
   property; import to Bing Webmaster Tools.
7. Create the Google Business Profile (details in section 4 above). Then add
   its URL to `sameAs` in `src/lib/schema.ts`.
8. Spot-check the Rich Results Test on home, one service hub, one combo and one
   guide: expect LocalBusiness, WebPage, Breadcrumb, Service, Place — and
   FAQPage only on the service hub, Article only on the guide.
9. PageSpeed Insights on home, one combo and `/areas/` to capture a post-launch
   baseline for the image work.
