import type { Metadata } from "next";
import Link from "next/link";
import { Arrow, Tick, Icon } from "@/components/icons";
import { PageHero, CtaBand, SiteFooter, WhatsApp } from "@/components/site";
import { steps } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our process",
  description: "How Createflowz manages social media, builds your brand, shoots and posts reels, runs ads, automates DMs and builds websites, step by step.",
};

type Flow = {
  id: string;
  icon: string;
  title: string;
  intro: string;
  get: string[];
  stages: { title: string; text: string; when?: string }[];
};

const flows: Flow[] = [
  {
    id: "social",
    icon: "share",
    title: "How we manage your social media",
    intro: "One plan, one calendar and one team looking after your accounts every day, so posting never depends on someone remembering.",
    get: ["90-day content strategy", "Monthly content calendar", "Daily community replies", "Monthly growth report"],
    stages: [
      { title: "Audit your accounts", text: "We study your profile, past posts, competitors and what your buyers actually search and watch, then tell you what to keep, fix and stop.", when: "Week 1" },
      { title: "Build the content plan", text: "Content pillars, post mix, posting days and the one goal every post serves: enquiries, bookings or sales.", when: "Week 2" },
      { title: "Fill the monthly calendar", text: "Every reel, carousel and story is planned a month ahead, with captions and hooks written. You approve it in one go." },
      { title: "Run the community", text: "We reply to comments and DMs in your brand’s voice, flag hot leads to you and keep the conversation going." },
      { title: "Report and improve", text: "A short monthly report: what grew, what flopped, what we change next month. No vanity numbers." },
    ],
  },
  {
    id: "branding",
    icon: "pen",
    title: "How we represent your brand",
    intro: "Before we post anything, we make sure your brand looks and sounds the same everywhere, so people recognise you before they read your name.",
    get: ["Logo and identity refresh", "Colours, fonts and tone of voice", "Reusable post and carousel templates", "A one-page brand guide"],
    stages: [
      { title: "Find what makes you different", text: "A workshop on your story, your customers and your competitors. We pin down the one thing you want to be known for." },
      { title: "Define the look and voice", text: "Logo, colours, type and photo style, plus how you talk: the words you use, the ones you never use, and how you reply." },
      { title: "Design the templates", text: "Post, story, carousel and highlight-cover templates, so every piece of content feels like it came from one brand." },
      { title: "Hand over a brand guide", text: "Everything in one simple guide your team, printers and future hires can follow without asking us." },
    ],
  },
  {
    id: "reels",
    icon: "video",
    title: "How we shoot and edit your reels",
    intro: "Short-form video is planned like a mini production: ideas first, a tight shoot day, then edits built to stop the scroll and hold attention.",
    get: ["Monthly reel ideas and scripts", "Shoot day with our crew", "Edited reels with captions", "Covers and on-screen text"],
    stages: [
      { title: "Ideas and hooks", text: "We pull ideas from trends, your customers’ questions and what already works in your niche. Every reel gets a hook written for the first two seconds." },
      { title: "Scripts and shot list", text: "Simple scripts, a shot list and a plan for the location, so the shoot day runs fast and nobody stands around." },
      { title: "Shoot day", text: "Our crew comes to you with phones, gimbals, lights and mics. One half-day usually covers a month of reels.", when: "Once a month" },
      { title: "Edit for retention", text: "Fast cuts, captions for silent viewing, sound design and motion graphics. We cut for the people who swipe away, not the people who stay." },
      { title: "Review and refine", text: "You see every reel before it goes out and get two rounds of changes, included." },
    ],
  },
  {
    id: "posting",
    icon: "send",
    title: "How we post and publish",
    intro: "Great content still flops if it goes out at the wrong time with the wrong caption. Publishing is its own step, not an afterthought.",
    get: ["Scheduled posts, reels and stories", "Captions, hashtags and tags", "Best-time posting", "First-hour engagement"],
    stages: [
      { title: "Approve once a month", text: "You get the month’s content in one shared board. Approve, comment or ask for changes from your phone." },
      { title: "Schedule at the best times", text: "We post when your audience is online, based on your own account data, not a generic chart." },
      { title: "Write captions that sell", text: "Captions, calls to action, hashtags, location tags and collab tags, written for each post." },
      { title: "Stay live in the first hour", text: "We reply to early comments, share to stories and pin the best ones while the post is still being pushed." },
    ],
  },
  {
    id: "ads",
    icon: "target",
    title: "How we run your ads",
    intro: "We put money behind content that has already proven itself organically, so your budget scales what works instead of guessing.",
    get: ["Meta and Google ad setup", "Audience and creative testing", "Pixel and conversion tracking", "Weekly spend reports"],
    stages: [
      { title: "Set up tracking", text: "Pixel, conversion events and lead forms, so we can see exactly which ad brought which enquiry." },
      { title: "Pick the winners", text: "We choose reels and posts that already performed well organically and turn them into ads." },
      { title: "Test and scale", text: "Small tests across audiences and creatives first, then budget moves to the combinations that bring leads at the lowest cost." },
      { title: "Report on revenue", text: "Weekly numbers on spend, leads and cost per lead, not just reach and clicks." },
    ],
  },
  {
    id: "automation",
    icon: "bolt",
    title: "How we set up your automations",
    intro: "Every comment like “price?” or “details?” is a lead. Automations answer them in seconds, day and night, and pass the warm ones to you.",
    get: ["Comment-to-DM keyword flows", "Lead capture and qualification", "Auto follow-ups", "Leads sent to your sheet or CRM"],
    stages: [
      { title: "Map the questions", text: "We list what people ask you most in comments and DMs, and what you need to know before you call them back." },
      { title: "Build the flows", text: "Keyword triggers on posts and reels send an instant DM with prices, a brochure or a booking link." },
      { title: "Qualify the lead", text: "A few quick questions in the DM (budget, location, timeline) so you only spend time on serious buyers." },
      { title: "Follow up and hand over", text: "Automatic reminders for people who go quiet, and every lead sent to your WhatsApp, Google Sheet or CRM." },
      { title: "Test and tune", text: "We test every flow before launch and adjust messages each month based on reply rates." },
    ],
  },
  {
    id: "websites",
    icon: "monitor",
    title: "How we build your website",
    intro: "Your website is where social media traffic turns into enquiries. We design it in Figma first, then build it fast, clean and easy to update.",
    get: ["Sitemap and page copy", "Figma design you approve", "Fast, mobile-first build", "Launch, SEO basics and training"],
    stages: [
      { title: "Plan the pages", text: "What visitors need to see, in what order, to trust you and get in touch. We write the copy alongside the structure." },
      { title: "Design in Figma", text: "You see every page, on desktop and phone, before a line of code is written. Two rounds of changes included." },
      { title: "Build and connect", text: "A fast, mobile-first build with forms, WhatsApp, booking and analytics wired in." },
      { title: "Launch and hand over", text: "Domain, hosting, SEO basics and a short walkthrough so your team can update text and images themselves." },
    ],
  },
];

