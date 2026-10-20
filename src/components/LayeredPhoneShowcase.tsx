import React from 'react';
import { REGIONAL_FOODS } from '../data/feaztoData';
import { Clock, Flame, Leaf, MapPin } from 'lucide-react';
import type { FoodItem } from '../types';

interface LayeredPhoneShowcaseProps {
  navigate?: (route: string) => void;
}

// Mini Heritage Card styled exactly like the 1st image's yellow cultural cards
const StreamCulturalFoodCard: React.FC<{ dish: FoodItem }> = ({ dish }) => {
  return (
    <div className="stream-cultural-card">
      {/* Cultural Themed Kolam & Heritage Line-art Doodles Background */}
      <div className="stream-card-doodle-layer" aria-hidden="true">
        <svg className="stream-doodle-svg" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.16" stroke="#874700" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 20 C40 10, 50 40, 20 50 C10 35, 15 15, 35 15 C55 15, 65 45, 35 55" />
            <circle cx="28" cy="28" r="3" fill="#874700" />
            <circle cx="50" cy="50" r="2.5" fill="#874700" />
            <path d="M120 18 C145 10, 165 30, 155 55 C145 78, 115 82, 108 58 Z" />
            <path d="M190 25 Q210 5, 230 25 T270 25" />
            <path d="M190 32 Q210 16, 230 32 T270 32" strokeDasharray="3 3" />
          </g>
        </svg>
        <div className="stream-card-top-border" />
      </div>

      {/* Info Column */}
      <div className="stream-card-info">
        <div className="stream-tag-row">
          <span className="stream-category-badge">{dish.category}</span>
          <span className="stream-origin-badge">
            <MapPin size={10} /> {dish.originState}
          </span>
        </div>

        <h4 className="stream-card-title">{dish.name}</h4>
        <p className="stream-card-desc">{dish.description}</p>

        {/* Nutritional & Time Metrics Row */}
        <div className="stream-metrics-row">
          {dish.prepTime && (
            <div className="stream-metric-pill">
              <Clock size={12} className="metric-icon clock" />
              <span><strong>{dish.prepTime.replace(/[^0-9]/g, '')}</strong> min</span>
            </div>
          )}
          {dish.calories && (
            <div className="stream-metric-pill">
              <Flame size={12} className="metric-icon flame" />
              <span><strong>{dish.calories.replace(/[^0-9]/g, '')}</strong> kcal</span>
            </div>
          )}
          {dish.protein && (
            <div className="stream-metric-pill">
              <Leaf size={12} className="metric-icon leaf" />
              <span><strong>{dish.protein.replace(/[^0-9]/g, '')}</strong> protein</span>
            </div>
          )}
        </div>

        {/* Tradition Ribbon */}
        {dish.storyNote && (
          <div className="stream-tradition-box">
            <span className="tradition-spark">✦ Tradition:</span> {dish.storyNote}
          </div>
        )}
      </div>

      {/* Right-corner oversized anchored plate */}
      <div className="stream-plate-anchor">
        <div className="stream-plate-frame">
          <img src={dish.image} alt={dish.name} className="stream-plate-img" loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export const LayeredPhoneShowcase: React.FC<LayeredPhoneShowcaseProps> = () => {
  // Use the full 4 regional foods from image 1 repeated for continuous seamless stream
  const foodsRow1 = [
    REGIONAL_FOODS[0], // Dum Biryani with Mirchi ka Salan
    REGIONAL_FOODS[1], // Sattvic Maharashtrian & South Thali
    REGIONAL_FOODS[2], // Malli Poo Idli & Medu Vada
    REGIONAL_FOODS[3], // Spiced Potato & Pea Potli Samosa
  ];

  const foodsRow2 = [
    REGIONAL_FOODS[2], // Malli Poo Idli & Medu Vada
    REGIONAL_FOODS[3], // Spiced Potato & Pea Potli Samosa
    REGIONAL_FOODS[0], // Dum Biryani with Mirchi ka Salan
    REGIONAL_FOODS[1], // Sattvic Maharashtrian & South Thali
  ];

  return (
    <section className="plenti-feazto-showcase-section">
      {/* Plenti-Style Grand Editorial Statement Header */}
      <div className="plenti-statement-container">
        <h2 className="plenti-statement-title">
          Every day authentic home chefs,{' '}
          <span className="statement-dish-capsule" title="Crispy Golden Ghee Podi Masala Dosa">
            <img 
              src="/brand/plate-idli.png" 
              alt="Crispy Podi Dosa" 
              className="statement-inline-img"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/dish-capsule-curry.jpg';
              }}
            />
          </span>
          <br />
          regional foodpreneurs and cloud kitchens
          <br />
          prepare fresh generational recipes
          <br />
          as daily curated batches — and you enjoy real India
          <br />
          delivered straight to your table.
        </h2>

        <p className="plenti-statement-tagline">
          Good for your family. Better for authentic food culture.
        </p>

        {/* Plenti-Style Rounded Hashtag Pills Row */}
        <div className="plenti-tags-row">
          <span className="plenti-tag-pill">#Feazto</span>
          <span className="plenti-tag-pill">#HomeKitchens</span>
          <span className="plenti-tag-pill">#RegionalFood</span>
          <span className="plenti-tag-pill">#TasteRealIndia</span>
          <span className="plenti-tag-pill">#BookACook</span>
        </div>
      </div>

      {/* Showcase with Running Yellow Heritage Cards Stream Flanking the FEAzTO Mobile Banner */}
      <div className="plenti-stage-showcase-wrapper">
        {/* Upper Scrolling Carousel (running left behind phone) */}
        <div className="plenti-cards-stream stream-top">
          <div className="plenti-cards-track scroll-stream-left">
            {[...foodsRow1, ...foodsRow1, ...foodsRow1].map((dish, idx) => (
              <StreamCulturalFoodCard key={`row1-${dish.id}-${idx}`} dish={dish} />
            ))}
          </div>
        </div>

        {/* Hero Anchored FEAzTO Mobile Phone Banner (Ghee Podi Masala Dosa Model) */}
        <div className="plenti-central-device-container">
          <div className="device-banner-card">
            <img 
              src="/brand/feazto-dosa-mobile-banner.png" 
              alt="FEAzTO Mobile App - Ghee Podi Masala Dosa & Book a Cook" 
              className="feazto-dosa-device-img" 
            />
            {/* Ambient golden warmth backing the phone */}
            <div className="device-backdrop-glow" />
          </div>
        </div>

        {/* Lower Scrolling Carousel (running right behind phone) */}
        <div className="plenti-cards-stream stream-bottom">
          <div className="plenti-cards-track scroll-stream-right">
            {[...foodsRow2, ...foodsRow2, ...foodsRow2].map((dish, idx) => (
              <StreamCulturalFoodCard key={`row2-${dish.id}-${idx}`} dish={dish} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .plenti-feazto-showcase-section {
          padding: 90px 20px 100px 20px;
          background: #FFFFFF;
          overflow: hidden;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .plenti-statement-container {
          max-width: 960px;
          margin: 0 auto 56px auto;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .plenti-statement-title {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
          font-size: clamp(1.85rem, 3.2vw, 2.75rem);
          font-weight: 800;
          color: #1A1A1A;
          line-height: 1.34;
          letter-spacing: -0.025em;
          margin: 0 0 20px 0;
        }

        .statement-dish-capsule {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          vertical-align: middle;
          margin: 0 8px;
          width: 76px;
          height: 40px;
          border-radius: 9999px;
          background: #111111;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.18);
          overflow: hidden;
          border: 2px solid #222222;
          transform: translateY(-2px);
          transition: transform 0.2s ease;
        }

        .statement-dish-capsule:hover {
          transform: translateY(-2px) scale(1.08);
        }

        .statement-inline-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .plenti-statement-tagline {
          font-size: clamp(1.05rem, 1.4vw, 1.25rem);
          font-weight: 500;
          color: #666666;
          margin: 0 0 24px 0;
        }

        .plenti-tags-row {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
        }

        .plenti-tag-pill {
          background: #F1F3F5;
          color: #333333;
          font-size: 0.88rem;
          font-weight: 600;
          padding: 7px 18px;
          border-radius: 9999px;
          letter-spacing: -0.01em;
          transition: background 0.2s ease, transform 0.2s ease;
        }

        .plenti-tag-pill:hover {
          background: #E5E8EC;
          transform: translateY(-1px);
        }

        /* Phone & Streaming Tracks Showcase */
        .plenti-stage-showcase-wrapper {
          position: relative;
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 640px;
          overflow: visible;
        }

        .plenti-cards-stream {
          position: absolute;
          width: 100vw;
          left: 50%;
          transform: translateX(-50%);
          overflow: hidden;
          pointer-events: none;
          z-index: 1;
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }

        .stream-top {
          top: 15%;
        }

        .stream-bottom {
          bottom: 12%;
        }

        /* Running Stream Cards Track */
        .plenti-cards-track {
          display: flex;
          gap: 28px;
          width: max-content;
          align-items: center;
        }

        .scroll-stream-left {
          animation: marqueeLeft 42s linear infinite;
        }

        .scroll-stream-right {
          animation: marqueeRight 42s linear infinite;
        }

        .plenti-cards-track:hover {
          animation-play-state: paused;
        }

        @keyframes marqueeLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }

        @keyframes marqueeRight {
          0% { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }

        /* Running Stream Cultural Food Card (Exact layout & aesthetic from Image 1) */
        .stream-cultural-card {
          position: relative;
          background: linear-gradient(135deg, #FFD233 0%, #F5C618 60%, #E8B90E 100%);
          border-radius: 24px;
          border: 2px solid rgba(135, 71, 0, 0.22);
          box-shadow: 0 14px 32px rgba(135, 71, 0, 0.16), 0 4px 10px rgba(0, 0, 0, 0.06);
          display: flex;
          flex-direction: row;
          align-items: center;
          overflow: hidden;
          padding: 20px 22px;
          min-width: 440px;
          max-width: 440px;
          height: 195px;
          pointer-events: auto;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          box-sizing: border-box;
        }

        .stream-cultural-card:hover {
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 20px 42px rgba(135, 71, 0, 0.25);
        }

        /* Doodle watermark layer */
        .stream-card-doodle-layer {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
          z-index: 1;
        }

        .stream-doodle-svg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          pointer-events: none;
        }

        .stream-card-top-border {
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
          opacity: 0.28;
        }

        /* Information Column */
        .stream-card-info {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          z-index: 2;
          min-width: 0;
          padding-right: 95px; /* Keeps clean space so text does not overlap anchored plate */
        }

        .stream-tag-row {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
        }

        .stream-category-badge {
          background: rgba(17, 17, 17, 0.92);
          color: #FFD233;
          font-size: 0.65rem;
          font-weight: 800;
          padding: 3px 10px;
          border-radius: 9999px;
          letter-spacing: 0.03em;
          text-transform: uppercase;
        }

        .stream-origin-badge {
          display: inline-flex;
          align-items: center;
          gap: 3px;
          color: #4A2800;
          font-size: 0.72rem;
          font-weight: 800;
        }

        .stream-card-title {
          font-size: 1.08rem;
          font-weight: 900;
          color: #1A1103;
          line-height: 1.25;
          margin: 0 0 6px 0;
          letter-spacing: -0.015em;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 100%;
        }

        .stream-card-desc {
          font-size: 0.74rem;
          color: #4E3205;
          line-height: 1.38;
          margin: 0 0 10px 0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          font-weight: 500;
        }

        .stream-metrics-row {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
          flex-wrap: wrap;
        }

        .stream-metric-pill {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          background: rgba(255, 255, 255, 0.65);
          backdrop-filter: blur(4px);
          padding: 3px 8px;
          border-radius: 6px;
          border: 1px solid rgba(135, 71, 0, 0.15);
          font-size: 0.68rem;
          color: #4A2800;
        }

        .stream-metric-pill strong {
          color: #1A1103;
          font-size: 0.76rem;
        }

        .stream-metric-pill .clock { color: #2D2418; }
        .stream-metric-pill .flame { color: #D32F2F; }
        .stream-metric-pill .leaf { color: #1B5E20; }

        .stream-tradition-box {
          font-size: 0.68rem;
          color: #382103;
          background: rgba(255, 255, 255, 0.55);
          border-left: 2.5px solid #874700;
          padding: 4px 8px;
          border-radius: 4px;
          line-height: 1.35;
          width: 100%;
          font-weight: 500;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .tradition-spark {
          font-weight: 800;
          color: #874700;
        }

        /* Right Corner Oversized Half Plate from Image 1 */
        .stream-plate-anchor {
          position: absolute;
          right: -60px;
          top: 50%;
          transform: translateY(-50%);
          width: 200px;
          height: 200px;
          z-index: 3;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
        }

        .stream-plate-frame {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .stream-plate-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          filter: drop-shadow(-8px 10px 18px rgba(135, 71, 0, 0.35));
        }

        /* Central Anchored FEAzTO Mobile Phone */
        .plenti-central-device-container {
          position: relative;
          z-index: 5;
          display: flex;
          justify-content: center;
          align-items: center;
          pointer-events: auto;
        }

        .device-banner-card {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .device-banner-card:hover {
          transform: translateY(-6px) scale(1.02);
        }

        .feazto-dosa-device-img {
          width: 100%;
          max-width: 400px;
          height: auto;
          display: block;
          filter: drop-shadow(0 25px 50px rgba(0, 0, 0, 0.28)) drop-shadow(0 10px 20px rgba(0, 0, 0, 0.15));
          z-index: 2;
          position: relative;
        }

        .device-backdrop-glow {
          position: absolute;
          width: 320px;
          height: 520px;
          background: radial-gradient(circle, rgba(254, 209, 54, 0.35) 0%, rgba(255, 153, 0, 0.15) 50%, transparent 75%);
          filter: blur(40px);
          z-index: 1;
          pointer-events: none;
        }

        @media (max-width: 768px) {
          .plenti-feazto-showcase-section {
            padding: 60px 16px 70px 16px;
          }

          .plenti-statement-title {
            font-size: 1.55rem;
            line-height: 1.35;
          }

          .statement-dish-capsule {
            width: 58px;
            height: 32px;
          }

          .plenti-stage-showcase-wrapper {
            min-height: auto;
            flex-direction: column;
            gap: 32px;
          }

          .feazto-dosa-device-img {
            max-width: 310px;
          }

          .plenti-cards-stream {
            position: relative;
            left: 0;
            transform: none;
            width: 100%;
          }

          .stream-top, .stream-bottom {
            top: auto;
            bottom: auto;
          }
        }
      `}</style>
    </section>
  );
};
