import React from 'react';
import { Sparkles, HeartHandshake, ShieldCheck, Flame } from 'lucide-react';
import { KolamFrame } from './KolamFrame';

interface StorySectionProps {
  navigate: (route: string) => void;
}

export const StorySection: React.FC<StorySectionProps> = ({ navigate }) => {
  return (
    <section className="feazto-story-section">
      <div className="container">
        {/* Cultural Kolam Frame wrapping the storytelling section */}
        <KolamFrame variant="light" hasCorners={true}>
          <div className="story-container-centered">
            {/* Centered Editorial Storytelling */}
            <div className="story-content-col-centered">
              <div className="badge-tag">
                <Sparkles size={13} />
                <span>The Soul of FEAzTO</span>
              </div>

              <h2 className="story-headline">
                Food is not just calories.<br />
                It is memory, belonging, and culture.
              </h2>

              <p className="story-lead-p">
                In our rush toward fast urban lives and homogenized delivery portals, we started losing the taste of true home cooking—the slow-stirred lentils, the sun-dried spices ground by hand, the seasonal recipes guarded by generations.
              </p>

              <p className="story-body-p">
                FEAzTO was born out of a simple observation: across every city apartment, people crave the authentic taste of their hometowns, while brilliant home cooks—our FoodPreneurs—possess centuries of culinary mastery waiting to be shared.
              </p>

              {/* Pillars List - Centered Grid */}
              <div className="story-pillars-grid-centered">
                <div className="pillar-item">
                  <div className="pillar-icon-box">
                    <Flame size={20} />
                  </div>
                  <div>
                    <h4 className="pillar-title">Heritage Dum & Stone-Grinding</h4>
                    <p className="pillar-desc">Preserving unhurried cooking methods without industrial shortcuts or pre-mixes.</p>
                  </div>
                </div>

                <div className="pillar-item">
                  <div className="pillar-icon-box">
                    <HeartHandshake size={20} />
                  </div>
                  <div>
                    <h4 className="pillar-title">Empowering FoodPreneurs</h4>
                    <p className="pillar-desc">Transforming passionate home cooks into certified culinary creators with commercial tools.</p>
                  </div>
                </div>

                <div className="pillar-item">
                  <div className="pillar-icon-box">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h4 className="pillar-title">Cloud-Kitchen Precision</h4>
                    <p className="pillar-desc">State-of-the-art hygiene compliance, temperature control, and tamper-proof delivery.</p>
                  </div>
                </div>
              </div>

              <div className="story-action-row">
                <button 
                  type="button" 
                  onClick={() => navigate('/our-story')}
                  className="btn btn-primary"
                >
                  <span>Read Our Full Story</span>
                </button>
              </div>
            </div>
          </div>
        </KolamFrame>
      </div>

      <style>{`
        .feazto-story-section {
          padding-top: 60px;
          padding-bottom: 60px;
          background: linear-gradient(180deg, #FDF0C3 0%, #FEF8E6 50%, #FFFDF7 100%);
          position: relative;
          overflow: hidden;
        }

        .story-container-centered {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          max-width: 860px;
          margin: 0 auto;
          padding: 20px 0;
        }

        .story-content-col-centered {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          width: 100%;
        }

        .story-headline {
          font-size: clamp(2rem, 3.8vw, 2.9rem);
          font-weight: 800;
          line-height: 1.25;
          color: var(--color-ink-black);
          margin-top: 18px;
          margin-bottom: 20px;
          letter-spacing: -0.025em;
          text-align: center;
        }

        .story-lead-p {
          font-size: 1.12rem;
          color: #2b2b2b;
          font-weight: 500;
          line-height: 1.7;
          margin-bottom: 16px;
          text-align: center;
          max-width: 760px;
        }

        .story-body-p {
          font-size: 1rem;
          color: var(--color-text-secondary);
          line-height: 1.7;
          margin-bottom: 36px;
          text-align: center;
          max-width: 760px;
        }

        .story-pillars-grid-centered {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-bottom: 36px;
          width: 100%;
          text-align: center;
        }

        .pillar-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 14px;
          background: var(--color-warm-white);
          padding: 24px 20px;
          border-radius: var(--radius-md);
          border: 1px solid var(--color-border-subtle);
          transition: transform 0.2s ease, border-color 0.2s ease;
        }

        .pillar-item:hover {
          transform: translateY(-4px);
          border-color: rgba(255, 210, 51, 0.6);
        }

        .pillar-icon-box {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: var(--color-brand-yellow-subtle);
          color: #8C6500;
          flex-shrink: 0;
        }

        .pillar-title {
          font-size: 1rem;
          font-weight: 700;
          color: var(--color-ink-black);
          margin-bottom: 6px;
          text-align: center;
        }

        .pillar-desc {
          font-size: 0.88rem;
          color: var(--color-text-secondary);
          line-height: 1.5;
          text-align: center;
        }

        .story-action-row {
          display: flex;
          justify-content: center;
          width: 100%;
        }

        @media (max-width: 960px) {
          .story-pillars-grid-centered {
            grid-template-columns: 1fr;
            gap: 16px;
          }
        }
      `}</style>
    </section>
  );
};
