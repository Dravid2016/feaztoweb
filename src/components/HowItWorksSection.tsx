import React, { useState, useEffect } from 'react';
import { 
  ShoppingBag, 
  ChefHat, 
  Bike, 
  ArrowRight, 
  PackageCheck
} from 'lucide-react';

interface WorkflowStep {
  id: string;
  stepNumber: string;
  tabLabel: string;
  tabIcon: React.ReactNode;
  badgeText: string;
  cardHeading: string;
  cardDescription: string;
  statValue: string;
  statLabel: string;
  footerNote: string;
  activeAccent: string;
  bgImage: string; // Dynamic stage background image per step
  mediaUrl?: string; // Add your banner or GIF URL here
}

export const HowItWorksSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<string>('step-1');
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(false);

  const steps: WorkflowStep[] = [
    {
      id: 'step-1',
      stepNumber: '01',
      tabLabel: 'Order Placed',
      tabIcon: <ShoppingBag size={18} fill="currentColor" strokeWidth={1.5} />,
      badgeText: 'Live Order Placement',
      cardHeading: 'Browse neighborhood kitchens & order fresh heirloom meals.',
      cardDescription: 'Customer selects authentic regional dishes prepared in limited daily home batches with zero palm oil and pure cold-pressed ingredients.',
      statValue: 'Instant',
      statLabel: 'order routed directly to certified local home kitchens',
      footerNote: 'Transparent ingredient transparency, zero artificial coloring, and verified home recipes.',
      activeAccent: '#F5B800',
      bgImage: '/brand/feazto-grandma-kitchen-phone.jpg',
      mediaUrl: '' // Add your Step 1 banner or GIF link here
    },
    {
      id: 'step-2',
      stepNumber: '02',
      tabLabel: 'Home Cook Assigned',
      tabIcon: <ChefHat size={18} fill="currentColor" strokeWidth={1.5} />,
      badgeText: 'Home Chef Preparation',
      cardHeading: 'Assigned home cook accepts & begins authentic slow-cooking.',
      cardDescription: 'The neighborhood FoodPreneur starts preparing the batch fresh with stone-ground masalas, cast-iron seasoning, or slow-fire dum handi techniques.',
      statValue: 'Fresh to Order',
      statLabel: 'small-batch home crafted with calibrated hygiene protocols',
      footerNote: 'Each verified home cook is certified for health safety, pristine sanitation, and clean oils.',
      activeAccent: '#FF9E1B',
      bgImage: '/brand/feazto-home-cook-kitchen-boxes.jpg',
      mediaUrl: '' // Add your Step 2 banner or GIF link here
    },
    {
      id: 'step-3',
      stepNumber: '03',
      tabLabel: 'Rider Dispatched',
      tabIcon: <Bike size={18} fill="currentColor" strokeWidth={1.5} />,
      badgeText: 'Rider Pickup & Heat Seal',
      cardHeading: 'Assigned Feazto rider arrives for thermal tamper-proof pickup.',
      cardDescription: 'Freshly packed meals are sealed in eco-insulated thermal containers to lock in piping-hot steam, fragrant aroma, and crisp textures.',
      statValue: '< 7 Mins',
      statLabel: 'average home pickup once the cook marks preparation ready',
      footerNote: 'Dedicated temperature-preserving fleet keeping curries hot and dosas crisp.',
      activeAccent: '#10B981',
      bgImage: '/brand/feazto-rider-wide-hd.png',
      mediaUrl: '' // Add your Step 3 banner or GIF link here
    },
    {
      id: 'step-4',
      stepNumber: '04',
      tabLabel: 'Doorstep Delivery',
      tabIcon: <PackageCheck size={18} fill="currentColor" strokeWidth={1.5} />,
      badgeText: 'Delivered Fresh & Hot',
      cardHeading: 'Arrives piping-hot at your doorstep ready to nourish.',
      cardDescription: 'Unpack authentic home comfort food with live delivery tracking, direct cook tips, and genuine cultural flavors that comfort your family.',
      statValue: 'Piping Hot',
      statLabel: 'nourishing home-style meal ready for your dining table',
      footerNote: 'Empowering genuine home cooks while delivering nostalgic home flavours.',
      activeAccent: '#3B82F6',
      bgImage: '/brand/feazto-doorstep-handover-delivery.png',
      mediaUrl: '' // Add your Step 4 banner or GIF link here
    }
  ];

  const currentStep = steps.find((s) => s.id === activeStep) || steps[0];

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => {
        const idx = steps.findIndex((s) => s.id === prev);
        return steps[(idx + 1) % steps.length].id;
      });
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, steps]);

  return (
    <section 
      className="feazto-how-it-works-section" 
      id="how-it-works"
      onMouseEnter={() => setIsAutoPlaying(false)}
    >
      <div className="how-inner-container">
        
        {/* Top Floating Capsule Tag */}
        <div className="how-pill-tag">
          <span>Real-time journey: From local home kitchens straight to your doorstep.</span>
        </div>

        {/* Master Headline */}
        <h2 className="how-master-heading">
          Here’s how<br />Feazto works.
        </h2>

        {/* 4 Step Pill Buttons Row */}
        <div className="how-step-tabs-row" role="tablist">
          {steps.map((st) => {
            const isActive = st.id === activeStep;
            return (
              <button
                key={st.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`step-tab-btn ${isActive ? 'is-active' : ''}`}
                onClick={() => setActiveStep(st.id)}
              >
                <span className="step-tab-icon">{st.tabIcon}</span>
                <span className="step-tab-label">{st.tabLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Main Stage Display Showcase with dynamic background per step */}
        <div 
          className="how-stage-card"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.12) 40%, rgba(0, 0, 0, 0.62) 70%, rgba(0, 0, 0, 0.82) 100%), url('${currentStep.bgImage}')`
          }}
        >
          
          {/* Subtle Dynamic Ambient Glow behind active media */}
          <div 
            className="stage-ambient-glow" 
            style={{ 
              background: `radial-gradient(circle, ${currentStep.activeAccent}22 0%, ${currentStep.activeAccent}06 50%, transparent 75%)` 
            }} 
          />

          {/* Left Column: Banner / GIF Container (Only renders when mediaUrl is provided) */}
          {currentStep.mediaUrl ? (
            <div className="stage-media-slot-container">
              <img 
                src={currentStep.mediaUrl} 
                alt={currentStep.badgeText}
                className="step-custom-banner-img"
              />
            </div>
          ) : (
            <div className="stage-media-slot-container empty-media-space" />
          )}

          {/* Right Floating Information Content (Exact reference style) */}
          <div className="stage-glass-info-card">
            <h3 className="info-heading">{currentStep.cardHeading}</h3>
            
            <p className="info-description">
              {currentStep.cardDescription}
            </p>

            {/* Metric / Stat Highlight matching Reference Card */}
            <div className="info-stat-row">
              <span className="info-stat-number" style={{ color: currentStep.activeAccent }}>
                {currentStep.statValue}
              </span>
              <span className="info-stat-caption">{currentStep.statLabel}</span>
            </div>

            {/* Quick interactive next-step button */}
            <div className="info-step-action-row">
              <button 
                type="button" 
                className="next-stage-btn"
                onClick={() => {
                  const idx = steps.findIndex((s) => s.id === activeStep);
                  setActiveStep(steps[(idx + 1) % steps.length].id);
                }}
              >
                <span>Explore Next Step</span>
                <ArrowRight size={15} />
              </button>
            </div>

          </div>

        </div>

        {/* Bottom Subtext Row matching the reference bottom strip */}
        <div className="how-bottom-strip">
          <p className="bottom-feature-note">
            <span className="dot-indicator" style={{ backgroundColor: currentStep.activeAccent }} />
            {currentStep.footerNote}
          </p>
        </div>

      </div>

      <style>{`
        .feazto-how-it-works-section {
          position: relative;
          width: 100%;
          padding: 100px 24px 120px 24px;
          background-color: #FAFAFB;
          background-image: radial-gradient(circle, rgba(0, 0, 0, 0.22) 1.5px, transparent 1.5px);
          background-size: 26px 26px;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
        }

        .how-inner-container {
          max-width: 1140px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
          z-index: 2;
        }

        /* Top Pill Tag */
        .how-pill-tag {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 8px 24px;
          border-radius: 9999px;
          border: 1px solid rgba(0, 0, 0, 0.12);
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(8px);
          font-size: clamp(0.82rem, 1.2vw, 0.92rem);
          font-weight: 500;
          color: #4B5563;
          margin-bottom: 28px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
          letter-spacing: -0.01em;
        }

        /* Master Headline */
        .how-master-heading {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
          font-size: clamp(2.4rem, 4.8vw, 3.8rem);
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.035em;
          color: #111827;
          margin: 0 0 36px 0;
          text-align: center;
        }

        /* Step Tabs Row */
        .how-step-tabs-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }

        .step-tab-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 13px 26px;
          border-radius: 9999px;
          border: none;
          outline: none;
          background: #FFFFFF;
          color: #374151;
          font-size: 0.94rem;
          font-weight: 600;
          cursor: pointer;
          overflow: hidden;
          transition: all 0.22s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.10), 0 1px 4px rgba(0, 0, 0, 0.06);
        }

        .step-tab-btn:hover {
          background: #FFFFFF;
          color: #111827;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.14), 0 2px 6px rgba(0, 0, 0, 0.08);
        }

        .step-tab-btn.is-active {
          background: #FFFFFF;
          color: #111827;
          box-shadow: 0 8px 26px rgba(0, 0, 0, 0.16), 0 2px 8px rgba(0, 0, 0, 0.10);
          font-weight: 700;
          transform: translateY(-2px);
        }

        .step-tab-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          color: #374151;
          transition: color 0.2s ease, transform 0.2s ease;
        }

        .step-tab-btn.is-active .step-tab-icon {
          color: #111827;
          transform: scale(1.08);
        }

        .step-tab-icon svg {
          fill: currentColor;
        }

        .step-tab-label {
          font-size: 0.94rem;
          letter-spacing: -0.01em;
        }

        /* Main Big Card Stage with Bright Sunlit Kitchen Backgrounds */
        .how-stage-card {
          position: relative;
          width: 100%;
          min-height: 560px;
          border-radius: 36px;
          padding: 48px 64px;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          justify-content: space-between;
          overflow: hidden;
          box-shadow: 0 32px 80px rgba(0, 0, 0, 0.22), 0 8px 24px rgba(0, 0, 0, 0.12);
          gap: 40px;
          background-color: #F8B504;
          background-size: cover;
          background-position: center left;
          background-repeat: no-repeat;
          filter: contrast(102%) brightness(108%);
          transition: background-image 0.4s ease-in-out, box-shadow 0.3s ease;
        }

        .stage-ambient-glow {
          position: absolute;
          top: 50%;
          right: 20%;
          transform: translate(50%, -50%);
          width: 440px;
          height: 440px;
          filter: blur(65px);
          pointer-events: none;
          z-index: 1;
          transition: background 0.5s ease;
        }

        /* Left Column: Dedicated Clean Banner / GIF Slot */
        .stage-media-slot-container {
          position: relative;
          z-index: 2;
          flex: 1.15;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          max-width: 520px;
          border: none;
          background: transparent;
        }

        .empty-media-space {
          min-height: 380px;
          border: none;
          background: transparent;
        }

        .step-custom-banner-img {
          width: 100%;
          height: auto;
          max-height: 440px;
          object-fit: contain;
          display: block;
          border-radius: 24px;
        }

        /* Seamlessly Blended Information Content (Zero Separate Card Box or Harsh Borders) */
        .stage-glass-info-card {
          position: relative;
          z-index: 3;
          flex: 0.95;
          max-width: 440px;
          background: transparent;
          backdrop-filter: none;
          -webkit-backdrop-filter: none;
          border: none;
          border-radius: 0;
          padding: 10px 0;
          text-align: left;
          box-shadow: none;
        }

        .info-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(0, 0, 0, 0.35);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.25);
          font-size: 0.75rem;
          font-weight: 700;
          padding: 5px 14px;
          border-radius: 9999px;
          margin-bottom: 18px;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          transition: color 0.3s ease, border-color 0.3s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        .info-heading {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
          font-size: clamp(1.4rem, 2.2vw, 1.85rem);
          font-weight: 800;
          line-height: 1.25;
          letter-spacing: -0.02em;
          color: #FFD233;
          margin: 0 0 16px 0;
          text-shadow: 0 2px 14px rgba(0, 0, 0, 0.75), 0 1px 4px rgba(0, 0, 0, 0.9);
        }

        .info-description {
          font-size: 0.98rem;
          line-height: 1.6;
          color: #FFF2B2;
          font-weight: 500;
          margin: 0 0 26px 0;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.75), 0 1px 3px rgba(0, 0, 0, 0.9);
        }

        .info-stat-row {
          display: flex;
          align-items: baseline;
          gap: 12px;
          padding-top: 18px;
          border-top: 1px solid rgba(255, 210, 51, 0.28);
          flex-wrap: wrap;
        }

        .info-stat-number {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
          font-size: 2.2rem;
          font-weight: 900;
          line-height: 1;
          letter-spacing: -0.03em;
          color: #FFD233 !important;
          text-shadow: 0 2px 12px rgba(0, 0, 0, 0.85);
          transition: color 0.3s ease;
        }

        .info-stat-caption {
          font-size: 0.88rem;
          color: #FFECA1;
          font-weight: 500;
          line-height: 1.35;
          max-width: 220px;
          text-shadow: 0 1px 6px rgba(0, 0, 0, 0.85);
        }

        .info-step-action-row {
          margin-top: 24px;
        }

        .next-stage-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          border-radius: 9999px;
          background: #FFFFFF;
          color: #111827;
          font-size: 0.88rem;
          font-weight: 700;
          border: none;
          outline: none;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
        }

        .next-stage-btn:hover {
          background: #F9FAFB;
          color: #000000;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.28);
        }

        .next-stage-btn svg {
          transition: transform 0.2s ease;
        }

        .next-stage-btn:hover svg {
          transform: translateX(3px);
        }

        /* Bottom Feature Note Strip */
        .how-bottom-strip {
          margin-top: 32px;
          width: 100%;
          display: flex;
          justify-content: center;
        }

        .bottom-feature-note {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.9rem;
          color: #6B7280;
          font-weight: 500;
        }

        .dot-indicator {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          display: inline-block;
          transition: background 0.3s ease;
        }

        @media (max-width: 900px) {
          .how-stage-card {
            flex-direction: column;
            padding: 36px 20px;
            gap: 32px;
          }

          .stage-media-slot-container,
          .stage-glass-info-card {
            max-width: 100%;
            width: 100%;
          }

          .stage-media-card {
            min-height: 260px;
          }
        }
      `}</style>
    </section>
  );
};

export default HowItWorksSection;
