import React from 'react';
import { Sparkles, Utensils, HeartHandshake, ShieldCheck, ArrowRight } from 'lucide-react';

interface HomeKitchensSectionProps {
  navigate: (route: string) => void;
}

export const HomeKitchensSection: React.FC<HomeKitchensSectionProps> = ({ navigate }) => {
  return (
    <section className="kitchens-section">
      <div className="container">
        {/* Section Header */}
        <div className="kitchens-header">
          <div className="badge-tag">
            <Sparkles size={13} />
            <span>The FoodPreneurs</span>
          </div>
          <h2 className="kitchens-title">Home Kitchens & Certified Cooks</h2>
          <p className="kitchens-desc">
            We partner with home food custodians who have perfected their regional heritage over decades. FEAzTO provides food safety certifications, precision kitchen tech, and guaranteed hygiene.
          </p>
        </div>

        {/* Yellow Gradient Info Card */}
        <div className="kitchens-info-card-container">
          <div className="kitchens-info-gradient-card">
            {/* Ambient Lighting Accents */}
            <div className="glow-circle glow-circle-tr" />
            <div className="glow-circle glow-circle-bl" />

            {/* Kolam Geometric Header Strip */}
            <div className="card-kolam-strip" aria-hidden="true">
              <svg viewBox="0 0 500 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                  d="M0,6 Q25,0 50,6 T100,6 T150,6 T200,6 T250,6 T300,6 T350,6 T400,6 T450,6 T500,6" 
                  stroke="rgba(255, 255, 255, 0.45)" 
                  strokeWidth="1.2" 
                  fill="none" 
                  strokeDasharray="4 2" 
                />
                <circle cx="250" cy="6" r="2.5" fill="#FFFFFF" opacity="0.8" />
              </svg>
            </div>

            {/* Pill Tag */}
            <div className="card-top-pill">
              <Sparkles size={14} style={{ fill: '#FFFFFF' }} />
              <span>Pilot Kitchen Network In Progress</span>
            </div>

            {/* Main Headline */}
            <h3 className="card-headline">
              Curating True Regional Custodians
            </h3>

            {/* Description */}
            <p className="card-description">
              We do not operate commercial cloud kitchens right now. Instead, our team is directly partnering with master home cooks, elderly recipe custodians, and regional culinary creators—equipping them with FSSAI hygiene audits, temperature calibrated packing, and commercial kitchen pods so their generational recipes can be shared authentically.
            </p>

            {/* 3 Value Pillars inside the card */}
            <div className="card-pillars-grid">
              <div className="inner-feature-box">
                <div className="feature-icon-bubble">
                  <Utensils size={20} />
                </div>
                <h4>Zero Commercial Shortcuts</h4>
                <p>Authentic stone grinding, slow fire dum, and generational spice blends preserved as family heirlooms.</p>
              </div>

              <div className="inner-feature-box">
                <div className="feature-icon-bubble">
                  <ShieldCheck size={20} />
                </div>
                <h4>Rigorous Hygiene Compliance</h4>
                <p>Every upcoming home kitchen undergoes strict sterilization, water purity, and FSSAI audits.</p>
              </div>

              <div className="inner-feature-box">
                <div className="feature-icon-bubble">
                  <HeartHandshake size={20} />
                </div>
                <h4>Empowering FoodPreneurs</h4>
                <p>Dignified revenue sharing and kitchen technology for home chefs and regional culinary custodians.</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="card-action-buttons">
              <button 
                type="button" 
                onClick={() => navigate('/partners')}
                className="btn-card-white"
              >
                <span>Partner as a Home Cook</span>
                <ArrowRight size={16} />
              </button>

              <button 
                type="button" 
                onClick={() => navigate('/our-story')}
                className="btn-card-translucent"
              >
                <span>Read Our Kitchen Story</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .kitchens-section {
          padding-top: 100px;
          padding-bottom: 100px;
          background: linear-gradient(180deg, #FEEAA2 0%, #FFF8D6 50%, #FFF3C4 100%);
          position: relative;
        }

        .kitchens-header {
          text-align: center;
          max-width: 720px;
          margin: 0 auto 48px auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .kitchens-title {
          font-size: clamp(2rem, 3.4vw, 2.8rem);
          font-weight: 800;
          color: var(--color-ink-black);
          margin-top: 18px;
          margin-bottom: 14px;
        }

        .kitchens-desc {
          font-size: 1.05rem;
          color: var(--color-text-secondary);
          line-height: 1.6;
        }

        .kitchens-info-card-container {
          display: flex;
          justify-content: center;
          width: 100%;
        }

        .kitchens-info-gradient-card {
          width: 100%;
          max-width: 1040px;
          border-radius: 36px;
          background: linear-gradient(135deg, #FFDE59 0%, #FAC921 50%, #E5A800 100%);
          color: #FFFFFF;
          padding: 60px 40px;
          box-shadow: 0 24px 60px rgba(250, 201, 33, 0.35);
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          box-sizing: border-box;
        }

        .glow-circle {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }

        .glow-circle-tr {
          top: -20%;
          right: -10%;
          width: 420px;
          height: 420px;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.32) 0%, transparent 70%);
        }

        .glow-circle-bl {
          bottom: -20%;
          left: -10%;
          width: 380px;
          height: 380px;
          background: radial-gradient(circle, rgba(0, 0, 0, 0.18) 0%, transparent 70%);
        }

        .card-kolam-strip {
          width: 100%;
          max-width: 460px;
          margin-bottom: 20px;
          opacity: 0.8;
        }
        .card-kolam-strip svg {
          width: 100%;
          height: 12px;
        }

        .card-top-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 7px 20px;
          border-radius: 9999px;
          background: rgba(0, 0, 0, 0.18);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: #FFFFFF;
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 20px;
        }

        .card-headline {
          font-size: clamp(1.8rem, 3.8vw, 2.7rem);
          font-weight: 900;
          color: #181B20;
          margin: 0 0 16px 0;
          line-height: 1.15;
          letter-spacing: -0.035em;
        }

        .card-description {
          font-size: clamp(0.98rem, 1.6vw, 1.12rem);
          color: rgba(24, 27, 32, 0.88);
          max-width: 760px;
          margin: 0 auto 36px auto;
          line-height: 1.7;
          font-weight: 500;
        }

        .card-pillars-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 20px;
          width: 100%;
          margin-bottom: 36px;
          position: relative;
          z-index: 1;
        }

        .inner-feature-box {
          background: rgba(255, 255, 255, 0.28);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.45);
          border-radius: 20px;
          padding: 26px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          transition: transform 0.25s ease, background 0.25s ease;
        }

        .inner-feature-box:hover {
          transform: translateY(-4px);
          background: rgba(255, 255, 255, 0.40);
        }

        .feature-icon-bubble {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.92);
          color: #7A5500;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 14px;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.12);
        }

        .inner-feature-box h4 {
          font-size: 1.05rem;
          font-weight: 800;
          color: #181B20;
          margin: 0 0 8px 0;
        }

        .inner-feature-box p {
          font-size: 0.88rem;
          color: rgba(24, 27, 32, 0.82);
          line-height: 1.55;
          margin: 0;
        }

        .card-action-buttons {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
          position: relative;
          z-index: 1;
        }

        .btn-card-white {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #FFFFFF;
          color: #7A5500;
          padding: 14px 30px;
          border-radius: 9999px;
          font-size: 0.95rem;
          font-weight: 800;
          border: none;
          cursor: pointer;
          transition: all 0.25s ease;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
        }

        .btn-card-white:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.22);
          background: #FFFDF5;
        }

        .btn-card-translucent {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(0, 0, 0, 0.18);
          color: #FFFFFF;
          padding: 14px 28px;
          border-radius: 9999px;
          font-size: 0.95rem;
          font-weight: 700;
          border: 1.5px solid rgba(255, 255, 255, 0.4);
          cursor: pointer;
          backdrop-filter: blur(8px);
          transition: all 0.25s ease;
        }

        .btn-card-translucent:hover {
          background: rgba(255, 255, 255, 0.2);
          border-color: #FFFFFF;
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .kitchens-info-gradient-card {
            padding: 40px 22px;
            border-radius: 28px;
          }
          .card-pillars-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
