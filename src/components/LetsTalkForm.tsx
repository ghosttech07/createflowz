"use client";

import { useState, type FormEvent } from "react";
import type { brief as briefContent, letsTalk as letsTalkContent } from "@/content/site";

type Props = { email: string; copy: typeof letsTalkContent; groups: typeof briefContent.groups };
type Status = "idle" | "sending" | "sent" | "mail" | "failed" | "invalid";

// The project form. With a form endpoint set it posts there; without one it opens the visitor's email app.
export function LetsTalkForm({ email, copy, groups }: Props) {
  const [picked, setPicked] = useState<string[]>([]);
  const [status, setStatus] = useState<Status>("idle");
  const f = copy.fields;

  const toggle = (item: string) =>
    setPicked((p) => (p.includes(item) ? p.filter((x) => x !== item) : [...p, item]));

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      setStatus("invalid");
      form.reportValidity();
      return;
    }
    const data = new FormData(form);
    const needs = groups.flatMap((g) => g.items).filter((s) => picked.includes(s));
    const get = (k: string) => String(data.get(k) ?? "").trim();

    if (copy.formEndpoint) {
      setStatus("sending");
      data.set("needs", needs.join(", "));
      try {
        const res = await fetch(copy.formEndpoint, { method: "POST", body: data, headers: { Accept: "application/json" } });
        if (!res.ok) throw new Error(String(res.status));
        setStatus("sent");
        form.reset();
        setPicked([]);
      } catch {
        setStatus("failed");
      }
      return;
    }

    const subject = `Project enquiry from ${get("company") || get("name")}`;
    const lines = [`Name: ${get("name")}`];
    if (get("company")) lines.push(`Company: ${get("company")}`);
    if (get("phone")) lines.push(`Phone: ${get("phone")}`);
    lines.push(`Email: ${get("email")}`);
    if (needs.length) lines.push(`Needs: ${needs.join(", ")}`);
    lines.push("", get("project"));
    const body = lines.join("\n");
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus("mail");
  };

  const message =
    status === "sent"
      ? copy.sent
      : status === "mail"
        ? copy.mailOpened
        : status === "failed"
          ? copy.failed
          : status === "invalid"
            ? copy.required
            : "";

  return (
    <form className="lt-form" onSubmit={onSubmit} noValidate>
      <label className="lt-field">
        <span className="visually-hidden">{f.company}</span>
        <input name="company" type="text" autoComplete="organization" placeholder={f.company} />
      </label>
      <label className="lt-field">
        <span className="visually-hidden">{f.name} (required)</span>
        <input name="name" type="text" autoComplete="name" placeholder={`${f.name} *`} required />
      </label>
      <label className="lt-field">
        <span className="visually-hidden">{f.phone}</span>
        <input name="phone" type="tel" autoComplete="tel" placeholder={f.phone} />
      </label>
      <label className="lt-field">
        <span className="visually-hidden">{f.email} (required)</span>
        <input name="email" type="email" autoComplete="email" placeholder={`${f.email} *`} required />
      </label>

      <fieldset className="lt-needs">
        <legend>{f.needs}</legend>
        {groups.map((g) => (
          <div key={g.name} className="lt-needs-row">
            <span className="lt-needs-group">{g.name}</span>
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
        ))}
      </fieldset>

      <label className="lt-field">
        <span className="visually-hidden">{f.project} (required)</span>
        <textarea name="project" rows={5} placeholder={`${f.project} *`} required />
      </label>

      <div className="lt-actions">
        <button type="submit" className="btn btn-ink" disabled={status === "sending"}>
          {status === "sending" ? copy.sending : copy.submit}
          <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 12h15M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2.2" />
          </svg>
        </button>
        <p className={status === "failed" || status === "invalid" ? "lt-status lt-error" : "lt-status"} role="status">
          {message}
        </p>
      </div>
    </form>
  );
}
