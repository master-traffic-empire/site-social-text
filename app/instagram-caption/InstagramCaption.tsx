"use client"

import { useState, useMemo } from "react"
import { FAQ, type FAQItem } from "../components/FAQ"
import { CopyButton } from "../components/CopyButton"
import { HASHTAG_NICHES, MAX_HASHTAGS } from "./hashtags"
import { X } from "lucide-react"

const IG_LIMIT = 2200

// Instagram collapses consecutive blank lines — insert an invisible char (U+2063, invisible separator)
// on blank lines so the break is preserved.
const INVISIBLE = "\u{2063}"

function applyLineBreakFix(text: string): string {
  return text
    .split("\n")
    .map((line) => (line.trim() === "" ? `.${INVISIBLE}` : line))
    .join("\n")
}

export function InstagramCaption({ faqs }: { faqs: FAQItem[] }) {
  const [caption, setCaption] = useState("")
  const [lineBreakFix, setLineBreakFix] = useState(true)
  const [selected, setSelected] = useState<string[]>([])
  const [customTag, setCustomTag] = useState("")

  const captionFinal = lineBreakFix ? applyLineBreakFix(caption) : caption
  const hashtagBlock = selected.length > 0 ? "\n\n.\n.\n.\n" + selected.map((t) => `#${t}`).join(" ") : ""
  const fullOutput = captionFinal + hashtagBlock
  const charCount = [...fullOutput].length
  const warnClass = charCount > IG_LIMIT ? "over" : charCount > IG_LIMIT * 0.9 ? "warn" : ""

  function toggleTag(tag: string) {
    setSelected((prev) => {
      if (prev.includes(tag)) return prev.filter((t) => t !== tag)
      if (prev.length >= MAX_HASHTAGS) return prev
      return [...prev, tag]
    })
  }

  function addCustomTag() {
    const cleaned = customTag.trim().replace(/^#+/, "").replace(/\s+/g, "")
    if (!cleaned) return
    if (selected.length >= MAX_HASHTAGS) return
    if (selected.includes(cleaned)) {
      setCustomTag("")
      return
    }
    setSelected((prev) => [...prev, cleaned])
    setCustomTag("")
  }

  function handleCustomKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.preventDefault()
      addCustomTag()
    }
  }

  const allSelectedSet = useMemo(() => new Set(selected), [selected])
  const remainingSlots = MAX_HASHTAGS - selected.length

  return (
    <>
      <div className="tool-form">
        <div className="field">
          <label htmlFor="caption-input">Write your Instagram caption</label>
          <textarea
            id="caption-input"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            placeholder="Write your caption here. Empty lines will be preserved for clean spacing on Instagram."
            rows={8}
          />
          <div className={`char-counter ${warnClass}`}>
            <span>{charCount} / {IG_LIMIT} characters (with hashtags)</span>
            <span>{charCount > IG_LIMIT ? `${charCount - IG_LIMIT} over limit` : `${IG_LIMIT - charCount} remaining`}</span>
          </div>
        </div>

        <div className="field">
          <label style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9rem", cursor: "pointer" }}>
            <input
              type="checkbox"
              checked={lineBreakFix}
              onChange={(e) => setLineBreakFix(e.target.checked)}
              style={{ width: "auto", marginRight: 0 }}
            />
            Preserve line breaks (adds invisible separator on blank lines)
          </label>
        </div>
      </div>

      <div className="tool-form">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem", flexWrap: "wrap", gap: "0.5rem" }}>
          <h2 style={{ fontSize: "1.1rem", margin: 0 }}>Hashtags</h2>
          <span style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>
            {selected.length} / {MAX_HASHTAGS} selected · {remainingSlots} remaining
          </span>
        </div>

        {selected.length > 0 && (
          <div className="field">
            <label>Selected</label>
            <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
              {selected.map((tag) => (
                <span key={tag} className="hashtag-pill selected">
                  #{tag}
                  <button onClick={() => toggleTag(tag)} aria-label={`Remove #${tag}`}>
                    <X size={12} />
                  </button>
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="field">
          <label htmlFor="custom-tag">Add a custom hashtag</label>
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <input
              id="custom-tag"
              type="text"
              value={customTag}
              onChange={(e) => setCustomTag(e.target.value)}
              onKeyDown={handleCustomKeyDown}
              placeholder="e.g. photography"
              disabled={selected.length >= MAX_HASHTAGS}
            />
            <button
              className="tool-btn"
              onClick={addCustomTag}
              disabled={selected.length >= MAX_HASHTAGS || !customTag.trim()}
            >
              Add
            </button>
          </div>
        </div>

        {HASHTAG_NICHES.map((niche) => (
          <div key={niche.name} className="field">
            <label>{niche.name}</label>
            <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
              {niche.tags.map((tag) => {
                const isSelected = allSelectedSet.has(tag)
                const disabled = !isSelected && selected.length >= MAX_HASHTAGS
                return (
                  <span
                    key={tag}
                    className={`hashtag-pill ${isSelected ? "selected" : ""}`}
                    onClick={() => !disabled && toggleTag(tag)}
                    style={{ opacity: disabled ? 0.4 : 1, pointerEvents: disabled ? "none" : "auto" }}
                  >
                    #{tag}
                  </span>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      {fullOutput.trim() && (
        <div className="result-box">
          <CopyButton text={fullOutput} />
          <div className="result-label">Caption + hashtags — paste directly into Instagram</div>
          <pre>{fullOutput}</pre>
        </div>
      )}

      <FAQ faqs={faqs} />
    </>
  )
}
