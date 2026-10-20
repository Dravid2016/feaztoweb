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

      // HIDE IN BEHIND MOBILE BANNER AS USER SCROLLS DOWN:
      // - When banner is fully on screen (hero in view):
      //   Grandma and Fezu are fully peeked out in their vibrant hero positions (0px translation)!
      // - As user scrolls past the hero:
      //   Grandma glides smoothly +260px directly to the right, sliding completely behind the phone!
      //   Fezu glides smoothly -270px directly to the left, sliding completely behind the phone!
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
      if (phoneRef.current) {
        const phoneTilt = currentHide * -4;
        const phoneY = currentHide * -10;
        phoneRef.current.style.transform = `perspective(1000px) rotateX(${phoneTilt}deg) translateY(${phoneY}px)`;
      }

      animFrameId = requestAnimationFrame(updateAnimation);
    };

    const handleScroll = () => {
      if (!stageRef.current) return;
      const rect = stageRef.current.getBoundingClientRect();
      const winHeight = window.innerHeight;

      // Calculate how far stage has scrolled upward relative to the viewport:
      // When rect.top is comfortable on screen (e.g. > 150px): targetHide is 0 (fully visible!)
      // As user scrolls and stage approaches top of screen (rect.top drops from 200px to -300px):
      // targetHide goes smoothly from 0 to 1 (Grandma and Fezu hide behind the phone)
      const visibleThreshold = winHeight * 0.25;
      const scrollProgress = (visibleThreshold - rect.top) / 450;
      targetHide = Math.min(Math.max(scrollProgress, 0), 1);
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
