import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Compass, ShieldCheck, Flame, Cpu, Users, ArrowUpRight } from 'lucide-react';

interface PillarItem {
  num: string;
  icon: React.ReactNode;
  title: string;
  tagline: string;
  desc: string;
}

export const BrandPillarsSection: React.FC = () => {
  const pillars: PillarItem[] = [
    {
      num: '01',
      icon: <Compass size={26} fill="currentColor" />,
      title: 'Geographical Provenance',
      tagline: 'Track Every Spice Terroir',
      desc: 'Every recipe is documented to its exact regional origin, be it Rayalaseema, Thanjavur, or Rampur, with origin tracking for pure authentic taste.'
    },
    {
      num: '02',
      icon: <Flame size={26} fill="currentColor" />,
      title: 'Heirloom Techniques',
      tagline: 'Zero Industrial Pre Mixes',
      desc: 'No commercial shortcuts. We mandate slow fire dum, stone ground black gram fermentation, and natural cold pressed oil tempering.'
    },
    {
      num: '03',
      icon: <ShieldCheck size={26} fill="currentColor" />,
      title: 'FSSAI Hygiene & Quality Audits',
      tagline: '100% Certified Clean Kitchens',
      desc: 'Home cooking supported by commercial food safety rigor. Tamper evident thermal packaging and regular certified kitchen cleanliness audits.'
    },
    {
      num: '04',
      icon: <Cpu size={26} fill="currentColor" />,
      title: 'Cloud Kitchen Precision',
      tagline: 'Sub Minute Batch Dispatch',
      desc: 'Real time kitchen management, calibrated prep times, and integrated dispatch so food reaches you at peak culinary temperature.'
    },
    {
      num: '05',
      icon: <Users size={26} fill="currentColor" />,
      title: 'FoodPreneur Economics',
      tagline: 'Dignified Culinary Incomes',
      desc: 'Fair revenue sharing empowering master home cooks, elderly recipe custodians, and independent regional culinary creators from batch one.'
    },
    {
      num: '06',
      icon: <Sparkles size={26} fill="currentColor" />,
      title: 'Zero Artificial Additives',
      tagline: 'Only Pure Natural Ingredients',
      desc: 'Strict policy prohibiting synthetic chemical dyes, artificial taste enhancers, or industrial preservation agents.'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);

  // Use refs for tracking drag state across window
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const currentXRef = useRef(0);
  const activeIndexRef = useRef(0);
  activeIndexRef.current = activeIndex;

  const count = pillars.length;
  const wheelTimeoutRef = useRef<number | null>(null);

  const onWheel = (e: React.WheelEvent) => {
    // If predominantly horizontal or shift key, or deltaY significant
    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    if (Math.abs(delta) < 20) return;

    if (wheelTimeoutRef.current) return;
    if (delta > 0) {
      setActiveIndex((prev) => (prev + 1) % count);
    } else {
      setActiveIndex((prev) => (prev - 1 + count) % count);
    }
    wheelTimeoutRef.current = window.setTimeout(() => {
      wheelTimeoutRef.current = null;
    }, 400);
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % count);
  };

  // Subtle auto drift when user is idle
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      goNext();
    }, 4800);
    return () => clearInterval(timer);
  }, [isPaused, count]);

  // Pointer drag logic that works globally once pointer is down
  const onPointerDown = (e: React.PointerEvent) => {
    // Only respond to primary mouse button or touch
    if (e.button !== 0 && e.pointerType === 'mouse') return;
    
    isDraggingRef.current = true;
    startXRef.current = e.clientX;
    currentXRef.current = e.clientX;
    setDragOffset(0);
    setIsPaused(true);

    const onPointerMove = (moveEvent: PointerEvent) => {
      if (!isDraggingRef.current) return;
      currentXRef.current = moveEvent.clientX;
      const diff = moveEvent.clientX - startXRef.current;
      setDragOffset(diff);
    };

    const onPointerUp = (upEvent: PointerEvent) => {
      if (!isDraggingRef.current) return;
      isDraggingRef.current = false;
      const diff = upEvent.clientX - startXRef.current;
      
      // If dragged from right to left (diff is negative and > 25px) -> move to NEXT card
      if (diff < -25) {
        setActiveIndex((prev) => (prev + 1) % count);
      } else if (diff > 25) {
        // Dragged from left to right (diff positive > 25px) -> move to PREVIOUS card
        setActiveIndex((prev) => (prev - 1 + count) % count);
      }
      
      setDragOffset(0);
      setIsPaused(false);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('pointercancel', onPointerUp);
    };

    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    window.addEventListener('pointercancel', onPointerUp);
  };

  return (
    <section className="pillars-section">
      <div className="container">
        {/* Header */}
        <div className="pillars-header">
          <div className="badge-tag">
            <Sparkles size={13} />
            <span>Why Choose FEAzTO</span>
          </div>
          <h2 className="pillars-title">Eat Authentic, Support Home Cooks, Waste Nothing</h2>
          <p className="pillars-subtitle">
            FEAzTO bridges the emotional warmth of home kitchens with cloud kitchen operational precision. Here is how our ecosystem protects your food.
          </p>
        </div>

        {/* 3D Concave Carousel Viewport - Swipable / Draggable */}
        <div 
          className="concave-carousel-viewport"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onPointerDown={onPointerDown}
          onWheel={onWheel}
        >
          {/* Subtle Ambient Radial Lighting */}
          <div className="concave-ambient-glow" />

          <div className="concave-stage">
            {pillars.map((item, index) => {
              // Calculate relative offset around the ring (-2, -1, 0, 1, 2, ...)
              let offset = index - activeIndex;
              if (offset > count / 2) offset -= count;
              if (offset < -count / 2) offset += count;

              const isCenter = offset === 0;
              const isDirectNeighbor = Math.abs(offset) === 1;
              const isVisible = Math.abs(offset) <= 2;

              // Responsive drag dampening
              const dragFactor = dragOffset * 0.45;
              const rotateY = offset * 26 - dragOffset * 0.05; 
              const translateX = offset * 330 + dragFactor; 
              const translateZ = Math.abs(offset) * -95; 
              const scale = isCenter ? 1.05 : isDirectNeighbor ? 0.94 : 0.85;
              const opacity = isCenter ? 1 : isDirectNeighbor ? 0.8 : isVisible ? 0.45 : 0;
              const zIndex = 20 - Math.abs(offset) * 5;

              return (
                <div
                  key={item.num}
                  className={`concave-card-wrapper ${isCenter ? 'card-active' : ''}`}
                  style={{
                    transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                    opacity,
                    zIndex,
                    visibility: isVisible ? 'visible' : 'hidden',
                    transition: dragOffset !== 0 ? 'none' : 'transform 0.65s cubic-bezier(0.2, 0.9, 0.3, 1), opacity 0.5s ease'
                  }}
                  onClick={() => {
                    if (Math.abs(dragOffset) < 5) {
                      setActiveIndex(index);
                    }
                  }}
                >
                  <div className="plenti-feature-card">
                    {/* Kolam geometric background watermark */}
                    <div className="card-kolam-watermark" aria-hidden="true">
                      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="50" cy="50" r="44" stroke="#FAC921" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.3" />
                        <path d="M50,8 C60,28 72,28 92,50 C72,72 60,72 50,92 C40,72 28,72 8,50 C28,28 40,28 50,8 Z" 
                              stroke="#FAC921" strokeWidth="1" fill="none" opacity="0.22" />
                        <circle cx="50" cy="50" r="2.5" fill="#FAC921" opacity="0.4" />
                      </svg>
                    </div>

                    {/* Card Top Row: Number + Icon */}
                    <div className="card-top-row">
                      <div className="plenti-icon-circle">
                        {item.icon}
                      </div>
                      <span className="card-serial-num">{item.num}</span>
                    </div>

                    <div className="card-content-wrap">
                      <span className="card-tagline-chip">{item.tagline}</span>
                      <h3 className="card-main-title">{item.title}</h3>
                      <p className="card-main-desc">{item.desc}</p>
                    </div>

                    <div className="card-footer-accent">
                      <div className="accent-kolam-dots">
                        <span className="dot" />
                        <span className="line" />
                        <span className="dot" />
                      </div>
                      <ArrowUpRight size={16} className="card-corner-arrow" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Swipe indicator label */}
          <div className="swipe-instruction-label" aria-hidden="true">
            <span>‹ Swipe left or right to explore ›</span>
          </div>

          {/* Subtle Dots Indicator */}
          <div className="concave-dots-row">
            {pillars.map((p, idx) => (
              <button
                key={p.num}
                type="button"
                className={`concave-dot ${idx === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .pillars-section {
          padding-top: 100px;
          padding-bottom: 110px;
          background: linear-gradient(180deg, #FFF3C4 0%, #FEEAA2 50%, #FDE28A 100%);
          position: relative;
          overflow: hidden;
        }

        .pillars-header {
          text-align: center;
          max-width: 740px;
          margin: 0 auto 46px auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .pillars-title {
          font-size: clamp(2rem, 3.4vw, 2.9rem);
          font-weight: 800;
          color: var(--color-ink-black);
          margin-top: 18px;
          margin-bottom: 14px;
          line-height: 1.25;
        }

        .pillars-subtitle {
          font-size: 1.05rem;
          color: var(--color-text-secondary);
          line-height: 1.6;
        }

        /* Concave Carousel Viewport with 3D Perspective & Drag Grab Cursor */
        .concave-carousel-viewport {
          position: relative;
          width: 100%;
          min-height: 480px;
          perspective: 1200px;
          perspective-origin: 50% 48%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 10px 0 20px 0;
          cursor: grab;
          user-select: none;
          touch-action: pan-y;
        }

        .concave-carousel-viewport:active {
          cursor: grabbing;
        }

        .concave-ambient-glow {
          position: absolute;
          top: 30%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 650px;
          height: 340px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(250, 201, 33, 0.22) 0%, transparent 70%);
          pointer-events: none;
        }

        .concave-stage {
          position: relative;
          width: 100%;
          max-width: 1080px;
          height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
          transform-style: preserve-3d;
        }

        .concave-card-wrapper {
          position: absolute;
          width: 340px;
          transform-origin: center center;
          will-change: transform, opacity;
        }

        .plenti-feature-card {
          position: relative;
          background: linear-gradient(135deg, #FFDE59 0%, #FAC921 50%, #E5A800 100%);
          color: #181B20;
          border-radius: 26px;
          padding: 34px 28px;
          border: 1.5px solid rgba(255, 255, 255, 0.4);
          box-shadow: 0 16px 40px rgba(250, 201, 33, 0.28), 0 4px 12px rgba(0, 0, 0, 0.06);
          transition: border-color 0.25s ease, box-shadow 0.25s ease;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          min-height: 350px;
          box-sizing: border-box;
          pointer-events: auto;
        }

        .plenti-feature-card::before {
          content: '';
          position: absolute;
          top: -25%;
          right: -20%;
          width: 220px;
          height: 220px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%);
          pointer-events: none;
        }

        .card-active .plenti-feature-card {
          border-color: rgba(255, 255, 255, 0.85);
          box-shadow: 0 24px 60px rgba(250, 201, 33, 0.45), 0 6px 20px rgba(0, 0, 0, 0.12);
        }

        .card-kolam-watermark {
          position: absolute;
          top: -12px;
          right: -12px;
          width: 120px;
          height: 120px;
          pointer-events: none;
        }
        .card-kolam-watermark svg {
          width: 100%;
          height: 100%;
        }

        .card-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
          position: relative;
          z-index: 1;
        }

        .plenti-icon-circle {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 52px;
          height: 52px;
          border-radius: 16px;
          background: #FFFFFF;
          color: #181B20;
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.14);
        }

        .card-serial-num {
          font-family: var(--font-heading);
          font-size: 1.45rem;
          font-weight: 900;
          color: rgba(24, 27, 32, 0.35);
          letter-spacing: -0.04em;
        }

        .card-content-wrap {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          position: relative;
          z-index: 1;
        }

        .card-tagline-chip {
          display: inline-block;
          font-size: 0.74rem;
          font-weight: 800;
          color: rgba(24, 27, 32, 0.75);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 8px;
        }

        .card-main-title {
          font-size: 1.3rem;
          font-weight: 900;
          color: #181B20;
          margin-bottom: 10px;
          line-height: 1.15;
          letter-spacing: -0.03em;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .card-main-desc {
          font-size: 0.94rem;
          color: rgba(24, 27, 32, 0.85);
          line-height: 1.6;
          margin-bottom: 20px;
          font-weight: 500;
        }

        .card-footer-accent {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 14px;
          border-top: 1px dashed rgba(24, 27, 32, 0.25);
          margin-top: auto;
          position: relative;
          z-index: 1;
        }

        .accent-kolam-dots {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .accent-kolam-dots .dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #181B20;
        }
        .accent-kolam-dots .line {
          width: 22px;
          height: 1.5px;
          background: rgba(24, 27, 32, 0.55);
        }

        .card-corner-arrow {
          color: #181B20;
          opacity: 0.75;
          transition: transform 0.2s ease, opacity 0.2s ease;
        }

        .card-active .card-corner-arrow {
          opacity: 1;
          transform: translate(2px, -2px);
        }

        .swipe-instruction-label {
          font-size: 0.82rem;
          font-weight: 600;
          color: #8C6500;
          opacity: 0.8;
          letter-spacing: 0.05em;
          margin-top: 18px;
        }

        /* Dots row */
        .concave-dots-row {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 12px;
          position: relative;
          z-index: 25;
        }

        .concave-dot {
          width: 8px;
          height: 8px;
          border-radius: 9999px;
          border: none;
          background: rgba(140, 101, 0, 0.22);
          cursor: pointer;
          transition: all 0.25s ease;
          padding: 0;
        }

        .concave-dot.active {
          width: 28px;
          background: #FAC921;
          box-shadow: 0 2px 8px rgba(250, 201, 33, 0.35);
        }

        @media (max-width: 992px) {
          .concave-card-wrapper {
            width: 300px;
          }
          .concave-stage {
            height: 420px;
          }
        }

        @media (max-width: 640px) {
          .concave-carousel-viewport {
            perspective: 800px;
          }
          .concave-card-wrapper {
            width: 275px;
          }
          .plenti-feature-card {
            padding: 24px 20px;
            min-height: 330px;
          }
        }
      `}</style>
    </section>
  );
};
