import Image from "next/image";
import { contact, footer, hero, nav, studio } from "@/content/site";
import { Copy } from "./Copy";
import { SocialIcon } from "./SocialIcon";

const [emailUser, emailDomain] = contact.email.split("@");
const word = "sell";

// Shared footer (version 2): a black panel with fine wave lines. The tagline is the headline,
// beside three cards: contact (dark, lime glow), explore (frosted) and the lime "Let's talk" card.
export function SiteFooter({ home = false }: { home?: boolean }) {
  const base = home ? "" : "/";
  const i = footer.tagline.indexOf(word);
  return (
    <footer className="v2-footer" data-chapter="dark">
      <div className="v2-footer-grid">
        <div className="v2-footer-brand">
          <a href={home ? "#main" : "/"} className="v2-footer-logo" aria-label={home ? `${studio.name}, back to top` : `${studio.name} home`}>
            <Image src="/brand/createflowz-mask.png" alt="" width={882} height={161} sizes="200px" />
          </a>
          <p className="v2-footer-tagline">
            {i < 0 ? (
              footer.tagline
            ) : (
              <>
                {footer.tagline.slice(0, i)}
                <mark className="hl">{word}</mark>
                {footer.tagline.slice(i + word.length)}
              </>
            )}
          </p>
          <ul className="v2-footer-socials">
            {footer.socials
              .filter((s) => s.href)
              .map((s) => (
                <li key={s.name}>
                  <a href={s.href} aria-label={s.name} target="_blank" rel="noopener noreferrer">
                    <SocialIcon name={s.name} />
                  </a>
                </li>
              ))}
          </ul>
        </div>

        <div className="card v2-fcard v2-fcard-dark">
          <span className="v2-orb v2-orb-top" aria-hidden="true" />
          <h2 className="v2-fcard-title">{footer.contactHeading}</h2>
          <ul className="v2-fcard-list">
            <li>
              <a href={`mailto:${contact.email}`}>
                {emailUser}@{emailDomain}
              </a>
            </li>
            <li>
              {footer.phone.startsWith("[") ? (
                <Copy text={footer.phone} />
              ) : (
                <a href={`tel:${footer.phone.replace(/[^+\d]/g, "")}`}>{footer.phone}</a>
              )}
            </li>
          </ul>
        </div>

        <div className="card v2-fcard v2-fcard-glass">
          <h2 className="v2-fcard-title">{footer.exploreHeading}</h2>
          <nav className="v2-fcard-list" aria-label="Footer">
            {nav.map((l) => (
              <a key={l.href} href={base + l.href}>
                {l.label}
              </a>
            ))}
            <a href="/lets-talk">Contact</a>
          </nav>
          <p className="v2-fcard-note">
            <Copy text={footer.address} />
          </p>
        </div>

        <a href={hero.letsTalk.href} className="card v2-fcard v2-fcard-lime">
          <span className="v2-fcard-mark" aria-hidden="true" />
          <span className="v2-fcard-pill">
            {hero.letsTalk.label}
            <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
              <path d="M3 11L11 3M4.5 3H11v6.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
            </svg>
          </span>
          <span className="v2-fcard-text">Tell us what you’re building or selling.</span>
        </a>
      </div>

      <div className="v2-footer-meta">
        <a href={footer.privacy.href}>
          <Copy text={footer.privacy.label} />
        </a>
        <p>{footer.credits}</p>
        <p>{footer.copyright}</p>
      </div>
    </footer>
  );
}
