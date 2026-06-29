---
name: Golfer's Pair-A-Dice Website
description: Warm fairway-toned static site for the mobile golf dice game — landing, legal, and support.
colors:
  bg: "#f7f4eb"
  panel: "#fffaf0"
  ink: "#192219"
  muted: "#536153"
  line: "#d8cfbd"
  accent: "#216b3a"
  accent-dark: "#174f2a"
  gold: "#d7a332"
  body-text: "#263226"
  gradient-top: "#fbf8ef"
typography:
  display:
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Arial, sans-serif"
    fontSize: "clamp(2.4rem, 6vw, 3.4rem)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Arial, sans-serif"
    fontSize: "clamp(2rem, 5vw, 2.8rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  title:
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Arial, sans-serif"
    fontSize: "1.2rem"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  body:
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Arial, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 600
    lineHeight: 1.55
rounded:
  panel: "20px"
spacing:
  nav-padding: "0.85rem 1.25rem"
  main-padding: "2rem 1.25rem 4rem"
  page-padding: "2.5rem 1.25rem 3.5rem"
  section-gap: "2rem"
components:
  brand-link:
    typography: "{typography.display}"
    textColor: "{colors.ink}"
  nav-link:
    typography: "{typography.label}"
    textColor: "{colors.muted}"
  text-link:
    textColor: "{colors.accent-dark}"
  content-panel:
    backgroundColor: "rgba(255, 250, 240, 0.88)"
    rounded: "{rounded.panel}"
    padding: "1.25rem"
---

# Design System: Golfer's Pair-A-Dice Website

## 1. Overview

**Creative North Star: "The Fairway Notice Board"**

A warm, sunlit clubhouse handout — cream paper, fairway green accents, gold morning light — not a casino marquee or a SaaS template. The site is small (landing, legal, support) and should feel **settled and trustworthy**: readable prose, clear section breaks, sticky header for wayfinding, no decorative motion or illustration required.

The system rejects gambling aesthetics, AI landing-page slop, and visual noise that would undermine compliance and support tasks. Density is comfortable, not dashboard-tight; legal pages use a narrower measure (`42rem`) than the global shell (`980px`).

**Key Characteristics:**

- Warm neutral surfaces (`--bg`, `--panel`) with forest-green accent (`--accent`, `--accent-dark`)
- System sans-serif throughout (no custom webfonts loaded)
- Borders and tonal layering over heavy shadows
- Sticky frosted header; flat sections separated by `--line` rules
- Mobile-first responsive nav stack below `640px`

## 2. Colors

Palette extracted from `:root` in `styles.css` and in-use literals.

### Primary

- **Fairway Green** (`#216b3a` / `--accent`): Brand accent; hero tagline color family; positive emphasis.
- **Deep Fairway** (`#174f2a` / `--accent-dark`): Default link color, hover states on nav, hero tagline text.

### Tertiary

- **Morning Gold** (`#d7a332` / `--gold`): Subtle radial highlight at top-left of body background (`rgba(215, 163, 50, 0.16)` in gradient). Accent warmth only — not a second CTA color.

### Neutral

- **Cream Ground** (`#f7f4eb` / `--bg`): Page background terminus in body gradient.
- **Warm Paper** (`#fffaf0` / `--panel`): Header, footer, and panel fills (often at 75–92% opacity).
- **Gradient Top** (`#fbf8ef`): Body gradient start (hardcoded in `body` rule).
- **Ink** (`#192219` / `--ink`): Primary headings, brand wordmark, doc-meta labels.
- **Fairway Gray** (`#536153` / `--muted`): Secondary text, nav links, footer, callouts, FAQ answers.
- **Body Copy** (`#263226`): Paragraph and list text in `.doc-body`, `.page-section`, `.gameplay` (hardcoded).
- **Sand Rule** (`#d8cfbd` / `--line`): Borders, dividers, callout left stripe, FAQ separators, link dot separators.

### Named Rules

**The No-Casino Rule.** Do not introduce neon, slot-machine reds, or high-saturation purple/blue gradients. Green + gold + cream are the identity; expand only within that warm outdoor palette.

**The Accent Sparingly Rule.** `--accent-dark` carries links and one hero tagline. Do not flood large backgrounds with saturated green.

## 3. Typography

**Display / Body / UI Font:** System stack — `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif`

No custom fonts are loaded. Identity comes from weight, negative letter-spacing on headings, and color — not from a display typeface.

**Character:** Native, readable, platform-familiar. Headings are bold and slightly tightened; body copy is relaxed (`line-height: 1.6`).

### Hierarchy

- **Display / Home H1** (`800`, `clamp(2.4rem, 6vw, 3.4rem)`, `line-height: 1.05`, `letter-spacing: -0.04em`): Home hero title only (`.home .hero h1`).
- **Headline / H1** (`700` implicit default, `clamp(2rem, 5vw, 2.8rem)`, `line-height: 1.1`, `letter-spacing: -0.03em`): Page titles, `.page-header h1`, `.content-panel h1`.
- **Section H2** (`700`, `1.15rem–1.2rem`, `letter-spacing: -0.01em`): `.doc-body h2`, `.page-section h2`; global `h2` also uses larger clamp for non-page contexts.
- **H3** (`1.2rem`, `margin-top: 2rem`): Subsections in long documents.
- **Hero intro** (`1.2rem`, `--muted`, `line-height: 1.5`): Supporting line under home title.
- **Hero tagline** (`600`, `clamp(1.35rem, 3vw, 1.65rem)`, `--accent-dark`, `letter-spacing: -0.02em`): Punchy game line on home only.
- **Body** (`1rem` default, `1.1rem` in `.hero-intro`, `.gameplay`, `.page-subtitle`, `#263226` or `--muted`): Prose and legal content; page column max `42rem` on `.main.page` / `.main.home`.
- **Label / Nav** (`600`, `0.95rem`): `.nav-links a`, `.doc-meta`, `.brand` uses `800` with `letter-spacing: -0.02em`.
- **Lede** (`1.15rem`, `--muted`, `max-width: 640px`): Intro paragraphs where `.lede` is used.

