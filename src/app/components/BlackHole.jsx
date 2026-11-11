'use client';
import { useEffect, useRef } from 'react';

// A small, quiet black hole: stars on tilted orbits spiral inward (faster as
// they get closer, roughly Keplerian), pass behind the shadow, and are
// replaced at the outer edge. Black and white, decorative only.
//
// Performance: one <canvas>, ~150 particles, paused when off-screen or when
// the tab is hidden. With prefers-reduced-motion it draws a single still frame.

const PARTICLES = 150;
const BACKGROUND_STARS = 28;
const TILT = 0.3; // how flat the disk looks (1 = face-on)
const ROTATION = -0.22; // radians, tilts the whole disk slightly

const rand = (min, max) => min + Math.random() * (max - min);

const BlackHole = ({ className = '' }) => {
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
    let rs = 0; // shadow radius
    let rMax = 0;
    let particles = [];
    let stars = [];

    const spawn = (outer) => {
      const r = outer ? rand(rMax * 0.75, rMax) : rand(rs * 1.6, rMax);
      return {
        r,
        theta: rand(0, Math.PI * 2),
        size: rand(0.5, 1.5),
        drift: rand(0.6, 1.4),
      };
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width;
      h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      rs = Math.min(w, h) * 0.075;
      rMax = Math.min(w, h) * 0.46;
      particles = Array.from({ length: PARTICLES }, () => spawn(false));
      stars = Array.from({ length: BACKGROUND_STARS }, () => ({
        x: rand(0, w),
        y: rand(0, h),
        size: rand(0.4, 1.2),
        phase: rand(0, Math.PI * 2),
      }));
    };

    const project = (r, theta) => {
      const x = r * Math.cos(theta);
      const y = r * Math.sin(theta) * TILT;
      const cos = Math.cos(ROTATION);
      const sin = Math.sin(ROTATION);
      return [w / 2 + x * cos - y * sin, h / 2 + x * sin + y * cos];
    };

    const drawParticle = (p, ink, front) => {
      // Orbital speed grows toward the centre, so close stars streak.
      const omega = 0.9 * Math.pow(rs / p.r, 1.5);
      const [x, y] = project(p.r, p.theta);
      const [tx, ty] = project(p.r, p.theta - omega * 0.35);
      const closeness = Math.min(1, (rs * 2.2) / p.r);
      const alpha = (front ? 0.25 : 0.15) + 0.7 * closeness;
      ctx.strokeStyle = `rgba(${ink}, ${alpha})`;
      ctx.lineWidth = p.size;
      ctx.beginPath();
      ctx.moveTo(tx, ty);
      ctx.lineTo(x, y);
      ctx.stroke();
    };

    const frame = (t, dt) => {
      const dark = document.documentElement.classList.contains('dark');
      const ink = dark ? '244, 241, 234' : '17, 17, 17';
      const shadow = dark ? '#050506' : '#111111';

      ctx.clearRect(0, 0, w, h);

      // Distant background stars, slowly twinkling.
      for (const s of stars) {
        const a = 0.25 + 0.25 * Math.sin(t / 1400 + s.phase);
        ctx.fillStyle = `rgba(${ink}, ${a})`;
        ctx.fillRect(s.x, s.y, s.size, s.size);
      }

      // Advance the disk: orbit and slowly fall inward.
      for (const p of particles) {
        const omega = 0.9 * Math.pow(rs / p.r, 1.5);
        p.theta += omega * dt;
        p.r -= rs * 0.035 * p.drift * (rMax / p.r) * dt;
        if (p.r < rs * 1.15) Object.assign(p, spawn(true));
      }

      // Back half of the disk (behind the hole).
      for (const p of particles)
        if (Math.sin(p.theta) < 0) drawParticle(p, ink, false);

      // Soft glow, shadow and photon ring.
      const cx = w / 2;
      const cy = h / 2;
      const glow = ctx.createRadialGradient(cx, cy, rs, cx, cy, rs * 3.2);
      glow.addColorStop(0, `rgba(${ink}, 0.16)`);
      glow.addColorStop(1, `rgba(${ink}, 0)`);
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(cx, cy, rs * 3.2, 0, Math.PI * 2);
      ctx.fill();

      // Light bent over the top of the hole (the lensed far side of the disk).
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(ROTATION);
      ctx.strokeStyle = `rgba(${ink}, 0.22)`;
      ctx.lineWidth = rs * 0.18;
      ctx.beginPath();
      ctx.ellipse(0, 0, rs * 1.75, rs * 1.45, 0, Math.PI, Math.PI * 2);
      ctx.stroke();
      ctx.restore();

      ctx.fillStyle = shadow;
      ctx.beginPath();
      ctx.arc(cx, cy, rs, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = `rgba(${ink}, 0.7)`;
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.arc(cx, cy, rs * 1.04, 0, Math.PI * 2);
      ctx.stroke();

      // Front half of the disk (in front of the hole).
      for (const p of particles)
        if (Math.sin(p.theta) >= 0) drawParticle(p, ink, true);
    };

    resize();

    if (reduceMotion) {
      frame(0, 0);
      return undefined;
    }

    let raf = 0;
    let last = 0;
    let visible = true;

    const loop = (t) => {
      const dt = Math.min((t - (last || t)) / 1000, 0.05);
      last = t;
      frame(t, dt);
      raf = requestAnimationFrame(loop);
    };
    const start = () => {
      if (!raf && visible && !document.hidden) {
        last = 0;
        raf = requestAnimationFrame(loop);
      }
    };
    const stop = () => {
      cancelAnimationFrame(raf);
      raf = 0;
    };

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
      else stop();
    });
    io.observe(canvas);

    const onVisibility = () => (document.hidden ? stop() : start());
    document.addEventListener('visibilitychange', onVisibility);

    const ro = new ResizeObserver(() => resize());
    ro.observe(canvas);

    start();

    return () => {
      stop();
      io.disconnect();
      ro.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none ${className}`}
    />
  );
};

export default BlackHole;
