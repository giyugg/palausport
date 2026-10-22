# Palau Sport — AI Website Generation Instructions

> **Version:** 1.0  
> **Research date:** October 19, 2026  
> **Reference business:** M/Y Palau Sport, a Philippines-based liveaboard dive yacht  
> **Reference website:** https://palausport.com/home/  
> **Companion document:** [`design.md`](./design.md)

## 1. Purpose and operating instructions for the AI

You are a senior frontend engineer building a **modern, trustworthy, responsive website for M/Y Palau Sport**. Use this document as the **product, content, engineering, and quality contract**. Read `design.md` before implementing any visual component; it governs design tokens, layout, typography, imagery, and interaction style.

**Interpretation:** This project is a **modernized, content-faithful recreation/refresh** of the referenced business website, **not** a pixel-perfect copy. Preserve its identity, page topics, guest inquiry journey, and important facts; improve structure, usability, accessibility, and performance. If the owner explicitly requests pixel-perfect replication, first obtain approved branding assets and screenshots, and revise `design.md` accordingly.

### Priority order if instructions conflict

1. User's latest explicit requirements and actual project/repository configuration.
2. Functional accuracy, accessibility, security, and verified facts.
3. This `instructions.md` for page scope, behavior, and implementation.
4. `design.md` for visual and interaction decisions.
5. Original website for business content and navigation reference.
6. General framework/library defaults.

**Rules:**

- Do **not** assume that a public website's text, schedules, prices, crew names, images, promotions, or phone numbers remain current.
- Do **not** invent trip availability, reviews, prices, certifications, years of experience, statistics, guarantees, vessel safety specifications, booking confirmations, or payment methods.
- Do **not** implement a real-time booking, checkout, payment, login, or admin system unless the owner supplies requirements, data sources, and authorization.
- Do **not** treat a Google Form submission or email inquiry as a confirmed reservation.
- Do **not** use unauthorized image downloads, third-party hotlinking, unlicensed logos, or fabricated photography as authentic Palau Sport media.
- Do **not** copy obvious glitches from the reference site (e.g., zero-value counters, inconsistent phone numbers, broken paths, stale year-specific offers).
- Build real functional links and accessible states; avoid decorative buttons that do nothing.
- Prefer readable, maintainable, reusable code over monolithic components or unnecessary dependencies.
- Finish one milestone, run checks, and summarize the files changed before moving to the next.

## 2. What was verified on the reference website

This audit is based on publicly retrievable pages and navigation as of the research date. It does **not** claim a live authenticated booking test, a full interactive-browser audit, or extraction of exact CSS values.

| Area | Observed on source | Implication for rebuild |
| --- | --- | --- |
| Business | M/Y Palau Sport runs liveaboard dive experiences in Philippine destinations. | Lead with the yacht, diving, destinations, and guest confidence. |
| Main landing | The substantive homepage is `/home/`; the domain root was indexed as a minimal “Welcome” page. | Serve the redesigned homepage at `/`; migrate or redirect `/home/` appropriately. |
| Vessel | Described as about 38 m long and accommodating 24 guests, with 9 twin bunk cabins and 3 suites. | Add a strong vessel overview; verify specs before publishing. |
| Destinations | Anilao, Apo Reef, Busuanga, Calauit Island, Malapascua, Puerto Galera, Tubbataha Reef, Verde Island. | Model destinations as individual dynamic routes/cards. |
| Existing journey | Home → destinations/vessel → inquiry or Book Now; booking page points to year/trip-specific external forms. | Build an **inquiry-first** flow, not fake instant checkout. |
| Booking campaigns | 2026 and 2027 Tubbataha, 2026–2027 Apo/Coron/El Nido on Book Now; 2028 link appears in main navigation. | Make campaigns editable and check dates/status/links before deployment. |
| Forms | Destination pages request name, email, phone, destination, party size, dates, message. Contact page requests first name, last name, email, subject, message. | Validate accessible forms; implement a real handler only if configured. |
| Other sections | About, crew, vessel, chase boats, cabins, common spaces, courses, partners, promos, contact. | Preserve discoverability, but prioritize high-value pages first. |
| Contact | Email `pinkieg@divepalausport.com`; WhatsApp on contact page `+639278261623`. Some older pages show another number. | Centralize verified contact data; ask owner to confirm the preferred number. |
| Potential issue | Homepage counter text contains zero values in retrieved markup. | Never reproduce placeholder counters as factual metrics. |

