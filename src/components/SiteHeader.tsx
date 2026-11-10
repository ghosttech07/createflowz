import { contact, hero, nav, studio } from "@/content/site";

// Shared top bar: the wordmark, an underlined "Let's talk" link and a round menu button that opens a
// full-screen menu. On the homepage the menu jumps to sections; on other pages it goes back to them.
export function SiteHeader({ home = false }: { home?: boolean }) {
  const base = home ? "" : "/";
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <header className="site-header" data-theme="dark">
        <a href={home ? "#main" : "/"} className="wordmark" aria-label={home ? `${studio.name}, back to top` : `${studio.name} home`}>
          <span className="wordmark-mark" />
        </a>
        <nav className="header-nav" aria-label="Sections">
          {nav.map((l) => (
            <a key={l.href} href={base + l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <a href={hero.letsTalk.href} className="header-talk">
          {hero.letsTalk.label}
        </a>
        <details className="nav-menu">
          <summary className="menu-btn" aria-label="Menu">
            <span className="menu-lines" aria-hidden="true" />
          </summary>
          <div className="menu-panel">
            <nav aria-label="Main">
              {nav.map((l, i) => (
                <a key={l.href} href={base + l.href} data-spy={home ? l.href.slice(1) : undefined}>
                  <span className="menu-num" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {l.label}
                </a>
              ))}
              <a href={hero.letsTalk.href}>
                <span className="menu-num" aria-hidden="true">
                  {String(nav.length + 1).padStart(2, "0")}
                </span>
                {hero.letsTalk.label}
              </a>
            </nav>
            <a className="menu-email" href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
          </div>
        </details>
      </header>
    </>
  );
}
