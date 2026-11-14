"use client";

import { useRef } from "react";

// Closes the phone menu when a link inside it is tapped.
export default function MobileMenu({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDetailsElement>(null);
  return (
    <details
      ref={ref}
      className="menu"
      onClick={(e) => {
        if ((e.target as HTMLElement).closest(".menu-panel a")) ref.current?.removeAttribute("open");
      }}
    >
      {children}
    </details>
  );
}
