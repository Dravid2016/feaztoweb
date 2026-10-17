import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, TrendingUp, Cpu } from 'lucide-react';

interface PartnerInvitationProps {
  navigate: (route: string) => void;
}

export const PartnerInvitation: React.FC<PartnerInvitationProps> = ({ navigate }) => {
  return (
    <section className="partner-invitation-section">
      <div className="container">
        <div className="partner-banner-card">
          <div className="partner-text-block">
            <div className="badge-tag">
              <Sparkles size={13} />
              <span>FoodPreneur Growth Engine</span>
            </div>

            <h2 className="partner-headline">
              Are You a Passionate Home Cook or Cloud Kitchen?
            </h2>

            <p className="partner-desc">
              Turn your heirloom recipes into a flourishing culinary brand. We provide fully equipped cloud-kitchen infrastructure, raw material procurement, FSSAI compliance auditing, digital ordering tech, and reliable delivery dispatch.
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
                <span>FEAzTO Kitchen OS & Order Tablet</span>
              </div>
            </div>

            <div className="partner-cta-actions">
              <button 
                type="button" 
                onClick={() => navigate('/partners')}
                className="btn btn-primary"
              >
                <span>Partner With FEAzTO</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .partner-invitation-section {
          padding-top: 60px;
          padding-bottom: 100px;
          background-color: var(--color-warm-white);
        }

        .partner-banner-card {
          background: linear-gradient(135deg, #FFFDF5 0%, #FFF8E1 100%);
          border-radius: var(--radius-lg);
          padding: 64px 48px;
          border: 1.5px solid rgba(255, 210, 51, 0.5);
          box-shadow: 0 16px 40px rgba(255, 210, 51, 0.12);
          position: relative;
          overflow: hidden;
        }

        .partner-banner-card::after {
          content: "";
          position: absolute;
          right: -50px;
          bottom: -50px;
          width: 260px;
          height: 260px;
          background: radial-gradient(circle, rgba(255, 210, 51, 0.25) 0%, transparent 70%);
          pointer-events: none;
        }

        .partner-text-block {
          max-width: 800px;
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
          color: var(--color-text-secondary);
          line-height: 1.65;
          margin-bottom: 32px;
        }

        .partner-benefits-row {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          margin-bottom: 36px;
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
          font-weight: 600;
          color: var(--color-ink-black);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
        }

        .benefit-badge svg {
          color: #8C6500;
        }

        @media (max-width: 768px) {
          .partner-banner-card {
            padding: 36px 24px;
          }
          .partner-benefits-row {
            flex-direction: column;
            gap: 10px;
          }
        }
      `}</style>
    </section>
  );
};
