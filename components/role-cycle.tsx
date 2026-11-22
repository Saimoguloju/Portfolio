"use client";

import { useEffect, useState } from "react";

const INTERVAL_MS = 2600;

export function RoleCycle({ roles }: { roles: readonly string[] }) {
  const [index, setIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (reduceMotion || roles.length < 2) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % roles.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [reduceMotion, roles.length]);

  return (
    <span key={roles[index]} className="role-in" aria-live="polite">
      {roles[index]}
    </span>
  );
}
