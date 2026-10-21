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

      {/* Right Corner Oversized Half-Visible Rotating Plate (Exact layout from Image 1) */}
      <div className="stream-plate-anchor">
        <div className="stream-plate-circular-frame">
          <div className="stream-plate-spinning-wrapper">
            <img 
              src={dish.image || '/brand/plate-biryani-new.png'} 
              alt={dish.name} 
              className="stream-round-plate-img" 
              loading="lazy" 
            />
          </div>
        </div>
        {/* Cultural Dashed Orbit Aura Ring around plate edge */}
        <div className="stream-plate-aura-ring" />
      </div>
    </div>
  );
};

export const LayeredPhoneShowcase: React.FC<LayeredPhoneShowcaseProps> = () => {
  // Top Layer: 10 Distinct Cultural Dish Varieties
  const topLayerDishes = REGIONAL_FOODS.slice(0, 10);

  // Bottom Layer: 10 Completely Separate Cultural Dish Varieties
  const bottomLayerDishes = REGIONAL_FOODS.slice(10, 20);

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
        {/* Curved Blank White Card Backdrop behind streams and phone */}
        <div className="plenti-blank-curved-card" aria-hidden="true" />

        {/* 1. Upper Scrolling Carousel (10 distinct dish varieties running left behind phone) */}
        <div className="plenti-cards-stream stream-top">
          <div className="plenti-cards-track scroll-stream-left">
            {[...topLayerDishes, ...topLayerDishes].map((dish, idx) => (
              <StreamCulturalFoodCard key={`top-${dish.id}-${idx}`} dish={dish} />
            ))}
          </div>
        </div>

        {/* 2. Middle Interstitial Buttons Loop (All 20 Button-Style Dishes running continuously between the card streams) */}
        <div className="plenti-buttons-stream stream-middle">
          <div className="plenti-buttons-track scroll-buttons-right">
            {[
              { title: 'Dum Biryani Handi', subtitle: 'Slow Dum Cooking', img: '/brand/plate-biryani.png' },
              { title: 'Sattvic Thali', subtitle: 'Balanced Shadrasa', img: '/brand/plate-thali.png' },
              { title: 'Jasmine Idli & Sambar', subtitle: 'Stone Ground Batter', img: '/brand/plate-idli.png' },
              { title: 'Potli Samosa', subtitle: 'Hand-Rolled Ajwain Crust', img: '/brand/plate-samosa.png' },
              { title: 'Filter Kaapi & Chai', subtitle: 'Clay Pot Infusion', img: '/brand/doodle-chai.png' },
              { title: 'Davangere Benne Dosa', subtitle: 'Fresh Makkhan Roast', img: '/brand/plate-benne-dosa.png' },
              { title: 'Chettinad Kozhi Curry', subtitle: 'Stone-Pounded Spices', img: '/brand/plate-chettinad-curry.png' },
              { title: 'Dal Baati Churma', subtitle: 'Pure Ghee Baati', img: '/brand/plate-daal-baati.png' },
              { title: 'Malabar Fish Curry', subtitle: 'Kodampuli & Coconut', img: '/brand/plate-malabar-fish.png' },
              { title: 'Nizami Shahi Haleem', subtitle: '12-Hour Slow Simmer', img: '/brand/plate-nizami-haleem.png' },
              { title: 'Kashmiri Rogan Josh', subtitle: 'Ratanjot & Fennel Infusion', img: '/brand/plate-rogan-josh.png' },
              { title: 'Litti Chokha', subtitle: 'Charcoal Smoked Sattu', img: '/brand/plate-litti-chokha.png' },
              { title: 'Kolhapuri Tambda Rassa', subtitle: 'Fierce Nagli Spices', img: '/brand/plate-kolhapuri-rassa.png' },
              { title: 'Surati Khaman Dhokla', subtitle: 'Steamed Mustard Sponge', img: '/brand/plate-surati-dhokla.png' },
              { title: 'Amritsari Pindi Chole', subtitle: 'Anardana & Black Tea Boil', img: '/brand/plate-pindi-chole.png' },
              { title: 'Goan Prawn Balchão', subtitle: 'Toddy Vinegar Reduction', img: '/brand/plate-goan-prawn.png' },
              { title: 'Andhra Gongura Mamsam', subtitle: 'Tangy Sorrel Leaf Simmer', img: '/brand/plate-gongura-mamsam.png' },
              { title: 'Irani Kheema Pav', subtitle: 'Caramelized Onion Gravy', img: '/brand/plate-irani-kheema.png' },
              { title: 'Palada Pradhaman', subtitle: 'Condensed Cardamom Milk', img: '/brand/plate-palada-pradhaman.png' },
              { title: 'Palappam & Veg Stew', subtitle: 'Fermented Toddy Batter', img: '/brand/plate-palappam-stew.png' },
              { title: 'Dum Biryani Handi', subtitle: 'Slow Dum Cooking', img: '/brand/plate-biryani.png' },
              { title: 'Sattvic Thali', subtitle: 'Balanced Shadrasa', img: '/brand/plate-thali.png' },
              { title: 'Jasmine Idli & Sambar', subtitle: 'Stone Ground Batter', img: '/brand/plate-idli.png' },
              { title: 'Potli Samosa', subtitle: 'Hand-Rolled Ajwain Crust', img: '/brand/plate-samosa.png' },
              { title: 'Filter Kaapi & Chai', subtitle: 'Clay Pot Infusion', img: '/brand/doodle-chai.png' },
              { title: 'Davangere Benne Dosa', subtitle: 'Fresh Makkhan Roast', img: '/brand/plate-benne-dosa.png' },
              { title: 'Chettinad Kozhi Curry', subtitle: 'Stone-Pounded Spices', img: '/brand/plate-chettinad-curry.png' },
              { title: 'Dal Baati Churma', subtitle: 'Pure Ghee Baati', img: '/brand/plate-daal-baati.png' },
              { title: 'Malabar Fish Curry', subtitle: 'Kodampuli & Coconut', img: '/brand/plate-malabar-fish.png' },
              { title: 'Nizami Shahi Haleem', subtitle: '12-Hour Slow Simmer', img: '/brand/plate-nizami-haleem.png' },
              { title: 'Kashmiri Rogan Josh', subtitle: 'Ratanjot & Fennel Infusion', img: '/brand/plate-rogan-josh.png' },
              { title: 'Litti Chokha', subtitle: 'Charcoal Smoked Sattu', img: '/brand/plate-litti-chokha.png' },
              { title: 'Kolhapuri Tambda Rassa', subtitle: 'Fierce Nagli Spices', img: '/brand/plate-kolhapuri-rassa.png' },
              { title: 'Surati Khaman Dhokla', subtitle: 'Steamed Mustard Sponge', img: '/brand/plate-surati-dhokla.png' },
              { title: 'Amritsari Pindi Chole', subtitle: 'Anardana & Black Tea Boil', img: '/brand/plate-pindi-chole.png' },
              { title: 'Goan Prawn Balchão', subtitle: 'Toddy Vinegar Reduction', img: '/brand/plate-goan-prawn.png' },
              { title: 'Andhra Gongura Mamsam', subtitle: 'Tangy Sorrel Leaf Simmer', img: '/brand/plate-gongura-mamsam.png' },
              { title: 'Irani Kheema Pav', subtitle: 'Caramelized Onion Gravy', img: '/brand/plate-irani-kheema.png' },
              { title: 'Palada Pradhaman', subtitle: 'Condensed Cardamom Milk', img: '/brand/plate-palada-pradhaman.png' },
              { title: 'Palappam & Veg Stew', subtitle: 'Fermented Toddy Batter', img: '/brand/plate-palappam-stew.png' },
            ].map((btn, idx) => (
              <div key={`mid-btn-${idx}`} className="stream-dish-button-pill">
                <div className="stream-btn-img-box">
                  <img 
                    src={btn.img} 
                    alt={btn.title} 
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/brand/plate-thali.png';
                    }}
                  />
                </div>
                <div className="stream-btn-text">
                  <span className="stream-btn-name">{btn.title}</span>
                  <span className="stream-btn-desc">{btn.subtitle}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Hero Showcase Split: Left Blank Rectangular Card + Right Anchored Phone Banner */}
        <div className="plenti-central-device-container">
          {/* Rectangular Blank White Card on Left Side */}
          <div className="showcase-left-blank-card" aria-hidden="true">
            <div className="blank-card-inner-frame" />
          </div>

          {/* Right Mobile Phone Device */}
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

        {/* 4. Lower Scrolling Carousel (10 completely separate dish varieties running right behind phone) */}
        <div className="plenti-cards-stream stream-bottom">
          <div className="plenti-cards-track scroll-stream-right">
            {[...bottomLayerDishes, ...bottomLayerDishes].map((dish, idx) => (
              <StreamCulturalFoodCard key={`bottom-${dish.id}-${idx}`} dish={dish} />
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

        /* Blank Curved White Card Backdrop (Rounded organic card holding the showcase stage) */
        .plenti-blank-curved-card {
          position: absolute;
          inset: -36px -48px -36px -48px;
          background: #FFFFFF;
          border-radius: 44px;
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.06), 0 4px 18px rgba(0, 0, 0, 0.03);
          border: 1.5px solid rgba(0, 0, 0, 0.06);
          z-index: 0;
          pointer-events: none;
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
          top: 10%;
        }

        .stream-bottom {
          bottom: 8%;
        }

        /* ── INTERSTITIAL BUTTONS STREAM (Between the 2 card loops) ── */
        .plenti-buttons-stream {
          position: absolute;
          width: 100vw;
          left: 50%;
          transform: translateX(-50%);
          overflow: hidden;
          pointer-events: none;
          z-index: 2; /* Sits right between the background cards and phone */
          top: 48%;
          mask-image: linear-gradient(to right, transparent, black 12%, black 88%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 12%, black 88%, transparent);
        }

        .plenti-buttons-track {
          display: flex;
          gap: 18px;
          width: max-content;
          align-items: center;
        }

        .scroll-buttons-right {
          animation: marqueeRight 68s linear infinite;
        }

        .plenti-buttons-track:hover {
          animation-play-state: paused;
        }

        /* Button-Style Dish Pill (Exact Aesthetic from Image 1) */
        .stream-dish-button-pill {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: #FFFFFF;
          padding: 8px 22px 8px 10px;
          border-radius: 9999px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12), 0 2px 6px rgba(0, 0, 0, 0.04);
          border: 1.5px solid rgba(245, 183, 0, 0.4);
          pointer-events: auto;
          transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;
          cursor: pointer;
          white-space: nowrap;
          flex-shrink: 0;
          user-select: none;
        }

        .stream-dish-button-pill:hover {
          transform: translateY(-3px) scale(1.04);
          box-shadow: 0 12px 30px rgba(245, 183, 0, 0.45);
          border-color: #F5B700;
        }

        .stream-btn-img-box {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #FFF9E6;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          flex-shrink: 0;
          border: 2px solid #F5B700;
          box-shadow: 0 2px 8px rgba(245, 183, 0, 0.3);
        }

        .stream-btn-img-box img {
          width: 82%;
          height: 82%;
          object-fit: contain;
          transition: transform 0.3s ease;
        }

        .stream-dish-button-pill:hover .stream-btn-img-box img {
          transform: scale(1.12);
        }

        .stream-btn-text {
          display: flex;
          flex-direction: column;
        }

        .stream-btn-name {
          font-family: inherit;
          font-size: 0.88rem;
          font-weight: 800;
          color: #111111;
          line-height: 1.25;
        }

        .stream-btn-desc {
          font-size: 0.72rem;
          font-weight: 600;
          color: #777777;
        }

        /* Running Stream Cards Track */
        .plenti-cards-track {
          display: flex;
          gap: 28px;
          width: max-content;
          align-items: center;
        }

        .scroll-stream-left {
          animation: marqueeLeft 52s linear infinite;
        }

        .scroll-stream-right {
          animation: marqueeRight 52s linear infinite;
        }

        .plenti-cards-track:hover {
          animation-play-state: paused;
        }

        @keyframes marqueeLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes marqueeRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        /* Running Stream Cultural Food Card (Exact layout & aesthetic from Image 1) */
        .stream-cultural-card {
          position: relative;
          background: linear-gradient(135deg, #FFD233 0%, #F5C618 60%, #E8B90E 100%);
          border-radius: 26px;
          border: 2px solid rgba(135, 71, 0, 0.22);
          box-shadow: 0 16px 36px rgba(135, 71, 0, 0.18), 0 4px 12px rgba(0, 0, 0, 0.06);
          display: flex;
          flex-direction: row;
          align-items: center;
          overflow: hidden;
          padding: 22px 24px;
          min-width: 450px;
          max-width: 450px;
          height: 205px;
          pointer-events: auto;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          box-sizing: border-box;
        }

        .stream-cultural-card:hover {
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 22px 46px rgba(135, 71, 0, 0.28);
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
          padding-right: 110px; /* Space reserved so text never touches the right-anchored half-plate */
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

        /* Right Corner Oversized Half-Visible Rotating Plate (Exact Form Factor from Reference Image) */
        .stream-plate-anchor {
          position: absolute;
          right: -95px; /* Extends halfway outside right border like reference image */
          top: 50%;
          transform: translateY(-50%);
          width: 220px;
          height: 220px;
          z-index: 3;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
        }

        .stream-plate-circular-frame {
          width: 205px;
          height: 205px;
          border-radius: 50%;
          overflow: hidden;
          background: #1A1103;
          border: 3.5px solid #FFFFFF;
          box-shadow: 0 14px 32px rgba(0, 0, 0, 0.4), 0 4px 12px rgba(135, 71, 0, 0.35);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
          position: relative;
        }

        .stream-plate-spinning-wrapper {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: slowSpinPlate 80s linear infinite; /* Spin very very slowly */
          transform-origin: center center;
          will-change: transform;
        }

        .stream-round-plate-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .stream-plate-aura-ring {
          position: absolute;
          inset: -9px;
          border-radius: 50%;
          border: 2px dashed rgba(135, 71, 0, 0.38);
          pointer-events: none;
          z-index: 1;
          animation: spinAuraReverse 100s linear infinite; /* Counter-rotates very slowly */
        }

        @keyframes slowSpinPlate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes spinAuraReverse {
          0% { transform: rotate(360deg); }
          100% { transform: rotate(0deg); }
        }

        /* Split Layout: Left Blank Rectangular Card + Right Anchored Phone Banner */
        .plenti-central-device-container {
          position: relative;
          z-index: 5;
          width: 100%;
          max-width: 1320px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 clamp(20px, 4vw, 60px);
          pointer-events: auto;
          box-sizing: border-box;
          gap: 40px;
        }

        /* Rectangular Blank Curved White Card on the Left Side of the page */
        .showcase-left-blank-card {
          flex: 1;
          max-width: 620px;
          min-height: 480px;
          background: #FFFFFF;
          border-radius: 28px;
          border: 1.5px solid rgba(0, 0, 0, 0.08);
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.08), 0 6px 18px rgba(0, 0, 0, 0.04);
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 36px;
          box-sizing: border-box;
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }

        .showcase-left-blank-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 30px 70px rgba(0, 0, 0, 0.12), 0 8px 24px rgba(0, 0, 0, 0.06);
        }

        .blank-card-inner-frame {
          width: 100%;
          height: 100%;
          min-height: 400px;
          border: 2px dashed rgba(245, 183, 0, 0.28);
          border-radius: 20px;
          background: rgba(255, 253, 247, 0.65);
        }

        .device-banner-card {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-shrink: 0;
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

          .plenti-cards-stream,
          .plenti-buttons-stream {
            position: relative;
            left: 0;
            transform: none;
            width: 100%;
          }

          .plenti-central-device-container {
            flex-direction: column;
            gap: 28px;
            padding: 0 16px;
          }

          .showcase-left-blank-card {
            width: 100%;
            max-width: 100%;
            min-height: 280px;
            padding: 20px;
          }

          .blank-card-inner-frame {
            min-height: 240px;
          }
        }
      `}</style>
    </section>
  );
};
