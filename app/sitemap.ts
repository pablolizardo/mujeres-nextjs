import type { MetadataRoute } from "next";
import { getAllPostSlugs } from "../lib/contentful";

const SITE_URL = "https://www.100rgmujeres.com.ar";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const slugs = await getAllPostSlugs();

  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/presentacion",
    "/el-proyecto",
    "/rio-grande",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }));

  const postRoutes: MetadataRoute.Sitemap = slugs.map((slug) => ({
    url: `${SITE_URL}/mujeres/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...postRoutes];
}
