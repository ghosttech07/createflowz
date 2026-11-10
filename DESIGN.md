---
name: Createflowz
description: Branding & Web Studio. Ink and Cobalt on warm white; the work is the hero.
colors:
  ground: "#f5f5f2"
  surface: "#ebebe6"
  surface-2: "#e2e2dc"
  ink: "#0e0e0e"
  ink-2: "#3a3a37"
  muted: "#66665f"
  rule: "rgb(14 14 14 / 0.12)"
  cobalt: "#2f4bff"
  cobalt-deep: "#1f37d6"
  on-cobalt: "#ffffff"
  on-ink: "#f5f5f2"
  on-ink-muted: "#a8a8a1"
  cobalt-on-ink: "#8a9bff"
  rule-on-ink: "rgb(245 245 242 / 0.16)"
  logo-lime: "#84ff00"
  danger: "#c4231b"
typography:
  display:
    fontFamily: "Hanken Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(64px, 12vw, 200px)"
    fontWeight: 800
    lineHeight: 0.88
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Hanken Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(44px, 6vw, 96px)"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Hanken Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(26px, 2.6vw, 40px)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  lead:
    fontFamily: "Hanken Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(19px, 1.6vw, 24px)"
    fontWeight: 400
    lineHeight: 1.45
  body:
    fontFamily: "Hanken Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Hanken Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.55
  control:
    fontFamily: "Hanken Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 700
rounded:
  none: "0px"
  device-frame: "30px"
  device-screen: "22px"
spacing:
  margin: "clamp(16px, 3.4vw, 56px)"
  gutter: "24px"
  section: "clamp(104px, 11vw, 176px)"
  header: "72px"
components:
  button-primary:
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.on-cobalt}"
    typography: "{typography.control}"
    rounded: "{rounded.none}"
    padding: "0 24px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.cobalt-deep}"
    textColor: "{colors.on-cobalt}"
  button-primary-large:
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.on-cobalt}"
    rounded: "{rounded.none}"
    padding: "0 32px"
    height: "60px"
  button-quiet:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink}"
    typography: "{typography.control}"
    rounded: "{rounded.none}"
    padding: "0 24px"
    height: "48px"
  button-quiet-hover:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
  chip:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0 18px"
    height: "44px"
  chip-hover:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink}"
  chip-selected:
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.on-cobalt}"
  header-bar:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-ink}"
    padding: "0 {spacing.margin}"
    height: "{spacing.header}"
  panel:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "clamp(24px, 3vw, 40px)"
  screenshot-mat:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.none}"
    padding: "14px"
  phone-frame:
    backgroundColor: "{colors.ink}"
    rounded: "{rounded.device-frame}"
    padding: "8px"
---

# Design System: Createflowz

## Overview

**Creative North Star: "The Work Is the Hero"**

A premium studio site in the category's own canon, built at the craft level of Basic/Dept: enormous statement type in a single grotesk, real client stores shown big on plain mats, and nothing decorative between them. The ground is a warm white, type is near-black ink, and one cobalt marks everything you can act on or that the page wants you to notice. Full-bleed ink bands (header, process, footer) are the only change of material; the hand-drawn lime logo lives on them and nowhere else.

Density is low and the rhythm is long: sections are separated by very large vertical gaps, lists are separated by hairline rules rather than boxes, and every surface is flat and square. The system confirmed its rejection of the dark, neon-accent agency template the studio used before; it chose convention on purpose and earns distinction through scale, restraint and one signature interaction.

Motion is quiet and purposeful: highlighted cobalt words scramble into random characters on hover or focus and resolve back letter by letter; case-study text stays pinned beside scrolling screenshots on desktop; screenshots settle from a slight zoom as they scroll into view; section parts rise in once.

**Key Characteristics:**
- Warm white ground, ink type, ink bands, one cobalt accent.
- Lime appears only in the logo mark, always on ink.
- One family (Hanken Grotesk), hierarchy carried by size and weight; display set huge and tightly tracked.
- Square corners, hairline rules at 12% ink, no shadows, no gradients.
- Scramble is the signature, and it belongs only to cobalt highlighted words.

## Colors

A two-voice palette: ink on warm white for everything, cobalt for action and emphasis, with lime reserved for the brand mark.

### Primary
- **Signal Cobalt** (cobalt): every button, every selected chip, the highlighted words ("Sell it.", "See the work"), focus rings, text selection and the brief-builder arrows. Hover deepens to **Pressed Cobalt** (cobalt-deep).
- **Lifted Cobalt** (cobalt-on-ink): cobalt raised in lightness for legibility on ink; used for the process dates, focus rings and scramble hover inside ink bands. Plain cobalt is never set as text on ink.