### Primary source inventory

These are research references, **not** instructions to scrape or republish every asset:

- Homepage: https://palausport.com/home/
- About: https://palausport.com/about-us/
- Crew: https://palausport.com/about-us/the-crew/
- Vessel overview/specifications: https://palausport.com/the-vessel/
- Chase boats: https://palausport.com/the-vessel/the-chase-boats/
- Accommodation: https://palausport.com/the-vessel/accommodation/
- Common areas: https://palausport.com/the-vessel/common-areas/
- All destinations: https://palausport.com/destinations/
- Tubbataha example: https://palausport.com/destinations/tubbataha-reef/
- Destination inquiry-form example: https://palausport.com/destinations/anilao/
- Book Now: https://palausport.com/book-now/
- Dive courses: https://palausport.com/dive-courses/
- Contact: https://palausport.com/contact-us/
- Partner resorts: https://palausport.com/elementor-5117/
- Promos: https://palausport.com/discount-and-promos/

Do not confuse **Palau Sport (the yacht)** with unrelated retail/sportswear brands.

## 3. Project goals and main visitors

**Primary visitor:** A recreational or experienced scuba diver looking for a Philippine liveaboard itinerary and assessing the vessel before inquiring.

**Secondary visitors:** Dive groups and trip organizers, photographers, divers comparing cabin types, interested course students, and guests with booking questions.

The visitor should be able to:

1. Understand what Palau Sport offers within 5–10 seconds.
2. Find relevant dive destinations and their highlights.
3. Review yacht, cabins, common facilities, diving arrangements, and crew information.
4. Find **owner-verified** dates, packages, rates, and booking links where available.
5. Send an inquiry or follow the relevant current booking form.
6. Contact the team easily on a mobile device.

**Primary CTA:** `Explore Trips` or `Book / Inquire` (select one site-wide convention; `Book / Inquire` should make inquiry status clear).  
**Secondary CTA:** `Explore Destinations` / `View the Vessel`.

## 4. Information architecture

### Proposed URL map

| Page / route | Priority | Page requirements |
| --- | --- | --- |
| `/` | P0 | Hero, featured destinations, vessel teaser, reasons to choose, trip CTA, testimonials (approved), inquiry CTA. |
| `/destinations` | P0 | Eight destination cards; clear navigation and concise highlights. |
| `/destinations/[slug]` | P0 | Destination hero, overview, signature marine life/dive features, photos, trip inquiry CTA. |
| `/the-vessel` | P0 | Intro and verified specs, amenities overview, gallery, links to vessel subpages. |
| `/the-vessel/accommodation` | P0 | Suite and twin bunk room types, amenities, image gallery. |
| `/book-now` | P0 | Explain booking steps and link out to **verified** year/trip forms; clear inquiry wording. |
| `/contact` | P0 | Contact methods, accessible inquiry form, office location. |
| `/about` | P1 | Story, service philosophy, safety-conscious approach, ship overview. |
| `/about/crew` | P1 | Owner-approved crew roster and portraits, no invented bios. |
| `/the-vessel/chase-boats` | P1 | Tender/transfer facilities and gallery. |
| `/the-vessel/common-areas` | P1 | Dining, alfresco, dive deck, charging station, lounge. |
| `/packages` | P1 | Trip/campaign listings and itinerary highlights, no fabricated departures. |
| `/dive-courses` | P1 | Verified SDI/TDI courses and rates, optional inquiry CTA. |
| `/partners/resorts` | P2 | Approved partner-resort cards and outbound links. |
| `/promotions` | P2 | Only currently valid owner-approved promotions. |
| `/privacy` | P1 before collecting data | Clear data handling and contact details, adapted to actual operations. |
| `/not-found` | P0 | Useful recovery to destinations, vessel, or contact. |

