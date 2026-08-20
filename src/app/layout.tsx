import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileCallBar } from "@/components/layout/MobileCallBar";
import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/data/site";
import { organizationSchema } from "@/lib/schema";

import "./globals.css";

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
    <html lang="en-GB">
      <body className="min-h-screen bg-bone font-sans text-ink antialiased pb-14 lg:pb-0">
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
