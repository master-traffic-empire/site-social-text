"use client"

import { useState, useMemo } from "react"
import { CopyButton } from "../components/CopyButton"
import { TEMPLATES, type Platform } from "./templates"

type Filter = "all" | Platform

const FILTERS: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "linkedin", label: "LinkedIn" },
  { id: "twitter", label: "Twitter/X" },
  { id: "instagram", label: "Instagram" },
]

export function TemplateLibrary() {
  const [filter, setFilter] = useState<Filter>("all")
  const [query, setQuery] = useState("")

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase()
    return TEMPLATES.filter((t) => {
      if (filter !== "all" && t.platform !== filter) return false
      if (!q) return true
      return (
        t.title.toLowerCase().includes(q) ||
        t.category.toLowerCase().includes(q) ||
        t.body.toLowerCase().includes(q)
      )
    })
  }, [filter, query])

  return (
    <>
      <div className="tool-form">
        <div className="field">
          <label htmlFor="template-search">Search templates</label>
          <input
            id="template-search"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by title, category, or keyword…"
          />
        </div>

        <div className="field">
          <label>Filter by platform</label>
          <div className="btn-row">
            {FILTERS.map((f) => (
              <button
                key={f.id}
                className={`tool-btn tool-btn-sm ${filter === f.id ? "" : "tool-btn-outline"}`}
                onClick={() => setFilter(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {visible.length === 0 ? (
        <p style={{ color: "var(--color-text-muted)" }}>No templates match your filters.</p>
      ) : (
        visible.map((t) => (
          <div key={t.id} className="template-card">
            <div className="template-card-header">
              <div>
                <span className={`template-card-platform ${t.platform}`}>{t.platform === "twitter" ? "Twitter/X" : t.platform}</span>
                <h3 className="template-card-title" style={{ marginTop: "0.4rem" }}>{t.title}</h3>
                <span style={{ fontSize: "0.8rem", color: "var(--color-text-muted)" }}>{t.category}</span>
              </div>
              <CopyButton text={t.body} className="copy-btn-inline" label="Copy template" />
            </div>
            <div className="template-card-body">{t.body}</div>
          </div>
        ))
      )}
    </>
  )
}
