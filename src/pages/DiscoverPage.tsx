import React, { useState, useRef } from 'react';
import { REGIONAL_FOODS } from '../data/feaztoData';
import { Sparkles, MapPin, Filter, ArrowRight, Clock, Flame, Leaf } from 'lucide-react';
import type { FoodItem } from '../types';

interface DiscoverPageProps {
  navigate: (route: string) => void;
}

interface InteractiveDiscoverCardProps {
  dish: FoodItem;
  navigate: (route: string) => void;
}

const InteractiveDiscoverCard: React.FC<InteractiveDiscoverCardProps> = ({ dish, navigate }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState<number>(0);
  const [tilt, setTilt] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const deltaX = x - centerX;
    const deltaY = y - centerY;

    const angleRad = Math.atan2(deltaY, deltaX);
    const angleDeg = (angleRad * 180) / Math.PI;

    setRotation(angleDeg * 0.45);
    setTilt({
      x: (deltaY / centerY) * -5,
      y: (deltaX / centerX) * 5
    });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation(0);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div 
      ref={cardRef}
      className={`dish-detailed-card ${isHovered ? 'card-active' : ''}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isHovered 
          ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(-8px)` 
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)'
      }}
    >
      <div className="dish-img-box">
        {/* Halo Linework */}
        <div 
          className="dish-halo"
          style={{
            transform: `rotate(${rotation * 0.5}deg)`,
            transition: isHovered ? 'transform 0.08s ease-out' : 'transform 0.5s ease-out'
          }}
        >
          <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="80" cy="80" r="70" stroke="#FFD233" strokeWidth="1" strokeDasharray="5 3" opacity="0.6" />
            <circle cx="80" cy="80" r="54" stroke="#E5B81C" strokeWidth="1" opacity="0.4" />
          </svg>
        </div>

        <div 
          className="plate-stage"
          style={{
            transform: `rotate(${rotation}deg) scale(${isHovered ? 1.12 : 1})`,
            transition: isHovered ? 'transform 0.08s ease-out' : 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)'
          }}
        >
          <img src={dish.image} alt={dish.name} />
        </div>

        <div className="state-badge">
          <MapPin size={12} />
          <span>{dish.originState}</span>
        </div>
      </div>

      <div className="dish-body-box">
        <div className="dish-zone-tag">{dish.region}</div>
        <h3 className="dish-title">{dish.name}</h3>
        <p className="dish-desc">{dish.description}</p>
        
        {/* Nutrition and Timing Badges */}
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
  );
};

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
              <InteractiveDiscoverCard key={dish.id} dish={dish} navigate={navigate} />
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
          border: 1.5px solid rgba(255, 210, 51, 0.45);
          box-shadow: 0 10px 28px rgba(0, 0, 0, 0.05);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transform-style: preserve-3d;
          transition: box-shadow 0.28s ease, border-color 0.28s ease;
          will-change: transform;
        }

        .dish-detailed-card.card-active {
          box-shadow: 0 24px 48px rgba(229, 184, 28, 0.22), 0 12px 24px rgba(0, 0, 0, 0.08);
          border-color: rgba(255, 210, 51, 0.95);
        }

        .dish-img-box {
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

        .dish-halo {
          position: absolute;
          width: 170px;
          height: 170px;
          pointer-events: none;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          will-change: transform;
        }

        .dish-halo svg {
          width: 100%;
          height: 100%;
        }

        .plate-stage {
          position: relative;
          z-index: 2;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          will-change: transform;
          cursor: grab;
        }

        .dish-img-box img {
          width: 78%;
          max-height: 170px;
          object-fit: contain;
          filter: drop-shadow(0 14px 22px rgba(0, 0, 0, 0.18));
          pointer-events: none;
          user-select: none;
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
