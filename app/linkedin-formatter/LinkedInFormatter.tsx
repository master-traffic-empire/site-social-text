"use client"

import { useState, useRef } from "react"
import { FAQ, type FAQItem } from "../components/FAQ"
import { CopyButton } from "../components/CopyButton"
import { toBold, toItalic, toBoldItalic } from "../lib/unicode"
import { Bold, Italic, Type } from "lucide-react"

const LINKEDIN_LIMIT = 3000

const BULLET_STYLES = [
  { label: "•", char: "• " },
  { label: "→", char: "→ " },
  { label: "✓", char: "✓ " },
  { label: "★", char: "★ " },
  { label: "▸", char: "▸ " },
  { label: "◆", char: "◆ " },
]

export function LinkedInFormatter({ faqs }: { faqs: FAQItem[] }) {
  const [text, setText] = useState("")
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const charCount = text.length
  const warnClass = charCount > LINKEDIN_LIMIT ? "over" : charCount > LINKEDIN_LIMIT * 0.9 ? "warn" : ""

  function applyStyle(fn: (s: string) => string) {
    const ta = textareaRef.current
    if (!ta) return
    const start = ta.selectionStart
    const end = ta.selectionEnd
    if (start === end) return
    const before = text.slice(0, start)
    const selection = text.slice(start, end)
    const after = text.slice(end)
    const styled = fn(selection)
    const newText = before + styled + after
    setText(newText)
    // Re-focus after state updates
    requestAnimationFrame(() => {
      ta.focus()
      ta.setSelectionRange(start, start + styled.length)
    })
  }

  function insertAtCursor(insert: string) {
    const ta = textareaRef.current
    if (!ta) return
    const start = ta.selectionStart
    const end = ta.selectionEnd
    const newText = text.slice(0, start) + insert + text.slice(end)
    setText(newText)
    requestAnimationFrame(() => {
      ta.focus()
      ta.setSelectionRange(start + insert.length, start + insert.length)
    })
  }

  function addLineBreak() {
    insertAtCursor("\n\n")
  }

  return (
    <>
      <div className="tool-form">
        <div className="field">
          <label htmlFor="linkedin-input">Select some text, then click a formatting button</label>

          <div className="format-toolbar">
            <button onClick={() => applyStyle(toBold)} title="Bold selected text">
              <Bold size={14} /> Bold
            </button>
            <button onClick={() => applyStyle(toItalic)} title="Italic selected text">
              <Italic size={14} /> Italic
            </button>
            <button onClick={() => applyStyle(toBoldItalic)} title="Bold Italic">
              <Type size={14} /> Bold Italic
            </button>
            <button onClick={addLineBreak} title="Insert double line break">
              ↵ Break
            </button>
          </div>

          <textarea
            ref={textareaRef}
            id="linkedin-input"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Paste or write your LinkedIn post here. Select any text and click Bold, Italic, or Bold Italic above to convert it to Unicode-styled characters that LinkedIn renders as formatting."
            rows={10}
          />

          <div className={`char-counter ${warnClass}`}>
            <span>{charCount} / {LINKEDIN_LIMIT} characters</span>
            <span>{charCount > LINKEDIN_LIMIT ? `${charCount - LINKEDIN_LIMIT} over limit` : `${LINKEDIN_LIMIT - charCount} remaining`}</span>
          </div>
        </div>

        <div className="field">
          <label>Bullet styles (insert at cursor)</label>
          <div className="btn-row">
            {BULLET_STYLES.map((b) => (
              <button
                key={b.label}
                className="tool-btn tool-btn-sm tool-btn-outline"
                onClick={() => insertAtCursor(b.char)}
              >
                {b.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {text && (
        <div className="result-box">
          <CopyButton text={text} />
          <div className="result-label">Formatted Post — paste directly into LinkedIn</div>
          <pre>{text}</pre>
        </div>
      )}

      {text && (
        <>
          <h2 style={{ fontSize: "1.2rem", margin: "2rem 0 0.75rem" }}>LinkedIn Preview</h2>
          <div className="live-preview">{text}</div>
        </>
      )}

      <FAQ faqs={faqs} />
    </>
  )
}