**Migration:** If replacing the existing website, retain or redirect legacy URLs as needed (e.g., `/home/`, `/about-us/`, `/contact-us/`, `/the-vessel/the-chase-boats/`, `/about-us/the-crew/`, `/discount-and-promos/`). Redirect rules should be tested, not guessed.

### Navigation

**Desktop top level:** Home · Destinations · The Vessel · About · Packages & Trips · Contact · **Book / Inquire**.  
Secondary items go in accessible dropdowns: Vessel (Overview, Accommodation, Chase Boats, Common Areas); About (About Us, Crew); Packages (Schedules/Itineraries, Dive Courses); Destinations (all eight). Partners and promos may live in secondary links or footer until content is validated.

**Mobile:** Menu button, visible logo, optional compact inquiry CTA. Open a semantic drawer with properly labeled expandable submenus; support Escape, focus trapping, return focus, and closing after navigation.

## 5. Page content contracts

### Homepage layout, in order

1. **Header:** official/approved identity, legible navigation, clear booking/inquiry CTA.
2. **Hero:** authentic yacht or underwater image; headline about liveaboard diving in the Philippines; concise supporting copy; 1–2 CTAs.
3. **Featured destinations:** Anilao, Apo Reef, and Tubbataha Reef in a polished image-card grid.
4. **Why Palau Sport:** guest comfort, experienced dive team, well-planned adventures; use only approved factual statements.
5. **Vessel preview:** notable facilities, suite/twin cabin options, photo/video only when real asset exists.
6. **Signature trips/itineraries:** current owner-approved campaigns; no stale rates or departure cards.
7. **Guest reviews:** authentic, authorized testimonials; hide section if not approved.
8. **Booking process:** browse, inquire/apply, team follows up — clearly distinct from confirmation.
9. **Final CTA + footer:** contact, navigation, WhatsApp/email, privacy.

### Destination index and detail

Use the following eight destination **names** from the existing site; do not add unrelated destinations by default:

- `anilao` — Anilao (macro photography / critter diving)
- `apo-reef` — Apo Reef (reef/wall diving)
- `busuanga` — Busuanga / Coron area (wrecks and reefs)
- `calauit-island` — Calauit Island (dugongs; conservation guidance applies)
- `malapascua` — Malapascua (thresher sharks)
- `puerto-galera` — Puerto Galera (reef biodiversity)
- `tubbataha-reef` — Tubbataha Reef (remote reef diving)
- `verde-island` — Verde Island (marine biodiversity and currents)

Each record must have `slug`, `title`, `shortDescription`, `heroImage`, `highlights[]`, `bodySections[]`, `gallery[]`, `seo`, and optionally `availablePackages[]` (only with verified data). Do not promise sightings; use “known for” or “possible encounters” and mention conservation responsibly.

Destination detail page: media hero → quick highlights → editorial guide → gallery → availability/inquiry block → related destinations. An inquiry form may preselect the selected destination but must not assert live availability.

### Vessel

The current reference describes a **roughly 38 m**, steel-hulled, twin-engine yacht for **24 guests**, with **9 twin bunk cabins**, **3 suites**, ensuite bathrooms, a spacious dive deck, sunset/alfresco areas, dining/bar lounge, and dive-support facilities. Treat these as **reference facts pending owner sign-off**, not hardcoded marketing claims for all time.

Create a readable specs display; include headings and units, not text embedded in an image. Do not import every technical specification blindly: validate safety and equipment disclosures before launch.

### Booking / inquiries

**Current observed flow:** user selects a trip, follows an external form or inquiry route, and the reservations team follows up. No checkout or guaranteed live availability was verified.

