import React, { useEffect, useRef } from 'react';

export const PeekingGrandmaFezuBanner: React.FC = () => {
  const stageRef = useRef<HTMLDivElement>(null);
  const grandmaGroupRef = useRef<HTMLDivElement>(null);
  const grandmaHeadRef = useRef<HTMLDivElement>(null);
  const grandmaHandsRef = useRef<HTMLDivElement>(null);
  const fezuGroupRef = useRef<HTMLDivElement>(null);
  const fezuHeadRef = useRef<HTMLDivElement>(null);
  const fezuPawRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Smooth continuous spring/lerp state for silky 60fps transitions
    let targetProgress = 0.5;
    let currentProgress = 0.5;
    let animFrameId: number;

    const updateAnimation = () => {
      // Smooth dampening towards target progress (lerp factor 0.1)
      currentProgress += (targetProgress - currentProgress) * 0.1;

      // Peak factor (0 when scrolled away, 1 when in middle of hero)
      // When at top of page or scrolling, progress smoothly modulates
      const peekAmount = Math.max(Math.sin(currentProgress * Math.PI), 0); // 0 -> 1 -> 0

      // Natural peeking ranges:
      // Grandma hides to the right behind phone (+110px), tilts in naturally (-8deg)
      // Fezu hides to the left behind phone (-110px), tilts in naturally (+10deg)
      const hideFactor = 1 - peekAmount;
      const grandmaTransX = hideFactor * 110;
      const grandmaTransY = hideFactor * 22;
      const grandmaTilt = hideFactor * 6;

      const fezuTransX = -hideFactor * 110;
      const fezuTransY = hideFactor * 22;
      const fezuTilt = -hideFactor * 7;

      // Smooth opacity ramp: only fades out at the extreme edges
      const charOpacity = Math.min(Math.max(peekAmount * 1.8, 0), 1);

      // Grandma Group (Body + Head)
      if (grandmaGroupRef.current) {
        grandmaGroupRef.current.style.transform = `translate3d(${grandmaTransX}px, ${grandmaTransY}px, 0) rotate(${grandmaTilt}deg)`;
        grandmaGroupRef.current.style.opacity = `${charOpacity}`;
      }

      // Dynamic head turning
      if (grandmaHeadRef.current) {
        const headTurn = Math.sin(currentProgress * Math.PI) * 12;
        grandmaHeadRef.current.style.transform = `rotateY(${headTurn}deg) rotateZ(${(currentProgress - 0.5) * 4}deg)`;
      }

      // Grandma Hands: tightly locked to the character group's coordinate
      if (grandmaHandsRef.current) {
        grandmaHandsRef.current.style.transform = `translate3d(${grandmaTransX}px, ${grandmaTransY}px, 0) rotate(${grandmaTilt}deg)`;
        grandmaHandsRef.current.style.opacity = `${charOpacity}`;
      }

      // Fezu Group (Body + Head)
      if (fezuGroupRef.current) {
        fezuGroupRef.current.style.transform = `translate3d(${fezuTransX}px, ${fezuTransY}px, 0) rotate(${fezuTilt}deg)`;
        fezuGroupRef.current.style.opacity = `${charOpacity}`;
      }

      // Fezu Head Tilting
      if (fezuHeadRef.current) {
        const fHeadTurn = -Math.sin(currentProgress * Math.PI) * 14;
        fezuHeadRef.current.style.transform = `rotateY(${fHeadTurn}deg) rotateZ(${-(currentProgress - 0.5) * 5}deg)`;
      }

      // Fezu Paw: tightly locked to Fezu's motion
      if (fezuPawRef.current) {
        fezuPawRef.current.style.transform = `translate3d(${fezuTransX}px, ${fezuTransY}px, 0) rotate(${fezuTilt}deg)`;
        fezuPawRef.current.style.opacity = `${charOpacity}`;
      }

      // Gentle phone floating depth
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

      // Target progress from 0 (approaching view) to 1 (passed view)
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
          will-change: transform, opacity;
          transform-style: preserve-3d;
          /* Removed transition delay to prevent rubber-band desync with scroll */
        }

        .feazto-layer img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
          background: transparent !important;
        }

        /* 1. GRANDMA GROUP (Behind Phone: z-index 11 & 12) */
        .layer-grandma-group {
          z-index: 11;
          transform-origin: 30% 60%;
        }

        .layer-grandma-body {
          z-index: 11;
        }

        .layer-grandma-head {
          z-index: 12;
          transform-origin: 23.63% 36.95%;
        }

        /* 2. FEZU MASCOT GROUP (Behind Phone: z-index 11 & 12) */
        .layer-fezu-group {
          z-index: 11;
          transform-origin: 70% 60%;
        }

        .layer-fezu-body {
          z-index: 11;
        }

        .layer-fezu-head {
          z-index: 12;
          transform-origin: 74.71% 60.85%;
        }

        /* 3. CENTRAL PHONE BANNER (Middle Layer: z-index 20) */
        .layer-phone {
          z-index: 20;
          transform-origin: 50% 50%;
          filter: drop-shadow(0 24px 44px rgba(15, 23, 42, 0.25));
        }

        /* 4. FOREGROUND HANDS & PAWS (Overlapping Phone Edges: z-index 30) */
        .layer-grandma-hands {
          z-index: 30;
          transform-origin: 30% 60%;
        }

        .layer-fezu-paw {
          z-index: 30;
          transform-origin: 70% 60%;
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
        {/* 1. GRANDMA GROUP (Behind Phone: z-index 11 & 12) */}
        <div id="grandma-group" ref={grandmaGroupRef} className="feazto-layer layer-grandma-group">
          <div id="grandma-body" className="feazto-layer layer-grandma-body">
            <img src="/brand/peeking/grandma-body-perfect.webp" alt="Grandma Body" />
          </div>
          <div id="grandma-head" ref={grandmaHeadRef} className="feazto-layer layer-grandma-head">
            <img src="/brand/peeking/grandma-head.webp" alt="Grandma Head Turning to Mobile Banner" />
          </div>
        </div>

        {/* 2. FEZU MASCOT GROUP (Behind Phone: z-index 11 & 12) */}
        <div id="fezu-group" ref={fezuGroupRef} className="feazto-layer layer-fezu-group">
          <div id="fezu-body" className="feazto-layer layer-fezu-body">
            <img src="/brand/peeking/fezu-body-perfect.webp" alt="Fezu Chef Body" />
          </div>
          <div id="fezu-head" ref={fezuHeadRef} className="feazto-layer layer-fezu-head">
            <img src="/brand/peeking/fezu-head.webp" alt="Fezu Chef Head Turning to Mobile Banner" />
          </div>
        </div>

        {/* 3. CENTRAL FEAZTO MOBILE BANNER (Middle Layer: z-index 20) */}
        <div id="phone-banner" ref={phoneRef} className="feazto-layer layer-phone">
          <img src="/brand/peeking/phone-banner.webp" alt="FEAzTO Mobile App - Taste Real India" />
        </div>

        {/* 4. FOREGROUND OVERLAY: GRANDMA'S HANDS (z-index 30) */}
        <div id="grandma-hands" ref={grandmaHandsRef} className="feazto-layer layer-grandma-hands">
          <img src="/brand/peeking/grandma-hands-perfect.webp" alt="Grandma Hands Gripping Phone" />
        </div>

        {/* 5. FOREGROUND OVERLAY: FEZU'S CHEF PAW (z-index 30) */}
        <div id="fezu-paw" ref={fezuPawRef} className="feazto-layer layer-fezu-paw">
          <img src="/brand/peeking/fezu-paw-perfect.webp" alt="Fezu Chef Paw Gripping Phone" />
        </div>
      </div>
    </div>
  );
};
