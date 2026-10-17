import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

interface FinalBrandCTAProps {
  navigate: (route: string) => void;
}

export const FinalBrandCTA: React.FC<FinalBrandCTAProps> = ({ navigate }) => {
  return (
    <section className="final-brand-cta">
      <div className="container">
        <div className="final-cta-inner">
          <div className="badge-tag badge-tag-dark">
            <Sparkles size={13} />
            <span>Food • Culture • Connect</span>
          </div>

          <h2 className="final-cta-headline">
            Bringing the taste of home closer to where you live.
          </h2>

          <p className="final-cta-subheadline">
            Experience the warmth of family recipes, the precision of modern cloud kitchens, and the heritage that unites us across regions.
          </p>

          <div className="final-cta-button-row">
            <button 
              type="button" 
              onClick={() => navigate('/download')}
              className="btn btn-yellow"
            >
              <span>Download Early Access</span>
              <ArrowRight size={16} />
            </button>

            <button 
              type="button" 
              onClick={() => navigate('/discover')}
              className="btn btn-white"
            >
              <span>Explore Regional Flavours</span>
            </button>
          </div>

          <div className="final-brand-tagline-text">
            <span>FEAzTO — Home food with cloud-kitchen precision.</span>
          </div>
        </div>
      </div>

      <style>{`
        .final-brand-cta {
          padding-top: 100px;
          padding-bottom: 100px;
          background: #111111;
          color: #FAFAFA;
          position: relative;
          overflow: hidden;
          text-align: center;
        }

        .final-brand-cta::before {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 700px;
          height: 400px;
          background: radial-gradient(circle, rgba(255, 210, 51, 0.15) 0%, transparent 70%);
          pointer-events: none;
        }

        .final-cta-inner {
          position: relative;
          z-index: 1;
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .final-cta-headline {
          font-size: clamp(2.2rem, 4.4vw, 3.6rem);
          font-weight: 800;
          color: #FFFFFF;
          line-height: 1.2;
          margin-top: 24px;
          margin-bottom: 20px;
          letter-spacing: -0.025em;
        }

        .final-cta-subheadline {
          font-size: 1.15rem;
          color: #B5B5B5;
          line-height: 1.65;
          margin-bottom: 40px;
          max-width: 640px;
        }

        .final-cta-button-row {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
          justify-content: center;
          margin-bottom: 36px;
        }

        .final-brand-tagline-text {
          font-size: 0.85rem;
          color: #777777;
          letter-spacing: 0.05em;
        }
      `}</style>
    </section>
  );
};
