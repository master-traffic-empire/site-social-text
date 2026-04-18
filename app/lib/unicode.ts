// Unicode mapping utilities — converts ASCII letters to Unicode styled equivalents.
// LinkedIn/Twitter/Instagram/Discord/Slack all render these as visual bold/italic/etc.

// Helper: given a starting codepoint for "A" and "a", map ASCII → styled Unicode.
function makeMap(capStart: number, lowerStart: number, overrides: Record<string, string> = {}): Record<string, string> {
  const map: Record<string, string> = {}
  for (let i = 0; i < 26; i++) {
    const upper = String.fromCharCode(65 + i)
    const lower = String.fromCharCode(97 + i)
    map[upper] = String.fromCodePoint(capStart + i)
    map[lower] = String.fromCodePoint(lowerStart + i)
  }
  for (const [k, v] of Object.entries(overrides)) {
    map[k] = v
  }
  return map
}

function makeDigitMap(start: number): Record<string, string> {
  const map: Record<string, string> = {}
  for (let i = 0; i < 10; i++) {
    map[String(i)] = String.fromCodePoint(start + i)
  }
  return map
}

// Bold: U+1D400 (A) ... U+1D419 (Z), U+1D41A (a) ... U+1D433 (z). Digits: U+1D7CE.
const BOLD_MAP: Record<string, string> = {
  ...makeMap(0x1d400, 0x1d41a),
  ...makeDigitMap(0x1d7ce),
}

// Italic: A→U+1D434, a→U+1D44E, but "h" is reserved (Planck constant) → use U+210E.
const ITALIC_MAP: Record<string, string> = {
  ...makeMap(0x1d434, 0x1d44e, { h: "\u{210E}" }),
}

// Bold Italic: A→U+1D468, a→U+1D482
const BOLD_ITALIC_MAP: Record<string, string> = makeMap(0x1d468, 0x1d482)

// Script: A→U+1D49C with holes (B,E,F,H,I,L,M,R, e,g,o, etc. are reserved)
// Standard overrides from Unicode letterlike symbols block.
const SCRIPT_MAP: Record<string, string> = {
  ...makeMap(0x1d49c, 0x1d4b6, {
    B: "\u{212C}",
    E: "\u{2130}",
    F: "\u{2131}",
    H: "\u{210B}",
    I: "\u{2110}",
    L: "\u{2112}",
    M: "\u{2133}",
    R: "\u{211B}",
    e: "\u{212F}",
    g: "\u{210A}",
    o: "\u{2134}",
  }),
}

// Bold Script: A→U+1D4D0, a→U+1D4EA
const BOLD_SCRIPT_MAP: Record<string, string> = makeMap(0x1d4d0, 0x1d4ea)

// Fraktur: A→U+1D504, a→U+1D51E (with holes: C,H,I,R,Z reserved → letterlike block)
const FRAKTUR_MAP: Record<string, string> = {
  ...makeMap(0x1d504, 0x1d51e, {
    C: "\u{212D}",
    H: "\u{210C}",
    I: "\u{2111}",
    R: "\u{211C}",
    Z: "\u{2128}",
  }),
}

// Double-struck: A→U+1D538, a→U+1D552 (with holes: C,H,N,P,Q,R,Z reserved)
const DOUBLE_STRUCK_MAP: Record<string, string> = {
  ...makeMap(0x1d538, 0x1d552, {
    C: "\u{2102}",
    H: "\u{210D}",
    N: "\u{2115}",
    P: "\u{2119}",
    Q: "\u{211A}",
    R: "\u{211D}",
    Z: "\u{2124}",
  }),
  ...makeDigitMap(0x1d7d8),
}

// Small caps (lowercase → small capital letters). Uppercase passthrough.
// Sourced from Latin Extended IPA small capital letters.
const SMALL_CAPS_MAP: Record<string, string> = {
  a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ",
  i: "ɪ", j: "ᴊ", k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ", p: "ᴘ",
  q: "ǫ", r: "ʀ", s: "ꜱ", t: "ᴛ", u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x",
  y: "ʏ", z: "ᴢ",
}

