import type { Metadata } from "next";
import { Arrow, Tick, Plus, Icon } from "@/components/icons";
import { PageHero, CtaBand, SiteFooter, WhatsApp } from "@/components/site";

export const metadata: Metadata = {
  title: "Careers",
  description: "Open roles at Createflowz: video editors, social media managers, designers, ad specialists and developers. See requirements and apply.",
};

// Draft roles. Set `open: false` to hide a role without deleting it.
type Role = {
  title: string;
  team: string;
  type: string;
  where: string;
  open: boolean;
  summary: string;
  do: string[];
  need: string[];
  nice: string[];
};

const roles: Role[] = [
  {
    title: "Video Editor (Reels & Shorts)",
    team: "Video",
    type: "Full-time",
    where: "On-site / Hybrid",
    open: true,
    summary: "You’ll turn raw footage from our shoot days into reels that people watch to the end, for brands across food, fitness, real estate and beauty.",
    do: ["Edit 20–30 short-form videos a month", "Add captions, sound design and motion graphics", "Cut hooks that hold the first two seconds", "Work with strategists on what to test next"],
    need: ["A portfolio of reels or shorts you edited", "Premiere Pro, CapCut or DaVinci Resolve", "A feel for pacing, trends and sound", "Comfortable with fast feedback and deadlines"],
    nice: ["After Effects for motion graphics", "Colour grading", "Your own content channel"],
  },
  {
    title: "Social Media Manager",
    team: "Social",
    type: "Full-time",
    where: "On-site / Hybrid",
    open: true,
    summary: "You’ll own a set of client accounts end to end: the plan, the calendar, the posting and the results.",
    do: ["Plan monthly calendars for 4–6 brands", "Write captions and brief editors and designers", "Run community replies and flag leads", "Send monthly reports and next steps to clients"],
    need: ["1–3 years managing brand accounts", "Strong written English", "Know Instagram inside out: reels, stories, collabs", "Organised, with clear client communication"],
    nice: ["Experience with Meta Business Suite and schedulers", "Basic Canva or Figma", "Hindi or a regional language"],
  },
  {
    title: "Content Strategist & Scriptwriter",
    team: "Strategy",
    type: "Full-time",
    where: "Hybrid",
    open: true,
    summary: "You’ll come up with the ideas and write the hooks and scripts that the whole team shoots and edits.",
    do: ["Research trends and competitors for each client", "Write reel ideas, hooks and short scripts", "Plan shoot days with the video team", "Study what performed and why"],
    need: ["Writing samples: scripts, captions or threads", "A habit of watching and breaking down reels", "Clear, punchy writing", "Curiosity about different industries"],
    nice: ["On-camera or presenting experience", "Copywriting for ads"],
  },
  {
    title: "Videographer / Content Shooter",
    team: "Video",
    type: "Full-time or Freelance",
    where: "On-site",
    open: true,
    summary: "You’ll lead our monthly shoot days at client locations: cafés, gyms, studios, homes and offices.",
    do: ["Shoot 2–4 client shoot days a week", "Handle phones, gimbals, lights and audio", "Direct non-actors to look natural on camera", "Organise and hand over footage the same day"],
    need: ["A showreel of vertical or short-form work", "Your own basic kit is a plus, not a must", "Comfortable travelling locally for shoots", "Calm with clients and quick on your feet"],
    nice: ["Drone licence", "Product and food shooting"],
  },
  {
    title: "Graphic & Brand Designer",
    team: "Design",
    type: "Full-time",
    where: "Hybrid",
    open: true,
    summary: "You’ll design brand identities, post templates and carousels that make each client instantly recognisable.",
    do: ["Design logos and visual identities", "Build post, story and carousel templates", "Create covers and on-screen text styles", "Keep every client on-brand"],
    need: ["A portfolio with branding and social work", "Figma, Illustrator or Photoshop", "Strong type and layout sense", "Able to take a brief and run with it"],
    nice: ["Motion design", "Packaging or print"],
  },
  {
    title: "Performance Marketer (Meta & Google Ads)",
    team: "Growth",
    type: "Full-time",
    where: "Hybrid",
    open: true,
    summary: "You’ll turn our best content into ads and be responsible for leads and cost per lead.",
    do: ["Set up and run Meta and Google campaigns", "Install pixels and conversion tracking", "Test audiences and creatives every week", "Report spend, leads and cost per lead"],
    need: ["1+ year running paid campaigns with real budgets", "Comfortable with numbers and spreadsheets", "Know Ads Manager and Google Ads", "Honest reporting, good or bad"],
    nice: ["Lead-gen experience for local businesses", "GA4 and Tag Manager"],
  },
  {
    title: "Automation & CRM Specialist",
    team: "Growth",
    type: "Part-time / Contract",
    where: "Remote",
    open: true,
    summary: "You’ll build the comment-to-DM flows and lead pipelines that turn engagement into enquiries.",
    do: ["Build keyword DM flows on Instagram", "Set up lead capture and follow-ups", "Connect leads to Sheets, WhatsApp or a CRM", "Test and improve reply rates"],
    need: ["Experience with ManyChat or similar tools", "Zapier, Make or n8n", "Logical, careful and detail-minded", "Clear documentation habits"],
    nice: ["WhatsApp Business API", "Basic JavaScript"],
  },
  {
    title: "Web Designer & Developer",
    team: "Web",
    type: "Full-time",
    where: "Hybrid",
    open: true,
    summary: "You’ll design and build fast websites and landing pages that turn social traffic into enquiries.",
    do: ["Design pages in Figma for desktop and phone", "Build them in Next.js or a site builder", "Connect forms, booking and analytics", "Keep sites fast and easy to update"],
    need: ["A portfolio of live sites you built", "Figma and modern HTML/CSS", "React or Next.js, or Webflow/Framer", "An eye for detail on mobile"],
    nice: ["SEO basics", "Headless CMS such as Sanity"],
  },
  {
    title: "Social Media Intern",
    team: "Social",
    type: "Internship · 3 months",
    where: "On-site",
    open: true,
    summary: "Learn how an agency really runs, by helping on every part of it: planning, shoots, edits and posting.",
    do: ["Help plan calendars and research trends", "Assist on shoot days", "Draft captions and schedule posts", "Track results for monthly reports"],
    need: ["Students or recent graduates welcome", "You already live on Instagram and YouTube", "Eager to learn and take feedback", "Reliable and on time"],
    nice: ["Basic editing in CapCut", "A page or channel of your own"],
  },
];

