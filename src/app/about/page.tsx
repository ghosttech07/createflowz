import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow, Icon } from "@/components/icons";
import { PageHero, CtaBand, SiteFooter, WhatsApp } from "@/components/site";
import { services, stats } from "@/lib/content";
import CountUp from "@/components/count-up";

export const metadata: Metadata = {
  title: "About us",
  description: "Createflowz is a branding & web studio that runs social media like a growth team: strategy, reels, ads, automation and websites under one roof.",
};

const values = [
  { title: "Clients, not likes", text: "Every post, reel and ad has one job: bring you enquiries, bookings or sales. If a number doesn’t help with that, we don’t report it." },
  { title: "One team, one plan", text: "Strategy, shoots, edits, ads, automation and web all sit with us, so nothing gets lost between five freelancers." },
  { title: "No long contracts", text: "We work month to month. If we’re not moving your numbers, you shouldn’t have to stay." },
  { title: "Show the work", text: "You see every piece before it goes live and get a plain-language report every month on what worked and what we’re changing." },
];


export default function AboutPage() {
  return (
    <>
      <PageHero
        title={<>A branding &amp; web studio that thinks like your <mark>growth</mark> team</>}
        lede="Createflowz plans, shoots, edits and posts content for growing brands, then backs it with ads, DM automation and websites, so followers turn into paying customers."
      >
        <div className="page-hero-media">
          <Image src="/images/planning-wall.jpg" alt="A strategist pointing at a content plan pinned to a wall" width={1120} height={916} priority sizes="(min-width: 1440px) 1320px, 94vw" style={{ objectPosition: "50% 35%" }} />
        </div>
      </PageHero>

      <section className="section white" aria-labelledby="story-title">
        <div className="story">
          <h2 id="story-title">We started because good businesses were posting every day and still not getting clients.</h2>
          <div className="story-copy">
            <p>Most of the brands we meet aren’t short of effort. They post, they try reels, they boost a few posts. What’s missing is a <strong>plan that connects content to customers</strong>.</p>
            <p>So we built Createflowz around that missing link. Strategy decides what to make. Our crew shoots and edits it to be watched. Automations and ads make sure the attention turns into enquiries. And a website gives every visitor somewhere to go next.</p>
            <p>Today we work with cafés, coaches, clinics, real-estate teams and D2C brands, and <strong>we measure ourselves the same way they do: by new customers.</strong></p>
          </div>
        </div>
        <div className="stats about-stats">
          {stats.map(([n, u, l]) => (
            <div key={l}><p className="stat"><CountUp to={n} /><span>{u}</span></p><p className="stat-label">{l}</p></div>
          ))}
        </div>
      </section>

      <section className="section on-dark" aria-labelledby="values-title">
        <h2 id="values-title">How we work with every brand</h2>
        <ul className="values">
          {values.map((v) => <li key={v.title}><h3>{v.title}</h3><p>{v.text}</p></li>)}
        </ul>
      </section>

      <section className="section tint" aria-labelledby="do-title">
        <h2 id="do-title">Everything under one roof</h2>
        <p className="lead">Hire us for one service or the whole engine. Tap any service to see exactly how we run it.</p>
        <div className="svc-rows">
          {services.map((s) => (
            <Link key={s.slug} href={`/process#${s.slug}`}>
              <span className="flow-icon"><Icon name={s.icon} /></span>
              <h3>{s.name}</h3>
              <p>{s.text}</p>
              <span className="go" aria-hidden="true"><Arrow /></span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section on-dark" aria-labelledby="team-title">
        <div className="roles-head">
          <div>
            <h2 id="team-title">The people behind the posts</h2>
            <p className="lead">Strategists, scriptwriters, shooters, editors, designers, ad specialists and developers, working as one team on your brand. And we’re growing.</p>
          </div>
          <Link href="/careers" className="btn btn-lime">See open roles <Arrow /></Link>
        </div>
      </section>

      <CtaBand />
      <SiteFooter />
      <WhatsApp />
    </>
  );
}
