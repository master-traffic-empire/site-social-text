export type Platform = "linkedin" | "twitter" | "instagram"

export interface PostTemplate {
  id: string
  title: string
  platform: Platform
  category: string
  body: string
}

export const TEMPLATES: PostTemplate[] = [
  // ── LinkedIn ──────────────────────────────────
  {
    id: "li-job-announcement",
    title: "Job Announcement",
    platform: "linkedin",
    category: "Career",
    body: `Excited to share that I'm starting a new chapter as [ROLE] at [COMPANY]!

A huge thank you to [NAME / TEAM] for [WHAT THEY DID]. I'll miss working with you.

At [COMPANY], I'm joining [TEAM / MISSION]. I'm genuinely fired up about [REASON — specific problem or product].

If you're working on [ADJACENT AREA], I'd love to hear from you.

[HASHTAG] [HASHTAG]`,
  },
  {
    id: "li-value-how-to",
    title: "Value / How-To Post",
    platform: "linkedin",
    category: "Thought Leadership",
    body: `Here's how I [ACHIEVED SPECIFIC RESULT] in [TIMEFRAME]:

1. [STEP — concrete, one line]
2. [STEP]
3. [STEP]
4. [STEP]
5. [STEP]

The one people skip: [#3]. Most folks try to [COMMON MISTAKE] and wonder why it doesn't work.

What would you add?`,
  },
  {
    id: "li-hot-take",
    title: "Hot Take / Opinion",
    platform: "linkedin",
    category: "Thought Leadership",
    body: `Unpopular opinion: [YOUR TAKE].

Everyone keeps saying [COMMON ADVICE]. But after [YOUR EXPERIENCE / N YEARS / N DATA POINTS], I think that's backwards.

Here's what actually matters:
→ [POINT 1]
→ [POINT 2]
→ [POINT 3]

The best [ROLE / COMPANY / RESULT] I've seen all had one thing in common: [INSIGHT].

Agree or disagree?`,
  },
  {
    id: "li-milestone",
    title: "Milestone / Achievement",
    platform: "linkedin",
    category: "Career",
    body: `[NUMBER] [MILESTONE — e.g. customers, articles, years, revenue].

Hard to believe. [ONE SENTENCE REFLECTION].

Some lessons from the journey:

→ [LESSON 1 — actionable]
→ [LESSON 2]
→ [LESSON 3]

To everyone who helped along the way — [THANK YOU NOTE].

On to the next [GOAL].`,
  },
  {
    id: "li-hiring",
    title: "We're Hiring",
    platform: "linkedin",
    category: "Recruiting",
    body: `We're hiring a [ROLE] at [COMPANY].

What you'll do:
• [RESPONSIBILITY 1]
• [RESPONSIBILITY 2]
• [RESPONSIBILITY 3]

Who we want:
• [TRAIT / SKILL 1]
• [TRAIT / SKILL 2]

Where: [LOCATION or REMOTE]
Comp: [RANGE]

Link in comments. DM me if you're interested or know someone who'd be great.`,
  },

  // ── Twitter / X ───────────────────────────────
  {
    id: "tw-lessons-thread",
    title: "Lessons Thread",
    platform: "twitter",
    category: "Thought Leadership",
    body: `I spent [TIMEFRAME] doing [THING].

Here are [N] lessons I wish I'd learned on day one:

🧵`,
  },
  {
    id: "tw-hot-take",
    title: "Hot Take",
    platform: "twitter",
    category: "Opinion",
    body: `Unpopular opinion:

[YOUR TAKE IN ONE SENTENCE].

Everyone tells you [COMMON ADVICE]. In my experience, the opposite is true — because [REASON].`,
  },
  {
    id: "tw-behind-scenes",
    title: "Behind the Scenes",
    platform: "twitter",
    category: "Storytelling",
    body: `People think [BIG VISIBLE THING] is [ASSUMED REASON].

Behind the scenes, what actually happened:

[1-3 concrete facts].

Don't let the highlight reel fool you.`,
  },
  {
    id: "tw-resource-list",
    title: "Resource List",
    platform: "twitter",
    category: "Value",
    body: `Best free resources for [TOPIC] (bookmark this):

1. [RESOURCE] — [ONE-LINE WHY]
2. [RESOURCE] — [WHY]
3. [RESOURCE] — [WHY]
4. [RESOURCE] — [WHY]
5. [RESOURCE] — [WHY]

If you'd add something, drop it below.`,
  },

  // ── Instagram ─────────────────────────────────
  {
    id: "ig-product-launch",
    title: "Product Launch",
    platform: "instagram",
    category: "Marketing",
    body: `[PRODUCT NAME] is here 🎉

After [TIMEFRAME] of building, we're finally opening [PRODUCT] to the world.

Here's what it does:
→ [BENEFIT 1]
→ [BENEFIT 2]
→ [BENEFIT 3]

Who it's for: [AUDIENCE].

Link in bio to try it. Would love your thoughts 🙏

.
.
.
#[TAG] #[TAG] #[TAG]`,
  },
  {
    id: "ig-lifestyle",
    title: "Lifestyle / Day in the Life",
    platform: "instagram",
    category: "Personal",
    body: `A [DAY/WEEK] in the life of a [YOUR ROLE / LIFESTYLE] ✨

🌅 [MORNING ACTIVITY]
☕ [WORK / CREATIVE BLOCK]
🥗 [MIDDAY]
💪 [AFTERNOON]
🌙 [EVENING]

What does your day look like? Drop it below 👇

.
.
.
#[TAG] #[TAG] #[TAG]`,
  },
  {
    id: "ig-quote",
    title: "Motivational Quote",
    platform: "instagram",
    category: "Inspiration",
    body: `"[QUOTE]"
— [AUTHOR]

[ONE-PARAGRAPH REFLECTION ON WHY THIS MATTERS TO YOU].

Save this for the next time you [SITUATION].

.
.
.
#[TAG] #[TAG] #[TAG]`,
  },
  {
    id: "ig-mini-tutorial",
    title: "Mini Tutorial",
    platform: "instagram",
    category: "Value",
    body: `How to [DO SOMETHING] in [N] steps (save this 🔖):

1. [STEP]
2. [STEP]
3. [STEP]
4. [STEP]
5. [STEP]

Pro tip: [EXTRA INSIGHT].

Which step do you struggle with most?

.
.
.
#[TAG] #[TAG] #[TAG]`,
  },
]
