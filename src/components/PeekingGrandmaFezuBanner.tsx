import React, { useEffect, useRef } from 'react';

export const PeekingGrandmaFezuBanner: React.FC = () => {
  const stageRef = useRef<HTMLDivElement>(null);
  const grandmaRef = useRef<HTMLDivElement>(null);
  const fezuRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Current scroll offset tracker for direct, responsive 60fps lerp
    let targetHide = 0; // 0 = at top (fully peeked out), 1 = scrolled down (fully hidden behind phone)
    let currentHide = 0;
    let animFrameId: number;

    const updateAnimation = () => {
      // Smooth dampening towards target scroll (lerp factor 0.08)
      currentHide += (targetHide - currentHide) * 0.08;

      // HIDE IN BEHIND MOBILE BANNER AS USER SCROLLS DOWN:
      // - At top of page (scrollY = 0, currentHide = 0):
      //   Grandma and Fezu are fully peeked out in their vibrant hero positions!
      // - As user scrolls down past the hero (currentHide -> 1):
      //   Grandma glides smoothly +260px directly to the right, sliding completely behind the phone!
      //   Fezu glides smoothly -270px directly to the left, sliding completely behind the phone!
      //   Both characters dip slightly downward (+35px) and inward (rotate +/-7deg), tucking cleanly away.
      const grandmaTransX = currentHide * 260;
      const grandmaTransY = currentHide * 35;
      const grandmaTilt = currentHide * 7;
      const grandmaOpacity = Math.max(1 - currentHide * 0.9, 0.1);

      const fezuTransX = -currentHide * 270;
      const fezuTransY = currentHide * 35;
      const fezuTilt = -currentHide * 7;
      const fezuOpacity = Math.max(1 - currentHide * 0.9, 0.1);

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
      // Stays anchored in front, effortlessly masking characters as they hide in
      if (phoneRef.current) {
        const phoneTilt = currentHide * -4;
        const phoneY = currentHide * -10;
        phoneRef.current.style.transform = `perspective(1000px) rotateX(${phoneTilt}deg) translateY(${phoneY}px)`;
      }

      animFrameId = requestAnimationFrame(updateAnimation);
    };

    const handleScroll = () => {
      // Measure how far user has scrolled down from the top of the page
      const scrollY = window.scrollY || window.pageYOffset || 0;

      // When scrollY = 0 to 60px (at hero): targetHide = 0 (fully peeked out)
      // When scrollY goes from 60px to 420px: targetHide goes smoothly from 0 to 1 (hides behind phone)
      const hideDistance = 380;
      const scrollThreshold = 40;
      const effectiveScroll = Math.max(scrollY - scrollThreshold, 0);
      targetHide = Math.min(Math.max(effectiveScroll / hideDistance, 0), 1);
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
          will-change: transform, opacity;
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
