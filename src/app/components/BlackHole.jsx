'use client';
import { useEffect, useRef } from 'react';

// A black hole drawn straight onto the page background, in the style of the
// classic artist's impressions: a swirling accretion disk (hot near the centre,
// fading to orange and deep red), one side brighter than the other (Doppler
// beaming), light from the far side bent over the top, and a faint jet.
//
// The canvas is transparent and its edges fade out, so it reads as part of the
// page. Colours adapt to the theme: additive glow on the dark theme, deeper
// inks on the light one (glow would vanish on a light background).
//
// Performance: one <canvas>, paused off-screen / in background tabs, and a
// single still frame for prefers-reduced-motion.

const DISK_PARTICLES = 1100;
const JET_PARTICLES = 40;
const STARS = 45;
const TILT = 0.28; // disk flattening (1 = face-on)
const ROTATION = -0.12; // radians
const JET_ANGLE = -1.92; // radians, up and slightly left

const PALETTE = {
  dark: {
    disk: ['255, 246, 228', '255, 205, 130', '245, 140, 60', '175, 70, 30'],
    body: [
      'rgba(255, 215, 160, 0.7)',
      'rgba(240, 130, 55, 0.36)',
      'rgba(160, 60, 25, 0.12)',
    ],
    lens: 'rgba(255, 195, 130, 0.3)',
    lensGlow: 'rgba(255, 170, 90, 0.9)',
    ring: 'rgba(255, 228, 190, 0.85)',
    jet: ['210, 228, 255', '150, 185, 255'],
    star: '235, 240, 255',
    blend: 'lighter',
  },
  light: {
    disk: ['232, 150, 50', '222, 112, 34', '190, 78, 28', '140, 52, 24'],
    body: [
      'rgba(235, 150, 60, 0.45)',
      'rgba(215, 110, 40, 0.22)',
      'rgba(170, 70, 30, 0.08)',
    ],
    lens: 'rgba(215, 120, 45, 0.35)',
    lensGlow: 'rgba(230, 140, 60, 0.6)',
    ring: 'rgba(170, 80, 25, 0.9)',
    jet: ['70, 95, 150', '90, 115, 170'],
    star: '40, 30, 20',
    blend: 'source-over',
  },
};

const rand = (min, max) => min + Math.random() * (max - min);

const diskColor = (t, colors) => {
  if (t < 0.12) return colors[0];
  if (t < 0.35) return colors[1];
  if (t < 0.65) return colors[2];
  return colors[3];
};

