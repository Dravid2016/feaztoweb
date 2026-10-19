import React, { useState, useRef } from 'react';
import { REGIONAL_FOODS } from '../data/feaztoData';
import { Sparkles, MapPin, ArrowRight, Clock, Flame, Leaf } from 'lucide-react';
import type { FoodItem } from '../types';

interface RegionalFoodGridProps {
  navigate: (route: string) => void;
}

interface InteractivePlateCardProps {
  dish: FoodItem;
}

const InteractivePlateCard: React.FC<InteractivePlateCardProps> = ({ dish }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState<number>(0);
  const [tilt, setTilt] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within card
    const y = e.clientY - rect.top;  // y position within card

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const deltaX = x - centerX;
    const deltaY = y - centerY;

    // Calculate angle in degrees from center
    const angleRad = Math.atan2(deltaY, deltaX);
    const angleDeg = (angleRad * 180) / Math.PI;

    // Smooth dramatic rotation around the card center (-45 to +45 or continuous)
    setRotation(angleDeg * 0.45);

    // Subtle 3D card tilt
    const tiltX = (deltaY / centerY) * -5;
    const tiltY = (deltaX / centerX) * 5;
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation(0);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div 
      ref={cardRef}
      className={`cultural-food-card ${isHovered ? 'card-active' : ''}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isHovered 
          ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(-8px)` 
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)'
      }}
    >
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
        <div 
          className="plate-kolam-halo" 
          aria-hidden="true"
          style={{
            transform: `rotate(${rotation * 0.5}deg)`,
            transition: isHovered ? 'transform 0.08s ease-out' : 'transform 0.5s ease-out'
          }}
        >
          <svg viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="90" cy="90" r="78" stroke="#FFD233" strokeWidth="1.2" strokeDasharray="5 3" opacity="0.65" />
            <circle cx="90" cy="90" r="62" stroke="#E5B81C" strokeWidth="1" strokeDasharray="2 4" opacity="0.45" />
            <circle cx="90" cy="12" r="3" fill="#E5B81C" />
            <circle cx="90" cy="168" r="3" fill="#E5B81C" />
            <circle cx="12" cy="90" r="3" fill="#E5B81C" />
            <circle cx="168" cy="90" r="3" fill="#E5B81C" />
          </svg>
        </div>

        {/* Rotating Plate Image with responsive cursor physics */}
        <div 
          className="plate-interactive-stage"
          style={{
            transform: `rotate(${rotation}deg) scale(${isHovered ? 1.12 : 1})`,
            transition: isHovered ? 'transform 0.08s ease-out' : 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)'
          }}
        >
          <img 
            src={dish.image} 
            alt={dish.name} 
            className="food-card-img" 
            loading="lazy"
          />
        </div>

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

        {/* Nutrition and Timing Badges like modern luxury food cards */}
        <div className="dish-stats-pill-row">
          {dish.prepTime && (
            <div className="dish-stat-item">
              <Clock size={13} className="stat-icon time-icon" />
              <span>{dish.prepTime}</span>
            </div>
          )}
          {dish.calories && (
            <div className="dish-stat-item">
              <Flame size={13} className="stat-icon flame-icon" />
              <span>{dish.calories}</span>
            </div>
          )}
          {dish.protein && (
            <div className="dish-stat-item">
              <Leaf size={13} className="stat-icon protein-icon" />
              <span>{dish.protein}</span>
            </div>
          )}
        </div>

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
  );
};

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

        {/* Editorial Food Cards Grid with Dramatic Cursor-Rotating Plates */}
        <div className="food-grid">
          {REGIONAL_FOODS.map((dish) => (
            <InteractivePlateCard key={dish.id} dish={dish} />
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
          transition: box-shadow 0.28s ease, border-color 0.28s ease;
          display: flex;
          flex-direction: column;
          transform-style: preserve-3d;
          will-change: transform;
        }

        .cultural-food-card.card-active {
          box-shadow: 0 24px 48px rgba(229, 184, 28, 0.22), 0 12px 24px rgba(0, 0, 0, 0.08);
          border-color: rgba(255, 210, 51, 0.95);
        }

        .card-kolam-corner {
          position: absolute;
          width: 32px;
          height: 32px;
          z-index: 4;
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
          min-height: 230px;
          overflow: hidden;
          perspective: 600px;
        }

        .plate-kolam-halo {
          position: absolute;
          width: 180px;
          height: 180px;
          pointer-events: none;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          will-change: transform;
        }
        .plate-kolam-halo svg {
          width: 100%;
          height: 100%;
        }

        .plate-interactive-stage {
          position: relative;
          z-index: 2;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          will-change: transform;
          cursor: grab;
        }

        .food-card-img {
          position: relative;
          width: 78%;
          max-height: 175px;
          object-fit: contain;
          filter: drop-shadow(0 14px 22px rgba(0, 0, 0, 0.18));
          pointer-events: none;
          user-select: none;
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

        .dish-stats-pill-row {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: 14px;
        }

        .dish-stat-item {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background: #FFF9E6;
          border: 1px solid rgba(255, 210, 51, 0.35);
          padding: 4px 9px;
          border-radius: 6px;
          font-size: 0.74rem;
          font-weight: 700;
          color: #262626;
        }

        .stat-icon.time-icon {
          color: #B58400;
        }

        .stat-icon.flame-icon {
          color: #E65100;
        }

        .stat-icon.protein-icon {
          color: #2E7D32;
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