- Show clear 3-step explanation: **Choose a trip → Submit inquiry/request → Team confirms details**.
- Trip cards include year/region, optional dates, optional rate, and `View Details / Inquire`.
- Use `Request availability` or `Submit inquiry` as the form submit label; **never** `Booking confirmed` without an actual reservation backend and confirmed result.
- Show `Dates and availability are subject to confirmation` where appropriate.
- Open approved external forms with understandable labels and `rel="noopener noreferrer"` if `target="_blank"` is used.
- No simulated payment methods, fake inventories, or fake scarcity timers.

**External links observed in navigation (verify before publishing):**

- 2026 Tubbataha: https://forms.gle/wR1HzqoBzcj1YPFr7
- 2027 Tubbataha: https://forms.gle/YchLgRVia1RjW5E18
- 2026–2027 Apo / Coron / El Nido: https://forms.gle/AE1NaJAUXyBBdqqU6
- 2028 Tubbataha is mentioned in navigation; **request a verified public link from the owner** before displaying it.
- Schedule reference: https://docs.google.com/spreadsheets/d/1404IhS6kUszC71NXksyYE4XWmeoMvsAca6gVy4nVrvc/edit?gid=0 ; the availability/price data is changing and is **not** an automatically integrated booking inventory.

**As of October 2026**, many 2026 departures are historical; do not treat published rates or availability as current. Maintain trip records through an owner-reviewed dataset or CMS.

### Contact form

Minimum fields: name, email, subject/topic, message; optionally telephone, desired destination, guests, date range. Provide proper labels, validation, helpful errors, pending state, spam protection, and an explicit privacy notice. **Never** show a success confirmation unless a real send action succeeded. If no backend is configured, display contact methods and mark the form as unavailable instead of pretending it works.

**Contact details to validate:**

- Email seen across pages: `pinkieg@divepalausport.com`
- WhatsApp/phone on Contact page: `+63 927 826 1623`
- Some older page extracts display `+63 956 521 4748`; the owner must choose the canonical public contact number.
- Location: Metro Manila / Manila, Philippines; no precise street address established.

### Courses, testimonials, and promotions

- Courses: the original has SDI/TDI course names and USD rates; **do not publish those prices before rechecking** with the business.
- Testimonials: use published reviews only with appropriate permission/attribution and exact wording; do not generate names, flags, avatars, star ratings, or reviews.
- Promotions: show active start/end dates, terms, approval status. Hide expired or uncertain offers. Do not invent coupon codes.
- Partners: obtain approval before reusing logos or images.

## 6. Suggested technical approach

If starting a new project, use:

- **Next.js App Router**, React, **TypeScript** (strict mode)
- **Tailwind CSS** + semantic CSS custom properties from `design.md`
- **shadcn/ui** primitives where useful; **Lucide** icons
- `next/image` and `next/font` for optimized imagery/type when compatible
- `zod` for forms/data validation; a simple accessible form approach (React Hook Form optional)
- Content stored initially in typed local files (`src/content/`), with future CMS integration **only if asked**
- Vercel-compatible deployment, with SEO metadata and sitemap

If working in an existing repository, **respect its stack, package manager, lint rules, design tokens, folder conventions, and dependencies. Do not reinitialize the project or replace configurations without approval.**

### Recommended structure (new Next.js project)

```text
src/
  app/
    layout.tsx
    page.tsx
    destinations/page.tsx
    destinations/[slug]/page.tsx
    the-vessel/page.tsx
    the-vessel/accommodation/page.tsx
    the-vessel/chase-boats/page.tsx
    the-vessel/common-areas/page.tsx
    about/page.tsx
    about/crew/page.tsx
    book-now/page.tsx
    packages/page.tsx
    dive-courses/page.tsx
    contact/page.tsx
    privacy/page.tsx
    sitemap.ts
    robots.ts
  components/
    layout/{site-header,site-footer,mobile-nav}.tsx
    ui/...
    sections/{hero,section-heading,cta-band}.tsx
    destinations/{destination-card,destination-grid}.tsx
    vessel/{amenity-card,cabin-card}.tsx
    booking/{trip-card,inquiry-form}.tsx
  content/{site,destinations,trips,crew,amenities}.ts
  lib/{routes,validation,seo}.ts
  styles/globals.css
public/images/ (approved, locally owned/authorized assets only)
```

