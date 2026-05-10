# LaundryFree — Next.js Website

A premium $20k-quality Next.js website for LaundryFree UK, built with the [taste-skill](https://github.com/Leonxlnx/taste-skill) design system.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS v3**
- **Framer Motion** — spring physics animations, scroll reveals, magnetic buttons
- **Three.js** — hero bubble particle system
- **@phosphor-icons/react** — ultra-light icon set
- **Plus Jakarta Sans** + **Fraunces** — premium font pairing

## Design Philosophy (taste-skill / soft-skill)

- Editorial Luxury vibe archetype (warm cream palette)
- Asymmetric bento grid layout
- Double-bezel "Doppelrand" nested card architecture
- Floating pill navbar with hamburger morph
- Spring physics on all interactions
- Scroll entry animations via Framer Motion `whileInView`
- Performance-safe: only `transform` + `opacity` animated
- `backdrop-blur` applied only to fixed/sticky elements
- Film grain overlay fixed, not scrolling

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Production Build

```bash
npm run build
npm start
```

## Sections

1. **Navbar** — Floating pill, morphing hamburger, staggered mobile menu
2. **Hero** — Three.js bubble particles, asymmetric layout, magnetic CTA, floating cards
3. **Marquee** — Dark scrolling feature band
4. **How It Works** — 4-step process cards
5. **Services** — Asymmetric 12-col bento grid
6. **Stats** — Dark count-up section
7. **Features** — Mixed dark/light bento with coverage map
8. **Testimonials** — Animated review carousel
9. **Pricing** — 3-plan cards with offset highlighted plan
10. **CTA** — Full-bleed dark section with app download links
11. **Footer** — Clean 4-column footer
