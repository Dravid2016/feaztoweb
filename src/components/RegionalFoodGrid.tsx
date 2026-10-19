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
      {/* Cultural Themed Kolam & Heritage Line-art Doodles Background */}
      <div className="card-cultural-doodle-layer" aria-hidden="true">
        {/* Intricate Geometric Rangoli / Kolam Watermark Motif */}
        <svg className="doodle-watermark-svg" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.14" stroke="#874700" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
            {/* Top-left Kolam corner loops */}
            <path d="M20 20 C40 10, 50 40, 20 50 C10 35, 15 15, 35 15 C55 15, 65 45, 35 55" />
            <circle cx="28" cy="28" r="3" fill="#874700" />
            <circle cx="50" cy="50" r="2.5" fill="#874700" />
            <circle cx="72" cy="28" r="2.5" fill="#874700" />
            
            {/* Traditional paisley / mango / kalash motif */}
            <path d="M120 18 C145 10, 165 30, 155 55 C145 78, 115 82, 108 58 C102 38, 108 24, 120 18 Z" />
            <path d="M125 32 C135 28, 145 38, 140 48 C135 58, 122 58, 120 46 Z" />
            <circle cx="132" cy="42" r="2" fill="#874700" />

            {/* Continuous lotus petals and traditional swags */}
            <path d="M190 25 Q210 5, 230 25 T270 25" />
            <path d="M190 32 Q210 16, 230 32 T270 32" strokeDasharray="3 3" />
            
            {/* Subtle folk cooking handi / mortar doodle linework */}
            <path d="M50 180 C40 160, 80 160, 70 180 Z" />
            <path d="M45 180 L75 180" strokeWidth="1.8" />
            <path d="M60 155 L60 170" />
            
            {/* Delicate spice star anise & leaves */}
            <path d="M160 195 L180 195 M170 185 L170 205 M163 188 L177 202 M163 202 L177 188" />
            <path d="M220 190 C235 175, 255 185, 250 200 C235 210, 215 200, 220 190 Z" />
          </g>
        </svg>

        {/* Traditional border strip at top */}
        <div className="card-top-doodle-border" />
      </div>

      {/* Left Details Box */}
      <div className="card-info-side">
        <div className="card-top-tag-row">
          <span className="pill-category-badge">{dish.category}</span>
          <span className="pill-state-origin"><MapPin size={12} /> {dish.originState}</span>
        </div>

        <h3 className="card-plate-title">{dish.name}</h3>

        <p className="card-plate-desc">{dish.description}</p>

        {/* Nutrition and Timing Badges with refined high-contrast pills */}
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
            <img 
              src={dish.image} 
              alt={dish.name} 
              className="card-round-plate-img" 
              loading="lazy"
            />
          ) : (
            <div className="card-plate-placeholder">
              <Sparkles size={28} className="placeholder-dish-icon" />
              <span className="placeholder-dish-lbl">Awaiting Dish Photo</span>
            </div>
          )}
        </div>
        
        {/* Cultural Dashed Orbit Aura Ring around plate edge */}
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
          grid-template-columns: repeat(auto-fit, minmax(460px, 1fr));
          gap: 32px;
          margin-bottom: 52px;
        }

        /* Yellow Heritage Card with Cultural Doodles */
        .cultural-food-card {
          position: relative;
          background: linear-gradient(135deg, #FFD233 0%, #F5C618 60%, #E8B90E 100%);
          border-radius: 28px;
          border: 2px solid rgba(135, 71, 0, 0.22);
          box-shadow: 0 16px 36px rgba(135, 71, 0, 0.14), 0 4px 12px rgba(0, 0, 0, 0.06);
          display: flex;
          flex-direction: row;
          align-items: center;
          overflow: hidden;
          padding: 26px 28px;
          min-height: 230px;
          transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.15s ease-out;
          transform-style: preserve-3d;
          will-change: transform;
          cursor: default;
        }

        .cultural-food-card.card-active {
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

        /* Left Information Column */
        .card-info-side {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          z-index: 2;
          min-width: 0;
          padding-right: 140px; /* Space reserved so text never overlaps the right-corner half plate */
        }

        .card-top-tag-row {
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

        .card-plate-title {
          font-size: 1.3rem;
          font-weight: 900;
          color: #1A1103;
          line-height: 1.25;
          margin-bottom: 8px;
          letter-spacing: -0.015em;
        }

        .card-plate-desc {
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

        /* Metrics row */
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
          font-weight: 500;
        }

        .snippet-lead {
          font-weight: 800;
          color: #874700;
          margin-right: 4px;
        }

        /* Right Corner Anchored Oversized Half Plate */
        .card-plate-anchor {
          position: absolute;
          right: -130px; /* Anchored to right corner, ~half of 280px plate extends outside */
          top: 50%;
          transform: translateY(-50%);
          width: 280px;
          height: 280px;
          z-index: 3;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none; /* Mouse movements pass to card for rotation tracking */
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

        .food-cta-row {
          display: flex;
          justify-content: center;
        }

        @media (max-width: 650px) {
          .food-grid {
            grid-template-columns: 1fr;
          }
          .cultural-food-card {
            padding: 22px 20px;
            min-height: auto;
          }
          .card-info-side {
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
    </section>
  );
};
