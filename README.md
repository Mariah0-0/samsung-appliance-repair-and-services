# Samsung / LG Appliance Repair Sites

Next.js + Tailwind. Two sites, one codebase, two Vercel projects.

## Links

- Vercel: [vercel.com/dashboard](https://vercel.com/dashboard)
- Web3Forms: [web3forms.com/dashboard](https://app.web3forms.com/dashboard)

## Env vars (set per Vercel project)

```
NEXT_PUBLIC_SITE=samsung   or   lg
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=...   (fine to be public, by design)
```

**Note**: My .env.local only has the samsung web3forms access key, the lg one is in it's vercel project env variables.

## Config system

```
config/site.constants.ts          ← picks config based on NEXT_PUBLIC_SITE
config/site.constants.samsung.ts  ← Samsung name/colors/contact/location
config/site.constants.lg.ts       ← LG name/colors/contact/location
```

Everything imports from `site.constants.ts`. One codebase, push once = both sites update.

## Colors

Default fallbacks in `globals.css` (samsung colors). Real per-site colors come from config, applied via inline style override in `layout.tsx`.

## Favicon

No logo image used anywhere in page content (business name renders as text). Only the browser tab icon differs per brand — `business.icon` in each config, plain path with NO leading slash, file lives in `public/`, applied via `metadata.icons` in `layout.tsx`. `app/favicon.ico` must NOT exist or it silently overrides this.

## Contact form

Web3Forms, no backend. 250 submissions/month **per key** (each site has its own).

## Legal pages

`app/privacy-policy`, `app/terms-of-service` — pull from same config, nothing brand-specific to edit manually.

## Run locally

```
npm install
npm run dev
```

Need `NEXT_PUBLIC_SITE` in `.env.local` or it defaults to Samsung.

## Check before touching anything

- Domains still pointed at correct Vercel projects?
- Web3Forms keys still valid?
- Maps embed URLs still correct?

---

## AI context prompt

Paste everything below this line to an AI assistant to give it full project context.

---

Two near-identical single-page marketing sites for a local appliance repair business in Bangalore, India. One is Samsung-branded, one is LG-branded — same business, same services, different storefront branding. Built by a solo freelance developer (first Next.js project), deployed to two separate domains.

**Business context**

- Independent local appliance repair shop — NOT actually affiliated with Samsung or LG. The business name literally includes the brand name as a deliberate branding choice by the client, not a legal/trademark claim. Flagged as a minor risk early on; client proceeded anyway. Not something to "fix."
- Services (same on both sites): AC repair, refrigerator repair, washing machine repair, TV repair, water purifier repair.
- Flat visiting fee: ₹449 per service call.
- 90-day replacement warranty on repairs/parts, no visiting charge for warranty visits.
- Primary CTAs: WhatsApp chat and phone call — no online payment, no booking system.
- Client explicitly does NOT want a specific locality/neighborhood mentioned in visible site text — only "Bangalore" as the city. Locality data still exists in config for schema/SEO/maps, just must not appear in on-page copy.
- Described as a "temporary" site by the client — don't over-engineer.

**Tech stack**

- Next.js (App Router), TypeScript
- Tailwind CSS v4 (`@theme inline` for custom color tokens)
- Vercel hosting — two separate projects from the same repo
- Web3Forms for the contact form (no custom backend)
- Inter font via `next/font/google`
- Icons are hand-converted SVGs as React components with `color`/`height` props, not a library

**Two-sites-one-codebase architecture**

```
config/site.constants.ts          ← picks active config based on NEXT_PUBLIC_SITE env var
config/site.constants.samsung.ts  ← Samsung: name, colors, contact, location, favicon path
config/site.constants.lg.ts       ← LG: same shape, different values
```

Every component imports `{ site }` from `@/config/site.constants`. Config shape:

```ts
{
  business: { name, brand, icon },
  contact: { phone1, phone2, email },
  links: { whatsapp1, whatsapp2, call1, call2, email },
  location: { city, state, country, locality, serviceRadius, latitude, longitude, mapsEmbedUrl, mapsDirectionsUrl },
  colors: { background, foreground, primary, primaryHover, secondary, accent, accentHover },
}
```

**Colors:** `globals.css` `:root` values are fallback defaults only. Real colors come from `site.colors`, applied as inline style override on `<html>` in `layout.tsx` (wins via cascade). Tailwind's `@theme inline` maps to the same variable names.

**Favicon:** No logo image anywhere in page content — business name renders as text. Only the favicon differs per brand, via `business.icon` (string path, NO leading slash, file in `public/`), applied via `metadata.icons` in `layout.tsx`. `app/favicon.ico` must not exist or it silently wins over the config-based one.

**Contact form:** Web3Forms, client-side POST, no backend. 250 submissions/month per access key, each brand has its own key. Key is intentionally `NEXT_PUBLIC_` (safe/by-design for Web3Forms, not a leak).

**Legal pages:** `app/privacy-policy`, `app/terms-of-service` — content adapted from a client-provided template (originally another business's text), swapped to real business/contact/jurisdiction details. Added ₹449 visiting fee and 90-day warranty clauses per client request. Domain reference is dynamic via `getDomain()` reading the request's Host header, not hardcoded.

**Known quirks:**

- Tailwind arbitrary breakpoints (`min-[1100px]:`) don't reliably override named breakpoints (`sm:`/`md:`/`lg:`) for the same property when both are active — CSS output order decides, not JSX order. Use bounded ranges (`min-[640px]:max-[889px]:`) or stick to one system per element.
- `next/image` with `fill` needs a `sizes` prop or Next.js warns about over-fetching. Approximate values are fine.
- Passing component references as props (e.g. `icon={SomeIcon}`) from Server to Client Components can cascade `"use client"` requirements upward through the component tree.
- Reserved Next.js filenames (`icon.ts`, `favicon.ico`, `page.tsx`, `layout.tsx`) get special routing treatment inside `app/` — this is why `types/`, `components/`, `assets/`, `config/` all live at the project root, not inside `app/`.
