import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Clock, MapPin } from 'lucide-react';

interface CurvedAppShowcaseProps {
  navigate: (route: string) => void;
}

export const CurvedAppShowcase: React.FC<CurvedAppShowcaseProps> = ({ navigate }) => {
  return (
    <section className="curved-showcase-section">
      {/* Curved Background Arc at top */}
      <div className="curved-boundary-shape">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,0 C480,110 960,110 1440,0 L1440,120 L0,120 Z" fill="#111111" />
        </svg>
      </div>

      <div className="dark-showcase-content">
        <div className="container showcase-grid-container">
          {/* Left Text Column */}
          <div className="showcase-info-col">
            <div className="badge-tag badge-tag-dark">
              <Sparkles size={13} />
              <span>FEAzTO Customer & Kitchen Apps</span>
            </div>

            <h2 className="showcase-headline">
              A bespoke digital experience designed for food discovery.
            </h2>

            <p className="showcase-body">
              Designed according to the FEAzTO UI/UX Architecture. Customers explore rich visual dish stories and transparent origins, while cloud kitchens manage live order transitions with sub-second responsiveness.
            </p>

            <div className="app-highlights-list">
              <div className="highlight-pill">
                <Clock size={16} />
                <span>Live Kitchen Preparation Timers</span>
              </div>
              <div className="highlight-pill">
                <MapPin size={16} />
                <span>Regional Provenance & Dish Heritage</span>
              </div>
              <div className="highlight-pill">
                <ShieldCheck size={16} />
                <span>Direct FSSAI Hygiene Audit Scores</span>
              </div>
            </div>

            <div className="showcase-actions">
              <button 
                type="button" 
                onClick={() => navigate('/download')}
                className="btn btn-yellow"
              >
                <span>Download Early Access</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Central Phone Mockup Overlapping the boundary (Reference E) */}
          <div className="central-phone-col">
            <div className="phone-mockup-wrapper">
              <div className="phone-device-frame">
                <div className="phone-notch">
                  <span className="notch-camera" />
                  <span className="notch-speaker" />
                </div>

                {/* In-app screen simulation based on UI/UX documentation */}
                <div className="phone-screen-content">
                  {/* App Header */}
                  <div className="app-screen-header">
                    <div className="app-screen-greeting">
                      <span className="user-greeting-label">Deliver to</span>
                      <strong className="user-delivery-loc">Bengaluru Central • 560001</strong>
                    </div>
                    <div className="app-screen-avatar">
                      <img src="/brand/feazto-logo.svg" alt="FEAzTO" />
                    </div>
                  </div>

                  {/* Active Order Card */}
                  <div className="app-screen-hero-card">
                    <div className="screen-badge">PREPARING FRESH</div>
                    <h5 className="screen-dish-name">Dum Biryani Handi</h5>
                    <p className="screen-dish-cook">by Padmavathi Rao (BTM Kitchen)</p>
                    <div className="screen-progress-bar">
                      <div className="screen-progress-fill" style={{ width: '68%' }} />
                    </div>
                    <div className="screen-timer-row">
                      <span>Slow dum cooking (12 mins left)</span>
                      <strong>68% Ready</strong>
                    </div>
                  </div>

                  {/* Curated Recommendations */}
                  <div className="app-screen-feed">
                    <div className="feed-heading-row">
                      <span>Curated For You</span>
                      <small>View All</small>
                    </div>

                    <div className="feed-mini-card">
                      <div className="feed-mini-img">
                        <img src="/brand/plate-idli.png" alt="Malli Poo Idli" />
                      </div>
                      <div className="feed-mini-info">
                        <h6>Malli Poo Idli & Medu Vada</h6>
                        <p>Kongu Nadu Heritage • Fresh Coconut Chutney</p>
                        <span className="feed-rating">★ 4.9 • 100% Home Fermented</span>
                      </div>
                    </div>

                    <div className="feed-mini-card">
                      <div className="feed-mini-img">
                        <img src="/brand/plate-samosa.png" alt="Potli Samosa" />
                      </div>
                      <div className="feed-mini-info">
                        <h6>Old Delhi Ajwain Samosa</h6>
                        <p>Awadhi Potli • Saunth Tamarind Dip</p>
                        <span className="feed-rating">★ 4.8 • Groundnut Oil Fried</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Soft glow behind phone */}
              <div className="phone-ambient-glow" />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .curved-showcase-section {
          position: relative;
          background-color: #111111;
          color: #FAFAFA;
          padding-bottom: 110px;
          overflow: hidden;
        }

        .curved-boundary-shape {
          width: 100%;
          line-height: 0;
          position: relative;
          top: -1px;
          background-color: var(--color-pure-white);
        }

        .curved-boundary-shape svg {
          width: 100%;
          height: 80px;
          display: block;
        }

        .dark-showcase-content {
          padding-top: 40px;
        }

        .showcase-grid-container {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .showcase-info-col {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .showcase-headline {
          font-size: clamp(2rem, 3.8vw, 3.2rem);
          font-weight: 800;
          color: #FFFFFF;
          margin-top: 18px;
          margin-bottom: 20px;
          line-height: 1.2;
          letter-spacing: -0.025em;
        }

        .showcase-body {
          font-size: 1.08rem;
          color: #B5B5B5;
          line-height: 1.7;
          margin-bottom: 32px;
        }

        .app-highlights-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-bottom: 40px;
          width: 100%;
        }

        .highlight-pill {
          display: flex;
          align-items: center;
          gap: 12px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 12px 18px;
          border-radius: var(--radius-md);
          font-size: 0.92rem;
          color: #E0E0E0;
          font-weight: 500;
        }

        .highlight-pill svg {
          color: var(--color-brand-yellow);
        }

        /* Phone Device Styling */
        .central-phone-col {
          display: flex;
          justify-content: center;
          position: relative;
        }

        .phone-mockup-wrapper {
          position: relative;
          width: 320px;
          max-width: 100%;
        }

        .phone-device-frame {
          position: relative;
          z-index: 2;
          background: #1A1A1A;
          border-radius: 44px;
          padding: 12px;
          box-shadow: 0 30px 70px rgba(0, 0, 0, 0.6), 0 0 0 2px rgba(255, 255, 255, 0.15);
          border: 4px solid #333333;
        }

        .phone-notch {
          height: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-bottom: 8px;
        }

        .notch-camera {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #0D0D0D;
        }

        .notch-speaker {
          width: 48px;
          height: 4px;
          border-radius: 9999px;
          background: #0D0D0D;
        }

        .phone-screen-content {
          background: #FAFAFA;
          border-radius: 32px;
          padding: 18px;
          min-height: 520px;
          display: flex;
          flex-direction: column;
          color: var(--color-ink-black);
          overflow: hidden;
        }

        .app-screen-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }

        .app-screen-greeting {
          display: flex;
          flex-direction: column;
        }

        .user-greeting-label {
          font-size: 0.7rem;
          color: #777777;
          text-transform: uppercase;
        }

        .user-delivery-loc {
          font-size: 0.8rem;
          color: var(--color-ink-black);
        }

        .app-screen-avatar img {
          width: 44px;
          height: auto;
          border-radius: 6px;
        }

        .app-screen-hero-card {
          background: #111111;
          color: #FFFFFF;
          border-radius: 18px;
          padding: 16px;
          margin-bottom: 16px;
          box-shadow: 0 8px 18px rgba(0, 0, 0, 0.15);
        }

        .screen-badge {
          display: inline-block;
          font-size: 0.65rem;
          font-weight: 800;
          color: #111111;
          background: var(--color-brand-yellow);
          padding: 3px 8px;
          border-radius: 9999px;
          margin-bottom: 8px;
        }

        .screen-dish-name {
          font-size: 1.05rem;
          font-weight: 700;
          margin-bottom: 2px;
        }

        .screen-dish-cook {
          font-size: 0.74rem;
          color: #A0A0A0;
          margin-bottom: 12px;
        }

        .screen-progress-bar {
          height: 6px;
          background: rgba(255, 255, 255, 0.15);
          border-radius: 9999px;
          overflow: hidden;
          margin-bottom: 8px;
        }

        .screen-progress-fill {
          height: 100%;
          background: var(--color-brand-yellow);
          border-radius: 9999px;
        }

        .screen-timer-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.72rem;
          color: #CCCCCC;
        }

        .app-screen-feed {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .feed-heading-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--color-ink-black);
          margin-bottom: 4px;
        }

        .feed-heading-row small {
          color: #8C6500;
          cursor: pointer;
        }

        .feed-mini-card {
          display: flex;
          align-items: center;
          gap: 10px;
          background: #FFFFFF;
          padding: 10px;
          border-radius: 14px;
          border: 1px solid rgba(0, 0, 0, 0.05);
        }

        .feed-mini-img {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: #FFF9E6;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .feed-mini-img img {
          width: 80%;
          height: 80%;
          object-fit: contain;
        }

        .feed-mini-info h6 {
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--color-ink-black);
          line-height: 1.2;
        }

        .feed-mini-info p {
          font-size: 0.68rem;
          color: #666666;
          margin: 2px 0;
        }

        .feed-rating {
          font-size: 0.68rem;
          font-weight: 700;
          color: #B58400;
        }

        .phone-ambient-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 380px;
          height: 520px;
          background: radial-gradient(circle, rgba(255, 210, 51, 0.22) 0%, transparent 70%);
          filter: blur(40px);
          z-index: 1;
          pointer-events: none;
        }

        @media (max-width: 960px) {
          .showcase-grid-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