// Fullwidth Latin: A→U+FF21, a→U+FF41, 0→U+FF10
const FULLWIDTH_MAP: Record<string, string> = {
  ...makeMap(0xff21, 0xff41),
  ...makeDigitMap(0xff10),
  " ": "\u{3000}",
}

function transform(text: string, map: Record<string, string>): string {
  let out = ""
  for (const ch of text) {
    out += map[ch] ?? ch
  }
  return out
}

// Combining characters: add a combining mark after each visible character.
function combine(text: string, mark: string): string {
  let out = ""
  for (const ch of text) {
    out += ch
    if (ch !== " " && ch !== "\n") out += mark
  }
  return out
}

export function toBold(text: string): string {
  return transform(text, BOLD_MAP)
}

export function toItalic(text: string): string {
  return transform(text, ITALIC_MAP)
}

export function toBoldItalic(text: string): string {
  return transform(text, BOLD_ITALIC_MAP)
}

export function toScript(text: string): string {
  return transform(text, SCRIPT_MAP)
}

export function toBoldScript(text: string): string {
  return transform(text, BOLD_SCRIPT_MAP)
}

export function toFraktur(text: string): string {
  return transform(text, FRAKTUR_MAP)
}

export function toDoubleStruck(text: string): string {
  return transform(text, DOUBLE_STRUCK_MAP)
}

export function toSmallCaps(text: string): string {
  return transform(text, SMALL_CAPS_MAP)
}

export function toFullwidth(text: string): string {
  return transform(text, FULLWIDTH_MAP)
}

export function toStrikethrough(text: string): string {
  return combine(text, "\u{0336}")
}

export function toUnderline(text: string): string {
  return combine(text, "\u{0332}")
}

export const UNICODE_STYLES: { id: string; name: string; sample: string; fn: (s: string) => string }[] = [
  { id: "bold", name: "Bold", sample: "𝗕𝗼𝗹𝗱 𝘁𝗲𝘅𝘁", fn: toBold },
  { id: "italic", name: "Italic", sample: "𝘐𝘵𝘢𝘭𝘪𝘤 𝘵𝘦𝘹𝘵", fn: toItalic },
  { id: "bold-italic", name: "Bold Italic", sample: "𝙁𝙖𝙣𝙘𝙮 𝙩𝙚𝙭𝙩", fn: toBoldItalic },
  { id: "script", name: "Script", sample: "𝒮𝒸𝓇𝒾𝓅𝓉 𝓉𝑒𝓍𝓉", fn: toScript },
  { id: "bold-script", name: "Bold Script", sample: "𝓑𝓸𝓵𝓭 𝓼𝓬𝓻𝓲𝓹𝓽", fn: toBoldScript },
  { id: "fraktur", name: "Fraktur", sample: "𝔉𝔯𝔞𝔨𝔱𝔲𝔯", fn: toFraktur },
  { id: "double-struck", name: "Double-Struck", sample: "𝔻𝕠𝕦𝕓𝕝𝕖 𝕤𝕥𝕣𝕦𝕔𝕜", fn: toDoubleStruck },
  { id: "small-caps", name: "Small Caps", sample: "ꜱᴍᴀʟʟ ᴄᴀᴘꜱ", fn: toSmallCaps },
  { id: "strikethrough", name: "Strikethrough", sample: "S̶t̶r̶i̶k̶e̶", fn: toStrikethrough },
  { id: "underline", name: "Underline", sample: "U̲n̲d̲e̲r̲l̲i̲n̲e̲", fn: toUnderline },
  { id: "fullwidth", name: "Fullwidth", sample: "Ｆｕｌｌｗｉｄｔｈ", fn: toFullwidth },
]
