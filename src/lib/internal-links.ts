/**
 * Internal-linking audit.
 *
 * Measure with `node scripts/check-links.mjs` after a build — it counts, for
 * every built page, how many other pages link to it. The numbers below are
 * from the run at the time of writing (117 pages built, 111 linkable).
 *
 * The problem this layout solves: combo pages are the commercial landing
 * pages, and they used to receive 6-9 inbound links each while every Tier-1
 * area hub received one from all 100-odd pages via the footer. Authority
 * pointed at the hubs and not at the pages meant to convert.
 *
 *   Page class    Pages   Min   Avg   Max
 *   ------------- -----   ---   ---   ---
 *   home              1   110   110   110
 *   service hub       4   110   110   110
 *   area hub         25     8    70   110
 *   combo            60     7    23   110
 *
 * Mechanisms, in rough order of contribution:
 *
 *   Sitewide chrome
 *     Footer: 4 service hubs, 15 Tier-1 area hubs, company links, and a
 *     "Popular local pages" block of 8 combo pages with the postcode in the
 *     anchor text, spread across all four services.
 *     Header: 4 service hubs, 8 area hubs, /areas/, /guides/, /about/,
 *     /contact/. "Work" moved to the footer while no case studies exist.
 *
 *   Home  → 12 combo deep links (every service at least twice, postcodes in
 *           the anchors), 8 area tiles, 7 further area links, 4 service cards.
 *
 *   Service hub → a plain text list of all 15 of its combos, anchored
 *           "{Service} in {Area} {Postcode}" — the strongest anchor-text
 *           lever on the site, since the photo mosaic's accessible text is
 *           only the area name. Plus Tier-2 area grid, sibling services,
 *           and a related-guides block.
 *
 *   Area hub → its 4 combos with postcodes in the anchors, 3-5 "near here"
 *           tiles, service cards. Tier-2 hubs, which have no combos of their
 *           own, additionally carry a "nearest local pages" module linking up
 *           to 6 combos in neighbouring Tier-1 areas.
 *
 *   Combo → its service hub (twice), its area hub (twice), the other three
 *           services in the same area, up to 4 sibling combos, and up to 2
 *           contextual guide links in the consent section.
 *
 *   Guides → each guide links at least 2 service hubs and at least 3 combo
 *           pages, enforced by assertions in src/data/guides.ts.
 *
 * The nearby-area graph is made reciprocal in getNearbyAreas()
 * (src/lib/matrix.ts): `nearbyAreaSlugs` is declared one way round, so
 * without the symmetric closure the "near here" links pointed in one
 * direction only.
 *
 * There are no orphans. The remaining floor of 7-8 inbound links sits on
 * Tier-2 area hubs and on combos in the least-connected corners of the area
 * graph; raising it further would mean either a longer footer or links that
 * do not earn their place editorially.
 */
export const INTERNAL_LINKS_AUDIT = true;
