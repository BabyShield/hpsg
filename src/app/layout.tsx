import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hpsg.co.uk"),
  title: {
    default: "Hampstead Property Services Group",
    template: "%s | Hampstead Property Services Group",
  },
  description: "[TBC: default meta description to be refined]",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-GB">
      <body className="min-h-screen bg-bone font-sans text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
