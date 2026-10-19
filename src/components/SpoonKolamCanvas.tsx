import React, { useEffect, useRef } from 'react';

export const SpoonKolamCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Parametric Lissajous & Rose Knot Curves for authentic Kolam loops
    let t = 0;
    const speed = 0.007;

    // Trail buffer of drawn points with opacity decay
    interface DrawnPoint {
      x: number;
      y: number;
      age: number; // 0 (fresh) to 1 (faded)
      dot?: boolean;
    }

    const trail: DrawnPoint[] = [];
    const maxTrailLength = 550;

    // Sparkle particles created from the spoon tip
    interface Sparkle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
      decay: number;
    }
    const sparkles: Sparkle[] = [];

    const getKolamPoint = (time: number) => {
      // Scale and center dynamic loops across the viewport
      const cx = width * 0.5;
      const cy = height * 0.48;

      // Authentic Sikku Kolam petal geometry using harmonic frequencies
      const r = Math.min(width, height) * 0.36 * (Math.sin(3 * time) * 0.5 + 0.55);
      const x = cx + r * Math.cos(2 * time) * Math.cos(time);
      const y = cy + r * Math.sin(3 * time) * Math.sin(time) * 0.85;

      return { x, y };
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Compute current spoon tip position
      const currentPt = getKolamPoint(t);
      const nextPt = getKolamPoint(t + 0.015);
      const angle = Math.atan2(nextPt.y - currentPt.y, nextPt.x - currentPt.x);

      // Add to path trail
      trail.push({ x: currentPt.x, y: currentPt.y, age: 0 });
      if (trail.length > maxTrailLength) {
        trail.shift();
      }

      // Periodically spawn golden rice powder sparkles
      if (Math.random() < 0.45) {
        sparkles.push({
          x: currentPt.x + (Math.random() - 0.5) * 6,
          y: currentPt.y + (Math.random() - 0.5) * 6,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8 + 0.3,
          size: Math.random() * 2.5 + 1.2,
          alpha: 0.85,
          decay: 0.018,
        });
      }

      // ── 1. DRAW KOLAM LINEWORK TRAIL ──
      if (trail.length > 2) {
        ctx.save();
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        // Glowing soft halo behind stroke
        ctx.shadowColor = 'rgba(248, 181, 4, 0.4)';
        ctx.shadowBlur = 8;

        for (let i = 1; i < trail.length; i++) {
          const p1 = trail[i - 1];
          const p2 = trail[i];
          const progress = i / trail.length; // 0 (oldest) to 1 (newest)

          // Smooth gradient stroke from translucent gold to radiant FEAzTO yellow
          const alpha = progress * 0.55;
          ctx.strokeStyle = `rgba(248, 181, 4, ${alpha})`;
          ctx.lineWidth = 1.8 + progress * 1.6;

          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
        ctx.restore();
      }

      // ── 2. DRAW GOLDEN RICE SPARKLES ──
      for (let i = sparkles.length - 1; i >= 0; i--) {
        const s = sparkles[i];
        s.x += s.vx;
        s.y += s.vy;
        s.alpha -= s.decay;

        if (s.alpha <= 0) {
          sparkles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.fillStyle = `rgba(248, 181, 4, ${s.alpha * 0.75})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // ── 3. DRAW TRADITIONAL BRASS / HERITAGE SPOON ──
      ctx.save();
      ctx.translate(currentPt.x, currentPt.y);
      // Tilt spoon naturally in drawing direction + slight ergonomic angle
      ctx.rotate(angle + Math.PI / 4);

      // Soft ambient drop-shadow beneath spoon
      ctx.shadowColor = 'rgba(135, 71, 0, 0.22)';
      ctx.shadowBlur = 10;
      ctx.shadowOffsetX = 4;
      ctx.shadowOffsetY = 6;

      // ── Spoon Bowl (Scoop) ──
      // Outer brass body gradient
      const bowlGrad = ctx.createRadialGradient(-2, -6, 2, 0, 0, 16);
      bowlGrad.addColorStop(0, '#FFE885');
      bowlGrad.addColorStop(0.45, '#F8B504');
      bowlGrad.addColorStop(0.85, '#D99100');
      bowlGrad.addColorStop(1, '#9C6200');

      ctx.fillStyle = bowlGrad;
      ctx.beginPath();
      // Elliptical spoon scoop
      ctx.ellipse(0, 0, 11, 16, 0, 0, Math.PI * 2);
      ctx.fill();

      // Inner bowl highlight (shiny brass bevel)
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.65)';
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.ellipse(-1.5, -2, 7.5, 11.5, 0, 0, Math.PI * 2);
      ctx.stroke();

      // Golden Rice powder / Turmeric inside spoon scoop tip
      ctx.fillStyle = '#FFFFFF';
      ctx.beginPath();
      ctx.ellipse(0, 3, 4.5, 6, 0, 0, Math.PI * 2);
      ctx.fill();

      // ── Spoon Long Slender Handle ──
      const handleGrad = ctx.createLinearGradient(0, -14, 0, -56);
      handleGrad.addColorStop(0, '#D99100');
      handleGrad.addColorStop(0.3, '#F8B504');
      handleGrad.addColorStop(0.7, '#FFE885');
      handleGrad.addColorStop(1, '#C78100');

      ctx.fillStyle = handleGrad;
      ctx.beginPath();
      // Tapered graceful South Indian culinary ladle handle
      ctx.moveTo(-2.5, -14);
      ctx.lineTo(-1.8, -50);
      // Decorative ornamental finial ring at handle tip
      ctx.quadraticCurveTo(-3, -56, 0, -58);
      ctx.quadraticCurveTo(3, -56, 1.8, -50);
      ctx.lineTo(2.5, -14);
      ctx.closePath();
      ctx.fill();

      // Decorative Kolam carving dot on handle finial
      ctx.fillStyle = '#FFEAA7';
      ctx.beginPath();
      ctx.arc(0, -53, 2, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();

      // Advance animation parameter
      t += speed;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="spoon-kolam-canvas-layer" aria-hidden="true">
      <canvas ref={canvasRef} className="spoon-kolam-canvas" />

      <style>{`
        .spoon-kolam-canvas-layer {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 1; /* Floating right above the body background, below interactive content */
          overflow: hidden;
        }

        .spoon-kolam-canvas {
          display: block;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  );
};
