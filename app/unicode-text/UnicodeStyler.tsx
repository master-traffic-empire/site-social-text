"use client"

import { useState } from "react"
import { FAQ, type FAQItem } from "../components/FAQ"
import { CopyButton } from "../components/CopyButton"
import { UNICODE_STYLES } from "../lib/unicode"

export function UnicodeStyler({ faqs }: { faqs: FAQItem[] }) {
  const [text, setText] = useState("")

  return (
    <>
      <div className="tool-form">
        <div className="field">
          <label htmlFor="unicode-input">Type or paste text to convert</label>
          <textarea
            id="unicode-input"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Start typing — every style below updates in real time."
            rows={3}
          />
        </div>
      </div>

      <div>
        {UNICODE_STYLES.map((style) => {
          const output = text ? style.fn(text) : style.sample
          const isSample = !text
          return (
            <div key={style.id} className="style-card">
              <div className="style-name">{style.name}</div>
              <div className="style-output" style={{ opacity: isSample ? 0.55 : 1 }}>
                {output}
              </div>
              <CopyButton
                text={output}
                className="copy-btn-inline"
                label={isSample ? "Copy sample" : "Copy"}
              />
            </div>
          )
        })}
      </div>

      <FAQ faqs={faqs} />
    </>
  )
}
