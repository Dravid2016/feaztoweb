import React from 'react';

interface CurvedAppShowcaseProps {
  navigate: (route: string) => void;
}

export const CurvedAppShowcase: React.FC<CurvedAppShowcaseProps> = ({ navigate }) => {
  return (
    <section className="curved-showcase-section">
      <div className="curved-showcase-container">
        {/* Plenti-Style Centered Header Section */}
        <div className="plenti-hero-header">
          <div className="plenti-badge-pill">
            <span className="pulsing-green-dot" />
            <span>Trusted by 2.5 Lakh Food Lovers • Live in 6 Cities</span>
          </div>

          <h2 className="plenti-master-headline">
            FEAzTO, India's First Home-Kitchen & Regional Food Ecosystem
          </h2>

          <p className="plenti-master-subcopy">
            Discover authentic generational recipes, comforting home-cooked meals, and verified cloud kitchens with transparent hygiene scores.
          </p>

          {/* Regional Cities Filter Pills */}
          <div className="plenti-cities-pill-row">
            <span className="city-pill">Trivandrum</span>
            <span className="city-pill">Kochi</span>
            <span className="city-pill active">Kozhikode</span>
            <span className="city-pill">Bengaluru</span>
            <span className="city-pill">Chennai</span>
          </div>

          {/* Action CTAs */}
          <div className="plenti-hero-actions">
            <button 
              type="button" 
              onClick={() => navigate('/download')}
              className="plenti-primary-btn"
            >
              <span>Download Now</span>
            </button>
            <button 
              type="button" 
              onClick={() => navigate('/our-story')}
              className="plenti-secondary-btn"
            >
              <span className="plenti-play-icon">▶</span>
              <span>Watch Story</span>
            </button>
          </div>
        </div>

        {/* Real FEAzTO Mobile Model Placed Overlapping the Curved Boundary */}
        <div className="plenti-phone-wrapper">
          <div className="plenti-phone-model-container">
            <img 
              src="/brand/feazto-mobile-banner.png" 
              alt="FEAzTO Mobile App - Taste Real India" 
              className="feazto-phone-device-img" 
            />
            {/* Soft Ambient Glow matching the Plenti hero lighting */}
            <div className="plenti-ambient-glow" />
          </div>
        </div>
      </div>

      {/* Curved White Bottom Arc into next section */}
      <div className="plenti-curved-boundary">
        <svg viewBox="0 0 1440 160" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,80 Q720,0 1440,80 L1440,160 L0,160 Z" fill="#FFFDF7" />
        </svg>
      </div>

      <style>{`
        .curved-showcase-section {
          position: relative;
          background: radial-gradient(circle at 50% 35%, #591ab8 0%, #300d75 35%, #18053d 70%, #0e0224 100%);
          color: #FAFAFA;
          padding-top: 80px;
          padding-bottom: 0px;
          overflow: hidden;
        }

        .curved-showcase-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
          z-index: 2;
        }

        /* Plenti Hero Centered Content */
        .plenti-hero-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          max-width: 900px;
          margin: 0 auto 36px auto;
        }

        .plenti-badge-pill {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 7px 18px;
          border-radius: 9999px;
          font-size: 0.86rem;
          font-weight: 500;
          color: #F0EDF9;
          margin-bottom: 22px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        }

        .pulsing-green-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #22C55E;
          box-shadow: 0 0 10px #22C55E;
          animation: pulseGreen 2s infinite ease-in-out;
        }

        @keyframes pulseGreen {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.3); opacity: 0.7; }
        }

        .plenti-master-headline {
          font-size: clamp(2.3rem, 5vw, 4rem);
          font-weight: 800;
          line-height: 1.14;
          letter-spacing: -0.03em;
          color: #FFFFFF;
          margin: 0 0 18px 0;
          max-width: 920px;
          text-shadow: 0 2px 16px rgba(0, 0, 0, 0.3);
        }

        .plenti-master-subcopy {
          font-size: clamp(1rem, 1.8vw, 1.2rem);
          color: #D3CCE8;
          line-height: 1.6;
          max-width: 680px;
          margin: 0 0 24px 0;
          font-weight: 400;
        }

        /* City filter pills matching Plenti capsule bar */
        .plenti-cities-pill-row {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 6px;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          padding: 5px 8px;
          border-radius: 9999px;
          margin-bottom: 28px;
        }

        .city-pill {
          font-size: 0.8rem;
          font-weight: 500;
          color: #E2DAF5;
          padding: 6px 14px;
          border-radius: 9999px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .city-pill:hover {
          color: #FFFFFF;
          background: rgba(255, 255, 255, 0.12);
        }

        .city-pill.active {
          background: rgba(255, 255, 255, 0.24);
          color: #FFFFFF;
          font-weight: 700;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        }

        /* Action Buttons */
        .plenti-hero-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        .plenti-primary-btn {
          background: #FFFFFF;
          color: #1A083B;
          border: none;
          font-size: 0.96rem;
          font-weight: 700;
          padding: 12px 28px;
          border-radius: 9999px;
          cursor: pointer;
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.2);
          transition: all 0.25s ease;
        }

        .plenti-primary-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 28px rgba(0, 0, 0, 0.28);
          background: #FFFDF7;
        }

        .plenti-secondary-btn {
          background: rgba(255, 255, 255, 0.14);
          color: #FFFFFF;
          border: 1px solid rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          font-size: 0.96rem;
          font-weight: 600;
          padding: 12px 26px;
          border-radius: 9999px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.25s ease;
        }

        .plenti-secondary-btn:hover {
          background: rgba(255, 255, 255, 0.22);
          transform: translateY(-2px);
        }

        .plenti-play-icon {
          font-size: 0.76rem;
          display: inline-block;
        }

        /* Plenti Phone Model Wrapper - Overlaps curved boundary */
        .plenti-phone-wrapper {
          position: relative;
          width: 100%;
          display: flex;
          justify-content: center;
          margin-top: 10px;
          margin-bottom: -100px; /* Key Plenti overlap into bottom arc */
          z-index: 5;
        }

        .plenti-phone-model-container {
          position: relative;
          width: 100%;
          max-width: 440px;
          display: flex;
          justify-content: center;
        }

        .feazto-phone-device-img {
          width: 100%;
          height: auto;
          display: block;
          filter: drop-shadow(0 25px 50px rgba(0, 0, 0, 0.55));
          position: relative;
          z-index: 2;
          transition: transform 0.4s ease;
        }

        .feazto-phone-device-img:hover {
          transform: translateY(-4px) scale(1.01);
        }

        /* Plenti Ambient Glow behind phone */
        .plenti-ambient-glow {
          position: absolute;
          top: 35%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(138, 75, 255, 0.45) 0%, rgba(93, 31, 219, 0.18) 50%, transparent 75%);
          filter: blur(60px);
          z-index: 1;
          pointer-events: none;
        }

        /* Curved White Bottom Arc into Next Section */
        .plenti-curved-boundary {
          position: relative;
          width: 100%;
          line-height: 0;
          margin-top: -30px;
          z-index: 3;
          pointer-events: none;
        }

        .plenti-curved-boundary svg {
          width: 100%;
          height: 140px;
          display: block;
        }

        @media (max-width: 768px) {
          .curved-showcase-section {
            padding-top: 50px;
          }

          .plenti-master-headline {
            font-size: 2rem;
          }

          .plenti-phone-wrapper {
            margin-bottom: -60px;
          }

          .plenti-phone-model-container {
            max-width: 320px;
          }

          .plenti-curved-boundary svg {
            height: 90px;
          }
        }
      `}</style>
    </section>
  );
};
