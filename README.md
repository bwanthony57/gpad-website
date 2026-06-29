# Golfer's Pair-A-Dice Static Website Draft

This folder contains a simple static website for:

- https://golferspairadice.com/
- https://golferspairadice.com/privacy
- https://golferspairadice.com/terms
- https://golferspairadice.com/support

## Important before publishing

The pages still include launch/legal placeholders:

- Effective date: To be finalized before launch
- Lawyer review of Privacy Policy and Terms of Use has not been completed

Launch feature set reflected in site copy (accounts via email magic link, manual cloud backup through Supabase, RevenueCat, Google AdMob). Sign in with Apple and Google may be added in a future app update.

Confirmed public contact details (published on site):

- Publisher: BAGPIPER, LLC
- Public mailing address: 3000 S Hulen Street, STE 124 #254, Fort Worth, Texas 76109, United States
- Public support email: support@golferspairadice.com

Do not use these as final public App Store legal pages until the effective date placeholder is resolved.

## Hosting

This site is hosted on **GitHub Pages** with DNS managed through **Porkbun** for `golferspairadice.com`.

Other static hosts also work if you ever migrate:

1. GitHub Pages
2. Cloudflare Pages
3. Netlify

## Files

- `index.html` — landing page
- `privacy/index.html` — Privacy Policy
- `terms/index.html` — Terms of Use / EULA
- `support/index.html` — Support page
- `styles.css` — shared styles
- `site-chrome.js` — shared skip link, header, footer (from `data-page` on `<body>`)
- `404.html` — fallback page
- `robots.txt` — crawler rules
- `sitemap.xml` — public URL list for search engines
- `assets/` — site icon (candidate D): SVG favicon, 180px touch icon, 1024px social preview
- `CNAME` — custom domain for GitHub Pages (`golferspairadice.com`)

## Git workflow

Remote: `https://github.com/bwanthony57/gpad-website.git` (branch `main`).

```bash
cd C:\Users\bwant\gpad_website
git status
git add -A
git commit -m "Describe your change"
git push origin main
```

GitHub Pages deploys from `main` automatically. DNS for `golferspairadice.com` is managed in Porkbun.

### Local preview

```bash
cd C:\Users\bwant\gpad_website
python -m http.server 8080
```

Open http://localhost:8080/ — use this before pushing changes to GitHub.

## Agent skills (Cursor)

This repo includes project-level Cursor agent skills for design and frontend quality. Skills are installed under `.agents/skills/` (see `skills-lock.json` for versions).

Main slash commands:

| Skill | Commands |
|-------|----------|
| Ponytail | `/ponytail`, `/ponytail-review`, `/ponytail-audit` |
| Taste | `/design-taste-frontend` |
| Emil Kowalski | `/emil-design-eng`, `/review-animations` |
| Impeccable | `/impeccable audit`, `/impeccable polish`, `/impeccable critique` |
| Vercel | `/web-design-guidelines` |

To refresh skills after lockfile changes, use the `npx skills add …` commands documented in the repo history or on [skills.sh](https://skills.sh).
