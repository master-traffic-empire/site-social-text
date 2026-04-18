import type { Metadata } from "next"
import { siteConfig } from "@/site.config"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"

export const metadata: Metadata = {
  title: `About — ${siteConfig.name}`,
  description: `About ${siteConfig.name}: 5 free social media text formatters for LinkedIn, Twitter/X, and Instagram. 100% client-side, no signup.`,
  alternates: { canonical: `${siteConfig.baseUrl}/about` },
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <div className="page-header">
        <div className="container">
          <h1>About {siteConfig.name}</h1>
        </div>
      </div>
      <section className="section">
        <div className="container" style={{ maxWidth: 760 }}>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "1rem" }}>
            {siteConfig.name} is a free suite of 5 social media text formatting tools for LinkedIn, Twitter/X, and Instagram. Everything runs entirely in your browser — no signup, no data collection, no server-side processing.
          </p>

          <h2 style={{ marginTop: "2rem" }}>What&apos;s Included</h2>
          <ul style={{ lineHeight: 1.9, paddingLeft: "1.2rem", marginTop: "0.5rem" }}>
            <li><a href="/linkedin-formatter" style={{ color: "var(--color-secondary)" }}>LinkedIn Post Formatter</a> — Unicode bold/italic, bullet styles, 3,000-char counter.</li>
            <li><a href="/twitter-thread" style={{ color: "var(--color-secondary)" }}>Twitter/X Thread Composer</a> — auto-split long posts into 280-char tweets with URL-length awareness.</li>
            <li><a href="/instagram-caption" style={{ color: "var(--color-secondary)" }}>Instagram Caption Formatter</a> — preserved line breaks, 70+ curated hashtags, 30-tag limit.</li>
            <li><a href="/unicode-text" style={{ color: "var(--color-secondary)" }}>Unicode Text Styler</a> — 11 Unicode styles rendered in real time.</li>
            <li><a href="/post-templates" style={{ color: "var(--color-secondary)" }}>Post Template Library</a> — 13+ copy-and-paste templates for all three platforms.</li>
          </ul>

          <h2 style={{ marginTop: "2rem" }}>How It Works</h2>
          <p style={{ lineHeight: 1.8 }}>
            Every tool is a pure client-side React component. Your text, hashtag selections, and template customizations never leave your browser. We use pre-computed Unicode character maps (Mathematical Bold, Mathematical Italic, Script, Fraktur, and more) to convert ASCII letters into their styled Unicode equivalents — characters that survive any copy-paste because they are part of the text itself, not formatting markup.
          </p>

          <h2 style={{ marginTop: "2rem" }}>Part of the Thicket Network</h2>
          <p style={{ lineHeight: 1.8 }}>
            {siteConfig.name} is part of a small family of free utility sites on <a href="https://thicket.sh" style={{ color: "var(--color-secondary)" }}>thicket.sh</a>. Each site does one thing well, with no ads, no signup, and no data collection.
          </p>

          <h2 style={{ marginTop: "2rem" }}>Contact</h2>
          <p style={{ lineHeight: 1.8 }}>
            Feedback, bug reports, or feature ideas welcome — reach us via the Thicket home page.
          </p>
        </div>
      </section>
      <Footer />
    </>
  )
}
