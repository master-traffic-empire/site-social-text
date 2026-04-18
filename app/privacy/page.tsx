import type { Metadata } from "next"
import { siteConfig } from "@/site.config"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"

export const metadata: Metadata = {
  title: `Privacy Policy — ${siteConfig.name}`,
  description: `Privacy policy for ${siteConfig.name}. All text processing is client-side; nothing is sent to our servers.`,
  alternates: { canonical: `${siteConfig.baseUrl}/privacy` },
}

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <div className="page-header">
        <div className="container">
          <h1>Privacy Policy</h1>
          <p style={{ color: "var(--color-text-muted)" }}>Last updated: {new Date().toISOString().slice(0, 10)}</p>
        </div>
      </div>
      <section className="section">
        <div className="container" style={{ maxWidth: 760 }}>
          <h2>Short Version</h2>
          <p style={{ lineHeight: 1.8 }}>
            {siteConfig.name} does not collect, store, or transmit the text you enter into any tool. All formatting happens entirely in your browser using JavaScript. There is no account, no login, and no server-side processing of your content.
          </p>

          <h2 style={{ marginTop: "2rem" }}>What We Collect</h2>
          <p style={{ lineHeight: 1.8 }}>
            We use Google Analytics 4 to measure anonymous, aggregated page views so we know which tools are useful. GA4 captures things like page path, referring site, general country/region, browser, and device type — but not your input text, your selected hashtags, or your templates.
          </p>
          <p style={{ lineHeight: 1.8 }}>
            We do not use advertising cookies, affiliate-tracking scripts, or any third-party pixel beyond GA4.
          </p>

          <h2 style={{ marginTop: "2rem" }}>Cookies</h2>
          <p style={{ lineHeight: 1.8 }}>
            GA4 sets cookies with a short retention window. You can block or delete them via your browser settings with no effect on tool functionality — the formatters work offline after the page loads.
          </p>

          <h2 style={{ marginTop: "2rem" }}>Your Rights</h2>
          <p style={{ lineHeight: 1.8 }}>
            Because we don&apos;t store personal content, there is nothing for you to request, export, or delete. To opt out of GA4 analytics, use your browser&apos;s &quot;Do Not Track&quot; setting or a browser extension that blocks analytics scripts.
          </p>

          <h2 style={{ marginTop: "2rem" }}>Changes</h2>
          <p style={{ lineHeight: 1.8 }}>
            If we ever change how data is handled, we&apos;ll update this page and revise the &quot;Last updated&quot; date above.
          </p>

          <h2 style={{ marginTop: "2rem" }}>Contact</h2>
          <p style={{ lineHeight: 1.8 }}>
            Privacy questions or requests: reach us via the <a href="https://thicket.sh" style={{ color: "var(--color-secondary)" }}>thicket.sh</a> home page.
          </p>
        </div>
      </section>
      <Footer />
    </>
  )
}
