import React from 'react';
import { ArrowRight, Play, MapPin } from 'lucide-react';
import { PeekingGrandmaFezuBanner } from './PeekingGrandmaFezuBanner';

interface EditorialHeroProps {
  navigate: (route: string) => void;
}

export const EditorialHero: React.FC<EditorialHeroProps> = ({ navigate }) => {
  return (
    <div className="feazto-hero-and-discovery-wrapper">
      {/* ── TOP HERO SECTION ── */}
      <section className="feazto-master-hero">
        {/* Subtle background texture overlay */}
        <div className="parchment-texture-layer" aria-hidden="true" />

        {/* Main Content Area - Center Aligned */}
        <div className="hero-content-wrapper">
          {/* Cultural Eyebrow with Kolam Motifs - Center Aligned */}
          <div className="hero-eyebrow-row">
            <span className="eyebrow-kolam" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="6" y="6" width="22" height="22" rx="3" transform="rotate(45 17 17)" stroke="#F5B700" strokeWidth="1.8" fill="none" />
                <path d="M17,4 C19,9 25,9 30,17 C25,25 19,25 17,30 C15,25 9,25 4,17 C9,9 15,9 17,4 Z" stroke="#F5B700" strokeWidth="1.4" fill="none" />
                <circle cx="17" cy="17" r="2.5" fill="#F5B700" />
              </svg>
            </span>
            <span className="eyebrow-text">
              REGIONAL FOOD <span className="eyebrow-spark">✦</span> HOME KITCHENS <span className="eyebrow-spark">✦</span> CULTURE
            </span>
            <span className="eyebrow-kolam" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="6" y="6" width="22" height="22" rx="3" transform="rotate(45 17 17)" stroke="#F5B700" strokeWidth="1.8" fill="none" />
                <path d="M17,4 C19,9 25,9 30,17 C25,25 19,25 17,30 C15,25 9,25 4,17 C9,9 15,9 17,4 Z" stroke="#F5B700" strokeWidth="1.4" fill="none" />
                <circle cx="17" cy="17" r="2.5" fill="#F5B700" />
              </svg>
            </span>
          </div>

          {/* Master Headline - Centered */}
          <h1 className="hero-master-headline">
            <span className="headline-line">The taste of home,</span>
            <span className="headline-line with-capsule">
              wherever life takes you.
            </span>
          </h1>

          {/* Supporting Copy - Center Aligned */}
          <p className="hero-master-subcopy">
            Discover the regional flavours, home kitchens and food traditions that bring people closer to what feels like home.
          </p>

          {/* Dual CTAs - Center Aligned Solid Buttons */}
          <div className="hero-cta-buttons-row">
            <button 
              type="button" 
              onClick={() => navigate('/discover')}
              className="master-primary-cta"
            >
              <span>Explore Food</span>
              <ArrowRight size={18} className="cta-arrow-icon" />
            </button>

            <button 
              type="button" 
              onClick={() => navigate('/our-story')}
              className="master-secondary-cta"
            >
              <span>Our Story</span>
              <span className="play-circle-icon">
                <Play size={11} fill="#111111" strokeWidth={0} />
              </span>
            </button>
          </div>

          {/* Exclusive Bengaluru Launch Indicator Badge */}
          <div className="hero-bengaluru-launch-badge" role="status" aria-label="Now serving in Bengaluru">
            {/* removed blinker */}
            <MapPin size={15} className="bengaluru-pin-icon" />
            <span className="bengaluru-city-label">Now Live in</span>
            <span className="bengaluru-city-name">Bengaluru</span>
            <span className="bengaluru-tag-pill">Only</span>
          </div>
        </div>

        {/* Interactive Scroll-Driven Peeking Grandma & Fezu Banner */}
        <div className="hero-plenti-phone-wrapper">
          <div className="hero-plenti-phone-container">
            {/* Authentic Kolam Art Motif in Background */}
            <div className="hero-kolam-art-bg" aria-hidden="true">
              <img 
                src="/brand/hero-kolam-bg.png" 
                alt="" 
                className="kolam-motif-img"
              />
            </div>

            {/* Peeking Grandma & Fezu Multi-Layer Stage */}
            <PeekingGrandmaFezuBanner />

            {/* Soft warm/golden ambient glow tailored to the hero palette */}
            <div className="hero-phone-ambient-glow" />
          </div>
        </div>

        {/* ── DRAMATIC DEEP SCULPTURAL ORGANIC S-CURVE TRANSITION ── */}
        <div className="hero-curved-bottom-separator" aria-hidden="true">
          <svg 
            viewBox="0 0 1440 280" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="curved-svg-canvas"
          >
            <defs>
              {/* Soft vertical fade gradient so the wave naturally dissipates with no harsh bottom line */}
              <linearGradient id="waveBottomBlendGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FFF3C4" stopOpacity="1" />
                <stop offset="45%" stopColor="#FFF3C4" stopOpacity="0.92" />
                <stop offset="75%" stopColor="#FFF3C4" stopOpacity="0.40" />
                <stop offset="100%" stopColor="#FFF3C4" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Upper Flowing Yellow Ribbon Layer (Closed with an organic curved bottom, zero straight box lines) */}
            <path 
              d="M0,80 C320,180 500,220 720,160 C980,90 1180,40 1440,140 C1180,105 980,145 720,215 C500,270 320,230 0,135 Z" 
              fill="#F8B504" 
              opacity="0.40" 
            />
            {/* Dynamic Accent Golden Wave Sweep (Flowing organic ribbon wave, completely curved on both top and bottom) */}
            <path 
              d="M0,115 C340,210 520,245 720,185 C960,115 1160,65 1440,165 C1160,130 960,175 720,240 C520,295 340,255 0,165 Z" 
              fill="#F5B700" 
              opacity="0.80" 
            />
            {/* Lower Wave Boundary: Curvilinear shield that covers bottom elements and blends into the background with zero straight edges */}
            <path 
              d="M0,140 C350,230 530,260 720,205 C950,140 1150,90 1440,190 C1150,160 950,205 720,265 C530,315 350,275 0,190 Z" 
              fill="url(#waveBottomBlendGrad)" 
            />
          </svg>
        </div>
      </section>

      {/* ── NEXT SECTION: REGIONAL HIGHLIGHT TEASER (Centered, No Card Images) ── */}
      <section className="food-discovery-teaser-section">
        <div className="teaser-inner-container">
          {/* Eyebrow & Headline - Center Aligned */}
          <div className="teaser-header">
            <span className="teaser-eyebrow">EXPLORE REGIONAL FLAVORS</span>
            <h2 className="teaser-title">A world of authentic tastes</h2>
            <p className="teaser-description">
              From fiery coastal curries to comforting home style meals, explore the rich and diverse flavours of India — one region at a time.
            </p>
          </div>

          {/* 3 Regional Heritage Highlights - Cards with transparent dishes positioned right side & settled on bottom */}
          <div className="teaser-cards-grid">
            {/* Card 1: Coastal Heritage */}
            <div className="dish-preview-card text-center-card teaser-heritage-card coastal-card-special">
              <div className="dish-card-caption">
                <span className="dish-origin-tag">Coastal Heritage</span>
                <h4 className="dish-name-heading">Fragrant Coastal Curries</h4>
                <p className="dish-name-desc">Slow-simmered kokum, stone ground coconut pastes, and fresh coastal temperings.</p>
              </div>
              <div className="teaser-dish-bottom-anchor coastal-full-bottom-anchor">
                <img 
                  src="/brand/dish-coastal-curry-full-bottom.png" 
                  alt="Fragrant Coastal Curries" 
                  className="teaser-settled-dish-img coastal-full-dish-img" 
                  loading="lazy"
                />
              </div>
            </div>

            {/* Card 2: South Traditions */}
            <div className="dish-preview-card text-center-card teaser-heritage-card">
              <div className="dish-card-caption">
                <span className="dish-origin-tag">South Traditions</span>
                <h4 className="dish-name-heading">Golden Crispy Dosas & Chutneys</h4>
                <p className="dish-name-desc">Cast-iron seasoned crisps, fresh fermented batters, and roasted gram chutneys.</p>
              </div>
              <div className="teaser-dish-bottom-anchor">
                <img 
                  src="/brand/dish-south-dosa.png" 
                  alt="Golden Crispy Dosas & Chutneys" 
                  className="teaser-settled-dish-img dosa-dish-img" 
                  loading="lazy"
                />
              </div>
            </div>

            {/* Card 3: Deccani Spice */}
            <div className="dish-preview-card text-center-card teaser-heritage-card">
              <div className="dish-card-caption">
                <span className="dish-origin-tag">Deccani Spice</span>
                <h4 className="dish-name-heading">Slow-Fire Dum Biryani</h4>
                <p className="dish-name-desc">Dough-sealed handis, saffron strands, aromatic spices, and tender long-grain rice.</p>
              </div>
              <div className="teaser-dish-bottom-anchor biryani-bottom-anchor">
                <img 
                  src="/brand/dish-deccani-biryani.png" 
                  alt="Slow-Fire Dum Biryani" 
                  className="teaser-settled-dish-img biryani-dish-img" 
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPONENT STYLES ── */}
      <style>{`
        /* Overall Wrapper */
        .feazto-hero-and-discovery-wrapper {
          position: relative;
          background: transparent !important;
          overflow: hidden;
        }

        /* ── HERO MAIN SECTION ── */
        .feazto-master-hero {
          position: relative;
          min-height: 640px;
          background: transparent !important;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding-top: 60px;
          padding-bottom: 20px;
          box-sizing: border-box;
          text-align: center;
        }

        /* Transparent layer to seamlessly blend with page */
        .parchment-texture-layer {
          display: none;
        }

        /* Hero Content Center Column - High z-index (10) to stay strictly above background Kolam art */
        .hero-content-wrapper {
          position: relative;
          z-index: 10;
          max-width: 860px;
          width: 100%;
          margin: 0 auto;
          padding: 0 clamp(20px, 4vw, 40px);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          box-sizing: border-box;
        }

        /* Eyebrow with Kolam - Centered */
        .hero-eyebrow-row {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          margin-bottom: 28px;
        }

        .eyebrow-kolam {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .eyebrow-text {
          font-family: var(--font-heading);
          font-size: 0.88rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          color: #3A3A3A;
          text-transform: uppercase;
        }

        .eyebrow-spark {
          color: #F5B700;
          margin: 0 4px;
          font-size: 0.9rem;
        }

        /* Editorial Bold Headline - Centered */
        .hero-master-headline {
          font-family: var(--font-heading);
          font-size: clamp(2.8rem, 5.5vw, 4.8rem);
          font-weight: 800;
          color: #111111;
          line-height: 1.15;
          letter-spacing: -0.035em;
          margin: 0 0 24px 0;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .headline-line {
          display: block;
          text-align: center;
        }

        .headline-line.with-capsule {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0;
          flex-wrap: nowrap;
        }

        /* Transition Card / Capsule Image between the text - Pure Crystal Liquid Glass (Zero Yellow Borders) */
        .food-word-capsule {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: clamp(62px, 8.4vw, 94px);
          height: clamp(38px, 5.2vw, 58px);
          margin: 0 7px;
          border-radius: 9999px;
          background: radial-gradient(circle at 30% 25%, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0.12) 60%, rgba(255, 255, 255, 0.05) 100%);
          backdrop-filter: blur(16px) saturate(180%);
          -webkit-backdrop-filter: blur(16px) saturate(180%);
          border: 1.5px solid rgba(255, 255, 255, 0.65);
          outline: none;
          box-shadow: 
            0 12px 28px rgba(0, 0, 0, 0.12),
            0 4px 10px rgba(0, 0, 0, 0.06),
            inset 0 2px 6px rgba(255, 255, 255, 0.8),
            inset 0 -2px 6px rgba(0, 0, 0, 0.06);
          overflow: hidden;
          vertical-align: middle;
          transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.35s ease, border-color 0.35s ease;
          cursor: pointer;
          flex-shrink: 0;
          position: relative;
        }

        /* Liquid Glass Specular Reflection Highlight (Upper Sheen Layer) */
        .food-word-capsule::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 9999px;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.65) 0%, rgba(255, 255, 255, 0.08) 40%, transparent 60%);
          pointer-events: none;
          z-index: 4;
        }

        /* Pure Crystal Inset Glass Refraction */
        .food-word-capsule::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 9999px;
          box-shadow: inset 0 0 8px rgba(255, 255, 255, 0.45);
          pointer-events: none;
          z-index: 3;
        }

        .food-word-capsule:hover {
          transform: scale(1.12) rotate(2deg);
          border-color: rgba(255, 255, 255, 0.95);
          outline: none;
          box-shadow: 
            0 18px 36px rgba(0, 0, 0, 0.18),
            0 6px 14px rgba(0, 0, 0, 0.08),
            inset 0 3px 8px rgba(255, 255, 255, 0.95);
        }

        .capsule-dish-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: opacity 0.55s ease, transform 0.65s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .capsule-dish-img.is-active-dish {
          opacity: 1;
          transform: scale(1) rotate(0deg);
          z-index: 2;
        }

        .capsule-dish-img.is-hidden-dish {
          opacity: 0;
          transform: scale(0.85) rotate(-6deg);
          z-index: 1;
          pointer-events: none;
        }

        /* Supporting Copy - Centered */
        .hero-master-subcopy {
          font-family: var(--font-body);
          font-size: clamp(1.05rem, 1.4vw, 1.22rem);
          font-weight: 400;
          line-height: 1.7;
          color: #4A4A4A;
          max-width: 620px;
          margin: 0 auto 38px auto;
          text-align: center;
        }

        /* CTA Buttons Row - Centered */
        .hero-cta-buttons-row {
          position: relative;
          z-index: 12;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
          flex-wrap: wrap;
        }

        .master-primary-cta {
          position: relative;
          z-index: 12;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 16px 36px;
          border-radius: 9999px;
          background: linear-gradient(135deg, rgba(255, 222, 89, 0.78) 0%, rgba(250, 201, 33, 0.58) 60%, rgba(229, 168, 0, 0.70) 100%) !important;
          color: #181B20 !important;
          font-family: var(--font-heading);
          font-size: 1rem;
          font-weight: 800;
          border: none !important;
          backdrop-filter: blur(24px) saturate(190%) !important;
          -webkit-backdrop-filter: blur(24px) saturate(190%) !important;
          box-shadow: 0 12px 32px rgba(250, 201, 33, 0.32), 
                      inset 0 1.5px 3px rgba(255, 255, 255, 0.75), 
                      inset 0 -2px 4px rgba(180, 130, 0, 0.18);
          cursor: pointer;
          transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;
        }

        .master-primary-cta:hover {
          background: #E8A800 !important;
          background-color: #E8A800 !important;
          border-color: #D69600 !important;
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(245, 183, 0, 0.55);
        }

        .cta-arrow-icon {
          transition: transform 0.2s ease;
        }

        .master-primary-cta:hover .cta-arrow-icon {
          transform: translateX(3px);
        }

        .master-secondary-cta {
          position: relative;
          z-index: 12;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 16px 34px;
          border-radius: 9999px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.70) 0%, rgba(255, 251, 235, 0.45) 100%) !important;
          color: #181B20 !important;
          font-family: var(--font-heading);
          font-size: 1rem;
          font-weight: 700;
          border: none !important;
          backdrop-filter: blur(24px) saturate(180%) !important;
          -webkit-backdrop-filter: blur(24px) saturate(180%) !important;
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.06), 
                      inset 0 1.5px 3px rgba(255, 255, 255, 0.95), 
                      inset 0 -1.5px 3px rgba(0, 0, 0, 0.03);
          cursor: pointer;
          transition: transform 0.25s ease, background 0.25s ease, box-shadow 0.25s ease;
        }

        .master-secondary-cta:hover {
          background: #F7F5EE !important;
          background-color: #F7F5EE !important;
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.18);
        }

        .play-circle-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: #F5B700;
          margin-left: 2px;
        }

        /* ── EXCLUSIVE BENGALURU LAUNCH BADGE IN HERO (100% Solid & Opaque) ── */
        .hero-bengaluru-launch-badge {
          position: relative;
          z-index: 12;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.72) 0%, rgba(255, 251, 235, 0.48) 100%) !important;
          border: none !important;
          padding: 8px 20px 8px 16px;
          border-radius: 9999px;
          margin-top: 26px;
          margin-bottom: 22px;
          backdrop-filter: blur(20px) saturate(160%) !important;
          -webkit-backdrop-filter: blur(20px) saturate(160%) !important;
          box-shadow: 0 8px 26px rgba(180, 140, 30, 0.08), 
                      inset 0 1.5px 2px rgba(255, 255, 255, 0.9), 
                      inset 0 -1px 2px rgba(0, 0, 0, 0.03);
          transition: transform 0.22s ease, box-shadow 0.22s ease;
        }

        .hero-bengaluru-launch-badge:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(245, 183, 0, 0.35);
        }

        .bengaluru-live-pulse {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background-color: #10B981;
          box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
          animation: bengaluruPulse 2s infinite;
          flex-shrink: 0;
        }

        @keyframes bengaluruPulse {
          0% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
          }
          70% {
            transform: scale(1);
            box-shadow: 0 0 0 6px rgba(16, 185, 129, 0);
          }
          100% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);
          }
        }

        .bengaluru-pin-icon {
          color: #F5B700;
          flex-shrink: 0;
        }

        .bengaluru-city-label {
          font-size: 0.84rem;
          font-weight: 500;
          color: #666666;
        }

        .bengaluru-city-name {
          font-size: 0.92rem;
          font-weight: 800;
          color: #111111;
          letter-spacing: -0.01em;
        }

        .bengaluru-tag-pill {
          font-size: 0.70rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          background: #F5B700;
          color: #111111;
          padding: 2px 7px;
          border-radius: 9999px;
        }

        /* ── HERO MOBILE DEVICE PLACEMENT (Scroll-Driven Peeking Grandma & Fezu Banner) ── */
        .hero-plenti-phone-wrapper {
          position: relative;
          width: 100%;
          display: flex;
          justify-content: center;
          margin-top: 16px;
          margin-bottom: -45px;
          z-index: 3;
          /* Fade ONLY the very bottom 10% of the phone/character container so no harsh edges or stray corners ever poke through beneath the wave */
          mask-image: linear-gradient(to bottom, black 0%, black 86%, transparent 97%);
          -webkit-mask-image: linear-gradient(to bottom, black 0%, black 86%, transparent 97%);
        }

        .hero-plenti-phone-container {
          position: relative;
          width: 100%;
          max-width: 1020px;
          display: flex;
          justify-content: center;
        }

        .hero-feazto-phone-device-img {
          width: 100%;
          height: auto;
          display: block;
          filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.28));
          position: relative;
          z-index: 2;
          transition: transform 0.35s ease;
        }

        .hero-feazto-phone-device-img:hover {
          transform: translateY(-4px) scale(1.015);
        }

        /* ── AUTHENTIC KOLAM ART IN BACKGROUND BEHIND MOBILE (WAY BIGGER & GRAND: 1250px) ── */
        .hero-kolam-art-bg {
          position: absolute;
          top: 40%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 1250px;
          height: 1250px;
          max-width: 165vw;
          z-index: 1;
          pointer-events: none;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0.70;
          /* Leaves top and middle 100% unmasked, while softly fading out lower tail before the border */
          mask-image: linear-gradient(to bottom, black 0%, black 68%, transparent 88%);
          -webkit-mask-image: linear-gradient(to bottom, black 0%, black 68%, transparent 88%);
          animation: slowSpinKolam 240s linear infinite; /* Calming, slow rotation */
        }

        @keyframes slowSpinKolam {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }

        .kolam-motif-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          filter: drop-shadow(0 6px 24px rgba(225, 160, 20, 0.28));
        }

        .hero-phone-ambient-glow {
          position: absolute;
          top: 38%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 920px;
          height: 920px;
          background: radial-gradient(circle, rgba(245, 183, 0, 0.35) 0%, rgba(245, 183, 0, 0.14) 48%, transparent 72%);
          filter: blur(75px);
          z-index: 0;
          pointer-events: none;
        }

        /* ── ORGANIC CURVED BOTTOM SEPARATOR ── */
        .hero-curved-bottom-separator {
          position: absolute;
          bottom: -20px;
          left: 0;
          right: 0;
          width: 100%;
          height: 200px;
          z-index: 4; /* Covers and hides bottom of phone, grandma, fezu and kolam cleanly */
          pointer-events: none;
          line-height: 0;
          /* Smoothly fade the bottom of the separator so no straight boundary is ever visible */
          mask-image: linear-gradient(to bottom, black 0%, black 65%, transparent 95%);
          -webkit-mask-image: linear-gradient(to bottom, black 0%, black 65%, transparent 95%);
        }

        .curved-svg-canvas {
          width: 100%;
          height: 100%;
          display: block;
        }

        /* ── NEXT SECTION: FOOD DISCOVERY TEASER (CENTERED) ── */
        .food-discovery-teaser-section {
          position: relative;
          background: transparent;
          padding-top: 40px;
          padding-bottom: 84px;
          z-index: 5;
        }

        .teaser-inner-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 clamp(20px, 4vw, 48px);
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .teaser-header {
          max-width: 680px;
          margin: 0 auto 44px auto;
          text-align: center;
        }

        .teaser-eyebrow {
          display: block;
          font-family: var(--font-heading);
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          color: #9E6B00;
          text-transform: uppercase;
          margin-bottom: 10px;
          text-align: center;
        }

        .teaser-title {
          font-family: var(--font-heading);
          font-size: clamp(2rem, 3.2vw, 2.7rem);
          font-weight: 800;
          color: #1A1103;
          line-height: 1.2;
          letter-spacing: -0.025em;
          margin: 0 0 14px 0;
          text-align: center;
        }

        .teaser-description {
          font-family: var(--font-body);
          font-size: 1.02rem;
          color: #5C4522;
          line-height: 1.65;
          margin: 0 auto;
          text-align: center;
        }

        /* 3 Food Dish Preview Cards - Reference Clean White Rounded Cards */
        .teaser-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          width: 100%;
          align-items: stretch;
        }

        .teaser-heritage-card {
          position: relative;
          background: #FFFFFF;
          border-radius: 28px;
          border: 1px solid rgba(0, 0, 0, 0.04);
          box-shadow: 0 16px 36px rgba(135, 71, 0, 0.06), 0 4px 12px rgba(0, 0, 0, 0.03);
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
          padding: 32px 28px 210px 28px; /* Room for the grand full-bottom dish display */
          min-height: 420px;
          overflow: hidden;
          box-sizing: border-box;
          cursor: default;
        }

        .teaser-heritage-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 48px rgba(135, 71, 0, 0.12), 0 6px 16px rgba(0, 0, 0, 0.04);
        }

        .teaser-heritage-card .dish-card-caption {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
          width: 100%;
        }

        .dish-origin-tag {
          font-family: var(--font-heading);
          font-size: 0.78rem;
          font-weight: 800;
          color: #B58400;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          display: block;
          margin-bottom: 12px;
          text-align: left;
        }

        .dish-name-heading {
          font-family: var(--font-heading);
          font-size: clamp(1.22rem, 1.6vw, 1.45rem);
          font-weight: 800;
          color: #111111;
          line-height: 1.3;
          margin: 0 0 12px 0;
          text-align: left;
          letter-spacing: -0.015em;
        }

        .dish-name-desc {
          font-family: var(--font-body);
          font-size: 0.94rem;
          color: #666666;
          line-height: 1.58;
          margin: 0;
          text-align: left;
          font-weight: 400;
        }

        /* ── FULL BOTTOM DISH PRESENTATION ── */
        .teaser-dish-bottom-anchor {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 220px;
          z-index: 3;
          display: flex;
          align-items: flex-end;
          justify-content: flex-end;
          pointer-events: none;
          overflow: hidden;
          border-bottom-left-radius: 28px;
          border-bottom-right-radius: 28px;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .teaser-heritage-card:hover .teaser-dish-bottom-anchor {
          transform: translateY(-2px);
        }

        .teaser-settled-dish-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: right bottom;
          display: block;
          user-select: none;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .teaser-heritage-card:hover .teaser-settled-dish-img {
          transform: scale(1.05);
        }

        /* Coastal fish handi platter stretches across the full bottom */
        .coastal-full-bottom-anchor {
          height: 200px;
          bottom: 0;
          left: 0;
          right: 0;
          width: 100%;
        }

        .coastal-full-dish-img {
          object-fit: cover;
          object-position: center bottom;
          width: 100%;
          height: 100%;
          display: block;
        }

        /* Dosa and Biryani comfortably settled filling the bottom right corner */
        .dosa-dish-img {
          object-fit: contain;
          object-position: right bottom;
          width: 95%;
          height: 195px;
          filter: drop-shadow(0 14px 24px rgba(90, 40, 0, 0.35)) drop-shadow(0 4px 10px rgba(0, 0, 0, 0.20));
        }

        .biryani-bottom-anchor {
          height: 275px;
        }

        .biryani-dish-img {
          object-fit: contain;
          object-position: right bottom;
          width: 110%;
          max-width: 320px;
          height: 260px;
          transform-origin: right bottom;
          transform: scale(1.15) translate(4%, 3%);
          filter: drop-shadow(0 16px 28px rgba(90, 40, 0, 0.40)) drop-shadow(0 4px 12px rgba(0, 0, 0, 0.22));
        }

        .teaser-heritage-card:hover .biryani-dish-img {
          transform: scale(1.22) translate(3%, 2%);
        }

        /* ── RESPONSIVE DESIGN ── */
        @media (max-width: 1024px) {
          .feazto-master-hero {
            padding-bottom: 110px;
          }
          .hero-master-headline {
            font-size: clamp(2.4rem, 5vw, 3.8rem);
          }
          .teaser-cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .teaser-cards-grid .text-center-card:last-child {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .feazto-master-hero {
            padding-top: 56px;
            padding-bottom: 160px;
          }
          .hero-content-wrapper {
            padding-left: 16px;
            padding-right: 16px;
          }
          .eyebrow-text {
            font-size: 0.76rem;
            letter-spacing: 0.1em;
          }
          .hero-master-headline {
            font-size: 2.2rem;
            line-height: 1.2;
          }
          .hero-master-subcopy {
            font-size: 0.98rem;
            margin-bottom: 28px;
          }
          .hero-cta-buttons-row {
            flex-direction: column;
            width: 100%;
            gap: 12px;
          }
          .master-primary-cta, .master-secondary-cta {
          position: relative;
          z-index: 12;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 16px 34px;
          border-radius: 9999px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.70) 0%, rgba(255, 251, 235, 0.45) 100%) !important;
          color: #181B20 !important;
          font-family: var(--font-heading);
          font-size: 1rem;
          font-weight: 700;
          border: none !important;
          backdrop-filter: blur(24px) saturate(180%) !important;
          -webkit-backdrop-filter: blur(24px) saturate(180%) !important;
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.06), 
                      inset 0 1.5px 3px rgba(255, 255, 255, 0.95), 
                      inset 0 -1.5px 3px rgba(0, 0, 0, 0.03);
          cursor: pointer;
          transition: transform 0.25s ease, background 0.25s ease, box-shadow 0.25s ease;
        }
          .teaser-cards-grid {
            grid-template-columns: 1fr;
          }
          .teaser-cards-grid .text-center-card:last-child {
            display: flex;
          }
          .hero-curved-bottom-separator {
            height: 80px;
          }
        }
      `}</style>
    </div>
  );
};

