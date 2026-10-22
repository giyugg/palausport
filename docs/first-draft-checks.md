# First draft verification — October 22, 2026

The local website draft follows the route, content-truth and visual requirements in `instructions.md` and `design.md`. It is not publicly deployed. Owner approvals remain necessary before launch.

## Completed checks

| Check | Result |
| --- | --- |
| `npm run lint` | Passed |
| TypeScript | Passed, including the final production build |
| `npm run build` | Passed; 38 framework-generated pages/entries |
| Git whitespace check | Passed |
| Public route smoke checks | 27 routes returned HTTP 200 |
| Legacy routes | All six configured redirects returned HTTP 308 to the expected route |
| Invalid destination | Production response HTTP 404 and custom recovery page |
| Homepage responsive layout | No horizontal overflow at 320, 375, 768, 1024 or 1440 CSS pixels |
| Representative inner pages | No horizontal overflow at 320, 768 or 1440 CSS pixels |
| Desktop navigation | Keyboard opens dropdown; Escape closes it |
| Mobile navigation | Focus stays in dialog; Escape/overlay dismiss; focus returns to trigger |
| Destination filtering | Wrecks & reefs filter displays Busuanga / Coron |
| Contact composer | Destination preselection, field errors, date ordering and encoded email draft passed |
| Inquiry delivery language | Explicitly says nothing has been sent; email requires visitor review/send |
| Retained confirmation handler | External, protocol-relative, normalized and malformed redirect cases remain on origin |
| Reduced motion | Preference matched; smooth scrolling disabled and transitions reduced |
| Zoom-equivalent reflow | No overflow at 720 CSS pixels / 1440 physical pixels; mobile navigation selected |
| Draft indexing | Public pages include noindex/nofollow; robots disallows crawling |
| Browser errors | No uncaught exceptions during the integration checks |

Browser checks used the installed headless Chrome through the DevTools protocol and the local production server. Zoom-equivalent metrics test layout reflow; native browser zoom and physical device testing remain manual checks.

## Lighthouse

Official Lighthouse 12.8.2, simulated mobile, production homepage:

- Performance: **87**; accessibility: **100**.
- First Contentful Paint: 0.9 seconds; Largest Contentful Paint: 3.9 seconds.
- Total Blocking Time: 130 ms; Cumulative Layout Shift: **0**.
- Verified hero eager/high-priority discovery and matching visible/accessibility link labels.
- Further opportunities: image compression (estimated 73 KiB), unused JavaScript (estimated 50 KiB).

These are local lab results, not field performance or a full WCAG certification. Full Lighthouse JSON, browser output and desktop/mobile screenshots are retained locally under ignored `test-results/`.

## Main implementation files

- `app/page.tsx`, `app/globals.css`, `app/layout.tsx`: homepage, ocean theme and shared shell.
- `app/destinations/`, `app/the-vessel/`, `app/about/`, `app/packages/`, `app/book-now/`, `app/contact/`: main guest journey and supporting content.
- `app/dive-courses/`, `app/partners/`, `app/promotions/`, `app/privacy/`, `app/image-credits/`: truthful supporting states and disclosure.
- `components/site/`: navigation, sections, destination explorer, attribution and email composer.
- `content/`: typed destinations, central site details, image provenance and font documentation.
- `public/images/`, `public/fonts/`: local licensed assets and font licenses.
- `lib/inquiry.ts`, `lib/metadata.ts`: validation/email preparation and page metadata.
- `next.config.ts`, `proxy.ts`, `eslint.config.mjs`, `tailwind.config.ts`: legacy redirects, public-route access and repaired checks.
- `app/icon.svg`, `app/robots.ts`, `app/sitemap.ts`, `app/not-found.tsx`: brand icon, indexing, sitemap and recovery.
- `README.md`, `.env.example`: setup, editing map and launch requirements.

The starter favicon and social images were replaced with the draft identity and licensed destination imagery. The remaining authentication/tutorial code is not linked from the visitor site. Next.js generated `AGENTS.md` when the development server started.

## Still awaiting owner input

Official identity, yacht and cabin photography; content and vessel specification sign-off; canonical contact number; current trip dates/rates/inquiry links; crew, courses and approved promotions/partners; final privacy policy and domain migration details. No live email delivery or booking inventory is represented by this draft.
