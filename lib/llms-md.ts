// lib/llms-md.ts — the .md-layer section of llms.txt (#91).
//
// The .md handler (app/api/md/[[...path]]/route.ts) serves a per-page summary (content: "summary") for exactly the
// pages in lib/md-pages.ts, using each page's own exported metadata; every other .md path gets a
// site-level stub that still returns 200 but describes the site. So only MD_PAGES is advertised
// here, with the same title and description the .md serves (description shortened).
import { MD_PAGES } from "./md-pages"

// llms.txt is the concise index; full text lives in each .md and in llms-full.txt. So each entry's
// description is its first sentence, capped at ~120 chars on a word boundary with a trailing "…".
export function shortDescription(text: string, max = 120): string {
  const clean = text.replace(/\s+/g, " ").trim()
  const m = clean.match(/^.+?[.!?](?=\s+["'\u201c(]?[A-Z0-9])/)
  const first = m ? m[0] : clean
  if (first.length <= max) return first
  const cut = first.slice(0, max + 1)
  const sp = cut.lastIndexOf(" ")
  return (sp > 40 ? cut.slice(0, sp) : first.slice(0, max)).replace(/[\s,;:.\u2014-]+$/, "") + "\u2026"
}

export function getMarkdownIndexSection(baseUrl: string): string {
  const lines = Object.entries(MD_PAGES).map(
    ([key, m]) =>
      `- [${String(m.title ?? "")}](${baseUrl}/${key}.md): ${shortDescription(String(m.description ?? ""))}`
  )
  return `## Markdown versions (plain text for LLMs)
Each page below is also served as plain markdown at its URL plus \`.md\`: a summary of the page (its title and description) with a link to the full page.

${lines.join("\n")}`
}
