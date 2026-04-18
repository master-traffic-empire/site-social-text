import type { Metadata } from "next"
import { siteConfig } from "@/site.config"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { RelatedTools } from "../components/RelatedTools"
import { FAQJsonLd } from "../components/FAQ"
import { WebAppJsonLd } from "../components/WebAppJsonLd"
import { ThreadComposer } from "./ThreadComposer"

export const metadata: Metadata = {
  title: "Twitter/X Thread Composer — Auto-Split Into 280-Char Tweets",
  description:
    "Split long posts into numbered Twitter/X threads. Per-tweet character counter, auto-numbering, copy individual tweets or the full thread. URL-length aware.",
  keywords: ["twitter thread composer", "thread maker", "twitter thread splitter", "280 character splitter", "x thread tool"],
  alternates: { canonical: `${siteConfig.baseUrl}/twitter-thread` },
  openGraph: {
    title: "Twitter/X Thread Composer | FormatPad",
    description: "Auto-split long posts into numbered Twitter threads under 280 chars each.",
    url: `${siteConfig.baseUrl}/twitter-thread`,
  },
}

const faqs = [
  { question: "How does the splitter decide where to break tweets?", answer: "The composer first respects your explicit breaks (double newlines). Within each paragraph, it splits on sentence boundaries (.!?) and only falls back to word-level splitting if a single sentence is longer than 280 characters." },
  { question: "How are URLs counted?", answer: "Twitter/X wraps every link through t.co, which shortens URLs to exactly 23 characters regardless of the original length. The counter follows this rule so your tweets never exceed the real limit." },
  { question: "What does (1/N) numbering do?", answer: "When enabled, the composer reserves ~7 characters per tweet for the prefix (e.g. '(1/10) ') and prepends it after splitting. Numbering makes threads easier to read on mobile and signals the total length." },
  { question: "Does this tool post to Twitter for me?", answer: "No. It's a composer/splitter only. Copy each tweet and paste it into Twitter/X, or copy the full thread as one block." },
  { question: "Can I use this for Mastodon or Bluesky?", answer: "The splitter works — just note that Mastodon's default limit is 500 chars and Bluesky's is 300. Bluesky doesn't auto-shorten URLs. For strict matches, use our logic as a guide and adjust manually." },
]

export default function TwitterThreadPage() {
  return (
    <>
      <WebAppJsonLd name="Twitter/X Thread Composer" description="Auto-split long posts into numbered 280-character tweets." url="/twitter-thread" />
      <FAQJsonLd faqs={faqs} />
      <Header />
      <div className="page-header">
        <div className="container">
          <h1>Twitter/X Thread Composer</h1>
          <p style={{ color: "var(--color-text-muted)", maxWidth: 640 }}>
            Paste a long-form post. Get a ready-to-tweet thread — auto-split, numbered, and character-counted.
          </p>
        </div>
      </div>
      <div className="tool-page">
        <div className="container">
          <div className="tool-page-grid">
            <div><ThreadComposer faqs={faqs} /></div>
            <div className="tool-sidebar">
              <RelatedTools currentSlug="twitter-thread" />
              <div className="info-box">
                <h3>Thread Tip</h3>
                <p style={{ margin: 0 }}>Your first tweet is the hook — it&apos;s what decides whether anyone reads the rest. Put the strongest one-liner, statistic, or question there.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
