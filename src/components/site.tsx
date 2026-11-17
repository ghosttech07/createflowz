import Link from "next/link";
import MobileMenu from "./mobile-menu";
import { Arrow } from "./icons";

export const nav = [
  { label: "Services", href: "/#services" },
  { label: "Process", href: "/process" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
];

export function SiteHeader() {
  return (
    <header className="header">
      <Link href="/" className="logo" aria-label="Createflowz home" />
      <nav className="nav" aria-label="Main">
        {nav.map((n) => <Link key={n.label} href={n.href}>{n.label}</Link>)}
      </nav>
      <Link href="/#contact" className="btn btn-lime btn-sm">Free audit <Arrow /></Link>
      <MobileMenu>
        <summary aria-label="Open menu"><span /><span /></summary>
        <div className="menu-panel">
          <nav aria-label="Main (phone)">
            {[...nav, { label: "Careers", href: "/careers" }].map((n, i) => (
              <Link key={n.label} href={n.href}>
                <span className="menu-n">0{i + 1}</span>{n.label}<Arrow />
              </Link>
            ))}
          </nav>
          <Link href="/#contact" className="btn btn-lime menu-cta">Get my free audit <Arrow /></Link>
          <p className="menu-meta">Reply within 24h · <a href="mailto:hello@createflowz.com">hello@createflowz.com</a></p>
        </div>
      </MobileMenu>
    </header>
  );
}

export function WhatsApp() {
  return (
    <a href="https://wa.me/910000000000" className="whatsapp whatsapp-fixed" aria-label="Chat on WhatsApp">
      <svg width="30" height="30" viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 20.5l1.4-4.2A8.5 8.5 0 1 1 8 19.3z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" /><path d="M9 8.6c.2 2.9 2.4 5.6 5.9 6.3l1.1-1.3-1.9-1-.9.8c-1-.4-2.1-1.6-2.5-2.5l.8-.9-1-1.9z" fill="currentColor" /></svg>
    </a>
  );
}

export function CtaBand({
  title = "Not sure where to start?",
  text = "Get a free audit of your Instagram. We’ll show you exactly what to fix, in a 20-minute call.",
  action = "Get my free Instagram audit",
  href = "/#contact",
}: { title?: string; text?: string; action?: string; href?: string }) {
  return (
    <section className="cta" aria-label={title}>
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <Link href={href} className="btn btn-dark">{action} <Arrow /></Link>
    </section>
  );
}

const footerCols: [string, [string, string][]][] = [
  ["Agency", [["About", "/about"], ["Work", "/work"], ["Process", "/process"], ["Careers", "/careers"]]],
  ["Services", [["Social media", "/process#social"], ["Reels & video", "/process#reels"], ["Automation", "/process#automation"], ["Websites", "/process#websites"]]],
  ["Follow", [["Instagram", "#instagram"], ["LinkedIn", "#linkedin"], ["YouTube", "#youtube"], ["Behance", "#behance"]]],
];

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <Link href="/" className="logo" aria-label="Createflowz home" />
          <p>Creative growth agency for brands that want clients, not just likes.</p>
        </div>
        <div className="footer-cols">
          {footerCols.map(([t, links]) => (
            <nav key={t} aria-label={t}>
              <p>{t}</p>
              {links.map(([l, href]) => <Link key={l} href={href}>{l}</Link>)}
            </nav>
          ))}
        </div>
      </div>
      <div className="footer-bottom"><span>© 2026 Createflowz</span><span><a href="#privacy">Privacy</a> · <a href="#terms">Terms</a></span></div>
    </footer>
  );
}

/** Dark top band for inner pages: header + page title. */
export function PageHero({ title, lede, children }: { title: React.ReactNode; lede: string; children?: React.ReactNode }) {
  return (
    <section className="page-hero" aria-labelledby="page-title">
      <SiteHeader />
      <div className="page-hero-head">
        <h1 id="page-title">{title}</h1>
        <p className="page-hero-lede">{lede}</p>
      </div>
      {children}
    </section>
  );
}
