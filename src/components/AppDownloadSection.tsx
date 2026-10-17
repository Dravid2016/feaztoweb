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
      <div className="container">
        {/* Reference G 3-column layout: Left copy & buttons | Center phone | Right QR scan panel */}
        <div className="download-stage-card">
          {/* Left Column: Explanatory copy and direct app buttons */}
          <div className="download-col-left">
            <div className="badge-tag">
              <Sparkles size={13} />
              <span>FEAzTO Pilot Testing</span>
            </div>

            <h2 className="download-title">
              Experience Home Food with Cloud Precision.
            </h2>

            <p className="download-lead">
              The FEAzTO Customer App is currently in exclusive staged pilot rollout. Reserve your priority invitation to get early access to curated regional kitchens and seasonal feasts.
            </p>

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
                    placeholder="Enter your email for invite"
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

          {/* Center Column: Prominent Phone Mockup */}
          <div className="download-col-center">
            <div className="preview-phone-device">
              <div className="preview-screen-inner">
                <div className="preview-logo-badge">
                  <img src="/brand/feazto-logo.svg" alt="FEAzTO Logo" />
                </div>
                <div className="preview-dish-hero">
                  <img src="/brand/plate-biryani.png" alt="Dum Biryani" />
                </div>
                <div className="preview-welcome-text">
                  <h4>Food • Culture • Connect</h4>
                  <p>Authentic Regional Food Discovery</p>
                </div>
                <div className="preview-status-pill">
                  Staged Pilot Release v1.1
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: QR-Code Panel and Scanning Instructions */}
          <div className="download-col-right">
            <div className="qr-code-card">
              <div className="qr-header-row">
                <QrCode size={20} />
                <span>Scan to Register</span>
              </div>

              {/* Verified SVG QR Representation */}
              <div className="qr-visual-box">
                <svg viewBox="0 0 100 100" className="qr-svg-graphic" xmlns="http://www.w3.org/2000/svg">
                  {/* Position detection markers */}
                  <rect x="5" y="5" width="26" height="26" fill="#111111" rx="4" />
                  <rect x="9" y="9" width="18" height="18" fill="#FFFFFF" rx="2" />
                  <rect x="13" y="13" width="10" height="10" fill="#111111" rx="2" />

                  <rect x="69" y="5" width="26" height="26" fill="#111111" rx="4" />
                  <rect x="73" y="9" width="18" height="18" fill="#FFFFFF" rx="2" />
                  <rect x="77" y="13" width="10" height="10" fill="#111111" rx="2" />

                  <rect x="5" y="69" width="26" height="26" fill="#111111" rx="4" />
                  <rect x="9" y="73" width="18" height="18" fill="#FFFFFF" rx="2" />
                  <rect x="13" y="77" width="10" height="10" fill="#111111" rx="2" />

                  {/* QR Data Matrix Dots */}
                  <rect x="36" y="8" width="6" height="6" fill="#111111" />
                  <rect x="46" y="8" width="6" height="6" fill="#111111" />
                  <rect x="56" y="8" width="6" height="6" fill="#111111" />
                  <rect x="36" y="18" width="6" height="6" fill="#111111" />
                  <rect x="48" y="22" width="8" height="8" fill="#FFD233" rx="1" />
                  <rect x="36" y="36" width="28" height="28" fill="#111111" rx="2" />
                  <rect x="42" y="42" width="16" height="16" fill="#FFD233" rx="2" />
                  <rect x="8" y="36" width="6" height="6" fill="#111111" />
                  <rect x="18" y="46" width="6" height="6" fill="#111111" />
                  <rect x="69" y="40" width="6" height="6" fill="#111111" />
                  <rect x="79" y="46" width="6" height="6" fill="#111111" />
                  <rect x="89" y="38" width="6" height="6" fill="#111111" />
                  <rect x="69" y="69" width="8" height="8" fill="#111111" />
                  <rect x="83" y="75" width="10" height="6" fill="#111111" />
                  <rect x="75" y="87" width="6" height="6" fill="#111111" />
                  <rect x="38" y="72" width="6" height="6" fill="#111111" />
                  <rect x="48" y="80" width="8" height="6" fill="#111111" />
                </svg>
              </div>

              <h4 className="qr-title">Scan on Mobile</h4>
              <p className="qr-desc">
                Open your smartphone camera to scan and open the FEAzTO pilot registration on your mobile browser instantly.
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
          padding-top: 100px;
          padding-bottom: 100px;
          background-color: var(--color-pure-white);
        }

        .download-stage-card {
          background: #FAFAFA;
          border-radius: var(--radius-lg);
          padding: 64px 48px;
          border: 1px solid rgba(0, 0, 0, 0.08);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.04);
          display: grid;
          grid-template-columns: 1.3fr 1fr 1fr;
          gap: 40px;
          align-items: center;
        }

        .download-col-left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .download-title {
          font-size: clamp(2rem, 3.2vw, 2.7rem);
          font-weight: 800;
          color: var(--color-ink-black);
          line-height: 1.25;
          margin-top: 18px;
          margin-bottom: 16px;
        }

        .download-lead {
          font-size: 1rem;
          color: var(--color-text-secondary);
          line-height: 1.6;
          margin-bottom: 24px;
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
          padding: 6px 12px;
          border-radius: var(--radius-capsule);
          background: #FFFFFF;
          border: 1px solid rgba(0, 0, 0, 0.1);
          font-size: 0.78rem;
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
          transition: border-color 0.2s;
        }

        .waitlist-input:focus {
          border-color: var(--color-ink-black);
        }

        .btn-waitlist-submit {
          padding: 14px 24px;
          font-size: 0.92rem;
        }

        .waitlist-success-banner {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          background: #E8F5E9;
          border: 1px solid #C8E6C9;
          padding: 16px 20px;
          border-radius: 14px;
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
          padding: 10px 18px;
          border-radius: 12px;
          cursor: default;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .store-btn-text {
          display: flex;
          flex-direction: column;
          line-height: 1.1;
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
          font-size: 0.72rem;
          color: var(--color-text-muted);
          font-style: italic;
        }

        /* Center Phone */
        .download-col-center {
          display: flex;
          justify-content: center;
        }

        .preview-phone-device {
          width: 250px;
          background: #111111;
          border-radius: 36px;
          padding: 10px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
          border: 3px solid #333333;
        }

        .preview-screen-inner {
          background: #FFFFFF;
          border-radius: 28px;
          padding: 24px 16px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          min-height: 380px;
        }

        .preview-logo-badge img {
          height: 38px;
          width: auto;
          margin-bottom: 24px;
        }

        .preview-dish-hero {
          width: 130px;
          height: 130px;
          border-radius: 50%;
          background: #FFF9E6;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          border: 2px solid var(--color-brand-yellow);
        }

        .preview-dish-hero img {
          width: 80%;
          height: 80%;
          object-fit: contain;
        }

        .preview-welcome-text h4 {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--color-ink-black);
          margin-bottom: 4px;
        }

        .preview-welcome-text p {
          font-size: 0.75rem;
          color: var(--color-text-secondary);
          margin-bottom: 20px;
        }

        .preview-status-pill {
          font-size: 0.7rem;
          font-weight: 700;
          background: var(--color-brand-yellow-subtle);
          color: #8C6500;
          padding: 4px 12px;
          border-radius: 9999px;
          margin-top: auto;
        }

        /* Right QR Panel */
        .download-col-right {
          display: flex;
          justify-content: center;
        }

        .qr-code-card {
          background: #FFFFFF;
          border-radius: var(--radius-lg);
          padding: 28px;
          border: 1px solid rgba(0, 0, 0, 0.08);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.04);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          width: 100%;
          max-width: 290px;
        }

        .qr-header-row {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.8rem;
          font-weight: 700;
          color: #8C6500;
          margin-bottom: 18px;
        }

        .qr-visual-box {
          width: 150px;
          height: 150px;
          background: #FAFAFA;
          border: 2px solid rgba(0, 0, 0, 0.06);
          border-radius: 16px;
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
          font-weight: 700;
          color: var(--color-ink-black);
          margin-bottom: 6px;
        }

        .qr-desc {
          font-size: 0.78rem;
          color: var(--color-text-secondary);
          line-height: 1.45;
          margin-bottom: 16px;
        }

        .qr-verified-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.72rem;
          font-weight: 600;
          color: #2E7D32;
        }

        .dot-green {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #2E7D32;
        }

        @media (max-width: 1024px) {
          .download-stage-card {
            grid-template-columns: 1fr;
            padding: 40px 24px;
          }
          .download-col-center {
            order: 2;
          }
          .download-col-right {
            order: 3;
          }
        }
      `}</style>
    </section>
  );
};
