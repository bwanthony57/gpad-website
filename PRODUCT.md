# Product

## Register

brand

## Users

- **Prospective players** discovering Golfer's Pair-A-Dice before download (App Store visitors, search, word of mouth).
- **Current players** looking for support, purchase help, ad questions, or progress issues.
- **Parents and privacy-conscious visitors** reviewing whether the game is appropriate and how data is handled.
- **Platform and compliance reviewers** (Apple, Google, legal) who need clear public policies, contact details, and gambling disclaimers.
- **Business contacts** reaching BAGPIPER, LLC for partnerships or administrative matters.

## Product Purpose

This repository is the **static public website** for [golferspairadice.com](https://golferspairadice.com/) — not the mobile app UI. It exists to:

1. **Introduce the game** with a concise landing message (dice-powered golf strategy, available on iOS and Android).
2. **Publish legal and policy pages** required for app store compliance (Privacy Policy, Terms of Use / EULA).
3. **Provide player support** (contact email, FAQ on purchases, ads, progress, refunds).
4. **Establish trust** with explicit statements that the game is entertainment-only — no real-money gambling, betting, cash prizes, or redeemable rewards.

Success looks like: a visitor quickly understands what the game is, finds accurate legal/support information, and trusts BAGPIPER, LLC as the publisher. The site should remain readable and maintainable as a small static HTML/CSS project (GitHub Pages or similar).

## Brand Personality

**Warm, clear, and course-side calm** — like a friendly clubhouse notice board, not a casino floor or hype-driven mobile ad.

- **Voice:** Plain, direct, legally careful without being cold. Friendly on support pages; factual on policy pages.
- **Tone:** Confident but understated. The hero tagline ("Roll the dice. Hit the shots. Chase the championship.") adds energy; body copy stays honest about monetization (ads, IAP, Remove Forced Ads).
- **3-word personality:** *Approachable · Trustworthy · Leisurely*
- **Emotional goals:** Reassure (no gambling), inform (monetization and data practices), invite (casual golf + dice fun).

Publisher identity: **BAGPIPER, LLC** (Fort Worth, Texas). Support: `support@golferspairadice.com`.

## Anti-references

- **Real-money gambling / sportsbook / casino aesthetics** — neon, chips, slot-machine chrome, "bet now" urgency. This game explicitly disclaims wagering.
- **Generic AI SaaS landing pages** — purple gradients, glassmorphism hero cards, fake dashboard mockups, "Trusted by" logo walls, eyebrow labels above every section.
- **Over-hyped mobile F2P marketing** — loot-box spectacle, aggressive countdown timers, fake scarcity, shouty ALL-CAPS CTAs.
- **Dark-mode gaming clichés** — RGB edges, cyberpunk UI, esports broadcast styling on a casual golf dice game.
- **Dense legal-wall typography** — tiny gray text, no hierarchy, unreadable policy pages (this site should keep legal content scannable).
- **Studio portfolio/editorial maximalism** — the site is product-specific compliance + support, not a creative agency showpiece.

## Design Principles

1. **Clarity before spectacle.** Visitors may arrive stressed (purchase failed, ad complaint, privacy concern). Hierarchy, spacing, and plain language come first.
2. **Say the hard things plainly.** Monetization, ads, virtual currency with no cash value, and no-gambling disclaimers belong in visible, honest copy — not buried footnotes.
3. **One visual system across all pages.** Shared header, footer, tokens, and typography so Home, Privacy, Terms, and Support feel like the same trustworthy property.
4. **Identity preservation.** The warm cream-and-fairway-green palette, system sans stack, and restrained layout are already established in `styles.css` — evolve, don't replace with trend-chasing defaults.
5. **Static and durable.** Prefer semantic HTML, shared CSS, and patterns that work on free static hosting without a build step.

## Accessibility & Inclusion

- **Target:** WCAG 2.1 Level AA for text contrast, focus visibility, and semantic structure on all public pages.
- **Structure:** Use proper heading order, `lang="en"`, landmark regions (`header`, `main`, `footer`), and `aria-label` on navigation (already on `.nav`).
- **FAQ:** Support page uses native `<details>` / `<summary>` — ensure keyboard operability and visible focus; expand/collapse indicator is CSS-only (`+` / `−`).
- **Motion:** No required animation today; respect `prefers-reduced-motion` if motion is added later.
- **Audience:** General-audience casual game; not intended for children under 13 (stated in Privacy Policy). Copy should remain readable for non-technical adults reviewing policies for family members.
- **Links:** Support `mailto:` and internal routes with descriptive link text; avoid "click here" without context.
