import React, { useEffect, useRef } from 'react';

export const PeekingGrandmaFezuBanner: React.FC = () => {
  const stageRef = useRef<HTMLDivElement>(null);
  const grandmaRef = useRef<HTMLDivElement>(null);
  const fezuRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Current scroll offset tracker for direct, responsive 60fps lerp
    let targetHide = 0;
    let currentHide = 0;
    let animFrameId: number;

    const updateAnimation = () => {
      // Smooth dampening towards target scroll (lerp factor 0.08)
      currentHide += (targetHide - currentHide) * 0.08;

      // START IN HIDE STATE -> HIDE OUT SLOWLY -> HIDE IN CYCLE:
      // - At the start (scrollY = 0, initial page load):
      //   Grandma and Fezu are tucked inside in HIDE STATE behind the mobile banner!
      // - As you start scrolling down:
      //   Grandma and Fezu emerge and HIDE OUT slowly to the sides, peeking into full view!
      // - As you scroll further down past the hero:
      //   Grandma and Fezu glide back behind the banner to HIDE IN completely!
      const grandmaTransX = currentHide * 255;
      const grandmaTransY = currentHide * 20;
      const grandmaTilt = currentHide * 3.5;
      const grandmaOpacity = Math.max(1 - currentHide * 1.3, 0);

      const fezuTransX = -currentHide * 280;
      const fezuTransY = currentHide * 20;
      const fezuTilt = -currentHide * 3.5;
      const fezuOpacity = Math.max(1 - currentHide * 1.3, 0);

      // Grandma Complete Character (z-index: 10 - BEHIND PHONE)
      if (grandmaRef.current) {
        grandmaRef.current.style.transform = `translate3d(${grandmaTransX}px, ${grandmaTransY}px, 0) rotate(${grandmaTilt}deg)`;
        grandmaRef.current.style.opacity = `${grandmaOpacity}`;
      }

      // Fezu Complete Mascot (z-index: 10 - BEHIND PHONE)
      if (fezuRef.current) {
        fezuRef.current.style.transform = `translate3d(${fezuTransX}px, ${fezuTransY}px, 0) rotate(${fezuTilt}deg)`;
        fezuRef.current.style.opacity = `${fezuOpacity}`;
      }

      // Central Mobile Phone (z-index: 20 - IN FRONT OF GRANDMA & FEZU)
      // Phone stays perfectly level, upright, and even
      if (phoneRef.current) {
        const phoneY = (1 - currentHide) * -6;
        phoneRef.current.style.transform = `translate3d(0, ${phoneY}px, 0)`;
      }

      animFrameId = requestAnimationFrame(updateAnimation);
    };

    const handleScroll = () => {
      // START IN HIDE STATE -> HIDE OUT SLOWLY -> HIDE IN CYCLE:
      // Cycle distance: 600px of scroll
      // - scrollY = 0 (at the start / fresh open):
      //   progress = 0 -> sin(0) = 0 -> targetHide = 1.0 (Completely in HIDE STATE behind phone)
      // - scrollY = 300 (scrolling down into hero view):
      //   progress = 0.5 -> sin(0.5 * PI) = 1.0 -> targetHide = 0.0 (Slowly HIDE OUT into full peeked view!)
      // - scrollY >= 600 (scrolling further down past hero):
      //   progress = 1.0 -> sin(1.0 * PI) = 0 -> targetHide = 1.0 (Glide back behind phone to HIDE IN!)
      const scrollY = window.scrollY || window.pageYOffset || 0;
      const cycleProgress = Math.min(Math.max(scrollY / 600, 0), 1);
      const peekAmount = Math.sin(cycleProgress * Math.PI);
      targetHide = 1 - peekAmount;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    currentHide = targetHide;
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
          margin-bottom: 0px;
          z-index: 3;
        }

        .feazto-stage {
          position: relative;
          width: 100%;
          max-width: 1040px;
          aspect-ratio: 1024 / 682;
          margin: 0 auto;
          background: transparent !important;
          user-select: none;
        }

        .feazto-layer {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          will-change: transform, opacity;
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
          filter: drop-shadow(0 20px 42px rgba(15, 23, 42, 0.24));
        }

        @media (max-width: 768px) {
          .peeking-banner-outer-wrapper {
            margin-bottom: -40px;
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
