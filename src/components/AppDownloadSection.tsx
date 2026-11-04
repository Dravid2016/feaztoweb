import React, { useState } from 'react';
import { Sparkles, ArrowRight, CheckCircle2, Smartphone, ChefHat, Bike } from 'lucide-react';

interface AppDownloadSectionProps {
  navigate?: (route: string) => void;
}

export const AppDownloadSection: React.FC<AppDownloadSectionProps> = () => {
  const [appRole, setAppRole] = useState<'customer' | 'kitchen' | 'rider'>('customer');
  const [registered, setRegistered] = useState(false);
  const [email, setEmail] = useState('');
  const [platform, setPlatform] = useState<'ios' | 'android'>('android');

  const appDetails = {
    customer: {
      badge: 'feazto Customer App',
      title: 'Experience Home Food with Cloud Precision.',
      lead: 'Explore curated generational recipes from certified home cooks and regional FoodPreneurs delivered in calibrated thermal containers.',
      formSubtitle: 'Select your app platform to reserve early access for ordering authentic regional feasts.',
      phoneImg: '/brand/feazto-login-signup-phone.png',
      phoneAlt: 'feazto Customer App Mobile Experience',
      tagline: 'Customer Food Discovery & Feast Ordering',
    },
    kitchen: {
      badge: 'feazto Kitchen-OS (Cloud Kitchens & Cooks)',
      title: 'Power Your Kitchen with Smart OS & Zero Waste.',
      lead: 'Built for FoodPreneurs, home cooks, and commercial cloud kitchen hosts: live batch order dispatch, standardized hygiene SOPs, and automated surplus revenue telemetry.',
      formSubtitle: 'Select your platform to receive beta access for the feazto Kitchen-OS tablet & mobile terminal.',
      phoneImg: '/brand/feazto-grandma-kitchen-phone.jpg',
      phoneAlt: 'feazto Kitchen-OS Partner Interface',
      tagline: 'Cloud Kitchen & FoodPreneur Management Terminal',
    },
    rider: {
      badge: 'feazto Delivery Fleet App',
      title: 'Precision Temperature-Controlled Delivery.',
      lead: 'Engineered for dedicated logistics partners: hot/cold thermal box verification, optimized route batching, tamper-evident seals, and fair instant payouts.',
      formSubtitle: 'Select your platform to apply for the certified thermal delivery rider fleet pilot.',
      phoneImg: '/brand/feazto-doorstep-handover-delivery.png',
      phoneAlt: 'feazto Delivery Fleet Partner App',
      tagline: 'Calibrated Route Dispatch & Tamper-Proof Handover',
    },
  };

  const currentApp = appDetails[appRole];

  const handleInterestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setRegistered(true);
    }
  };

  return (
    <section className="app-download-section" id="app-download">
      <div className="download-full-container">
        
        {/* Top Header Row */}
        <div className="download-header-center">
          <div className="badge-tag">
            <Sparkles size={13} />
            <span>{currentApp.badge}</span>
          </div>

          <h2 className="download-title">
            {currentApp.title}
          </h2>

          <p className="download-lead">
            {currentApp.lead}
          </p>

          {/* 3-App Ecosystem Role Switcher */}
          <div className="ecosystem-role-switcher" role="tablist" aria-label="Select feazto Mobile Application">
            <button
              type="button"
              role="tab"
              aria-selected={appRole === 'customer'}
              onClick={() => { setAppRole('customer'); setRegistered(false); }}
              className={`role-tab-btn ${appRole === 'customer' ? 'active' : ''}`}
            >
              <Smartphone size={16} />
              <span>Customer App</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={appRole === 'kitchen'}
              onClick={() => { setAppRole('kitchen'); setRegistered(false); }}
              className={`role-tab-btn ${appRole === 'kitchen' ? 'active' : ''}`}
            >
              <ChefHat size={16} />
              <span>Cloud Kitchen App</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={appRole === 'rider'}
              onClick={() => { setAppRole('rider'); setRegistered(false); }}
              className={`role-tab-btn ${appRole === 'rider' ? 'active' : ''}`}
            >
              <Bike size={16} />
              <span>Rider Delivery App</span>
            </button>
          </div>
        </div>

        {/* Hero Showcase Area: Centered Big Phone Mockup Flanked by Actions and QR */}
        <div className="download-showcase-stage">
          
          {/* Left Column: Direct store buttons and waitlist form */}
          <div className="download-col-left">
            <div className="waitlist-card-wrapper">
              <div className="waitlist-header-tag">
                <span className="dot-pulse" />
                <span>{currentApp.tagline}</span>
              </div>
              <h3 className="sub-box-title">Reserve Priority Access</h3>
              <p className="sub-box-desc">{currentApp.formSubtitle}</p>

              {!registered ? (
                <form onSubmit={handleInterestSubmit} className="download-waitlist-form">
                  <div className="platform-toggle-row">
                    <label className={`platform-pill ${platform === 'android' ? 'active' : ''}`}>
                      <input 
                        type="radio" 
                        name="platform" 
                        value="android" 
                        checked={platform === 'android'}
                        onChange={() => setPlatform('android')}
                      />
                      <span>Android (Play Store)</span>
                    </label>
                    <label className={`platform-pill ${platform === 'ios' ? 'active' : ''}`}>
                      <input 
                        type="radio" 
                        name="platform" 
                        value="ios" 
                        checked={platform === 'ios'}
                        onChange={() => setPlatform('ios')}
                      />
                      <span>iOS (App Store)</span>
                    </label>
                  </div>

                  <div className="input-btn-group">
                    <input 
                      type="email" 
                      required 
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="waitlist-input"
                    />
                    <button type="submit" className="btn btn-yellow btn-waitlist-submit">
                      <span>Reserve Invite</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </form>
              ) : (
                <div className="waitlist-success-banner">
                  <CheckCircle2 size={24} className="success-icon" />
                  <div>
                    <strong>You're on the priority pilot list!</strong>
                    <p>We will email your activation pass as soon as your neighborhood kitchen cluster goes live.</p>
                  </div>
                </div>
              )}

              {/* Liquid Morphism App Store & Play Store Quick Badges Island */}
              <div className="download-store-badges-container">
                <span className="download-store-lead-text">Get Pilot Access</span>
                <div className="download-store-liquid-island">
                  <button
                    type="button"
                    onClick={() => {
                      const el = document.getElementById('app-download');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="download-store-circle-badge"
                    title="Download on Apple App Store"
                    aria-label="Apple App Store"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.38c.62-.75 1.04-1.8 0.92-2.85-.9.04-1.99.6-2.63 1.35-.57.65-.07 1.73.05 2.76 1.01.08 2.04-.51 2.66-1.26z"/>
                    </svg>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      const el = document.getElementById('app-download');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="download-store-circle-badge"
                    title="Get it on Google Play"
                    aria-label="Google Play Store"
                  >
                    <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3.609 1.814L13.793 12 3.61 22.186c-.367-.346-.61-.84-.61-1.402V3.216c0-.562.243-1.056.61-1.402zM15.207 13.414l2.586 2.586-12.06 6.94 9.474-9.526zm2.586-5.414L15.207 10.586 5.733 1.06l12.06 6.94zm1.414 1.414l3.18 1.83c.78.45.78 1.18 0 1.63l-3.18 1.83-2.293-2.646 2.293-2.644z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Center Column: Prominent, Centered, Bigger Phone Banner with Transparent Background */}
          <div className="download-col-center">
            <div className="center-phone-hero-wrapper">
              <img 
                key={currentApp.phoneImg}
                src={currentApp.phoneImg} 
                alt={currentApp.phoneAlt} 
                className="center-phone-big-img"
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .app-download-section {
          padding-top: 80px;
          padding-bottom: 110px;
          background: transparent;
          width: 100%;
          display: flex;
          justify-content: center;
        }

        .download-full-container {
          max-width: 1220px;
          width: 100%;
          padding: 0 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* Centered Header Area */
        .download-header-center {
          text-align: center;
          max-width: 720px;
          margin-bottom: 48px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .download-title {
          font-size: clamp(2.2rem, 3.8vw, 3.2rem);
          font-weight: 900;
          color: var(--color-ink-black);
          line-height: 1.15;
          letter-spacing: -0.03em;
          margin-top: 14px;
          margin-bottom: 14px;
        }

        .download-lead {
          font-size: 1.05rem;
          color: var(--color-text-secondary);
          line-height: 1.6;
          margin: 0 0 24px 0;
        }

        /* 3-App Ecosystem Role Switcher */
        .ecosystem-role-switcher {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.75);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1.5px solid rgba(181, 132, 0, 0.28);
          border-radius: 9999px;
          padding: 6px;
          box-shadow: 0 8px 24px rgba(181, 132, 0, 0.12), inset 0 1px 2px #FFFFFF;
          margin-top: 8px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .role-tab-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 9px 18px;
          border-radius: 9999px;
          border: none;
          background: transparent;
          color: #554823;
          font-family: var(--font-heading);
          font-size: 0.88rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .role-tab-btn:hover {
          color: #111111;
          background: rgba(250, 201, 33, 0.25);
        }

        .role-tab-btn.active {
          background: #111111;
          color: #FAC921;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.2);
        }

        .waitlist-header-tag {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-size: 0.76rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: #8C6500;
          margin-bottom: 8px;
        }

        .dot-pulse {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #2E7D32;
          box-shadow: 0 0 0 2px rgba(46, 125, 50, 0.2);
        }

        /* 3-Column Showcase Stage: Completely borderless and transparent (zero outer background card) */
        .download-showcase-stage {
          width: 100%;
          display: grid;
          grid-template-columns: 1.1fr 1.1fr;
          max-width: 1040px;
          margin: 0 auto;
          gap: 36px;
          align-items: center;
        }

        /* Left Column */
        .download-col-left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        .waitlist-card-wrapper {
          width: 100%;
        }

        .sub-box-title {
          font-size: 1.3rem;
          font-weight: 800;
          color: var(--color-ink-black);
          margin-bottom: 6px;
        }

        .sub-box-desc {
          font-size: 0.88rem;
          color: var(--color-text-secondary);
          line-height: 1.5;
          margin-bottom: 20px;
        }

        .download-waitlist-form {
          width: 100%;
          margin-bottom: 24px;
        }

        .platform-toggle-row {
          display: flex;
          gap: 10px;
          margin-bottom: 12px;
        }

        .platform-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 14px;
          border-radius: var(--radius-capsule);
          background: #FFFFFF;
          border: 1px solid rgba(0, 0, 0, 0.12);
          font-size: 0.8rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }

        .platform-pill input {
          display: none;
        }

        .platform-pill.active {
          background: #111111;
          color: #FFFFFF;
          border-color: #111111;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .input-btn-group {
          display: flex;
          gap: 8px;
          width: 100%;
        }

        .waitlist-input {
          flex-grow: 1;
          padding: 14px 18px;
          border-radius: var(--radius-capsule);
          border: 1.5px solid rgba(0, 0, 0, 0.15);
          font-family: inherit;
          font-size: 0.92rem;
          outline: none;
          background: #FFFFFF;
          transition: border-color 0.2s;
        }

        .waitlist-input:focus {
          border-color: var(--color-ink-black);
        }

        .btn-waitlist-submit {
          padding: 14px 22px;
          font-size: 0.92rem;
          white-space: nowrap;
        }

        .waitlist-success-banner {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          background: #E8F5E9;
          border: 1px solid #C8E6C9;
          padding: 16px 20px;
          border-radius: 16px;
          margin-bottom: 24px;
          width: 100%;
        }

        .success-icon {
          color: #2E7D32;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .waitlist-success-banner strong {
          display: block;
          color: #1B5E20;
          font-size: 0.9rem;
          margin-bottom: 2px;
        }

        .waitlist-success-banner p {
          color: #2E7D32;
          font-size: 0.82rem;
          line-height: 1.4;
        }

        .download-store-badges-container {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-top: 24px;
          flex-wrap: wrap;
        }

        .download-store-lead-text {
          font-family: var(--font-heading, inherit);
          font-size: 0.96rem;
          font-weight: 800;
          color: #7A5B00;
          letter-spacing: -0.01em;
        }

        .download-store-liquid-island {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(135deg, rgba(255, 222, 89, 0.72) 0%, rgba(250, 201, 33, 0.55) 60%, rgba(229, 168, 0, 0.65) 100%);
          backdrop-filter: blur(24px) saturate(190%);
          -webkit-backdrop-filter: blur(24px) saturate(190%);
          padding: 6px 12px;
          border-radius: 9999px;
          box-shadow: 0 10px 28px rgba(250, 201, 33, 0.32), 
                      inset 0 1.5px 3px rgba(255, 255, 255, 0.6), 
                      inset 0 -2px 4px rgba(180, 130, 0, 0.2);
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .download-store-circle-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.95);
          color: #181B20;
          border: none;
          cursor: pointer;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08), inset 0 1px 2px #FFFFFF;
        }

        .download-store-circle-badge:hover {
          background-color: #111111;
          color: #FFFFFF;
          transform: translateY(-2px) scale(1.08);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.22);
        }

        .store-buttons-row {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 12px;
        }

        .store-btn-pending {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #111111;
          color: #FFFFFF;
          padding: 11px 18px;
          border-radius: 14px;
          cursor: default;
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .store-btn-text {
          display: flex;
          flex-direction: column;
          line-height: 1.1;
          text-align: left;
        }

        .store-btn-text span {
          font-size: 0.62rem;
          color: #999999;
          letter-spacing: 0.05em;
        }

        .store-btn-text strong {
          font-size: 0.8rem;
          font-weight: 700;
        }

        .store-status-note {
          display: block;
          font-size: 0.74rem;
          color: var(--color-text-muted);
          font-style: italic;
          margin-top: 6px;
        }

        /* Center Big Centered Phone */
        .download-col-center {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        .center-phone-hero-wrapper {
          width: 100%;
          max-width: 440px;
          display: flex;
          justify-content: center;
          align-items: center;
          filter: drop-shadow(0 28px 65px rgba(0, 0, 0, 0.26));
          transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .center-phone-hero-wrapper:hover {
          transform: translateY(-8px) scale(1.03);
        }

        .center-phone-big-img {
          width: 100%;
          height: auto;
          max-height: 640px;
          object-fit: contain;
          display: block;
        }

        /* Right QR Panel */
        .download-col-right {
          display: flex;
          justify-content: center;
        }

        .qr-code-card {
          background: #FFFFFF;
          border-radius: 28px;
          padding: 30px 24px;
          border: 1px solid rgba(0, 0, 0, 0.08);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.06);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          width: 100%;
          max-width: 290px;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .qr-code-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 48px rgba(0, 0, 0, 0.1);
        }

        .qr-header-row {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.84rem;
          font-weight: 700;
          color: #8C6500;
          margin-bottom: 18px;
        }

        .qr-visual-box {
          width: 154px;
          height: 154px;
          background: #FAFAFA;
          border: 2px solid rgba(0, 0, 0, 0.06);
          border-radius: 18px;
          padding: 12px;
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .qr-svg-graphic {
          width: 100%;
          height: 100%;
        }

        .qr-title {
          font-size: 1.05rem;
          font-weight: 800;
          color: var(--color-ink-black);
          margin-bottom: 6px;
        }

        .qr-desc {
          font-size: 0.8rem;
          color: var(--color-text-secondary);
          line-height: 1.5;
          margin-bottom: 16px;
        }

        .qr-verified-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.74rem;
          font-weight: 600;
          color: #2E7D32;
        }

        .dot-green {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #2E7D32;
        }

        @media (max-width: 1080px) {
          .download-showcase-stage {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .download-col-center {
            order: 1;
          }
          .download-col-left {
            order: 2;
          }
          .download-col-right {
            order: 3;
          }
          .center-phone-hero-wrapper {
            max-width: 360px;
          }
        }
      `}</style>
    </section>
  );
};
