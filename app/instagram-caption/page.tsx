import type { Metadata } from "next"
import { siteConfig } from "@/site.config"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { RelatedTools } from "../components/RelatedTools"
import { FAQJsonLd } from "../components/FAQ"
import { WebAppJsonLd } from "../components/WebAppJsonLd"
import { InstagramCaption } from "./InstagramCaption"

export const metadata: Metadata = {
  title: "Instagram Caption Formatter — Line Breaks & 70+ Hashtags",
  description:
    "Format Instagram captions with preserved line breaks and curated hashtags across 7 niches. 2,200-char counter, 30-tag limit enforced, one-click copy.",
  keywords: ["instagram caption formatter", "instagram hashtag generator", "instagram line break", "instagram caption spacing", "hashtags for instagram"],
  alternates: { canonical: `${siteConfig.baseUrl}/instagram-caption` },
  openGraph: {
    title: "Instagram Caption Formatter | FormatPad",
    description: "Line-break-friendly Instagram caption formatter with 70+ curated hashtags.",
    url: `${siteConfig.baseUrl}/instagram-caption`,
  },
}

const faqs = [
  { question: "Why does Instagram collapse my line breaks?", answer: "Instagram's editor strips consecutive empty lines and trailing spaces when you paste. To preserve spacing, we insert an invisible separator character (U+2063) on blank lines so the visual break survives." },
  { question: "Why 30 hashtags?", answer: "Instagram's per-post hashtag limit is 30. Anything beyond that gets silently dropped. The tool enforces the limit and shows how many slots are left." },
  { question: "Where should I put hashtags — in the caption or a comment?", answer: "Current Instagram advice (2026) is to put hashtags directly in the caption for best reach, separated from the main text by a line break and a few dots. The tool formats the output that way automatically." },
  { question: "Can I add my own hashtags?", answer: "Yes. Type any tag in the custom input (no need to include #) and press Enter or click Add. It's added to your selection and counted toward the 30-tag limit." },
  { question: "Do you store any data?", answer: "No. All text and selections live in your browser only. Nothing is sent anywhere." },
]

export default function InstagramCaptionPage() {
  return (
    <>
      <WebAppJsonLd name="Instagram Caption Formatter" description="Format Instagram captions with line breaks and curated hashtags." url="/instagram-caption" />
      <FAQJsonLd faqs={faqs} />
      <Header />
      <div className="page-header">
        <div className="container">
          <h1>Instagram Caption Formatter</h1>
          <p style={{ color: "var(--color-text-muted)", maxWidth: 640 }}>
            Write a caption with clean line breaks, pick up to 30 hashtags from 7 curated niches, and copy the whole thing at once.
          </p>
        </div>
      </div>
      <div className="tool-page">
        <div className="container">
          <div className="tool-page-grid">
            <div><InstagramCaption faqs={faqs} /></div>
            <div className="tool-sidebar">
              <RelatedTools currentSlug="instagram-caption" />
              <div className="info-box">
                <h3>Hashtag Strategy</h3>
                <p style={{ margin: 0 }}>Mix big + mid + niche tags. 5-8 huge tags (&gt;1M uses) get you discovered; 10-15 mid (100K-1M) build traction; 5-10 niche (&lt;100K) convert the right audience.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
