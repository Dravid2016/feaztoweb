import React from 'react';
import { Sparkles, Compass, ShieldCheck, Flame, Cpu, Users } from 'lucide-react';

export const BrandPillarsSection: React.FC = () => {
  const pillars = [
    {
      icon: <Compass size={24} />,
      title: 'Geographical Provenance',
      desc: 'Every recipe is rooted in a specific cultural terroir—be it Rayalaseema, Thanjavur, or Rampur—with origin tracking for authentic taste.'
    },
    {
      icon: <Flame size={24} />,
      title: 'Heirloom Techniques',
      desc: 'No commercial shortcuts. We mandate slow-fire dum, stone-ground black gram fermentation, and natural cold-pressed oil tempering.'
    },
    {
      icon: <ShieldCheck size={24} />,
      title: 'FSSAI Hygiene & Quality Audits',
      desc: 'Home cooking supported by commercial food safety rigor. Tamper-evident thermal packaging and certified kitchen cleanliness.'
    },
    {
      icon: <Cpu size={24} />,
      title: 'Cloud-Kitchen Precision',
      desc: 'Real-time kitchen management, standardized prep-times, and integrated dispatch so food reaches you at peak culinary temperature.'
    },
    {
      icon: <Users size={24} />,
      title: 'FoodPreneur Economics',
      desc: 'Fair revenue sharing empowering master home cooks, elderly recipe custodians, and independent regional culinary creators.'
    },
    {
      icon: <Sparkles size={24} />,
      title: 'Zero Artificial Additives',
      desc: 'Strict policy prohibiting chemical food dyes, synthetic taste enhancers, or industrial preservation agents.'
    }
  ];

  return (
    <section className="pillars-section">
      <div className="container">
        <div className="pillars-header">
          <div className="badge-tag">
            <Sparkles size={13} />
            <span>The FEAzTO Standard</span>
          </div>
          <h2 className="pillars-title">What Makes FEAzTO Different</h2>
          <p className="pillars-subtitle">
            Not another fast-food aggregator. We combine the emotional warmth of regional home cooking with modern cloud-kitchen operational rigor.
          </p>
        </div>

        <div className="pillars-grid">
          {pillars.map((item, idx) => (
            <div key={idx} className="cultural-pillar-card">
              {/* Subtle Kolam Linework Pattern Background */}
              <div className="pillar-kolam-watermark" aria-hidden="true">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="42" stroke="#FFD233" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.35" />
                  <path d="M50,10 C60,30 70,30 90,50 C70,70 60,70 50,90 C40,70 30,70 10,50 C30,30 40,30 50,10 Z" 
                        stroke="#FFD233" strokeWidth="1" fill="none" opacity="0.25" />
                  <circle cx="50" cy="50" r="2.5" fill="#FFD233" opacity="0.4" />
                </svg>
              </div>

              <div className="pillar-icon-wrap">
                {item.icon}
              </div>
              <h3 className="pillar-card-title">{item.title}</h3>
              <p className="pillar-card-desc">{item.desc}</p>

              {/* Decorative Kolam dot indicator row */}
              <div className="pillar-kolam-dots" aria-hidden="true">
                <span className="k-dot" />
                <span className="k-line" />
                <span className="k-dot" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .pillars-section {
          padding-top: 100px;
          padding-bottom: 100px;
          background-color: var(--color-warm-white);
        }

        .pillars-header {
          text-align: center;
          max-width: 680px;
          margin: 0 auto 56px auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .pillars-title {
          font-size: clamp(2rem, 3.4vw, 2.8rem);
          font-weight: 800;
          color: var(--color-ink-black);
          margin-top: 18px;
          margin-bottom: 14px;
        }

        .pillars-subtitle {
          font-size: 1.05rem;
          color: var(--color-text-secondary);
          line-height: 1.6;
        }

        .pillars-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 28px;
        }

        .cultural-pillar-card {
          position: relative;
          background: #FFFFFF;
          border-radius: var(--radius-lg);
          padding: 34px 28px;
          border: 1.5px solid rgba(255, 210, 51, 0.35);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.04);
          transition: transform 0.28s ease, border-color 0.28s ease, box-shadow 0.28s ease;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .cultural-pillar-card:hover {
          transform: translateY(-6px);
          border-color: rgba(255, 210, 51, 0.9);
          box-shadow: 0 16px 36px rgba(255, 210, 51, 0.16);
        }

        .pillar-kolam-watermark {
          position: absolute;
          top: -10px;
          right: -10px;
          width: 120px;
          height: 120px;
          pointer-events: none;
        }
        .pillar-kolam-watermark svg {
          width: 100%;
          height: 100%;
        }

        .pillar-icon-wrap {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: var(--color-brand-yellow-subtle);
          color: #8C6500;
          margin-bottom: 20px;
          border: 1px solid rgba(255, 210, 51, 0.5);
          position: relative;
          z-index: 1;
        }

        .pillar-card-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--color-ink-black);
          margin-bottom: 10px;
          position: relative;
          z-index: 1;
        }

        .pillar-card-desc {
          font-size: 0.92rem;
          color: var(--color-text-secondary);
          line-height: 1.6;
          position: relative;
          z-index: 1;
          margin-bottom: 20px;
        }

        .pillar-kolam-dots {
          margin-top: auto;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .k-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #E5B81C;
        }
        .k-line {
          width: 24px;
          height: 1px;
          background: #FFD233;
        }
      `}</style>
    </section>
  );
};
