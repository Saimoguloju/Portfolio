"use client";

import { useEffect, useState } from "react";

const TYPE_MS = 75;
const HOLD_MS = 1600;
const ERASE_MS = 35;
const GAP_MS = 350;

export function RoleCycle({ roles }: { roles: readonly string[] }) {
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const role = roles[index];

  useEffect(() => {
    if (reduceMotion || roles.length === 0) return;

    let delay: number;
    if (!deleting) delay = count < role.length ? TYPE_MS : HOLD_MS;
    else delay = count > 0 ? ERASE_MS : GAP_MS;

    const id = window.setTimeout(() => {
      if (!deleting) {
        if (count < role.length) setCount(count + 1);
        else setDeleting(true);
      } else if (count > 0) {
        setCount(count - 1);
      } else {
        setDeleting(false);
        setIndex((index + 1) % roles.length);
      }
    }, delay);
    return () => window.clearTimeout(id);
  }, [reduceMotion, roles.length, role, count, deleting, index]);

  if (reduceMotion) return <span>{roles[0]}</span>;

  return (
    <>
      <span className="sr-only" aria-live="polite">
        {role}
      </span>
      <span aria-hidden="true">
        {role.slice(0, count)}
        <span className="type-caret">|</span>
      </span>
    </>
  );
}
