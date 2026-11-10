"use client";

import { useEffect, useRef, useState } from "react";

// Highlighted words that scramble into random characters while the pointer is over them, then resolve back letter
// by letter. Inside a link or button, keyboard focus on that control scrambles it too. The real text stays in the
// page as the only copy (for screen readers, search and copy-paste); while scrambling it turns transparent to hold
// the width, and a decorative layer shows the scramble on top of it. Reduced motion skips the effect.

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&*+=?/<>";
const FRAME_MS = 32;

type Props = {
  text: string;
  className?: string;
};

export function Scramble({ text, className }: Props) {
  const [shown, setShown] = useState(text);
  const [active, setActive] = useState(false);
  const root = useRef<HTMLSpanElement>(null);
  const timer = useRef<number | null>(null);
  const activeRef = useRef(false);
  const reduced = useRef(false);

  const randomChar = (original: string) =>
    /\s/.test(original) ? original : GLYPHS[Math.floor(Math.random() * GLYPHS.length)];

  const stop = () => {
    if (timer.current) window.clearInterval(timer.current);
    timer.current = null;
  };

  const setOn = (on: boolean) => {
    activeRef.current = on;
    setActive(on);
  };

  // Scramble every letter, and keep cycling while hovered or focused.
  const start = () => {
    if (reduced.current) return;
    stop();
    setOn(true);
    setShown(text.split("").map(randomChar).join(""));
    timer.current = window.setInterval(() => {
      setShown(text.split("").map(randomChar).join(""));
    }, FRAME_MS * 2);
  };

  // Resolve back, left to right, then drop the decorative layer.
  const resolve = () => {
    if (reduced.current || !activeRef.current) return;
    stop();
    let settled = 0;
    timer.current = window.setInterval(() => {
      settled += Math.max(1, Math.ceil(text.length / 14));
      if (settled >= text.length) {
        stop();
        setShown(text);
        setOn(false);
        return;
      }
      setShown(text.slice(0, settled) + text.slice(settled).split("").map(randomChar).join(""));
    }, FRAME_MS);
  };

  // Keyboard parity: when the word sits inside a link or button, that control's focus drives the effect.
  const startRef = useRef(start);
  const resolveRef = useRef(resolve);
  useEffect(() => {
    startRef.current = start;
    resolveRef.current = resolve;
  });

  useEffect(() => {
    reduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const host = root.current?.closest<HTMLElement>("a, button");
    const onFocus = () => startRef.current();
    const onBlur = () => resolveRef.current();
    host?.addEventListener("focus", onFocus);
    host?.addEventListener("blur", onBlur);
    return () => {
      host?.removeEventListener("focus", onFocus);
      host?.removeEventListener("blur", onBlur);
      if (timer.current) window.clearInterval(timer.current);
    };
  }, []);

  return (
    <span ref={root} className={`scramble ${className ?? ""}`} onPointerEnter={start} onPointerLeave={resolve}>
      <span className={active ? "scramble-text is-scrambling" : "scramble-text"}>{text}</span>
      {active && (
        <span className="scramble-live" aria-hidden="true">
          {shown}
        </span>
      )}
    </span>
  );
}
