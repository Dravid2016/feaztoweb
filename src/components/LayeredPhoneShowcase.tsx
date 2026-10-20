import React from 'react';

interface LayeredPhoneShowcaseProps {
  navigate?: (route: string) => void;
}

export const LayeredPhoneShowcase: React.FC<LayeredPhoneShowcaseProps> = () => {
  const streamCardsRow1 = [
    { title: 'Anna Kitchen Dosa', label: 'Home Kitchen • Tanjore', img: '/brand/plate-idli.png', iconBg: '#FFF3D6', badge: 'Verified 98%' },
    { title: 'Hyderabadi Dum Handi', label: 'Slow Cooked Handi', img: '/brand/plate-biryani.png', iconBg: '#FFEAD4', badge: 'Regional Classic' },
    { title: 'Malli Poo Podi Idli', label: 'Cast-Iron Batter', img: '/brand/plate-idli.png', iconBg: '#FFF9E6', badge: 'Breakfast Favorite' },
    { title: 'Sattvic Festive Thali', label: 'Generational Recipe', img: '/brand/plate-thali.png', iconBg: '#EAF8EA', badge: '100% Home Cooked' },
    { title: 'Awadhi Ajwain Samosa', label: 'Heritage Spice Crust', img: '/brand/plate-samosa.png', iconBg: '#FFF4E0', badge: 'Tea-time Must' },
    { title: 'Clay Pot Filter Kaapi', label: 'Coorg Bean Decoction', img: '/brand/doodle-chai.png', iconBg: '#FFF0D4', badge: 'Signature Brew' },
  ];

  const streamCardsRow2 = [
    { title: 'Book a Verified Cook', label: 'Authentic Regional Chefs', icon: '👨‍🍳', iconBg: '#E8F5E9', badge: 'Hourly / Monthly' },
    { title: 'Clean Kitchen Guarantee', label: 'Transparent Hygiene Score', icon: '🛡️', iconBg: '#E3F2FD', badge: 'FSSAI Certified' },
    { title: 'Generational Batches', label: 'Small-Batch Home Food', icon: '🍲', iconBg: '#FFF3E0', badge: 'Limited Plates' },
    { title: 'Direct FoodPreneurs', label: 'Zero Middleman Markups', icon: '❤️', iconBg: '#FCE4EC', badge: 'Fair Community' },
    { title: 'Pre-Order Traditions', label: 'Delivered Hot & Fresh', icon: '⏰', iconBg: '#F3E5F5', badge: 'Same Day' },
    { title: 'Authentic Spice Blends', label: 'No Commercial Preservatives', icon: '🌿', iconBg: '#E0F2F1', badge: 'Pure Ingredients' },
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

      {/* Plenti-Style Centered Phone Mockup with Opposing Horizontal Flanking Rows */}
      <div className="plenti-stage-showcase-wrapper">
        {/* Upper Scrolling Carousel (scrolls left behind phone) */}
        <div className="plenti-cards-stream stream-top">
          <div className="plenti-cards-track scroll-stream-left">
            {[...streamCardsRow1, ...streamCardsRow1, ...streamCardsRow1].map((card, idx) => (
              <div key={idx} className="plenti-floating-feature-card">
                <div className="feature-card-avatar" style={{ background: card.iconBg }}>
                  <img src={card.img} alt={card.title} />
                </div>
                <div className="feature-card-text">
                  <span className="feature-badge-tiny">{card.badge}</span>
                  <strong>{card.title}</strong>
                  <p>{card.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Anchored FEAzTO Mobile Phone Banner (Exact Ghee Podi Dosa Model) */}
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

        {/* Lower Scrolling Carousel (scrolls right behind phone) */}
        <div className="plenti-cards-stream stream-bottom">
          <div className="plenti-cards-track scroll-stream-right">
            {[...streamCardsRow2, ...streamCardsRow2, ...streamCardsRow2].map((card, idx) => (
              <div key={idx} className="plenti-floating-feature-card">
                <div className="feature-card-avatar icon-avatar" style={{ background: card.iconBg }}>
                  <span>{card.icon}</span>
                </div>
                <div className="feature-card-text">
                  <span className="feature-badge-tiny">{card.badge}</span>
                  <strong>{card.title}</strong>
                  <p>{card.label}</p>
                </div>
              </div>
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

        .plenti-cards-track {
          display: flex;
          gap: 24px;
          width: max-content;
        }

        .scroll-stream-left {
          animation: marqueeLeft 34s linear infinite;
        }

        .scroll-stream-right {
          animation: marqueeRight 34s linear infinite;
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

        /* Floating Feature Card */
        .plenti-floating-feature-card {
          background: #FFFFFF;
          border-radius: 20px;
          padding: 12px 20px 12px 14px;
          display: flex;
          align-items: center;
          gap: 14px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.07);
          border: 1px solid rgba(0, 0, 0, 0.05);
          pointer-events: auto;
          min-width: 260px;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .plenti-floating-feature-card:hover {
          transform: translateY(-4px) scale(1.03);
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.12);
        }

        .feature-card-avatar {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          flex-shrink: 0;
        }

        .feature-card-avatar img {
          width: 85%;
          height: 85%;
          object-fit: contain;
        }

        .icon-avatar span {
          font-size: 1.6rem;
        }

        .feature-card-text {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .feature-badge-tiny {
          font-size: 0.68rem;
          font-weight: 700;
          color: #B25E00;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .feature-card-text strong {
          font-size: 0.92rem;
          font-weight: 700;
          color: #1A1A1A;
          white-space: nowrap;
        }

        .feature-card-text p {
          font-size: 0.78rem;
          color: #777777;
          margin: 0;
          white-space: nowrap;
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
          max-width: 390px;
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
