import React from 'react';
import { ArrowRight, Sparkles, ChefHat } from 'lucide-react';

interface EditorialHeroProps {
  navigate: (route: string) => void;
}

export const EditorialHero: React.FC<EditorialHeroProps> = ({ navigate }) => {
  return (
    <section className="editorial-hero">
      {/* Background Kolam Linework Pattern */}
      <div className="hero-kolam-backdrop" aria-hidden="true">
        <svg viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-kolam-svg">
          {/* Symmetrical South Indian Pulli Kolam Loops */}
          <circle cx="400" cy="400" r="320" stroke="#FFD233" strokeWidth="1.2" strokeDasharray="6 4" opacity="0.35" />
          <circle cx="400" cy="400" r="240" stroke="#FFD233" strokeWidth="1.5" opacity="0.25" />
          <circle cx="400" cy="400" r="160" stroke="#FFD233" strokeWidth="1.2" strokeDasharray="4 4" opacity="0.4" />
          
          <path d="M400,80 C480,240 560,240 720,400 C560,560 480,560 400,720 C320,560 240,560 80,400 C240,240 320,240 400,80 Z" 
                stroke="#FFD233" strokeWidth="1.8" fill="none" opacity="0.3" />
          <path d="M400,160 C460,280 520,280 640,400 C520,520 460,520 400,640 C340,520 280,520 160,400 C280,280 340,280 400,160 Z" 
                stroke="#FFD233" strokeWidth="1.4" fill="none" opacity="0.35" />
        </svg>
      </div>

      <div className="container hero-container">
        {/* Cultural Tag Pill */}
        <div className="hero-pill-badge">
          <Sparkles size={14} className="hero-sparkle" />
          <span>FOOD • CULTURE • CONNECT</span>
        </div>

        {/* Reference C: Editorial headline with inline rounded food imagery */}
        <h1 className="hero-editorial-headline">
          The taste of{' '}
          <span className="inline-food-capsule inline-food-idli" title="Malli Poo Idli">
            <img src="/brand/plate-idli.png" alt="Steamed Jasmine Idli" />
          </span>{' '}
          home,
          <br className="headline-break" />
          wherever life{' '}
          <span className="inline-food-capsule inline-food-biryani" title="Handi Dum Biryani">
            <img src="/brand/plate-biryani.png" alt="Handi Dum Biryani" />
          </span>{' '}
          takes you.
        </h1>

        {/* Narrative Subtitle */}
        <p className="hero-narrative-copy">
          FEAzTO bridges the emotional nostalgia of regional home recipes with modern cloud-kitchen precision. Discover authentic dishes from verified FoodPreneurs, prepared with heirloom methods and delivered with unwavering hygiene.
        </p>

        {/* CTAs */}
        <div className="hero-actions-group">
          <button 
            type="button" 
            onClick={() => navigate('/discover')}
            className="btn btn-yellow hero-primary-btn"
          >
            <span>Explore Regional Flavours</span>
            <ArrowRight size={18} />
          </button>

          <button 
            type="button" 
            onClick={() => navigate('/our-story')}
            className="btn btn-outline hero-secondary-btn"
          >
            <ChefHat size={18} />
            <span>Our Heritage Story</span>
          </button>
        </div>

        {/* Supporting Verified Labels */}
        <div className="hero-supporting-labels">
          <div className="support-label-item">
            <span className="label-dot" />
            <span>FSSAI Hygiene Audited</span>
          </div>
          <div className="support-label-separator">•</div>
          <div className="support-label-item">
            <span className="label-dot" />
            <span>Certified FoodPreneurs</span>
          </div>
          <div className="support-label-separator">•</div>
          <div className="support-label-item">
            <span className="label-dot" />
            <span>Zero Preservative Kitchens</span>
          </div>
        </div>
      </div>

      <style>{`
        .editorial-hero {
          position: relative;
          padding-top: 90px;
          padding-bottom: 100px;
          background-color: var(--color-warm-white);
          overflow: hidden;
          text-align: center;
        }

        .hero-kolam-backdrop {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 820px;
          height: 820px;
          pointer-events: none;
          z-index: 0;
          animation: slowKolamRotate 80s linear infinite;
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
          gap: 8px;
          padding: 8px 20px;
          background: #FFFFFF;
          border: 1.5px solid rgba(255, 210, 51, 0.7);
          box-shadow: 0 4px 14px rgba(255, 210, 51, 0.18);
          border-radius: var(--radius-capsule);
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: #8C6500;
          margin-bottom: 28px;
        }

        .hero-sparkle {
          color: #D49B00;
        }

        .hero-editorial-headline {
          font-size: clamp(2.4rem, 5.8vw, 4.4rem);
          font-weight: 800;
          color: var(--color-ink-black);
          line-height: 1.22;
          letter-spacing: -0.03em;
          max-width: 960px;
          margin-bottom: 28px;
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
          width: clamp(52px, 7vw, 84px);
          height: clamp(34px, 4.5vw, 52px);
          margin: 0 8px;
        }

        .inline-food-biryani {
          width: clamp(58px, 7.5vw, 92px);
          height: clamp(36px, 4.8vw, 56px);
          margin: 0 8px;
        }

        .inline-food-capsule img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .hero-narrative-copy {
          font-size: clamp(1.05rem, 2vw, 1.25rem);
          color: var(--color-text-secondary);
          max-width: 720px;
          line-height: 1.7;
          margin-bottom: 40px;
          font-weight: 400;
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
          background: #FFFFFF;
        }

        .hero-supporting-labels {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
          justify-content: center;
          padding-top: 16px;
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
