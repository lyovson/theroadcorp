import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://theroadcorp.com";
  const now = new Date();
  
  return [
    {
      url: base,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    // Add other important pages as they're created
    // {
    //   url: `${base}/about`,
    //   lastModified: now,
    //   changeFrequency: "yearly",
    //   priority: 0.8,
    // },
    // {
    //   url: `${base}/projects`,
    //   lastModified: now,
    //   changeFrequency: "monthly", 
    //   priority: 0.9,
    // },
  ];
}

