import type { MetadataRoute } from "next";
import { siteConfig, siteIndexingEnabled } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteIndexingEnabled) {
    return [];
  }
  const base = siteConfig.url.replace(/\/$/, "");
  const paths = ["", "/sobre", "/empreendimentos", "/servicos", "/contato"];
  return paths.map((path) => ({
    url: `${base}${path || "/"}`,
    lastModified: new Date(),
  }));
}
