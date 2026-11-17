"use client";

import { useEffect, useRef } from "react";

// Counts from 0 up to `to` every time it scrolls into view (from above or below),
// and resets once it leaves the screen so it can run again next time.
// The final number is in the HTML, so it still reads correctly without JavaScript.
export default function CountUp({ to, duration = 1800 }: { to: number; duration?: number }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    el.style.minWidth = `${el.getBoundingClientRect().width}px`; // hold the final width so the unit doesn't jump
    el.textContent = "0";
    let frame = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        cancelAnimationFrame(frame);
        if (!entry.isIntersecting) {
          el.textContent = "0"; // ready to run again on the next visit
          return;
        }
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - p, 4); // fast start, gentle settle
          el.textContent = String(Math.round(to * eased));
          if (p < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(frame); el.textContent = String(to); };
  }, [to, duration]);

  return <b ref={ref} className="count">{to}</b>;
}
