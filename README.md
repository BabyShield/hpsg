# Hampstead Property Services Group — hpsg.co.uk

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

The zone for `hpsg.co.uk` must already sit on Cloudflare before that first custom-domain deploy, or Wrangler will error. [VERIFY against current Wrangler custom-domain docs]

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

Preview / staging: set Worker var `HPSG_NOINDEX=true` on preview deployments only. Production `wrangler.jsonc` sets `HPSG_NOINDEX=false`. Middleware then sends `X-Robots-Tag: noindex, nofollow` on preview and never on production.

Project photographs: compress to about 1600px on the long edge, AVIF/WebP-friendly JPEG, before commit. Use `ProjectImage` (`next/image`, explicit width/height, `priority` on a hero only, lazy otherwise). Alt pattern: `{service} in {area} — {detail}`.

Fonts are the system Helvetica stack in `@theme`; no webfont request, so no font layout shift from a downloaded face.

Client JavaScript is limited to the FAQ accordion and the mobile menu.

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
