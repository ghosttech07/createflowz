import type { Metadata, Viewport } from "next";
import { Barlow, Barlow_Condensed, Poppins } from "next/font/google";
import { studio } from "@/content/site";
import { siteUrl } from "@/lib/site-url";
import "./globals.css";
import "./v2.css";

// The card-and-pill look (version 2) is set in Poppins; What we do keeps Barlow Condensed.
const poppins = Poppins({
  variable: "--font-v2",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const barlow = Barlow({
  variable: "--font-text",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const title = `${studio.name} | ${studio.descriptor}`;
const description =
  "Createflowz is a branding and web studio. We build brands, websites and apps, then bring the customers with Google and Meta ads, SEO and social. For startups, online stores, local businesses and established brands in the US, UK and Canada.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: { title, description, type: "website", siteName: studio.name, locale: "en_US" },
  twitter: { card: "summary_large_image", title, description },
};

export const viewport: Viewport = {
  themeColor: "#ededed",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${barlow.variable} ${barlowCondensed.variable} ${poppins.variable}`}>
      <head>
        {/* Marks the page as scripted before paint so entrance styles never hide content without JS. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
