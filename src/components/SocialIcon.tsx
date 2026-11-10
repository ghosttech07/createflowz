// Small line icons for the footer's social links. They take the text colour (currentColor).

export function SocialIcon({ name }: { name: string }) {
  const common = { width: 24, height: 24, viewBox: "0 0 24 24", "aria-hidden": true, focusable: false } as const;
  switch (name) {
    case "Instagram":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    case "Facebook":
      return (
        <svg {...common} fill="currentColor">
          <path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.3H8v3h2.5V21h3z" />
        </svg>
      );
    case "X":
      return (
        <svg {...common} fill="currentColor">
          <path d="M17.8 3h3.1l-6.8 7.7L22 21h-6.2l-4.9-6.4L5.3 21H2.2l7.2-8.3L1.8 3h6.4l4.4 5.8L17.8 3zm-1.1 16.2h1.7L7.4 4.7H5.6l11.1 14.5z" />
        </svg>
      );
    case "LinkedIn":
      return (
        <svg {...common} fill="currentColor">
          <path d="M4.5 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM3 8.8h3V21H3V8.8zm5.3 0h2.9v1.7h.1c.4-.8 1.4-1.9 3.1-1.9 3.3 0 3.9 2.2 3.9 5V21h-3v-6.3c0-1.5 0-3.4-2.1-3.4s-2.4 1.6-2.4 3.3V21h-3V8.8z" />
        </svg>
      );
    default:
      return null;
  }
}
