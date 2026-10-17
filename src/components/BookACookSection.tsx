import React from 'react';
import { Sparkles, Calendar, Users, ShieldCheck, ArrowRight, Info } from 'lucide-react';

interface BookACookSectionProps {
  navigate: (route: string) => void;
}

export const BookACookSection: React.FC<BookACookSectionProps> = ({ navigate }) => {
  return (
    <section className="book-cook-section">
      <div className="container">
        <div className="book-cook-card">
          <div className="book-cook-grid">
            {/* Left Content */}
            <div className="book-cook-content">
              <div className="pilot-status-badge">
                <Info size={13} />
                <span>Pilot Offering • Early Registry</span>
              </div>

              <h2 className="book-cook-title">
                Book a Master Cook for Intimate Gatherings
              </h2>

              <p className="book-cook-lead">
                Celebrate cultural festivals, family pujas, and private culinary gatherings with a vetted FEAzTO FoodPreneur preparing heritage dishes in your home kitchen.
              </p>

              <div className="pilot-features-list">
                <div className="pilot-feature-item">
                  <Calendar size={18} />
                  <div>
                    <strong>Curated Festival Menus</strong>
                    <p>Authentic multi-course traditional spreads cooked to customary rituals.</p>
                  </div>
                </div>

                <div className="pilot-feature-item">
                  <ShieldCheck size={18} />
                  <div>
                    <strong>Background Verified & Certified</strong>
                    <p>Strict background vetting, health certification, and kitchen hygiene compliance.</p>
                  </div>
                </div>

                <div className="pilot-feature-item">
                  <Users size={18} />
                  <div>
                    <strong>Private Groups of 8 to 25 Guests</strong>
                    <p>Designed for memorable home feasts without the strain of cooking yourself.</p>
                  </div>
                </div>
              </div>

              <div className="book-actions">
                <button 
                  type="button" 
                  onClick={() => navigate('/book-a-cook')}
                  className="btn btn-yellow"
                >
                  <span>Register Pilot Host Interest</span>
                  <ArrowRight size={16} />
                </button>
              </div>

              <small className="honest-pilot-note">
                * Note: Book a Cook is currently in controlled invitation-only testing in Bengaluru. Registration guarantees priority notification.
              </small>
            </div>

            {/* Right Visual Image */}
            <div className="book-cook-visual">
              <div className="cook-art-frame">
                <img 
                  src="/brand/indian-art-backdrop.png" 
                  alt="Traditional Indian culinary celebration and home hospitality" 
                  className="cook-art-img"
                />
                <div className="cook-art-tag">
                  <Sparkles size={14} />
                  <span>Heirloom Hospitality</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .book-cook-section {
          padding-top: 60px;
          padding-bottom: 100px;
          background-color: var(--color-warm-white);
        }

        .book-cook-card {
          background: #FFFFFF;
          border-radius: var(--radius-lg);
          padding: 56px;
          border: 1px solid rgba(0, 0, 0, 0.08);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.04);
        }

        .book-cook-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .book-cook-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .pilot-status-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #FFF9E6;
          color: #8C6500;
          border: 1px solid rgba(255, 210, 51, 0.5);
          padding: 6px 14px;
          border-radius: 9999px;
          font-size: 0.76rem;
          font-weight: 700;
          margin-bottom: 20px;
          text-transform: uppercase;
        }

        .book-cook-title {
          font-size: clamp(1.8rem, 3.2vw, 2.5rem);
          font-weight: 800;
          color: var(--color-ink-black);
          line-height: 1.25;
          margin-bottom: 16px;
        }

        .book-cook-lead {
          font-size: 1.05rem;
          color: var(--color-text-secondary);
          line-height: 1.65;
          margin-bottom: 28px;
        }

        .pilot-features-list {
          display: flex;
          flex-direction: column;
          gap: 18px;
          margin-bottom: 32px;
          width: 100%;
        }

        .pilot-feature-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }

        .pilot-feature-item svg {
          color: #8C6500;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .pilot-feature-item strong {
          display: block;
          font-size: 0.95rem;
          color: var(--color-ink-black);
          margin-bottom: 2px;
        }

        .pilot-feature-item p {
          font-size: 0.85rem;
          color: var(--color-text-secondary);
          line-height: 1.45;
        }

        .book-actions {
          margin-bottom: 16px;
        }

        .honest-pilot-note {
          font-size: 0.75rem;
          color: var(--color-text-muted);
          font-style: italic;
        }

        .cook-art-frame {
          position: relative;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(0, 0, 0, 0.08);
        }

        .cook-art-img {
          width: 100%;
          height: auto;
          object-fit: cover;
          display: block;
        }

        .cook-art-tag {
          position: absolute;
          bottom: 16px;
          left: 16px;
          background: rgba(17, 17, 17, 0.85);
          backdrop-filter: blur(8px);
          color: var(--color-brand-yellow);
          padding: 6px 14px;
          border-radius: 9999px;
          font-size: 0.78rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        @media (max-width: 960px) {
          .book-cook-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .book-cook-card {
            padding: 32px 24px;
          }
        }
      `}</style>
    </section>
  );
};
