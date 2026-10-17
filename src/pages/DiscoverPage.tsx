import React, { useState } from 'react';
import { REGIONAL_FOODS } from '../data/feaztoData';
import { Sparkles, MapPin, Filter, ArrowRight } from 'lucide-react';

interface DiscoverPageProps {
  navigate: (route: string) => void;
}

export const DiscoverPage: React.FC<DiscoverPageProps> = ({ navigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Curry & Rice', 'Breakfast', 'Snacks & Sweets'];

  const filteredDishes = selectedCategory === 'All' 
    ? REGIONAL_FOODS 
    : REGIONAL_FOODS.filter(d => d.category === selectedCategory);

  return (
    <div className="secondary-page discover-page">
      <section className="page-hero-banner">
        <div className="container">
          <div className="badge-tag">
            <Sparkles size={13} />
            <span>Culinary Provenance</span>
          </div>
          <h1 className="page-hero-title">Discover Regional Flavours</h1>
          <p className="page-hero-subtitle">
            Explore authentic recipes indexed by state, micro-region, and heirloom preparation style.
          </p>
        </div>
      </section>

      <section className="discover-content-section">
        <div className="container">
          {/* Category Filter Pills */}
          <div className="filters-container">
            <div className="filter-label">
              <Filter size={16} />
              <span>Category Filter:</span>
            </div>
            <div className="filter-pills-row">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`filter-pill-btn ${selectedCategory === cat ? 'active' : ''}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Dishes Grid */}
          <div className="discover-dishes-grid">
            {filteredDishes.map((dish) => (
              <div key={dish.id} className="dish-detailed-card">
                <div className="dish-img-box">
                  <img src={dish.image} alt={dish.name} />
                  <div className="state-badge">
                    <MapPin size={12} />
                    <span>{dish.originState}</span>
                  </div>
                </div>

                <div className="dish-body-box">
                  <div className="dish-zone-tag">{dish.region}</div>
                  <h3 className="dish-title">{dish.name}</h3>
                  <p className="dish-desc">{dish.description}</p>
                  
                  <div className="heritage-story-block">
                    <strong>Preparation Tradition:</strong>
                    <p>{dish.storyNote}</p>
                  </div>

                  <div className="dish-tags-list">
                    {dish.tags.map((t) => (
                      <span key={t} className="dish-tag">#{t}</span>
                    ))}
                  </div>

                  <button 
                    type="button"
                    onClick={() => navigate('/download')}
                    className="btn btn-yellow btn-full-width mt-3"
                  >
                    <span>Reserve in Next Batch</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .discover-content-section {
          padding: 60px 0 100px 0;
          background: var(--color-warm-white);
        }

        .filters-container {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }

        .filter-label {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--color-ink-black);
        }

        .filter-pills-row {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .filter-pill-btn {
          padding: 8px 18px;
          border-radius: var(--radius-capsule);
          background: #FFFFFF;
          border: 1px solid rgba(0, 0, 0, 0.1);
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--color-text-secondary);
          transition: all 0.2s ease;
          cursor: pointer;
        }

        .filter-pill-btn:hover {
          border-color: var(--color-ink-black);
          color: var(--color-ink-black);
        }

        .filter-pill-btn.active {
          background: var(--color-ink-black);
          color: #FFFFFF;
          border-color: var(--color-ink-black);
        }

        .discover-dishes-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 32px;
        }

        .dish-detailed-card {
          background: #FFFFFF;
          border-radius: var(--radius-lg);
          border: 1px solid rgba(0, 0, 0, 0.08);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.04);
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .dish-img-box {
          position: relative;
          background: #FFF9E6;
          padding: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 220px;
        }

        .dish-img-box img {
          width: 75%;
          max-height: 160px;
          object-fit: contain;
          filter: drop-shadow(0 12px 20px rgba(0, 0, 0, 0.12));
        }

        .state-badge {
          position: absolute;
          top: 14px;
          left: 14px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(8px);
          padding: 5px 12px;
          border-radius: var(--radius-capsule);
          font-size: 0.74rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .dish-body-box {
          padding: 24px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .dish-zone-tag {
          font-size: 0.76rem;
          font-weight: 700;
          color: #8C6500;
          text-transform: uppercase;
          margin-bottom: 6px;
        }

        .dish-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--color-ink-black);
          margin-bottom: 8px;
        }

        .dish-desc {
          font-size: 0.9rem;
          color: var(--color-text-secondary);
          line-height: 1.5;
          margin-bottom: 16px;
        }

        .heritage-story-block {
          background: var(--color-warm-white);
          border-left: 3px solid var(--color-brand-yellow);
          padding: 10px 14px;
          border-radius: 6px;
          margin-bottom: 16px;
        }

        .heritage-story-block strong {
          display: block;
          font-size: 0.78rem;
          color: var(--color-ink-black);
          margin-bottom: 2px;
        }

        .heritage-story-block p {
          font-size: 0.82rem;
          color: var(--color-text-secondary);
          line-height: 1.45;
        }

        .dish-tags-list {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: auto;
          margin-bottom: 16px;
        }

        .dish-tag {
          font-size: 0.72rem;
          background: rgba(0, 0, 0, 0.04);
          padding: 2px 8px;
          border-radius: 4px;
          color: var(--color-text-secondary);
        }

        .btn-full-width {
          width: 100%;
        }

        .mt-3 {
          margin-top: 12px;
        }
      `}</style>
    </div>
  );
};
