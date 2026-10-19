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
          ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(-6px)` 
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)'
      }}
    >
      {/* Left Details Box */}
      <div className="card-info-side">
        <div className="card-top-tag-row">
          <span className="pill-category-badge">{dish.category}</span>
          <span className="pill-state-origin"><MapPin size={11} /> {dish.originState}</span>
        </div>

        <h3 className="card-plate-title">{dish.name}</h3>

        <p className="card-plate-desc">{dish.description}</p>

        {/* Nutrition and Timing Badges with modern dark capsule icons */}
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
      </div>

      {/* Right Circular Plate Viewport with Overflow Rotation */}
      <div className="card-plate-side">
        <div 
          className="plate-circular-frame"
          style={{
            transform: `rotate(${rotation}deg) scale(${isHovered ? 1.08 : 1})`,
            transition: isHovered ? 'transform 0.08s ease-out' : 'transform 0.55s cubic-bezier(0.2, 0.8, 0.2, 1)'
          }}
        >
          <img 
            src={dish.image} 
            alt={dish.name} 
            className="card-round-plate-img" 
            loading="lazy"
          />
        </div>
        
        {/* Subtle decorative glow ring */}
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
          grid-template-columns: repeat(auto-fit, minmax(440px, 1fr));
          gap: 28px;
          margin-bottom: 52px;
        }

        .cultural-food-card {
          position: relative;
          background: #111111;
          border-radius: 24px;
          border: 1.5px solid rgba(255, 210, 51, 0.25);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.35);
          display: flex;
          flex-direction: row;
          align-items: center;
          overflow: hidden;
          padding: 22px 24px;
          gap: 20px;
          transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.15s ease-out;
          transform-style: preserve-3d;
          will-change: transform;
          cursor: default;
        }

        .cultural-food-card.card-active {
          border-color: rgba(255, 210, 51, 0.95);
          box-shadow: 0 20px 48px rgba(0, 0, 0, 0.5), 0 0 30px rgba(255, 210, 51, 0.18);
        }

        /* Left Information Column */
        .card-info-side {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          z-index: 2;
          min-width: 0;
        }

        .card-top-tag-row {
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

        .card-plate-title {
          font-size: 1.25rem;
          font-weight: 800;
          color: #FFFFFF;
          line-height: 1.3;
          margin-bottom: 8px;
          letter-spacing: -0.01em;
        }

        .card-plate-desc {
          font-size: 0.84rem;
          color: rgba(255, 255, 255, 0.65);
          line-height: 1.5;
          margin-bottom: 16px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Metrics row like the reference screenshot */
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
        }

        .snippet-lead {
          font-weight: 700;
          color: #FFFFFF;
          margin-right: 4px;
        }

        /* Right Circular Plate Viewport */
        .card-plate-side {
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

        .card-round-plate-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          user-select: none;
          pointer-events: none;
        }

        .food-cta-row {
          display: flex;
          justify-content: center;
        }

        @media (max-width: 600px) {
          .food-grid {
            grid-template-columns: 1fr;
          }
          .cultural-food-card {
            flex-direction: column-reverse;
            padding: 20px;
          }
          .card-plate-side {
            width: 150px;
            height: 150px;
            min-width: 150px;
            margin-bottom: 12px;
          }
        }
      `}</style>
    </section>
  );
};
