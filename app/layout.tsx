import type { Metadata } from "next";
import { Inter, League_Spartan } from "next/font/google";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

import "./globals.css";

const bodyFont = Inter({
  variable: "--font-copy",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const headingFont = League_Spartan({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://proofrr.com"),
  title: {
    default: "Proofrr",
    template: "%s | Proofrr",
  },
  description: "Go from draft to approved - 3x faster!",
  openGraph: {
    title: "Proofrr",
    description: "Go from draft to approved - 3x faster!",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bodyFont.variable} ${headingFont.variable} antialiased`}>
      <body
        suppressHydrationWarning
        className="min-h-screen bg-background text-foreground"
      >
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
