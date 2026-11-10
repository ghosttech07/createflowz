import Image from "next/image";
import type { ReactNode } from "react";
import { Copy } from "@/components/Copy";
import { Enhancements } from "@/components/Enhancements";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { PostsRail } from "@/components/PostsRail";
import { ProcessCards } from "@/components/ProcessCards";
import { WhatWeDo } from "@/components/WhatWeDo";
import { faq, hero, posts, process, services, statement, testimonial, work, contact } from "@/content/site";

// Layout only. Every word and image comes from src/content/site.ts.
// Version 2: light grey and white sections built from rounded cards, with one highlighted word per headline.

// Wraps `word` inside `text` in a lime highlight pill.
function hl(text: string, word: string): ReactNode {
  const i = text.lastIndexOf(word);
  if (i < 0) return text;
  return (
    <>
      {text.slice(0, i)}
      <mark className="hl">{word}</mark>
      {text.slice(i + word.length)}
    </>
  );
}

const Plus = () => (
  <span className="v2-plus" aria-hidden="true">
    <svg width="12" height="12" viewBox="0 0 12 12">
      <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  </span>
);

const Arrow = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
    <path d="M3 11L11 3M4.5 3H11v6.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

const serviceNames = services.groups.flatMap((g) => g.items.map((s) => s.name));
const audiences = ["Startups", "Online stores", "Local businesses", "Established brands"];

