import type { Metadata } from "next"
import { siteConfig } from "@/site.config"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { RelatedTools } from "../components/RelatedTools"
import { FAQJsonLd } from "../components/FAQ"
import { WebAppJsonLd } from "../components/WebAppJsonLd"
import { UnicodeStyler } from "./UnicodeStyler"

export const metadata: Metadata = {
  title: "Unicode Text Styler — Bold, Italic, Fraktur, Small Caps & More",
  description:
    "Convert any text into 11 Unicode styles: bold, italic, script, fraktur, double-struck, small caps, strikethrough, underline, fullwidth. Works on LinkedIn, Twitter, Instagram, Discord.",
  keywords: ["unicode text generator", "fancy text generator", "bold text converter", "italic text converter", "fraktur text", "small caps converter"],
  alternates: { canonical: `${siteConfig.baseUrl}/unicode-text` },
  openGraph: {
    title: "Unicode Text Styler | FormatPad",
    description: "Convert any text into 11 Unicode typographic styles. Copy-ready.",
    url: `${siteConfig.baseUrl}/unicode-text`,
  },
}

const faqs = [
  { question: "How is this different from the LinkedIn formatter?", answer: "The LinkedIn formatter is a focused editor with a character counter and LinkedIn-specific helpers. This styler is a playground — pick from all 11 Unicode styles, see every rendering at once, copy any one." },
  { question: "Where does Unicode bold/italic work?", answer: "LinkedIn, Twitter/X, Instagram, Facebook, Discord, Slack, WhatsApp, YouTube comments, Reddit, Bluesky, Mastodon — anywhere Unicode text is preserved. It won't work if the platform strips non-ASCII characters (rare)." },
  { question: "Why is strikethrough/underline different from the others?", answer: "Those two use combining characters — an invisible overlay that attaches to the preceding letter. Most Unicode styles use entirely separate codepoints (bold A is U+1D400, not A + anything)." },
  { question: "Will screen readers read styled text correctly?", answer: "Often not. Assistive tech may spell out Unicode Mathematical letters one by one. Use styled text for emphasis, not your core message." },
  { question: "Are any letters missing from some styles?", answer: "A few Unicode blocks have 'holes' where a letter was reserved for mathematical use and lives in the Letterlike Symbols block instead. The tool substitutes these automatically (e.g. italic 'h' uses U+210E, the Planck constant symbol)." },
]

export default function UnicodeTextPage() {
  return (
    <>
      <WebAppJsonLd name="Unicode Text Styler" description="Convert any text into 11 Unicode typographic styles." url="/unicode-text" />
      <FAQJsonLd faqs={faqs} />
      <Header />
      <div className="page-header">
        <div className="container">
          <h1>Unicode Text Styler</h1>
          <p style={{ color: "var(--color-text-muted)", maxWidth: 640 }}>
            Type once, see 11 Unicode styles render live: bold, italic, script, fraktur, double-struck, small caps, and more.
          </p>
        </div>
      </div>
      <div className="tool-page">
        <div className="container">
          <div className="tool-page-grid">
            <div><UnicodeStyler faqs={faqs} /></div>
            <div className="tool-sidebar">
              <RelatedTools currentSlug="unicode-text" />
              <div className="info-box">
                <h3>Heads Up</h3>
                <p style={{ margin: 0 }}>Unicode styles are for emphasis, not accessibility. Screen readers can&apos;t always pronounce them correctly — keep your main message in plain text.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
