"use client";

import Image from "next/image";
import { useRef, type ReactNode } from "react";
import { Copy } from "./Copy";

type Post = { tag: string; date: string; title: string; img: string; alt: string; href: string };

// A sideways row of post cards. Swipe, scroll or use the arrows; cards snap into place.
export function PostsRail({ heading, items }: { heading: ReactNode; items: readonly Post[] }) {
  const track = useRef<HTMLUListElement>(null);

  const move = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector("li");
    const step = card ? card.getBoundingClientRect().width + 24 : el.clientWidth * 0.8;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * step, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <>
      <div className="posts-head">
        <h2 id="posts-title" className="posts-title">
          {heading}
        </h2>
        <div className="posts-arrows">
          <button type="button" className="posts-arrow" onClick={() => move(-1)} aria-label="Previous posts">
            <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
          <button type="button" className="posts-arrow" onClick={() => move(1)} aria-label="Next posts">
            <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
        </div>
      </div>
      <ul className="posts-track" ref={track}>
        {items.map((p) => {
          const body = (
            <>
              <div className="post-photo">
                <Image src={p.img} alt={p.alt} fill sizes="(max-width: 760px) 80vw, 30vw" />
                <span className="post-tag">{p.tag}</span>
              </div>
              <p className="post-date">
                <Copy text={p.date} />
              </p>
              <h3 className="post-title">{p.title}</h3>
            </>
          );
          return (
            <li key={p.title} className="post">
              {p.href ? (
                <a href={p.href} className="post-link">
                  {body}
                </a>
              ) : (
                body
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
}