const weHandle = [
  "Strategy, calendars and every piece of content",
  "Shoot days, editing, captions and covers",
  "Posting, community replies and first-hour engagement",
  "Ads, automations, tracking and monthly reports",
];
const youHandle = [
  "A 30-minute kickoff call and access to your accounts",
  "Approving the month’s content (about 20 minutes)",
  "Being available for one shoot day a month",
  "Calling back the leads we send you",
];

export default function ProcessPage() {
  return (
    <>
      <PageHero
        title={<>How we turn your social media into <mark>clients</mark></>}
        lede="Every service follows a clear process, so you always know what happens next, who is doing it and what you need to do. Pick a service to see how it works."
      >
        <nav className="jump" aria-label="Jump to a service">
          {flows.map((f) => <a key={f.id} href={`#${f.id}`}>{f.title.replace("How we ", "").replace(/^./, (c) => c.toUpperCase())} <Arrow /></a>)}
        </nav>
      </PageHero>

      <section className="section on-dark overview" aria-labelledby="overview-title">
        <h2 id="overview-title">Four steps, whatever you hire us for.</h2>
        <ol className="steps">
          {steps.map((s, i) => (
            <li key={s.n} style={{ "--fill": `${(i + 1) * 25}%` } as React.CSSProperties}>
              <p className="step-n">{s.n}</p><h3>{s.title}</h3><p>{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {flows.map((f, i) => (
        <section key={f.id} id={f.id} className={`section ${i % 2 ? "tint" : "white"}`} aria-labelledby={`${f.id}-title`}>
          <div className="flow">
            <div className="flow-intro">
              <span className="flow-icon"><Icon name={f.icon} /></span>
              <h2 id={`${f.id}-title`}>{f.title}</h2>
              <p className="lead">{f.intro}</p>
              <div className="flow-get">
                <p className="label">What you get</p>
                <ul className="ticks">{f.get.map((g) => <li key={g}><span><Tick /></span>{g}</li>)}</ul>
              </div>
            </div>
            <ol className="stages">
              {f.stages.map((s) => (
                <li key={s.title}>
                  <div>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                    {s.when && <span className="when">{s.when}</span>}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>
      ))}

      <section className="section on-dark" aria-labelledby="split-title">
        <h2 id="split-title">What we take care of, and what we need from you.</h2>
        <p className="lead">Most clients spend under an hour a week with us. The rest is on our side.</p>
        <div className="split">
          <div className="we">
            <h3>We take care of</h3>
            <ul className="ticks">{weHandle.map((w) => <li key={w}><span><Tick /></span>{w}</li>)}</ul>
          </div>
          <div className="you">
            <h3>You provide</h3>
            <ul className="ticks">{youHandle.map((w) => <li key={w}><span><Tick /></span>{w}</li>)}</ul>
          </div>
        </div>
        <p className="split-cta"><Link href="/#contact" className="btn btn-lime">Start with a free audit <Arrow /></Link></p>
      </section>

      <CtaBand title="Want to see it for your brand?" text="Book a free Instagram audit. We’ll walk you through the plan we’d run for you, in a 20-minute call." />
      <SiteFooter />
      <WhatsApp />
    </>
  );
}
