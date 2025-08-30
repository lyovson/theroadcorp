import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base = process.env.NEXT_PUBLIC_SITE_URL;
  
  const robotsConfig: MetadataRoute.Robots = {
    rules: {
      userAgent: "*",
      allow: "/",
    },
  };
  
  if (base) {
    robotsConfig.sitemap = `${base}/sitemap.xml`;
    robotsConfig.host = base;
  }
  
  return robotsConfig;
}
