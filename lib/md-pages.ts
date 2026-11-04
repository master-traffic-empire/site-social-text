// lib/md-pages.ts — the pages the .md handler serves with their OWN title and description.
// Moved out of app/api/md/[[...path]]/route.ts unchanged (#91) so llms.txt can list exactly the same
// set; the handler imports it from here. Anything not in this map gets a site-level stub.
import type { Metadata } from "next"
import { metadata as linkedinFormatter } from "@/app/linkedin-formatter/page"
import { metadata as twitterThread } from "@/app/twitter-thread/page"
import { metadata as instagramCaption } from "@/app/instagram-caption/page"
import { metadata as unicodeText } from "@/app/unicode-text/page"
import { metadata as postTemplates } from "@/app/post-templates/page"
import { metadata as about } from "@/app/about/page"
import { metadata as privacy } from "@/app/privacy/page"

export const MD_PAGES: Record<string, Metadata> = {
  "linkedin-formatter": linkedinFormatter,
  "twitter-thread": twitterThread,
  "instagram-caption": instagramCaption,
  "unicode-text": unicodeText,
  "post-templates": postTemplates,
  about: about,
  privacy: privacy,
}
