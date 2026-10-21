import React from 'react';
import { Sparkles } from 'lucide-react';

export const NarrativeTransitionBand: React.FC = () => {
  const transitionCapsules = [
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
  ];

  return (
    <div className="narrative-transition-wrapper">
      <div className="container">
        <div className="narrative-divider-lead">
          <span className="narrative-line" />
          <div className="narrative-tag">
            <Sparkles size={12} />
            <span>The Culinary Thread • 20 Authentic Traditions</span>
          </div>
          <span className="narrative-line" />
        </div>
      </div>

      {/* Infinite Seamless Two-Pass Marquee Track */}
      <div className="capsules-marquee-container">
        <div className="capsules-marquee-track">
          {/* Primary Set */}
          {transitionCapsules.map((item, idx) => (
            <div key={`capsule-a-${idx}`} className="transition-food-pill">
              <div className="pill-img-container">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/brand/plate-thali.png';
                  }}
                />
              </div>
              <div className="pill-text-content">
                <span className="pill-food-name">{item.title}</span>
                <span className="pill-food-desc">{item.subtitle}</span>
              </div>
            </div>
          ))}

          {/* Seamless Duplicate Set for Infinite Continuous Scrolling */}
          {transitionCapsules.map((item, idx) => (
            <div key={`capsule-b-${idx}`} className="transition-food-pill" aria-hidden="true">
              <div className="pill-img-container">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/brand/plate-thali.png';
                  }}
                />
              </div>
              <div className="pill-text-content">
                <span className="pill-food-name">{item.title}</span>
                <span className="pill-food-desc">{item.subtitle}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .narrative-transition-wrapper {
          padding: 36px 0 40px 0;
          background: linear-gradient(180deg, #FDF0C8 0%, #FEF8E3 50%, #FEF4D3 100%);
          border-top: 1.5px dashed rgba(181, 132, 0, 0.25);
          border-bottom: 1.5px dashed rgba(181, 132, 0, 0.25);
          overflow: hidden;
          position: relative;
        }

        .narrative-divider-lead {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin-bottom: 26px;
        }

        .narrative-line {
          height: 1px;
          flex-grow: 1;
          max-width: 140px;
          background: rgba(0, 0, 0, 0.12);
        }

        .narrative-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.74rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #8C6500;
        }

        /* Seamless Infinite Marquee Track */
        .capsules-marquee-container {
          width: 100%;
          overflow: hidden;
          position: relative;
          mask-image: linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%);
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%);
          padding: 6px 0;
        }

        .capsules-marquee-track {
          display: flex;
          align-items: center;
          gap: 20px;
          width: max-content;
          animation: marqueeScroll 65s linear infinite;
        }

        .capsules-marquee-container:hover .capsules-marquee-track {
          animation-play-state: paused;
        }

        @keyframes marqueeScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .transition-food-pill {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: #FFFFFF;
          padding: 8px 20px 8px 10px;
          border-radius: var(--radius-capsule, 9999px);
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);
          border: 1px solid rgba(0, 0, 0, 0.07);
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease, border-color 0.25s ease;
          cursor: pointer;
          white-space: nowrap;
          flex-shrink: 0;
          user-select: none;
        }

        .transition-food-pill:hover {
          transform: translateY(-3px) scale(1.03);
          box-shadow: 0 8px 24px rgba(245, 183, 0, 0.35);
          border-color: rgba(245, 183, 0, 0.8);
        }

        .pill-img-container {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          background: #FFF9E6;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          flex-shrink: 0;
          border: 1.8px solid #F5B700;
          box-shadow: 0 2px 8px rgba(245, 183, 0, 0.25);
        }

        .pill-img-container img {
          width: 82%;
          height: 82%;
          object-fit: contain;
          transition: transform 0.3s ease;
        }

        .transition-food-pill:hover .pill-img-container img {
          transform: scale(1.12);
        }

        .pill-text-content {
          display: flex;
          flex-direction: column;
        }

        .pill-food-name {
          font-family: var(--font-heading, inherit);
          font-size: 0.88rem;
          font-weight: 700;
          color: #111111;
          line-height: 1.25;
        }

        .pill-food-desc {
          font-size: 0.72rem;
          font-weight: 500;
          color: #666666;
        }

        @media (max-width: 768px) {
          .capsules-marquee-track {
            animation-duration: 45s;
          }
          .transition-food-pill {
            padding: 6px 16px 6px 8px;
          }
          .pill-img-container {
            width: 40px;
            height: 40px;
          }
          .pill-food-name {
            font-size: 0.82rem;
          }
          .pill-food-desc {
            font-size: 0.68rem;
          }
        }
      `}</style>
    </div>
  );
};
