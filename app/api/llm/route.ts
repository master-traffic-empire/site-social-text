import { siteConfig } from "@/site.config"

const tools = [
  {
    name: "LinkedIn Post Formatter",
    slug: "linkedin-formatter",
    description: "Format LinkedIn posts with Unicode bold/italic text, bullet points, and line breaks.",
    features: [
      "Unicode bold text",
      "Unicode italic text",
      "6 bullet styles",
      "Line break separator",
      "3000-char counter",
      "Live preview",
    ],
  },
  {
    name: "Twitter/X Thread Composer",
    slug: "twitter-thread",
    description: "Split content into a numbered Twitter/X thread with per-tweet character counting.",
    features: [
      "Auto-split by sentence",
      "280-char per tweet",
      "Auto-numbering",
      "Copy individual tweets",
      "Copy full thread",
    ],
  },
  {
    name: "Instagram Caption Formatter",
    slug: "instagram-caption",
    description: "Format Instagram captions with line breaks and 70+ curated hashtags by niche.",
    features: [
      "Line break separator",
      "70+ hashtags across 7 niches",
      "Custom hashtag input",
      "30-hashtag limit",
      "2200-char counter",
      "Preview",
    ],
  },
  {
    name: "Unicode Text Styler",
    slug: "unicode-text",
    description: "Convert text to 11 Unicode styles: bold, italic, script, fraktur, double-struck, small caps, strikethrough, and more.",
    features: [
      "11 Unicode styles",
      "Real-time preview",
      "Copy individual styles",
      "Works on all major platforms",
    ],
  },
  {
    name: "Post Template Library",
    slug: "post-templates",
    description: "13+ copy-and-paste templates for LinkedIn, Twitter/X, and Instagram posts.",
    features: [
      "13 templates",
      "Filter by platform",
      "Search by category",
      "Click to expand and copy",
    ],
  },
]

export async function GET() {
  return Response.json(
    {
      site: {
        name: siteConfig.name,
        url: siteConfig.baseUrl,
        tagline: siteConfig.tagline,
        description: siteConfig.description,
      },
      tools: tools.map((t) => ({
        name: t.name,
        url: `${siteConfig.baseUrl}/${t.slug}`,
        description: t.description,
        features: t.features,
      })),
      totalTools: tools.length,
      lastUpdated: new Date().toISOString(),
    },
    {
      headers: {
        "Cache-Control": "public, max-age=3600",
        "Access-Control-Allow-Origin": "*",
      },
    }
  )
}
