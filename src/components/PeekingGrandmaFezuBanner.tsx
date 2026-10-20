import React, { useEffect, useRef } from 'react';

export const PeekingGrandmaFezuBanner: React.FC = () => {
  const stageRef = useRef<HTMLDivElement>(null);
  const grandmaHeadRef = useRef<HTMLDivElement>(null);
  const grandmaGroupRef = useRef<HTMLDivElement>(null);
  const fezuHeadRef = useRef<HTMLDivElement>(null);
  const fezuGroupRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!stageRef.current) return;
          const rect = stageRef.current.getBoundingClientRect();
          const winHeight = window.innerHeight;

          // Progress from 0 (approaching view) to 1 (passed view)
          // Centered around 0.5
          const progress = Math.min(Math.max((winHeight - rect.top) / (winHeight + rect.height), 0), 1);
          const scrollFactor = (progress - 0.5) * 2; // -1 to +1

          // Gentle parallax & turning effect
          // Grandma looks/turns toward the central phone as user scrolls
          if (grandmaHeadRef.current) {
            const rotY = Math.sin(progress * Math.PI) * 12; // leans in
            const rotZ = scrollFactor * 4;
            grandmaHeadRef.current.style.transform = `rotateY(${rotY}deg) rotateZ(${rotZ}deg)`;
          }

          if (grandmaGroupRef.current) {
            const transX = Math.sin(progress * Math.PI) * 8; // peeks out from left
            const transY = scrollFactor * 10;
            grandmaGroupRef.current.style.transform = `translateX(${transX}px) translateY(${transY}px)`;
          }

          // Fezu mascot looks/turns excitedly toward the central phone
          if (fezuHeadRef.current) {
            const fRotY = -Math.sin(progress * Math.PI) * 14; // leans in from right
            const fRotZ = -scrollFactor * 5;
            fezuHeadRef.current.style.transform = `rotateY(${fRotY}deg) rotateZ(${fRotZ}deg)`;
          }

          if (fezuGroupRef.current) {
            const fTransX = -Math.sin(progress * Math.PI) * 10; // peeks out from right
            const fTransY = scrollFactor * 8;
            fezuGroupRef.current.style.transform = `translateX(${fTransX}px) translateY(${fTransY}px)`;
          }

          // Subtle floating tilt for the central phone
          if (phoneRef.current) {
            const phoneRotX = scrollFactor * -6;
            const phoneTransY = scrollFactor * -8;
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
          transition: transform 0.15s cubic-bezier(0.2, 0, 0.2, 1);
        }

        .feazto-layer img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
          background: transparent !important;
        }

        /* 1. GRANDMA GROUP */
        .layer-grandma-group {
          z-index: 11;
          transform-origin: 24% 52%;
        }

        .layer-grandma-body {
          z-index: 11;
        }

        .layer-grandma-head {
          z-index: 12;
          transform-origin: 23.63% 36.95%;
        }

        /* 2. FEZU MASCOT GROUP */
        .layer-fezu-group {
          z-index: 11;
          transform-origin: 75% 58%;
        }

        .layer-fezu-body {
          z-index: 11;
        }

        .layer-fezu-head {
          z-index: 12;
          transform-origin: 74.71% 60.85%;
        }

        /* 3. CENTRAL PHONE BANNER */
        .layer-phone {
          z-index: 20;
          transform-origin: 50% 50%;
          filter: drop-shadow(0 22px 38px rgba(15, 23, 42, 0.22));
        }

        /* 4. FOREGROUND HANDS & PAWS (Overlapping Phone Edges) */
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
        <div id="grandma-hands" className="feazto-layer layer-grandma-hands">
          <img src="/brand/peeking/grandma-hands.webp" alt="Grandma Hands Gripping Phone" />
        </div>

        {/* 5. FOREGROUND OVERLAY: FEZU'S CHEF PAW (z-index 30) */}
        <div id="fezu-paw" className="feazto-layer layer-fezu-paw">
          <img src="/brand/peeking/fezu-paw.webp" alt="Fezu Chef Paw Gripping Phone" />
        </div>
      </div>
    </div>
  );
};
