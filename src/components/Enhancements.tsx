"use client";

import { useEffect } from "react";

// Page-wide behaviour that needs the DOM: the header takes the colour of the chapter beneath it, the nav marks
// the section in view, section parts rise in as they enter, and the phone menu closes itself.
export function Enhancements() {
  useEffect(() => {
    const header = document.querySelector<HTMLElement>(".site-header");
    const chapters = Array.from(document.querySelectorAll<HTMLElement>("[data-chapter]"));
    const spyLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>("[data-spy]"));
    const spyTargets = spyLinks
      .map((link) => document.getElementById(link.dataset.spy ?? ""))
      .filter((el): el is HTMLElement => el !== null);
    const revealables = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    let frame = 0;
    const update = () => {
      frame = 0;
      // A fast jump can skip an element without the observer ever seeing it intersect,
      // so anything already above the fold's bottom edge is shown here too.
      const fold = window.innerHeight;
      revealables.forEach((el) => {
        if (!el.classList.contains("is-in") && el.getBoundingClientRect().top < fold) el.classList.add("is-in");
      });

      // The section whose box spans a line a third of the way down the screen is the current one.
      const line = fold / 3;
      const current = spyTargets.find((el) => {
        const r = el.getBoundingClientRect();
        return r.top <= line && r.bottom > line;
      });
      spyLinks.forEach((link) => {
        if (current && link.dataset.spy === current.id) link.setAttribute("aria-current", "true");
        else link.removeAttribute("aria-current");
      });

      if (!header) return;
      const probe = header.offsetHeight / 2;
      // Deepest match wins, so a band inside a section (the Work title) can set its own colour.
      const chapter = chapters.findLast((el) => {
        const r = el.getBoundingClientRect();
        return r.top <= probe && r.bottom > probe;
      });
      if (chapter) header.dataset.theme = chapter.dataset.chapter;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    // Stagger siblings that enter together: heading, then text, then the rest.
    revealables.forEach((el) => {
      const siblings = el.parentElement ? Array.from(el.parentElement.querySelectorAll(":scope > [data-reveal]")) : [];
      el.style.setProperty("--reveal-delay", `${Math.max(0, siblings.indexOf(el)) * 80}ms`);
    });
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    revealables.forEach((el) => observer.observe(el));

    // Phone menu: close on a link choice, on Escape (returning focus to the toggle), or on a tap outside.
    const menu = document.querySelector<HTMLDetailsElement>(".nav-menu");
    const closeMenu = (refocus: boolean) => {
      if (!menu?.open) return;
      menu.open = false;
      if (refocus) menu.querySelector("summary")?.focus();
    };
    const onMenuClick = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest("a")) closeMenu(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu(true);
    };
    const onPointer = (e: PointerEvent) => {
      if (menu && !menu.contains(e.target as Node)) closeMenu(false);
    };
    menu?.addEventListener("click", onMenuClick);
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      menu?.removeEventListener("click", onMenuClick);
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
      observer.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
