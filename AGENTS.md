<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# HPSG project rules

Building hpsg.co.uk for Hampstead Property Services Group Limited.

## Verified facts — use exactly, never alter or embellish

- Legal name: Hampstead Property Services Group Limited
- Company number: 17404557, registered in England & Wales
- Trading name: Hampstead Property Services Group (short form: HPSG)
- Address: Unit 3 Palace Court, 250 Finchley Road, London NW3 6DN
- Phone: 020 7101 3168 (`tel:+442071013168`). The owner retained WhatsApp 07459 345456 (`https://wa.me/447459345456`) on 26 September 2026.
- Email: office@hpsg.co.uk — the only email allowed
- Domain: https://hpsg.co.uk
- Footer legal line: "Hampstead Property Services Group Limited · Company No. 17404557 · Registered in England & Wales · Unit 3 Palace Court, 250 Finchley Road, London NW3 6DN"

## Hard compliance (non-negotiable)

1. NEVER mention RICS, MRICS, "chartered", surveyors, or any professional designation or accreditation.
2. NEVER invent: customer reviews, testimonials, star ratings, awards, accreditations, insurance specifics, staff names, "X years in business", project counts, guarantee terms, or prices. No aggregateRating or Review schema anywhere.
3. Insurance is described only as "fully insured". Where specifics would normally go, insert the token `[INSURANCE_TBC]`.
4. No VAT number and no statements about VAT status.
5. Case studies come only from a supplied list — never fabricate projects, clients, or addresses.
6. Local area details must be realistic; append `[VERIFY]` to any fact that is not certain.
7. If any needed fact is missing, insert `[TBC: description]` — do not invent.

## Positioning

The four main services remain light refurbishment, kitchen renovation, bathroom renovation, and painting & decorating. On 26 September 2026 the owner explicitly retained the wider ai-leads-nw catalogue under /other-services/ on hpsg.co.uk, with its sitewide navigation link in the footer. Keep it out of the main desktop and mobile menus. Keep those services grouped there; do not create keyword or location permutations. Do not describe Other services as a separate legal company. The written proposal must identify the business responsible for a particular job. All evidence and claims rules above still apply.

## Brand

- Colours: navy `#16263F`, gold `#B68A3E`, bone `#F7F4EE`, ink, grey scale.
- Font: "Helvetica Neue", Helvetica, Arial, sans-serif.
- Tone: confident, precise, understated, British English. No exclamation marks. No hype words.

## Output

Complete files with full paths. No ellipses, no "rest unchanged", no pseudo-code. If a response would be too long, split into numbered parts.
