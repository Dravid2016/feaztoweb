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
          ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(-6px)` 
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)'
      }}
    >
      {/* Left Info Column */}
      <div className="dish-info-side">
        <div className="dish-top-meta-row">
          <span className="pill-category-badge">{dish.category}</span>
          <span className="pill-state-origin"><MapPin size={11} /> {dish.originState}</span>
        </div>

        <h3 className="dish-title">{dish.name}</h3>
        <p className="dish-desc">{dish.description}</p>
        
        {/* Nutrition and Timing Badges */}
        <div className="card-metrics-row">
          {dish.prepTime && (
            <div className="metric-pill">
              <Clock size={14} className="metric-icon clock-icon" />
              <div className="metric-text-group">
                <span className="metric-val">{dish.prepTime.replace(/[^0-9]/g, '')}</span>
                <span className="metric-lbl">min</span>
              </div>
            </div>
          )}
          {dish.calories && (
            <div className="metric-pill">
              <Flame size={14} className="metric-icon flame-icon" />
              <div className="metric-text-group">
                <span className="metric-val">{dish.calories.replace(/[^0-9]/g, '')}</span>
                <span className="metric-lbl">kcal</span>
              </div>
            </div>
          )}
          {dish.protein && (
            <div className="metric-pill">
              <Leaf size={14} className="metric-icon leaf-icon" />
              <div className="metric-text-group">
                <span className="metric-val">{dish.protein.replace(/[^0-9]/g, '')}</span>
                <span className="metric-lbl">protein</span>
              </div>
            </div>
          )}
        </div>

        <div className="card-tradition-snippet">
          <span className="snippet-lead">✦ Tradition:</span> {dish.storyNote}
        </div>

        <button 
          type="button"
          onClick={() => navigate('/download')}
          className="btn btn-yellow btn-reserve-action"
        >
          <span>Reserve in Next Batch</span>
          <ArrowRight size={14} />
        </button>
      </div>

      {/* Right Circular Plate Viewport with Overflow Rotation */}
      <div className="dish-plate-side">
        <div 
          className="plate-circular-frame"
          style={{
            transform: `rotate(${rotation}deg) scale(${isHovered ? 1.08 : 1})`,
            transition: isHovered ? 'transform 0.08s ease-out' : 'transform 0.55s cubic-bezier(0.2, 0.8, 0.2, 1)'
          }}
        >
          {dish.image ? (
            <img src={dish.image} alt={dish.name} className="card-round-plate-img" loading="lazy" />
          ) : (
            <div className="card-plate-placeholder">
              <Sparkles size={26} className="placeholder-dish-icon" />
              <span className="placeholder-dish-lbl">Awaiting Dish Photo</span>
            </div>
          )}
        </div>
        
        <div 
          className="plate-aura-ring"
          style={{
            transform: `rotate(${-rotation * 0.4}deg)`,
            transition: isHovered ? 'transform 0.08s ease-out' : 'transform 0.5s ease-out'
          }}
        />
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
          grid-template-columns: repeat(auto-fit, minmax(440px, 1fr));
          gap: 28px;
        }

        .dish-detailed-card {
          position: relative;
          background: #111111;
          border-radius: 24px;
          border: 1.5px solid rgba(255, 210, 51, 0.25);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.35);
          overflow: hidden;
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 22px 24px;
          gap: 20px;
          transform-style: preserve-3d;
          transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.15s ease-out;
          will-change: transform;
          cursor: default;
        }

        .dish-detailed-card.card-active {
          border-color: rgba(255, 210, 51, 0.95);
          box-shadow: 0 20px 48px rgba(0, 0, 0, 0.5), 0 0 30px rgba(255, 210, 51, 0.18);
        }

        .dish-info-side {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          z-index: 2;
          min-width: 0;
        }

        .dish-top-meta-row {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 12px;
          flex-wrap: wrap;
        }

        .pill-category-badge {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: rgba(255, 255, 255, 0.88);
          font-size: 0.72rem;
          font-weight: 600;
          padding: 3px 10px;
          border-radius: 9999px;
          letter-spacing: 0.02em;
        }

        .pill-state-origin {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          color: var(--color-brand-yellow);
          font-size: 0.72rem;
          font-weight: 600;
        }

        .dish-title {
          font-size: 1.25rem;
          font-weight: 800;
          color: #FFFFFF;
          margin-bottom: 8px;
          line-height: 1.3;
          letter-spacing: -0.01em;
        }

        .dish-desc {
          font-size: 0.84rem;
          color: rgba(255, 255, 255, 0.65);
          line-height: 1.5;
          margin-bottom: 16px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .card-metrics-row {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 14px;
        }

        .metric-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #FFFFFF;
        }

        .metric-icon {
          flex-shrink: 0;
        }

        .metric-icon.clock-icon {
          color: #E0E0E0;
        }

        .metric-icon.flame-icon {
          color: #FF7A00;
        }

        .metric-icon.leaf-icon {
          color: #4CAF50;
        }

        .metric-text-group {
          display: flex;
          align-items: baseline;
          gap: 3px;
        }

        .metric-val {
          font-size: 0.92rem;
          font-weight: 800;
          color: #FFFFFF;
        }

        .metric-lbl {
          font-size: 0.72rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.6);
        }

        .card-tradition-snippet {
          font-size: 0.75rem;
          color: rgba(255, 210, 51, 0.9);
          background: rgba(255, 210, 51, 0.08);
          border-left: 2px solid var(--color-brand-yellow);
          padding: 6px 10px;
          border-radius: 4px;
          line-height: 1.4;
          width: 100%;
          margin-bottom: 16px;
        }

        .snippet-lead {
          font-weight: 700;
          color: #FFFFFF;
          margin-right: 4px;
        }

        .btn-reserve-action {
          padding: 8px 18px;
          font-size: 0.85rem;
          border-radius: 9999px;
        }

        /* Right Circular Plate Viewport */
        .dish-plate-side {
          width: 170px;
          height: 170px;
          min-width: 170px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .plate-aura-ring {
          position: absolute;
          inset: 4px;
          border-radius: 50%;
          border: 1px dashed rgba(255, 210, 51, 0.35);
          pointer-events: none;
          z-index: 1;
        }

        .plate-circular-frame {
          width: 156px;
          height: 156px;
          border-radius: 50%;
          overflow: hidden;
          background: #1A1A1A;
          border: 2px solid rgba(255, 210, 51, 0.4);
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.5), inset 0 0 16px rgba(0, 0, 0, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
          cursor: grab;
        }

        .card-plate-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 6px;
          text-align: center;
          padding: 12px;
          background: linear-gradient(135deg, #1C1917 0%, #292524 100%);
        }

        .placeholder-dish-icon {
          color: var(--color-brand-yellow);
        }

        .placeholder-dish-lbl {
          font-size: 0.68rem;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.7);
          text-transform: uppercase;
          letter-spacing: 0.04em;
          line-height: 1.2;
        }

        .card-round-plate-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          user-select: none;
          pointer-events: none;
        }

        @media (max-width: 600px) {
          .discover-dishes-grid {
            grid-template-columns: 1fr;
          }
          .dish-detailed-card {
            flex-direction: column-reverse;
            padding: 20px;
          }
          .dish-plate-side {
            width: 150px;
            height: 150px;
            min-width: 150px;
            margin-bottom: 12px;
          }
        }
      `}</style>
    </div>
  );
};
