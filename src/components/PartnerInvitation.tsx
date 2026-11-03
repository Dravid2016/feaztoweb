import React from 'react';
import { KolamFrame } from './KolamFrame';
import { Sparkles, ArrowRight, ShieldCheck, TrendingUp, Cpu } from 'lucide-react';
import { NarrativeTransitionBand } from './NarrativeTransitionBand';

interface PartnerInvitationProps {
  navigate: (route: string) => void;
}

export const PartnerInvitation: React.FC<PartnerInvitationProps> = ({ navigate }) => {
  return (
    <section className="partner-invitation-section">
      <div className="container">
        {/* KolamFrame with Turmeric Yellow variant */}
        <KolamFrame variant="turmeric" hasCorners={true}>
          <div className="partner-text-block">
            <div className="badge-tag" style={{ background: '#FFFFFF', color: '#8C6500' }}>
              <Sparkles size={13} />
              <span>FoodPreneur Growth Engine</span>
            </div>

            <h2 className="partner-headline">
              Are You a Passionate Home Cook or Cloud Kitchen?
            </h2>

            <p className="partner-desc">
              Turn your heirloom recipes into a flourishing culinary brand. We provide fully equipped cloud kitchen infrastructure, raw material procurement, FSSAI compliance auditing, digital ordering tech, and reliable delivery dispatch.
            </p>

            <div className="partner-benefits-row">
              <div className="benefit-badge">
                <ShieldCheck size={18} />
                <span>Zero Upfront Kitchen Setup Cost</span>
              </div>
              <div className="benefit-badge">
                <TrendingUp size={18} />
                <span>Fair Transparent Profit Margins</span>
              </div>
              <div className="benefit-badge">
                <Cpu size={18} />
                <span>feazto Kitchen OS & Order Tablet</span>
              </div>
            </div>

            {/* Seamless Culinary Dishes Loop inside the FoodPreneur Growth Engine Card */}
            <div className="card-marquee-wrapper">
              <NarrativeTransitionBand />
            </div>

            <div className="partner-cta-actions">
              <button 
                type="button" 
                onClick={() => navigate('/partners')}
                className="btn btn-primary"
              >
                <span>Partner With feazto</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </KolamFrame>
      </div>

      <style>{`
        .partner-invitation-section {
          padding-top: 60px;
          padding-bottom: 80px;
          background: transparent;
        }

        .partner-text-block {
          max-width: 100%;
          position: relative;
          z-index: 1;
        }

        .partner-headline {
          font-size: clamp(2rem, 3.5vw, 2.9rem);
          font-weight: 800;
          color: var(--color-ink-black);
          line-height: 1.25;
          margin-top: 18px;
          margin-bottom: 18px;
          letter-spacing: -0.02em;
        }

        .partner-desc {
          font-size: 1.08rem;
          color: #222222;
          line-height: 1.65;
          margin-bottom: 32px;
          max-width: 820px;
        }

        .partner-benefits-row {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-bottom: 30px;
        }

        .card-marquee-wrapper {
          width: 100%;
          margin: 10px 0 34px 0;
          border-radius: 16px;
          overflow: hidden;
        }

        .card-marquee-wrapper .narrative-transition-wrapper {
          padding: 12px 0;
          background: rgba(255, 255, 255, 0.45);
          border-radius: 16px;
          border-top: 1px dashed rgba(181, 132, 0, 0.3);
          border-bottom: 1px dashed rgba(181, 132, 0, 0.3);
        }

        .benefit-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #FFFFFF;
          border: 1px solid rgba(0, 0, 0, 0.08);
          padding: 10px 18px;
          border-radius: var(--radius-capsule);
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--color-ink-black);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        }

        .benefit-badge svg {
          color: #8C6500;
        }

        @media (max-width: 768px) {
          .partner-benefits-row {
            flex-direction: column;
            gap: 10px;
          }
        }
      `}</style>
    </section>
  );
};