### Type and content modeling

Prefer structured content to HTML fragments and duplicated constants. Example:

```ts
type TripStatus = "inquiry-open" | "full" | "completed" | "coming-soon";

type Trip = {
  id: string;
  title: string;
  year: number;
  destinationSlug: string;
  startDate?: string; // ISO date only when independently verified
  endDate?: string;
  status: TripStatus;  // managed by approved editorial source
  priceUsd?: number;  // only if owner-approved and current
  externalInquiryUrl?: string;
  lastVerifiedAt?: string;
};
```

- Keep contact details, navigation, social links, trip links, and SEO defaults in central configuration.
- When a field is missing, **omit it elegantly**; never backfill with fictitious numbers.
- Use real destination slugs, stable IDs, and `generateStaticParams` where appropriate.
- Treat external URLs as data; validate scheme and allowed destinations before use.
- Server components by default; client components only when interaction is needed.
- Never put email API keys, admin tokens, or private credentials in client code or source control.

## 7. Functionality and interaction requirements

### Navigation and shared UI

- Logo links to `/`; all visible links lead to meaningful pages or valid approved external destinations.
- Active route is apparent and screen-reader accessible (`aria-current="page"`).
- Dropdowns work by keyboard, not hover only.
- Mobile navigation closes on navigation, Escape, and overlay click.
- CTA labels distinguish **inquiry** from **reservation**.
- Image galleries include accessible captions and keyboard-friendly lightbox only if implemented fully.
- Carousels are optional; if used, provide pause/next/previous controls, avoid forced autoplay, and respect reduced motion.

### Forms and state handling

- All required inputs have visible labels and error messages tied by `aria-describedby`.
- Validate email, date ordering, guest count, message length, and server-side payload.
- Prevent duplicate submits while pending; offer retry and clear status messaging.
- Implement server-side throttling/spam protection before enabling public endpoints.
- For unconfigured services, show a nonfunctional **design-only** state only in development; in production, replace with working handler or contact link.
- Never log full inquiry personal data in client analytics.

### Accessibility (minimum)

- Semantic header/nav/main/section/footer structure and one clear H1 per page.
- WCAG 2.2 AA-aligned text contrast and visible focus styles.
- Interactive targets at least ~44×44 px where practical.
- No inaccessible text-on-image; overlays must preserve contrast against varied photos.
- Keyboard-test every menu, dialog, form, card action, and mobile drawer.
- Provide meaningful image alt text; decorative images get empty alt.
- Support screen readers, 200% zoom, reduced motion, and logical reading order.

### Performance / SEO / security

- Use responsive optimized AVIF/WebP assets and properly sized image sources.
- Prioritize the real above-the-fold hero image (no giant background video as LCP).
- Lazy-load below-the-fold media; avoid layout shifts by reserving dimensions.
- Add route-specific titles, descriptions, canonical URLs, Open Graph tags, sitemap, robots file, and destination structured data if genuinely applicable.
- Maintain URL redirects and stable slugs during migration.
- Sanitize/validate all inputs, handle errors without exposing stack traces, and use secure API/environment-variable practices.
- Avoid embeds and third-party scripts unless justified and consent/privacy reviewed.

## 8. Implementation phases for an AI coding agent

Complete phases in order. Ask for owner assets/information only where the missing item actually blocks truthful publication.

### Phase 0 — Audit repo and lock requirements

