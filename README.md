# Createflowz website

Next.js (App Router) homepage for Createflowz.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000. The page reloads as you edit.

## Editing the site

**All words, links and images are in [`src/content/site.ts`](src/content/site.ts).** Change text there and save;
you never need to touch the layout files for copy changes.

| To change | Edit in `site.ts` |
| --- | --- |
| Email, booking link, who clients talk to | `contact` |
| Hero headline, sentence and buttons | `hero` |
| The four service fields | `services.items` |
| Case studies | `work.cases` |
| Process steps | `process.steps` |
| Testimonial (hidden until `show: true`) | `testimonial` |
| FAQ | `faq.items` |
| Contact picker options | `brief` |
| Footer and clocks | `footer` |

Case-study screenshots live in `public/images/work/` (laptop 1440×900 and phone 390×844).
To add a case study, drop its two screenshots there and add an entry to `work.cases`.
The logo is `public/brand/createflowz-mask.png` (white on transparent; the site recolours it).
Send an SVG of the logo when you have one and it will replace the PNG.

Colours, fonts and sizes are tokens at the top of [`src/app/globals.css`](src/app/globals.css) (`--accent` is the logo lime).

### Placeholders to replace before launch

Anything in **[square brackets]** shows in a muted grey on the page, and only the bracketed part is greyed:

- `contact.email` (confirm `hello@createflowz.com`) and `contact.bookingUrl` (a Calendly or Cal.com link; while it is
  empty, no booking link is shown)
- Founder name, studio city and the reply-time promise in `contact`
- One real result for each case study, and the rest of the Aram scope
- The build timeline in `process.steps`, and FAQ prices, timelines and minimum term
- Privacy policy link

The testimonial section is hidden until a real quote exists; fill `testimonial` and set `show: true`.

### Client sites

Visitors will click through from the case studies, so fix these on the client sites first:

- Alt Pouches: a "Lorem Ipsum" placeholder under "EVERY ALT FLAVOR IN ONE EXCLUSIVE PACK!".
- Melt Pizza: a full-screen popup still says "We're closing for the winter season and will see you in 2026".
  The Melt screenshots here were taken with that popup closed.

## Next step: a visual editor (CMS)

`site.ts` is shaped so each block maps to a Sanity document type. Connecting Sanity will let non-developers
edit everything in a browser dashboard, with case studies as their own pages.

## Deploy

Push to GitHub and import the repo on Vercel; no configuration is needed.
