# Palau Sport — Website Design System & AI Design Rules

> **Version:** 1.0  
> **Research date:** October 19, 2026  
> **Design direction:** Premium nautical adventure · Calm, confident, welcoming  
> **Companion document:** [`instructions.md`](./instructions.md)

## 1. Design intent

Create a premium, modern, editorial travel website for **M/Y Palau Sport**, a Philippines-based liveaboard dive yacht. The visual experience should feel like **entering a high-quality dive expedition brochure**: clear sea blues, generous whitespace, cinematic photography, elegant typography, restrained motion, and purposeful CTAs.

The existing site emphasizes Philippine marine biodiversity, prominent destinations, boat facilities, guest comfort, licensed dive professionals, travel reviews, and an inquiry-led booking process. Carry that **character and content hierarchy** into a cleaner, more accessible, mobile-first presentation.

> **Important distinction:** The palette, fonts, spacing values, and interaction specifications below are **proposed design tokens**, not verified pixel/color/font measurements of the reference website. They are an intentional, coherent refresh inspired by the ocean, the yacht's blue-and-white appearance, and the site's content. Replace them with approved official brand standards if supplied.

### Desired adjectives

**Oceanic · Refined · Adventurous · Human · Trustworthy · Spacious · Photographic**

### Avoid

Generic travel-template gradients, neon cyan UI, glassmorphism everywhere, heavy drop shadows, bubbly dashboard widgets, overly rounded pills on every component, tiny gray text, fake ratings, irrelevant stock scenery, crowded mega menus, unlicensed imagery, enormous animated counters, and excessive parallax.

## 2. Visual hierarchy

1. **Authentic imagery:** Divers, the Palau Sport yacht, reefs, cabins, dive deck, and Philippine seascapes.
2. **Clear editorial headlines:** One strong idea per section; large but balanced.
3. **Readable supporting copy:** Brief, calm, informative; avoid repetitive marketing clichés.
4. **Decisive primary action:** Book/Inquire or Explore Trips.
5. **Evidence of quality:** Verified facilities, destinations, approved guest experiences, not fabricated statistics.

Use imagery to inspire the visitor and typography to organize the content. A user must never have to decode a stylized layout to find booking/contact actions.

## 3. Color tokens (proposed)

The principal **Deep Ocean** and **Royal Marine** blues are inspired by nautical surroundings and the yacht's photographed blue-and-white profile. The following hex values are design recommendations and **not measured original-brand codes**.

| Token | Hex | Usage |
| --- | --- | --- |
| `ocean-950` | `#092638` | Darkest footer, high-contrast image overlays. |
| `ocean-900` | `#10364B` | Main headings, dark surfaces, primary button. |
| `ocean-800` | `#154B68` | Navigation/accent headings, hover surfaces. |
| `marine-600` | `#146B8C` | Links, focus-adjacent accents, secondary highlights. |
| `marine-500` | `#208AA7` | Decorative ocean accent, large icon accents (not small body text). |
| `seafoam-100` | `#E8F5F5` | Subtle highlighted section background. |
| `mist-50` | `#F6F9FA` | Alternate surface / section background. |
| `sand-300` | `#E6D4B6` | Sparse warm editorial separators/chips. |
| `white` | `#FFFFFF` | Main page canvas and cards. |
| `ink` | `#1D323F` | Body copy on light backgrounds. |
| `muted` | `#526672` | Secondary copy, field help text. |
| `border` | `#D9E5E9` | Subtle component borders. |
| `success` | `#246B50` | Confirmed successful inquiry submission ONLY. |
| `error` | `#A63C3C` | Validation and actual error states. |

### Semantic CSS tokens

