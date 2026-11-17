export function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 12 12" aria-hidden="true">
      <path d="M2.5 9.5L9.5 2.5M4 2.5h5.5V8" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function Tick() {
  return (
    <svg width="14" height="14" viewBox="0 0 12 12" aria-hidden="true">
      <path d="M2 6.3l2.6 2.6L10 3.4" fill="none" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function Plus() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M8 2v12M2 8h12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function Icon({ name }: { name: string }) {
  const paths: Record<string, React.ReactNode> = {
    share: (<><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4" /></>),
    video: (<><rect x="2.5" y="6.5" width="13" height="11" rx="2" /><path d="M15.5 10.5l6-3.5v10l-6-3.5" /></>),
    bolt: <path d="M13 2L4 14h7l-1 8 9-12h-7z" />,
    target: (<><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.5" /></>),
    pen: (<><path d="M12 19l7-7 3 3-7 7zM18 13l-1.5-7.5L2 2l3.5 14.5L13 18zM2 2l7.6 7.6" /><circle cx="11" cy="11" r="2" /></>),
    monitor: (<><rect x="2.5" y="3.5" width="19" height="13" rx="2" /><path d="M8 21h8M12 16.5V21" /></>),
    send: (<><path d="M21 3L10 14" /><path d="M21 3l-7 18-4-7-7-4z" /></>),
  };
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow"><span aria-hidden="true" />{children}</p>;
}
