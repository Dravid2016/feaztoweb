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

    // Parametric timing for the continuous Kolam drawing stroke
    let t = 0;
    const speed = 0.0055; // Graceful, deliberate traditional drawing pace

    interface DrawnPoint {
      x: number;
      y: number;
      age: number;
    }

    const trail: DrawnPoint[] = [];
    const maxTrailLength = 950; // Long expansive memory to keep full Kolam mandalas visible

    // Sparkle particles created from the spoon tip (traditional rice powder dust)
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

    // ── AUTHENTIC MAHA-KOLAM / SIKKU MANDALA GENERATOR ──
    // Generates genuine 8-petal interconnected loops, diamond brahma knots, and outer lotus curls
    const getBigKolamPoint = (time: number) => {
      const cx = width * 0.5;
      const cy = height * 0.5;
      const baseR = Math.min(width, height) * 0.38;

      // Authentic Sikku mathematical harmonic:
      // Combining 4-fold cardinal diamond symmetry with 8-fold lotus loops and radial petal swells
      const petalSwelling = Math.cos(4 * time) * 0.32 + Math.cos(8 * time) * 0.16 + 0.62;
      const radius = baseR * petalSwelling;

      // Closed continuous looped knot (Sikku / Brahma Knot)
      const x = cx + radius * (Math.cos(time) + 0.28 * Math.cos(5 * time) - 0.12 * Math.cos(9 * time));
      const y = cy + radius * (Math.sin(time) - 0.28 * Math.sin(5 * time) - 0.12 * Math.sin(9 * time));

      return { x, y };
    };



    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // ── 0. TRADITIONAL PULLI DOTS REMOVED ──

      // Compute current spoon tip position on the big Kolam path
      const currentPt = getBigKolamPoint(t);
      const nextPt = getBigKolamPoint(t + 0.012);
      const angle = Math.atan2(nextPt.y - currentPt.y, nextPt.x - currentPt.x);

      // Record point in continuous Kolam trail
      trail.push({ x: currentPt.x, y: currentPt.y, age: 0 });
      if (trail.length > maxTrailLength) {
        trail.shift();
      }

      // Spawn traditional golden rice powder sparkles
      if (Math.random() < 0.55) {
        sparkles.push({
          x: currentPt.x + (Math.random() - 0.5) * 8,
          y: currentPt.y + (Math.random() - 0.5) * 8,
          vx: (Math.random() - 0.5) * 0.9,
          vy: (Math.random() - 0.5) * 0.9 + 0.25,
          size: Math.random() * 2.8 + 1.2,
          alpha: 0.9,
          decay: 0.016,
        });
      }

      // ── 1. DRAW INTRICATE KOLAM MANDALA LINEWORK ──
      if (trail.length > 2) {
        ctx.save();
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        // Outer warm ambient glow
        ctx.shadowColor = 'rgba(248, 181, 4, 0.45)';
        ctx.shadowBlur = 10;

        for (let i = 1; i < trail.length; i++) {
          const p1 = trail[i - 1];
          const p2 = trail[i];
          const progress = i / trail.length; // 0 to 1

          // Dual-layer stroke: Thicker, bolder deep amber/terracotta tone
          const alpha = 0.45 + progress * 0.55;
          ctx.strokeStyle = `rgba(150, 75, 5, ${alpha})`;
          ctx.lineWidth = 4.0 + progress * 2.5;

          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }

        // Inner crisp white rice-powder core line
        for (let i = Math.floor(trail.length * 0.2); i < trail.length; i++) {
          const p1 = trail[i - 1];
          const p2 = trail[i];
          const progress = i / trail.length;

          ctx.strokeStyle = `rgba(255, 255, 255, ${progress * 0.45})`;
          ctx.lineWidth = 1.0;
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
        ctx.fillStyle = `rgba(248, 181, 4, ${s.alpha * 0.8})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // ── 3. DRAW AUTHENTIC SOUTH INDIAN BRASS HERITAGE SPOON ──
      ctx.save();
      ctx.translate(currentPt.x, currentPt.y);
      // Ergonomic tilt following the drawing curve
      ctx.rotate(angle + Math.PI / 4);

      // Deep drop-shadow beneath spoon
      ctx.shadowColor = 'rgba(135, 71, 0, 0.26)';
      ctx.shadowBlur = 12;
      ctx.shadowOffsetX = 5;
      ctx.shadowOffsetY = 7;

      // ── Spoon Bowl (Scoop) ──
      const bowlGrad = ctx.createRadialGradient(-2, -6, 2, 0, 0, 18);
      bowlGrad.addColorStop(0, '#FFF19E');
      bowlGrad.addColorStop(0.45, '#F8B504');
      bowlGrad.addColorStop(0.85, '#D99100');
      bowlGrad.addColorStop(1, '#9C6200');

      ctx.fillStyle = bowlGrad;
      ctx.beginPath();
      ctx.ellipse(0, 0, 12, 17, 0, 0, Math.PI * 2);
      ctx.fill();

      // Inner bowl highlight (polished brass rim)
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
      ctx.lineWidth = 1.4;
      ctx.beginPath();
      ctx.ellipse(-1.5, -2, 8, 12, 0, 0, Math.PI * 2);
      ctx.stroke();

      // Golden Rice Flour inside spoon scoop tip
      ctx.fillStyle = '#FFFFFF';
      ctx.beginPath();
      ctx.ellipse(0, 3, 5, 7, 0, 0, Math.PI * 2);
      ctx.fill();

      // ── Spoon Long Slender Handle ──
      const handleGrad = ctx.createLinearGradient(0, -15, 0, -62);
      handleGrad.addColorStop(0, '#D99100');
      handleGrad.addColorStop(0.3, '#F8B504');
      handleGrad.addColorStop(0.7, '#FFF19E');
      handleGrad.addColorStop(1, '#C78100');

      ctx.fillStyle = handleGrad;
      ctx.beginPath();
      ctx.moveTo(-2.8, -15);
      ctx.lineTo(-2.0, -54);
      // Traditional ornamental curved finial ring at handle tip
      ctx.quadraticCurveTo(-3.5, -60, 0, -62);
      ctx.quadraticCurveTo(3.5, -60, 2.0, -54);
      ctx.lineTo(2.8, -15);
      ctx.closePath();
      ctx.fill();

      // Carved cultural lotus dot on handle
      ctx.fillStyle = '#FFF8D6';
      ctx.beginPath();
      ctx.arc(0, -56, 2.2, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();

      // Advance drawing parameter
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
          z-index: 1; /* Floating directly over the background, below text and buttons */
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
