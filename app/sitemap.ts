import { siteConfig } from "@/site.config"
import type { MetadataRoute } from "next"

const tools = [
  "linkedin-formatter",
  "twitter-thread",
  "instagram-caption",
  "unicode-text",
  "post-templates",
]

const staticPages = ["about", "privacy"]

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${siteConfig.baseUrl}/`, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    ...tools.map((slug) => ({
      url: `${siteConfig.baseUrl}/${slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...staticPages.map((slug) => ({
      url: `${siteConfig.baseUrl}/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ]
}
