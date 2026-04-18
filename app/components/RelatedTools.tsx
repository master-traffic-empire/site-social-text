import Link from "next/link"
import { Briefcase, MessageSquare, Camera, Type, LayoutTemplate } from "lucide-react"

const allTools: Record<string, { name: string; icon: React.ReactNode }> = {
  "linkedin-formatter": { name: "LinkedIn Formatter", icon: <Briefcase size={16} /> },
  "twitter-thread": { name: "Twitter Thread", icon: <MessageSquare size={16} /> },
  "instagram-caption": { name: "Instagram Caption", icon: <Camera size={16} /> },
  "unicode-text": { name: "Unicode Styler", icon: <Type size={16} /> },
  "post-templates": { name: "Post Templates", icon: <LayoutTemplate size={16} /> },
}

interface RelatedToolsProps {
  currentSlug: string
  slugs?: string[]
}

export function RelatedTools({ currentSlug, slugs }: RelatedToolsProps) {
  const list = slugs ?? Object.keys(allTools)
  const tools = list.filter((s) => s !== currentSlug).map((s) => ({ slug: s, ...allTools[s] })).filter((t) => t.name)

  return (
    <div className="related-tools">
      <h3>Related Tools</h3>
      {tools.map((tool) => (
        <Link key={tool.slug} href={`/${tool.slug}`}>
          {tool.icon}
          {tool.name}
        </Link>
      ))}
    </div>
  )
}
