import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const metadataBase = siteUrl ? new URL(siteUrl) : undefined;
  return {
    title: {
      default: "Roadcorp",
      template: "%s | Roadcorp",
    },
    description: "The Road to Infinity — building, shipping, iterating.",
    keywords: [
      "Roadcorp",
      "Lyovson",
      "Bagaran Agency",
      "Avenews",
      "Product Studio",
      "Design",
      "Engineering",
    ],
    authors: [{ name: "Roadcorp" }],
    metadataBase,
    alternates: {
      canonical: siteUrl || "/",
    },
    openGraph: {
      type: "website",
      siteName: "Roadcorp",
      title: "Roadcorp",
      description: "The Road to Infinity — building, shipping, iterating.",
      images: [
        {
          url: "/logos/roadcorp-logo-dark.png",
          width: 800,
          height: 800,
          alt: "Roadcorp Logo",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Roadcorp",
      description: "The Road to Infinity — building, shipping, iterating.",
      images: ["/logos/roadcorp-logo-dark.png"],
    },
    icons: {
      icon: "/favicon.ico",
    },
    robots: {
      index: true,
      follow: true,
    },
    themeColor: [
      { media: "(prefers-color-scheme: light)", color: "#ffffff" },
      { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
    ],
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Structured Data */}
        <Script
          id="ld-org"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Roadcorp",
              url: "https://roadcorp.example", // update domain when available
              sameAs: [
                "https://www.bagaranagency.com",
                "https://www.lyovson.com",
                "https://www.avenews.am",
              ],
              logo: "/logos/roadcorp-logo-dark.png",
              description:
                "The Road to Infinity — building, shipping, iterating.",
            }),
          }}
        />
        <main className="h-dvh overflow-hidden">{children}</main>
      </body>
    </html>
  );
}
