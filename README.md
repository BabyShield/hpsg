# Hampstead Property Services Group — hpsg.co.uk

Launch QA: [docs/launch-qa.md](docs/launch-qa.md).

Static Next.js site for Hampstead Property Services Group Limited, deployed to Cloudflare Workers with the OpenNext adapter.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run lint
npm run build
```

## Preview and deploy (Cloudflare)

Preview runs the OpenNext build, then Wrangler against the Workers runtime (not Node):

```bash
npm run preview
```

Deploy the `hpsg` worker to Cloudflare (custom domain `hpsg.co.uk` is declared in `wrangler.jsonc`):

```bash
npm run deploy
```

Current live preview: https://hpsg.hampstead-renovation-group.workers.dev

The `hpsg.co.uk` zone is not yet on this Cloudflare account, so custom-domain attach is deferred. When the zone is added, put this back in `wrangler.jsonc` and deploy:

```jsonc
"routes": [{ "pattern": "hpsg.co.uk", "custom_domain": true }]
```

Exact OpenNext commands (also the npm scripts):

```bash
npx opennextjs-cloudflare build
npx opennextjs-cloudflare preview
npx opennextjs-cloudflare deploy
```

Custom domain: `wrangler.jsonc` attaches `hpsg.co.uk` as a Workers custom domain.

Also in the Cloudflare dashboard for the zone [VERIFY current UI names]:

- SSL/TLS: Full (strict); Always Use HTTPS (http → https)
- Redirect Rule: `www.hpsg.co.uk` → `https://hpsg.co.uk` (301, preserve path). The Next.js config repeats this host redirect if www ever hits the worker.
- Do not attach `www` as a second content origin if the redirect rule is in place.

Indexing: `HPSG_NOINDEX` controls the `X-Robots-Tag: noindex, nofollow` header
set by `src/middleware.ts`. It is currently `"true"` in `wrangler.jsonc`,
because the only live host is `*.workers.dev` while `hpsg.co.uk` is still
parked at Hostinger — every canonical on the site points at hpsg.co.uk, so the
preview host must not be indexed against them. Set it to `"false"` as part of
the launch flip described above.

Next 16 deprecates `middleware.ts` in favour of `proxy.ts`. That migration is
blocked for now: Proxy defaults to the Node.js runtime and forbids the
`runtime` config option, and `@opennextjs/cloudflare` 1.20.2 will not build
Node.js middleware. The deprecation warning in `next dev` is expected.

Images are served through `next/image`. On Workers the transforms come from the
`IMAGES` binding in `wrangler.jsonc`; without it the OpenNext handler passes
originals through untransformed, so the site still works but the payload is
much larger. Source photographs live at 1280x720 in `public/images` and are
recompressed with mozjpeg — keep new ones under about 150KB. All image
components take `sizes`; heroes take `priority`, everything else lazy-loads.

Fonts are Cormorant Garamond (display) and Source Sans 3 (body), loaded via
`next/font/google` in `src/app/layout.tsx` and self-hosted at build time.
Brand colours live in the `@theme` block of `src/app/globals.css`, which is
the single source of truth — there is no `tailwind.config.ts`. The two hex
values that cannot read CSS (the OG image and the icons) import from
`src/lib/brand.ts`.

Client JavaScript is limited to the FAQ accordion, the mobile menu and the
header's Areas disclosure.

## Checks

Run after `npm run build`:

```bash
node scripts/check-content.mjs   # compliance + duplication gate, exits non-zero on a breach
node scripts/check-links.mjs     # inbound internal links per page class
```

`check-content.mjs` reads the prerendered HTML and fails on banned vocabulary
(professional designations, invented social proof), review markup, leaked
`[TBC]` / `[VERIFY]` tokens, price figures, banned positioning phrases, and
out-of-scope services named without an exclusion nearby. It also reports
normalised 8-gram overlap between sibling pages, collapsing place and council
names so that a sentence reused with the area swapped still counts as a
duplicate.

Generate Worker env types:

```bash
npm run cf-typegen
```

## Stack

- Next.js 16 (App Router, TypeScript, `src/`)
- Tailwind CSS v4
- `@opennextjs/cloudflare` + Wrangler
- Worker name: `hpsg`
- Canonical host: `https://hpsg.co.uk`

## Folder structure (Prompts 2–8)

```
src/
  app/
    layout.tsx
    page.tsx                          # homepage — Prompt 3
    globals.css
    not-found.tsx                     # Prompt 7
    sitemap.ts                        # Prompt 8
    robots.ts                         # Prompt 8
    [service]/
      page.tsx                        # 4 service hubs — Prompt 4
      [area]/
        page.tsx                      # service × area combos — Prompt 6
    areas/
      [area]/
        page.tsx                      # 25 area hubs — Prompt 5
    projects/
      page.tsx                        # Prompt 7
      [slug]/
        page.tsx                      # Prompt 7
    about/page.tsx                    # Prompt 7
    contact/page.tsx                  # Prompt 7
    group/page.tsx                    # Prompt 7
    privacy/page.tsx                  # Prompt 7
  components/                         # header, footer, CTA, FAQ, cards — Prompt 3
  data/
    services.ts                       # Prompt 2
    areas.ts                          # Prompt 2
    combo-content.ts                  # Prompt 6
  lib/
    matrix.ts                         # Prompt 2
    schema.ts                         # Prompt 8
public/
  images/
    projects/[slug]/                  # Prompt 7
  _headers                            # long-cache /_next/static
```

Route files above are not created until their prompt. Empty `src/components`, `src/data`, `src/lib`, and `public/images` directories are in place now.
