import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingBag, 
  ChefHat, 
  Bike, 
  ArrowRight, 
  PackageCheck,
  Maximize2,
  X,
  CheckCircle2,
  Sparkles
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
  bgImage: string;
  mediaUrl?: string;
  modalDetails: {
    tag: string;
    highlights: string[];
    deepDive: string;
    chefGuarantee: string;
  };
}

export const HowItWorksSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<string>('step-1');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const steps: WorkflowStep[] = [
    {
      id: 'step-1',
      stepNumber: '01',
      tabLabel: 'Order Placed',
      tabIcon: <ShoppingBag size={18} fill="currentColor" strokeWidth={1.5} />,
      badgeText: 'Live Order Placement',
      cardHeading: 'Browse neighborhood kitchens & order fresh heirloom meals.',
      cardDescription: 'Customer selects authentic regional dishes prepared in limited daily home batches with zero palm oil and pure cold pressed ingredients.',
      statValue: 'Instant',
      statLabel: 'order routed directly to certified local home kitchens',
      footerNote: 'Transparent ingredient transparency, zero artificial coloring, and verified home recipes.',
      activeAccent: '#F5B800',
      bgImage: '/brand/feazto-grandma-kitchen-phone.jpg',
      mediaUrl: '',
      modalDetails: {
        tag: 'Hyperlocal Direct Dispatch',
        highlights: [
          'Pre-booked small daily batches ensure zero industrial food waste',
          'Exact regional provenance tracked to local verified home cooks',
          'Pure cold pressed oils, stone ground spices, and zero synthetic preservatives'
        ],
        deepDive: 'When your order is placed, Feazto instantly pings verified home chefs within your micro cluster. Unlike warehouse cloud kitchens that reheat frozen curries, each home batch is accepted by an authentic cook who prepares it fresh upon request.',
        chefGuarantee: '100% Homemade Authenticity & Zero Commercial Shortcuts'
      }
    },
    {
      id: 'step-2',
      stepNumber: '02',
      tabLabel: 'Home Cook Assigned',
      tabIcon: <ChefHat size={18} fill="currentColor" strokeWidth={1.5} />,
      badgeText: 'Home Chef Preparation',
      cardHeading: 'Assigned home cook accepts & begins authentic slow cooking.',
      cardDescription: 'The neighborhood FoodPreneur starts preparing the batch fresh with stone ground masalas, cast iron seasoning, or slow fire dum handi techniques.',
      statValue: 'Fresh to Order',
      statLabel: 'small batch home crafted with calibrated hygiene protocols',
      footerNote: 'Each verified home cook is certified for health safety, pristine sanitation, and clean oils.',
      activeAccent: '#FF9E1B',
      bgImage: '/brand/feazto-home-cook-kitchen-boxes.jpg',
      mediaUrl: '',
      modalDetails: {
        tag: 'Artisanal Batch Preparation',
        highlights: [
          'FSSAI certified kitchen cleanliness with regular temperature checks',
          'Traditional slow fire handi dum techniques preserving natural spices',
          'Generational heirloom recipes handed down across decades'
        ],
        deepDive: 'Our FoodPreneurs are elderly recipe custodians and master home chefs. Every dish is seasoned with natural rock salt, wood pressed oils, and fresh hand ground masalas rather than commercial pre mixes.',
        chefGuarantee: 'Cooked with Motherly Care & Standardized Food Safety Rigor'
      }
    },
    {
      id: 'step-3',
      stepNumber: '03',
      tabLabel: 'Rider Dispatched',
      tabIcon: <Bike size={18} fill="currentColor" strokeWidth={1.5} />,
      badgeText: 'Rider Pickup & Heat Seal',
      cardHeading: 'Assigned Feazto rider arrives for thermal tamper proof pickup.',
      cardDescription: 'Freshly packed meals are sealed in eco insulated thermal containers to lock in piping hot steam, fragrant aroma, and crisp textures.',
      statValue: '< 7 Mins',
      statLabel: 'average home pickup once the cook marks preparation ready',
      footerNote: 'Dedicated temperature preserving fleet keeping curries hot and dosas crisp.',
      activeAccent: '#10B981',
      bgImage: '/brand/feazto-rider-wide-hd.png',
      mediaUrl: '',
      modalDetails: {
        tag: 'Thermal Insulated Fleet',
        highlights: [
          'Calibrated hot boxes maintain 65°C+ serving warmth throughout delivery',
          'Tamper evident biodegradable eco seals for zero transit contamination',
          'Sub minute pickup routing coordinated with cooking finish times'
        ],
        deepDive: 'The moment the home chef prepares the final garnish, the dedicated Feazto rider is already stationed at the door. Food is placed straight into insulated thermal carriers, ensuring not a single degree of warmth or aroma escapes.',
        chefGuarantee: 'Peak Culinary Serving Heat Without Microwave Reheating'
      }
    },
    {
      id: 'step-4',
      stepNumber: '04',
      tabLabel: 'Doorstep Delivery',
      tabIcon: <PackageCheck size={18} fill="currentColor" strokeWidth={1.5} />,
      badgeText: 'Delivered Fresh & Hot',
      cardHeading: 'Arrives piping hot at your doorstep ready to nourish.',
      cardDescription: 'Unpack authentic home comfort food with live delivery tracking, direct cook tips, and genuine cultural flavors that comfort your family.',
      statValue: 'Piping Hot',
      statLabel: 'nourishing home style meal ready for your dining table',
      footerNote: 'Empowering genuine home cooks while delivering nostalgic home flavours.',
      activeAccent: '#3B82F6',
      bgImage: '/brand/feazto-doorstep-handover-delivery.png',
      mediaUrl: '',
      modalDetails: {
        tag: 'Dignified Culinary Handover',
        highlights: [
          'Contactless or smiling doorstep delivery with live GPS accuracy',
          'Nourishing, gut friendly meals with zero heartburn or bloat',
          'Direct economic empowerment for local neighborhood women & home cooks'
        ],
        deepDive: 'Your order arrives in pristine condition ready to serve. By dining with Feazto, you support local kitchen custodians with dignified household incomes while enjoying pure, nostalgic home food that tastes exactly like home.',
        chefGuarantee: 'Wholesome Community Nutrition on Every Dining Table'
      }
    }
  ];

  const currentStep = steps.find((s) => s.id === activeStep) || steps[0];

  // Auto-loop transition every 3 seconds across the 4 steps
  useEffect(() => {
    if (isModalOpen) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => {
        const idx = steps.findIndex((s) => s.id === prev);
        return steps[(idx + 1) % steps.length].id;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [isModalOpen, steps]);

  // Lock body scroll when modal is active
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  // Close modal on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsModalOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section 
      className="feazto-how-it-works-section" 
      id="how-it-works"
    >
      <div className="how-inner-container">
        
        {/* Top Floating Capsule Tag */}
        <div className="how-pill-tag">
          <span>Real time journey: From local home kitchens straight to your doorstep.</span>
        </div>

        {/* Master Headline */}
        <h2 className="how-master-heading">
          Here’s how<br />Feazto works.
        </h2>

        {/* Main Stage Display Showcase with Morphing Modal Animation */}
        <motion.div 
          layoutId="how-stage-card-wrapper"
          className="how-stage-card"
          onClick={() => setIsModalOpen(true)}
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.12) 40%, rgba(0, 0, 0, 0.62) 70%, rgba(0, 0, 0, 0.82) 100%), url('${currentStep.bgImage}')`
          }}
          whileHover={{ scale: 1.008 }}
          transition={{ type: 'spring', stiffness: 350, damping: 30 }}
        >
          {/* Expand Pill Prompt */}
          <div className="stage-expand-pill">
            <Maximize2 size={13} />
            <span>Click to Expand</span>
          </div>
          
          {/* Subtle Dynamic Ambient Glow behind active media */}
          <div 
            className="stage-ambient-glow" 
            style={{ 
              background: `radial-gradient(circle, ${currentStep.activeAccent}22 0%, ${currentStep.activeAccent}06 50%, transparent 75%)` 
            }} 
          />

          {/* Left Column: Spacer / Banner Container */}
          <div className="stage-media-slot-container empty-media-space" />

          {/* Right Floating Information Content */}
          <div className="stage-glass-info-card">
            <motion.h3 
              layoutId={`stage-heading-${currentStep.id}`}
              className="info-heading"
            >
              {currentStep.cardHeading}
            </motion.h3>
            
            <motion.p 
              layoutId={`stage-desc-${currentStep.id}`}
              className="info-description"
            >
              {currentStep.cardDescription}
            </motion.p>

            {/* Metric / Stat Highlight */}
            <div className="info-stat-row">
              <span className="info-stat-number" style={{ color: currentStep.activeAccent }}>
                {currentStep.statValue}
              </span>
              <span className="info-stat-caption">{currentStep.statLabel}</span>
            </div>

            {/* Quick interactive next-step button */}
            <div className="info-step-action-row" onClick={(e) => e.stopPropagation()}>
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

              <button 
                type="button" 
                className="stage-view-details-btn"
                onClick={() => setIsModalOpen(true)}
              >
                <span>View Full Details</span>
                <Maximize2 size={14} />
              </button>
            </div>

          </div>

        </motion.div>

        {/* Bottom Subtext Row matching the reference bottom strip */}
        <div className="how-bottom-strip">
          <p className="bottom-feature-note">
            <span className="dot-indicator" style={{ backgroundColor: currentStep.activeAccent }} />
            {currentStep.footerNote}
          </p>
        </div>

      </div>

      {/* Modern React Expandable Full Screen Modal (React Bits Pro Modal Cards Pattern) */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            className="modal-backdrop-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div 
              layoutId="how-stage-card-wrapper"
              className="modal-card-expanded"
              onClick={(e) => e.stopPropagation()}
              transition={{ type: 'spring', stiffness: 320, damping: 32 }}
            >
              {/* Close Button Floating */}
              <button 
                type="button" 
                className="modal-close-pill"
                onClick={() => setIsModalOpen(false)}
                aria-label="Close modal"
              >
                <X size={18} />
                <span>Esc / Close</span>
              </button>

              {/* Modal Hero Banner */}
              <div 
                className="modal-hero-cover"
                style={{
                  backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.85) 100%), url('${currentStep.bgImage}')`
                }}
              >
                <div className="modal-hero-content">
                  <div className="modal-step-badge">
                    <span className="step-num">Step {currentStep.stepNumber}</span>
                    <span className="step-divider">•</span>
                    <span className="step-tag">{currentStep.modalDetails.tag}</span>
                  </div>

                  <motion.h2 
                    layoutId={`stage-heading-${currentStep.id}`}
                    className="modal-hero-title"
                  >
                    {currentStep.cardHeading}
                  </motion.h2>

                  <motion.p 
                    layoutId={`stage-desc-${currentStep.id}`}
                    className="modal-hero-lead"
                  >
                    {currentStep.cardDescription}
                  </motion.p>
                </div>
              </div>

              {/* Modal Body / Deep Dive Content */}
              <div className="modal-body-content">
                <div className="modal-content-grid">
                  
                  {/* Left Column: Deep Dive Narrative */}
                  <div className="modal-left-col">
                    <h3 className="section-subtitle">How This Step Protects Your Food</h3>
                    <p className="narrative-text">
                      {currentStep.modalDetails.deepDive}
                    </p>

                    <div className="guarantee-box">
                      <Sparkles size={20} className="guarantee-sparkle" />
                      <div>
                        <strong>Feazto Quality Promise</strong>
                        <p>{currentStep.modalDetails.chefGuarantee}</p>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Key Protocols & Stats */}
                  <div className="modal-right-col">
                    <div className="modal-stat-card">
                      <span className="stat-big-val" style={{ color: currentStep.activeAccent }}>
                        {currentStep.statValue}
                      </span>
                      <span className="stat-big-lbl">{currentStep.statLabel}</span>
                    </div>

                    <h4 className="checklist-heading">Verified Standards for Step {currentStep.stepNumber}</h4>
                    <ul className="modal-highlights-list">
                      {currentStep.modalDetails.highlights.map((h, i) => (
                        <li key={i}>
                          <CheckCircle2 size={16} className="check-bullet" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Modal Footer Step Navigation */}
                <div className="modal-step-footer">
                  <div className="modal-footer-nav-steps">
                    {steps.map((st) => (
                      <button
                        key={st.id}
                        type="button"
                        className={`modal-footer-step-pill ${st.id === activeStep ? 'active' : ''}`}
                        onClick={() => setActiveStep(st.id)}
                      >
                        <span>{st.stepNumber}. {st.tabLabel}</span>
                      </button>
                    ))}
                  </div>

                  <button 
                    type="button"
                    className="modal-action-next-btn"
                    onClick={() => {
                      const idx = steps.findIndex((s) => s.id === activeStep);
                      setActiveStep(steps[(idx + 1) % steps.length].id);
                    }}
                  >
                    <span>Next Stage</span>
                    <ArrowRight size={16} />
                  </button>
                </div>

              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .feazto-how-it-works-section {
          position: relative;
          width: 100%;
          padding: 100px 24px 120px 24px;
          background: transparent;
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
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          margin-bottom: 24px;
        }

        .how-pill-tag span {
          font-size: 0.88rem;
          font-weight: 600;
          color: #374151;
          letter-spacing: -0.01em;
        }

        /* Master Headline */
        .how-master-heading {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
          font-size: clamp(2.5rem, 4.5vw, 4rem);
          font-weight: 900;
          line-height: 1.08;
          letter-spacing: -0.035em;
          color: #111827;
          margin: 0 0 36px 0;
        }

        /* Tabs Navigation Row */
        .how-step-tabs-row {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 36px;
          padding: 6px;
          background: #F3F4F6;
          border-radius: 9999px;
          border: 1px solid rgba(0, 0, 0, 0.05);
          max-width: 100%;
          overflow-x: auto;
          scrollbar-width: none;
        }

        .how-step-tabs-row::-webkit-scrollbar {
          display: none;
        }

        .step-tab-btn {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 10px 20px;
          border-radius: 9999px;
          font-size: 0.92rem;
          font-weight: 600;
          color: #4B5563;
          background: transparent;
          border: none;
          outline: none;
          cursor: pointer;
          transition: all 0.22s cubic-bezier(0.4, 0, 0.2, 1);
          white-space: nowrap;
        }

        .step-tab-btn:hover {
          color: #111827;
        }

        .step-tab-btn.is-active {
          background: #FFFFFF;
          color: #111827;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04);
        }

        .step-tab-icon {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Main Stage Display Showcase Card */
        .how-stage-card {
          position: relative;
          width: 100%;
          max-width: 1100px;
          min-height: 480px;
          border-radius: 40px;
          padding: 44px 52px;
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
          cursor: pointer;
          transition: background-image 0.4s ease-in-out, box-shadow 0.3s ease;
        }

        .stage-expand-pill {
          position: absolute;
          top: 24px;
          right: 28px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          border-radius: 9999px;
          background: rgba(0, 0, 0, 0.45);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          color: #FFFFFF;
          font-size: 0.76rem;
          font-weight: 700;
          letter-spacing: 0.02em;
          border: 1px solid rgba(255, 255, 255, 0.25);
          z-index: 4;
          transition: background 0.2s ease, transform 0.2s ease;
        }

        .how-stage-card:hover .stage-expand-pill {
          background: rgba(0, 0, 0, 0.65);
          transform: scale(1.04);
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

        /* Seamlessly Blended Information Content */
        .stage-glass-info-card {
          position: relative;
          z-index: 3;
          flex: 0.95;
          max-width: 440px;
          background: transparent;
          border: none;
          padding: 10px 0;
          text-align: left;
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
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
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

        .stage-view-details-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 11px 18px;
          border-radius: 9999px;
          background: rgba(0, 0, 0, 0.35);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: #FFFFFF;
          font-size: 0.84rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .stage-view-details-btn:hover {
          background: rgba(0, 0, 0, 0.55);
          border-color: rgba(255, 255, 255, 0.5);
          transform: translateY(-2px);
        }

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

        /* Full Screen Modern Modal Card Overlay */
        .modal-backdrop-overlay {
          position: fixed;
          inset: 0;
          background: rgba(15, 17, 23, 0.72);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 32px 20px;
          overflow-y: auto;
        }

        .modal-card-expanded {
          position: relative;
          width: 100%;
          max-width: 960px;
          max-height: 90vh;
          overflow-y: auto;
          background: #FFFFFF;
          border-radius: 36px;
          box-shadow: 0 40px 100px rgba(0, 0, 0, 0.45), 0 16px 32px rgba(0, 0, 0, 0.25);
          display: flex;
          flex-direction: column;
          scrollbar-width: thin;
        }

        .modal-close-pill {
          position: absolute;
          top: 24px;
          right: 28px;
          z-index: 10;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          border-radius: 9999px;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: #FFFFFF;
          font-size: 0.82rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .modal-close-pill:hover {
          background: rgba(0, 0, 0, 0.8);
          transform: scale(1.05);
        }

        /* Modal Hero Banner */
        .modal-hero-cover {
          width: 100%;
          min-height: 320px;
          padding: 50px 48px;
          display: flex;
          align-items: flex-end;
          background-size: cover;
          background-position: center;
          position: relative;
          border-top-left-radius: 36px;
          border-top-right-radius: 36px;
        }

        .modal-hero-content {
          position: relative;
          z-index: 2;
          max-width: 680px;
          text-align: left;
        }

        .modal-step-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          border-radius: 9999px;
          background: rgba(250, 201, 33, 0.95);
          color: #181B20;
          font-size: 0.8rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          margin-bottom: 16px;
        }

        .modal-hero-title {
          font-size: clamp(1.6rem, 2.8vw, 2.2rem);
          font-weight: 800;
          line-height: 1.25;
          letter-spacing: -0.025em;
          color: #FFFFFF;
          margin: 0 0 12px 0;
          text-shadow: 0 2px 14px rgba(0, 0, 0, 0.6);
        }

        .modal-hero-lead {
          font-size: 1.05rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.9);
          margin: 0;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.6);
        }

        /* Modal Body */
        .modal-body-content {
          padding: 44px 48px;
          text-align: left;
          background: #FFFFFF;
        }

        .modal-content-grid {
          display: grid;
          grid-template-columns: 1.25fr 1fr;
          gap: 40px;
          margin-bottom: 36px;
        }

        .section-subtitle {
          font-size: 1.25rem;
          font-weight: 800;
          color: #111827;
          margin: 0 0 14px 0;
        }

        .narrative-text {
          font-size: 0.98rem;
          line-height: 1.7;
          color: #4B5563;
          margin: 0 0 24px 0;
        }

        .guarantee-box {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 20px 22px;
          border-radius: 24px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.72) 0%, rgba(254, 249, 215, 0.45) 50%, rgba(250, 201, 33, 0.18) 100%);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.75);
          box-shadow: 0 10px 28px rgba(250, 201, 33, 0.12), inset 0 1px 1px rgba(255, 255, 255, 0.9), inset 0 -1px 1px rgba(0, 0, 0, 0.04);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .guarantee-box:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 32px rgba(250, 201, 33, 0.18), inset 0 1px 1px rgba(255, 255, 255, 0.95);
        }

        .guarantee-sparkle {
          color: #E5A800;
          flex-shrink: 0;
          margin-top: 2px;
          filter: drop-shadow(0 2px 6px rgba(229, 168, 0, 0.3));
        }

        .guarantee-box strong {
          display: block;
          font-size: 0.95rem;
          color: #181B20;
          font-weight: 800;
          margin-bottom: 4px;
          letter-spacing: -0.01em;
        }

        .guarantee-box p {
          margin: 0;
          font-size: 0.88rem;
          color: #4B5563;
          line-height: 1.5;
        }

        .modal-stat-card {
          padding: 24px 26px;
          border-radius: 26px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.75) 0%, rgba(243, 244, 246, 0.5) 100%);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border: 1px solid rgba(255, 255, 255, 0.85);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.06), inset 0 1px 2px rgba(255, 255, 255, 0.95), inset 0 -1px 2px rgba(0, 0, 0, 0.03);
          margin-bottom: 24px;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .modal-stat-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.09), inset 0 1px 2px rgba(255, 255, 255, 1);
        }

        .stat-big-val {
          display: block;
          font-size: 2.2rem;
          font-weight: 900;
          line-height: 1;
          margin-bottom: 6px;
          font-family: inherit;
        }

        .stat-big-lbl {
          font-size: 0.88rem;
          color: #4B5563;
          font-weight: 600;
          line-height: 1.4;
        }

        .checklist-heading {
          font-size: 0.95rem;
          font-weight: 800;
          color: #111827;
          margin: 0 0 14px 0;
        }

        .modal-highlights-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .modal-highlights-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.9rem;
          color: #374151;
          line-height: 1.5;
        }

        .check-bullet {
          color: #10B981;
          flex-shrink: 0;
          margin-top: 3px;
        }

        /* Modal Step Footer */
        .modal-step-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 24px;
          border-top: 1px solid #E5E7EB;
          gap: 16px;
          flex-wrap: wrap;
        }

        .modal-footer-nav-steps {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .modal-footer-step-pill {
          padding: 8px 14px;
          border-radius: 9999px;
          font-size: 0.82rem;
          font-weight: 700;
          border: 1px solid #E5E7EB;
          background: #FFFFFF;
          color: #6B7280;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .modal-footer-step-pill:hover {
          color: #111827;
          border-color: #D1D5DB;
        }

        .modal-footer-step-pill.active {
          background: #111827;
          color: #FFFFFF;
          border-color: #111827;
        }

        .modal-action-next-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 22px;
          border-radius: 9999px;
          background: #FAC921;
          color: #181B20;
          font-size: 0.88rem;
          font-weight: 800;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .modal-action-next-btn:hover {
          background: #E5B40F;
          transform: translateY(-2px);
        }

        @media (max-width: 900px) {
          .how-stage-card {
            flex-direction: column;
            padding: 24px 16px 20px 16px;
            gap: 16px;
            min-height: 580px;
            background-size: cover !important;
            background-position: top center !important;
            /* Gradient overlay with clear top area so grandma/cook/rider/doorstep background subject is fully visible */
            background-image: linear-gradient(
              180deg, 
              rgba(0, 0, 0, 0.0) 0%, 
              rgba(0, 0, 0, 0.05) 24%, 
              rgba(0, 0, 0, 0.45) 48%, 
              rgba(0, 0, 0, 0.88) 72%, 
              rgba(0, 0, 0, 0.97) 100%
            ), url('${currentStep.bgImage}') !important;
            justify-content: flex-end;
          }

          .stage-expand-pill {
            display: none !important; /* Remove clumsy click to expand on mobile */
          }

          .empty-media-space {
            display: none !important;
          }

          .stage-media-slot-container {
            display: none !important;
          }

          .stage-glass-info-card {
            max-width: 100%;
            width: 100%;
            padding: 22px 20px 20px 20px;
            border-radius: 28px;
            /* Vibrant Signature Liquid Yellow Glassmorphism Card matching user request */
            background: linear-gradient(
              145deg,
              rgba(255, 230, 90, 0.94) 0%,
              rgba(250, 201, 33, 0.92) 50%,
              rgba(229, 168, 0, 0.96) 100%
            );
            backdrop-filter: blur(24px) saturate(200%);
            -webkit-backdrop-filter: blur(24px) saturate(200%);
            border: 1.5px solid rgba(255, 255, 255, 0.85);
            box-shadow: 
              0 20px 50px rgba(181, 132, 0, 0.4),
              0 6px 16px rgba(0, 0, 0, 0.12),
              inset 0 2px 4px rgba(255, 255, 255, 0.9),
              inset 0 -2px 4px rgba(181, 132, 0, 0.2);
          }

          .info-heading {
            font-size: 1.35rem;
            line-height: 1.3;
            margin-bottom: 10px;
            color: #111111;
            font-weight: 900;
            text-shadow: none;
          }

          .info-description {
            font-size: 0.92rem;
            line-height: 1.55;
            margin-bottom: 18px;
            color: #261A00;
            font-weight: 600;
            text-shadow: none;
          }

          .info-stat-row {
            padding-top: 14px;
            gap: 10px;
            border-top: 1px solid rgba(135, 71, 0, 0.2);
          }

          .info-stat-number {
            font-size: 1.8rem;
            color: #111111 !important;
            font-weight: 900;
            text-shadow: none;
          }

          .info-stat-caption {
            font-size: 0.82rem;
            color: #4A3500;
            font-weight: 700;
            text-shadow: none;
          }

          .info-step-action-row {
            margin-top: 18px;
            gap: 10px;
          }

          .next-stage-btn {
            width: 100%;
            justify-content: center;
            padding: 12px 20px;
            background: #111111;
            color: #FFFFFF;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
          }

          .next-stage-btn:hover {
            background: #000000;
            color: #FFFFFF;
          }
            gap: 10px;
          }

          .stage-view-details-btn {
            display: none !important; /* Keep mobile clean and focused on the auto-looping steps */
          }

          .next-stage-btn {
            width: 100%;
            justify-content: center;
            padding: 12px 20px;
          }

          .modal-content-grid {
            grid-template-columns: 1fr;
            gap: 28px;
          }

          .modal-hero-cover {
            padding: 36px 24px;
            min-height: 260px;
          }

          .modal-body-content {
            padding: 32px 24px;
          }

          .modal-step-footer {
            flex-direction: column;
            align-items: stretch;
          }

          .modal-footer-nav-steps {
            justify-content: center;
          }

          .modal-action-next-btn {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default HowItWorksSection;

