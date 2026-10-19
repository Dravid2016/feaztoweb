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
      {/* Cultural Themed Kolam & Heritage Line-art Doodles Background */}
      <div className="card-cultural-doodle-layer" aria-hidden="true">
        <svg className="doodle-watermark-svg" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.14" stroke="#874700" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 20 C40 10, 50 40, 20 50 C10 35, 15 15, 35 15 C55 15, 65 45, 35 55" />
            <circle cx="28" cy="28" r="3" fill="#874700" />
            <circle cx="50" cy="50" r="2.5" fill="#874700" />
            <path d="M120 18 C145 10, 165 30, 155 55 C145 78, 115 82, 108 58 C102 38, 108 24, 120 18 Z" />
            <path d="M125 32 C135 28, 145 38, 140 48 C135 58, 122 58, 120 46 Z" />
            <circle cx="132" cy="42" r="2" fill="#874700" />
            <path d="M190 25 Q210 5, 230 25 T270 25" />
            <path d="M190 32 Q210 16, 230 32 T270 32" strokeDasharray="3 3" />
            <path d="M50 180 C40 160, 80 160, 70 180 Z" />
            <path d="M45 180 L75 180" strokeWidth="1.8" />
            <path d="M160 195 L180 195 M170 185 L170 205 M163 188 L177 202 M163 202 L177 188" />
          </g>
        </svg>
        <div className="card-top-doodle-border" />
      </div>

      {/* Left Info Column */}
      <div className="dish-info-side">
        <div className="dish-top-meta-row">
          <span className="pill-category-badge">{dish.category}</span>
          <span className="pill-state-origin"><MapPin size={12} /> {dish.originState}</span>
        </div>

        <h3 className="dish-title">{dish.name}</h3>
        <p className="dish-desc">{dish.description}</p>
        
        {/* Nutrition and Timing Badges */}
        <div className="card-metrics-row">
          {dish.prepTime && (
            <div className="metric-pill">
              <Clock size={15} className="metric-icon clock-icon" />
              <div className="metric-text-group">
                <span className="metric-val">{dish.prepTime.replace(/[^0-9]/g, '')}</span>
                <span className="metric-lbl">min</span>
              </div>
            </div>
          )}
          {dish.calories && (
            <div className="metric-pill">
              <Flame size={15} className="metric-icon flame-icon" />
              <div className="metric-text-group">
                <span className="metric-val">{dish.calories.replace(/[^0-9]/g, '')}</span>
                <span className="metric-lbl">kcal</span>
              </div>
            </div>
          )}
          {dish.protein && (
            <div className="metric-pill">
              <Leaf size={15} className="metric-icon leaf-icon" />
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
          className="btn btn-reserve-action"
        >
          <span>Reserve in Next Batch</span>
          <ArrowRight size={14} />
        </button>
      </div>

      {/* Right Corner Oversized Half-Visible Rotating Plate */}
      <div className="card-plate-anchor">
        <div 
          className="plate-circular-frame"
          style={{
            transform: `rotate(${rotation}deg) scale(${isHovered ? 1.05 : 1})`,
            transition: isHovered ? 'transform 0.08s ease-out' : 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)'
          }}
        >
          {dish.image ? (
            <img src={dish.image} alt={dish.name} className="card-round-plate-img" loading="lazy" />
          ) : (
            <div className="card-plate-placeholder">
              <Sparkles size={28} className="placeholder-dish-icon" />
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
          grid-template-columns: repeat(auto-fit, minmax(460px, 1fr));
          gap: 32px;
        }

        /* Yellow Heritage Detailed Card with Cultural Doodles */
        .dish-detailed-card {
          position: relative;
          background: linear-gradient(135deg, #FFD233 0%, #F5C618 60%, #E8B90E 100%);
          border-radius: 28px;
          border: 2px solid rgba(135, 71, 0, 0.22);
          box-shadow: 0 16px 36px rgba(135, 71, 0, 0.14), 0 4px 12px rgba(0, 0, 0, 0.06);
          overflow: hidden;
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 26px 28px;
          min-height: 230px;
          transform-style: preserve-3d;
          transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.15s ease-out;
          will-change: transform;
          cursor: default;
        }

        .dish-detailed-card.card-active {
          border-color: rgba(135, 71, 0, 0.55);
          box-shadow: 0 24px 50px rgba(135, 71, 0, 0.22), 0 0 24px rgba(255, 210, 51, 0.5);
        }

        /* Cultural Doodle Background Layer */
        .card-cultural-doodle-layer {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
          z-index: 1;
        }

        .doodle-watermark-svg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          pointer-events: none;
        }

        .card-top-doodle-border {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: repeating-linear-gradient(
            90deg,
            #874700 0,
            #874700 8px,
            transparent 8px,
            transparent 14px
          );
          opacity: 0.25;
        }

        .dish-info-side {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          z-index: 2;
          min-width: 0;
          padding-right: 140px; /* Space reserved so text never overlaps right half plate */
        }

        .dish-top-meta-row {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 12px;
          flex-wrap: wrap;
        }

        .pill-category-badge {
          background: rgba(17, 17, 17, 0.88);
          border: 1px solid rgba(17, 17, 17, 0.95);
          color: #FFD233;
          font-size: 0.72rem;
          font-weight: 700;
          padding: 4px 12px;
          border-radius: 9999px;
          letter-spacing: 0.03em;
          text-transform: uppercase;
        }

        .pill-state-origin {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          color: #4A2800;
          font-size: 0.76rem;
          font-weight: 800;
          letter-spacing: 0.01em;
        }

        .dish-title {
          font-size: 1.3rem;
          font-weight: 900;
          color: #1A1103;
          margin-bottom: 8px;
          line-height: 1.25;
          letter-spacing: -0.015em;
        }

        .dish-desc {
          font-size: 0.86rem;
          color: #4E3205;
          line-height: 1.48;
          margin-bottom: 16px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          font-weight: 500;
        }

        .card-metrics-row {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 14px;
          flex-wrap: wrap;
        }

        .metric-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255, 255, 255, 0.55);
          backdrop-filter: blur(4px);
          padding: 4px 10px;
          border-radius: 8px;
          border: 1px solid rgba(135, 71, 0, 0.15);
        }

        .metric-icon {
          flex-shrink: 0;
        }

        .metric-icon.clock-icon {
          color: #2D2418;
        }

        .metric-icon.flame-icon {
          color: #D32F2F;
        }

        .metric-icon.leaf-icon {
          color: #1B5E20;
        }

        .metric-text-group {
          display: flex;
          align-items: baseline;
          gap: 3px;
        }

        .metric-val {
          font-size: 0.92rem;
          font-weight: 900;
          color: #1A1103;
        }

        .metric-lbl {
          font-size: 0.72rem;
          font-weight: 700;
          color: #5C3D05;
        }

        .card-tradition-snippet {
          font-size: 0.76rem;
          color: #382103;
          background: rgba(255, 255, 255, 0.5);
          border-left: 3px solid #874700;
          padding: 7px 12px;
          border-radius: 4px;
          line-height: 1.45;
          width: 100%;
          margin-bottom: 16px;
          font-weight: 500;
        }

        .snippet-lead {
          font-weight: 800;
          color: #874700;
          margin-right: 4px;
        }

        .btn-reserve-action {
          padding: 9px 20px;
          font-size: 0.85rem;
          border-radius: 9999px;
          background: #111111;
          color: #FFD233;
          border: none;
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          transition: transform 0.2s ease, background 0.2s ease;
        }

        .btn-reserve-action:hover {
          background: #000000;
          transform: translateX(3px);
        }

        /* Right Corner Anchored Oversized Half Plate */
        .card-plate-anchor {
          position: absolute;
          right: -130px;
          top: 50%;
          transform: translateY(-50%);
          width: 280px;
          height: 280px;
          z-index: 3;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
        }

        .plate-aura-ring {
          position: absolute;
          inset: -12px;
          border-radius: 50%;
          border: 2px dashed rgba(135, 71, 0, 0.35);
          pointer-events: none;
          z-index: 1;
        }

        .plate-circular-frame {
          width: 270px;
          height: 270px;
          border-radius: 50%;
          overflow: hidden;
          background: #111111;
          border: 4px solid #FFFFFF;
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.38), 0 4px 12px rgba(135, 71, 0, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
        }

        .card-plate-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          text-align: center;
          padding: 16px;
          background: linear-gradient(135deg, #1C1917 0%, #292524 100%);
        }

        .placeholder-dish-icon {
          color: #FFD233;
        }

        .placeholder-dish-lbl {
          font-size: 0.72rem;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.8);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .card-round-plate-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          user-select: none;
          filter: drop-shadow(0 4px 12px rgba(0,0,0,0.25));
        }

        @media (max-width: 650px) {
          .discover-dishes-grid {
            grid-template-columns: 1fr;
          }
          .dish-detailed-card {
            padding: 22px 20px;
            min-height: auto;
          }
          .dish-info-side {
            padding-right: 90px;
          }
          .card-plate-anchor {
            right: -110px;
            width: 220px;
            height: 220px;
          }
          .plate-circular-frame {
            width: 210px;
            height: 210px;
          }
        }
      `}</style>
    </div>
  );
};