1. Inspect the existing codebase; identify stack and scripts.
2. Read both markdown documents.
3. List available approved branding/media and missing owner approvals.
4. Confirm project scope, content source, and whether inquiries use external Google Forms or a new backend.
5. Produce a short implementation plan; do not begin destructive changes.

### Phase 1 — Foundation

1. Add theme tokens from `design.md`, font setup, body styles, grid/container rules.
2. Build shared header, mobile navigation, footer, button, card, media, and CTA components.
3. Create content types and sample **verified** seed records with placeholders for unknowns.
4. Implement route shell, metadata defaults, 404, and legal/privacy placeholder for owner review.

### Phase 2 — Main guest journey (P0)

1. Homepage.
2. Destinations index and eight detail routes.
3. Vessel overview and accommodations.
4. Book Now inquiry flow and contact page.
5. Verify nav, forms, responsiveness, and accessibility.

### Phase 3 — Supporting content (P1/P2)

1. About, crew, common areas, chase boats.
2. Packages and courses after verifying current content.
3. Partners/promotions only when approved.
4. Finish SEO, redirects, gallery behavior, content editing rules.

### Phase 4 — Quality gate

- Run lint, TypeScript checks, build, relevant unit and browser tests.
- Check 320, 375, 768, 1024, and 1440 px widths; also 200% zoom.
- Validate nav, destinations, CTAs, footer links, missing-image fallbacks, external forms, form failures, 404, metadata.
- Inspect LCP image strategy and layout stability; verify at least basic Lighthouse accessibility and performance issues.
- Document what was verified, what remains unverified, and the exact changed files.

## 9. Acceptance criteria / definition of done

- [ ] The homepage instantly communicates **Philippine liveaboard diving aboard M/Y Palau Sport**.
- [ ] Every P0 route exists and loads without build/runtime errors.
- [ ] All eight referenced destinations have meaningful, consistent detail pages.
- [ ] Vessel accommodation and amenity information uses only approved facts.
- [ ] Booking CTAs clearly lead to current approved forms or a working inquiry process.
- [ ] No fake confirmed reservations, payments, prices, availability, testimonials, counters, or certifications.
- [ ] Contact details have been owner-verified and centralized.
- [ ] Mobile navigation and keyboard navigation work; no horizontal overflow.
- [ ] Images are licensed/authorized, optimized, and have appropriate alt text.
- [ ] Typography, colors, spacing, and component behavior match `design.md`.
- [ ] Lint, typecheck, build, and critical route tests pass.
- [ ] SEO, basic privacy copy, error states, and redirects are reviewed.
- [ ] A developer can update destinations, trips, and contact data in one predictable location.

## 10. Owner confirmation checklist (before public launch)

- [ ] Logo files, approved image gallery, photo credits/rights, optional vessel video.
- [ ] Brand palette/typeface, if an official identity system exists.
- [ ] Preferred phone/WhatsApp, email, and any street address.
- [ ] Vessel specs, safety claims, crew roster, and current amenities.
- [ ] Current 2026–2028 trip status, rates, schedule data, and public booking form URLs.
- [ ] Course offerings/prices, active promotions, partner approvals.
- [ ] Inquiry destination, backend provider, privacy policy, consent wording, and response expectations.
- [ ] Domain migration/canonical URL and legacy redirect list.

## 11. Reusable prompt to start each coding session

> Read `instructions.md` and `design.md` first. Briefly inspect the repository and tell me the exact phase and files you plan to modify. Build the Palau Sport website as a responsive, accessible, premium Philippine liveaboard diving experience. Follow the documented routes, content-truth rules, design tokens, component standards, and inquiry-first booking model. Do not invent availability, prices, reviews, or booking confirmations. Make the smallest maintainable changes, run available checks, and summarize results and unresolved approvals.

---

**Source reliability note:** Public page content was examined on October 19, 2026. Exact original CSS colors, font families, responsive breakpoints, and functional form delivery were **not** conclusively measured. The companion `design.md` therefore defines a **proposed** coherent redesign rather than claiming to extract the site's exact styles.
