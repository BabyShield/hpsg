/**
 * HPSG design tokens.
 *
 * Tailwind CSS v4 (shipped with Next.js 16) applies these values from
 * `@theme` in `src/app/globals.css`. Keep the two files in step.
 */
const navy = "#16263F";
const gold = "#B68A3E";
const bone = "#F7F4EE";
const ink = "#121820";

const grey = {
  50: "#F3F1EC",
  100: "#E6E2DA",
  200: "#D0CBBF",
  300: "#B4AFA3",
  400: "#8F8A80",
  500: "#6F6B63",
  600: "#54514B",
  700: "#3E3C38",
  800: "#2A2926",
  900: "#1A1917",
};

const fontSans = [
  "var(--font-body)",
  '"Source Sans 3"',
  "ui-sans-serif",
  "system-ui",
  "sans-serif",
] as const;

const fontDisplay = [
  "var(--font-serif)",
  '"Cormorant Garamond"',
  "Georgia",
  '"Times New Roman"',
  "serif",
] as const;

/** Type scale sized for long-form service and area pages. */
const fontSize = {
  xs: ["0.75rem", { lineHeight: "1.25rem" }],
  sm: ["0.875rem", { lineHeight: "1.375rem" }],
  base: ["1.0625rem", { lineHeight: "1.75rem" }],
  lg: ["1.1875rem", { lineHeight: "1.875rem" }],
  xl: ["1.375rem", { lineHeight: "2rem" }],
  "2xl": ["1.625rem", { lineHeight: "2.25rem" }],
  "3xl": ["2rem", { lineHeight: "2.5rem" }],
  "4xl": ["2.5rem", { lineHeight: "2.875rem" }],
  "5xl": ["3.125rem", { lineHeight: "3.375rem" }],
} as const;

const config = {
  theme: {
    extend: {
      colors: {
        navy,
        gold,
        bone,
        ink,
        grey,
      },
      fontFamily: {
        sans: [...fontSans],
        display: [...fontDisplay],
      },
      fontSize,
      maxWidth: {
        measure: "42rem",
      },
    },
  },
};

export default config;
export { navy, gold, bone, ink, grey, fontSans, fontDisplay, fontSize };
