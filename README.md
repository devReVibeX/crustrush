# CRUSTRUSH — Premium Pizza & Fast Food Demo Website

A fictional restaurant brand demo built with **Next.js 14 (App Router)**, **React**, **TypeScript**,
**Tailwind CSS**, **Framer Motion** and **Lucide React** — created as a Fiverr portfolio piece.

> CRUSTRUSH is a completely original, fictional brand. No real restaurant's logos, colors, layout, copy
> or branding were used.

## Getting Started

```bash
npm install
npm run dev
```

Open (https://crustrush.vercel.app/).

## Pages

| Route                | Description                              |
|-----------------------|-------------------------------------------|
| `/`                   | Home — hero, popular items, categories, offer banner, why-us, story, reviews, location, FAQ |
| `/menu`               | Full menu with search + category filtering |
| `/menu/[slug]`        | Individual menu item detail page          |
| `/offers`              | Combo offers & promotions                 |
| `/about`               | Brand story, philosophy, team, stats       |
| `/locations`           | All 3 branches with map + directions       |
| `/reservation`         | Table reservation form with validation      |
| `/contact`             | Contact form, business info, map, FAQ      |
| `/privacy-policy`, `/terms` | Legal placeholder pages              |

## Structure

```
app/                 Routes (App Router)
components/          Reusable UI components
lib/data.ts          All menu items, offers, branches, testimonials, FAQ (single source of truth)
lib/types.ts         Shared TypeScript types
```

## Notes

- Food imagery is sourced from Unsplash (`images.unsplash.com`) via `next/image` remote patterns — swap in
  real branded photography before production use.
- The map section is a stylized, dependency-free placeholder (no Google Maps API key required). "Get
  Directions" buttons deep-link to Google Maps search.
- Forms (Reservation, Contact) use client-side validation only — no backend is wired up.
- Brand palette: charcoal black, cream, burnt-ember red-orange, warm gold, olive — defined in
  `tailwind.config.ts` under the `crust` color namespace.