// Fade the canvas edges so there's no visible box.
const EDGE_FADE =
  'radial-gradient(ellipse 50% 50% at 50% 52%, black 55%, transparent 100%)';

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
    let cx = 0;
    let cy = 0;
    let rs = 0; // shadow radius
    let rMax = 0;
    let disk = [];
    let jet = [];
    let stars = [];

    const spawnDisk = (outer) => ({
      r: outer
        ? rand(rMax * 0.8, rMax)
        : rs * 1.35 + Math.random() ** 1.6 * (rMax - rs * 1.35),
      theta: rand(0, Math.PI * 2),
      size: rand(0.35, 1.0),
      drift: rand(0.5, 1.5),
    });

    const spawnJet = () => ({
      d: rand(0, 1),
      speed: rand(0.25, 0.6),
      off: rand(-1, 1),
      size: rand(0.5, 1.4),
    });

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width;
      h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cx = w * 0.5;
      cy = h * 0.56;
      rs = Math.min(w, h) * 0.11;
      rMax = Math.max(w, h) * 0.55;
      disk = Array.from({ length: DISK_PARTICLES }, () => spawnDisk(false));
      jet = Array.from({ length: JET_PARTICLES }, spawnJet);
      stars = Array.from({ length: STARS }, () => ({
        x: rand(0, w),
        y: rand(0, h),
        size: rand(0.5, 1.4),
        phase: rand(0, Math.PI * 2),
      }));
    };

    const project = (r, theta) => {
      const x = r * Math.cos(theta);
      const y = r * Math.sin(theta) * TILT;
      const c = Math.cos(ROTATION);
      const s = Math.sin(ROTATION);
      return [cx + x * c - y * s, cy + x * s + y * c];
    };

    const omegaAt = (r) => 1.1 * Math.pow(rs / r, 1.5);

    const drawDiskParticle = (p, colors) => {
      const t = (p.r - rs) / (rMax - rs);
      const omega = omegaAt(p.r);
      const trail = Math.min(omega * 0.9 + 0.08, 1.2);
      const [x, y] = project(p.r, p.theta);
      const [mx, my] = project(p.r, p.theta - trail / 2);
      const [tx, ty] = project(p.r, p.theta - trail);
      // Material moving toward us (left side here) looks brighter.
      const beaming = 0.55 + 0.45 * Math.cos(p.theta + Math.PI);
      const alpha = (0.12 + 0.75 * (1 - t) ** 1.5) * beaming;
      ctx.strokeStyle = `rgba(${diskColor(t, colors)}, ${alpha})`;
      ctx.lineWidth = p.size;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(tx, ty);
      // Control point chosen so the curve passes through the midpoint.
      ctx.quadraticCurveTo(2 * mx - (tx + x) / 2, 2 * my - (ty + y) / 2, x, y);
      ctx.stroke();
    };

    const frame = (time, dt) => {
      const theme = document.documentElement.classList.contains('dark')
        ? PALETTE.dark
        : PALETTE.light;

      ctx.globalCompositeOperation = 'source-over';
      ctx.clearRect(0, 0, w, h);

      for (const s of stars) {
        const a = 0.35 + 0.35 * Math.sin(time / 1300 + s.phase);
        ctx.fillStyle = `rgba(${theme.star}, ${a})`;
        ctx.fillRect(s.x, s.y, s.size, s.size);
      }

      // Advance the disk: orbit (faster near the centre) and slowly fall in.
      for (const p of disk) {
        p.theta += omegaAt(p.r) * dt;
        p.r -= rs * 0.05 * p.drift * Math.sqrt(rMax / p.r) * dt;
        if (p.r < rs * 1.12) Object.assign(p, spawnDisk(true));
      }

      ctx.globalCompositeOperation = theme.blend;

      // Soft body of the disk underneath the streaks.
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(ROTATION);
      ctx.scale(1, TILT * 1.3);
      const body = ctx.createRadialGradient(0, 0, rs * 0.8, 0, 0, rMax);
      body.addColorStop(0, theme.body[0]);
      body.addColorStop(0.25, theme.body[1]);
      body.addColorStop(0.6, theme.body[2]);
      body.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = body;
      ctx.beginPath();
      ctx.arc(0, 0, rMax, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // Far half of the disk.
      for (const p of disk)
        if (Math.sin(p.theta) < 0) drawDiskParticle(p, theme.disk);

      // Relativistic jet, drawn before the shadow so its base is hidden.
      const len = Math.hypot(w, h) * 0.6;
      const ux = Math.cos(JET_ANGLE);
      const uy = Math.sin(JET_ANGLE);
      const px = -uy;
      const py = ux;
      const flicker =
        1 + 0.08 * Math.sin(time / 260) + 0.05 * Math.sin(time / 97);
      const tipW = rs * 0.45 * flicker;
      const bx = cx + ux * rs * 1.05;
      const by = cy + uy * rs * 1.05;
      const jetGrad = ctx.createLinearGradient(
        bx,
        by,
        bx + ux * len,
        by + uy * len,
      );
      jetGrad.addColorStop(0, `rgba(${theme.jet[0]}, 0.34)`);
      jetGrad.addColorStop(0.35, `rgba(${theme.jet[1]}, 0.12)`);
      jetGrad.addColorStop(1, `rgba(${theme.jet[1]}, 0)`);
      ctx.fillStyle = jetGrad;
      ctx.filter = 'blur(2px)'; // ignored where unsupported; still looks fine
      ctx.beginPath();
      ctx.moveTo(bx + px * rs * 0.08, by + py * rs * 0.08);
      ctx.lineTo(bx + ux * len + px * tipW, by + uy * len + py * tipW);
      ctx.lineTo(bx + ux * len - px * tipW, by + uy * len - py * tipW);
      ctx.lineTo(bx - px * rs * 0.08, by - py * rs * 0.08);
      ctx.closePath();
      ctx.fill();
      ctx.filter = 'none';

      for (const j of jet) {
        j.d += j.speed * dt;
        if (j.d > 1) Object.assign(j, spawnJet(), { d: 0 });
        const along = j.d * len;
        const spread = j.off * tipW * j.d;
        ctx.fillStyle = `rgba(${theme.jet[0]}, ${0.6 * (1 - j.d)})`;
        ctx.fillRect(
          bx + ux * along + px * spread,
          by + uy * along + py * spread,
          j.size,
          j.size,
        );
      }

      // Far side of the disk, lensed up and over the shadow.
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(ROTATION);
      ctx.shadowColor = theme.lensGlow;
      ctx.shadowBlur = rs * 1.2;
      ctx.strokeStyle = theme.lens;
      ctx.lineWidth = rs * 0.2;
      ctx.beginPath();
      ctx.ellipse(0, 0, rs * 1.65, rs * 1.4, 0, Math.PI * 1.04, Math.PI * 1.96);
      ctx.stroke();
      ctx.restore();

      // The shadow itself, with a thin bright photon ring.
      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = '#000';
      ctx.beginPath();
      ctx.arc(cx, cy, rs, 0, Math.PI * 2);
      ctx.fill();

      ctx.globalCompositeOperation = theme.blend;
      ctx.strokeStyle = theme.ring;
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.arc(cx, cy, rs * 1.03, 0, Math.PI * 2);
      ctx.stroke();

      // Near half of the disk, passing in front of the shadow.
      for (const p of disk)
        if (Math.sin(p.theta) >= 0) drawDiskParticle(p, theme.disk);

      ctx.globalCompositeOperation = 'source-over';
    };

    resize();

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
      if (reduceMotion) return;
      if (!raf && visible && !document.hidden) {
        last = 0;
        raf = requestAnimationFrame(loop);
      }
    };
    const stop = () => {
      cancelAnimationFrame(raf);
      raf = 0;
    };

    // Redraw the still frame when the theme changes (matters with reduced motion).
    const themeObserver = new MutationObserver(() => {
      if (!raf) frame(performance.now(), 0);
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    if (reduceMotion) {
      frame(0, 0);
      return () => themeObserver.disconnect();
    }

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
      else stop();
    });
    io.observe(canvas);

    const onVisibility = () => (document.hidden ? stop() : start());
    document.addEventListener('visibilitychange', onVisibility);

    const ro = new ResizeObserver(() => {
      resize();
      if (!raf) frame(performance.now(), 0);
    });
    ro.observe(canvas);

    start();

    return () => {
      stop();
      io.disconnect();
      ro.disconnect();
      themeObserver.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      role="img"
      aria-label="Animated illustration of a black hole with a glowing accretion disk"
      className={className}
      style={{ WebkitMaskImage: EDGE_FADE, maskImage: EDGE_FADE }}
    />
  );
};

export default BlackHole;
