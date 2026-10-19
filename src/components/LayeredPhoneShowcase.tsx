import React from 'react';
import { Sparkles, ArrowRight, Smartphone } from 'lucide-react';

interface LayeredPhoneShowcaseProps {
  navigate: (route: string) => void;
}

export const LayeredPhoneShowcase: React.FC<LayeredPhoneShowcaseProps> = ({ navigate }) => {
  const topRowCards = [
    { title: 'Hyderabadi Dum Handi', state: 'Telangana', img: '/brand/plate-biryani.png' },
    { title: 'Sattvic Maharashtrian Thali', state: 'Maharashtra', img: '/brand/plate-thali.png' },
    { title: 'Kongu Malli Poo Idli', state: 'Tamil Nadu', img: '/brand/plate-idli.png' },
    { title: 'Awadhi Ajwain Samosa', state: 'Uttar Pradesh', img: '/brand/plate-samosa.png' },
    { title: 'Hyderabadi Dum Handi', state: 'Telangana', img: '/brand/plate-biryani.png' },
    { title: 'Sattvic Maharashtrian Thali', state: 'Maharashtra', img: '/brand/plate-thali.png' },
  ];

  const bottomRowCards = [
    { title: 'Clay Pot Filter Kaapi', state: 'Karnataka', img: '/brand/doodle-chai.png' },
    { title: 'Old Delhi Ajwain Crust', state: 'Delhi NCR', img: '/brand/plate-samosa.png' },
    { title: 'Tiffin Podi Dosa & Chutney', state: 'Tamil Nadu', img: '/brand/plate-idli.png' },
    { title: 'Gongura Mamsam Heritage', state: 'Andhra Pradesh', img: '/brand/plate-biryani.png' },
    { title: 'Clay Pot Filter Kaapi', state: 'Karnataka', img: '/brand/doodle-chai.png' },
    { title: 'Old Delhi Ajwain Crust', state: 'Delhi NCR', img: '/brand/plate-samosa.png' },
  ];

  return (
    <section className="layered-showcase-section">
      <div className="container text-center-header">
        <div className="badge-tag">
          <Sparkles size={13} />
          <span>Interactive Culinary Carousel</span>
        </div>
        <h2 className="layered-headline">Opposing Flavours, One Central Heart</h2>
        <p className="layered-subheadline">
          Hundreds of regional micro-cuisines converging into an intuitive mobile interface.
        </p>
      </div>

      {/* Reference F: Central Phone with Opposing-Direction Image Cards */}
      <div className="layered-stage-wrapper">
        {/* Upper Moving Row (translates to the left) */}
        <div className="cards-stream stream-top">
          <div className="cards-track animate-scroll-left">
            {topRowCards.map((card, idx) => (
              <div key={idx} className="floating-plate-card">
                <div className="card-plate-box">
                  <img src={card.img} alt={card.title} />
                </div>
                <div className="card-plate-info">
                  <strong>{card.title}</strong>
                  <span>{card.state}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Anchored Central Phone */}
        <div className="anchored-phone-device">
          <div className="anchored-device-frame">
            <div className="anchored-screen-header">
              <span className="app-name-tag">FEAzTO Live</span>
              <span className="battery-indicator">100%</span>
            </div>

            <div className="anchored-screen-body">
              <div className="center-app-logo">
                <img src="/brand/feazto-logo.svg" alt="FEAzTO" />
              </div>
              <h5 className="anchored-app-title">Discover Regional Kitchens</h5>
              <p className="anchored-app-sub">Fresh home batches ready in your neighborhood.</p>

              <div className="app-status-badge">
                <span className="status-live-pulse" />
                <span>8 Active Kitchen Batches Today</span>
              </div>

              <div className="app-mini-feature-box">
                <div className="mini-box-icon">
                  <Smartphone size={18} />
                </div>
                <div className="mini-box-text">
                  <strong>One-Tap Heritage Order</strong>
                  <p>Direct FoodPreneur connection</p>
                </div>
              </div>

              <button 
                type="button" 
                onClick={() => navigate('/download')}
                className="btn btn-yellow btn-screen-cta"
              >
                <span>Get Pilot Access</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Lower Moving Row (translates to the right) */}
        <div className="cards-stream stream-bottom">
          <div className="cards-track animate-scroll-right">
            {bottomRowCards.map((card, idx) => (
              <div key={idx} className="floating-plate-card">
                <div className="card-plate-box">
                  <img src={card.img} alt={card.title} />
                </div>
                <div className="card-plate-info">
                  <strong>{card.title}</strong>
                  <span>{card.state}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .layered-showcase-section {
          padding-top: 100px;
          padding-bottom: 120px;
          background: linear-gradient(180deg, #FEF5D6 0%, #FEF8E3 50%, #FFFDF7 100%);
          overflow: hidden;
          position: relative;
        }

        .text-center-header {
          text-align: center;
          max-width: 680px;
          margin: 0 auto 50px auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .layered-headline {
          font-size: clamp(2rem, 3.4vw, 2.8rem);
          font-weight: 800;
          color: var(--color-ink-black);
          margin-top: 18px;
          margin-bottom: 14px;
        }

        .layered-subheadline {
          font-size: 1.05rem;
          color: var(--color-text-secondary);
        }

        .layered-stage-wrapper {
          position: relative;
          height: 560px;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
        }

        /* Stream Rows */
        .cards-stream {
          position: absolute;
          width: 100%;
          left: 0;
          overflow: hidden;
          z-index: 1;
          pointer-events: none;
        }

        .stream-top {
          top: 30px;
        }

        .stream-bottom {
          bottom: 30px;
        }

        .cards-track {
          display: flex;
          gap: 24px;
          width: max-content;
        }

        .animate-scroll-left {
          animation: scrollLeft 28s linear infinite;
        }

        .animate-scroll-right {
          animation: scrollRight 28s linear infinite;
        }

        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes scrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        .floating-plate-card {
          background: #FFFFFF;
          border-radius: var(--radius-capsule);
          padding: 8px 24px 8px 10px;
          display: flex;
          align-items: center;
          gap: 14px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
          border: 1px solid rgba(0, 0, 0, 0.06);
          pointer-events: auto;
          transition: transform 0.2s ease;
        }

        .floating-plate-card:hover {
          transform: scale(1.05);
        }

        .card-plate-box {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: #FFF9E6;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1.5px solid var(--color-brand-yellow);
          overflow: hidden;
        }

        .card-plate-box img {
          width: 80%;
          height: 80%;
          object-fit: contain;
        }

        .card-plate-info {
          display: flex;
          flex-direction: column;
        }

        .card-plate-info strong {
          font-size: 0.88rem;
          color: var(--color-ink-black);
          white-space: nowrap;
        }

        .card-plate-info span {
          font-size: 0.74rem;
          color: #8C6500;
          font-weight: 600;
        }

        /* Central Anchored Phone */
        .anchored-phone-device {
          position: relative;
          z-index: 5;
          width: 300px;
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.22);
          border-radius: 40px;
          padding: 10px;
          background: #111111;
          border: 3px solid #333333;
        }

        .anchored-device-frame {
          background: #FFFFFF;
          border-radius: 32px;
          padding: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          min-height: 440px;
        }

        .anchored-screen-header {
          display: flex;
          justify-content: space-between;
          width: 100%;
          font-size: 0.72rem;
          font-weight: 700;
          color: #777777;
          margin-bottom: 24px;
        }

        .anchored-screen-body {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }

        .center-app-logo img {
          height: 44px;
          width: auto;
          margin-bottom: 16px;
        }

        .anchored-app-title {
          font-size: 1.15rem;
          font-weight: 800;
          color: var(--color-ink-black);
          margin-bottom: 6px;
        }

        .anchored-app-sub {
          font-size: 0.82rem;
          color: var(--color-text-secondary);
          margin-bottom: 20px;
          line-height: 1.4;
        }

        .app-status-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: var(--color-warm-white);
          border: 1px solid rgba(0, 0, 0, 0.08);
          padding: 6px 12px;
          border-radius: 9999px;
          font-size: 0.74rem;
          font-weight: 600;
          color: var(--color-ink-black);
          margin-bottom: 24px;
        }

        .status-live-pulse {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #2E7D32;
          box-shadow: 0 0 6px rgba(46, 125, 50, 0.6);
        }

        .app-mini-feature-box {
          display: flex;
          align-items: center;
          gap: 10px;
          background: var(--color-warm-white);
          padding: 10px 14px;
          border-radius: 12px;
          width: 100%;
          margin-bottom: 24px;
          text-align: left;
        }

        .mini-box-icon {
          color: #8C6500;
        }

        .mini-box-text strong {
          display: block;
          font-size: 0.78rem;
          color: var(--color-ink-black);
        }

        .mini-box-text p {
          font-size: 0.7rem;
          color: var(--color-text-secondary);
        }

        .btn-screen-cta {
          width: 100%;
          font-size: 0.88rem;
          padding: 12px;
        }

        @media (max-width: 600px) {
          .layered-stage-wrapper {
            height: auto;
            flex-direction: column;
            gap: 24px;
          }
          .cards-stream {
            position: relative;
            top: auto;
            bottom: auto;
          }
        }
      `}</style>
    </section>
  );
};
