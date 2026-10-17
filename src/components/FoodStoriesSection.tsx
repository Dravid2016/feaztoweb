import React from 'react';
import { Sparkles, ArrowRight, BookOpen } from 'lucide-react';

interface FoodStoriesSectionProps {
  navigate: (route: string) => void;
}

export const FoodStoriesSection: React.FC<FoodStoriesSectionProps> = ({ navigate }) => {
  const stories = [
    {
      title: 'The Alchemy of Deccani Seeraga Samba Dum',
      subtitle: 'Why short-grain aromatic rice absorbs spice notes better than industrial grains.',
      region: 'Telangana & Hyderabad',
      readTime: '4 min read',
      img: '/brand/plate-biryani.png'
    },
    {
      title: 'Shadrasa: The Six Tastes of a Vedic Thali',
      subtitle: 'Balancing sweet, sour, salty, bitter, pungent, and astringent in daily dining.',
      region: 'Western & Southern Ghats',
      readTime: '5 min read',
      img: '/brand/plate-thali.png'
    },
    {
      title: 'The 14-Hour Wild Fermentation of Idli Batter',
      subtitle: 'How granite stone grinders cultivate gentle lactobacillus cultures without yeast.',
      region: 'Kongu Nadu & Thanjavur',
      readTime: '3 min read',
      img: '/brand/plate-idli.png'
    }
  ];

  return (
    <section className="food-stories-section">
      <div className="container">
        <div className="stories-header">
          <div className="badge-tag">
            <Sparkles size={13} />
            <span>Cultural Heritage & Origins</span>
          </div>
          <h2 className="stories-title">Food Stories from the Soil</h2>
          <p className="stories-subtitle">
            Deep dive into regional culinary history, micro-seasonality, and the cultural traditions behind every FEAzTO recipe.
          </p>
        </div>

        <div className="stories-editorial-grid">
          {stories.map((st, idx) => (
            <article key={idx} className="story-card" onClick={() => navigate('/our-story')}>
              <div className="story-card-image">
                <img src={st.img} alt={st.title} />
                <span className="story-region-tag">{st.region}</span>
              </div>
              <div className="story-card-text">
                <div className="story-read-meta">
                  <BookOpen size={13} />
                  <span>{st.readTime}</span>
                </div>
                <h3 className="story-headline-title">{st.title}</h3>
                <p className="story-summary-text">{st.subtitle}</p>
                <div className="story-card-link">
                  <span>Read Essay</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .food-stories-section {
          padding-top: 100px;
          padding-bottom: 100px;
          background-color: var(--color-pure-white);
        }

        .stories-header {
          text-align: center;
          max-width: 680px;
          margin: 0 auto 56px auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .stories-title {
          font-size: clamp(2rem, 3.4vw, 2.8rem);
          font-weight: 800;
          color: var(--color-ink-black);
          margin-top: 18px;
          margin-bottom: 14px;
        }

        .stories-subtitle {
          font-size: 1.05rem;
          color: var(--color-text-secondary);
          line-height: 1.6;
        }

        .stories-editorial-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 32px;
        }

        .story-card {
          background: var(--color-warm-white);
          border-radius: var(--radius-lg);
          border: 1px solid rgba(0, 0, 0, 0.06);
          overflow: hidden;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          transition: transform 0.28s ease, box-shadow 0.28s ease;
        }

        .story-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.08);
        }

        .story-card-image {
          position: relative;
          height: 200px;
          background: #FFF9E6;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .story-card-image img {
          width: 60%;
          max-height: 150px;
          object-fit: contain;
          filter: drop-shadow(0 10px 18px rgba(0, 0, 0, 0.1));
          transition: transform 0.3s ease;
        }

        .story-card:hover .story-card-image img {
          transform: scale(1.08);
        }

        .story-region-tag {
          position: absolute;
          top: 14px;
          left: 14px;
          background: #FFFFFF;
          padding: 4px 10px;
          border-radius: var(--radius-capsule);
          font-size: 0.72rem;
          font-weight: 700;
          color: #8C6500;
        }

        .story-card-text {
          padding: 26px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .story-read-meta {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.76rem;
          color: var(--color-text-muted);
          margin-bottom: 12px;
        }

        .story-headline-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--color-ink-black);
          line-height: 1.35;
          margin-bottom: 10px;
        }

        .story-summary-text {
          font-size: 0.9rem;
          color: var(--color-text-secondary);
          line-height: 1.55;
          margin-bottom: 20px;
        }

        .story-card-link {
          margin-top: auto;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--color-ink-black);
          transition: color 0.2s;
        }

        .story-card:hover .story-card-link {
          color: #8C6500;
        }
      `}</style>
    </section>
  );
};
