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
            <div key={idx} className="pillar-card">
              <div className="pillar-icon-wrap">
                {item.icon}
              </div>
              <h3 className="pillar-card-title">{item.title}</h3>
              <p className="pillar-card-desc">{item.desc}</p>
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

        .pillar-card {
          background: #FFFFFF;
          border-radius: var(--radius-lg);
          padding: 32px 28px;
          border: 1px solid rgba(0, 0, 0, 0.06);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.03);
          transition: transform 0.25s ease, border-color 0.25s ease;
        }

        .pillar-card:hover {
          transform: translateY(-5px);
          border-color: rgba(255, 210, 51, 0.6);
          box-shadow: 0 14px 30px rgba(0, 0, 0, 0.08);
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
          border: 1px solid rgba(255, 210, 51, 0.3);
        }

        .pillar-card-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--color-ink-black);
          margin-bottom: 10px;
        }

        .pillar-card-desc {
          font-size: 0.92rem;
          color: var(--color-text-secondary);
          line-height: 1.6;
        }
      `}</style>
    </section>
  );
};
