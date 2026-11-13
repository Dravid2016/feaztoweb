import React from 'react';
import { Sparkles, HeartHandshake, ShieldCheck, Flame } from 'lucide-react';
import { KolamFrame } from '../components/KolamFrame';

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
            Preserving Regional Soul in a Fast Moving World
          </h1>
          <p className="page-hero-subtitle">
            feazto was conceived to bridge the emotional divide between memories of home food and the realities of modern urban living.
          </p>
        </div>
      </section>

      {/* Main Narrative Article */}
      <section className="editorial-article-section">
        <div className="container article-container">
          <div className="article-body">
            <div className="article-lead-paragraph">
              Food is cultural memory held together by smoke, earth, water, and intention. For generations across India, family recipes were never measured in grams; they were gauged by aroma, the hiss of hot cold pressed mustard oil, and the intuitive touch of mothers and grandmothers.
            </div>



            <div className="story-kolam-card-wrapper" style={{ margin: '50px auto', width: '100%', maxWidth: '980px' }}>
              <KolamFrame variant="gradient" hasCorners={true}>
                <div style={{ textAlign: 'center', padding: '16px 20px', color: '#181B20' }}>
                  <div 
                    style={{ 
                      display: 'inline-flex', 
                      alignItems: 'center',
                      gap: '8px',
                      padding: '7px 20px',
                      borderRadius: '9999px',
                      background: 'rgba(0, 0, 0, 0.2)',
                      border: '1px solid rgba(255, 255, 255, 0.35)',
                      color: '#181B20',
                      fontSize: '0.78rem',
                      fontWeight: 800,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      marginBottom: '20px' 
                    }}
                  >
                    <Sparkles size={13} style={{ fill: '#FFFFFF' }} />
                    <span>The Soul of feazto</span>
                  </div>

                  <h2 style={{
                    fontSize: 'clamp(2.1rem, 4vw, 3rem)',
                    fontWeight: 900,
                    lineHeight: 1.2,
                    color: '#181B20',
                    letterSpacing: '-0.025em',
                    margin: '0 0 20px 0',
                    textShadow: '0 2px 14px rgba(0, 0, 0, 0.16)'
                  }}>
                    Food is not just calories.<br />
                    It is memory, belonging, and culture.
                  </h2>

                  <p style={{
                    fontSize: '1.12rem',
                    color: 'rgba(255, 255, 255, 0.96)',
                    fontWeight: 500,
                    lineHeight: 1.7,
                    maxWidth: '820px',
                    margin: '0 auto 16px auto'
                  }}>
                    In our rush toward fast urban lives and homogenized delivery portals, we started losing the taste of true home cooking, the slow stirred lentils, the sun dried spices ground by hand, the seasonal recipes guarded by generations.
                  </p>

                  <p style={{
                    fontSize: '1.02rem',
                    color: 'rgba(255, 255, 255, 0.92)',
                    lineHeight: 1.7,
                    maxWidth: '820px',
                    margin: '0 auto 36px auto'
                  }}>
                    feazto was born out of a simple observation: across every city apartment, people crave the authentic taste of their hometowns, while brilliant home cooks, our FoodPreneurs, possess centuries of culinary mastery waiting to be shared.
                  </p>

                  {/* 3 Pillars in frosted translucent cards */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                    gap: '20px',
                    textAlign: 'center',
                    marginBottom: '10px'
                  }}>
                    <div style={{
                      background: 'rgba(255, 255, 255, 0.16)',
                      backdropFilter: 'blur(12px)',
                      padding: '28px 22px',
                      borderRadius: '20px',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.06)'
                    }}>
                      <div style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: '50%',
                        background: '#FFFFFF',
                        color: '#E05300',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '14px',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.12)'
                      }}>
                        <Flame size={22} fill="currentColor" />
                      </div>
                      <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#181B20', margin: '0 0 8px 0' }}>
                        Heritage Dum & Stone-Grinding
                      </h4>
                      <p style={{ fontSize: '0.88rem', color: 'rgba(255, 255, 255, 0.9)', lineHeight: 1.55, margin: 0 }}>
                        Preserving unhurried cooking methods without industrial shortcuts or pre mixes.
                      </p>
                    </div>

                    <div style={{
                      background: 'rgba(255, 255, 255, 0.16)',
                      backdropFilter: 'blur(12px)',
                      padding: '28px 22px',
                      borderRadius: '20px',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.06)'
                    }}>
                      <div style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: '50%',
                        background: '#FFFFFF',
                        color: '#E05300',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '14px',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.12)'
                      }}>
                        <HeartHandshake size={22} fill="currentColor" />
                      </div>
                      <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#181B20', margin: '0 0 8px 0' }}>
                        Empowering FoodPreneurs
                      </h4>
                      <p style={{ fontSize: '0.88rem', color: 'rgba(255, 255, 255, 0.9)', lineHeight: 1.55, margin: 0 }}>
                        Transforming passionate home cooks into certified culinary creators with commercial tools.
                      </p>
                    </div>

                    <div style={{
                      background: 'rgba(255, 255, 255, 0.16)',
                      backdropFilter: 'blur(12px)',
                      padding: '28px 22px',
                      borderRadius: '20px',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.06)'
                    }}>
                      <div style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: '50%',
                        background: '#FFFFFF',
                        color: '#E05300',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '14px',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.12)'
                      }}>
                        <ShieldCheck size={22} fill="currentColor" />
                      </div>
                      <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#181B20', margin: '0 0 8px 0' }}>
                        Cloud Kitchen Precision
                      </h4>
                      <p style={{ fontSize: '0.88rem', color: 'rgba(255, 255, 255, 0.9)', lineHeight: 1.55, margin: 0 }}>
                        State-of-the-art hygiene compliance, temperature control, and tamper proof delivery.
                      </p>
                    </div>
                  </div>
                </div>
              </KolamFrame>
            </div>

            <h2 className="article-section-title">The Commercialization Paradox</h2>
            <p className="article-p">
              Over the last decade, food delivery revolutionized urban convenience. However, convenience brought an unintended consequence: the industrial homogenization of flavor. Kitchens replaced slow dum cooking with commercial gravies, synthetic food enhancers, and frozen pre mixes. The dishes had names, but they had lost their soul.
            </p>
            <p className="article-p">
              Simultaneously, hundreds of thousands of extraordinarily talented home cooks, recipe custodians with thirty or forty years of unwritten knowledge, remained invisible in the modern digital food economy.
            </p>

            <div className="quote-callout-box">
              <p>“We don’t need faster food. We need deeper food. Recipes that remember where they came from.”</p>
              <span>— feazto Founding Principle</span>
            </div>

            <h2 className="article-section-title">The Birth of feazto: Food • Culture • Connect</h2>
            <p className="article-p">
              We asked a foundational question: What if we could give master home cooks the precision, hygiene compliance, and technology of a world-class cloud kitchen, while keeping their recipes completely uncompromised?
            </p>
            <p className="article-p">
              That is feazto. We provide certified FoodPreneurs with audited cloud kitchen infrastructure, raw spice sourcing, and digital ordering platforms so they can focus on doing what they love: creating honest food.
            </p>

            <div className="values-grid">
              <div className="value-card">
                <Flame size={24} fill="currentColor" className="val-icon" />
                <h3>Slow Handcrafted Techniques</h3>
                <p>We honor authentic hand-grinding, slow dough-sealing, and natural overnight fermentation.</p>
              </div>

              <div className="value-card">
                <ShieldCheck size={24} fill="currentColor" className="val-icon" />
                <h3>Hygiene Without Compromise</h3>
                <p>Commercial-grade kitchen sterilization, regular audits, and zero artificial preservatives.</p>
              </div>

              <div className="value-card">
                <HeartHandshake size={24} fill="currentColor" className="val-icon" />
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
                className="story-cta-btn"
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
          background: transparent;
          border-bottom: none;
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
          max-width: 800px;
        }

        .story-kolam-card-wrapper {
          width: 100vw;
          max-width: 980px !important;
          position: relative;
          left: 50%;
          transform: translateX(-50%);
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
          background: linear-gradient(135deg, #FFDE59 0%, #FAC921 50%, #E5A800 100%);
          color: #181B20;
          padding: 48px 36px;
          border-radius: 32px;
          text-align: center;
          margin-top: 40px;
          box-shadow: 0 20px 48px rgba(248, 181, 4, 0.32);
          position: relative;
          overflow: hidden;
        }

        .story-cta-box::before {
          content: '';
          position: absolute;
          top: -30%;
          right: -15%;
          width: 320px;
          height: 320px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.35) 0%, transparent 70%);
          pointer-events: none;
        }

        .story-cta-box h3 {
          color: #181B20;
          font-size: clamp(1.8rem, 3vw, 2.2rem);
          font-weight: 900;
          margin-bottom: 10px;
          letter-spacing: -0.02em;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.12);
        }

        .story-cta-box p {
          color: rgba(255, 255, 255, 0.95);
          font-size: 1.05rem;
          font-weight: 500;
          margin-bottom: 28px;
          max-width: 540px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.55;
        }

        .story-cta-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 14px 32px;
          border-radius: 9999px;
          border: none;
          background: #FFFFFF;
          color: #111827;
          font-size: 0.96rem;
          font-weight: 800;
          cursor: pointer;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.16), 0 2px 6px rgba(0, 0, 0, 0.08);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .story-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.22);
        }
      `}</style>
    </div>
  );
};
