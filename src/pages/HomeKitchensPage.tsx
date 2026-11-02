import React from 'react';
import { Sparkles, Utensils, HeartHandshake, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

interface HomeKitchensPageProps {
  navigate?: (route: string) => void;
}

export const HomeKitchensPage: React.FC<HomeKitchensPageProps> = ({ navigate }) => {
  return (
    <div className="secondary-page home-kitchens-page">
      <section className="page-hero-banner">
        <div className="container">
          <div className="badge-tag">
            <Sparkles size={13} />
            <span>Empowering Master Cooks</span>
          </div>
          <h1 className="page-hero-title">The FoodPreneur Ecosystem</h1>
          <p className="page-hero-subtitle">
            Meet the regional culinary custodians behind feazto. We empower home cooks with commercial food safety protocols, state-of-the-art kitchen pods, and digital logistics.
          </p>
        </div>
      </section>

      <section className="kitchens-detail-section">
        <div className="container">
          <div className="kitchens-intro-grid">
            <div className="intro-card">
              <ShieldCheck size={28} className="intro-icon" />
              <h3>Strict FSSAI Audits</h3>
              <p>Every home kitchen partner undergoes rigorous surface sterilization, water filtration, and food handling certifications.</p>
            </div>
            <div className="intro-card">
              <Utensils size={28} className="intro-icon" />
              <h3>Preserved Heirloom Standards</h3>
              <p>We do not alter secret family spice ratios or demand industrial speed. We calibrate technology around traditional slow cooking.</p>
            </div>
            <div className="intro-card">
              <CheckCircle2 size={28} className="intro-icon" />
              <h3>Tamper-Proof Cold & Hot Packaging</h3>
              <p>Custom thermal boxes ensure dishes reach your home at the exact intended consumption temperature without steaming sogginess.</p>
            </div>
          </div>

          {/* Yellow Gradient Info Card */}
          <div className="kitchens-info-gradient-card">
            <div className="glow-circle glow-circle-tr" />
            <div className="glow-circle glow-circle-bl" />

            <div className="card-top-pill">
              <Sparkles size={14} style={{ fill: '#FFFFFF' }} />
              <span>Pilot Network In Progress</span>
            </div>

            <h2 className="card-headline">
              We Don't Have Commercial Cloud Kitchens Right Now
            </h2>

            <p className="card-description">
              feazto is pioneering an authentic home-chef ecosystem rather than run-of-the-mill industrial dark kitchens. We are actively conducting kitchen audits, recipe documentation, and onboarding master regional custodians. Kitchen pods will go live progressively across pilot zones.
            </p>

            <div className="card-pillars-grid">
              <div className="inner-feature-box">
                <div className="feature-icon-bubble">
                  <Utensils size={20} />
                </div>
                <h4>Preserving Hand-Crafted Recipes</h4>
                <p>Ensuring stone ground textures and authentic dum cooking remain 100% intact.</p>
              </div>

              <div className="inner-feature-box">
                <div className="feature-icon-bubble">
                  <ShieldCheck size={20} />
                </div>
                <h4>Zero Chemical Premixes</h4>
                <p>Never substituting authentic slow processes with commercial additives or food colors.</p>
              </div>

              <div className="inner-feature-box">
                <div className="feature-icon-bubble">
                  <HeartHandshake size={20} />
                </div>
                <h4>Empowering Recipe Custodians</h4>
                <p>Enabling home cooks to build sustainable businesses with commercial-grade support.</p>
              </div>
            </div>

            {navigate && (
              <div className="card-action-buttons">
                <button 
                  type="button" 
                  onClick={() => navigate('/partners')}
                  className="btn-card-white"
                >
                  <span>Apply as a FoodPreneur Partner</span>
                  <ArrowRight size={16} />
                </button>

                <button 
                  type="button" 
                  onClick={() => navigate('/')}
                  className="btn-card-translucent"
                >
                  <span>Return to Home</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <style>{`
        .kitchens-detail-section {
          padding: 80px 0 100px 0;
          background: #FFFFFF;
        }

        .kitchens-intro-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
          margin-bottom: 60px;
        }

        .intro-card {
          background: var(--color-warm-white);
          padding: 32px 24px;
          border-radius: var(--radius-lg);
          border: 1px solid rgba(0, 0, 0, 0.06);
        }

        .intro-icon {
          color: #8C6500;
          margin-bottom: 14px;
        }

        .intro-card h3 {
          font-size: 1.15rem;
          font-weight: 700;
          margin-bottom: 8px;
        }

        .intro-card p {
          font-size: 0.9rem;
          color: var(--color-text-secondary);
          line-height: 1.6;
        }

        .kitchens-info-gradient-card {
          width: 100%;
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
    </div>
  );
};
