import type { Metadata } from "next"
import { siteConfig } from "@/site.config"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { RelatedTools } from "../components/RelatedTools"
import { WebAppJsonLd } from "../components/WebAppJsonLd"
import { TemplateLibrary } from "./TemplateLibrary"

export const metadata: Metadata = {
  title: "Social Media Post Templates — LinkedIn, Twitter/X, Instagram",
  description:
    "13+ ready-to-use post templates for LinkedIn, Twitter/X, and Instagram: job announcements, hot takes, hiring posts, thread structures, product launches.",
  keywords: ["social media post templates", "linkedin post templates", "twitter thread templates", "instagram caption templates", "post examples"],
  alternates: { canonical: `${siteConfig.baseUrl}/post-templates` },
  openGraph: {
    title: "Post Template Library | FormatPad",
    description: "13+ copy-and-paste templates for LinkedIn, Twitter/X, and Instagram posts.",
    url: `${siteConfig.baseUrl}/post-templates`,
  },
}

export default function PostTemplatesPage() {
  return (
    <>
      <WebAppJsonLd name="Post Template Library" description="13+ copy-and-paste templates for LinkedIn, Twitter/X, and Instagram." url="/post-templates" />
      <Header />
      <div className="page-header">
        <div className="container">
          <h1>Post Template Library</h1>
          <p style={{ color: "var(--color-text-muted)", maxWidth: 640 }}>
            13+ copy-and-paste templates for LinkedIn, Twitter/X, and Instagram. Each has bracketed placeholders for you to customize.
          </p>
        </div>
      </div>
      <div className="tool-page">
        <div className="container">
          <div className="tool-page-grid">
            <div><TemplateLibrary /></div>
            <div className="tool-sidebar">
              <RelatedTools currentSlug="post-templates" />
              <div className="info-box">
                <h3>Using Templates Well</h3>
                <p style={{ margin: 0 }}>Templates are starting points — not scripts. Replace every bracketed placeholder with something specific to your situation. Generic posts perform worst.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
