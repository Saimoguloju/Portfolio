"use client";

import { useEffect, useState } from "react";

const TYPE_MS = 80;
const HOLD_MS = 1500;
const ERASE_MS = 40;
const GAP_MS = 300;
const SWAP_MS = 2500;

export function RoleCycle({ roles }: { roles: readonly string[] }) {
  // Show the first role in full until the browser takes over, so the line is never empty.
  const [text, setText] = useState(roles[0] ?? "");
  const [label, setLabel] = useState(roles[0] ?? "");

  useEffect(() => {
    if (roles.length === 0) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let timer: number;
    let index = 0;
    let count = 0;
    let deleting = false;
    let cancelled = false;

    if (reduceMotion) {
      // No typing: swap the whole role every few seconds.
      const swap = () => {
        index = (index + 1) % roles.length;
        setText(roles[index]);
        setLabel(roles[index]);
      };
      timer = window.setInterval(swap, SWAP_MS);
      return () => window.clearInterval(timer);
    }

    // Typing loop: type, hold, erase, next role. All state lives in this closure.
    setText("");
    const tick = () => {
      if (cancelled) return;
      const role = roles[index];
      let delay: number;

      if (!deleting) {
        count += 1;
        setText(role.slice(0, count));
        if (count >= role.length) {
          deleting = true;
          setLabel(role);
          delay = HOLD_MS;
        } else {
          delay = TYPE_MS;
        }
      } else {
        count -= 1;
        setText(role.slice(0, Math.max(count, 0)));
        if (count <= 0) {
          deleting = false;
          count = 0;
          index = (index + 1) % roles.length;
          delay = GAP_MS;
        } else {
          delay = ERASE_MS;
        }
      }
      timer = window.setTimeout(tick, delay);
    };
    timer = window.setTimeout(tick, TYPE_MS);

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [roles]);

  return (
    <>
      <span className="sr-only" aria-live="polite">
        {label}
      </span>
      <span aria-hidden="true">
        {text}
        <span className="type-caret">|</span>
      </span>
    </>
  );
}
