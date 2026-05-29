import type { Metadata } from "next";

import "./globals.css";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

import { ThemeProvider } from "@/components/providers/theme-provider";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Calq",
    template: "%s | Calq",
  },

  description:
    "Modern online calculators for mathematics and currency conversion.",

  keywords: [
    "calculator",
    "online calculator",
    "currency converter",
    "math calculator",
    "currency exchange",
  ],

  authors: [
    {
      name: "Calq",
    },
  ],

  openGraph: {
    title: "Calq",
    description:
      "Modern online calculators for mathematics and currency conversion.",
    url: "https://example.com",
    siteName: "Calq",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Calq",
    description:
      "Modern online calculators for mathematics and currency conversion.",
  },

  alternates: {
    canonical: "https://example.com",
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <div className="min-h-screen bg-background text-foreground">
            <Navbar />

            <main className="flex-6">{children}</main>

            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
