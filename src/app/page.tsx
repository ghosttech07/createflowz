import Image from "next/image";

const services = [
  { name: "Social Media Management", text: "Strategy, calendars, posting and community, handled end to end.", points: ["Content strategy", "Monthly calendar", "Community replies"], icon: "share" },
  { name: "Reels & Video Editing", text: "Scroll-stopping short-form video with hooks built for retention.", points: ["Scripts & hooks", "Editing & captions", "Motion graphics"], icon: "video", dark: true },
  { name: "Automation & DM Funnels", text: "Comment-to-DM flows that capture and follow up leads 24/7.", points: ["Keyword DM flows", "Lead capture", "Auto follow-ups"], icon: "bolt" },
  { name: "Paid Ads", text: "Meta and Google campaigns built on content that already works.", points: ["Campaign setup", "Creative testing", "Revenue tracking"], icon: "target" },
  { name: "Branding & Design", text: "Identity, templates and carousels people recognise instantly.", points: ["Logo & identity", "Post templates", "Carousels"], icon: "pen" },
  { name: "Websites & Landing Pages", text: "Fast sites designed in Figma and built to book calls.", points: ["UI/UX design", "Development", "Conversion copy"], icon: "monitor" },
] as const;

const problems = [
  { n: "01", title: "Posting without a plan", text: "A 90-day content strategy built around what your buyers actually search and watch." },
  { n: "02", title: "Content nobody finishes", text: "Hooks, scripts and edits designed for retention, so every reel earns its views.", dark: true },
  { n: "03", title: "Followers, but no clients", text: "Comment-to-DM funnels and follow-ups that turn engagement into booked calls." },
];

const cases = [
  { name: "Café brand — Instagram growth", tags: "Social Media · Reels", img: "/images/work-cafe.jpg", alt: "A barista pouring latte art while a phone on a tripod films him. Result: +412% reach" },
  { name: "Fitness coach — Reels series", tags: "Video Editing", img: "/images/work-fitness.jpg", alt: "A coach filmed mid-squat with a kettlebell. Result: 2.1M views" },
  { name: "Real estate — DM automation", tags: "Automation · Paid Ads", img: "/images/work-real-estate.jpg", alt: "Three agents talking in a bright apartment. Result: 850 leads a month" },
  { name: "Skincare startup — Brand & website", tags: "Branding · Web", img: "/images/work-skincare.jpg", alt: "Skincare bottles and packaging laid out on stone. Result: a new identity" },
];

const steps = [
  { n: "01", title: "Discover", text: "A free call to understand your business, audience and goals." },
  { n: "02", title: "Strategy", text: "We audit your accounts and competitors, then build a 90-day plan." },
  { n: "03", title: "Create & launch", text: "We script, shoot, edit and publish. Automations and ads go live." },
  { n: "04", title: "Grow & optimise", text: "Monthly reports on what works, and the next moves to scale." },
];

const quotes = [
  { text: "Our Instagram went from dead to our number one source of bookings in three months.", role: "Café owner" },
  { text: "The reels they edit get more views in a day than we used to get in a month.", role: "Fitness coach", lime: true },
  { text: "The DM automation alone paid for the whole retainer in the first week.", role: "Real estate agent" },
];

