"use client";

import { useEffect, useState } from "react";

type Zone = { city: string; tz: string };

const format = (tz: string) =>
  new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: tz }).format(new Date());

export function LocalTimes({ zones }: { zones: readonly Zone[] }) {
  const [now, setNow] = useState<string[] | null>(null);

  useEffect(() => {
    const tick = () => setNow(zones.map((z) => format(z.tz)));
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, [zones]);

  return (
    <p className="local-times">
      {zones.map((z, i) => (
        <span key={z.city}>
          {z.city} {now ? <time>{now[i]}</time> : null}
          {i < zones.length - 1 ? " · " : ""}
        </span>
      ))}
    </p>
  );
}
