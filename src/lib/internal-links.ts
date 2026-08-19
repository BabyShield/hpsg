/**
 * Internal-linking audit (Prompt 8).
 *
 * Every combo is reachable in two clicks from home:
 *   Home → service hub → combo
 *   Home → area hub → combo (Tier 1)
 *
 * Inbound-link sources (sitewide chrome counts for every page):
 *
 * Route                         | Inbound from
 * ----------------------------- | ------------------------------------------
 * /                             | Header wordmark, 404
 * /[service]/                   | Home cards, header, footer, combos (up),
 *                               | other hubs, Tier 2 area cards
 * /[service]/[area]/            | Service hub area list, Tier 1 area cards,
 *                               | sibling combos (nearby), footer not
 *                               | enumerating every combo (by design)
 * /areas/                       | Header Areas → All areas, 404
 * /areas/[area]/                | Home area grid, footer Tier 1, nearby
 *                               | modules, combo “area hub” link
 * /projects/                    | Header, footer, homepage strip
 * /projects/[slug]/             | /projects/ index
 * /about/ /contact/ /group/     | Header and/or footer
 * /privacy/                     | Footer
 *
 * No orphan routes in generateStaticParams. Header + footer provide a
 * second path to hubs and core pages if a module is missed.
 *
 * Schema [VERIFY] against Google Rich Results Test:
 * - HomeAndConstructionBusiness: name, legalName, url, telephone, email,
 *   PostalAddress, geo (coords [VERIFY]), areaServed, image/logo.
 *   No aggregateRating, Review, priceRange, or sameAs.
 * - Service: serviceType, provider @id, areaServed, url.
 * - BreadcrumbList: matches visible crumbs, absolute URLs.
 * - FAQPage: only questions rendered on the page.
 * - Logo currently reuses the generated OG image until a dedicated
 *   logo file is supplied [TBC].
 */
export const INTERNAL_LINKING_NOTES = "see file comment";