const chips = ["Social media management", "Reels & video editing", "DM automation", "Meta & Google ads", "Branding", "Websites"];
const marquee = ["Social Media", "Reels & Video", "Paid Ads", "Automation", "Branding", "Websites"];
const logos = ["Brewhaus", "FITLAB", "nestify", "Glowé", "URBANLY", "Kraft & Co"];

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 12 12" aria-hidden="true">
      <path d="M2.5 9.5L9.5 2.5M4 2.5h5.5V8" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function Tick() {
  return (
    <svg width="14" height="14" viewBox="0 0 12 12" aria-hidden="true">
      <path d="M2 6.3l2.6 2.6L10 3.4" fill="none" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function Icon({ name }: { name: string }) {
  const paths: Record<string, React.ReactNode> = {
    share: (<><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4" /></>),
    video: (<><rect x="2.5" y="6.5" width="13" height="11" rx="2" /><path d="M15.5 10.5l6-3.5v10l-6-3.5" /></>),
    bolt: <path d="M13 2L4 14h7l-1 8 9-12h-7z" />,
    target: (<><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.5" /></>),
    pen: (<><path d="M12 19l7-7 3 3-7 7zM18 13l-1.5-7.5L2 2l3.5 14.5L13 18zM2 2l7.6 7.6" /><circle cx="11" cy="11" r="2" /></>),
    monitor: (<><rect x="2.5" y="3.5" width="19" height="13" rx="2" /><path d="M8 21h8M12 16.5V21" /></>),
  };
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow"><span aria-hidden="true" />{children}</p>;
}

const nav = ["Services", "Process", "Work", "About", "Contact"];

export default function Home() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <header className="header">
          <a href="#top" className="logo" aria-label="Createflowz home" />
          <nav className="nav" aria-label="Main">
            {nav.map((n, i) => (
              <a key={n} href={`#${n.toLowerCase()}`} aria-current={i === 0 ? "true" : undefined}>{n}</a>
            ))}
          </nav>
          <a href="#contact" className="btn btn-lime btn-sm">Free audit <Arrow /></a>
          <details className="menu">
            <summary aria-label="Open menu"><span /><span /></summary>
            <div className="menu-panel">
              {nav.map((n) => <a key={n} href={`#${n.toLowerCase()}`}>{n}</a>)}
            </div>
          </details>
        </header>

        <p className="hero-kicker" id="top"><span aria-hidden="true" />Social media &amp; content agency for growing brands</p>

        <div className="hero-head">
          <h1 id="hero-title">Social media that <br className="br-desk" />brings you <mark>client</mark></h1>
          <p className="hero-lede">We plan, shoot, edit and post your reels, run your ads and automate your DMs, so your followers turn into paying customers.</p>
        </div>

        <ul className="chips">
          {chips.map((c) => <li key={c}><Tick />{c}</li>)}
        </ul>

        <div className="hero-actions">
          <div>
            <div className="btn-row">
              <a href="#contact" className="btn btn-lime">Get my free Instagram audit <Arrow /></a>
              <a href="#services" className="btn btn-ghost">See packages &amp; pricing <Arrow /></a>
            </div>
            <p className="assurances">
              <span><Tick />Free 20-min call</span><span><Tick />No long contracts</span><span><Tick />Reply within 24h</span>
            </p>
          </div>
          <div className="proof">
            <div className="dots" aria-hidden="true"><i /><i /><i /><i /></div>
            <p><strong>120+ brands</strong>trust us with their growth</p>
          </div>
        </div>

        <div className="hero-media">
          <Image src="/images/hero.jpg" alt="The team filming and editing a reel at a shared desk. 45M+ views generated." width={1500} height={650} priority sizes="(min-width: 1440px) 1200px, 92vw" />
          <a href="https://wa.me/910000000000" className="whatsapp" aria-label="Chat on WhatsApp">
            <svg width="30" height="30" viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 20.5l1.4-4.2A8.5 8.5 0 1 1 8 19.3z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" /><path d="M9 8.6c.2 2.9 2.4 5.6 5.9 6.3l1.1-1.3-1.9-1-.9.8c-1-.4-2.1-1.6-2.5-2.5l.8-.9-1-1.9z" fill="currentColor" /></svg>
          </a>
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[0, 1].map((k) => (
            <div key={k} className="marquee-set">
              {marquee.map((m) => <span key={m}>{m}<b>✷</b></span>)}
            </div>
          ))}
        </div>
      </div>

      <section className="stats-wrap" aria-label="Results in numbers">
        <div className="stats">
          {[["120", "+", "Brands grown"], ["45", "M+", "Views generated"], ["3", "x", "Average lead growth"], ["98", "%", "Client retention"]].map(([n, u, l]) => (
            <div key={l}><p className="stat">{n}<span>{u}</span></p><p className="stat-label">{l}</p></div>
          ))}
        </div>
        <p className="trusted">Trusted by fast-growing brands</p>
        <ul className="logos">{logos.map((l) => <li key={l}>{l}</li>)}</ul>
      </section>

      <section id="about" className="section light" aria-labelledby="problems-title">
        <div className="sec-head">
          <div>
            <Eyebrow>Why brands come to us</Eyebrow>
            <h2 id="problems-title">Your content problems,<br className="br-desk" /> solved properly.</h2>
          </div>
          <p className="sec-lede">Most brands post a lot and grow a little. We fix the three things that hold them back — no plan, content nobody finishes, and followers who never become clients.</p>
        </div>
        <div className="problems">
          <Image src="/images/planning-wall.jpg" alt="A strategist pointing at a content plan pinned to a wall" width={1120} height={916} sizes="(min-width: 1440px) 560px, (min-width: 900px) 40vw, 92vw" />
          <div className="problem-list">
            {problems.map((p) => (
              <article key={p.n} className={p.dark ? "problem dark" : "problem"}>
                <span className="num">{p.n}</span>
                <div><h3>{p.title}</h3><p>{p.text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="section tint" aria-labelledby="services-title">
        <div className="sec-head top">
          <div>
            <Eyebrow>What we do</Eyebrow>
            <h2 id="services-title">Everything your brand needs<br className="br-desk" /> to grow, under one roof.</h2>
          </div>
          <div className="sec-side">
            <p className="sec-lede">Pick one service or let us run the whole engine. Either way, you get one team and one plan.</p>
            <a href="#contact" className="btn btn-dark">Explore all services <Arrow /></a>
          </div>
        </div>
        <div className="services">
          {services.map((s) => (
            <article key={s.name} className={"dark" in s && s.dark ? "service dark" : "service"}>
              <div className="service-top">
                <span className="service-icon"><Icon name={s.icon} /></span>
                <a href="#contact" className="service-arrow" aria-label={`Ask about ${s.name}`}><Arrow /></a>
              </div>
              <h3>{s.name}</h3>
              <p>{s.text}</p>
              <ul>{s.points.map((p) => <li key={p}><span><Tick /></span>{p}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className="cta" aria-labelledby="cta-title">
        <div>
          <h2 id="cta-title">Not sure where to start?</h2>
          <p>Get a free audit of your Instagram. We’ll show you exactly what to fix, in a 20-minute call.</p>
        </div>
        <a href="#contact" className="btn btn-dark">Get my free Instagram audit <Arrow /></a>
      </section>

      <section id="work" className="section white" aria-labelledby="work-title">
        <div className="sec-head">
          <div>
            <Eyebrow>Selected work</Eyebrow>
            <h2 id="work-title">Results we’re proud of.</h2>
          </div>
          <a href="#contact" className="btn btn-dark">Start your project <Arrow /></a>
        </div>
        <div className="cases">
          {cases.map((c) => (
            <article key={c.name} className="case">
              <Image src={c.img} alt={c.alt} width={1176} height={800} sizes="(min-width: 1440px) 588px, (min-width: 900px) 46vw, 92vw" />
              <div className="case-foot">
                <div><h3>{c.name}</h3><p>{c.tags}</p></div>
                <a href="#contact" className="case-arrow" aria-label={`Open case study: ${c.name}`}><Arrow /></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="process" className="section dark-sec" aria-labelledby="process-title">
        <div className="sec-head">
          <div>
            <Eyebrow>How we work</Eyebrow>
            <h2 id="process-title">Four steps from first call to<br className="br-desk" /> a full calendar.</h2>
          </div>
          <p className="sec-lede">No guesswork and no long contracts. You always know what is happening and why.</p>
        </div>
        <ol className="steps">
          {steps.map((s, i) => (
            <li key={s.n} style={{ "--fill": `${(i + 1) * 25}%` } as React.CSSProperties}>
              <p className="step-n">{s.n}</p><h3>{s.title}</h3><p>{s.text}</p>
            </li>
          ))}
        </ol>

        <div className="love">
          <Eyebrow>Client love</Eyebrow>
          <h2>Don’t take our word for it.</h2>
          <div className="quotes">
            {quotes.map((q) => (
              <figure key={q.role} className={q.lime ? "quote lime" : "quote"}>
                <div className="quote-top"><span role="img" aria-label="5 out of 5 stars">★★★★★</span><span aria-hidden="true" className="qmark">“</span></div>
                <blockquote>“{q.text}”</blockquote>
                <figcaption><span className="avatar" aria-hidden="true" /><span><strong>Client Name</strong><small>{q.role}</small></span></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contact-wrap" aria-labelledby="audit-title">
        <div className="contact">
          <div className="contact-copy">
            <Eyebrow>Let’s talk</Eyebrow>
            <h2 id="audit-title">Get your free<br /> Instagram audit.</h2>
            <p>Share your handle and goals. Within 24 hours we’ll send a short video audit and book a 20-minute call to walk you through it. No cost, no obligation.</p>
            <p className="contact-lines"><a href="mailto:hello@createflowz.com">hello@createflowz.com</a><br />+91 00000 00000<br />Mon–Sat · 10am–7pm IST</p>
          </div>
          <form className="form" action="mailto:hello@createflowz.com" method="post" encType="text/plain">
            <label>Name *<input name="name" type="text" placeholder="Your name" required autoComplete="name" /></label>
            <label>Email *<input name="email" type="email" placeholder="you@brand.com" required autoComplete="email" /></label>
            <label>What do you need? *
              <select name="service" required defaultValue="">
                <option value="" disabled>Select a service</option>
                {chips.map((c) => <option key={c}>{c}</option>)}
              </select>
            </label>
            <label>Instagram handle or website<textarea name="handle" placeholder="@yourbrand" rows={3} /></label>
            <button type="submit" className="btn btn-dark">Send me my free audit <Arrow /></button>
            <p className="form-note">We reply within 24 hours. No spam, ever.</p>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-top">
          <p>Creative growth agency for brands that want clients, not just likes.</p>
          <div className="footer-cols">
            {[
              ["Agency", ["About", "Work", "Process", "Careers"]],
              ["Services", ["Social media", "Reels & video", "Automation", "Websites"]],
              ["Follow", ["Instagram", "LinkedIn", "YouTube", "Behance"]],
            ].map(([t, links]) => (
              <nav key={t as string} aria-label={t as string}>
                <p>{t as string}</p>
                {(links as string[]).map((l) => <a key={l} href={`#${l.toLowerCase().split(" ")[0]}`}>{l}</a>)}
              </nav>
            ))}
          </div>
        </div>
        <div className="wordmark" role="img" aria-label="Createflowz" />
        <div className="footer-bottom"><span>© 2026 Createflowz</span><span><a href="#privacy">Privacy</a> · <a href="#terms">Terms</a></span></div>
      </footer>
    </>
  );
}
