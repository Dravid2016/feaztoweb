import React from 'react';
import { Sparkles } from 'lucide-react';

export const NarrativeTransitionBand: React.FC = () => {
  const transitionCapsules = [
    { title: 'Dum Biryani Handi', subtitle: 'Slow Dum Cooking', img: '/brand/plate-biryani.png' },
    { title: 'Sattvic Thali', subtitle: 'Balanced Shadrasa', img: '/brand/plate-thali.png' },
    { title: 'Jasmine Idli & Sambar', subtitle: 'Stone Ground Batter', img: '/brand/plate-idli.png' },
    { title: 'Potli Samosa', subtitle: 'Hand-Rolled Ajwain Crust', img: '/brand/plate-samosa.png' },
    { title: 'Filter Kaapi & Chai', subtitle: 'Clay Pot Infusion', img: '/brand/doodle-chai.png' },
  ];

  return (
    <div className="narrative-transition-wrapper">
      <div className="container">
        <div className="narrative-divider-lead">
          <span className="narrative-line" />
          <div className="narrative-tag">
            <Sparkles size={12} />
            <span>The Culinary Thread</span>
          </div>
          <span className="narrative-line" />
        </div>

        {/* Reference D: Floating food imagery integrated into narrative flow */}
        <div className="capsules-scroll-row">
          {transitionCapsules.map((item, idx) => (
            <div key={idx} className="transition-food-pill">
              <div className="pill-img-container">
                <img src={item.img} alt={item.title} />
              </div>
              <div className="pill-text-content">
                <span className="pill-food-name">{item.title}</span>
                <span className="pill-food-desc">{item.subtitle}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .narrative-transition-wrapper {
          padding: 36px 0;
          background: linear-gradient(180deg, var(--color-warm-white) 0%, #FFFFFF 100%);
          border-top: 1px dashed rgba(0, 0, 0, 0.08);
          border-bottom: 1px dashed rgba(0, 0, 0, 0.08);
          overflow: hidden;
        }

        .narrative-divider-lead {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin-bottom: 24px;
        }

        .narrative-line {
          height: 1px;
          flex-grow: 1;
          max-width: 140px;
          background: rgba(0, 0, 0, 0.1);
        }

        .narrative-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.74rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #8C6500;
        }

        .capsules-scroll-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .transition-food-pill {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: #FFFFFF;
          padding: 8px 18px 8px 10px;
          border-radius: var(--radius-capsule);
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);
          border: 1px solid rgba(0, 0, 0, 0.07);
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease;
          cursor: default;
        }

        .transition-food-pill:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 8px 22px rgba(255, 210, 51, 0.2);
          border-color: rgba(255, 210, 51, 0.5);
        }

        .pill-img-container {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #FFF9E6;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          flex-shrink: 0;
          border: 1.5px solid var(--color-brand-yellow);
        }

        .pill-img-container img {
          width: 78%;
          height: 78%;
          object-fit: contain;
        }

        .pill-text-content {
          display: flex;
          flex-direction: column;
        }

        .pill-food-name {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--color-ink-black);
          line-height: 1.2;
        }

        .pill-food-desc {
          font-size: 0.72rem;
          color: var(--color-text-secondary);
        }

        @media (max-width: 768px) {
          .capsules-scroll-row {
            justify-content: flex-start;
            flex-wrap: nowrap;
            overflow-x: auto;
            padding-bottom: 8px;
            scroll-snap-type: x mandatory;
          }
          .transition-food-pill {
            scroll-snap-align: start;
            flex-shrink: 0;
          }
        }
      `}</style>
    </div>
  );
};
