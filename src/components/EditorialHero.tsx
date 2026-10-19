import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

interface EditorialHeroProps {
  navigate: (route: string) => void;
}

export const EditorialHero: React.FC<EditorialHeroProps> = ({ navigate }) => {
  return (
    <div className="feazto-master-wrapper">
      {/* ── TOP HERO SECTION ── */}
      <section className="feazto-hero-section">
        {/* Subtle warm parchment texture overlay */}
        <div className="parchment-glow-layer" aria-hidden="true" />

        {/* Floating spice leaves and ingredient cutouts */}
        <div className="floating-ingredients-layer" aria-hidden="true">
          <img 
            src="/assets/cutout-curry-leaves.png" 
            alt="" 
            className="leaf-float leaf-float-1" 
          />
          <img 
            src="/assets/cutout-red-chilies.png" 
            alt="" 
            className="leaf-float leaf-float-2" 
          />
          <img 
            src="/assets/cutout-tulsi-herb.png" 
            alt="" 
            className="leaf-float leaf-float-3" 
          />
        </div>

        <div className="hero-grid-container">
          {/* ── LEFT COLUMN: EDITORIAL TYPOGRAPHY & CTAs ── */}
          <div className="hero-text-column">
            {/* Cultural Eyebrow with Yellow Diamond Kolam Motif */}
            <div className="hero-eyebrow-wrapper">
              <span className="eyebrow-kolam-icon" aria-hidden="true">
                <img src="/assets/kolam-diamond.svg" alt="" width="26" height="26" />
              </span>
              <span className="eyebrow-text">
                REGIONAL FOOD <span className="eyebrow-spark">✦</span> HOME KITCHENS <span className="eyebrow-spark">✦</span> CULTURE
              </span>
            </div>

            {/* Left-Aligned Master Headline with Food Capsule inside 'home' */}
            <h1 className="hero-display-headline">
              <span className="headline-block">The taste of</span>
              <span className="headline-block headline-middle-row">
                <span className="letter-h">h</span>
                <span className="home-food-capsule" title="Traditional South Indian Curry">
                  <img 
                    src="/assets/food-capsule-home-circle.png" 
                    alt="Authentic coastal curry" 
                    className="capsule-dish-img"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/assets/food-dish-coastal-curry-hd.jpg';
                    }}
                  />
                </span>
                <span className="letters-me">me, wherever</span>
              </span>
              <span className="headline-block">life takes you.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="hero-subparagraph">
              Discover the regional flavours, home kitchens and food traditions that bring people closer to what feels like home.
            </p>

            {/* Two Aligned CTA Buttons */}
            <div className="hero-cta-group">
              <button 
                type="button" 
                onClick={() => navigate('/discover')}
                className="hero-primary-btn"
              >
                <span>Explore Food</span>
                <ArrowRight size={18} className="btn-arrow-motion" />
              </button>

              <button 
                type="button" 
                onClick={() => navigate('/our-story')}
                className="hero-secondary-btn"
              >
                <span>Our Story</span>
                <span className="play-circle-bubble">
                  <Play size={10} fill="#111111" strokeWidth={0} />
                </span>
              </button>
            </div>

            {/* Decorative Diamond Kolam Accent (Mid-Left area under CTAs as seen in mockup) */}
            <div className="hero-accent-kolam" aria-hidden="true">
              <img src="/assets/kolam-diamond.svg" alt="" width="52" height="52" />
            </div>
          </div>

          {/* ── RIGHT COLUMN: PAINTERLY SOUTH INDIAN KITCHEN ARTWORK ── */}
          <div className="hero-artwork-column">
            <div className="painterly-scene-container">
              {/* Arched Organic Mask / Background Canvas */}
              <div className="scene-artwork-wrapper">
                <img 
                  src="/assets/hero-kitchen-scene.jpg" 
                  alt="South Indian home kitchen with woman cooking over traditional stove, temple river background" 
                  className="painterly-kitchen-img"
                />
              </div>

              {/* Vertical Kolam Garland on the far right edge (from reference) */}
              <div className="hero-right-kolam-spine" aria-hidden="true">
                <img src="/assets/kolam-vertical-chain.svg" alt="" width="26" height="110" />
              </div>
            </div>
          </div>
        </div>

        {/* ── ORGANIC CURVED BOTTOM TRANSITION WITH TURMERIC YELLOW SHAPE ── */}
        <div className="hero-organic-curved-bottom" aria-hidden="true">
          <svg 
            viewBox="0 0 1440 180" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="curved-boundary-svg"
          >
            {/* Turmeric Yellow Flowing Accent Ribbon on Left (matching reference) */}
            <path 
              d="M0,80 C180,70 320,130 460,135 C620,140 920,80 1440,110 L1440,180 L0,180 Z" 
              fill="#F5B700" 
              opacity="0.3"
            />
            <path 
              d="M0,105 C140,85 280,120 440,140 C600,160 880,105 1440,125 L1440,180 L0,180 Z" 
              fill="#F5B700" 
              opacity="0.55"
            />
            {/* Warm Ivory / Light Cream lower fill blending into the regional food section */}
            <path 
              d="M0,125 C160,115 320,135 480,150 C680,170 940,115 1440,145 L1440,180 L0,180 Z" 
              fill="#FAFAFA" 
            />
          </svg>

          {/* Central Kolam Diamond on the organic wave curve boundary */}
          <div className="wave-center-kolam" aria-hidden="true">
            <img src="/assets/kolam-diamond.svg" alt="" width="38" height="38" />
          </div>
        </div>
      </section>

      {/* ── PHASE 6: REBUILT REGIONAL FOOD SECTION ── */}
      <section className="regional-flavours-preview-section">
        <div className="container regional-preview-container">
          {/* Eyebrow, Heading & Supporting copy (Left-aligned & beautifully spaced) */}
          <div className="regional-preview-header">
            <span className="regional-preview-eyebrow">EXPLORE REGIONAL FLAVOURS</span>
            <h2 className="regional-preview-heading">A world of authentic tastes</h2>
            <p className="regional-preview-copy">
              From fiery coastal curries to comforting home-style meals, explore the rich and diverse flavours of India — one region at a time.
            </p>
          </div>

          {/* 3 Carefully Aligned Food Images with Consistent Crops & Rounded Corners */}
          <div className="regional-preview-grid">
            {/* Dish 1: Coastal Curry */}
            <div className="food-preview-card" onClick={() => navigate('/discover')}>
              <div className="food-image-frame">
                <img 
                  src="/assets/food-dish-coastal-curry-hd.jpg" 
                  alt="Coastal Fish & Coconut Curry on Banana Leaf" 
                  className="preview-dish-img"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/dish-coastal-curry.jpg';
                  }}
                />
              </div>
              <div className="food-card-caption">
                <span className="dish-region-tag">Coastal Heritage</span>
                <h4 className="dish-title">Fiery Coastal Curry</h4>
                <p className="dish-snippet">Slow-simmered kokum, stone-ground coconut paste, and coastal temperings.</p>
              </div>
            </div>

            {/* Dish 2: Ghee Dosa */}
            <div className="food-preview-card" onClick={() => navigate('/discover')}>
              <div className="food-image-frame">
                <img 
                  src="/assets/food-dish-ghee-dosa-hd.jpg" 
                  alt="Crispy Golden Ghee Roast Dosa with Chutneys" 
                  className="preview-dish-img"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/dish-ghee-dosa.jpg';
                  }}
                />
              </div>
              <div className="food-card-caption">
                <span className="dish-region-tag">South Traditions</span>
                <h4 className="dish-title">Crisp Ghee Roast Dosa</h4>
                <p className="dish-snippet">Cast-iron seasoned crisps, fresh fermented batters, and roasted chutneys.</p>
              </div>
            </div>

            {/* Dish 3: Spiced Rice */}
            <div className="food-preview-card" onClick={() => navigate('/discover')}>
              <div className="food-image-frame">
                <img 
                  src="/assets/food-dish-spiced-rice-hd.jpg" 
                  alt="Traditional Spiced Rice / Dum Biryani in Clay Handi" 
                  className="preview-dish-img"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/dish-dum-biryani.jpg';
                  }}
                />
              </div>
              <div className="food-card-caption">
                <span className="dish-region-tag">Deccani Spice</span>
                <h4 className="dish-title">Clay Pot Spiced Biryani</h4>
                <p className="dish-snippet">Dough-sealed handis, saffron strands, and aromatic aged long grains.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STYLES MATCHING THE EXACT MOCKUP COMPOSITION ── */}
      <style>{`
        .feazto-master-wrapper {
          position: relative;
          background-color: #F8F5EE;
          overflow: hidden;
        }

        /* ── HERO SECTION ── */
        .feazto-hero-section {
          position: relative;
          min-height: 640px;
          background: linear-gradient(175deg, #F9F5EC 0%, #F8F3E5 40%, #F5EECF 100%);
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-top: 48px;
          padding-bottom: 110px;
          box-sizing: border-box;
          overflow: hidden;
        }

        .parchment-glow-layer {
          position: absolute;
          inset: 0;
          background-image: 
            radial-gradient(circle at 75% 35%, rgba(245, 183, 0, 0.18) 0%, transparent 60%),
            radial-gradient(circle at 10% 20%, rgba(255, 235, 140, 0.25) 0%, transparent 50%),
            radial-gradient(circle at 25% 80%, rgba(226, 109, 45, 0.08) 0%, transparent 50%);
          pointer-events: none;
          z-index: 1;
        }

        /* Floating Ingredients */
        .floating-ingredients-layer {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 2;
          overflow: hidden;
        }

        .leaf-float {
          position: absolute;
          opacity: 0.85;
          filter: drop-shadow(0 6px 12px rgba(0, 0, 0, 0.08));
          transition: transform 0.6s ease;
        }

        .leaf-float-1 {
          top: 36%;
          left: 1.5%;
          width: 58px;
          transform: rotate(-18deg);
        }

        .leaf-float-2 {
          top: 60%;
          left: 0.8%;
          width: 62px;
          transform: rotate(32deg);
        }

        .leaf-float-3 {
          top: 68%;
          left: 31%;
          width: 48px;
          transform: rotate(-12deg);
        }

        /* 2-Column Hero Grid */
        .hero-grid-container {
          position: relative;
          z-index: 3;
          max-width: 1380px;
          width: 100%;
          margin: 0 auto;
          padding: 0 clamp(24px, 4vw, 56px);
          display: grid;
          grid-template-columns: 1.05fr 1fr;
          align-items: center;
          gap: clamp(24px, 4vw, 56px);
          box-sizing: border-box;
        }

        /* ── LEFT COLUMN ── */
        .hero-text-column {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
          position: relative;
        }

        .hero-eyebrow-wrapper {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 22px;
        }

        .eyebrow-kolam-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .eyebrow-text {
          font-family: var(--font-body);
          font-size: 0.84rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          color: #333333;
          text-transform: uppercase;
        }

        .eyebrow-spark {
          color: #F5B700;
          margin: 0 4px;
        }

        /* Large Bold Left-Aligned Headline */
        .hero-display-headline {
          font-family: var(--font-heading);
          font-size: clamp(2.8rem, 4.8vw, 4.4rem);
          font-weight: 800;
          color: #111111;
          line-height: 1.12;
          letter-spacing: -0.035em;
          margin: 0 0 22px 0;
          text-align: left;
        }

        .headline-block {
          display: block;
        }

        .headline-middle-row {
          display: inline-flex;
          align-items: center;
          flex-wrap: nowrap;
          gap: 0;
        }

        .letter-h {
          display: inline;
        }

        /* Food Capsule inside 'home' */
        .home-food-capsule {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: clamp(52px, 6.4vw, 76px);
          height: clamp(36px, 4.4vw, 52px);
          margin: 0 4px;
          border-radius: 9999px;
          background: #FFFFFF;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.16);
          border: 2px solid #F5B700;
          overflow: hidden;
          vertical-align: middle;
          cursor: pointer;
          flex-shrink: 0;
          transition: transform 0.24s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.24s ease;
        }

        .home-food-capsule:hover {
          transform: scale(1.1) rotate(3deg);
          box-shadow: 0 10px 24px rgba(245, 183, 0, 0.35);
        }

        .capsule-dish-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .letters-me {
          display: inline;
          margin-left: 2px;
        }

        /* Supporting Copy */
        .hero-subparagraph {
          font-family: var(--font-body);
          font-size: clamp(1rem, 1.25vw, 1.15rem);
          font-weight: 400;
          line-height: 1.65;
          color: #555555;
          max-width: 500px;
          margin: 0 0 34px 0;
        }

        /* CTA Buttons */
        .hero-cta-group {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .hero-primary-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 15px 34px;
          border-radius: 9999px;
          background-color: #F5B700;
          color: #111111;
          font-family: var(--font-body);
          font-size: 0.98rem;
          font-weight: 700;
          border: 1px solid #E5AA00;
          box-shadow: 0 6px 20px rgba(245, 183, 0, 0.35);
          cursor: pointer;
          transition: transform 0.22s ease, box-shadow 0.22s ease, background-color 0.22s ease;
        }

        .hero-primary-btn:hover {
          background-color: #E2A600;
          transform: translateY(-2px);
          box-shadow: 0 10px 26px rgba(245, 183, 0, 0.45);
        }

        .btn-arrow-motion {
          transition: transform 0.2s ease;
        }

        .hero-primary-btn:hover .btn-arrow-motion {
          transform: translateX(4px);
        }

        .hero-secondary-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 14px 28px;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(8px);
          color: #111111;
          font-family: var(--font-body);
          font-size: 0.96rem;
          font-weight: 600;
          border: 1.5px solid rgba(17, 17, 17, 0.25);
          cursor: pointer;
          transition: transform 0.22s ease, background 0.22s ease, border-color 0.22s ease;
        }

        .hero-secondary-btn:hover {
          background: #FFFFFF;
          border-color: #111111;
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
        }

        .play-circle-bubble {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          border: 1.5px solid #111111;
          margin-left: 2px;
        }

        /* Decorative Diamond Kolam under CTAs */
        .hero-accent-kolam {
          margin-top: 36px;
          margin-left: 140px;
          opacity: 0.85;
          animation: floatGently 6s ease-in-out infinite;
        }

        @keyframes floatGently {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }

        /* ── RIGHT COLUMN: ARTWORK ── */
        .hero-artwork-column {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }

        .painterly-scene-container {
          position: relative;
          width: 100%;
          max-width: 660px;
          border-radius: 36px;
          overflow: visible;
        }

        .scene-artwork-wrapper {
          position: relative;
          width: 100%;
          height: auto;
          border-radius: 28px;
          overflow: hidden;
          box-shadow: 0 20px 48px rgba(88, 48, 10, 0.14);
          border: 2px solid rgba(245, 183, 0, 0.35);
        }

        .painterly-kitchen-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease;
        }

        .scene-artwork-wrapper:hover .painterly-kitchen-img {
          transform: scale(1.02);
        }

        .hero-right-kolam-spine {
          position: absolute;
          top: 10px;
          right: -32px;
          opacity: 0.9;
          pointer-events: none;
        }

        /* ── ORGANIC CURVED BOTTOM TRANSITION ── */
        .hero-organic-curved-bottom {
          position: absolute;
          bottom: -1px;
          left: 0;
          right: 0;
          width: 100%;
          height: 130px;
          z-index: 4;
          pointer-events: none;
          line-height: 0;
        }

        .curved-boundary-svg {
          width: 100%;
          height: 100%;
          display: block;
        }

        .wave-center-kolam {
          position: absolute;
          bottom: 18px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 5;
          pointer-events: none;
        }

        /* ── PHASE 6: REGIONAL FOOD PREVIEW SECTION ── */
        .regional-flavours-preview-section {
          position: relative;
          background-color: #FAFAFA;
          padding-top: 24px;
          padding-bottom: 80px;
          z-index: 5;
        }

        .regional-preview-container {
          max-width: 1360px;
          margin: 0 auto;
          padding: 0 clamp(20px, 4vw, 48px);
        }

        .regional-preview-header {
          max-width: 580px;
          margin-bottom: 38px;
          text-align: left;
        }

        .regional-preview-eyebrow {
          display: block;
          font-family: var(--font-body);
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          color: #B58400;
          text-transform: uppercase;
          margin-bottom: 8px;
        }

        .regional-preview-heading {
          font-family: var(--font-heading);
          font-size: clamp(2rem, 3.2vw, 2.7rem);
          font-weight: 800;
          color: #111111;
          line-height: 1.2;
          letter-spacing: -0.025em;
          margin: 0 0 14px 0;
        }

        .regional-preview-copy {
          font-family: var(--font-body);
          font-size: 1.02rem;
          color: #555555;
          line-height: 1.65;
          margin: 0;
        }

        /* 3 Carefully Aligned Food Cards */
        .regional-preview-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: clamp(20px, 2.8vw, 32px);
          width: 100%;
        }

        .food-preview-card {
          background: #FFFFFF;
          border-radius: 24px;
          overflow: hidden;
          border: 1.5px solid rgba(245, 183, 0, 0.28);
          box-shadow: 0 10px 28px rgba(0, 0, 0, 0.06);
          cursor: pointer;
          transition: transform 0.28s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.28s ease, border-color 0.28s ease;
          display: flex;
          flex-direction: column;
        }

        .food-preview-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 38px rgba(245, 183, 0, 0.22);
          border-color: #F5B700;
        }

        .food-image-frame {
          position: relative;
          width: 100%;
          height: 220px;
          overflow: hidden;
          background-color: #F8F5EE;
        }

        .preview-dish-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease;
        }

        .food-preview-card:hover .preview-dish-img {
          transform: scale(1.05);
        }

        .food-card-caption {
          padding: 22px 22px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        .dish-region-tag {
          font-size: 0.78rem;
          font-weight: 700;
          color: #B58400;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          display: block;
          margin-bottom: 6px;
        }

        .dish-title {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-weight: 700;
          color: #111111;
          line-height: 1.35;
          margin: 0 0 8px 0;
        }

        .dish-snippet {
          font-family: var(--font-body);
          font-size: 0.92rem;
          color: #666666;
          line-height: 1.55;
          margin: 0;
        }

        /* ── RESPONSIVE DESIGN ── */
        @media (max-width: 1080px) {
          .hero-grid-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .hero-artwork-column {
            justify-content: center;
          }
          .hero-right-kolam-spine {
            display: none;
          }
          .hero-accent-kolam {
            margin-left: 0;
          }
        }

        @media (max-width: 768px) {
          .feazto-hero-section {
            padding-top: 36px;
            padding-bottom: 90px;
          }
          .hero-display-headline {
            font-size: 2.3rem;
            line-height: 1.15;
          }
          .hero-subparagraph {
            font-size: 0.98rem;
            margin-bottom: 26px;
          }
          .hero-cta-group {
            flex-direction: column;
            width: 100%;
            gap: 12px;
          }
          .hero-primary-btn, .hero-secondary-btn {
            width: 100%;
            max-width: 320px;
          }
          .regional-preview-grid {
            grid-template-columns: 1fr;
          }
          .floating-ingredients-layer {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};