### Tertiary
- **Logo Lime** (logo-lime): the Createflowz wordmark mask in the header and the full-width footer mark. Nothing else.

### Neutral
- **Warm White Ground** (ground): page background, chip rest state, the brief preview line; also the text color on ink (on-ink).
- **Paper Mat** (surface): screenshot mats behind desktop shots, the brief-builder panel, quiet-button hover.
- **Pressed Paper** (surface-2): quiet buttons and chip hover.
- **Ink** (ink): all primary type, the header, process and footer bands, the phone frame.
- **Graphite** (ink-2): secondary text: leads, summaries, service descriptions, FAQ answers.
- **Stone** (muted): placeholders, meta lines, group labels, hints. On ink, placeholders and secondary text use **Ash** (on-ink-muted).
- **Hairline** (rule): 1px dividers between list rows on the ground; **Hairline on Ink** (rule-on-ink) does the same inside ink bands.
- **Alarm Red** (danger): the copy-to-clipboard failure message only.

### Named Rules
**The Lime Stays Home Rule.** Lime is the logo, and the logo sits on ink. Never use lime for text, buttons, highlights or any element on the warm white ground.

**The One Action Color Rule.** Cobalt means "act here" or "this word matters". No second accent, no blue decoration, no cobalt fills on non-interactive surfaces.

**The Lift on Ink Rule.** On ink, cobalt is always the lifted variant; the base cobalt is reserved for the light ground and for filled buttons.

**The Muted Placeholder Rule.** Unconfirmed facts in [brackets] render in Stone (Ash on ink) until the client supplies them; they never scramble and never take cobalt.

## Typography

**Display Font:** Hanken Grotesk (with Helvetica Neue, Arial, sans-serif)
**Body Font:** Hanken Grotesk (same family)

**Character:** One grotesk across the whole page. Hierarchy comes from scale and weight alone: 800 for statements and section titles, 700 for titles and controls, 400 for reading text.

### Hierarchy
- **Display** (800, clamp 64 to 200px, 18vw on phones, line-height 0.88, -0.04em): the two-line hero statement only.
- **Headline** (800, clamp 44 to 96px, 12vw on phones, line-height 0.92, -0.035em): section titles and case-study client names. The Build and Grow column headings sit a step below (800, clamp 32 to 56px, line-height 1).
- **Title** (700, clamp 26 to 40px, line-height 1.05, -0.02em): service names and process dates.
- **Lead** (400, clamp 19 to 24px, line-height 1.45): the hero sentence, contact sentence, FAQ questions and the brief question (the last two at 700).
- **Body** (400, 18px, line-height 1.55): reading text, held to 34 to 48ch.
- **Label** (400, 14px): case results, footer copy, hints.
- **Control** (700, 16px; nav at 600): buttons, chips, text links.

### Named Rules
**The Weight Carries It Rule.** Never introduce a second family, italics or uppercase tracking to create hierarchy; change size and weight.

**The Tight Display Rule.** Anything at headline size or larger is 800 with negative tracking (-0.035em to -0.04em) and line-height under 1.

## Layout

A 12-column grid with 24px gutters inside one pair of fluid outer margins (clamp 16 to 56px) that every section shares. Sections are separated by a very large fluid gap (clamp 104 to 176px). The fixed ink header is 72px (64px on phones) and the page scroll-pads under it.

Section heads split the grid: title across columns 1 to 7, lead across 8 to 12, aligned to the baseline end. The hero statement staggers across the full width: line one on the left margin, the cobalt line set to the right margin (left-aligned on phones).

Case studies alternate: text in columns 1 to 4 with screenshots in 6 to 12, then flipped. On desktop the text is sticky (72px header plus 40px) while the desktop screenshot and an overlapping phone screenshot scroll past. At 1100px and below the text unpins and drops under the shots, and the phone shot overlaps the desktop shot's lower right corner at 28% width.

Breakpoints: 1100px (tablet: process to two columns, contact stacks, footer to two columns) and 760px (phone: everything single-column, nav collapses into a Menu disclosure).

## Elevation & Depth

Flat. There are no shadows and no gradients anywhere. Depth is conveyed by material change: full-bleed ink bands against the warm white ground, and Paper Mat panels holding screenshots and the brief builder. The phone screenshot overlapping the desktop shot at tablet widths is the only layering, and it is done by position, not by shadow.

