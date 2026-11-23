"use client";

import { useEffect, useRef } from "react";

type Ball = { x: number; y: number; vx: number; vy: number; r: number };

// Circle sizes as a fraction of the shorter canvas side: a few big, many small.
const SIZES = [0.26, 0.19, 0.1, 0.07, 0.06, 0.05, 0.045, 0.04, 0.035, 0.03, 0.03, 0.025, 0.02, 0.02];
const MAX_SPEED = 5;
const MIN_SPEED = 0.25;
const REPEL_RANGE = 110;

export function HeroCircles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0;
    let h = 0;
    let balls: Ball[] = [];
    let raf = 0;
    let visible = true;
    let ink = "#141413";
    const pointer = { x: -9999, y: -9999 };

    const readInk = () => {
      ink = getComputedStyle(canvas).getPropertyValue("--hero-ink").trim() || ink;
    };

    const spawn = () => {
      const m = Math.min(w, h);
      balls = SIZES.map((f) => {
        const r = f * m;
        const angle = Math.random() * Math.PI * 2;
        const speed = 0.4 + Math.random() * 0.8;
        return {
          r,
          x: r + Math.random() * Math.max(1, w - 2 * r),
          y: r + Math.random() * Math.max(1, h - 2 * r),
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
        };
      });
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const nextW = canvas.clientWidth;
      const nextH = canvas.clientHeight;
      if (!nextW || !nextH) return;
      canvas.width = Math.round(nextW * dpr);
      canvas.height = Math.round(nextH * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (balls.length === 0) {
        w = nextW;
        h = nextH;
        spawn();
      } else {
        const kx = nextW / w;
        const ky = nextH / h;
        const kr = Math.min(nextW, nextH) / Math.min(w, h);
        for (const b of balls) {
          b.x *= kx;
          b.y *= ky;
          b.r *= kr;
        }
        w = nextW;
        h = nextH;
      }
      draw();
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = ink;
      for (const b of balls) {
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const step = () => {
      for (const b of balls) {
        // Push away from the pointer.
        const dx = b.x - pointer.x;
        const dy = b.y - pointer.y;
        const d = Math.hypot(dx, dy);
        const reach = b.r + REPEL_RANGE;
        if (d < reach && d > 0.001) {
          const force = (1 - d / reach) * 0.6;
          b.vx += (dx / d) * force;
          b.vy += (dy / d) * force;
        }

        b.x += b.vx;
        b.y += b.vy;

        if (b.x < b.r) {
          b.x = b.r;
          b.vx = Math.abs(b.vx);
        } else if (b.x > w - b.r) {
          b.x = w - b.r;
          b.vx = -Math.abs(b.vx);
        }
        if (b.y < b.r) {
          b.y = b.r;
          b.vy = Math.abs(b.vy);
        } else if (b.y > h - b.r) {
          b.y = h - b.r;
          b.vy = -Math.abs(b.vy);
        }

        const speed = Math.hypot(b.vx, b.vy);
        if (speed > MAX_SPEED) {
          b.vx *= MAX_SPEED / speed;
          b.vy *= MAX_SPEED / speed;
        } else if (speed < MIN_SPEED) {
          const angle = Math.random() * Math.PI * 2;
          b.vx = Math.cos(angle) * MIN_SPEED;
          b.vy = Math.sin(angle) * MIN_SPEED;
        }
      }

      // Elastic circle-circle collisions (mass proportional to area).
      for (let i = 0; i < balls.length; i++) {
        for (let j = i + 1; j < balls.length; j++) {
          const a = balls[i];
          const b = balls[j];
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const dist = Math.hypot(dx, dy);
          const min = a.r + b.r;
          if (dist >= min || dist === 0) continue;

          const nx = dx / dist;
          const ny = dy / dist;
          const ma = a.r * a.r;
          const mb = b.r * b.r;
          const overlap = min - dist;
          a.x -= nx * overlap * (mb / (ma + mb));
          a.y -= ny * overlap * (mb / (ma + mb));
          b.x += nx * overlap * (ma / (ma + mb));
          b.y += ny * overlap * (ma / (ma + mb));

          const vn = (b.vx - a.vx) * nx + (b.vy - a.vy) * ny;
          if (vn < 0) {
            const impulse = (-2 * vn) / (1 / ma + 1 / mb);
            a.vx -= (impulse * nx) / ma;
            a.vy -= (impulse * ny) / ma;
            b.vx += (impulse * nx) / mb;
            b.vy += (impulse * ny) / mb;
          }
        }
      }
    };

    const loop = () => {
      if (!visible) return;
      step();
      draw();
      raf = requestAnimationFrame(loop);
    };

    const onPointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
    };
    const onPointerLeave = () => {
      pointer.x = -9999;
      pointer.y = -9999;
    };

    readInk();
    resize();

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);

    // Redraw with the new colour when the theme thread switches themes.
    const themeObserver = new MutationObserver(() => {
      readInk();
      draw();
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    let intersection: IntersectionObserver | undefined;
    if (!reduceMotion) {
      window.addEventListener("pointermove", onPointerMove);
      document.documentElement.addEventListener("pointerleave", onPointerLeave);
      intersection = new IntersectionObserver(([entry]) => {
        const wasVisible = visible;
        visible = entry.isIntersecting;
        if (visible && !wasVisible) raf = requestAnimationFrame(loop);
      });
      intersection.observe(canvas);
      raf = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(raf);
      resizeObserver.disconnect();
      themeObserver.disconnect();
      intersection?.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      document.documentElement.removeEventListener("pointerleave", onPointerLeave);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className="absolute inset-0 size-full" />;
}
