import React from 'react';
import { KITCHEN_STORIES } from '../data/feaztoData';
import { Sparkles, Award, MapPin, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface HomeKitchensPageProps {
  navigate?: (route: string) => void;
}

export const HomeKitchensPage: React.FC<HomeKitchensPageProps> = () => {
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
            Meet the regional culinary custodians behind FEAzTO. We empower home cooks with commercial food safety protocols, state-of-the-art kitchen pods, and digital logistics.
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
              <Award size={28} className="intro-icon" />
              <h3>Preserved Heirloom Standards</h3>
              <p>We do not alter secret family spice ratios or demand industrial speed. We calibrate technology around traditional slow cooking.</p>
            </div>
            <div className="intro-card">
              <CheckCircle2 size={28} className="intro-icon" />
              <h3>Tamper-Proof Cold & Hot Packaging</h3>
              <p>Custom thermal boxes ensure dishes reach your home at the exact intended consumption temperature without steaming sogginess.</p>
            </div>
          </div>

          <h2 className="section-subheading">Featured Culinary Custodians</h2>

          <div className="kitchens-full-list">
            {KITCHEN_STORIES.map((cook) => (
              <div key={cook.id} className="detailed-cook-card">
                <div className="cook-media-box">
                  {cook.image ? (
                    <img src={cook.image} alt={cook.cookName} />
                  ) : (
                    <div className="cook-media-placeholder">
                      <Award size={48} className="placeholder-award-icon" />
                      <span className="placeholder-region">{cook.regionSpecialty}</span>
                    </div>
                  )}
                  <div className="cook-badge-strip">
                    <span>{cook.experienceYears} Years Traditional Mastery</span>
                  </div>
                </div>

                <div className="cook-text-box">
                  <div className="cook-header-row">
                    <div>
                      <span className="cook-loc"><MapPin size={14} /> {cook.locationArea}</span>
                      <h3 className="cook-title-big">{cook.title}</h3>
                      <h4 className="cook-real-name">Master Cook: {cook.cookName}</h4>
                    </div>
                    <span className="specialty-capsule">{cook.regionSpecialty}</span>
                  </div>

                  <blockquote className="cook-philosophic-quote">
                    “{cook.quote}”
                  </blockquote>

                  <p className="cook-biography">{cook.story}</p>

                  <div className="signature-showcase-box">
                    <span className="sig-label">Signature Heritage Recipe:</span>
                    <strong className="sig-val">{cook.signatureDish}</strong>
                  </div>
                </div>
              </div>
            ))}
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
          margin-bottom: 64px;
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

        .section-subheading {
          font-size: 2rem;
          font-weight: 800;
          color: var(--color-ink-black);
          margin-bottom: 36px;
        }

        .kitchens-full-list {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .detailed-cook-card {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 40px;
          background: var(--color-warm-white);
          border-radius: var(--radius-lg);
          border: 1px solid rgba(0, 0, 0, 0.08);
          overflow: hidden;
          padding: 32px;
        }

        .cook-media-box {
          position: relative;
          border-radius: 18px;
          overflow: hidden;
          min-height: 280px;
        }

        .cook-media-placeholder {
          width: 100%;
          min-height: 280px;
          height: 100%;
          background: linear-gradient(135deg, #27211B 0%, #171512 100%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          color: #FFFFFF;
          padding: 24px;
          text-align: center;
        }

        .placeholder-award-icon {
          color: var(--color-brand-yellow);
        }

        .placeholder-region {
          font-size: 1rem;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.9);
          letter-spacing: 0.02em;
        }

        .cook-media-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .cook-badge-strip {
          position: absolute;
          bottom: 14px;
          left: 14px;
          background: rgba(17, 17, 17, 0.85);
          backdrop-filter: blur(8px);
          color: var(--color-brand-yellow);
          padding: 6px 14px;
          border-radius: 9999px;
          font-size: 0.76rem;
          font-weight: 700;
        }

        .cook-text-box {
          display: flex;
          flex-direction: column;
        }

        .cook-header-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 16px;
          flex-wrap: wrap;
        }

        .cook-loc {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 0.78rem;
          font-weight: 600;
          color: #8C6500;
          margin-bottom: 4px;
        }

        .cook-title-big {
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--color-ink-black);
        }

        .cook-real-name {
          font-size: 0.95rem;
          color: var(--color-text-secondary);
          font-weight: 500;
        }

        .specialty-capsule {
          background: var(--color-brand-yellow-subtle);
          color: #7A5B00;
          padding: 6px 14px;
          border-radius: var(--radius-capsule);
          font-size: 0.78rem;
          font-weight: 700;
          border: 1px solid rgba(255, 210, 51, 0.4);
        }

        .cook-philosophic-quote {
          background: #FFFFFF;
          padding: 14px 18px;
          border-left: 3px solid var(--color-brand-yellow);
          border-radius: 6px;
          font-style: italic;
          font-size: 0.92rem;
          color: #333333;
          margin-bottom: 16px;
          line-height: 1.5;
        }

        .cook-biography {
          font-size: 0.95rem;
          color: var(--color-text-secondary);
          line-height: 1.65;
          margin-bottom: 24px;
        }

        .signature-showcase-box {
          margin-top: auto;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 16px;
          background: #FFFFFF;
          border-radius: 8px;
          border: 1px solid rgba(0, 0, 0, 0.06);
        }

        .sig-label {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--color-ink-black);
        }

        .sig-val {
          font-size: 0.85rem;
          color: #8C6500;
        }

        @media (max-width: 860px) {
          .detailed-cook-card {
            grid-template-columns: 1fr;
            padding: 20px;
          }
        }
      `}</style>
    </div>
  );
};
