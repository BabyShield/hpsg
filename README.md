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
