// site.config.ts — FormatPad social media text formatters
import type { SiteConfig } from "@base/types"

export const siteConfig: SiteConfig = {
  slug: "social-text",
  name: "FormatPad",
  tagline: "Format your social media posts perfectly, every time",
  description:
    "Free social media text formatter suite. Bold and italic text for LinkedIn, Twitter/X thread composer with character counting, Instagram caption formatter with hashtags, Unicode text styler, and post templates. 100% free, client-side, no signup required.",
  domain: "social-text.thicket.sh",
  baseUrl: "https://social-text.thicket.sh",
  category: "utility",

  primaryKeyword: "social media text formatter",
  targetKeywords: [
    "linkedin bold text",
    "linkedin italic text",
    "twitter thread composer",
    "instagram caption formatter",
    "unicode text generator",
    "bold text for linkedin",
    "social media post templates",
    "linkedin formatter",
    "instagram hashtag generator",
    "fancy text generator",
  ],
  twitterHandle: "",

  colors: {
    primary: "#18122B",
    secondary: "#7C3AED",
    accent: "#EC4899",
    surface: "#FAF7FF",
    surfaceDark: "#18122B",
    text: "#1E1B2E",
    textMuted: "#6B6784",
    border: "#E9E3F5",
  },

  fonts: {
    display: "Space Grotesk",
    body: "Inter",
    mono: "JetBrains Mono",
  },

  gaMeasurementId: "G-E0CF8H2DGH",

  itemsPerPage: 24,
  featuredCount: 6,

  geo: {
    llmsTxtEnabled: true,
    llmsFullTxtEnabled: true,
    mdRoutesEnabled: true,
    structuredApiEnabled: true,
  },

  blog: {
    enabled: false,
    basePath: "/blog",
  },

  monetization: {
    adsenseEnabled: false,
    adsenseClientId: "",
    affiliateEnabled: false,
  },
}
