import type { Metadata } from "next";
import Image from "next/image";
import { Copy } from "@/components/Copy";
import { Enhancements } from "@/components/Enhancements";
import { LetsTalkForm } from "@/components/LetsTalkForm";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { brief, contact, footer, letsTalk, studio } from "@/content/site";

export const metadata: Metadata = {
  title: `Let’s talk | ${studio.name}`,
  description: "Tell Createflowz about your project: branding, a website or store, ads or SEO. We reply within one business day.",
  alternates: { canonical: "/lets-talk" },
};

// Let's talk: the form beside a tall photo on white, then three ways to reach the studio on light grey.
export default function LetsTalkPage() {
  return (
    <>
      <SiteHeader />
      <main id="main" tabIndex={-1}>
        <section className="lt on-white" data-chapter="white" aria-labelledby="lt-title">
          <div className="lt-main">
            <h1 id="lt-title" className="lt-title">
              {letsTalk.title}
            </h1>
            <p className="lt-intro">
              {letsTalk.intro} <a href={`mailto:${contact.email}`}>{letsTalk.introLink}</a>
            </p>
            <LetsTalkForm email={contact.email} copy={letsTalk} groups={brief.groups} />
          </div>
          <div className="lt-side">
            <div className="lt-photo">
              <Image src={letsTalk.img} alt={letsTalk.alt} fill priority sizes="(max-width: 900px) 100vw, 42vw" />
            </div>
            <p className="lt-side-label" aria-hidden="true">
              {letsTalk.sideLabel.split("’").map((part, i) => (
                <span key={i}>
                  {i > 0 && <span className="lt-apos">’</span>}
                  {part}
                </span>
              ))}
            </p>
          </div>
        </section>

        <section className="lt-ways" data-chapter="paper" aria-label="Other ways to reach us">
          {letsTalk.ways.map((w) => (
            <div key={w.heading} className="lt-way">
              <h2>{w.heading}</h2>
              <p>
                <Copy text={w.text} />
              </p>
              {w.kind === "email" && <a href={`mailto:${contact.email}`}>{contact.email}</a>}
              {w.kind === "phone" &&
                (footer.phone.startsWith("[") ? (
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                ) : (
                  <a href={`tel:${footer.phone.replace(/[^+\d]/g, "")}`}>{footer.phone}</a>
                ))}
              {w.kind === "address" && (
                <p className="lt-way-muted">
                  <Copy text={footer.phone} />
                </p>
              )}
            </div>
          ))}
        </section>
      </main>
      <SiteFooter />
      <Enhancements />
    </>
  );
}
