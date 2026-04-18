import { NextRequest } from "next/server"
import { siteConfig } from "@/site.config"

export const dynamic = "force-dynamic"

export async function GET(request: NextRequest) {
  const rawPath = request.nextUrl.searchParams.get("path") || "/index.md"
  const segments = rawPath.split("/").filter(Boolean)
  const lastSegment = segments[segments.length - 1] ?? "index"
  const slug = lastSegment.replace(/\.md$/, "")

  const pageTitle =
    slug === "index"
      ? siteConfig.name
      : slug
          .replace(/-/g, " ")
          .replace(/\b\w/g, (c: string) => c.toUpperCase())

  const pageUrl = `${siteConfig.baseUrl}${rawPath.replace(/\.md$/, "")}`

  const markdown = `---
title: "${pageTitle} — ${siteConfig.name}"
site: "${siteConfig.name}"
domain: "${siteConfig.domain}"
url: "${pageUrl}"
description: "${(siteConfig.tagline ?? siteConfig.description ?? "").replace(/"/g, "'")}"
category: "${siteConfig.category}"
---

# ${pageTitle} — ${siteConfig.name}

> ${siteConfig.tagline ?? siteConfig.description ?? ""}

${siteConfig.description ?? ""}

**Full page:** [${pageUrl}](${pageUrl})

## LLM Resources

- [JSON API](${siteConfig.baseUrl}/api/llm) — Machine-readable site data
- [Site Index](${siteConfig.baseUrl}/llms.txt) — Full site overview in markdown
- [Complete Content](${siteConfig.baseUrl}/llms-full.txt) — All content in plain text
`

  return new Response(markdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  })
}
