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
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!stageRef.current) return;
          const rect = stageRef.current.getBoundingClientRect();
          const winHeight = window.innerHeight;

          // Viewport coverage progress:
          // progress = 0: stage is just entering bottom of screen
          // progress = 0.5: stage is centered in screen
          // progress = 1: stage is exiting top of screen
          const progress = Math.min(Math.max((winHeight - rect.top) / (winHeight + rect.height), 0), 1);

          // Peek factor:
          // We want Grandma and Fezu to HIDE IN behind the phone when user hasn't scrolled to them or scrolls past,
          // and PEEK FULLY OUT when the banner is in comfortable viewing range (progress around 0.35 to 0.65).
          // Normalized peek amount (0 = completely hidden behind phone, 1 = fully peeked out)
          // Using a smooth sine curve peaking when stage is in view:
          const peekAmount = Math.sin(progress * Math.PI); // 0 -> 1 -> 0

          // Hidden offsets:
          // Grandma hides to the right (translateX: +160px behind phone), scale down slightly, opacity fades when deep behind
          // Fezu hides to the left (translateX: -160px behind phone)
          const grandmaHideX = (1 - peekAmount) * 165; // pixels hidden behind phone
          const grandmaHideY = (1 - peekAmount) * 35;
          const grandmaRot = (1 - peekAmount) * 12; // tilt inward behind phone

          const fezuHideX = -(1 - peekAmount) * 165; // pixels hidden behind phone
          const fezuHideY = (1 - peekAmount) * 35;
          const fezuRot = -(1 - peekAmount) * 14;

          // Opacity also dips to 0 when completely out of view (<0.08 or >0.92)
          const charOpacity = Math.min(Math.max(peekAmount * 1.5, 0), 1);

          // Apply to Grandma Group (Body + Head)
          if (grandmaGroupRef.current) {
            grandmaGroupRef.current.style.transform = `translate3d(${grandmaHideX}px, ${grandmaHideY}px, 0) rotate(${grandmaRot}deg)`;
            grandmaGroupRef.current.style.opacity = `${charOpacity}`;
          }

          // Dynamic head turning:
          if (grandmaHeadRef.current) {
            const headTurn = Math.sin(progress * Math.PI) * 16;
            grandmaHeadRef.current.style.transform = `rotateY(${headTurn}deg) rotateZ(${(progress - 0.5) * 6}deg)`;
          }

          // Grandma's hands gripping phone: slide and fade smoothly with Grandma
          if (grandmaHandsRef.current) {
            // Hands grip the phone bezel when she is peeked out, retreat when hidden
            grandmaHandsRef.current.style.transform = `translate3d(${grandmaHideX * 0.75}px, ${grandmaHideY * 0.5}px, 0)`;
            grandmaHandsRef.current.style.opacity = `${charOpacity}`;
          }

          // Apply to Fezu Group (Body + Head)
          if (fezuGroupRef.current) {
            fezuGroupRef.current.style.transform = `translate3d(${fezuHideX}px, ${fezuHideY}px, 0) rotate(${fezuRot}deg)`;
            fezuGroupRef.current.style.opacity = `${charOpacity}`;
          }

          // Dynamic Fezu head tilting
          if (fezuHeadRef.current) {
            const fHeadTurn = -Math.sin(progress * Math.PI) * 18;
            fezuHeadRef.current.style.transform = `rotateY(${fHeadTurn}deg) rotateZ(${-(progress - 0.5) * 6}deg)`;
          }

          // Fezu paw gripping phone
          if (fezuPawRef.current) {
            fezuPawRef.current.style.transform = `translate3d(${fezuHideX * 0.75}px, ${fezuHideY * 0.5}px, 0)`;
            fezuPawRef.current.style.opacity = `${charOpacity}`;
          }

          // Gentle 3D floating effect on the central phone
          if (phoneRef.current) {
            const scrollFactor = (progress - 0.5) * 2;
            const phoneRotX = scrollFactor * -5;
            const phoneTransY = scrollFactor * -6;
            phoneRef.current.style.transform = `perspective(1000px) rotateX(${phoneRotX}deg) translateY(${phoneTransY}px)`;
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
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
          transition: transform 0.12s cubic-bezier(0.2, 0, 0.2, 1), opacity 0.12s ease-out;
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
          transform-origin: 34% 56%;
        }

        .layer-grandma-body {
          z-index: 11;
        }

        .layer-grandma-head {
          z-index: 12;
          transform-origin: 23.63% 36.95%;
          transition: transform 0.15s cubic-bezier(0.2, 0, 0.2, 1);
        }

        /* 2. FEZU MASCOT GROUP (Behind Phone: z-index 11 & 12) */
        .layer-fezu-group {
          z-index: 11;
          transform-origin: 66% 60%;
        }

        .layer-fezu-body {
          z-index: 11;
        }

        .layer-fezu-head {
          z-index: 12;
          transform-origin: 74.71% 60.85%;
          transition: transform 0.15s cubic-bezier(0.2, 0, 0.2, 1);
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
          transform-origin: 33.01% 41.06%;
        }

        .layer-fezu-paw {
          z-index: 30;
          transform-origin: 66.80% 62.76%;
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
            <img src="/brand/peeking/grandma-body.webp" alt="Grandma Body" />
          </div>
          <div id="grandma-head" ref={grandmaHeadRef} className="feazto-layer layer-grandma-head">
            <img src="/brand/peeking/grandma-head.webp" alt="Grandma Head Turning to Mobile Banner" />
          </div>
        </div>

        {/* 2. FEZU MASCOT GROUP (Behind Phone: z-index 11 & 12) */}
        <div id="fezu-group" ref={fezuGroupRef} className="feazto-layer layer-fezu-group">
          <div id="fezu-body" className="feazto-layer layer-fezu-body">
            <img src="/brand/peeking/fezu-body.webp" alt="Fezu Chef Body" />
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
          <img src="/brand/peeking/grandma-hands-clean.webp" alt="Grandma Hands Gripping Phone" />
        </div>

        {/* 5. FOREGROUND OVERLAY: FEZU'S CHEF PAW (z-index 30) */}
        <div id="fezu-paw" ref={fezuPawRef} className="feazto-layer layer-fezu-paw">
          <img src="/brand/peeking/fezu-paw-clean.webp" alt="Fezu Chef Paw Gripping Phone" />
        </div>
      </div>
    </div>
  );
};
