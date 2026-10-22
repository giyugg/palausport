import type { Metadata } from "next";
import localFont from "next/font/local";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { launchApproved, site, siteUrl } from "@/content/site";
import "./globals.css";

const lora = localFont({
  src: "../public/fonts/lora/lora-variable.ttf",
  variable: "--font-heading",
  display: "swap",
  weight: "400 700",
});
const dmSans = localFont({
  src: "../public/fonts/dm-sans/dm-sans-variable.ttf",
  variable: "--font-body",
  display: "swap",
  weight: "100 1000",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "M/Y Palau Sport | Philippine Liveaboard Diving",
    template: "%s | M/Y Palau Sport",
  },
  description: site.description,
  robots: { index: launchApproved, follow: launchApproved },
  openGraph: {
    type: "website",
    locale: "en_PH",
    siteName: site.name,
    title: "M/Y Palau Sport | Philippine Liveaboard Diving",
    description: site.description,
    images: [
      {
        url: "/images/tubbataha-reef-diver.webp",
        width: 1920,
        height: 1280,
        alt: "A diver exploring Tubbataha Reef, Philippines. Photo: Anna Varona, CC BY 4.0.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "M/Y Palau Sport",
    description: site.description,
    images: ["/images/tubbataha-reef-diver.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body id="top" className={`${lora.variable} ${dmSans.variable}`}>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
