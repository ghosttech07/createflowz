"use client";

import { useState } from "react";
import type { brief as briefContent } from "@/content/site";

type Props = { email: string; bookingUrl: string; copy: typeof briefContent };

export function BriefBuilder({ email, bookingUrl, copy }: Props) {
  const [picked, setPicked] = useState<string[]>([]);
  const [region, setRegion] = useState<string | null>(null);
  const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">("idle");

  // Keep the order of the groups, not the order of clicks, so the brief reads create → flow.
  const ordered = copy.groups.flatMap((g) => g.items).filter((s) => picked.includes(s));

  const toggle = (item: string) =>
    setPicked((p) => (p.includes(item) ? p.filter((x) => x !== item) : [...p, item]));

  const subject = ordered.length ? `Project brief: ${ordered.join(", ")}` : "New project";
  const body = [
    "Hi Createflowz,",
    "",
    ordered.length ? `We need help with: ${ordered.join(", ")}.` : "We would like to talk about a project.",
    region ? `We are based in: ${region}.` : "",
    "",
    "About us and what we sell:",
    "",
  ]
    .filter((line, i, all) => line !== "" || all[i - 1] !== "")
    .join("\n");
  const mailto = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  // For visitors without a mail app: put the brief on the clipboard and say so.
  const copyBrief = async () => {
    try {
      await navigator.clipboard.writeText(`To: ${email}\nSubject: ${subject}\n\n${body}`);
      setCopyState("copied");
    } catch {
      setCopyState("failed");
    }
    setTimeout(() => setCopyState("idle"), 3200);
  };
  const copyStatus = copyState === "copied" ? copy.copiedLabel : copyState === "failed" ? copy.copyFailed : "";

  return (
    <div className="brief" data-reveal>
      <p className="brief-question">{copy.question}</p>
      {copy.groups.map((g) => (
        <div key={g.name} className="brief-group" role="group" aria-labelledby={`brief-${g.name}`}>
          <span className="brief-group-name" id={`brief-${g.name}`}>
            {g.name}
          </span>
          <div className="brief-options">
            {g.items.map((item) => (
              <button
                key={item}
                type="button"
                className="chip"
                aria-pressed={picked.includes(item)}
                onClick={() => toggle(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      ))}
      <div className="brief-group" role="group" aria-labelledby="brief-region">
        <span className="brief-group-name" id="brief-region">
          Based in
        </span>
        <div className="brief-options">
          {copy.regions.map((r) => (
            <button
              key={r}
              type="button"
              className="chip"
              aria-pressed={region === r}
              onClick={() => setRegion(region === r ? null : r)}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      <p className="brief-flow" aria-live="polite">
        {ordered.length ? (
          ordered.map((s, i) => (
            <span key={s}>
              {i > 0 && (
                <svg className="brief-arrow" viewBox="0 0 24 24" width="0.9em" height="0.9em" aria-hidden="true">
                  <path d="M3 12h16M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" />
                </svg>
              )}
              {s}
            </span>
          ))
        ) : (
          <span className="brief-empty">{copy.empty}</span>
        )}
      </p>

      <div className="brief-actions">
        <a className="btn btn-accent" href={mailto} aria-describedby="brief-send-hint">
          {copy.sendLabel}
        </a>
        <button type="button" className="btn btn-quiet" onClick={copyBrief}>
          {copyState === "copied" ? copy.copiedLabel : copy.copyLabel}
        </button>
        {bookingUrl && (
          <a className="text-link" href={bookingUrl} target="_blank" rel="noopener noreferrer">
            {copy.callLabel}
          </a>
        )}
      </div>
      <p className="brief-hint" id="brief-send-hint">
        {copy.sendHint}
      </p>
      <p className={copyState === "failed" ? "brief-hint brief-error" : "visually-hidden"} role="status">
        {copyStatus}
      </p>
    </div>
  );
}
