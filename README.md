# Moguloju Sai — Portfolio

Personal portfolio of **Moguloju Sai**, a full stack AI engineer building production agents, voice systems and retrieval pipelines.

**Live site:** [mogulojusai.vercel.app](https://mogulojusai.vercel.app/)

It is a single-page site with an orange "signal" hero full of interactive bouncing circles, a scrolling skills strip, selected work, production systems, working principles, experience and contact. A hanging thread on the right edge switches the color theme.

## Features

- **Interactive hero:** a canvas of circles that drift, bounce off the edges and each other, and get pushed away by the cursor. It pauses when off-screen and stays still for users who prefer reduced motion.
- **Typing role line:** the roles under the name type out letter by letter, hold, erase and move to the next one.
- **Skills marquee:** a continuously scrolling strip of skills right after the hero. It pauses on hover.
- **Pull-cord theme switcher:** drag the thread on the right edge down about 45px and release to cycle themes. The choice is saved in `localStorage` and applied before first paint, so there is no flash.
- **Five themes:** `signal` (default), `peach`, `ocean`, `forest`, `midnight`.
- **Single source of content:** all text, links and skills live in one typed file, [lib/profile.ts](lib/profile.ts).
- **Accessible by default:** semantic sections, labelled landmarks, decorative images with empty `alt`, keyboard-operable theme button, reduced-motion support, and a screen-reader-friendly typing line.

## Tech stack

| Area | Choice |
| --- | --- |
| Framework | Next.js 16 (App Router, Turbopack dev) |
| UI | React 19 |
| Language | TypeScript 6 (strict) |
| Styling | Tailwind CSS 4 with CSS variables for theming |
| Fonts | Geist (body), Instrument Serif (italic accents), Anton (display), via `next/font/google` |
| Hosting | Vercel |

## Getting started

Requires Node.js 20.9 or newer (Node 22+ recommended).

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Script | What it does |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

Type-check without building: `npx tsc --noEmit`.

## File structure

```text
Portfolio/
├── app/
│   ├── layout.tsx            Root layout: fonts, metadata, theme-restore script, <ThemeThread />
│   ├── page.tsx              Home page: composes the sections in order
│   └── globals.css           Theme tokens, Tailwind theme mapping, animations
├── components/
│   ├── hero.tsx              Orange hero: name, typing roles, tagline, Work/About links, scroll button
│   ├── hero-circles.tsx      Client canvas: circle physics + cursor repel (hero background)
│   ├── role-cycle.tsx        Client: typewriter effect for the role titles
│   ├── skills-marquee.tsx    Scrolling skills strip under the hero
│   ├── work.tsx              Selected work list with optional links
│   ├── systems.tsx           "Four systems, one production stack" band
│   ├── principles.tsx        Working principles
│   ├── experience.tsx        Experience timeline, education, certifications, community
│   ├── footer.tsx            Contact section (email, phone, social links)
│   ├── theme-thread.tsx      Client: draggable pull-cord that cycles themes
│   └── nav.tsx               Top navigation bar (currently not used on the page)
├── lib/
│   └── profile.ts            All site content and its TypeScript types
├── Images/                   Logos and icons imported by profile.ts
│   ├── Expedify.png
│   ├── GitHub.png
│   ├── Helios Core AI.png
│   ├── Hugging Face.png
│   ├── LinkedIn.png
│   └── profile_image.png     Imported by profile.ts; not shown on the page right now
├── eslint.config.mjs         ESLint config (Next.js presets)
├── next.config.ts            Next.js config
├── postcss.config.mjs        PostCSS (Tailwind plugin)
├── tsconfig.json             TypeScript config (`@/*` maps to the project root)
├── package.json              Scripts and dependencies
└── README.md
```

Not tracked in git: `node_modules/`, `.next/`, `.env*`, `.vscode/`, `venv/`, `next-env.d.ts`, `*.tsbuildinfo` (see [.gitignore](.gitignore)).

## How it fits together

### Page composition

[app/page.tsx](app/page.tsx) renders, in order: `Hero` → `SkillsMarquee` → `Work` → `Systems` → `Principles` → `Experience` → `Footer`. Section anchors are `#top`, `#work`, `#systems`, `#experience` and `#contact`; `scroll-margin-top` keeps anchored sections from sticking to the viewport edge.

### Content: `lib/profile.ts`

One exported `profile` object holds everything shown on the site:

| Field | Used by |
| --- | --- |
| `name`, `roles`, `location`, `headline`, `summary` | Hero |
| `email`, `phone`, `phoneHref`, `links` | Footer |
| `work` | Work section (each item can have `links`) |
| `systems` | Systems band |
| `principles` | Principles |
| `experience` (with optional `highlights` bullets), `education`, `certifications`, `community`, `interests` | Experience |
| `skills` | Skills marquee |
| `photo` | Imported but currently unused |

The arrays use `satisfies` with the exported types (`WorkItem`, `SystemItem`, `Principle`, `Role`, `ProfileLink`), so mistakes are caught by TypeScript.

### Theming

Colors are CSS variables in [app/globals.css](app/globals.css). The default theme sits on `:root`; each other theme overrides the same variables under `html[data-theme="..."]`. `@theme inline` maps the variables to Tailwind color names (`bg-hero`, `text-hero-fg`, `bg-footer`, `text-on-accent`, and so on), so components never hardcode colors.

| Variable | Purpose |
| --- | --- |
| `--background`, `--foreground`, `--muted`, `--line` | Page surface, text, secondary text, borders |
| `--accent`, `--on-accent` | Accent color and the text color used on top of it |
| `--footer-bg`, `--nav-bg` | Footer background; nav background (nav is unused) |
| `--hero-bg`, `--hero-fg`, `--hero-ink` | Hero background, hero text, circle color |

Theme persistence: [app/layout.tsx](app/layout.tsx) injects a tiny inline script that reads `localStorage["theme"]` and sets `data-theme` on `<html>` before paint. [components/theme-thread.tsx](components/theme-thread.tsx) cycles `signal → peach → ocean → forest → midnight` and writes the new value back.

### Hero circles

[components/hero-circles.tsx](components/hero-circles.tsx) draws on a `<canvas>` behind the hero text. Circle sizes are fractions of the shorter canvas side. Each frame it applies cursor repulsion, wall bounces, speed limits and elastic circle-to-circle collisions (mass proportional to area). It reads `--hero-ink` for the fill color and redraws when `data-theme` changes. Animation stops when the hero is off-screen and is skipped entirely under `prefers-reduced-motion`.

## Customizing

- **Change text, links, skills, experience:** edit [lib/profile.ts](lib/profile.ts).
- **Add or reorder skills:** edit the `skills` array; the marquee picks it up automatically.
- **Change colors:** edit the variables in [app/globals.css](app/globals.css). Add a new theme by copying a `html[data-theme="..."]` block, then add its name to `THEMES` in [components/theme-thread.tsx](components/theme-thread.tsx).
- **Marquee speed:** change `45s` in the `.marquee-track` rule in `globals.css`. Size: the `text-base md:text-xl` classes in [components/skills-marquee.tsx](components/skills-marquee.tsx).
- **Typing speed:** the `TYPE_MS`, `HOLD_MS`, `ERASE_MS` and `GAP_MS` constants in [components/role-cycle.tsx](components/role-cycle.tsx).
- **Number or size of circles:** the `SIZES` array in `hero-circles.tsx`.
- **Add a logo or icon:** put the image in `Images/`, import it in `lib/profile.ts` and attach it to a `Role` (`logo`) or a `ProfileLink` (`icon`).

## Deployment

The site is deployed on Vercel at [mogulojusai.vercel.app](https://mogulojusai.vercel.app/). Pushing to the connected branch triggers a build. No environment variables are required by the code.

## Known notes

- [components/nav.tsx](components/nav.tsx) and `Images/profile_image.png` are kept in the repo but not shown on the page at the moment.
- `package.json` uses `"latest"` for all dependencies. The lockfile keeps local installs stable, but pinning versions would make builds reproducible over time.
- `npm run lint` currently fails with a "circular structure to JSON" error coming from the ESLint config setup, not from the application code.

## Links

- [Live site](https://mogulojusai.vercel.app/)
- [GitHub](https://github.com/Saimoguloju)
- [LinkedIn](https://www.linkedin.com/in/moguloju-sai-2b060b228)
- [Hugging Face](https://huggingface.co/MogulojuSai)
