import React from 'react';
import { KolamFrame } from './KolamFrame';
import { Sparkles, ArrowRight, ShieldCheck, TrendingUp, Cpu } from 'lucide-react';

interface PartnerInvitationProps {
  navigate: (route: string) => void;
}

const foodCollageItems = [
  { title: 'Dum Biryani', subtitle: 'Handi Dum', img: '/brand/plate-biryani.png' },
  { title: 'Sattvic Thali', subtitle: 'Shadrasa', img: '/brand/plate-thali.png' },
  { title: 'Jasmine Idli', subtitle: 'Stone Ground', img: '/brand/plate-idli.png' },
  { title: 'Potli Samosa', subtitle: 'Ajwain Crust', img: '/brand/plate-samosa.png' },
  { title: 'Filter Kaapi', subtitle: 'Clay Pot', img: '/brand/doodle-chai.png' },
  { title: 'Benne Dosa', subtitle: 'Makkhan Roast', img: '/brand/plate-benne-dosa.png' },
  { title: 'Chettinad Curry', subtitle: 'Hand Spices', img: '/brand/plate-chettinad-curry.png' },
  { title: 'Dal Baati', subtitle: 'Pure Ghee', img: '/brand/plate-daal-baati.png' },
  { title: 'Malabar Fish', subtitle: 'Kodampuli', img: '/brand/plate-malabar-fish.png' },
  { title: 'Shahi Haleem', subtitle: 'Slow Simmer', img: '/brand/plate-nizami-haleem.png' },
  { title: 'Rogan Josh', subtitle: 'Ratanjot', img: '/brand/plate-rogan-josh.png' },
  { title: 'Litti Chokha', subtitle: 'Smoked Sattu', img: '/brand/plate-litti-chokha.png' },
  { title: 'Tambda Rassa', subtitle: 'Kolhapuri', img: '/brand/plate-kolhapuri-rassa.png' },
  { title: 'Khaman Dhokla', subtitle: 'Steamed', img: '/brand/plate-surati-dhokla.png' },
  { title: 'Pindi Chole', subtitle: 'Amritsari', img: '/brand/plate-pindi-chole.png' },
  { title: 'Prawn Balchão', subtitle: 'Goan Toddy', img: '/brand/plate-goan-prawn.png' },
  { title: 'Gongura Mamsam', subtitle: 'Sorrel Leaf', img: '/brand/plate-gongura-mamsam.png' },
  { title: 'Irani Kheema', subtitle: 'Caramel Onion', img: '/brand/plate-irani-kheema.png' },
  { title: 'Palada Pradhaman', subtitle: 'Cardamom Milk', img: '/brand/plate-palada-pradhaman.png' },
  { title: 'Palappam Stew', subtitle: 'Coconut Milk', img: '/brand/plate-palappam-stew.png' },
];

