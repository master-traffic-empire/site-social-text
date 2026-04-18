"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Sparkles } from "lucide-react"
// NOTE: lucide-react 1.x removed brand icons (Linkedin/Twitter/Instagram).
// We use generic shape icons (Sparkles, Type, LayoutTemplate, MessageSquare, AtSign) instead.
import { siteConfig } from "@/site.config"

const navLinks = [
  { href: "/linkedin-formatter", label: "LinkedIn" },
  { href: "/twitter-thread", label: "Twitter" },
  { href: "/instagram-caption", label: "Instagram" },
  { href: "/unicode-text", label: "Unicode" },
  { href: "/post-templates", label: "Templates" },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="header">
      <div className="container header-inner">
        <Link href="/" className="header-logo" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <Sparkles size={20} />
          {siteConfig.name}
        </Link>
        <button
          className="mobile-menu-btn"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
        <nav className={`header-nav ${open ? "open" : ""}`}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