### Named Rules
**The Flat Material Rule.** Separate things with ink bands, Paper Mat surfaces or hairline rules, never with a shadow.

## Shapes

Square corners throughout (0px): buttons, chips, panels, mats, the mobile menu. Rows in lists (services, process steps, FAQ) are divided by a 1px hairline top rule, never boxed. The single rounded form is the phone frame around mobile screenshots (30px outer, 22px screen; 22px and 16px at tablet), because it depicts hardware rather than interface.

### Named Rules
**The Square Interface Rule.** Interface elements have no radius. Rounding is reserved for depicting a physical device.

**The Hairline List Rule.** Lists are rows separated by a 1px rule at 12% ink (16% warm white on ink), with generous padding above and below; no cards.

## Components

### Buttons
Solid, square and bold.
- **Shape:** square (0px), minimum height 48px, 24px horizontal padding.
- **Primary:** cobalt fill, white 700 text. Hover deepens to Pressed Cobalt over 200ms; press scales to 0.98.
- **Large:** 60px tall, 32px padding, 18px text; the hero action.
- **Header:** primary at 44px tall (14px padding on phones).
- **Quiet:** Pressed Paper fill with ink text; hover lightens to Paper Mat. Used for secondary actions (copy the brief).
- **Text link:** 700, underlined (2px thickness, 0.28em offset), 44px hit area; hover turns cobalt. In the hero it is a cobalt highlighted word and scrambles.
- **Focus:** 3px cobalt outline, 3px offset (Lifted Cobalt inside ink bands).

### Chips
- **Style:** square, 44px tall, 18px padding, warm white fill on the Paper Mat panel, ink 600 text.
- **State:** hover to Pressed Paper; selected (aria-pressed) fills cobalt with white text; press scales to 0.96.

### Cards / Containers
- **Corner Style:** square (0px).
- **Background:** Paper Mat for the brief panel (padding clamp 24 to 40px) and for desktop screenshot mats (14px padding).
- **Shadow Strategy:** none (see Elevation & Depth).
- **Border:** none; the mobile menu alone carries a Hairline on Ink border.

### Navigation
Fixed ink bar, 72px: lime logo mark on the left, four links (600, 16px) and a cobalt Start a project button on the right. Links underline with a 2px bar that wipes in from the left on hover and stays for the section in view. On phones the links collapse into a "Menu" disclosure that opens a square ink panel.

### Scramble (signature)
Cobalt highlighted words scramble into random capitals, digits and symbols while hovered and resolve back left to right on leave. Inside a link or button, keyboard focus drives it too. The real text stays in the DOM holding the width; the scramble is an aria-hidden overlay. Under reduced motion it does nothing. Used on "Sell it.", "See the work" and the confirmed process dates.

### Case Study
Sticky text column (client name at headline size, summary in Graphite, what we did, result at label size, a "Visit" text link) beside a desktop screenshot on a Paper Mat and a phone screenshot in an ink frame. Desktop screenshots settle from 1.08 scale to 1 as they scroll into view (scroll-driven, off under reduced motion).

### Brief Builder
A Paper Mat panel: the question, labelled groups of chips, a live preview line on warm white that joins picks with cobalt arrows, then the send (primary), copy (quiet) and call (text link) actions with a Stone hint.

## Do's and Don'ts

### Do:
- **Do** use cobalt (#2f4bff) for every action and every highlighted word, and the lifted cobalt (#8a9bff) for the same roles on ink.
- **Do** keep the lime logo on ink: in the header bar and the footer band.
- **Do** set statements at 800 weight with negative tracking and line-height under 1.
- **Do** separate list rows with a 1px hairline at 12% ink and generous padding.
- **Do** show client work big, on a Paper Mat for desktop and in an ink phone frame for mobile.
- **Do** limit scramble to cobalt highlighted words, drive it from focus when it sits in a link, and switch it off under reduced motion.
- **Do** render unconfirmed facts as muted [bracketed] placeholders.

### Don't:
- **Don't** use lime anywhere but the logo, or put the logo on the warm white ground.
- **Don't** add shadows or gradients; change material (ink band, Paper Mat) instead.
- **Don't** round interface corners; only the phone frame is rounded, because it depicts a device.
- **Don't** add a second typeface, or uppercase tracked labels to build hierarchy.
- **Don't** scramble ink text, body copy or placeholders.
- **Don't** set base cobalt as text on ink.
- **Don't** drift back toward the dark, neon-accent agency template.
