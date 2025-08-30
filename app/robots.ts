import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base = "https://theroadcorp.com";
  
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/", // Block API routes
        "/_next/", // Block Next.js internal files  
        "/admin/", // Block admin areas if any
      ],
    },
    sitemap: `${base}/sitemap.xml`,
    host: "theroadcorp.com",
  };
}
