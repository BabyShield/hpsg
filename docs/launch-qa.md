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
- Email: `contact@hpsg.co.uk`
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
