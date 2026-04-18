import { siteConfig } from "@/site.config"

const tools = [
  { name: "LinkedIn Post Formatter", slug: "linkedin-formatter", description: "Format LinkedIn posts with Unicode bold/italic text, bullet points, and line breaks." },
  { name: "Twitter/X Thread Composer", slug: "twitter-thread", description: "Split content into a numbered Twitter/X thread with per-tweet character counting." },
  { name: "Instagram Caption Formatter", slug: "instagram-caption", description: "Format Instagram captions with line breaks and 70+ curated hashtags by niche." },
  { name: "Unicode Text Styler", slug: "unicode-text", description: "Convert text to 11 Unicode styles: bold, italic, script, fraktur, double-struck, small caps, strikethrough, and more." },
  { name: "Post Template Library", slug: "post-templates", description: "13+ copy-and-paste templates for LinkedIn, Twitter/X, and Instagram posts." },
]

export async function GET() {
  const content = `# ${siteConfig.name}
> ${siteConfig.tagline}

${siteConfig.description}

## Social Media Text Formatters
${tools.map((t) => `- [${t.name}](https://${siteConfig.domain}/${t.slug}): ${t.description}`).join("\n")}

## About
- Free, no sign-up required
- 100% client-side — your text never leaves your browser
- 5 social media formatting tools for LinkedIn, Twitter/X, and Instagram
- Mobile-friendly responsive design
`

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  })
}
