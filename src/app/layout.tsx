import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3302");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Createflowz | Social media that brings you clients",
  description:
    "We plan, shoot, edit and post your reels, run your ads and automate your DMs, so your followers turn into paying customers.",
};

export const viewport: Viewport = {
  themeColor: "#0e0e0d",
  colorScheme: "dark light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${grotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