Create CSS variables (or equivalent Tailwind v4 theme tokens) in one global location:

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f6f9fa;
  --color-surface-accent: #e8f5f5;
  --color-text: #1d323f;
  --color-text-muted: #526672;
  --color-heading: #10364b;
  --color-primary: #10364b;
  --color-primary-hover: #154b68;
  --color-accent: #146b8c;
  --color-border: #d9e5e9;
  --color-footer: #092638;
  --color-error: #a63c3c;
  --color-success: #246b50;

  --radius-sm: 0.375rem;
  --radius-md: 0.75rem;
  --radius-lg: 1rem;
  --radius-xl: 1.25rem;
  --container-max: 76rem;
  --header-height: 5rem;
}
```

### Usage rules

- **Light theme is the default**, with alternating white and very light mist/seafoam sections.
- Most copy is dark navy/ink on white; use light type only against sufficiently dark, consistent backgrounds.
- Primary action: solid `ocean-900` button with white text; hover `ocean-800`.
- Secondary action: transparent/white background, `ocean-900` border and label.
- Use `marine-600` for links on light backgrounds; avoid bright cyan text for small print.
- Sand is a **sparingly used** supporting note; not the primary button color.
- Never rely on color alone to convey trip status or form errors.
- Test exact contrast pairings against WCAG AA; adjust tokens if needed rather than compromising legibility.
- Hero images need a dark gradient overlay when text sits on photography. Use a positioning-aware gradient instead of a uniform opaque layer.

## 4. Typography (proposed)

**Headings:** `Lora` (editorial, maritime-travel warmth; replace if approved brand font differs).  
**Body, navigation, buttons, forms:** `DM Sans` (clean, modern, readable).  
**Fallback:** Georgia/serif for headings; system-ui/sans-serif for body.  
**Source:** Recommended pairing, **not** a claim that these exact fonts appear on the original website.

| Style | Desktop | Mobile | Line height | Notes |
| --- | --- | --- | --- | --- |
| Hero H1 | `clamp(3.25rem, 5.3vw, 5.75rem)` | scales to ~2.5–3.25rem | 1.04–1.13 | Limit to ~2–3 lines; natural wrapping. |
| Page H1 | `clamp(2.75rem, 4.8vw, 4.75rem)` | ~2.4rem | 1.08–1.15 | One per route. |
| H2 | `clamp(2.1rem, 3.4vw, 3.35rem)` | ~1.9–2.3rem | 1.15 | Clear section hierarchy. |
| H3 | `clamp(1.35rem, 2vw, 1.75rem)` | ~1.3rem | 1.3 | Card/feature headings. |
| Body large | `1.125rem` | `1rem–1.125rem` | 1.65 | Section intros. |
| Body | `1rem` | `1rem` | 1.6–1.75 | Main content; 60–72 character lines. |
| Caption / eyebrow | `0.8–0.875rem` | `0.8rem` | 1.4 | Use letter spacing subtly. |
| Buttons/nav | `0.875–1rem` | `0.9–1rem` | 1.25 | Clear labels, no ultra-thin weights. |

**Rules:** Use sentence/title case for editorial headings, short uppercase eyebrows only where useful; avoid full paragraphs in uppercase. Maintain at least 16 px input text to reduce mobile zoom. Choose 400/500/600/700 font weights only as needed; avoid unstyled font mashups. Do not place long paragraphs in a narrow text overlay on imagery.

## 5. Layout and spacing

### Global frame

- Max content width: **1216 px** (`76rem`) including content padding.
- Standard horizontal page gutter: **24 px desktop/tablet**, **16–20 px mobile**; expand to 32–40 px on wide screens as appropriate.
- Section vertical padding: **96–120 px desktop**, **64–80 px tablet**, **48–64 px mobile**.
- Main content grid: **12 columns desktop**, **6 columns tablet**, **4 columns mobile** if needed; implement with responsive CSS Grid rather than arbitrary offsets.
- Use generous whitespace with deliberate section breaks; do not treat every section as a bordered card.
- Text blocks normally max `65–72ch`; editorial intros max `45–58ch`.

### Spacing scale

`4 / 8 / 12 / 16 / 24 / 32 / 40 / 48 / 64 / 80 / 96 / 120 px`.

Use the scale rather than custom margin values for each component. Typical card padding: **24–32 px desktop**, **20–24 px mobile**. Default gaps in card grids: **24 px desktop**, **16 px mobile**.

### Breakpoints

Use normal framework breakpoints (e.g., Tailwind `sm`, `md`, `lg`, `xl`) while testing at **320, 375, 768, 1024, 1440 px**. Switch full desktop navigation to mobile before links become cramped, commonly around 1024 px. Do not introduce horizontal scrolling except inside intentionally scrollable data tables/galleries with clear controls.

## 6. Imagery and media direction

This site is **photography-led**, not illustration-led. The existing site features yacht photography, deck/common-area photos, dive scenes, destination galleries, boat diagrams, and video content.

### Priority imagery

1. Hero: authorized **M/Y Palau Sport yacht at sea**, or exceptional real diver/reef photograph strongly tied to the operator.
2. Destination cards: identifiable reef/marine-life/scenic photography relevant to each destination.
3. Vessel: real yacht exterior, sun deck, dive deck, chase boats, cabins, dining area.
4. Proof: approved, authentic guest/group photos and testimonials.

### Image treatment

| Usage | Ratio | Treatment |
| --- | --- | --- |
| Homepage hero | 16:9 to 21:9 crop | Full-bleed, focal point preserved, graduated dark overlay for legible headline. |
| Destination listing | 4:5 or 3:4 | Tall editorial card with image, subtle gradient, label, and simple CTA. |
| Featured vessel | 3:2 or 16:10 | Large image in split layout; minimal border radius. |
| Cabin/amenity image | 4:3 | Honest room details, no exaggerated filters. |
| Detail-page hero | ~16:7 or 16:9 | Full-width image with a prominent but concise headline. |
| Gallery | Mixed ratios within tidy grid | Original image aspect preserved; optional accessible lightbox. |

- Optimize AVIF/WebP and use actual `width`, `height`, `sizes`, and descriptive filenames.
- Keep essential text as HTML, never baked into an image.
- Avoid heavy filters that misrepresent destinations or vessel conditions.
- No external hotlinking as a production dependency; obtain reuse permissions and local approved copies.
- Don't use AI images that imply they depict the real yacht, crew, cabin, or trip.
- Add captions/credits where required; alt text describes meaningful visual content, not SEO stuffing.
- If a required asset is not approved yet, use a neutral labeled placeholder **during development** and make publication dependent on approval.

## 7. Header and navigation design

### Desktop header

- Clean and quiet, approximate height **80 px**, logo left, navigation center/right, CTA at far right.
- Over a hero, an optional transparent header with white links is acceptable **only** when the image contrast is dependable; transition to solid white or navy on scroll. For simpler reliability, use a solid white header throughout.
- Logo width roughly 140–190 px depending on approved source aspect ratio.
- Dropdown: white panel, subtle border/shadow, generous clickable areas; text labels and chevron indicators.
- Avoid more than 7–8 top-level labels across desktop; group secondary links logically.

### Mobile header

- 64–72 px tall; logo, optional compact CTA, accessible menu toggle.
- Drawer with full-width tap rows, clearly named expandable groups, back/close affordance, and overlay.
- Focus management and scroll locking when the drawer is open; background content should not remain keyboard reachable.
- Strong `Book / Inquire` CTA within the drawer.

## 8. UI component rules

### Buttons

| Type | Appearance | Use |
| --- | --- | --- |
| Primary | Solid dark ocean, white label, 10–12 px radius, 44–48 px min height | Booking/inquiry and main hero CTA. |
| Secondary | White/transparent with dark border and label | View vessel, alternate hero CTA. |
| Tertiary | Text + simple arrow icon, underline/focus state | Card learn-more actions. |
| Light inverse | White fill with dark label, or outlined white | Dark CTA bands and photo-overlaid areas. |

Buttons use concise verbs: **Explore Trips**, **View Destination**, **Explore the Yacht**, **Request Availability**, **Contact the Team**. Avoid multiple identical primary CTAs side by side. Every button must navigate or perform a documented action.

### Cards

- Destination: edge-to-edge image, tasteful gradient overlay or caption panel, destination name, one-line hook, accessible link.
- Trip: destination/season, verified dates if known, clear status and inquiry CTA. **No** speculative price, discount percentage, or remaining seats.
- Cabin: real room photography, cabin name, verified amenities, a simple “Ask About This Cabin” action.
- Amenity: photography where available, short title/body, no giant icon where real imagery works better.
- Card radius: **12–16 px**, subtle border, very light shadow or none; do not nest many cards.
- Hover: slight image scale (e.g., 1.02–1.04), subtle shadow/underline changes. Always provide keyboard-visible equivalent.

### Forms

- Form controls ~**48 px** tall, white background, `1px` border, medium corner radius.
- Label **above** the field; placeholder is example text, not a replacement for labels.
- Focus: obvious 2 px outline/ring with proper contrast; invalid: colored border plus icon/text explanation.
- On submit: pending, success, and failure states must reflect the **actual** service result.
- Confirmation language for an inquiry: “Your inquiry has been sent. Our team will follow up.” **Only show on successful delivery.**
- Date selectors must remain usable with keyboard and mobile input; enforce end date after start date.
- Include privacy/help text near submit when personal data is collected.

### Badges and statuses

Use small restrained badges only when status is meaningful. Examples: `Inquiry Open`, `Fully Booked`, `Completed`, `Coming Soon` — **only if sourced and current**. Never use `Available Now` without real evidence. Prefer neutral status text over colorful attention-grabbing pills.

### Galleries and video

- Responsive masonry-like grid is fine, but maintain logical DOM reading order.
- Optional lightbox must support Escape, arrows, focus, captions, and screen-reader names.
- Video thumbnail + explicit play action; no audio autoplay. Provide captions or transcript where feasible.

## 9. Section-level composition

### 9.1 Homepage — visual storyboard

**A. Cinematic hero**

- Wide photo, left-aligned or centered-legible text over a dark gradient.
- Eyebrow: `PHILIPPINE LIVEABOARD DIVING`.
- Suggested headline (draft marketing copy, needs owner approval): **“Discover the Philippines beneath the surface.”**
- Subcopy: introduce M/Y Palau Sport as the home base for curated diving adventures.
- Primary `Explore Trips`; secondary `Explore the Yacht`.
- The first scroll should reveal destination imagery, not four paragraphs or an enormous form.

**B. Featured dive destinations**

- Eyebrow → strong serif H2 → brief intro → 3 highlighted destination cards.
- Use **Anilao, Apo Reef, Tubbataha Reef** as observed reference highlights.
- Desktop three-column grid; mobile one-column or accessible horizontal scroller.

**C. About / vessel introduction**

- White or mist section with split 55/45 photograph and text.
- Feature real information: guests, cabin types, dive deck, guest comfort; no unapproved hardcoded facts.
- CTA: `Discover the Yacht`.

**D. Experiences / facilities**

- Three or four editorial feature blocks, such as `Dive Deck`, `Cabins`, `Common Areas`, `Experienced Crew`, pending owner confirmation.
- Avoid giant numeric counters entirely unless data is verified and useful.

**E. Featured trips**

- Restrained package cards with year, region, status, verified dates/rates where available.
- If current data is unavailable, show **“Plan your next dive adventure — ask our team for schedules.”** and an inquiry CTA rather than fake cards.

**F. Authentic testimonials**

- One or two generous quote blocks with approved attribution; restrained treatment, not random star ratings.
- Hide until approvals are provided.

**G. How booking works**

- Three-step horizontal row on desktop / vertical stack on mobile:
  1. Find a destination or trip.
  2. Request details or submit the linked form.
  3. The reservations team confirms next steps.
- Do not show payment or reservation success as if automatic.

**H. Final inquiry callout**

- Deep ocean background, calm heading, one line of reassurance, `Contact the Team` / `Book / Inquire` button.
- Footer follows with useful information, not heavy marketing animations.

### 9.2 Destination detail

Hero with destination identity → editorial description → 3–5 locally relevant highlight blocks → photo gallery → trip information (verified) → inquiry form/CTA → related destination cards. Use nuanced safety/conservation language, especially for protected wildlife and more challenging current conditions. Do not guarantee specific animal encounters.

### 9.3 Vessel and accommodation

Open with real vessel photography; follow with owner-verified specifications in readable groups. Pair broad exterior/deck images with specific amenity copy. Cabins get comparable cards and amenity lists, not stylized mock hotel photos. Embed blueprint/deck plans **only when approved and legible**.

### 9.4 Book Now

No fake calendar checkout. Use a clear introduction, current campaigns/trips, inquiry status, human booking steps, FAQs if confirmed, contact fallback, and **real** approved external forms or a functioning inquiry channel. External form destinations must be clearly disclosed.

### 9.5 Contact

Split layout (form + contact options) on desktop, stacked on mobile. Clear email/WhatsApp links, no invented map pin for an unspecified street address. Form validation should look professional without excessive warning red.

## 10. Motion and micro-interactions

- Transitions usually **150–250 ms**, easing softly.
- Cards may rise at most 2–4 px or gently zoom images on hover.
- No full-screen loader for an ordinary static page; no scroll-jacking.
- Use CSS where possible; prefer no animation to janky animation.
- Respect `prefers-reduced-motion: reduce`.
- Dropdowns, drawers, accordions, and dialogs should respond instantly enough to feel reliable.

## 11. Responsive visual behavior

| Component | Wide desktop ≥1200 | Tablet 768–1199 | Mobile <768 |
| --- | --- | --- | --- |
| Header | Full nav and CTA | Condensed nav or drawer | Logo + menu; CTA in drawer |
| Hero | Tall wide editorial image | Shorter, safe copy width | Taller crop, shorter heading/copy, stacked CTAs |
| Destination grid | 3 cards | 2 cards | 1 card |
| Vessel split | Image/text side by side | Balanced stacked or split | Image then concise text |
| Trip cards | 3 or 2 columns | 2 columns | Single column |
| Inquiry form | 2-column fields where helpful | 2 columns optional | Single column, full-width submit |
| Footer | 3–4 columns | 2 columns | Stacked, clear headings |

At 320 px no clipping, truncated navigation, horizontal scrolling, or tiny buttons. At 200% zoom, content must reflow naturally. Keep hero text visible even when the photo crops heavily.

## 12. Accessibility and consistency constraints

- All text-on-image must be readable with gradient placement **tested against the exact approved photo**.
- Maintain a sensible heading outline: H1 page title, H2 sections, H3 subsection/card titles.
- Focus indicators are obvious on nav items, links, cards, inputs, and icon buttons.
- Cards have semantic links; do not make entire containers clickable while also nesting competing buttons.
- Icon-only actions include accessible labels; do not communicate meaning through marine icons alone.
- Preserve meaningful color contrast in hover/active/disabled states.
- Buttons, radius, spacing, and typography must be drawn from documented tokens, not invented per page.
- If a component requires a new token or pattern, add it here first so future generation remains consistent.

## 13. Copywriting style

- **Voice:** warm, confident, knowledgeable, safety-conscious, quietly adventurous.
- **Audience:** divers from the Philippines and abroad; internationally readable English.
- Prefer exact destination names, specific meaningful experiences, and short paragraphs.
- Describe wildlife as potential sightings, never guarantees.
- Avoid unsupported superlatives such as “the safest,” “number one,” “world's best,” or “guaranteed.”
- Keep key CTAs consistent: `Explore Trips`, `Explore Destinations`, `Discover the Yacht`, `Request Availability`, `Contact the Team`.
- When replacing original copy, preserve verified meaning without reproducing typos or stale claims. New copy requires editorial approval.

## 14. AI generation rules — visual quality gate

Before accepting a page or component, check all of the following:

- [ ] It unmistakably belongs to a **Philippine liveaboard diving business**, not generic tourism or sportswear.
- [ ] Uses the proposed oceanic palette consistently and legibly.
- [ ] Uses the defined typography, page gutters, section rhythm, border radii, and button styles.
- [ ] Hero and destination photos feel authentic, sharp, and appropriately cropped.
- [ ] The page has one prominent action but doesn't overwhelm with repeated buttons.
- [ ] Sections have distinct purpose and enough breathing room.
- [ ] No fake counters, availability, prices, testimonials, scarcity, or reviews.
- [ ] 320 px mobile layout, keyboard, focus, and reduced-motion cases are sound.
- [ ] Text and alt labels remain useful when images fail to load.
- [ ] Design looks coherent across homepage, destination pages, vessel, booking, and contact.

## 15. Tiny illustrative token usage

```tsx
// Example of intent, not a required framework-specific component implementation.
<a
  href="/book-now"
  className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[var(--color-primary)] px-6 font-semibold text-white transition-colors hover:bg-[var(--color-primary-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
>
  Book / Inquire
</a>
```

**Do not** apply these styling details independently of `instructions.md`: the link must go to the appropriate verified flow, and booking language must not imply an automatic reservation.

---

### Research links

- [Palau Sport homepage](https://palausport.com/home/)
- [Destinations](https://palausport.com/destinations/)
- [Vessel](https://palausport.com/the-vessel/)
- [Accommodation](https://palausport.com/the-vessel/accommodation/)
- [Book Now](https://palausport.com/book-now/)
- [Contact](https://palausport.com/contact-us/)

**Provenance:** Content hierarchy and business details came from publicly retrieved reference pages. Colors, CSS variables, typography, component dimensions, transitions, and layout direction are **original recommendations**, not extracted specifications.
