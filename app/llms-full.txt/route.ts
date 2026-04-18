import { siteConfig } from "@/site.config"

export async function GET() {
  const content = `# ${siteConfig.name} — Full LLM Context
> ${siteConfig.tagline}

## Overview
${siteConfig.name} is a suite of 5 free social media text formatting tools. All tools run entirely in the browser — no server, no signup, no data collection.

**URL**: ${siteConfig.baseUrl}
**Category**: utility
**Primary Keyword**: ${siteConfig.primaryKeyword}

Last updated: ${new Date().toISOString()}

## Tools

### 1. LinkedIn Post Formatter
**URL**: ${siteConfig.baseUrl}/linkedin-formatter
**Description**: Formats LinkedIn posts using Unicode mathematical bold and italic character sets. LinkedIn renders these Unicode characters as bold/italic text in posts and comments.

Key features:
- Bold text via Unicode Mathematical Bold (U+1D400–U+1D419 range)
- Italic text via Unicode Mathematical Italic
- Bold italic combination
- 6 Unicode bullet point styles (•, →, ✓, ★, ▸, ◆)
- Line break separator (double newlines)
- 3,000 character counter with warning states
- Copy-to-clipboard

How it works: maps each ASCII letter to the corresponding Unicode bold/italic codepoint. Numbers and punctuation are unchanged as they have no bold Unicode equivalents.

---

### 2. Twitter/X Thread Composer
**URL**: ${siteConfig.baseUrl}/twitter-thread
**Description**: Splits long-form content into a numbered Twitter/X thread. Each tweet is kept under 280 characters.

Key features:
- Auto-split by sentence and paragraph boundaries
- Per-tweet 280-character counter with color-coded warning states
- Optional (1/n) auto-numbering
- Copy individual tweets or the entire thread at once
- Double line break to force tweet boundary
- URL-length awareness (t.co shortens all links to 23 chars)

Algorithm: splits at paragraph breaks (double newlines) first, then at sentence boundaries (.!?), respecting the 280-character limit minus 6 characters for numbering.

---

### 3. Instagram Caption Formatter
**URL**: ${siteConfig.baseUrl}/instagram-caption
**Description**: Formats Instagram captions with line break separators and curated hashtags.

Key features:
- Caption text editor with 2,200-character limit tracker
- Line break separator (adds . on blank lines for Instagram whitespace hack)
- 70+ curated hashtags across 7 niches: Business & Marketing, Lifestyle & Wellness, Food & Drink, Travel, Fitness, Photography, Fashion
- Custom hashtag input with Enter-to-add
- 30-hashtag limit enforcement
- Hashtags appended below line break dots for clean separation
- Instagram-style preview
- Copy full caption + hashtags

---

### 4. Unicode Text Styler
**URL**: ${siteConfig.baseUrl}/unicode-text
**Description**: Converts any text into 11 Unicode typographic styles.

Supported styles:
1. **Bold** — Unicode Mathematical Bold (𝗯𝗼𝗹𝗱)
2. **Italic** — Unicode Mathematical Italic (𝘪𝘵𝘢𝘭𝘪𝘤)
3. **Bold Italic** — Unicode Mathematical Bold Italic (𝙗𝙤𝙡𝙙)
4. **Script** — Unicode Script (𝒮𝒸𝓇𝒾𝓅𝓉)
5. **Bold Script** — Unicode Bold Script (𝓑𝓸𝓵𝓭)
6. **Fraktur** — Unicode Fraktur (𝔉𝔯𝔞𝔨𝔱𝔲𝔯)
7. **Double-Struck** — Unicode Double Struck (𝔻𝕠𝕦𝕓𝕝𝕖)
8. **Small Caps** — Unicode Latin Small Capitals (ꜱᴍᴀʟʟ ᴄᴀᴘꜱ)
9. **Strikethrough** — Unicode combining strikethrough overlay (S̶t̶r̶i̶k̶e̶)
10. **Underline** — Unicode combining underline (U̲n̲d̲e̲r̲l̲i̲n̲e̲)
11. **Fullwidth** — Unicode Fullwidth Latin (Ｆｕｌｌｗｉｄｔｈ)

All styles are rendered in real-time as the user types. Each style shows a copy button.

---

### 5. Post Template Library
**URL**: ${siteConfig.baseUrl}/post-templates
**Description**: 13 ready-to-use copy-and-paste templates for LinkedIn, Twitter/X, and Instagram.

LinkedIn templates: Job Announcement, Value/How-To Post, Hot Take/Opinion, Milestone/Achievement, We're Hiring
Twitter/X templates: Lessons Thread, Hot Take, Behind the Scenes, Resource List
Instagram templates: Product Launch, Lifestyle/Day in the Life, Motivational Quote, Mini Tutorial

Each template uses [bracketed placeholders] for the user to customize. Templates are filterable by platform and searchable by title/category.

## API Access

- JSON API: ${siteConfig.baseUrl}/api/llm
- Site Index: ${siteConfig.baseUrl}/llms.txt
- Any page + ".md" serves a markdown view (e.g. ${siteConfig.baseUrl}/linkedin-formatter.md)

## Technical Details
- Framework: Next.js 15 (App Router, SSR)
- Styling: Custom CSS with design tokens (violet/pink brand palette)
- All tool logic: client-side React hooks
- Unicode maps: pre-computed character-by-character maps for all 26 Latin letters
- Analytics: GA4 (${siteConfig.gaMeasurementId})
- GEO: llms.txt, llms-full.txt, /api/llm JSON endpoint, .md routes

## Frequently Asked Questions

Q: Does bold text work on LinkedIn mobile?
A: Yes, Unicode bold characters render correctly on the LinkedIn mobile app for iOS and Android.

Q: What platforms support Unicode text styles?
A: LinkedIn, Twitter/X, Instagram, Facebook, Discord, Slack, WhatsApp, YouTube comments, Reddit.

Q: Is there any data collection?
A: No. All text processing happens in your browser. No text is sent to any server.

Q: Are the tools free?
A: Yes, all 5 tools are completely free with no premium tier.

## Contact
Website: ${siteConfig.baseUrl}
`

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  })
}
