import type { Metadata } from "next"
import { NextRequest } from "next/server"
import { siteConfig } from "@/site.config"
import { metadata as linkedinFormatter } from "@/app/linkedin-formatter/page"
import { metadata as twitterThread } from "@/app/twitter-thread/page"
import { metadata as instagramCaption } from "@/app/instagram-caption/page"
import { metadata as unicodeText } from "@/app/unicode-text/page"
import { metadata as postTemplates } from "@/app/post-templates/page"
import { metadata as about } from "@/app/about/page"
import { metadata as privacy } from "@/app/privacy/page"

export const dynamic = "force-dynamic"

// Serves every `*.md` path (middleware.ts rewrites `/twitter-thread.md` → `/api/md/twitter-thread`).
//
// Until #57 the page path rode in a query string, so every .md on the host shared ONE CDN cache
// entry (measured live 2026-11-04: 6 of 7 pages returned the same 993-byte body titled
// "Linkedin Formatter — FormatPad"). Port of web-capture-tools 272c026. Now:
//   1. A known page gets its OWN title and description, read from that page's exported
//      `metadata` — the same object Next renders into its <title> and meta description, so the
//      two cannot drift. The tools run in the browser and the page bodies are JSX, not readable
//      here, so a tool's .md SAYS it is a summary of the page; /about and /privacy are labelled
//      site-level, which is what they are.
//   2. Anything else (including the home page) gets a site-level response that SAYS it is
//      site-level.

type Label = "summary" | "site-level"
const PAGES: Record<string, { m: Metadata; content: Label }> = {
  "linkedin-formatter": { m: linkedinFormatter, content: "summary" },
  "twitter-thread": { m: twitterThread, content: "summary" },
  "instagram-caption": { m: instagramCaption, content: "summary" },
  "unicode-text": { m: unicodeText, content: "summary" },
  "post-templates": { m: postTemplates, content: "summary" },
  about: { m: about, content: "site-level" },
  privacy: { m: privacy, content: "site-level" },
}

const q = (s: string) => s.replace(/"/g, "'")

const RESOURCES = `## LLM Resources

- [JSON API](${siteConfig.baseUrl}/api/llm) — Machine-readable site data
- [Site Index](${siteConfig.baseUrl}/llms.txt) — Full site overview in markdown
- [Complete Content](${siteConfig.baseUrl}/llms-full.txt) — All content in plain text
`

function pageMarkdown(slug: string, m: Metadata, content: Label): string {
  const url = `${siteConfig.baseUrl}/${slug}`
  const title = String(m.title ?? "")
  const description = String(m.description ?? "")
  const banner =
    content === "summary"
      ? `> **This is a summary of the page, not the page itself.** The tool runs in your browser at ${url}`
      : `> **Site-level page.** This describes ${siteConfig.name} as a whole. The full page is at ${url}`
  return `---
title: "${q(title)}"
site: "${q(siteConfig.name)}"
domain: "${siteConfig.domain}"
url: "${url}"
description: "${q(description)}"
category: "${siteConfig.category}"
content: "${content}"
---

# ${title}

${banner}

## Summary

${description}

**Open the page:** [${title}](${url})

${RESOURCES}`
}

function siteLevelMarkdown(rawPath: string): string {
  const pageUrl = `${siteConfig.baseUrl}${rawPath.replace(/\.md$/, "")}`
  const desc = siteConfig.tagline ?? siteConfig.description ?? ""
  return `---
title: "${q(siteConfig.name)}"
site: "${q(siteConfig.name)}"
domain: "${siteConfig.domain}"
url: "${pageUrl}"
description: "${q(desc)}"
category: "${siteConfig.category}"
content: "site-level"
---

# ${siteConfig.name}

> **Site-level response.** No markdown version of \`${rawPath}\` exists, so this is a description
> of the site as a whole, not of that page. The page itself is at ${pageUrl}

${siteConfig.description ?? ""}

${RESOURCES}`
}

// The page path arrives as the catch-all segment (/api/md/twitter-thread ← /twitter-thread.md),
// so each .md has its own URL and therefore its own CDN cache key. See middleware.ts.
export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ path?: string[] }> },
) {
  const { path = [] } = await params
  const rawPath = "/" + (path.length ? path.join("/") : "index") + ".md"
  // Both /twitter-thread.md and /twitter-thread/index.md name the page.
  const segs = path[path.length - 1] === "index" ? path.slice(0, -1) : path
  const slug = segs.length === 1 ? segs[0] : undefined
  const page = slug && Object.hasOwn(PAGES, slug) ? PAGES[slug] : undefined

  const markdown =
    page && slug ? pageMarkdown(slug, page.m, page.content) : siteLevelMarkdown(rawPath)

  return new Response(markdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  })
}
