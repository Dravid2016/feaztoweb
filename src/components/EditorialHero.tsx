import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

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

        {/* Traditional South Indian Kitchen Artwork (Right-aligned, blending left) */}
        <div className="hero-artwork-wrap" aria-hidden="true">
          <img 
            src="/south-indian-art-bg.jpg" 
            alt="Traditional South Indian kitchen with home cook preparing food" 
            className="hero-artwork-img"
          />
          {/* Soft atmospheric gradient wash on the artwork */}
          <div className="hero-artwork-gradient-mask" />
        </div>

        {/* Vertical Kolam Motif Chain on Far-Right Edge */}
        <div className="far-right-kolam-chain" aria-hidden="true">
          <svg width="28" height="240" viewBox="0 0 28 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(14, 24)">
              <rect x="-10" y="-10" width="20" height="20" rx="3" transform="rotate(45)" stroke="#F5B700" strokeWidth="1.8" fill="none" opacity="0.85" />
              <rect x="-6" y="-6" width="12" height="12" rx="2" transform="rotate(45)" stroke="#F5B700" strokeWidth="1.2" fill="none" opacity="0.6" />
              <circle cx="0" cy="0" r="2.5" fill="#F5B700" />
            </g>
            <line x1="14" y1="36" x2="14" y2="68" stroke="#F5B700" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.6" />
            <g transform="translate(14, 80)">
              <rect x="-10" y="-10" width="20" height="20" rx="3" transform="rotate(45)" stroke="#F5B700" strokeWidth="1.8" fill="none" opacity="0.85" />
              <rect x="-6" y="-6" width="12" height="12" rx="2" transform="rotate(45)" stroke="#F5B700" strokeWidth="1.2" fill="none" opacity="0.6" />
              <circle cx="0" cy="0" r="2.5" fill="#F5B700" />
            </g>
            <line x1="14" y1="92" x2="14" y2="124" stroke="#F5B700" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.6" />
            <g transform="translate(14, 136)">
              <rect x="-10" y="-10" width="20" height="20" rx="3" transform="rotate(45)" stroke="#F5B700" strokeWidth="1.8" fill="none" opacity="0.85" />
              <rect x="-6" y="-6" width="12" height="12" rx="2" transform="rotate(45)" stroke="#F5B700" strokeWidth="1.2" fill="none" opacity="0.6" />
              <circle cx="0" cy="0" r="2.5" fill="#F5B700" />
            </g>
            <line x1="14" y1="148" x2="14" y2="180" stroke="#F5B700" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.6" />
            <g transform="translate(14, 192)">
              <rect x="-10" y="-10" width="20" height="20" rx="3" transform="rotate(45)" stroke="#F5B700" strokeWidth="1.8" fill="none" opacity="0.85" />
              <rect x="-6" y="-6" width="12" height="12" rx="2" transform="rotate(45)" stroke="#F5B700" strokeWidth="1.2" fill="none" opacity="0.6" />
              <circle cx="0" cy="0" r="2.5" fill="#F5B700" />
            </g>
          </svg>
        </div>

        {/* Floating Green Curry Leaves */}
        <div className="floating-leaf leaf-1" aria-hidden="true" />
        <div className="floating-leaf leaf-2" aria-hidden="true" />
        <div className="floating-leaf leaf-3" aria-hidden="true" />
        <div className="floating-chili chili-1" aria-hidden="true" />

        {/* Floating Kolam near food table */}
        <div className="table-kolam-motif" aria-hidden="true">
          <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="7" y="7" width="32" height="32" rx="4" transform="rotate(45 23 23)" stroke="#F5B700" strokeWidth="1.8" fill="none" opacity="0.75" />
            <circle cx="23" cy="23" r="4.5" stroke="#F5B700" strokeWidth="1.4" fill="none" />
            <circle cx="23" cy="23" r="2" fill="#F5B700" />
            <circle cx="23" cy="7" r="1.8" fill="#F5B700" />
            <circle cx="23" cy="39" r="1.8" fill="#F5B700" />
            <circle cx="7" cy="23" r="1.8" fill="#F5B700" />
            <circle cx="39" cy="23" r="1.8" fill="#F5B700" />
          </svg>
        </div>

        {/* Main Content Area */}
        <div className="hero-content-wrapper">
          {/* Cultural Eyebrow with Kolam Motifs */}
          <div className="hero-eyebrow-row">
            <span className="eyebrow-kolam" aria-hidden="true">
              <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="6" y="6" width="22" height="22" rx="3" transform="rotate(45 17 17)" stroke="#F5B700" strokeWidth="1.8" fill="none" />
                <path d="M17,4 C19,9 25,9 30,17 C25,25 19,25 17,30 C15,25 9,25 4,17 C9,9 15,9 17,4 Z" stroke="#F5B700" strokeWidth="1.4" fill="none" />
                <circle cx="17" cy="17" r="2.5" fill="#F5B700" />
              </svg>
            </span>
            <span className="eyebrow-text">
              REGIONAL FOOD <span className="eyebrow-spark">✦</span> HOME KITCHENS <span className="eyebrow-spark">✦</span> CULTURE
            </span>
          </div>

          {/* Master Headline matching reference layout */}
          <h1 className="hero-master-headline">
            <span className="headline-line">The taste of</span>
            <span className="headline-line with-capsule">
              h
              <span className="food-word-capsule" title="Traditional South Indian Curry Bowl">
                <img 
                  src="/dish-capsule-curry.jpg" 
                  alt="Traditional South Indian Curry Bowl" 
                  className="capsule-dish-img"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/plate-thali.png';
                  }}
                />
              </span>
              me, wherever
            </span>
            <span className="headline-line">life takes you.</span>
          </h1>

          {/* Supporting Copy */}
          <p className="hero-master-subcopy">
            Discover the regional flavours, home kitchens and food traditions that bring people closer to what feels like home.
          </p>

          {/* Dual CTAs */}
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
        </div>

        {/* ── ORGANIC CURVED TRANSITION (Desktop & Mobile) ── */}
        <div className="hero-curved-bottom-separator" aria-hidden="true">
          <svg 
            viewBox="0 0 1440 180" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="curved-svg-canvas"
          >
            {/* Turmeric Gold Accent Wave Line */}
            <path 
              d="M0,120 Q220,175 480,125 T1020,135 T1440,65 L1440,180 L0,180 Z" 
              fill="#F5B700" 
              opacity="0.35" 
            />
            {/* Clean Cream Lower Wave Transition into section below */}
            <path 
              d="M0,140 Q240,195 520,140 T1040,148 T1440,85 L1440,180 L0,180 Z" 
              fill="#FBF9F5" 
            />
          </svg>

          {/* Center-Placed Traditional Kolam Motif along the organic curve */}
          <div className="curve-center-kolam" aria-hidden="true">
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="6" y="6" width="32" height="32" rx="4" transform="rotate(45 22 22)" stroke="#F5B700" strokeWidth="1.8" fill="#FBF9F5" />
              <path d="M22,5 C25,12 32,12 39,22 C32,32 25,32 22,39 C19,32 12,32 5,22 C12,12 19,12 22,5 Z" stroke="#F5B700" strokeWidth="1.4" fill="none" />
              <circle cx="22" cy="22" r="3" fill="#F5B700" />
            </svg>
          </div>
        </div>
      </section>

      {/* ── 9. NEXT SECTION VISIBLE BELOW THE HERO ── */}
      <section className="food-discovery-teaser-section">
        <div className="teaser-inner-container">
          {/* Eyebrow & Headline */}
          <div className="teaser-header">
            <span className="teaser-eyebrow">EXPLORE REGIONAL FLAVORS</span>
            <h2 className="teaser-title">A world of authentic tastes</h2>
            <p className="teaser-description">
              From fiery coastal curries to comforting home-style meals, explore the rich and diverse flavours of India — one region at a time.
            </p>
          </div>

          {/* 3 Food Dish Preview Cards with Authentic Oil Painting Artwork */}
          <div className="teaser-cards-grid">
            {/* Dish Card 1: Coastal Curry */}
            <div className="dish-preview-card">
              <div className="dish-image-wrapper">
                <img 
                  src="/dish-coastal-curry.jpg" 
                  alt="Authentic South Indian coastal curry simmering in an earthen clay pot" 
                  className="dish-preview-img"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/plate-biryani.png';
                  }}
                />
              </div>
              <div className="dish-card-caption">
                <span className="dish-origin-tag">Coastal Heritage</span>
                <h4 className="dish-name-heading">Fragrant Coastal Curries</h4>
              </div>
            </div>

            {/* Dish Card 2: Crispy Ghee Roast Dosa */}
            <div className="dish-preview-card">
              <div className="dish-image-wrapper">
                <img 
                  src="/dish-ghee-dosa.jpg" 
                  alt="Crispy golden ghee roast dosa served with coconut and tomato chutneys" 
                  className="dish-preview-img"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/plate-idli.png';
                  }}
                />
              </div>
              <div className="dish-card-caption">
                <span className="dish-origin-tag">South Traditions</span>
                <h4 className="dish-name-heading">Golden Crispy Dosas & Chutneys</h4>
              </div>
            </div>

            {/* Dish Card 3: Slow Dum Biryani */}
            <div className="dish-preview-card">
              <div className="dish-image-wrapper">
                <img 
                  src="/dish-dum-biryani.jpg" 
                  alt="Fragrant Dum Biryani in a traditional bronze uruli with caramelized onions and whole spices" 
                  className="dish-preview-img"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/plate-thali.png';
                  }}
                />
              </div>
              <div className="dish-card-caption">
                <span className="dish-origin-tag">Deccani Spice</span>
                <h4 className="dish-name-heading">Slow-Fire Dum Biryani</h4>
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
          background-color: #F8F5EE;
          overflow: hidden;
        }

        /* ── HERO MAIN SECTION ── */
        .feazto-master-hero {
          position: relative;
          min-height: 680px;
          background: linear-gradient(135deg, #FBF9F5 0%, #F5F1E6 100%);
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          padding-top: 54px;
          padding-bottom: 90px;
          box-sizing: border-box;
        }

        /* Subtle warm parchment texture */
        .parchment-texture-layer {
          position: absolute;
          inset: 0;
          background-image: 
            radial-gradient(circle at 20% 30%, rgba(245, 183, 0, 0.05) 0%, transparent 40%),
            radial-gradient(circle at 80% 20%, rgba(212, 137, 26, 0.06) 0%, transparent 50%),
            radial-gradient(circle at 50% 90%, rgba(245, 183, 0, 0.04) 0%, transparent 60%);
          pointer-events: none;
          z-index: 0;
        }

        /* Traditional South Indian Kitchen Artwork on the Right */
        .hero-artwork-wrap {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          width: 58%;
          max-width: 900px;
          height: 100%;
          z-index: 1;
          pointer-events: none;
          overflow: hidden;
        }

        .hero-artwork-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: right 18% center;
          /* Mask edges so artwork dissolves softly into the warm parchment left & top */
          mask-image: linear-gradient(to right, transparent 0%, rgba(0,0,0,0.3) 12%, rgba(0,0,0,0.85) 28%, black 60%);
          -webkit-mask-image: linear-gradient(to right, transparent 0%, rgba(0,0,0,0.3) 12%, rgba(0,0,0,0.85) 28%, black 60%);
          filter: contrast(1.03) saturate(1.05);
        }

        .hero-artwork-gradient-mask {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(251, 249, 245, 0.15) 0%, transparent 40%, rgba(251, 249, 245, 0.25) 100%);
          pointer-events: none;
        }

        /* Far-Right Edge Kolam Chain */
        .far-right-kolam-chain {
          position: absolute;
          top: 36px;
          right: 28px;
          z-index: 2;
          pointer-events: none;
          opacity: 0.85;
        }

        /* Organic leaf / spice elements */
        .floating-leaf {
          position: absolute;
          width: 28px;
          height: 14px;
          border-radius: 100% 0 100% 0;
          background: #4B6B38;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          z-index: 2;
          pointer-events: none;
          opacity: 0.8;
        }

        .leaf-1 {
          top: 240px;
          left: 42px;
          transform: rotate(-35deg);
        }

        .leaf-2 {
          top: 480px;
          left: 36%;
          transform: rotate(45deg);
        }

        .leaf-3 {
          top: 140px;
          left: 44%;
          transform: rotate(60deg) scale(0.8);
          opacity: 0.6;
        }

        .floating-chili {
          position: absolute;
          width: 32px;
          height: 9px;
          border-radius: 50% 20% 20% 50%;
          background: linear-gradient(90deg, #A8201A, #C93B2B);
          transform: rotate(40deg);
          top: 560px;
          left: 20px;
          z-index: 2;
          pointer-events: none;
          opacity: 0.85;
        }

        /* Floating Kolam Motif by kitchen table */
        .table-kolam-motif {
          position: absolute;
          top: 480px;
          left: 38%;
          z-index: 2;
          pointer-events: none;
          animation: gentleFloat 6s ease-in-out infinite;
        }

        @keyframes gentleFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }

        /* Hero Content Left Column */
        .hero-content-wrapper {
          position: relative;
          z-index: 3;
          max-width: 680px;
          padding-left: clamp(24px, 6vw, 76px);
          padding-right: 20px;
          text-align: left;
        }

        /* Eyebrow with Kolam */
        .hero-eyebrow-row {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 24px;
        }

        .eyebrow-kolam {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .eyebrow-text {
          font-family: var(--font-heading);
          font-size: 0.84rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          color: #3A3A3A;
          text-transform: uppercase;
        }

        .eyebrow-spark {
          color: #F5B700;
          margin: 0 4px;
          font-size: 0.9rem;
        }

        /* Editorial Bold Headline */
        .hero-master-headline {
          font-family: var(--font-heading);
          font-size: clamp(2.8rem, 5.8vw, 5.1rem);
          font-weight: 800;
          color: #111111;
          line-height: 1.14;
          letter-spacing: -0.035em;
          margin: 0 0 24px 0;
        }

        .headline-line {
          display: block;
        }

        .headline-line.with-capsule {
          display: flex;
          align-items: center;
          gap: 0;
          flex-wrap: nowrap;
        }

        /* Capsule with Food Image replacing the 'o' in home */
        .food-word-capsule {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: clamp(56px, 7.8vw, 88px);
          height: clamp(36px, 4.8vw, 56px);
          margin: 0 4px;
          border-radius: 9999px;
          background: #FFFFFF;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.16);
          border: 2px solid #F5B700;
          overflow: hidden;
          vertical-align: middle;
          transition: transform 0.28s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.28s ease;
          cursor: pointer;
          flex-shrink: 0;
        }

        .food-word-capsule:hover {
          transform: scale(1.1) rotate(2deg);
          box-shadow: 0 10px 26px rgba(0, 0, 0, 0.22);
        }

        .capsule-dish-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* Supporting Copy */
        .hero-master-subcopy {
          font-family: var(--font-body);
          font-size: clamp(1rem, 1.35vw, 1.15rem);
          font-weight: 400;
          line-height: 1.65;
          color: #4A4A4A;
          max-width: 530px;
          margin: 0 0 36px 0;
        }

        /* CTA Buttons Row */
        .hero-cta-buttons-row {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .master-primary-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 15px 32px;
          border-radius: 9999px;
          background-color: #F5B700;
          color: #111111;
          font-family: var(--font-heading);
          font-size: 0.98rem;
          font-weight: 700;
          border: 1px solid #E5AA00;
          box-shadow: 0 6px 20px rgba(245, 183, 0, 0.35);
          cursor: pointer;
          transition: transform 0.22s ease, box-shadow 0.22s ease, background-color 0.22s ease;
        }

        .master-primary-cta:hover {
          background-color: #E6A700;
          transform: translateY(-2px);
          box-shadow: 0 10px 26px rgba(245, 183, 0, 0.45);
        }

        .cta-arrow-icon {
          transition: transform 0.2s ease;
        }

        .master-primary-cta:hover .cta-arrow-icon {
          transform: translateX(3px);
        }

        .master-secondary-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 14px 28px;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(8px);
          color: #111111;
          font-family: var(--font-heading);
          font-size: 0.98rem;
          font-weight: 600;
          border: 1.5px solid rgba(17, 17, 17, 0.3);
          cursor: pointer;
          transition: transform 0.22s ease, background 0.22s ease, border-color 0.22s ease;
        }

        .master-secondary-cta:hover {
          background: #FFFFFF;
          border-color: #111111;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
        }

        .play-circle-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          border: 1.5px solid #111111;
          margin-left: 2px;
        }

        /* ── ORGANIC CURVED BOTTOM SEPARATOR ── */
        .hero-curved-bottom-separator {
          position: absolute;
          bottom: -1px;
          left: 0;
          right: 0;
          width: 100%;
          height: 140px;
          z-index: 4;
          pointer-events: none;
          line-height: 0;
        }

        .curved-svg-canvas {
          width: 100%;
          height: 100%;
          display: block;
        }

        .curve-center-kolam {
          position: absolute;
          bottom: 24px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 5;
          pointer-events: none;
        }

        /* ── 9. NEXT SECTION: FOOD DISCOVERY TEASER ── */
        .food-discovery-teaser-section {
          position: relative;
          background-color: #FBF9F5;
          padding-top: 40px;
          padding-bottom: 84px;
          z-index: 5;
        }

        .teaser-inner-container {
          max-width: 1220px;
          margin: 0 auto;
          padding: 0 clamp(20px, 4vw, 48px);
        }

        .teaser-header {
          max-width: 580px;
          margin-bottom: 38px;
        }

        .teaser-eyebrow {
          display: block;
          font-family: var(--font-heading);
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: #C28D00;
          text-transform: uppercase;
          margin-bottom: 8px;
        }

        .teaser-title {
          font-family: var(--font-heading);
          font-size: clamp(2rem, 3.2vw, 2.7rem);
          font-weight: 800;
          color: #111111;
          line-height: 1.2;
          letter-spacing: -0.025em;
          margin: 0 0 14px 0;
        }

        .teaser-description {
          font-family: var(--font-body);
          font-size: 0.98rem;
          color: #555555;
          line-height: 1.65;
          margin: 0;
        }

        /* 3 Food Dish Preview Cards */
        .teaser-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }

        .dish-preview-card {
          background: #FFFFFF;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
          border: 1px solid rgba(0, 0, 0, 0.06);
          transition: transform 0.28s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.28s ease;
        }

        .dish-preview-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 42px rgba(0, 0, 0, 0.1);
        }

        .dish-image-wrapper {
          position: relative;
          height: 220px;
          background: linear-gradient(180deg, #FFFDF8 0%, #F5F0E1 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          overflow: hidden;
        }

        .dish-preview-img {
          width: 86%;
          height: 180px;
          object-fit: contain;
          filter: drop-shadow(0 10px 18px rgba(0, 0, 0, 0.15));
          transition: transform 0.35s ease;
        }

        .dish-preview-card:hover .dish-preview-img {
          transform: scale(1.06);
        }

        .dish-card-caption {
          padding: 20px 24px 24px 24px;
        }

        .dish-origin-tag {
          font-size: 0.75rem;
          font-weight: 700;
          color: #B58400;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          display: block;
          margin-bottom: 6px;
        }

        .dish-name-heading {
          font-family: var(--font-heading);
          font-size: 1.15rem;
          font-weight: 700;
          color: #111111;
          line-height: 1.35;
          margin: 0;
        }

        /* ── RESPONSIVE DESIGN ── */
        @media (max-width: 1024px) {
          .feazto-master-hero {
            min-height: auto;
            padding-bottom: 120px;
          }
          .hero-artwork-wrap {
            width: 50%;
            opacity: 0.85;
          }
          .hero-master-headline {
            font-size: clamp(2.4rem, 5vw, 3.8rem);
          }
          .teaser-cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .teaser-cards-grid .dish-preview-card:last-child {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .feazto-master-hero {
            padding-top: 36px;
            padding-bottom: 110px;
          }
          .hero-content-wrapper {
            max-width: 100%;
            padding-left: 20px;
            padding-right: 20px;
          }
          .hero-artwork-wrap {
            position: relative;
            width: 100%;
            height: 280px;
            margin-top: 24px;
            mask-image: linear-gradient(to bottom, black 60%, transparent 100%);
            -webkit-mask-image: linear-gradient(to bottom, black 60%, transparent 100%);
          }
          .hero-artwork-bg {
            background-position: center 30%;
          }
          .far-right-kolam-chain {
            display: none;
          }
          .floating-leaf, .floating-chili, .table-kolam-motif {
            display: none;
          }
          .hero-master-headline {
            font-size: 2.3rem;
          }
          .food-word-capsule {
            width: 52px;
            height: 34px;
          }
          .teaser-cards-grid {
            grid-template-columns: 1fr;
          }
          .teaser-cards-grid .dish-preview-card:last-child {
            display: block;
          }
          .hero-curved-bottom-separator {
            height: 90px;
          }
        }
      `}</style>
    </div>
  );
};
