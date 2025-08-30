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
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || (process.env.NODE_ENV === 'production' ? "https://theroadcorp.com" : "http://localhost:3000");
  const metadataBase = new URL(siteUrl);
  return {
    title: {
      default: "Roadcorp",
      template: "%s | Roadcorp",
    },
    description: "Roadcorp: Building innovative products and solutions. The Road to Infinity — building, shipping, iterating.",
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
      canonical: siteUrl,
    },
    openGraph: {
      type: "website",
      siteName: "Roadcorp",
      title: "Roadcorp",
      description: "The Road to Infinity — building, shipping, iterating.",
      url: siteUrl,
      locale: "en_US",
      images: [
        {
          url: "/logos/roadcorp-logo-dark.png",
          width: 1200,
          height: 630,
          alt: "Roadcorp - Building innovative products and solutions",
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@roadcorp",
      creator: "@roadcorp",
      title: "Roadcorp",
      description: "The Road to Infinity — building, shipping, iterating.",
      images: ["/logos/roadcorp-logo-dark.png"],
    },
    icons: {
      icon: [
        { url: "/favicon.ico" },
        { url: "/icon.png", type: "image/png" },
      ],
      apple: [
        { url: "/apple-icon.png" },
      ],
    },
    manifest: "/manifest.json",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      // google: "your-google-verification-code",
      // yandex: "your-yandex-verification-code",
      // yahoo: "your-yahoo-verification-code",
    },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
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
              "@id": process.env.NEXT_PUBLIC_SITE_URL || "https://roadcorp.example",
              name: "Roadcorp",
              alternateName: ["Road Corp", "The Road Corporation"],
              url: process.env.NEXT_PUBLIC_SITE_URL || "https://roadcorp.example",
              sameAs: [
                "https://www.bagaranagency.com",
                "https://www.lyovson.com",
                "https://www.avenews.am",
              ],
              logo: {
                "@type": "ImageObject",
                url: "/logos/roadcorp-logo-dark.png",
                width: 800,
                height: 800,
                caption: "Roadcorp Logo",
              },
              image: "/logos/roadcorp-logo-dark.png",
              description: "Roadcorp: Building innovative products and solutions. The Road to Infinity — building, shipping, iterating.",
              slogan: "The Road to Infinity",
              foundingDate: "2024",
              keywords: ["Product Studio", "Design", "Engineering", "Innovation", "Technology"],
              knowsAbout: ["Web Development", "Product Design", "Software Engineering", "Digital Innovation"],
              areaServed: {
                "@type": "Place",
                name: "Worldwide",
              },
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: (process.env.NEXT_PUBLIC_SITE_URL || "https://roadcorp.example") + "?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <Script
          id="ld-website"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": (process.env.NEXT_PUBLIC_SITE_URL || "https://roadcorp.example") + "#website",
              url: process.env.NEXT_PUBLIC_SITE_URL || "https://roadcorp.example",
              name: "Roadcorp",
              description: "Roadcorp: Building innovative products and solutions. The Road to Infinity — building, shipping, iterating.",
              publisher: {
                "@type": "Organization",
                "@id": process.env.NEXT_PUBLIC_SITE_URL || "https://roadcorp.example",
              },
              inLanguage: "en-US",
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
