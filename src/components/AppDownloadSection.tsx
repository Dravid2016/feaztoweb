import React, { useState } from 'react';
import { Sparkles, QrCode, ArrowRight, Apple, Play, CheckCircle2 } from 'lucide-react';

interface AppDownloadSectionProps {
  navigate?: (route: string) => void;
}

export const AppDownloadSection: React.FC<AppDownloadSectionProps> = () => {
  const [registered, setRegistered] = useState(false);
  const [email, setEmail] = useState('');
  const [platform, setPlatform] = useState<'ios' | 'android'>('android');

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
            <span>feazto Pilot Testing</span>
          </div>

          <h2 className="download-title">
            Experience Home Food with Cloud Precision.
          </h2>

          <p className="download-lead">
            The feazto Customer App is currently in exclusive staged pilot rollout. Reserve your priority invitation to get early access to curated regional kitchens and seasonal feasts.
          </p>
        </div>

        {/* Hero Showcase Area: Centered Big Phone Mockup Flanked by Actions and QR */}
        <div className="download-showcase-stage">
          
          {/* Left Column: Direct store buttons and waitlist form */}
          <div className="download-col-left">
            <div className="waitlist-card-wrapper">
              <h3 className="sub-box-title">Reserve Priority Access</h3>
              <p className="sub-box-desc">Select your operating system and enter your email for the invitation pass.</p>

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

              <div className="store-buttons-row">
                <div className="store-btn-pending" title="Pilot Rollout in Progress">
                  <Play size={18} />
                  <div className="store-btn-text">
                    <span>GET IT ON</span>
                    <strong>Google Play (Pilot)</strong>
                  </div>
                </div>

                <div className="store-btn-pending" title="Pilot Rollout in Progress">
                  <Apple size={20} />
                  <div className="store-btn-text">
                    <span>Download on the</span>
                    <strong>App Store (Pilot)</strong>
                  </div>
                </div>
              </div>

              <span className="store-status-note">
                * Official store build undergoing phased internal staging. Staged invite is required for access.
              </span>
            </div>
          </div>

          {/* Center Column: Prominent, Centered, Bigger Phone Banner with Transparent Background */}
          <div className="download-col-center">
            <div className="center-phone-hero-wrapper">
              <img 
                src={`/brand/feazto-login-signup-phone.png?v=${Date.now()}`} 
                alt="feazto Mobile App Login and Signup" 
                className="center-phone-big-img"
              />
            </div>
          </div>

          {/* Right Column: QR Code Direct Registration */}
          <div className="download-col-right">
            <div className="qr-code-card">
              <div className="qr-header-row">
                <QrCode size={20} />
                <span>Scan to Register</span>
              </div>

              <div className="qr-visual-box">
                <svg viewBox="0 0 100 100" className="qr-svg-graphic" xmlns="http://www.w3.org/2000/svg">
                  <rect x="5" y="5" width="26" height="26" fill="#111111" rx="4" />
                  <rect x="9" y="9" width="18" height="18" fill="#FFFFFF" rx="2" />
                  <rect x="13" y="13" width="10" height="10" fill="#111111" rx="2" />

                  <rect x="69" y="5" width="26" height="26" fill="#111111" rx="4" />
                  <rect x="73" y="9" width="18" height="18" fill="#FFFFFF" rx="2" />
                  <rect x="77" y="13" width="10" height="10" fill="#111111" rx="2" />

                  <rect x="5" y="69" width="26" height="26" fill="#111111" rx="4" />
                  <rect x="9" y="73" width="18" height="18" fill="#FFFFFF" rx="2" />
                  <rect x="13" y="77" width="10" height="10" fill="#111111" rx="2" />

                  <rect x="36" y="8" width="6" height="6" fill="#111111" />
                  <rect x="46" y="8" width="6" height="6" fill="#111111" />
                  <rect x="56" y="8" width="6" height="6" fill="#111111" />
                  <rect x="36" y="18" width="6" height="6" fill="#111111" />
                  <rect x="48" y="22" width="8" height="8" fill="#FAC921" rx="1" />
                  <rect x="36" y="36" width="28" height="28" fill="#111111" rx="2" />
                  <rect x="42" y="42" width="16" height="16" fill="#FAC921" rx="2" />
                  <rect x="8" y="36" width="6" height="6" fill="#111111" />
                  <rect x="18" y="46" width="6" height="6" fill="#111111" />
                  <rect x="69" y="40" width="6" height="6" fill="#111111" />
                  <rect x="79" y="46" width="6" height="6" fill="#111111" />
                  <rect x="89" y="38" width="6" height="6" fill="#111111" />
                </svg>
              </div>

              <h4 className="qr-title">Scan on Mobile</h4>
              <p className="qr-desc">
                Open your smartphone camera to scan and open the feazto pilot registration on your mobile browser instantly.
              </p>

              <div className="qr-verified-tag">
                <span className="dot-green" />
                <span>Verified Direct Pilot Link</span>
              </div>
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
          margin: 0;
        }

        /* 3-Column Showcase Stage: Completely borderless and transparent (zero outer background card) */
        .download-showcase-stage {
          width: 100%;
          display: grid;
          grid-template-columns: 1.15fr 1.35fr 0.95fr;
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