### Named Rules

**The System Stack Rule.** Do not add Google Fonts or display serifs unless explicitly requested. The site identity is already committed to the system sans stack.

**The Measure Rule.** Legal and support content stays in `.main.page` / `.main.home` (`max-width: 42rem`). Do not widen policy prose to the full `980px` shell.

## 4. Elevation

Depth is conveyed by **tonal layering, borders, and one soft panel shadow** — not a multi-step shadow scale.

- **Flat default:** Most sections are open on the cream background with `1px` `--line` dividers (`.page-section + .page-section`, `.page-header`, `.home .hero`).
- **Sticky header:** `background: rgba(255, 250, 240, 0.92)` + `backdrop-filter: blur(8px)` + bottom border — light lift without box-shadow.
- **Content panel (404):** `box-shadow: 0 12px 32px rgba(25, 34, 25, 0.06)` with `border: 1px solid var(--line)` and `border-radius: 20px`.

### Named Rules

**The Flat-First Rule.** New surfaces should use `--panel` fills and `--line` borders before adding shadows. Only isolated panels (e.g. error states) earn the content-panel shadow.

## 5. Components

### Site header (`.site-header` + `.nav`)

- **Style:** Sticky top (`z-index: 5`), bottom border `--line`, frosted `--panel` at 92% opacity.
- **Layout:** `max-width: 980px` centered; flex space-between; wraps to column below `640px`.
- **Brand (`.brand`):** Text wordmark "Golfer's Pair-A-Dice", `font-weight: 800`, `--ink`, no logo image.
- **Nav links (`.nav-links a`):** `--muted`, `600`, hover → `--accent-dark`.

### Hero (`.hero` / `.home .hero`)

- **Home:** Bottom border, generous vertical padding (`2.5rem 0 3rem`), full width within main.
- **Elements:** H1 + `.hero-intro` (muted) + `.hero-tagline` (accent-dark, semibold).

### Page header (`.page-header`)

- Bottom border `--line`; H1 + optional `.page-subtitle` / `.page-intro` in muted `1.1rem`.

### Document meta (`.doc-meta`)

- Unstyled list; `.label` bold `--ink` with auto `:` suffix; used on Privacy/Terms for effective date, publisher, contact.

### Page sections (`.page-section`)

- Stacked sections with top border between siblings; H2 at `1.2rem`; support page structure.

### Callout (`.callout`)

- Left border `3px solid var(--line)` (not accent-colored); muted text; used for no-gambling disclaimer on home.

### Content panel (`.content-panel`)

- **Shape:** `border-radius: 20px`
- **Background:** `rgba(255, 250, 240, 0.88)`
- **Border:** `1px solid var(--line)`
- **Shadow:** `0 12px 32px rgba(25, 34, 25, 0.06)`
- **Padding:** `1.25rem`
- **Use:** 404 page main message container.

### FAQ (`.faq-list` / `.faq-item`)

- Native `<details>`; top/bottom borders `--line`; summary `font-weight: 700` with `+` / `−` toggle via `::after`; answer text `--muted`.

### Page links (`.page-links`)

- Inline links `font-weight: 600`, no underline until hover; `.sep` middots in `--line`.

### Site footer (`.site-footer`)

- Top border, `--muted` text, `--panel` at 75% opacity; copyright + footer links; `max-width: 980px` inner flex.

### Links (`a`)

- Global `color: var(--accent-dark)`; nav/footer links override to muted with hover to accent-dark.

## 6. Do's and Don'ts

### Do:

- **Do** use CSS custom properties from `:root` (`--bg`, `--panel`, `--ink`, `--muted`, `--line`, `--accent`, `--accent-dark`, `--gold`) for all new styles.
- **Do** keep shared chrome identical across `index.html`, `privacy/`, `terms/`, `support/`, and `404.html` (header, footer, `/styles.css`).
- **Do** preserve the warm cream + fairway green identity — it matches a leisure golf product, not a casino.
- **Do** keep legal and support copy scannable: H2 sections, lists, FAQ accordions, doc-meta block at top of policies.
- **Do** state monetization and no-gambling facts plainly in visible callouts where appropriate.
- **Do** use `clamp()` for heading sizes already established in `styles.css` when adding new headings.
- **Do** test layout at `640px` breakpoint where nav stacks vertically.

### Don't:

- **Don't** introduce real-money gambling / sportsbook / casino aesthetics (neon, chips, betting urgency) — per PRODUCT.md anti-references.
- **Don't** add generic AI SaaS landing patterns: purple gradients, glassmorphism cards, fake app UI mockups, logo walls, decorative eyebrow labels.
- **Don't** replace the system font stack with Inter, Fraunces, or other trend defaults unless explicitly changing brand direction.
- **Don't** use dark-mode gaming clichés (RGB glow, cyberpunk palettes) on this warm light site.
- **Don't** add heavy animation or motion that conflicts with support/legal reading tasks; respect reduced-motion preferences.
- **Don't** widen policy pages beyond the `42rem` content measure.
- **Don't** use thick colored left borders on callouts for "alert" drama — existing callouts use neutral `--line` only.
- **Don't** add logo images or complex illustration systems without source assets; the wordmark is text-only today.
