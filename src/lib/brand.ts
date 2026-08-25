/**
 * Canonical brand colours for contexts that cannot read CSS custom properties
 * (opengraph-image, icons, manifest, generated assets).
 *
 * The CSS source of truth is the @theme block in src/app/globals.css — keep
 * the two in step.
 */
export const brand = {
  navy: "#16263F",
  gold: "#B68A3E",
  bone: "#F7F4EE",
  ink: "#16130F",
} as const;
