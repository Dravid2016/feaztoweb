import React from 'react';
import { Sparkles, Compass, ShieldCheck, Flame, Cpu, Users, ArrowUpRight } from 'lucide-react';

export const BrandPillarsSection: React.FC = () => {
  const pillars = [
    {
      num: '01',
      icon: <Compass size={24} />,
      title: 'Geographical Provenance',
      tagline: 'Track Every Spice Terroir',
      desc: 'Every recipe is documented to its exact regional origin—be it Rayalaseema, Thanjavur, or Rampur—with origin tracking for pure authentic taste.'
    },
    {
      num: '02',
      icon: <Flame size={24} />,
      title: 'Heirloom Techniques',
      tagline: 'Zero Industrial Pre-Mixes',
      desc: 'No commercial shortcuts. We mandate slow-fire dum, stone-ground black gram fermentation, and natural cold-pressed oil tempering.'
    },
    {
      num: '03',
      icon: <ShieldCheck size={24} />,
      title: 'FSSAI Hygiene & Quality Audits',
      tagline: '100% Certified Clean Kitchens',
      desc: 'Home cooking supported by commercial food safety rigor. Tamper-evident thermal packaging and regular certified kitchen cleanliness audits.'
    },
    {
      num: '04',
      icon: <Cpu size={24} />,
      title: 'Cloud-Kitchen Precision',
      tagline: 'Sub-Minute Batch Dispatch',
      desc: 'Real-time kitchen management, calibrated prep-times, and integrated dispatch so food reaches you at peak culinary temperature.'
    },
    {
      num: '05',
      icon: <Users size={24} />,
      title: 'FoodPreneur Economics',
      tagline: 'Dignified Culinary Incomes',
      desc: 'Fair revenue sharing empowering master home cooks, elderly recipe custodians, and independent regional culinary creators from batch one.'
    },
    {
      num: '06',
      icon: <Sparkles size={24} />,
      title: 'Zero Artificial Additives',
      tagline: 'Only Pure Natural Ingredients',
      desc: 'Strict policy prohibiting synthetic chemical dyes, artificial taste enhancers, or industrial preservation agents.'
    }
  ];

  return (
    <section className="pillars-section">
      <div className="container">
        {/* Plenti-Style Clean Header */}
        <div className="pillars-header">
          <div className="badge-tag">
            <Sparkles size={13} />
            <span>Why Choose FEAzTO</span>
          </div>
          <h2 className="pillars-title">Eat Authentic, Support Home Cooks, Waste Nothing</h2>
          <p className="pillars-subtitle">
            FEAzTO bridges the emotional warmth of home kitchens with cloud-kitchen operational precision. Here is how our ecosystem protects your food.
          </p>
        </div>

        {/* 3-Column Plenti Feature Cards with Subtle Kolam Watermarks */}
        <div className="pillars-grid">
          {pillars.map((item) => (
            <div key={item.num} className="plenti-feature-card">
              {/* Kolam geometric background watermark */}
              <div className="card-kolam-watermark" aria-hidden="true">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="44" stroke="#FFD233" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.3" />
                  <path d="M50,8 C60,28 72,28 92,50 C72,72 60,72 50,92 C40,72 28,72 8,50 C28,28 40,28 50,8 Z" 
                        stroke="#FFD233" strokeWidth="1" fill="none" opacity="0.22" />
                  <circle cx="50" cy="50" r="2.5" fill="#FFD233" opacity="0.4" />
                </svg>
              </div>

              {/* Card Top Row: Number + Icon */}
              <div className="card-top-row">
                <div className="plenti-icon-circle">
                  {item.icon}
                </div>
                <span className="card-serial-num">{item.num}</span>
              </div>

              <div className="card-content-wrap">
                <span className="card-tagline-chip">{item.tagline}</span>
                <h3 className="card-main-title">{item.title}</h3>
                <p className="card-main-desc">{item.desc}</p>
              </div>

              <div className="card-footer-accent">
                <div className="accent-kolam-dots">
                  <span className="dot" />
                  <span className="line" />
                  <span className="dot" />
                </div>
                <ArrowUpRight size={16} className="card-corner-arrow" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .pillars-section {
          padding-top: 100px;
          padding-bottom: 100px;
          background: linear-gradient(180deg, #FEF7DE 0%, #FEF1CD 50%, #FDECB9 100%);
          position: relative;
        }

        .pillars-header {
          text-align: center;
          max-width: 740px;
          margin: 0 auto 60px auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .pillars-title {
          font-size: clamp(2rem, 3.4vw, 2.9rem);
          font-weight: 800;
          color: var(--color-ink-black);
          margin-top: 18px;
          margin-bottom: 14px;
          line-height: 1.25;
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

        .plenti-feature-card {
          position: relative;
          background: #FFFFFF;
          border-radius: 20px;
          padding: 34px 28px;
          border: 1.5px solid rgba(0, 0, 0, 0.07);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
          transition: transform 0.28s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.28s ease, border-color 0.28s ease;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .plenti-feature-card:hover {
          transform: translateY(-6px);
          border-color: rgba(255, 210, 51, 0.85);
          box-shadow: 0 16px 36px rgba(255, 210, 51, 0.15);
        }

        .card-kolam-watermark {
          position: absolute;
          top: -12px;
          right: -12px;
          width: 120px;
          height: 120px;
          pointer-events: none;
        }
        .card-kolam-watermark svg {
          width: 100%;
          height: 100%;
        }

        .card-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 24px;
          position: relative;
          z-index: 1;
        }

        .plenti-icon-circle {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: var(--color-brand-yellow-subtle);
          color: #8C6500;
          border: 1px solid rgba(255, 210, 51, 0.5);
          box-shadow: 0 2px 8px rgba(255, 210, 51, 0.12);
        }

        .card-serial-num {
          font-family: var(--font-heading);
          font-size: 1.4rem;
          font-weight: 800;
          color: rgba(0, 0, 0, 0.12);
          letter-spacing: -0.04em;
        }

        .card-content-wrap {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          position: relative;
          z-index: 1;
        }

        .card-tagline-chip {
          display: inline-block;
          font-size: 0.74rem;
          font-weight: 700;
          color: #8C6500;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 8px;
        }

        .card-main-title {
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--color-ink-black);
          margin-bottom: 10px;
          line-height: 1.3;
        }

        .card-main-desc {
          font-size: 0.92rem;
          color: var(--color-text-secondary);
          line-height: 1.6;
          margin-bottom: 24px;
        }

        .card-footer-accent {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 14px;
          border-top: 1px dashed rgba(0, 0, 0, 0.08);
          margin-top: auto;
          position: relative;
          z-index: 1;
        }

        .accent-kolam-dots {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .accent-kolam-dots .dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #E5B81C;
        }
        .accent-kolam-dots .line {
          width: 20px;
          height: 1px;
          background: #FFD233;
        }

        .card-corner-arrow {
          color: rgba(0, 0, 0, 0.25);
          transition: transform 0.2s ease, color 0.2s ease;
        }

        .plenti-feature-card:hover .card-corner-arrow {
          transform: translate(2px, -2px);
          color: #8C6500;
        }
      `}</style>
    </section>
  );
};
