# maexmaya

Personal author website for fiction publishing. Built with Astro and GSAP animations.

*Mae loves Maya. This is where the stories live.*

## Quick Start

### In CodeSandbox

1. Import this repository
2. Run `npm install` in the terminal
3. Run `npm run dev` to start the dev server

### Local Development

```bash
npm install
npm run dev
```

The site will be available at `http://localhost:4321`

## Project Structure

```
/
├── public/
│   ├── favicon.svg
│   ├── images/
│   │   ├── hero-bg-placeholder.svg    # Placeholder (replace with hero-bg.jpg)
│   │   ├── featured-placeholder.svg   # Placeholder (replace with .jpg)
│   │   └── journal/                   # Journal post images
│   └── videos/
│       └── hero-intro.mp4             # Optional hero video
├── src/
│   ├── components/
│   │   ├── FeaturedStories.astro      # Accordion with GSAP
│   │   ├── Footer.astro
│   │   ├── Hero.astro                 # Hero with GSAP animations
│   │   ├── JournalSection.astro
│   │   └── Navigation.astro           # Fixed nav with mobile menu
│   ├── content/
│   │   ├── config.ts                  # Collection schemas
│   │   ├── stories/                   # Short story markdown files
│   │   └── journal/                   # Journal entry markdown files
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro                # Homepage
│   │   ├── about.astro
│   │   ├── newsletter.astro
│   │   ├── stories/
│   │   └── journal/
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Publishing Workflow

### Adding a New Story

1. Create a new `.md` file in `src/content/stories/`:

```markdown
---
title: "Your Story Title"
publishDate: 2025-01-15
excerpt: "A short teaser for the accordion and cards (max 300 chars)."
featured: true
draft: false
tags: ["tag1", "tag2"]
contentWarnings: []
---

Your story content goes here...
```

2. Set `draft: true` while editing
3. When ready, set `draft: false` and optionally `featured: true`
4. Push to GitHub → Netlify deploys automatically

### Adding a Journal Entry

Create a new `.md` file in `src/content/journal/`:

```markdown
---
title: "Post Title"
publishDate: 2025-01-15
excerpt: "Short description, max 200 chars."
draft: false
tags: ["process", "writing"]
image:
  src: "/images/journal/your-image.jpg"
  alt: "Description of image"
---

Your journal content...
```

## Design System

### Fonts
- **Display**: Cormorant Garamond (elegant, editorial)
- **Body**: DM Sans (clean, readable)

### Colors

| Variable | Value | Usage |
|----------|-------|-------|
| `--color-ink` | #1a1814 | Primary text |
| `--color-ink-soft` | #3d3a36 | Secondary text |
| `--color-paper` | #faf8f5 | Background |
| `--color-paper-warm` | #f5f0e8 | Alternate background |
| `--color-accent` | #d64d7a | Hot pink accent |
| `--color-accent-soft` | #e8a4bc | Soft pink |
| `--color-stone` | #9c9489 | Muted text |
| `--color-border` | #e5e0d8 | Borders |

## Deployment

Deploys via GitHub → Netlify to maexmaya.com

### Build Settings

| Setting | Value |
|---------|-------|
| Build command | `npm run build` |
| Publish directory | `dist` |
| Node version | 18+ |

## Media Assets

### Current State (Placeholders)
The site currently uses SVG gradient placeholders for:
- Hero background (`/images/hero-bg-placeholder.svg`)
- Featured section image (`/images/featured-placeholder.svg`)

### To Replace With Real Images
1. Add `hero-bg.jpg` (1920×1080+, atmospheric)
2. Add `featured-placeholder.jpg` (pink/warm tones, 4:5 aspect)
3. Optionally add `hero-intro.mp4` (~10 sec, H.264)
4. Update Hero.astro default from `.svg` to `.jpg`
5. Update FeaturedStories.astro from `.svg` to `.jpg`

## Next Steps

- [ ] Replace placeholder images with real assets
- [ ] Set up newsletter integration (Buttondown recommended)
- [ ] Add RSS feed
- [ ] Add Open Graph images for social sharing
- [ ] Connect domain in Netlify (already routed)
