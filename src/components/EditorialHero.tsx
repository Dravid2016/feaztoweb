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

          {/* Master Headline - Centered with Food Image Capsule */}
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

          {/* Supporting Copy - Center Aligned */}
          <p className="hero-master-subcopy">
            Discover the regional flavours, home kitchens and food traditions that bring people closer to what feels like home.
          </p>

          {/* Dual CTAs - Center Aligned */}
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

        {/* ── DRAMATIC DEEP SCULPTURAL ORGANIC S-CURVE TRANSITION ── */}
        <div className="hero-curved-bottom-separator" aria-hidden="true">
          <svg 
            viewBox="0 0 1440 280" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="curved-svg-canvas"
          >
            {/* Upper Flowing Yellow Ribbon Layer */}
            <path 
              d="M0,80 C320,180 500,220 720,160 C980,90 1180,40 1440,140 L1440,280 L0,280 Z" 
              fill="#F8B504" 
              opacity="0.38" 
            />
            {/* Dynamic Accent Golden Wave Sweep */}
            <path 
              d="M0,115 C340,210 520,245 720,185 C960,115 1160,65 1440,165 L1440,280 L0,280 Z" 
              fill="#F8B504" 
              opacity="0.75" 
            />
            {/* Deep Curled Lower Boundary into Section Below */}
            <path 
              d="M0,145 C350,235 530,265 720,210 C950,145 1150,95 1440,195 L1440,280 L0,280 Z" 
              fill="#FFFDF7" 
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
              From fiery coastal curries to comforting home-style meals, explore the rich and diverse flavours of India — one region at a time.
            </p>
          </div>

          {/* 3 Regional Heritage Highlights - Clean Typography Cards without image clutter */}
          <div className="teaser-cards-grid">
            <div className="dish-preview-card text-center-card">
              <div className="dish-card-caption">
                <span className="dish-origin-tag">Coastal Heritage</span>
                <h4 className="dish-name-heading">Fragrant Coastal Curries</h4>
                <p className="dish-name-desc">Slow-simmered kokum, stone-ground coconut pastes, and fresh coastal temperings.</p>
              </div>
            </div>

            <div className="dish-preview-card text-center-card">
              <div className="dish-card-caption">
                <span className="dish-origin-tag">South Traditions</span>
                <h4 className="dish-name-heading">Golden Crispy Dosas & Chutneys</h4>
                <p className="dish-name-desc">Cast-iron seasoned crisps, fresh fermented batters, and roasted gram chutneys.</p>
              </div>
            </div>

            <div className="dish-preview-card text-center-card">
              <div className="dish-card-caption">
                <span className="dish-origin-tag">Deccani Spice</span>
                <h4 className="dish-name-heading">Slow-Fire Dum Biryani</h4>
                <p className="dish-name-desc">Dough-sealed handis, saffron strands, aromatic spices, and tender long-grain rice.</p>
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
          padding-top: 80px;
          padding-bottom: 220px;
          box-sizing: border-box;
          text-align: center;
        }

        /* Transparent layer to seamlessly blend with page */
        .parchment-texture-layer {
          display: none;
        }

        /* Hero Content Center Column */
        .hero-content-wrapper {
          position: relative;
          z-index: 3;
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

        /* Transition Card / Capsule Image between the text */
        .food-word-capsule {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: clamp(56px, 7.8vw, 88px);
          height: clamp(36px, 4.8vw, 56px);
          margin: 0 5px;
          border-radius: 9999px;
          background: #FFFFFF;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.16);
          border: 2.5px solid #F5B700;
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
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
          flex-wrap: wrap;
        }

        .master-primary-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 16px 36px;
          border-radius: 9999px;
          background-color: #F5B700;
          color: #111111;
          font-family: var(--font-heading);
          font-size: 1rem;
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
          padding: 15px 30px;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(8px);
          color: #111111;
          font-family: var(--font-heading);
          font-size: 1rem;
          font-weight: 600;
          border: 1.5px solid rgba(17, 17, 17, 0.25);
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
          height: 180px;
          z-index: 4;
          pointer-events: none;
          line-height: 0;
        }

        .curved-svg-canvas {
          width: 100%;
          height: 100%;
          display: block;
        }

        /* ── NEXT SECTION: FOOD DISCOVERY TEASER (CENTERED) ── */
        .food-discovery-teaser-section {
          position: relative;
          background: linear-gradient(180deg, #FFF8E1 0%, #FEF4D1 60%, #FDF0C3 100%);
          padding-top: 36px;
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

        /* 3 Food Dish Preview Cards - Clean Typography Cards */
        .teaser-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          width: 100%;
        }

        .text-center-card {
          background: #FFFFFF;
          border-radius: 20px;
          border: 1.5px solid rgba(245, 183, 0, 0.4);
          box-shadow: 0 8px 24px rgba(135, 71, 0, 0.08);
          transition: transform 0.28s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.28s ease, border-color 0.28s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 16px;
        }

        .text-center-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 36px rgba(245, 183, 0, 0.25);
          border-color: #F5B700;
        }

        .text-center-card .dish-card-caption {
          padding: 24px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .dish-origin-tag {
          font-size: 0.78rem;
          font-weight: 700;
          color: #B58400;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          display: block;
          margin-bottom: 8px;
          text-align: center;
        }

        .dish-name-heading {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-weight: 700;
          color: #111111;
          line-height: 1.35;
          margin: 0 0 10px 0;
          text-align: center;
        }

        .dish-name-desc {
          font-family: var(--font-body);
          font-size: 0.92rem;
          color: #666666;
          line-height: 1.55;
          margin: 0;
          text-align: center;
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
            width: 100%;
            max-width: 280px;
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
