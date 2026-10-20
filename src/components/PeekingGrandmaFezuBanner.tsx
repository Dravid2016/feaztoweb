import React, { useEffect, useRef } from 'react';

export const PeekingGrandmaFezuBanner: React.FC = () => {
  const stageRef = useRef<HTMLDivElement>(null);
  const grandmaGroupRef = useRef<HTMLDivElement>(null);
  const grandmaHeadRef = useRef<HTMLDivElement>(null);
  const grandmaFingersRef = useRef<HTMLDivElement>(null);
  const fezuGroupRef = useRef<HTMLDivElement>(null);
  const fezuHeadRef = useRef<HTMLDivElement>(null);
  const fezuPawRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let targetProgress = 0.5;
    let currentProgress = 0.5;
    let animFrameId: number;

    const updateAnimation = () => {
      // Smooth dampening towards target progress (lerp factor 0.08 for buttery fluid motion)
      currentProgress += (targetProgress - currentProgress) * 0.08;

      // Peak factor (0 when scrolled away, 1 when in focus of hero)
      const peekAmount = Math.max(Math.sin(currentProgress * Math.PI), 0); // 0 -> 1 -> 0
      const hideFactor = 1 - peekAmount;

      // HIDE IN & HIDE OUT BEHIND THE MOBILE PHONE:
      // Grandma's full body (including arms & hands) tucks completely BEHIND the mobile phone
      // by moving inwards (+140px to the right) and slightly down (+28px) with a natural inward lean (+8deg).
      // When peeking out, she emerges from behind the phone to her full proud stance (0px).
      const grandmaTransX = hideFactor * 140;
      const grandmaTransY = hideFactor * 28;
      const grandmaTilt = hideFactor * 8;

      // Fezu's full body (including arm & paw) tucks completely BEHIND the mobile phone
      // by moving inwards (-140px to the left) and slightly down (+28px) with a natural inward lean (-9deg).
      // When peeking out, he emerges from behind the phone to his full joyful pose (0px).
      const fezuTransX = -hideFactor * 140;
      const fezuTransY = hideFactor * 28;
      const fezuTilt = -hideFactor * 9;

      // Grandma Group (Body + Arms + Hands + Head - ALL BEHIND PHONE)
      if (grandmaGroupRef.current) {
        grandmaGroupRef.current.style.transform = `translate3d(${grandmaTransX}px, ${grandmaTransY}px, 0) rotate(${grandmaTilt}deg)`;
      }

      // Dynamic Grandma Head turning towards viewer & mobile app
      if (grandmaHeadRef.current) {
        const headTurn = Math.sin(currentProgress * Math.PI) * 14;
        grandmaHeadRef.current.style.transform = `rotateY(${headTurn}deg) rotateZ(${(currentProgress - 0.5) * 5}deg)`;
      }

      // Foreground Fingertips:
      // Tightly follows Grandma's motion so they wrap over the phone bezel ONLY when she's emerged,
      // and fade/retract seamlessly behind the bezel when hiding
      if (grandmaFingersRef.current) {
        grandmaFingersRef.current.style.transform = `translate3d(${grandmaTransX}px, ${grandmaTransY}px, 0) rotate(${grandmaTilt}deg)`;
        // Fade out as she tucks in behind the phone so no stray fingers float in front
        grandmaFingersRef.current.style.opacity = `${Math.min(Math.max((peekAmount - 0.25) * 1.8, 0), 1)}`;
      }

      // Fezu Group (Body + Arm + Paw + Head - ALL BEHIND PHONE)
      if (fezuGroupRef.current) {
        fezuGroupRef.current.style.transform = `translate3d(${fezuTransX}px, ${fezuTransY}px, 0) rotate(${fezuTilt}deg)`;
      }

      // Dynamic Fezu Head Tilting
      if (fezuHeadRef.current) {
        const fHeadTurn = -Math.sin(currentProgress * Math.PI) * 16;
        fezuHeadRef.current.style.transform = `rotateY(${fHeadTurn}deg) rotateZ(${-(currentProgress - 0.5) * 6}deg)`;
      }

      // Foreground Paw Tips:
      // Tightly follows Fezu's motion, wrapping over the phone bezel only when peeked out
      if (fezuPawRef.current) {
        fezuPawRef.current.style.transform = `translate3d(${fezuTransX}px, ${fezuTransY}px, 0) rotate(${fezuTilt}deg)`;
        fezuPawRef.current.style.opacity = `${Math.min(Math.max((peekAmount - 0.25) * 1.8, 0), 1)}`;
      }

      // Central Phone: steady 3D floating perspective
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
        }

        .feazto-layer img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
          background: transparent !important;
        }

        /* 1. GRANDMA GROUP (Entirely Behind Phone: z-index 11 & 12) */
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

        /* 2. FEZU MASCOT GROUP (Entirely Behind Phone: z-index 11 & 12) */
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

        /* 3. CENTRAL PHONE BANNER (Foreground over Grandma & Fezu: z-index 20) */
        .layer-phone {
          z-index: 20;
          transform-origin: 50% 50%;
          filter: drop-shadow(0 24px 44px rgba(15, 23, 42, 0.25));
        }

        /* 4. FOREGROUND FINGER OVERLAYS (Only front gripping knuckles: z-index 30) */
        .layer-grandma-fingers {
          z-index: 30;
          transform-origin: 30% 60%;
        }

        .layer-fezu-paw-overlay {
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
        {/* 1. GRANDMA GROUP (Entire Character with body & hands: Behind Phone z-index 11 & 12) */}
        <div id="grandma-group" ref={grandmaGroupRef} className="feazto-layer layer-grandma-group">
          <div id="grandma-body" className="feazto-layer layer-grandma-body">
            <img src="/brand/peeking/grandma-full-body.webp" alt="Grandma Body" />
          </div>
          <div id="grandma-head" ref={grandmaHeadRef} className="feazto-layer layer-grandma-head">
            <img src="/brand/peeking/grandma-head.webp" alt="Grandma Head Turning to Mobile Banner" />
          </div>
        </div>

        {/* 2. FEZU MASCOT GROUP (Entire Character with body & paw: Behind Phone z-index 11 & 12) */}
        <div id="fezu-group" ref={fezuGroupRef} className="feazto-layer layer-fezu-group">
          <div id="fezu-body" className="feazto-layer layer-fezu-body">
            <img src="/brand/peeking/fezu-full-body.webp" alt="Fezu Chef Body" />
          </div>
          <div id="fezu-head" ref={fezuHeadRef} className="feazto-layer layer-fezu-head">
            <img src="/brand/peeking/fezu-head.webp" alt="Fezu Chef Head Turning to Mobile Banner" />
          </div>
        </div>

        {/* 3. CENTRAL FEAZTO MOBILE BANNER (Middle Layer: z-index 20 - COVERS characters as they hide in) */}
        <div id="phone-banner" ref={phoneRef} className="feazto-layer layer-phone">
          <img src="/brand/peeking/phone-banner.webp" alt="FEAzTO Mobile App - Taste Real India" />
        </div>

        {/* 4. FOREGROUND FINGER OVERLAYS (z-index 30 - Only the knuckles that grip the front bezel when peeked out) */}
        <div id="grandma-fingers" ref={grandmaFingersRef} className="feazto-layer layer-grandma-fingers">
          <img src="/brand/peeking/grandma-fingers-overlay.webp" alt="Grandma Fingers Gripping Phone Bezel" />
        </div>

        <div id="fezu-paw-overlay" ref={fezuPawRef} className="feazto-layer layer-fezu-paw-overlay">
          <img src="/brand/peeking/fezu-paw-overlay.webp" alt="Fezu Chef Paw Gripping Phone Bezel" />
        </div>
      </div>
    </div>
  );
};
