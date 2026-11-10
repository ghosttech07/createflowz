# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Business owners and marketing leads in the US, UK and Canada who need a brand, a website or store, or more customers,
and are choosing a studio to hire. All four client types matter equally: e-commerce founders (Shopify and DTC brands),
startups launching from scratch, local businesses (restaurants, shops), and established companies buying a rebrand or
ongoing ads and SEO. They arrive deciding whether this studio is real, capable and worth a call.

## Product Purpose

Createflowz is a Branding & Web Studio. It designs brands, builds websites, stores and apps, then brings customers to
them with Google and Meta ads, SEO, social media and marketing. The homepage exists to make a visitor believe that and
start a project (send a brief or book a call). Success is qualified enquiries from the three markets.

## Positioning

One team takes a client from brand to store to sales, with no handoffs between agencies; projects ship fast; and every
month the client sees what their spend brought back in sales. Services group into Build (branding, packaging,
websites, apps) and Grow (Google ads, Meta ads, SEO, social media).

## Operating Context

Visitors compare several studios in tabs, often on a phone first, then return on a laptop. They look for real work
they can click through, a clear process, and how to start. Calls are booked across US and UK time zones; invoices in
USD, GBP or CAD.

## Capabilities and Constraints

- Next.js App Router site in this repo; all copy and images live in `src/content/site.ts`.
- Contact works by email brief (mailto plus copy-to-clipboard); no form backend and no booking link yet.
- A CMS (Sanity) is planned as the final step; content must stay structured for it.
- Undecided: founder name, studio city, booking link, prices, timelines, contract minimum.

## Brand Commitments

- Name: Createflowz. Descriptor: "Branding & Web Studio".
- Logo: a hand-drawn monoline wordmark ("CREATE" in condensed caps, "flowz" as one continuous line that becomes an
  underline), `public/brand/createflowz-mask.png`. The artwork stays exactly as it is, and the logo stays lime
  (#84FF00), confirmed by the user. The rest of the site's colours may change.
- Voice: plain, direct, specific; no agency buzzwords, no invented claims.
- Site direction (CLIENT-APPROVED, 2026-11-05): the "old screen" design is the one the client chose, and all work
  builds on it: lime #84FF00 and black #0A0A0A, Barlow Condensed display with Barlow text, the "BRAND IT. / SELL IT."
  hero split across a black/lime seam, Build/Grow tiles in a lime/dark diagonal, sticky case studies, a sticky-scroll
  "How a project runs" (LISTEN / CREATE / LAUNCH / FLOW pinned over photos), and a lime footer with the full-width
  logo. Design reference: https://claude.ai/artifact/FgMMJ1iGR8eSDo95uPKAm5 ("old screen").
- Superseded: the Ink and Cobalt redesign (2026-11-04, "new screen" canvas) was not chosen by the client. The
  `DESIGN.md` and `.impeccable/surfaces/src-app-page-tsx.md` files still describe that redesign and are out of date
  until regenerated from the current build.
- Signature interaction (user-requested): selected words scramble into random characters on hover and resolve back
  when the cursor leaves (now on the process words and the "See the work" link).

## Evidence on Hand

- Case studies (real client work, screenshots in `public/images/work/`):
  - Alt Pouches (altpouches.co.uk): UK nicotine-pouch brand; brand and can designs, Shopify store, ads, search and social.
  - Aram (aramcbd.co.uk): UK wellness gummies; Shopify store; rest of scope unconfirmed.
  - Melt Pizza (meltpizza.co.uk): stone-baked pizza in Southampton; website; rest of scope unconfirmed.
- No testimonials, client logos, review ratings, results numbers, team photos or prices yet. Do not fabricate any of them.

## Product Principles

- Show the work, not adjectives: real client stores carry the proof.
- One studio, end to end: the page should make the Build-to-Grow path obvious.
- Fast to understand: a first-time visitor knows what this is and how to start within seconds.
- Honest gaps: unfinished facts stay visible as placeholders, never invented.

## Accessibility & Inclusion

WCAG 2.2 AA: 4.5:1 text contrast, keyboard access, visible focus, reduced-motion support, 44px touch targets.
