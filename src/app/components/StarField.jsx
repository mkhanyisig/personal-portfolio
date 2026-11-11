'use client';
import { useEffect, useRef } from 'react';

// Fixed, full-screen star field behind the page. Each star twinkles at its own
// pace; the brighter ones occasionally flash a small four-point glint.
// Positions are seeded, so the sky looks the same on every visit.
//
// Performance: one <canvas>, a few dozen stars, paused in background tabs.
// With prefers-reduced-motion it draws a single still frame.

const STARS_PER_PIXEL = 1 / 52000; // ≈25 stars on a 1440×900 screen

const PALETTE = {
  dark: { rgb: '255, 255, 255', base: 0.7, scale: 1.3 },
  light: { rgb: '24, 19, 14', base: 0.95, scale: 2.2 },
};

// Small deterministic PRNG (mulberry32) so the layout is stable.
const seeded = (seed) => () => {
  seed |= 0;
  seed = (seed + 0x6d2b79f5) | 0;
  let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};

const makeStars = (count) => {
  const rnd = seeded(1977);
  return Array.from({ length: count }, () => {
    const bright = rnd() < 0.22;
    return {
      x: rnd(),
      y: rnd(),
      size: bright ? 1.3 + rnd() * 0.5 : 0.8 + rnd() * 0.5,
      bright,
      speed: 0.6 + rnd() * 1.4, // twinkle speed
      phase: rnd() * Math.PI * 2,
      glintSpeed: 0.12 + rnd() * 0.18,
      glintPhase: rnd() * Math.PI * 2,
    };
  });
};

const StarField = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!ctx) return undefined;

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    let w = 0;
    let h = 0;
    let stars = [];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      stars = makeStars(Math.max(14, Math.round(w * h * STARS_PER_PIXEL)));
    };

    const frame = (time) => {
      const theme = document.documentElement.classList.contains('dark')
        ? PALETTE.dark
        : PALETTE.light;
      const t = time / 1000;
      ctx.clearRect(0, 0, w, h);

      for (const s of stars) {
        const x = s.x * w;
        const y = s.y * h;
        const r = s.size * theme.scale;
        // Twinkle between ~45% and 100% of the base brightness.
        const twinkle = reduceMotion
          ? 0.8
          : 0.72 + 0.28 * Math.sin(t * s.speed + s.phase);
        const alpha = theme.base * twinkle;

        ctx.fillStyle = `rgba(${theme.rgb}, ${alpha})`;
        ctx.beginPath();
        ctx.arc(x, y, r / 2, 0, Math.PI * 2);
        ctx.fill();

        if (!s.bright || reduceMotion) continue;

        // Occasional glint: a short, sharp peak on a slow cycle.
        const glint =
          Math.max(0, Math.sin(t * s.glintSpeed + s.glintPhase)) ** 10;
        if (glint < 0.02) continue;
        const len = r * (2 + 4 * glint);
        const g = ctx.createRadialGradient(x, y, 0, x, y, len);
        g.addColorStop(0, `rgba(${theme.rgb}, ${0.8 * glint * theme.base})`);
        g.addColorStop(1, `rgba(${theme.rgb}, 0)`);
        ctx.strokeStyle = g;
        ctx.lineWidth = Math.max(0.6, r * 0.35);
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(x - len, y);
        ctx.lineTo(x + len, y);
        ctx.moveTo(x, y - len);
        ctx.lineTo(x, y + len);
        ctx.stroke();
      }
    };

    resize();

    let raf = 0;
    const loop = (time) => {
      frame(time);
      raf = requestAnimationFrame(loop);
    };
    const start = () => {
      if (!reduceMotion && !raf && !document.hidden)
        raf = requestAnimationFrame(loop);
    };
    const stop = () => {
      cancelAnimationFrame(raf);
      raf = 0;
    };

    const onResize = () => {
      resize();
      if (!raf) frame(performance.now());
    };
    window.addEventListener('resize', onResize);

    const onVisibility = () => (document.hidden ? stop() : start());
    document.addEventListener('visibilitychange', onVisibility);

    // Recolour immediately when the theme changes.
    const themeObserver = new MutationObserver(() => {
      if (!raf) frame(performance.now());
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    frame(performance.now());
    start();

    return () => {
      stop();
      window.removeEventListener('resize', onResize);
      document.removeEventListener('visibilitychange', onVisibility);
      themeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-[1] h-screen w-screen"
    />
  );
};

export default StarField;
