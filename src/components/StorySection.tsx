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
          <div className="story-container">
            {/* Left Column: Rich Editorial Storytelling */}
            <div className="story-content-col">
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

              {/* Pillars List */}
              <div className="story-pillars-grid">
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

            {/* Right Column: Reference B Painterly Indian Kitchen Scene */}
            <div className="story-visual-col">
              <div className="painterly-frame-wrap">
                {/* The Painterly Kitchen Image */}
                <img 
                  src="/brand/painterly-kitchen-hero.jpg" 
                  alt="Painterly illustration of an authentic Indian kitchen with hands seasoning a bubbling pan" 
                  className="painterly-image-main"
                />
                
                {/* Kolam Emblem Overlay */}
                <div className="kolam-corner-accent">
                  <img src="/brand/kolam-1.png" alt="Traditional decorative kolam" />
                </div>

                {/* Floating Story Card */}
                <div className="floating-story-card">
                  <div className="floating-quote-icon">“</div>
                  <p className="floating-quote-text">
                    Every pinch of spice tells a story of the soil it grew in and the hands that nurtured it.
                  </p>
                  <div className="floating-author">
                    <span className="author-name">Padmavathi Rao</span>
                    <span className="author-role">FEAzTO FoodPreneur</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </KolamFrame>
      </div>

      <style>{`
        .feazto-story-section {
          padding-top: 60px;
          padding-bottom: 60px;
          background-color: var(--color-pure-white);
          position: relative;
          overflow: hidden;
        }

        .story-container {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .story-content-col {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .story-headline {
          font-size: clamp(2rem, 3.8vw, 2.9rem);
          font-weight: 800;
          line-height: 1.2;
          color: var(--color-ink-black);
          margin-top: 18px;
          margin-bottom: 20px;
          letter-spacing: -0.025em;
        }

        .story-lead-p {
          font-size: 1.12rem;
          color: #2b2b2b;
          font-weight: 500;
          line-height: 1.7;
          margin-bottom: 16px;
        }

        .story-body-p {
          font-size: 1rem;
          color: var(--color-text-secondary);
          line-height: 1.7;
          margin-bottom: 30px;
        }

        .story-pillars-grid {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 32px;
          width: 100%;
        }

        .pillar-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          background: var(--color-warm-white);
          padding: 16px 20px;
          border-radius: var(--radius-md);
          border: 1px solid var(--color-border-subtle);
          transition: transform 0.2s ease, border-color 0.2s ease;
        }

        .pillar-item:hover {
          transform: translateX(4px);
          border-color: rgba(255, 210, 51, 0.6);
        }

        .pillar-icon-box {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: var(--color-brand-yellow-subtle);
          color: #8C6500;
          flex-shrink: 0;
        }

        .pillar-title {
          font-size: 0.98rem;
          font-weight: 700;
          color: var(--color-ink-black);
          margin-bottom: 4px;
        }

        .pillar-desc {
          font-size: 0.86rem;
          color: var(--color-text-secondary);
          line-height: 1.5;
        }

        /* Right Column Visual */
        .story-visual-col {
          position: relative;
        }

        .painterly-frame-wrap {
          position: relative;
          border-radius: var(--radius-lg);
          padding: 10px;
          background: #FFFFFF;
          box-shadow: 0 20px 48px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(0, 0, 0, 0.06);
        }

        .painterly-image-main {
          width: 100%;
          border-radius: 16px;
          object-fit: cover;
          display: block;
        }

        .kolam-corner-accent {
          position: absolute;
          top: -20px;
          right: -20px;
          width: 80px;
          height: 80px;
          opacity: 0.55;
          pointer-events: none;
        }

        .kolam-corner-accent img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .floating-story-card {
          position: absolute;
          bottom: -28px;
          left: -20px;
          background: #FFFFFF;
          border-radius: var(--radius-md);
          padding: 18px 22px;
          max-width: 310px;
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.12);
          border-left: 4px solid var(--color-brand-yellow);
          border-top: 1px solid rgba(0, 0, 0, 0.05);
          border-right: 1px solid rgba(0, 0, 0, 0.05);
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        }

        .floating-quote-icon {
          font-size: 2.2rem;
          font-family: var(--font-serif);
          color: var(--color-brand-yellow);
          line-height: 0.8;
          margin-bottom: 4px;
        }

        .floating-quote-text {
          font-size: 0.86rem;
          font-style: italic;
          color: var(--color-ink-black);
          line-height: 1.5;
          margin-bottom: 10px;
        }

        .floating-author {
          display: flex;
          flex-direction: column;
        }

        .author-name {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--color-ink-black);
        }

        .author-role {
          font-size: 0.7rem;
          color: var(--color-text-muted);
        }

        @media (max-width: 960px) {
          .story-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .floating-story-card {
            position: relative;
            bottom: auto;
            left: auto;
            margin-top: 16px;
            max-width: 100%;
          }
        }
      `}</style>
    </section>
  );
};
