import Link from "next/link"
import { siteConfig } from "@/site.config"

const toolLinks = [
  { href: "/linkedin-formatter", label: "LinkedIn Formatter" },
  { href: "/twitter-thread", label: "Twitter Thread Composer" },
  { href: "/instagram-caption", label: "Instagram Caption" },
  { href: "/unicode-text", label: "Unicode Text Styler" },
  { href: "/post-templates", label: "Post Templates" },
]

const siteLinks = [
  { href: "/about", label: "About" },
  { href: "/privacy", label: "Privacy" },
]

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "2rem", marginBottom: "2rem" }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: "1.1rem", color: "#fff", marginBottom: "0.5rem" }}>
              {siteConfig.name}
            </div>
            <p style={{ margin: 0 }}>{siteConfig.tagline}</p>
          </div>
          <div>
            <div style={{ fontWeight: 600, color: "rgba(255,255,255,0.8)", marginBottom: "0.5rem", fontSize: "0.9rem" }}>
              Tools
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.3rem 1rem" }}>
              {toolLinks.map((link) => (
                <Link key={link.href} href={link.href} style={{ fontSize: "0.85rem" }}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "1.25rem", marginBottom: "0.75rem" }}>
          <div style={{ fontWeight: 600, color: "rgba(255,255,255,0.7)", fontSize: "0.8rem", marginBottom: "0.6rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
            Site
          </div>
          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", marginBottom: "1rem" }}>
            {siteLinks.map((link) => (
              <Link key={link.href} href={link.href} style={{ fontSize: "0.85rem" }}>
                {link.label}
              </Link>
            ))}
          </div>
          <div style={{ fontWeight: 600, color: "rgba(255,255,255,0.7)", fontSize: "0.8rem", marginBottom: "0.6rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
            Also Try
          </div>
          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
            <a href="https://text.thicket.sh" style={{ fontSize: "0.85rem" }}>TextKit — Text Tools</a>
            <a href="https://pdf.thicket.sh" style={{ fontSize: "0.85rem" }}>DocForge — PDF Tools</a>
            <a href="https://img.thicket.sh" style={{ fontSize: "0.85rem" }}>Pixelry — Image Tools</a>
            <a href="https://qr.thicket.sh" style={{ fontSize: "0.85rem" }}>QRForge — QR Code Generator</a>
          </div>
        </div>
        <div className="footer-inner" style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "1.5rem" }}>
          <span>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</span>
          <span>Free social media formatters. No signup.</span>
        </div>
      </div>
    </footer>
  )
}
