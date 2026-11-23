"use client";

import { useEffect, useRef, useState } from "react";

const THEMES = ["signal", "peach", "ocean", "forest", "midnight"] as const;
type Theme = (typeof THEMES)[number];

const STORAGE_KEY = "theme";
const REST_LENGTH = 110; // px of thread visible at rest
const MAX_PULL = 90; // how far the thread can be dragged
const THRESHOLD = 45; // pull distance that triggers a theme change

function readTheme(): Theme {
  const stored = document.documentElement.dataset.theme;
  return THEMES.includes(stored as Theme) ? (stored as Theme) : "signal";
}

export function ThemeThread() {
  const [theme, setTheme] = useState<Theme>("signal");
  const [pull, setPull] = useState(0);
  const [dragging, setDragging] = useState(false);
  const startY = useRef(0);

  useEffect(() => {
    setTheme(readTheme());
  }, []);

  function applyNext() {
    const next = THEMES[(THEMES.indexOf(theme) + 1) % THEMES.length];
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // storage unavailable; the theme still applies for this visit
    }
    setTheme(next);
  }

  function onPointerDown(event: React.PointerEvent<HTMLButtonElement>) {
    event.currentTarget.setPointerCapture(event.pointerId);
    startY.current = event.clientY;
    setDragging(true);
  }

  function onPointerMove(event: React.PointerEvent<HTMLButtonElement>) {
    if (!dragging) return;
    setPull(Math.min(MAX_PULL, Math.max(0, event.clientY - startY.current)));
  }

  function endDrag() {
    if (!dragging) return;
    setDragging(false);
    if (pull >= THRESHOLD) applyNext();
    setPull(0);
  }

  function onKeyDown(event: React.KeyboardEvent<HTMLButtonElement>) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      applyNext();
    }
  }

  const transition = dragging
    ? "none"
    : "height 0.45s cubic-bezier(0.34, 1.56, 0.64, 1)";

  return (
    <div className="pointer-events-none fixed right-1.5 top-0 z-30 flex flex-col items-center">
      <div
        aria-hidden="true"
        className="w-0.5 bg-foreground/60 motion-reduce:!transition-none"
        style={{ height: REST_LENGTH + pull, transition }}
      />
      <button
        type="button"
        aria-label={`Change color theme (current: ${theme}). Drag down or press Enter.`}
        title="Pull to change theme"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onKeyDown={onKeyDown}
        className="pointer-events-auto size-5 shrink-0 cursor-grab touch-none rounded-full border-2 border-foreground bg-accent shadow-md active:cursor-grabbing"
      />
    </div>
  );
}
