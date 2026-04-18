"use client"

import { useState, useMemo } from "react"
import { FAQ, type FAQItem } from "../components/FAQ"
import { CopyButton } from "../components/CopyButton"

const TWEET_LIMIT = 280
const TCO_LENGTH = 23 // t.co shortens any URL to this effective length

// Count characters the Twitter way: URLs count as 23 chars.
function twitterCharCount(text: string): number {
  const urlRegex = /\bhttps?:\/\/[^\s]+/gi
  const urls = text.match(urlRegex) ?? []
  let adjusted = text
  for (const u of urls) {
    adjusted = adjusted.replace(u, "x".repeat(TCO_LENGTH))
  }
  return [...adjusted].length
}

function splitIntoTweets(text: string, numbered: boolean): string[] {
  if (!text.trim()) return []

  // First split on explicit paragraph breaks (double newline) — user-forced tweet boundaries.
  const paragraphs = text.split(/\n{2,}/).map((p) => p.trim()).filter(Boolean)

  // Reserve space for "(n/N) " prefix when numbering is enabled.
  // We'll do a first pass without numbering, then add numbers knowing the final count.
  const overhead = numbered ? 7 : 0 // e.g. "(10/10) " worst case ≈ 7 chars
  const limit = TWEET_LIMIT - overhead

  const tweets: string[] = []

  for (const para of paragraphs) {
    if (twitterCharCount(para) <= limit) {
      tweets.push(para)
      continue
    }
    // Split by sentence boundaries first, then chunks if any single sentence is too long.
    const sentences = para.match(/[^.!?]+[.!?]+(\s|$)|[^.!?]+$/g) ?? [para]
    let buf = ""
    for (const rawSentence of sentences) {
      const s = rawSentence.trim()
      if (!s) continue
      if (twitterCharCount(s) > limit) {
        // Flush buffer first
        if (buf) {
          tweets.push(buf.trim())
          buf = ""
        }
        // Hard-split this sentence on word boundaries
        const words = s.split(/\s+/)
        let chunk = ""
        for (const w of words) {
          const tentative = chunk ? `${chunk} ${w}` : w
          if (twitterCharCount(tentative) > limit) {
            if (chunk) tweets.push(chunk)
            chunk = w
          } else {
            chunk = tentative
          }
        }
        if (chunk) tweets.push(chunk)
      } else {
        const tentative = buf ? `${buf} ${s}` : s
        if (twitterCharCount(tentative) > limit) {
          if (buf) tweets.push(buf.trim())
          buf = s
        } else {
          buf = tentative
        }
      }
    }
    if (buf.trim()) tweets.push(buf.trim())
  }

  if (!numbered) return tweets
  const total = tweets.length
  return tweets.map((t, i) => `(${i + 1}/${total}) ${t}`)
}

export function ThreadComposer({ faqs }: { faqs: FAQItem[] }) {
  const [text, setText] = useState("")
  const [numbered, setNumbered] = useState(true)

  const tweets = useMemo(() => splitIntoTweets(text, numbered), [text, numbered])

  const totalChars = [...text].length
  const fullThreadText = tweets.join("\n\n---\n\n")

  return (
    <>
      <div className="tool-form">
        <div className="field">
          <label htmlFor="thread-input">Write or paste your long-form post</label>
          <textarea
            id="thread-input"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Write your full post here. The composer will auto-split it into tweets of 280 characters or less. Use a double newline to force a tweet break."
            rows={10}
          />
          <div className="char-counter">
            <span>{totalChars} input characters · {tweets.length} tweet{tweets.length === 1 ? "" : "s"}</span>
            <span>URLs count as {TCO_LENGTH} chars (t.co)</span>
          </div>
        </div>

        <div className="field">
          <label style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9rem", cursor: "pointer" }}>
            <input
              type="checkbox"
              checked={numbered}
              onChange={(e) => setNumbered(e.target.checked)}
              style={{ width: "auto", marginRight: 0 }}
            />
            Auto-number tweets (1/N)
          </label>
        </div>
      </div>

      {tweets.length > 0 && (
        <>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem", gap: "1rem", flexWrap: "wrap" }}>
            <h2 style={{ fontSize: "1.2rem", margin: 0 }}>Your Thread ({tweets.length} tweets)</h2>
            <CopyButton text={fullThreadText} className="copy-btn-inline" label="Copy full thread" />
          </div>

          {tweets.map((tweet, i) => {
            const chars = twitterCharCount(tweet)
            const over = chars > TWEET_LIMIT
            return (
              <div key={i} className="tweet-card">
                <div className="tweet-header">
                  <span className="tweet-number">Tweet {i + 1} of {tweets.length}</span>
                  <span className={`tweet-chars ${over ? "over" : ""}`}>
                    {chars} / {TWEET_LIMIT}
                  </span>
                </div>
                <pre>{tweet}</pre>
                <div style={{ marginTop: "0.5rem" }}>
                  <CopyButton text={tweet} className="copy-btn-inline" label="Copy tweet" />
                </div>
              </div>
            )
          })}
        </>
      )}

      <FAQ faqs={faqs} />
    </>
  )
}