const perks = [
  { icon: "video", title: "Your work goes live every week", text: "No endless pitches. What you make this week is posted for real brands and real audiences." },
  { icon: "share", title: "Learn the whole engine", text: "Strategy, shoots, edits, ads, automation and web sit under one roof. Sit in on any of it." },
  { icon: "target", title: "See the numbers you move", text: "Every client gets monthly reports, and so do you. You’ll know which of your ideas worked." },
  { icon: "bolt", title: "Small team, real ownership", text: "You own accounts and projects from day one, with a lead to back you up when you need it." },
];

const hiring = [
  { n: "01", title: "Apply", text: "Send your portfolio or showreel and a few lines about you. We read every application." },
  { n: "02", title: "Intro call", text: "A 20-minute chat about your work, what you want to learn and how we work." },
  { n: "03", title: "Small task", text: "A short, real-world task in your area, so you see the work and we see how you think." },
  { n: "04", title: "Meet the team", text: "A final conversation with the team, then an offer. Usually within two weeks of applying." },
];

const apply = (role: string) =>
  `mailto:hello@createflowz.com?subject=${encodeURIComponent(`Application: ${role}`)}&body=${encodeURIComponent("Hi Createflowz,\n\nPortfolio / showreel link:\nA few lines about me:\n")}`;

export default function CareersPage() {
  const open = roles.filter((r) => r.open);
  return (
    <>
      <PageHero
        title={<>Build the brands people <mark>follow</mark>.</>}
        lede="At Createflowz you’ll plan, shoot, edit and design content for real businesses, and watch it reach thousands of people every week. Find your role below and grow with us."
      >
        <div className="jump">
          <a href="#roles">See {open.length} open roles <Arrow /></a>
          <a href="#hiring">How hiring works <Arrow /></a>
        </div>
      </PageHero>

      <section className="section white" aria-labelledby="why-title">
        <h2 id="why-title">Why work at Createflowz</h2>
        <p className="lead">You’ll learn faster here than almost anywhere, because every part of growing a brand happens in the same room.</p>
        <ul className="perks">
          {perks.map((p) => (
            <li key={p.title}>
              <span><Icon name={p.icon} /></span>
              <div><h3>{p.title}</h3><p>{p.text}</p></div>
            </li>
          ))}
        </ul>
      </section>

      <section id="roles" className="section on-dark" aria-labelledby="roles-title">
        <div className="roles-head">
          <div>
            <h2 id="roles-title">Open roles</h2>
            <p className="lead">Tap a role to see what you’ll do and what we’re looking for.</p>
          </div>
          <span className="roles-count"><i aria-hidden="true" />{open.length} roles hiring now</span>
        </div>
        <div className="roles">
          {open.map((r) => (
            <details key={r.title} className="role">
              <summary>
                <h3>{r.title}</h3>
                <span className="role-meta"><span>{r.team}</span><span>{r.type}</span><span>{r.where}</span></span>
                <span className="role-toggle" aria-hidden="true"><Plus /></span>
              </summary>
              <div className="role-body">
                <p>{r.summary}</p>
                <div className="role-cols">
                  <div><h4>What you’ll do</h4><ul className="ticks">{r.do.map((x) => <li key={x}><span><Tick /></span>{x}</li>)}</ul></div>
                  <div><h4>What we’re looking for</h4><ul className="ticks">{r.need.map((x) => <li key={x}><span><Tick /></span>{x}</li>)}</ul></div>
                  <div><h4>Nice to have</h4><ul className="ticks">{r.nice.map((x) => <li key={x}><span><Tick /></span>{x}</li>)}</ul></div>
                </div>
                <div className="role-apply">
                  <a href={apply(r.title)} className="btn btn-lime">Apply for this role <Arrow /></a>
                  <p>Send your portfolio or showreel to hello@createflowz.com</p>
                </div>
              </div>
            </details>
          ))}
        </div>
      </section>

      <section id="hiring" className="section tint" aria-labelledby="hiring-title">
        <h2 id="hiring-title">How hiring works</h2>
        <p className="lead">Four steps, usually done within two weeks. We’ll tell you where you stand at every step.</p>
        <ol className="steps hire-steps">
          {hiring.map((s, i) => (
            <li key={s.n} style={{ "--fill": `${(i + 1) * 25}%` } as React.CSSProperties}>
              <p className="step-n hire-n">{s.n}</p><h3>{s.title}</h3><p>{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <CtaBand
        title="Don’t see your role?"
        text="We’re always happy to meet good people. Send us your portfolio and tell us what you’d like to do."
        action="Send your portfolio"
        href={apply("Open application")}
      />
      <SiteFooter />
      <WhatsApp />
    </>
  );
}
