import React from 'react';
import { Sparkles, HeartHandshake, ShieldCheck, Flame } from 'lucide-react';

interface OurStoryPageProps {
  navigate: (route: string) => void;
}

export const OurStoryPage: React.FC<OurStoryPageProps> = ({ navigate }) => {
  return (
    <div className="secondary-page our-story-page">
      {/* Editorial Header */}
      <section className="page-hero-banner">
        <div className="container">
          <div className="badge-tag">
            <Sparkles size={13} />
            <span>Our Founding Philosophy</span>
          </div>
          <h1 className="page-hero-title">
            Preserving Regional Soul in a Fast-Moving World
          </h1>
          <p className="page-hero-subtitle">
            FEAzTO was conceived to bridge the emotional divide between memories of home food and the realities of modern urban living.
          </p>
        </div>
      </section>

      {/* Main Narrative Article */}
      <section className="editorial-article-section">
        <div className="container article-container">
          <div className="article-body">
            <div className="article-lead-paragraph">
              Food is cultural memory held together by smoke, earth, water, and intention. For generations across India, family recipes were never measured in grams; they were gauged by aroma, the hiss of hot cold-pressed mustard oil, and the intuitive touch of mothers and grandmothers.
            </div>



            <h2 className="article-section-title">The Commercialization Paradox</h2>
            <p className="article-p">
              Over the last decade, food delivery revolutionized urban convenience. However, convenience brought an unintended consequence: the industrial homogenization of flavor. Kitchens replaced slow dum cooking with commercial gravies, synthetic food enhancers, and frozen pre-mixes. The dishes had names, but they had lost their soul.
            </p>
            <p className="article-p">
              Simultaneously, hundreds of thousands of extraordinarily talented home cooks—recipe custodians with thirty or forty years of unwritten knowledge—remained invisible in the modern digital food economy.
            </p>

            <div className="quote-callout-box">
              <p>“We don’t need faster food. We need deeper food. Recipes that remember where they came from.”</p>
              <span>— FEAzTO Founding Principle</span>
            </div>

            <h2 className="article-section-title">The Birth of FEAzTO: Food • Culture • Connect</h2>
            <p className="article-p">
              We asked a foundational question: What if we could give master home cooks the precision, hygiene compliance, and technology of a world-class cloud kitchen, while keeping their recipes completely uncompromised?
            </p>
            <p className="article-p">
              That is FEAzTO. We provide certified FoodPreneurs with audited cloud-kitchen infrastructure, raw spice sourcing, and digital ordering platforms so they can focus on doing what they love: creating honest food.
            </p>

            <div className="values-grid">
              <div className="value-card">
                <Flame size={24} className="val-icon" />
                <h3>Slow Handcrafted Techniques</h3>
                <p>We honor authentic hand-grinding, slow dough-sealing, and natural overnight fermentation.</p>
              </div>

              <div className="value-card">
                <ShieldCheck size={24} className="val-icon" />
                <h3>Hygiene Without Compromise</h3>
                <p>Commercial-grade kitchen sterilization, regular audits, and zero artificial preservatives.</p>
              </div>

              <div className="value-card">
                <HeartHandshake size={24} className="val-icon" />
                <h3>FoodPreneur Dignity</h3>
                <p>Equitable revenue sharing that turns home cooks into empowered culinary business owners.</p>
              </div>
            </div>

            <div className="story-cta-box">
              <h3>Taste the Heritage</h3>
              <p>Explore the culinary regions currently featured in our pilot kitchens.</p>
              <button 
                type="button" 
                onClick={() => navigate('/discover')}
                className="btn btn-yellow"
              >
                <span>Discover Regional Dishes</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .page-hero-banner {
          padding: 80px 0 60px 0;
          background: #FFFDF5;
          border-bottom: 1px solid rgba(0, 0, 0, 0.06);
          text-align: center;
        }

        .page-hero-title {
          font-size: clamp(2.4rem, 4.5vw, 3.8rem);
          font-weight: 800;
          color: var(--color-ink-black);
          margin-top: 18px;
          margin-bottom: 16px;
          line-height: 1.2;
        }

        .page-hero-subtitle {
          font-size: 1.15rem;
          color: var(--color-text-secondary);
          max-width: 680px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .editorial-article-section {
          padding: 80px 0 100px 0;
          background: #FFFFFF;
        }

        .article-container {
          max-width: 780px;
        }

        .article-body {
          display: flex;
          flex-direction: column;
        }

        .article-lead-paragraph {
          font-size: 1.25rem;
          color: var(--color-ink-black);
          line-height: 1.75;
          font-weight: 500;
          margin-bottom: 36px;
        }

        .story-media-break {
          margin: 20px 0 44px 0;
          border-radius: var(--radius-lg);
          overflow: hidden;
          background: var(--color-warm-white);
          border: 1px solid rgba(0, 0, 0, 0.08);
          padding: 12px;
        }

        .article-inline-image {
          width: 100%;
          border-radius: 16px;
          display: block;
        }

        .caption-text {
          display: block;
          font-size: 0.8rem;
          color: var(--color-text-muted);
          text-align: center;
          margin-top: 10px;
          font-style: italic;
        }

        .article-section-title {
          font-size: 1.8rem;
          font-weight: 800;
          color: var(--color-ink-black);
          margin-top: 36px;
          margin-bottom: 16px;
        }

        .article-p {
          font-size: 1.05rem;
          color: var(--color-text-secondary);
          line-height: 1.8;
          margin-bottom: 22px;
        }

        .quote-callout-box {
          background: #FFF9E6;
          border-left: 4px solid var(--color-brand-yellow);
          padding: 24px 28px;
          border-radius: 8px;
          margin: 32px 0;
        }

        .quote-callout-box p {
          font-size: 1.2rem;
          font-style: italic;
          font-family: var(--font-serif);
          color: var(--color-ink-black);
          line-height: 1.5;
          margin-bottom: 8px;
        }

        .quote-callout-box span {
          font-size: 0.8rem;
          font-weight: 700;
          color: #8C6500;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
          margin: 40px 0;
        }

        .value-card {
          background: var(--color-warm-white);
          padding: 24px 20px;
          border-radius: 14px;
          border: 1px solid rgba(0, 0, 0, 0.06);
        }

        .val-icon {
          color: #8C6500;
          margin-bottom: 12px;
        }

        .value-card h3 {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--color-ink-black);
          margin-bottom: 8px;
        }

        .value-card p {
          font-size: 0.88rem;
          color: var(--color-text-secondary);
          line-height: 1.5;
        }

        .story-cta-box {
          background: #111111;
          color: #FFFFFF;
          padding: 40px;
          border-radius: var(--radius-lg);
          text-align: center;
          margin-top: 36px;
        }

        .story-cta-box h3 {
          color: #FFFFFF;
          font-size: 1.6rem;
          margin-bottom: 8px;
        }

        .story-cta-box p {
          color: #AAAAAA;
          font-size: 0.95rem;
          margin-bottom: 24px;
        }
      `}</style>
    </div>
  );
};