export const PartnerInvitation: React.FC<PartnerInvitationProps> = ({ navigate }) => {
  return (
    <section className="partner-invitation-section">
      <div className="container">
        {/* KolamFrame with Turmeric Yellow variant */}
        <KolamFrame variant="turmeric" hasCorners={true} className="partner-card-frame">
          {/* Ambient Food Rally Loop Collage running lightly & transparently in the card background */}
          <div className="food-collage-bg-track" aria-hidden="true">
            {/* Top Row Marquee - Scrolls Left */}
            <div className="collage-row marquee-left">
              <div className="collage-track">
                {foodCollageItems.map((item, idx) => (
                  <div key={`track1-a-${idx}`} className="collage-card-item">
                    <img 
                      src={item.img} 
                      alt="" 
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/brand/plate-thali.png';
                      }} 
                    />
                    <div className="collage-card-info">
                      <span className="collage-food-title">{item.title}</span>
                      <span className="collage-food-sub">{item.subtitle}</span>
                    </div>
                  </div>
                ))}
                {foodCollageItems.map((item, idx) => (
                  <div key={`track1-b-${idx}`} className="collage-card-item">
                    <img 
                      src={item.img} 
                      alt="" 
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/brand/plate-thali.png';
                      }} 
                    />
                    <div className="collage-card-info">
                      <span className="collage-food-title">{item.title}</span>
                      <span className="collage-food-sub">{item.subtitle}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Row Marquee - Scrolls Right */}
            <div className="collage-row marquee-right">
              <div className="collage-track">
                {[...foodCollageItems].reverse().map((item, idx) => (
                  <div key={`track2-a-${idx}`} className="collage-card-item">
                    <img 
                      src={item.img} 
                      alt="" 
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/brand/plate-thali.png';
                      }} 
                    />
                    <div className="collage-card-info">
                      <span className="collage-food-title">{item.title}</span>
                      <span className="collage-food-sub">{item.subtitle}</span>
                    </div>
                  </div>
                ))}
                {[...foodCollageItems].reverse().map((item, idx) => (
                  <div key={`track2-b-${idx}`} className="collage-card-item">
                    <img 
                      src={item.img} 
                      alt="" 
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/brand/plate-thali.png';
                      }} 
                    />
                    <div className="collage-card-info">
                      <span className="collage-food-title">{item.title}</span>
                      <span className="collage-food-sub">{item.subtitle}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Foreground Content - undisturbed and fully clickable */}
          <div className="partner-text-block">
            {/* Liquid Morphism FoodPreneur Growth Engine Badge */}
            <div className="liquid-badge-pill">
              <Sparkles size={14} className="liquid-badge-icon" />
              <span>FoodPreneur Growth Engine</span>
            </div>

            <h2 className="partner-headline">
              Are You a Passionate Home Cook or Cloud Kitchen?
            </h2>

            <p className="partner-desc">
              Turn your heirloom recipes into a flourishing culinary brand. We provide fully equipped cloud kitchen infrastructure, raw material procurement, FSSAI compliance auditing, digital ordering tech, and reliable delivery dispatch.
            </p>

            <div className="partner-benefits-row">
              <div className="benefit-badge">
                <ShieldCheck size={18} />
                <span>Zero Upfront Kitchen Setup Cost</span>
              </div>
              <div className="benefit-badge">
                <TrendingUp size={18} />
                <span>Fair Transparent Profit Margins</span>
              </div>
              <div className="benefit-badge">
                <Cpu size={18} />
                <span>feazto Kitchen OS & Order Tablet</span>
              </div>
            </div>

            <div className="partner-cta-actions">
              <button 
                type="button" 
                onClick={() => navigate('/partners')}
                className="btn btn-primary"
              >
                <span>Partner With feazto</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </KolamFrame>
      </div>

      <style>{`
        .partner-invitation-section {
          padding-top: 60px;
          padding-bottom: 80px;
          background: transparent;
        }

        .partner-card-frame {
          position: relative;
          overflow: hidden;
        }

        /* ── AMBIENT FOOD COLLAGE BACKGROUND MARQUEE LOOP ── */
        .food-collage-bg-track {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          opacity: 0.22;
          overflow: hidden;
          filter: saturate(130%) contrast(105%);
          mask-image: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.95) 20%, rgba(0, 0, 0, 0.4) 75%, transparent 100%);
          -webkit-mask-image: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.95) 20%, rgba(0, 0, 0, 0.4) 75%, transparent 100%);
        }

        .collage-row {
          width: 100%;
          overflow: hidden;
          display: flex;
          white-space: nowrap;
          padding: 6px 0;
        }

        .collage-track {
          display: flex;
          align-items: center;
          gap: 22px;
          width: max-content;
        }

        .marquee-left .collage-track {
          animation: collageMarqueeLeft 55s linear infinite;
        }

        .marquee-right .collage-track {
          animation: collageMarqueeRight 60s linear infinite;
        }

        @keyframes collageMarqueeLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes collageMarqueeRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        /* Individual collage card pill */
        .collage-card-item {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 8px 18px 8px 10px;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border-radius: 9999px;
          border: 1px solid rgba(255, 255, 255, 0.95);
          box-shadow: 0 4px 14px rgba(181, 132, 0, 0.12);
          transform: rotate(-1.5deg);
        }

        .marquee-right .collage-card-item {
          transform: rotate(1.5deg);
        }

        .collage-card-item img {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          object-fit: cover;
          background: #FFF9E6;
          border: 1.5px solid #F5B700;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
        }

        .collage-card-info {
          display: flex;
          flex-direction: column;
        }

        .collage-food-title {
          font-family: var(--font-heading, inherit);
          font-size: 0.88rem;
          font-weight: 800;
          color: #2B1D00;
          line-height: 1.2;
        }

        .collage-food-sub {
          font-size: 0.70rem;
          font-weight: 600;
          color: #7A5800;
        }

        .partner-text-block {
          max-width: 100%;
          position: relative;
          z-index: 2;
        }

        /* ── LIQUID MORPHISM BADGE BUTTON ── */
        .liquid-badge-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 20px;
          border-radius: var(--radius-capsule, 9999px);
          font-family: var(--font-heading, inherit);
          font-size: 0.82rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #6B4E00;
          background: linear-gradient(
            135deg, 
            rgba(255, 255, 255, 0.92) 0%, 
            rgba(255, 255, 255, 0.65) 50%, 
            rgba(255, 255, 255, 0.82) 100%
          );
          backdrop-filter: blur(14px) saturate(180%);
          -webkit-backdrop-filter: blur(14px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.95);
          box-shadow: 
            0 4px 16px rgba(181, 132, 0, 0.16),
            0 1px 3px rgba(0, 0, 0, 0.05),
            inset 0 1.5px 2px rgba(255, 255, 255, 0.9),
            inset 0 -1.5px 2px rgba(181, 132, 0, 0.08);
          position: relative;
          overflow: hidden;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          user-select: none;
        }

        /* Liquid Sheen Highlight Overlay */
        .liquid-badge-pill::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 48%;
          background: linear-gradient(to bottom, rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0));
          border-radius: 9999px 9999px 0 0;
          pointer-events: none;
        }

        .liquid-badge-pill:hover {
          transform: translateY(-2px);
          box-shadow: 
            0 8px 24px rgba(181, 132, 0, 0.24),
            0 2px 6px rgba(0, 0, 0, 0.08),
            inset 0 2px 3px rgba(255, 255, 255, 1);
        }

        .liquid-badge-icon {
          color: #8C6500;
          filter: drop-shadow(0 1px 2px rgba(255, 255, 255, 0.8));
        }

        .partner-headline {
          font-size: clamp(2rem, 3.5vw, 2.9rem);
          font-weight: 800;
          color: var(--color-ink-black);
          line-height: 1.25;
          margin-top: 18px;
          margin-bottom: 18px;
          letter-spacing: -0.02em;
        }

        .partner-desc {
          font-size: 1.08rem;
          color: #222222;
          line-height: 1.65;
          margin-bottom: 32px;
          max-width: 820px;
        }

        .partner-benefits-row {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-bottom: 30px;
        }

        .card-marquee-wrapper {
          width: 100%;
          margin: 14px 0 34px 0;
          border-radius: 24px;
          overflow: hidden;
          background: linear-gradient(180deg, #FDF0C8 0%, #FEF8E3 50%, #FEF4D3 100%);
          border: 1.5px dashed rgba(181, 132, 0, 0.38);
          box-shadow: inset 0 2px 6px rgba(181, 132, 0, 0.12), 0 4px 16px rgba(0, 0, 0, 0.04);
        }

        .card-marquee-wrapper .narrative-transition-wrapper {
          padding: 16px 0 !important;
          background: transparent !important;
          border-top: none !important;
          border-bottom: none !important;
        }

        /* ── LIQUID MORPHISM BENEFIT BADGES ── */
        .benefit-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(
            135deg, 
            rgba(255, 255, 255, 0.95) 0%, 
            rgba(255, 255, 255, 0.72) 100%
          );
          backdrop-filter: blur(12px) saturate(160%);
          -webkit-backdrop-filter: blur(12px) saturate(160%);
          border: 1px solid rgba(255, 255, 255, 0.95);
          padding: 10px 18px;
          border-radius: var(--radius-capsule, 9999px);
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--color-ink-black);
          box-shadow: 
            0 4px 14px rgba(0, 0, 0, 0.04),
            inset 0 1px 2px rgba(255, 255, 255, 0.8);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .benefit-badge:hover {
          transform: translateY(-2px);
          box-shadow: 
            0 6px 20px rgba(181, 132, 0, 0.16),
            inset 0 1px 2px rgba(255, 255, 255, 0.95);
        }

        .benefit-badge svg {
          color: #8C6500;
        }

        @media (max-width: 768px) {
          .partner-benefits-row {
            flex-direction: column;
            gap: 10px;
          }
        }
      `}</style>
    </section>
  );
};
