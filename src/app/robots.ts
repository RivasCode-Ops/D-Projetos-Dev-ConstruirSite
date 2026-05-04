import type { MetadataRoute } from "next";
import { siteConfig, siteIndexingEnabled } from "@/lib/site-config";

export default function robots(): MetadataRoute.Robots {
  if (!siteIndexingEnabled) {
    return { rules: { userAgent: "*", disallow: ["/"] } };
  }
  const base = siteConfig.url.replace(/\/$/, "");
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${base}/sitemap.xml`,
  };
}
