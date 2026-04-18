import Link from "next/link"
import { ArrowRight, Briefcase, MessageSquare, Camera, Type, LayoutTemplate } from "lucide-react"

const tools = [
  { slug: "linkedin-formatter", name: "LinkedIn Formatter", desc: "Bold, italic, and bullet-style LinkedIn posts with Unicode. Includes a 3,000-character counter.", icon: <Briefcase size={28} /> },
  { slug: "twitter-thread", name: "Twitter/X Thread Composer", desc: "Split long posts into numbered tweets under 280 characters. Copy individually or all at once.", icon: <MessageSquare size={28} /> },
  { slug: "instagram-caption", name: "Instagram Caption Formatter", desc: "Clean line breaks, 2,200-char counter, and 70+ curated hashtags across 7 niches.", icon: <Camera size={28} /> },
  { slug: "unicode-text", name: "Unicode Text Styler", desc: "Convert any text into 11 Unicode styles: bold, italic, script, fraktur, small caps, and more.", icon: <Type size={28} /> },
  { slug: "post-templates", name: "Post Template Library", desc: "13+ ready-to-use post templates for LinkedIn, Twitter, and Instagram.", icon: <LayoutTemplate size={28} /> },
]

export function ToolGrid() {
  return (
    <div className="tool-grid">
      {tools.map((tool) => (
        <Link key={tool.slug} href={`/${tool.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
          <div className="tool-card">
            <div className="tool-card-icon">{tool.icon}</div>
            <h3>{tool.name}</h3>
            <p>{tool.desc}</p>
            <span className="card-arrow">
              Open tool <ArrowRight size={14} />
            </span>
          </div>
        </Link>
      ))}
    </div>
  )
}
