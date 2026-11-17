import type { Metadata } from "next";
import Image from "next/image";
import { Arrow, Tick } from "@/components/icons";
import { PageHero, CtaBand, SiteFooter, WhatsApp } from "@/components/site";
import { cases } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our work",
  description: "Case studies from Createflowz: Instagram growth for a café, a 2.1M-view reels series, DM automation for real estate and a skincare brand and website.",
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        title={<>Work that turned followers into <mark>clients</mark></>}
        lede="A few of the brands we’ve grown. Each one started with a free audit and a 90-day plan, and each one is measured by enquiries and sales, not likes."
      >
        <nav className="jump" aria-label="Jump to a case study">
          {cases.map((c) => <a key={c.slug} href={`#${c.slug}`}>{c.client} <Arrow /></a>)}
        </nav>
      </PageHero>

      <section className="section white" aria-label="Case studies">
        {cases.map((c, i) => (
          <article key={c.slug} id={c.slug} className={i % 2 ? "study flip" : "study"} aria-labelledby={`${c.slug}-title`}>
            <Image src={c.img} alt={c.alt} width={1176} height={800} sizes="(min-width: 1100px) 55vw, 92vw" />
            <div>
              <p className="label">{c.client} · {c.tags}</p>
              <h2 id={`${c.slug}-title`}>{c.name}</h2>
              <p className="study-metric"><strong><span>{c.metric}</span></strong><small>{c.metricLabel}</small></p>
              <dl>
                <div><dt>The challenge</dt><dd>{c.challenge}</dd></div>
                <div><dt>What we did</dt><dd><ul className="ticks">{c.did.map((d) => <li key={d}><span><Tick /></span>{d}</li>)}</ul></dd></div>
                <div><dt>The result</dt><dd>{c.result}</dd></div>
              </dl>
            </div>
          </article>
        ))}
      </section>

      <CtaBand title="Want results like these?" text="Start with a free Instagram audit. We’ll show you what we’d change first, in a 20-minute call." />
      <SiteFooter />
      <WhatsApp />
    </>
  );
}
