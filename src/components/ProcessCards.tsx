"use client";

import { useEffect, useRef, useState } from "react";
import { Copy } from "./Copy";

type Step = { verb: string; when: string; text: string };

// How a project runs: four tall cards side by side. The card under the cursor (or tapped, or focused)
// widens slowly and softly to show the whole step while the others narrow. A short pause before
// opening means sweeping the cursor across the row doesn't flick every card open. On a phone they stack.
const HOVER_DELAY = 110;

export function ProcessCards({ steps }: { steps: readonly Step[] }) {
  const [open, setOpen] = useState(0);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const openSoon = (i: number) => {
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setOpen(i), HOVER_DELAY);
  };
  const openNow = (i: number) => {
    window.clearTimeout(timer.current);
    setOpen(i);
  };

  return (
    <ol className="v2-steps" data-reveal onMouseLeave={() => window.clearTimeout(timer.current)}>
      {steps.map((s, i) => {
        const isOpen = open === i;
        return (
          <li
            key={s.verb}
            className={`v2-step v2-step-${i}`}
            data-open={isOpen || undefined}
            onMouseEnter={() => openSoon(i)}
            onFocus={() => openNow(i)}
          >
            <button
              type="button"
              className="v2-step-hit"
              aria-expanded={isOpen}
              aria-controls={`step-${i}-text`}
              onClick={() => openNow(i)}
            >
              <span className="visually-hidden">
                Step {i + 1}: {s.verb}
              </span>
            </button>
            <span className="v2-step-big" aria-hidden="true">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="v2-step-top">
              <span className="chip v2-step-when">
                <Copy text={s.when} />
              </span>
              <span className="v2-step-toggle" aria-hidden="true" />
            </div>
            <div className="v2-step-body">
              <h3 className="v2-step-verb">{s.verb}</h3>
              <div className="v2-step-more" id={`step-${i}-text`}>
                <p className="v2-step-text">{s.text}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
