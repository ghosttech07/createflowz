"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Item = { group: string; name: string; word: string; img: string; alt: string; text: string };

// "What we do": the section pins to the screen and each service takes it in turn as you scroll.
// A huge faint word sits behind a diamond photo; the text sits bottom right. Without JS it is a plain list.
export function WhatWeDo({
  heading,
  items,
  cta,
}: {
  heading: string;
  items: Item[];
  cta: { label: string; href: string };
}) {
  const root = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const r = el.getBoundingClientRect();
      const travel = r.height - window.innerHeight;
      if (travel <= 0) return;
      const progress = Math.min(Math.max(-r.top / travel, 0), 0.9999);
      setActive(Math.floor(progress * items.length));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [items.length]);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="wwd" ref={root} style={{ "--wwd-count": items.length } as React.CSSProperties}>
      <div className="wwd-pin">
        <h2 id="services-title" className="wwd-label">
          {heading}
        </h2>
        <p className="wwd-count" aria-hidden="true">
          <span>{pad(active + 1)}</span> / {pad(items.length)} · {items[active].group}
        </p>
        <ol className="wwd-items">
          {items.map((s, i) => (
            <li key={s.name} className="wwd-item" data-active={i === active ? "" : undefined}>
              <p className="wwd-word" aria-hidden="true">
                {s.word}
              </p>
              <div className="wwd-photo">
                <Image src={s.img} alt={s.alt} fill sizes="(max-width: 760px) 70vw, 36vw" />
              </div>
              <div className="wwd-copy">
                <h3 className="wwd-name">{s.name}</h3>
                <p className="wwd-text">{s.text}</p>
                <a href={cta.href} className="text-link" tabIndex={i === active ? undefined : -1}>
                  {cta.label}
                </a>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
