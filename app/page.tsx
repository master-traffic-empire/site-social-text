import { siteConfig } from "@/site.config"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { ToolGrid } from "./components/ToolGrid"
import { Zap, Lock, Smartphone, Wrench, UserX, ShieldCheck } from "lucide-react"

export default function Home() {
  return (
    <>
      <Header />
      <section className="hero">
        <div className="container">
          <h1>{siteConfig.name}</h1>
          <p>{siteConfig.tagline}</p>
          <p style={{ fontSize: "1rem", opacity: 0.7, maxWidth: 620, margin: "0 auto" }}>
            5 free tools to format posts perfectly for LinkedIn, Twitter/X, and Instagram. Everything runs in your browser — no signup, no data leaves your device.
          </p>
        </div>
      </section>

      <div className="trust-bar">
        <span className="trust-bar-item"><Wrench size={18} /> 5 Free Formatters</span>
        <span className="trust-bar-item"><UserX size={18} /> No Signup Required</span>
        <span className="trust-bar-item"><ShieldCheck size={18} /> 100% Client-Side</span>
      </div>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>All Tools</h2>
          </div>
          <ToolGrid />
        </div>
      </section>

      <section className="section" style={{ background: "var(--color-surface)" }}>
        <div className="container">
          <h2 style={{ marginBottom: "1.5rem" }}>Why {siteConfig.name}?</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.5rem" }}>
            <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
              <Zap size={24} style={{ color: "var(--color-secondary)", flexShrink: 0, marginTop: 2 }} />
              <div>
                <h3 style={{ marginBottom: "0.5rem" }}>Instant Results</h3>
                <p style={{ fontSize: "0.93rem", color: "var(--color-text-muted)" }}>
                  Every tool processes your input in real time. No loading spinners, no server round-trips.
                </p>
              </div>
            </div>
            <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
              <Lock size={24} style={{ color: "var(--color-secondary)", flexShrink: 0, marginTop: 2 }} />
              <div>
                <h3 style={{ marginBottom: "0.5rem" }}>100% Client-Side</h3>
                <p style={{ fontSize: "0.93rem", color: "var(--color-text-muted)" }}>
                  All processing happens in your browser. Your text never touches a server. No accounts, no tracking.
                </p>
              </div>
            </div>
            <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
              <Smartphone size={24} style={{ color: "var(--color-secondary)", flexShrink: 0, marginTop: 2 }} />
              <div>
                <h3 style={{ marginBottom: "0.5rem" }}>Works Everywhere</h3>
                <p style={{ fontSize: "0.93rem", color: "var(--color-text-muted)" }}>
                  Responsive design for desktop, tablet, and phone. Copy-to-clipboard on every output.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Educational content */}
      <section style={{ padding: "4rem 0", background: "var(--color-surface)" }}>
        <div className="container" style={{ maxWidth: "860px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, marginBottom: "1.5rem" }}>How Unicode-Based Formatting Works on Social Media</h2>
          <p style={{ lineHeight: 1.8, color: "var(--color-text)", marginBottom: "1rem" }}>
            Most major social platforms — LinkedIn, Twitter/X, Instagram, Facebook, Discord, Slack, WhatsApp — strip traditional formatting like <code>&lt;b&gt;</code> tags or Markdown syntax from the text you paste. So how do creators make posts with bold or italic text? They use <strong>Unicode</strong>.
          </p>
          <p style={{ lineHeight: 1.8, color: "var(--color-text)", marginBottom: "1rem" }}>
            Unicode includes a <em>Mathematical Alphanumeric Symbols</em> block that defines separate codepoints for bold A-Z (U+1D400–U+1D419), italic A-Z (U+1D434+), double-struck, fraktur, script, and more. These are technically characters in their own right — not formatting — so they survive any copy-paste anywhere. The platform sees &quot;𝗵𝗲𝗹𝗹𝗼&quot; as exactly those Unicode characters and renders them as bold-looking text even though the post itself has no formatting markup.
          </p>
          <p style={{ lineHeight: 1.8, color: "var(--color-text)", marginBottom: "2.5rem" }}>
            Our <a href="/linkedin-formatter" style={{ color: "var(--color-secondary)", textDecoration: "underline" }}>LinkedIn Formatter</a>, <a href="/unicode-text" style={{ color: "var(--color-secondary)", textDecoration: "underline" }}>Unicode Text Styler</a>, and <a href="/instagram-caption" style={{ color: "var(--color-secondary)", textDecoration: "underline" }}>Instagram Caption Formatter</a> all use these mappings. One caveat: screen readers don&apos;t always handle these characters well, so use Unicode styling for emphasis, not for core content.
          </p>

          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, marginBottom: "1.5rem" }}>Character Limits Across Platforms</h2>
          <p style={{ lineHeight: 1.8, color: "var(--color-text)", marginBottom: "0.75rem" }}>
            <strong>LinkedIn</strong> posts: 3,000 characters. Comments: 1,250. URLs count their actual length — LinkedIn doesn&apos;t shorten them.
          </p>
          <p style={{ lineHeight: 1.8, color: "var(--color-text)", marginBottom: "0.75rem" }}>
            <strong>Twitter/X</strong> tweets: 280 characters (free), 25,000 (premium). URLs are always counted as 23 characters (t.co wraps them). A Unicode bold character may count as 1 or 2 depending on the codepoint.
          </p>
          <p style={{ lineHeight: 1.8, color: "var(--color-text)", marginBottom: "0.75rem" }}>
            <strong>Instagram</strong> captions: 2,200 characters (only first ~125 are visible before the &quot;more&quot;). Up to 30 hashtags per post (Instagram demotes &quot;banned&quot; or overused tags).
          </p>
          <p style={{ lineHeight: 1.8, color: "var(--color-text)" }}>
            Use our <a href="/twitter-thread" style={{ color: "var(--color-secondary)", textDecoration: "underline" }}>Twitter Thread Composer</a> to auto-split long content into 280-char tweets, or the <a href="/instagram-caption" style={{ color: "var(--color-secondary)", textDecoration: "underline" }}>Instagram Caption Formatter</a> to pack hashtags without breaking the 30-tag rule.
          </p>
        </div>
      </section>

      <Footer />
    </>
  )
}
