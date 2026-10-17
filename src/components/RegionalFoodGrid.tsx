import React from 'react';
import { REGIONAL_FOODS } from '../data/feaztoData';
import { Sparkles, MapPin, ArrowRight } from 'lucide-react';

interface RegionalFoodGridProps {
  navigate: (route: string) => void;
}

export const RegionalFoodGrid: React.FC<RegionalFoodGridProps> = ({ navigate }) => {
  return (
    <section className="regional-food-section">
      <div className="container">
        {/* Section Header */}
        <div className="food-section-header">
          <div className="badge-tag">
            <Sparkles size={13} />
            <span>Curated Heritage Kitchens</span>
          </div>
          <h2 className="food-headline">Authentic Regional Flavours</h2>
          <p className="food-subheadline">
            Explore carefully documented regional recipes, prepared with authentic ingredients, stone-ground masalas, and zero artificial coloring.
          </p>
        </div>

        {/* Editorial Food Cards Grid with Cultural Kolam Framing */}
        <div className="food-grid">
          {REGIONAL_FOODS.map((dish) => (
            <div key={dish.id} className="cultural-food-card">
              {/* Kolam Corner Accent Linework */}
              <div className="card-kolam-corner top-left" aria-hidden="true">
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4,28 C4,16 16,4 28,4" stroke="#E5B81C" strokeWidth="1.5" strokeDasharray="3 2" />
                  <circle cx="16" cy="16" r="2" fill="#E5B81C" />
                </svg>
              </div>
              <div className="card-kolam-corner top-right" aria-hidden="true">
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M28,28 C28,16 16,4 4,4" stroke="#E5B81C" strokeWidth="1.5" strokeDasharray="3 2" />
                  <circle cx="16" cy="16" r="2" fill="#E5B81C" />
                </svg>
              </div>

              <div className="food-card-image-wrap">
                {/* Traditional Kolam halo behind the plate */}
                <div className="plate-kolam-halo" aria-hidden="true">
                  <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="80" cy="80" r="70" stroke="#FFD233" strokeWidth="1" strokeDasharray="4 3" opacity="0.6" />
                    <circle cx="80" cy="80" r="54" stroke="#E5B81C" strokeWidth="1" opacity="0.4" />
                    <circle cx="80" cy="10" r="2.5" fill="#E5B81C" />
                    <circle cx="80" cy="150" r="2.5" fill="#E5B81C" />
                    <circle cx="10" cy="80" r="2.5" fill="#E5B81C" />
                    <circle cx="150" cy="80" r="2.5" fill="#E5B81C" />
                  </svg>
                </div>

                <img 
                  src={dish.image} 
                  alt={dish.name} 
                  className="food-card-img" 
                  loading="lazy"
                />
                <div className="food-region-pill">
                  <MapPin size={12} />
                  <span>{dish.originState}</span>
                </div>
              </div>

              {/* Kolam border trim between image and content */}
              <div className="card-kolam-border-trim" aria-hidden="true">
                <svg viewBox="0 0 300 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="0" y1="4" x2="300" y2="4" stroke="#FFD233" strokeWidth="1" strokeDasharray="6 3" />
                  <circle cx="150" cy="4" r="3" fill="#E5B81C" />
                </svg>
              </div>

              <div className="food-card-body">
                <div className="food-card-top-meta">
                  <span className="food-heritage-zone">{dish.region}</span>
                  <span className="food-category-tag">{dish.category}</span>
                </div>

                <h3 className="food-dish-title">{dish.name}</h3>
                <p className="food-dish-desc">{dish.description}</p>

                <div className="food-story-bubble">
                  <span className="bubble-label">Tradition:</span> {dish.storyNote}
                </div>

                <div className="food-tags-row">
                  {dish.tags.map((tag) => (
                    <span key={tag} className="food-spec-tag">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA to Discover page */}
        <div className="food-cta-row">
          <button 
            type="button" 
            onClick={() => navigate('/discover')}
            className="btn btn-primary"
          >
            <span>Explore All Regional Specialties</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      <style>{`
        .regional-food-section {
          padding-top: 100px;
          padding-bottom: 100px;
          background-color: var(--color-warm-white);
        }

        .food-section-header {
          text-align: center;
          max-width: 680px;
          margin: 0 auto 56px auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .food-headline {
          font-size: clamp(2rem, 3.4vw, 2.8rem);
          font-weight: 800;
          color: var(--color-ink-black);
          margin-top: 18px;
          margin-bottom: 14px;
        }

        .food-subheadline {
          font-size: 1.05rem;
          color: var(--color-text-secondary);
          line-height: 1.6;
        }

        .food-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 32px;
          margin-bottom: 48px;
        }

        .cultural-food-card {
          position: relative;
          background: #FFFFFF;
          border-radius: var(--radius-lg);
          overflow: hidden;
          border: 1.5px solid rgba(255, 210, 51, 0.45);
          box-shadow: 0 10px 28px rgba(0, 0, 0, 0.05);
          transition: transform 0.28s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.28s ease, border-color 0.28s ease;
          display: flex;
          flex-direction: column;
        }

        .cultural-food-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 42px rgba(255, 210, 51, 0.18);
          border-color: rgba(255, 210, 51, 0.9);
        }

        .card-kolam-corner {
          position: absolute;
          width: 32px;
          height: 32px;
          z-index: 2;
          pointer-events: none;
        }
        .card-kolam-corner.top-left {
          top: 8px;
          left: 8px;
        }
        .card-kolam-corner.top-right {
          top: 8px;
          right: 8px;
        }
        .card-kolam-corner svg {
          width: 100%;
          height: 100%;
        }

        .food-card-image-wrap {
          position: relative;
          background: linear-gradient(180deg, #FFFDF5 0%, #FFF8E1 100%);
          padding: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 220px;
          overflow: hidden;
        }

        .plate-kolam-halo {
          position: absolute;
          width: 160px;
          height: 160px;
          pointer-events: none;
          z-index: 1;
        }
        .plate-kolam-halo svg {
          width: 100%;
          height: 100%;
        }

        .food-card-img {
          position: relative;
          z-index: 2;
          width: 80%;
          max-height: 170px;
          object-fit: contain;
          transition: transform 0.4s ease;
          filter: drop-shadow(0 12px 20px rgba(0, 0, 0, 0.15));
        }

        .cultural-food-card:hover .food-card-img {
          transform: scale(1.08) rotate(1.5deg);
        }

        .food-region-pill {
          position: absolute;
          top: 16px;
          left: 16px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(8px);
          border-radius: var(--radius-capsule);
          padding: 5px 12px;
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 0.74rem;
          font-weight: 700;
          color: var(--color-ink-black);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.06);
          border: 1px solid rgba(255, 210, 51, 0.3);
          z-index: 3;
        }

        .card-kolam-border-trim {
          width: 100%;
          line-height: 0;
          padding: 0 20px;
          background: #FFF8E1;
        }
        .card-kolam-border-trim svg {
          width: 100%;
          height: 8px;
        }

        .food-card-body {
          padding: 24px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .food-card-top-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 10px;
        }

        .food-heritage-zone {
          font-size: 0.76rem;
          font-weight: 700;
          color: #B58400;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        .food-category-tag {
          font-size: 0.75rem;
          color: var(--color-text-muted);
          background: rgba(0, 0, 0, 0.04);
          padding: 3px 8px;
          border-radius: 4px;
        }

        .food-dish-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--color-ink-black);
          margin-bottom: 8px;
          line-height: 1.3;
        }

        .food-dish-desc {
          font-size: 0.9rem;
          color: var(--color-text-secondary);
          line-height: 1.55;
          margin-bottom: 14px;
        }

        .food-story-bubble {
          background: #FAFAFA;
          border-left: 3px solid var(--color-brand-yellow);
          padding: 10px 12px;
          border-radius: 4px;
          font-size: 0.82rem;
          color: #444444;
          line-height: 1.45;
          margin-bottom: 16px;
        }

        .bubble-label {
          font-weight: 700;
          color: var(--color-ink-black);
        }

        .food-tags-row {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: auto;
        }

        .food-spec-tag {
          font-size: 0.74rem;
          background: var(--color-warm-white);
          color: var(--color-text-secondary);
          padding: 3px 8px;
          border-radius: 4px;
          border: 1px solid rgba(0, 0, 0, 0.05);
        }

        .food-cta-row {
          display: flex;
          justify-content: center;
        }
      `}</style>
    </section>
  );
};
