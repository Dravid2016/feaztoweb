import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

interface EditorialHeroProps {
  navigate: (route: string) => void;
}

export const EditorialHero: React.FC<EditorialHeroProps> = ({ navigate }) => {
  const verifiedCities = ['Bengaluru', 'Mysuru', 'Hyderabad', 'Chennai', 'Coimbatore', 'Kochi'];

  return (
    <section className="editorial-hero">
      {/* Symmetrical South Indian Pulli Kolam Radial Background */}
      <div className="hero-kolam-backdrop" aria-hidden="true">
        <svg viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-kolam-svg">
          <circle cx="400" cy="400" r="340" stroke="#FFD233" strokeWidth="1" strokeDasharray="6 4" opacity="0.3" />
          <circle cx="400" cy="400" r="260" stroke="#FFD233" strokeWidth="1.2" opacity="0.25" />
          <circle cx="400" cy="400" r="180" stroke="#FFD233" strokeWidth="1.2" strokeDasharray="4 4" opacity="0.35" />
          <path d="M400,60 C480,220 580,220 740,400 C580,580 480,580 400,740 C320,580 220,580 60,400 C220,220 320,220 400,60 Z" 
                stroke="#FFD233" strokeWidth="1.8" fill="none" opacity="0.25" />
          <path d="M400,140 C460,260 540,260 660,400 C540,540 460,540 400,660 C340,540 260,540 140,400 C260,260 340,260 400,140 Z" 
                stroke="#FFD233" strokeWidth="1.4" fill="none" opacity="0.3" />
        </svg>
      </div>

      <div className="container hero-container">
        {/* Plenti-Style Pill Trust Badge */}
        <div className="hero-pill-badge">
          <span className="live-pulse-dot" />
          <span>FOOD • CULTURE • CONNECT — Home food with cloud-kitchen precision</span>
        </div>

        {/* Reference C: Plenti-Style Editorial Headline with Inline Rounded Food Capsules */}
        <h1 className="hero-editorial-headline">
          The taste of{' '}
          <span className="inline-food-capsule inline-food-idli" title="Stone Ground Jasmine Idli">
            <img src="/brand/plate-idli.png" alt="Malli Poo Idli" />
          </span>{' '}
          home,
          <br className="headline-break" />
          wherever life{' '}
          <span className="inline-food-capsule inline-food-biryani" title="Seeraga Samba Dum Biryani">
            <img src="/brand/plate-biryani.png" alt="Dum Biryani" />
          </span>{' '}
          takes you.
        </h1>

        {/* Narrative Subtitle */}
        <p className="hero-narrative-copy">
          Discover authentic regional flavours and heirloom home kitchens. We empower certified FoodPreneurs with modern food safety audits, cloud infrastructure, and doorstep precision delivery.
        </p>

        {/* Plenti-Inspired Live City Badges */}
        <div className="hero-cities-ticker">
          <span className="cities-label">Ecosystem Clusters:</span>
          <div className="cities-pills">
            {verifiedCities.map((city, idx) => (
              <span key={city} className={`city-chip ${idx === 0 ? 'active' : ''}`}>
                {idx === 0 && <span className="city-active-dot" />}
                {city}
              </span>
            ))}
          </div>
        </div>

        {/* Dual Actions Group (Plenti Style) */}
        <div className="hero-actions-group">
          <button 
            type="button" 
            onClick={() => navigate('/download')}
            className="btn btn-yellow hero-primary-btn"
          >
            <span>Download Early Access</span>
            <ArrowRight size={18} />
          </button>

          <button 
            type="button" 
            onClick={() => navigate('/our-story')}
            className="btn btn-white hero-secondary-btn"
          >
            <Play size={16} fill="currentColor" />
            <span>Discover The Story</span>
          </button>
        </div>

        {/* Supporting Verified Trust Badges */}
        <div className="hero-supporting-labels">
          <div className="support-label-item">
            <span className="label-dot" />
            <span>FSSAI Hygiene Audited Kitchens</span>
          </div>
          <div className="support-label-separator">•</div>
          <div className="support-label-item">
            <span className="label-dot" />
            <span>Verified Generational FoodPreneurs</span>
          </div>
          <div className="support-label-separator">•</div>
          <div className="support-label-item">
            <span className="label-dot" />
            <span>100% Zero Synthetic Additives</span>
          </div>
        </div>
      </div>

      <style>{`
        .editorial-hero {
          position: relative;
          padding-top: 88px;
          padding-bottom: 104px;
          background-color: var(--color-warm-white);
          overflow: hidden;
          text-align: center;
        }

        .hero-kolam-backdrop {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 860px;
          height: 860px;
          pointer-events: none;
          z-index: 0;
          animation: slowKolamRotate 90s linear infinite;
        }

        @keyframes slowKolamRotate {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }

        .hero-kolam-svg {
          width: 100%;
          height: 100%;
        }

        .hero-container {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .hero-pill-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 8px 22px;
          background: #FFFFFF;
          border: 1.5px solid rgba(255, 210, 51, 0.7);
          box-shadow: 0 4px 16px rgba(255, 210, 51, 0.18);
          border-radius: var(--radius-capsule);
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: #8C6500;
          margin-bottom: 28px;
        }

        .live-pulse-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #2E7D32;
          box-shadow: 0 0 8px rgba(46, 125, 50, 0.8);
          animation: pulseGlow 2s infinite;
        }

        @keyframes pulseGlow {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.3); opacity: 0.7; }
        }

        .hero-editorial-headline {
          font-size: clamp(2.4rem, 5.6vw, 4.3rem);
          font-weight: 800;
          color: var(--color-ink-black);
          line-height: 1.22;
          letter-spacing: -0.03em;
          max-width: 980px;
          margin-bottom: 24px;
        }

        .inline-food-capsule {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          vertical-align: middle;
          border-radius: 9999px;
          overflow: hidden;
          background: #FFFFFF;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
          border: 2.5px solid var(--color-brand-yellow);
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease;
          cursor: pointer;
        }

        .inline-food-capsule:hover {
          transform: scale(1.12) rotate(2deg);
          box-shadow: 0 14px 30px rgba(0, 0, 0, 0.18);
        }

        .inline-food-idli {
          width: clamp(54px, 7vw, 86px);
          height: clamp(34px, 4.5vw, 54px);
          margin: 0 8px;
        }

        .inline-food-biryani {
          width: clamp(60px, 7.5vw, 94px);
          height: clamp(36px, 4.8vw, 56px);
          margin: 0 8px;
        }

        .inline-food-capsule img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .hero-narrative-copy {
          font-size: clamp(1.05rem, 1.8vw, 1.25rem);
          color: var(--color-text-secondary);
          max-width: 720px;
          line-height: 1.7;
          margin-bottom: 32px;
          font-weight: 400;
        }

        /* Cities Ticker */
        .hero-cities-ticker {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 36px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .cities-label {
          font-size: 0.78rem;
          font-weight: 700;
          color: #777777;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        .cities-pills {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .city-chip {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 4px 12px;
          border-radius: var(--radius-capsule);
          background: #FFFFFF;
          border: 1px solid rgba(0, 0, 0, 0.08);
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--color-text-secondary);
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.02);
        }

        .city-chip.active {
          border-color: rgba(255, 210, 51, 0.8);
          color: var(--color-ink-black);
          background: #FFFDF5;
          font-weight: 700;
        }

        .city-active-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #2E7D32;
        }

        .hero-actions-group {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 48px;
        }

        .hero-primary-btn {
          padding: 16px 36px;
          font-size: 1.02rem;
        }

        .hero-secondary-btn {
          padding: 16px 32px;
          font-size: 1.02rem;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
        }

        .hero-supporting-labels {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
          justify-content: center;
          padding-top: 20px;
          border-top: 1px solid rgba(0, 0, 0, 0.07);
        }

        .support-label-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--color-text-secondary);
        }

        .label-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: var(--color-brand-yellow);
        }

        .support-label-separator {
          color: rgba(0, 0, 0, 0.2);
        }

        @media (max-width: 640px) {
          .headline-break {
            display: inline;
          }
          .hero-supporting-labels {
            gap: 10px;
          }
          .support-label-separator {
            display: none;
          }
          .support-label-item {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};
