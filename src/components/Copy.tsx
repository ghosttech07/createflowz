import { Fragment } from "react";

// Renders a content string, muting any [bracketed] placeholder inside it.
export function Copy({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]*\])/g).filter(Boolean);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("[") ? (
          <span key={i} data-placeholder="">
            {part}
          </span>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}
