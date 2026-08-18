# Ali Nasir — Software Engineer Portfolio

A **dark, premium, cinematic** engineering portfolio — a digital experience that
happens to be a portfolio. Deep charcoal base, warm off-white typography, one
restrained amber accent, a glass video hero, and immersive storytelling.

> **"I build systems."**

---

## Stack

- **Next.js 14** (App Router) · **TypeScript** (strict)
- **Tailwind CSS** — custom dark design system
- **Framer Motion** — preloader, scroll storytelling, page transitions, micro-interactions
- **Three.js + React Three Fiber + drei** — the lazy-loaded interactive 3D desk
- **Lucide React** — icons
- Self-hosted fonts (`next/font`): Space Grotesk · Inter · Instrument Serif · JetBrains Mono

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm start          # serve the production build
```

## The experience

- **Preloader** — multilingual greeting sequence (Ciao · 안녕하세요 · Привет · … · **SALAM**),
  cinematic mask/scale/blur transitions, lifts away like a curtain.
- **Video hero** — the intro video lives in a floating **glass card** (not full-screen),
  double-click to play with voice, click to pause, no text over the video, mobile-friendly.
- **Identity** — the AN monogram assembles from circuit strokes → a creative digital ID card
  → a "hire me" band + tech marquee.
- **Storytelling** — positioning → immersive project case studies → **CODE → SYSTEM → PRODUCT**
  transformation → **interactive 3D desk** → full-name reveal → footer.
- **About page** — WHO I AM hero → story → **Followed Approach** (01/02/03) → **Offered
  Services** → **Areas of Expertise** → education → tech stack → signature + CTA.
- **AI core** — a small ambient orb (bottom-right) that breathes, reacts to cursor proximity,
  and expands into contextual quick-links. Dismissible, reduced-motion aware.
- **Easter eggs (optional)** — `⌘K` command palette, `` ` `` terminal, Konami-code HUD.

No custom cursor — the native browser cursor is used. No open-source repo showcase —
just a plain GitHub link in the footer/contact areas.

## Configuration

| What | Where |
| --- | --- |
| Name, roles, links, SEO | `data/site.ts` |
| Projects | `data/projects.ts` |
| Services & journey | `data/services.ts` |
| Skills / stack | `data/skills.ts` |
| Experience & education | `data/experience.ts` |
| Analytics (GA / Plausible / PostHog) | `.env.example` |
| Contact form endpoint | `NEXT_PUBLIC_CONTACT_ENDPOINT` (falls back to `mailto:`) |
| Intro video | drop `ali-intro.mp4` in `public/media/` |
| About image | drop `alinasirabout.jpg` in `public/media/` (falls back to portrait) |
| Resume PDF | replace `public/resume/Muhammad_Ali_Nasir_Resume.pdf` |
| Canonical URL | `data/site.ts` → `site.url` |

## Data accuracy

No invented companies, metrics, clients, or statistics. NexusERP is **ongoing**;
SmartTrust is **in development / backend started**; LivLongMD is real **client work**
linking to livlongmd.com; SSGC FARS is real internship/enterprise work.

## Performance & accessibility

- Video uses `preload="metadata"` + poster; the 3D desk is **dynamically imported**
  (separate chunk, never blocks first paint) with a static fallback on mobile/reduced-motion.
- Route-level code splitting, self-hosted fonts, `display: swap`.
- `prefers-reduced-motion` significantly reduces animation (also toggleable via `⌘K`).
- Semantic HTML, keyboard navigation, visible focus states, ARIA labels on interactive video.
