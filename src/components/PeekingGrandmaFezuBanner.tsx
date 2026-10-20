import React, { useEffect, useRef } from 'react';

export const PeekingGrandmaFezuBanner: React.FC = () => {
  const stageRef = useRef<HTMLDivElement>(null);
  const grandmaRef = useRef<HTMLDivElement>(null);
  const fezuRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let targetProgress = 0.5;
    let currentProgress = 0.5;
    let animFrameId: number;

    const updateAnimation = () => {
      // Silky 60fps damped spring/lerp (factor 0.08)
      currentProgress += (targetProgress - currentProgress) * 0.08;

      // Peak factor (0 when scrolled away, 1 when banner is in middle of hero view)
      const peekAmount = Math.max(Math.sin(currentProgress * Math.PI), 0); // 0 -> 1 -> 0
      const hideFactor = 1 - peekAmount; // 1 = fully tucked in behind phone, 0 = fully peeked out

      // HIDE IN & HIDE OUT PROCESS BEHIND THE MOBILE BANNER:
      // When hideFactor = 1 (banner out of focus):
      // - Grandma tucks COMPLETELY behind the phone (moves +210px rightwards into phone center, +30px down, tilts 10deg)
      // - Fezu tucks COMPLETELY behind the phone (moves -210px leftwards into phone center, +30px down, tilts -10deg)
      // When hideFactor = 0 (banner in focus):
      // - Grandma emerges proudly to (0px, 0px, 0deg) with hands gripping the phone left edge
      // - Fezu emerges joyfully to (0px, 0px, 0deg) with chef paw gripping the phone right edge
      const grandmaTransX = hideFactor * 210;
      const grandmaTransY = hideFactor * 30;
      const grandmaTilt = hideFactor * 9;

      const fezuTransX = -hideFactor * 210;
      const fezuTransY = hideFactor * 30;
      const fezuTilt = -hideFactor * 9;

      // Grandma Complete Character (Body, Arms, Hands, Head - z-index: 10 BEHIND PHONE)
      if (grandmaRef.current) {
        grandmaRef.current.style.transform = `translate3d(${grandmaTransX}px, ${grandmaTransY}px, 0) rotate(${grandmaTilt}deg)`;
      }

      // Fezu Complete Mascot (Body, Head, Chef Hat, Paw - z-index: 10 BEHIND PHONE)
      if (fezuRef.current) {
        fezuRef.current.style.transform = `translate3d(${fezuTransX}px, ${fezuTransY}px, 0) rotate(${fezuTilt}deg)`;
      }

      // Central Mobile Phone (z-index: 20 IN FRONT OF GRANDMA & FEZU):
      // Stays elevated with gentle perspective tilt, seamlessly masking the characters as they hide in
      if (phoneRef.current) {
        const scrollFactor = (currentProgress - 0.5) * 2;
        const phoneRotX = scrollFactor * -4;
        const phoneTransY = scrollFactor * -6;
        phoneRef.current.style.transform = `perspective(1000px) rotateX(${phoneRotX}deg) translateY(${phoneTransY}px)`;
      }

      animFrameId = requestAnimationFrame(updateAnimation);
    };

    const handleScroll = () => {
      if (!stageRef.current) return;
      const rect = stageRef.current.getBoundingClientRect();
      const winHeight = window.innerHeight;

      // Viewport coverage progress (0 = entering bottom, 0.5 = centered, 1 = leaving top)
      targetProgress = Math.min(Math.max((winHeight - rect.top) / (winHeight + rect.height), 0), 1);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    currentProgress = targetProgress;
    animFrameId = requestAnimationFrame(updateAnimation);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animFrameId);
    };
  }, []);

  return (
    <div className="peeking-banner-outer-wrapper">
      <style>{`
        .peeking-banner-outer-wrapper {
          position: relative;
          width: 100%;
          display: flex;
          justify-content: center;
          margin-top: 10px;
          margin-bottom: -180px; /* Overlap cleanly into the golden organic wave separator */
          z-index: 3;
        }

        .feazto-stage {
          position: relative;
          width: 100%;
          max-width: 960px;
          aspect-ratio: 1024 / 682;
          margin: 0 auto;
          background: transparent !important;
          user-select: none;
          perspective: 1200px;
          transform-style: preserve-3d;
        }

        .feazto-layer {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          will-change: transform;
          transform-style: preserve-3d;
        }

        .feazto-layer img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
          background: transparent !important;
        }

        /* 1. GRANDMA CHARACTER (Behind Phone: z-index 10) */
        .layer-grandma-character {
          z-index: 10;
          transform-origin: 32% 62%;
        }

        /* 2. FEZU MASCOT CHARACTER (Behind Phone: z-index 10) */
        .layer-fezu-character {
          z-index: 10;
          transform-origin: 68% 62%;
        }

        /* 3. CENTRAL MOBILE PHONE BANNER (In Front of Characters: z-index 20) */
        .layer-phone {
          z-index: 20;
          transform-origin: 50% 50%;
          filter: drop-shadow(0 24px 44px rgba(15, 23, 42, 0.28));
        }

        @media (max-width: 768px) {
          .peeking-banner-outer-wrapper {
            margin-bottom: -100px;
          }
          .feazto-stage {
            max-width: 100%;
          }
        }
      `}</style>

      <div id="feazto-animated-banner" ref={stageRef} className="feazto-stage">
        {/* 1. GRANDMA (Entire character including body, arms, hands, head: z-index 10 BEHIND PHONE) */}
        <div id="grandma-character" ref={grandmaRef} className="feazto-layer layer-grandma-character">
          <img src="/brand/peeking/grandma-character.webp" alt="Grandma peeking from behind mobile phone" />
        </div>

        {/* 2. FEZU MASCOT (Entire character including body, arm, paw, head: z-index 10 BEHIND PHONE) */}
        <div id="fezu-character" ref={fezuRef} className="feazto-layer layer-fezu-character">
          <img src="/brand/peeking/fezu-character.webp" alt="Fezu Chef mascot peeking from behind mobile phone" />
        </div>

        {/* 3. CENTRAL PHONE BANNER (z-index 20 IN FRONT OF GRANDMA & FEZU - Completely covers them when they hide in) */}
        <div id="phone-banner" ref={phoneRef} className="feazto-layer layer-phone">
          <img src="/brand/peeking/phone-banner.webp" alt="FEAzTO Mobile App - Taste Real India" />
        </div>
      </div>
    </div>
  );
};
