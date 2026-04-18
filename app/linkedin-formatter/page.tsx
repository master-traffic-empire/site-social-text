import type { Metadata } from "next"
import { siteConfig } from "@/site.config"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { RelatedTools } from "../components/RelatedTools"
import { FAQJsonLd } from "../components/FAQ"
import { WebAppJsonLd } from "../components/WebAppJsonLd"
import { LinkedInFormatter } from "./LinkedInFormatter"

export const metadata: Metadata = {
  title: "LinkedIn Post Formatter — Bold, Italic & Bullet Points",
  description:
    "Format LinkedIn posts with Unicode bold, italic, and bullet points. Live 3,000-character counter, line-break helper, copy-to-clipboard. 100% free, no signup.",
  keywords: ["linkedin bold text", "linkedin italic text", "linkedin formatter", "linkedin post formatter", "bold text for linkedin"],
  alternates: { canonical: `${siteConfig.baseUrl}/linkedin-formatter` },
  openGraph: {
    title: "LinkedIn Post Formatter — Bold, Italic, Bullets | FormatPad",
    description: "Free LinkedIn post formatter with Unicode bold/italic and 3,000-char counter.",
    url: `${siteConfig.baseUrl}/linkedin-formatter`,
  },
}

const faqs = [
  { question: "Does bold text actually render on LinkedIn?", answer: "Yes. The formatter converts your selected text to Unicode Mathematical Bold characters (a separate Unicode block), which LinkedIn renders as bold-looking text on desktop, iOS, and Android. It works in posts, comments, headlines, and your About section." },
  { question: "Why 3,000 characters?", answer: "3,000 is LinkedIn's current limit for feed posts. Comments are limited to 1,250. The counter turns orange above 2,700 and red if you exceed the limit." },
  { question: "Will my formatting break if someone re-shares my post?", answer: "No. Unicode characters are part of the text itself, not formatting markup — they'll survive any copy, paste, or re-share." },
  { question: "Is Unicode bold accessible to screen readers?", answer: "Some screen readers handle Unicode Mathematical letters poorly. Use bold and italic for emphasis — not for core content that screen-reader users need to hear correctly." },
  { question: "Does my text get stored?", answer: "No. All formatting happens in your browser via JavaScript. Nothing is sent to our servers." },
]

export default function LinkedInFormatterPage() {
  return (
    <>
      <WebAppJsonLd name="LinkedIn Post Formatter" description="Format LinkedIn posts with Unicode bold, italic, bullets, and line breaks." url="/linkedin-formatter" />
      <FAQJsonLd faqs={faqs} />
      <Header />
      <div className="page-header">
        <div className="container">
          <h1>LinkedIn Post Formatter</h1>
          <p style={{ color: "var(--color-text-muted)", maxWidth: 640 }}>
            Format LinkedIn posts with Unicode bold, italic, and bullet points. Select text and click a style button — everything stays in your browser.
          </p>
        </div>
      </div>
      <div className="tool-page">
        <div className="container">
          <div className="tool-page-grid">
            <div><LinkedInFormatter faqs={faqs} /></div>
            <div className="tool-sidebar">
              <RelatedTools currentSlug="linkedin-formatter" />
              <div className="info-box">
                <h3>Pro Tip</h3>
                <p style={{ margin: 0 }}>For a LinkedIn hook, start with a one-line question or statistic on its own line. LinkedIn truncates posts after ~210 characters on desktop and ~140 on mobile — put your strongest line first.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