export default function Home() {
  return (
    <>
      <SiteHeader home />

      <main id="main" tabIndex={-1} className="v2">
        {/* Hero: headline on the left; a laptop with the latest store and three floating cards on the right. */}
        <section className="v2-hero" data-chapter="paper" aria-labelledby="hero-title">
          <div className="v2-hero-copy">
            <p className="v2-eyebrow" data-reveal>
              {hero.eyebrow}
            </p>
            <h1 id="hero-title" className="v2-hero-title" data-reveal>
              <span className="v2-line">{hero.lineOne}</span>{" "}
              <span className="v2-line">
                <mark className="hl">{hero.lineTwo}</mark>
              </span>
            </h1>
            <p className="v2-hero-sub" data-reveal>
              {hero.sentence}
            </p>
            <div className="v2-actions" data-reveal>
              <a href={hero.primaryCta.href} className="v2-btn">
                {hero.primaryCta.label}
                <span className="v2-btn-dot">
                  <Arrow />
                </span>
              </a>
              <a href={hero.secondaryCta.href} className="v2-link">
                {hero.secondaryCta.label}
              </a>
            </div>
          </div>

          <div className="v2-hero-art" data-reveal>
            {/* An open MacBook, drawn in 3D with CSS, showing the Createflowz site. */}
            <div className="mbp" aria-hidden="true">
              <div className="mbp-scene">
                <div className="mbp-lid">
                  <div className="mbp-screen">
                    <Image src="/images/hero/createflowz-site.jpg" alt="" width={1440} height={900} sizes="(max-width: 900px) 90vw, 46vw" priority />
                  </div>
                  <span className="mbp-notch" />
                </div>
                <div className="mbp-base">
                  <div className="mbp-keys" />
                  <div className="mbp-pad" />
                  <div className="mbp-front" />
                </div>
              </div>
            </div>
            <div className="v2-float v2-float-lime">
              <p className="v2-float-title">{statement.label}</p>
              <svg className="v2-squiggle" viewBox="0 0 220 12" preserveAspectRatio="none" aria-hidden="true">
                <path d="M0 6c4-5 7-5 11 0s7 5 11 0 7-5 11 0 7 5 11 0 7-5 11 0 7 5 11 0 7-5 11 0 7 5 11 0 7-5 11 0 7 5 11 0 7-5 11 0 7 5 11 0 7-5 11 0 7 5 11 0 7-5 11 0 7 5 11 0 7-5 11 0 7 5 11 0 7-5 11 0 7 5 11 0" fill="none" stroke="currentColor" strokeWidth="1.4" />
              </svg>
              <ul className="v2-chips">
                {serviceNames.map((n) => (
                  <li key={n} className="chip chip-dark">
                    {n}
                  </li>
                ))}
              </ul>
            </div>
            <div className="v2-float v2-float-black">
              <p className="v2-float-title">Who we work with</p>
              <ul className="v2-chips">
                {audiences.map((n) => (
                  <li key={n} className="chip chip-lime">
                    {n}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Statement: the studio in one sentence, then four cards that break it down. */}
        <section className="v2-statement" data-chapter="white" aria-labelledby="statement-title">
          <h2 id="statement-title" className="v2-h2" data-reveal>
            {hl("One team takes you from logo to live store to monthly sales.", "monthly sales.")}
          </h2>
          <div className="v2-bento">
            <article className="card card-grey v2-b1" data-reveal>
              <div className="v2-wave-photo" aria-hidden="true" />
              <Plus />
              <p className="v2-stat">1 team</p>
              <p className="v2-stat-label">from logo to live store to monthly sales</p>
            </article>
            <article className="card card-lime v2-b2" data-reveal>
              <span className="v2-notch" aria-hidden="true">
                <span className="v2-notch-btn">
                  <Arrow />
                </span>
              </span>
              <p className="v2-stat">0 handoffs</p>
              <p className="v2-stat-label">between agencies, and no waiting on someone else’s timeline</p>
            </article>
            <article className="card card-grey v2-b3" data-reveal>
              <span className="v2-orb" aria-hidden="true" />
              <p className="v2-stat">12 reports</p>
              <p className="v2-stat-label">a year, each showing what your spend brought back</p>
            </article>
            <article className="card card-black v2-b4" data-reveal>
              <ul className="v2-flags v2-flags-lime">
                {["US", "UK", "CA"].map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
              <p className="v2-stat-label">Calls booked in your time zone, invoices in USD, GBP or CAD.</p>
            </article>
          </div>
        </section>

        {/* What we do: unchanged from version 1. */}
        <section id="services" className="services" data-chapter="dark" aria-labelledby="services-title">
          <WhatWeDo
            heading={services.heading}
            cta={services.cta}
            items={services.groups.flatMap((g) => g.items.map((s) => ({ ...s, group: g.name })))}
          />
        </section>

        {/* Work: three case cards (white, lime, black), each with the laptop and phone screenshots. */}
        <section id="work" className="v2-work" data-chapter="paper" aria-labelledby="work-title">
          <div className="v2-head">
            <div>
              <p className="v2-eyebrow" data-reveal>
                {work.eyebrow}
              </p>
              <h2 id="work-title" className="v2-h2" data-reveal>
                {hl(work.heading, "finest work.")}
              </h2>
            </div>
            <p className="v2-head-side" data-reveal>
              {work.intro}
            </p>
          </div>
          <div className="v2-cases">
            {work.cases.map((c, i) => (
              <article
                key={c.name}
                id={`case-${i}`}
                className={`card v2-case ${["card-white", "card-lime", "card-black"][i % 3]}`}
                aria-labelledby={`case-${i}-name`}
                data-reveal
              >
                <div className="v2-case-text">
                  <span className="v2-case-num">{String(i + 1).padStart(2, "0")}</span>
                  <h3 id={`case-${i}-name`} className="v2-case-name">
                    {c.name}
                  </h3>
                  <p className="v2-case-summary">{c.summary}</p>
                  <p className="v2-case-did">
                    <Copy text={c.did} />
                  </p>
                  <p className="v2-case-result">
                    <Copy text={c.result} />
                  </p>
                  <a className="v2-pill-link" href={c.url} target="_blank" rel="noopener noreferrer">
                    Visit {c.urlLabel}
                    <span className="v2-pill-arrow">
                      <Arrow />
                    </span>
                    <span className="visually-hidden"> (opens in a new tab)</span>
                  </a>
                </div>
                <div className="v2-case-shots">
                  <figure className="v2-case-desktop">
                    <Image src={c.desktop.src} alt={c.desktop.alt} width={1440} height={900} sizes="(max-width: 900px) 90vw, 50vw" />
                  </figure>
                  <figure className="v2-case-phone">
                    <Image src={c.mobile.src} alt={c.mobile.alt} width={390} height={844} sizes="(max-width: 900px) 30vw, 14vw" />
                  </figure>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Process: black panel with fine wave lines; four tall step cards. */}
        <section id="process" className="v2-process" data-chapter="dark" aria-labelledby="process-title">
          <div className="v2-process-head">
            <h2 id="process-title" className="v2-h2" data-reveal>
              {hl(process.heading, "runs")}
            </h2>
            <p className="v2-head-side" data-reveal>
              Four steps, from the first call to the monthly report.
            </p>
          </div>
          <ProcessCards steps={process.steps} />
        </section>

        {testimonial.show && (
          <section className="proof" data-chapter="paper" aria-labelledby="proof-title">
            <h2 id="proof-title" className="proof-title" data-reveal>
              {testimonial.heading}
            </h2>
            <figure className="proof-quote" data-reveal>
              <blockquote>
                <p>
                  <Copy text={testimonial.quote} />
                </p>
              </blockquote>
              <figcaption>
                <Copy text={testimonial.author} />
              </figcaption>
            </figure>
          </section>
        )}

        {/* Latest posts: rounded cards in a sideways row. */}
        <section id="posts" className="v2-posts" data-chapter="white" aria-labelledby="posts-title">
          <PostsRail heading={hl(posts.heading, "posts")} items={posts.items} />
        </section>

        {/* FAQ: the question list as white cards, with a black "ask us" card beside it. */}
        <section id="faq" className="v2-faq" data-chapter="paper" aria-labelledby="faq-title">
          <div className="v2-faq-side">
            <h2 id="faq-title" className="v2-h2" data-reveal>
              <mark className="hl">{faq.heading}</mark>
            </h2>
            <div className="card card-black v2-ask" data-reveal>
              <p className="v2-ask-title">Still have a question?</p>
              <a className="v2-ask-mail" href={`mailto:${contact.email}`}>
                {contact.email}
              </a>
              <a href={hero.letsTalk.href} className="v2-btn v2-btn-lime">
                {hero.letsTalk.label}
                <span className="v2-btn-dot">
                  <Arrow />
                </span>
              </a>
            </div>
          </div>
          <div className="v2-faq-list">
            {faq.items.map((f) => (
              <details key={f.q} className="v2-faq-item" data-reveal>
                <summary className="v2-faq-q">
                  <span>{f.q}</span>
                  <span className="v2-faq-icon" aria-hidden="true" />
                </summary>
                <p className="v2-faq-a">
                  <Copy text={f.a} />
                </p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter home />
      <Enhancements />
    </>
  );
}
