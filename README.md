# FERRWUD — Fusion by Design

A responsive Next.js App Router + TypeScript starter website for a premium interior design studio. It is built from the supplied FERRWUD brief and uses original layouts and copy inspired by luxury editorial interior websites without copying their brand identity or complete page designs.

## Requirements
- Node.js 20.9+ (Node 22 recommended)
- npm

## Run locally
1. Extract this folder.
2. Open a terminal in `ferrwud-website`.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open `http://localhost:3000`.

For a production build, run `npm run build` and then `npm run start`.

## Included pages and features
- Homepage with full-bleed hero, editorial intro, featured portfolio, service cards, process, journal and enquiry CTAs.
- About, Residences, Commercial, Services, Projects, Design Ideas, Contact and Start a Project pages.
- Reusable project details at `/project/[slug]`, service details at `/service/[slug]`, and journal articles at `/ideas/[slug]`.
- Responsive sticky header, dropdown navigation, mobile menu, footer, accessible filter buttons, project cards, FAQ accordions and reduced-motion support.
- Multi-step enquiry form with client-side validation and an API integration point at `/api/enquiry`.
- Page metadata, Open Graph defaults, `robots.txt` and a generated sitemap.

## Important setup before launch
1. **Brand logo:** The separate FERRWUD logo was not supplied with the brief, so the site uses a typographic wordmark. Replace it in `components/Header.tsx` and `components/Footer.tsx` when the approved logo is available.
2. **Business identity:** Update `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts` and metadata with the real production domain. `https://www.example.com` is a placeholder.
3. **Contact details:** Add the verified email, phone/WhatsApp, address, service area and social URLs in `components/Footer.tsx` and `app/contact/page.tsx`. No phone number or address has been invented.
4. **Images and usage rights:** The image configuration in `lib/data.ts` uses stable Unsplash image URLs for design demonstration. Replace these with approved FERRWUD project images or properly licensed assets before production. Add real alt text and verify image crops.
5. **Demo portfolio:** Entries in `lib/data.ts` are explicitly illustrative concepts, not claims about actual FERRWUD client projects, awards or completed work. Replace with verified projects and locations.
6. **Services and journal:** Confirm the actual service scope, deliverables and all proposed copy. The journal posts are original draft placeholders; review them before publishing.
7. **Enquiry submission:** Copy `.env.example` to `.env.local` and set `LEAD_ENDPOINT` to an approved lead-management endpoint. Add `LEAD_ENDPOINT_TOKEN` if required. The API forwards the validated request to that endpoint and does **not** claim success if the endpoint is missing or fails. Test the endpoint, consent language, spam protection, privacy and retention policies before going live.
8. **Legal:** Privacy and terms pages are draft placeholders and require review for the real business and jurisdiction.
9. **Testimonials/team:** Not fabricated. Add only authorised real testimonials, team details, certifications and business claims.

## Central content configuration
- `lib/data.ts` stores demo images, portfolio entries, categories, services and journal articles.
- `components/Header.tsx` stores navigation links.
- `components/Footer.tsx` stores footer navigation and contact placeholders.
- `app/globals.css` contains the design system, responsive layouts, transitions and reduced-motion rules.

## Notes
- This project is a complete editable codebase, not a hosted/deployed website.
- The enquiry API needs a real endpoint before submissions can be accepted.
- Run `npm install` before the first local run. No dependencies are bundled in this ZIP.
