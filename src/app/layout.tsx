import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileCallBar } from "@/components/layout/MobileCallBar";
import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/data/site";
import { organizationSchema } from "@/lib/schema";

import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const body = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.tradingName,
    template: `%s | ${site.tradingName}`,
  },
  description: site.homeMetaDescription,
  alternates: { canonical: site.url },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: site.tradingName,
    url: site.url,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-GB" className={`${serif.variable} ${body.variable}`} data-scroll-behavior="smooth">
      <body className="min-h-screen bg-bone pb-14 font-sans text-ink antialiased lg:pb-0">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-gold focus:px-3 focus:py-2 focus:text-navy"
        >
          Skip to content
        </a>
        <JsonLd data={organizationSchema()} />
        <Header />
        <div id="main">{children}</div>
        <Footer />
        <MobileCallBar />
      </body>
    </html>
  );
}
