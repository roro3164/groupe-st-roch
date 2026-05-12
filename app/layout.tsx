import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const displaySerif = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-display-serif",
  display: "swap",
});

const dmSans = DM_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-dm",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: "Le Coin Saint-Roch — Deli’s Corner × Niña Bonita · Montpellier",
  description:
    "Le Coin Saint-Roch : entre la rue des Teissiers et la rue Saint-Paul, un même lieu et deux expériences — coffee shop & sandwicherie gourmet le jour, tapas andalouses le soir. Montpellier.",
  ...(siteUrl ? { alternates: { canonical: "/" } } : {}),
  keywords: [
    "Le Coin Saint-Roch",
    "Deli's Corner",
    "Niña Bonita",
    "Montpellier",
    "restaurant hybride",
    "Saint-Roch",
    "rue Saint-Paul",
    "rue des Teissiers",
    "tapas",
    "coffee shop",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${displaySerif.variable} ${dmSans.variable}`}>
      <body className="font-[family-name:var(--font-dm)] antialiased">{children}</body>
    </html>
  );
}
