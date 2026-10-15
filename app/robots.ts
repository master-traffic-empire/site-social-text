import { MetadataRoute } from "next"
import { siteConfig } from "@/site.config"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // ALLOW THE STATIC SUBTREE (2026-10-15). A crawler obeys only its most
        // specific matching group, so Googlebot was never affected by the Disallow
        // below -- it has its own permissive group. Bingbot does not: it falls under
        // "*", and `Disallow: /_next/` hid every page's stylesheets and JS chunks
        // from it. Bing is our LARGER search channel (169 sessions vs 63
        // google-organic, 28d to 2026-10-14). Allow wins on the longer path match.
        userAgent: "*",
        allow: ["/", "/_next/static/", "/_next/image"],
        disallow: ["/api/", "/_next/"],
      },
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Googlebot", allow: "/" },
    ],
    sitemap: `${siteConfig.baseUrl}/sitemap.xml`,
    host: siteConfig.baseUrl,
  }
}
