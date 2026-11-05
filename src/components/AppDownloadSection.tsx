import React, { useState } from 'react';
import { Sparkles, ArrowRight, CheckCircle2, Mail, ExternalLink } from 'lucide-react';

interface AppDownloadSectionProps {
  navigate?: (route: string) => void;
}

export const AppDownloadSection: React.FC<AppDownloadSectionProps> = () => {
  const [registered, setRegistered] = useState(false);
  const [email, setEmail] = useState('');

  const handleInterestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setRegistered(true);

      const subject = encodeURIComponent(`feazto User App Early Access Subscription: ${email.trim()}`);
      const body = encodeURIComponent(
        `Hi feazto Team,\n\nI would like to subscribe for priority access to the feazto User App and receive upcoming product roadmap updates.\n\n` +
        `Subscriber Email: ${email.trim()}\n\n` +
        `Best regards,\nfeazto Early Adopter`
      );

      // Connect subscription via email to feazto26@gmail.com
      window.location.href = `mailto:feazto26@gmail.com?subject=${subject}&body=${body}`;
    }
  };

  return (
    <section className="app-download-section" id="app-download">
      <div className="download-full-container">
        
        {/* Top Header Row */}
        <div className="download-header-center">
          <div className="badge-tag">
            <Sparkles size={13} />
            <span>feazto User App</span>
          </div>

          <h2 className="download-title">
            Experience Home Food with Cloud Precision.
          </h2>

          <p className="download-lead">
            The feazto ecosystem brings together authentic regional heirloom kitchens, precision Kitchen-OS operations, and temperature-controlled doorstep delivery. Subscribe with your email for early priority access.
          </p>
        </div>

        {/* Hero Showcase Area: Centered Big Phone Mockup Flanked by Priority Access Waitlist */}
        <div className="download-showcase-stage">
          
          {/* Left Column: Direct store buttons and waitlist form */}
          <div className="download-col-left">
            <div className="waitlist-card-wrapper">
              <h3 className="sub-box-title">Subscribe for Priority Access</h3>
              <p className="sub-box-desc">Enter your email address to receive priority access pass and launch roadmap alerts directly to your inbox.</p>

              {!registered ? (
                <form onSubmit={handleInterestSubmit} className="download-waitlist-form">
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
                      <span>Subscribe</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </form>
              ) : (
                <div className="waitlist-success-banner">
                  <CheckCircle2 size={24} className="success-icon" />
                  <div>
                    <strong>You're subscribed for priority access!</strong>
                    <p>We've connected your subscription to <strong>feazto26@gmail.com</strong>. We will notify you the moment user access opens in your area.</p>
                    <div className="subscription-mail-confirm">
                      <a href={`mailto:feazto26@gmail.com?subject=${encodeURIComponent('feazto Priority User App Access')}&body=${encodeURIComponent(`Hi feazto Team, my email is ${email}`)}`} className="mail-confirm-link">
                        <Mail size={14} />
                        <span>Confirm via feazto26@gmail.com</span>
                        <ExternalLink size={12} />
                      </a>
                    </div>
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

          {/* Center Column: Animated Kathakali Dancer + Golden Crown Mandala + Phone */}
          <div className="download-col-center">
            <div className="feazto-hero-stage">
              <div className="feazto-aura-saffron" />
              <div className="feazto-aura-crimson" />

              {/* Rotating Golden Chakra Mandala behind Crown */}
              <div className="feazto-mandala-wrap">
                <svg className="feazto-mandala-outer" viewBox="0 0 200 200" fill="none">
                  <circle cx="100" cy="100" r="92" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="4 6" />
                  <circle cx="100" cy="100" r="82" stroke="#FDE047" strokeWidth="1.2" opacity="0.7" />
                  <circle cx="100" cy="100" r="68" stroke="#EA580C" strokeWidth="1.4" strokeDasharray="10 5" />
                </svg>
                <svg className="feazto-mandala-inner" viewBox="0 0 200 200" fill="none">
                  <polygon
                    points="100,12 122,74 188,74 134,112 154,176 100,138 46,176 66,112 12,74 78,74"
                    stroke="#FBBF24"
                    strokeWidth="1.2"
                    fill="rgba(245, 158, 11, 0.08)"
                  />
                  <circle cx="100" cy="100" r="52" stroke="#FDE047" strokeWidth="1" strokeDasharray="3 5" />
                </svg>
              </div>

              {/* Floating Base Cloud at Backside Bottom of Mobile & Kathakali */}
              <div className="feazto-clouds-container-back">
                <img
                  src="/brand/cloud_backdrop.webp"
                  className="feazto-cloud-layer feazto-cloud-back-primary"
                  alt="Atmospheric Cloud Backdrop"
                  draggable={false}
                />
                <img
                  src="/brand/cloud_backdrop.webp"
                  className="feazto-cloud-layer feazto-cloud-back-ambient"
                  alt="Atmospheric Cloud Backdrop"
                  draggable={false}
                />
              </div>

              {/* Kathakali Performer Group */}
              <div className="feazto-dancer-group">
                <img
                  src="/brand/dancer_body.webp"
                  className="feazto-dancer-body"
                  alt="Kathakali Performer Body"
                  draggable={false}
                />
                <img
                  src="/brand/dancer_head.webp"
                  className="feazto-dancer-head"
                  alt="Kathakali Performer Head"
                  draggable={false}
                />
              </div>

              {/* Stationary FEAZTO Mobile UI */}
              <div className="feazto-phone-static">
                <img
                  src="/brand/phone_layer.webp"
                  alt="FEAZTO Mobile App Showcase"
                  draggable={false}
                />
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

        /* 2-Column Showcase Stage: Completely borderless and transparent */
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

        .subscription-mail-confirm {
          margin-top: 10px;
        }

        .mail-confirm-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.82rem;
          font-weight: 700;
          color: #1B5E20;
          text-decoration: underline;
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

        /* Center Kathakali & Mobile Showcase Stage */
        .download-col-center {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          width: 100%;
        }

        .feazto-hero-stage {
          position: relative;
          width: 100%;
          max-width: 580px;
          aspect-ratio: 1024 / 935;
          margin: 0 auto;
          background: transparent;
          overflow: visible;
          user-select: none;
        }

        /* Warm Ambient Backlights */
        .feazto-aura-saffron {
          position: absolute;
          width: 68%;
          height: 68%;
          right: 6%;
          top: 14%;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(251, 191, 36, 0.42) 0%, rgba(234, 88, 12, 0.18) 45%, rgba(0, 0, 0, 0) 72%);
          filter: blur(28px);
          animation: feaztoPulseAura 6s ease-in-out infinite alternate;
          pointer-events: none;
        }

        .feazto-aura-crimson {
          position: absolute;
          width: 58%;
          height: 64%;
          left: 4%;
          top: 18%;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(220, 38, 38, 0.35) 0%, rgba(22, 163, 74, 0.15) 50%, rgba(0, 0, 0, 0) 75%);
          filter: blur(34px);
          animation: feaztoPulseAura 7.5s ease-in-out infinite alternate-reverse;
          pointer-events: none;
        }

        /* Rotating Golden Chakra Mandala behind Crown */
        .feazto-mandala-wrap {
          position: absolute;
          left: 28.2%;
          top: 16.8%;
          width: 34%;
          aspect-ratio: 1 / 1;
          pointer-events: none;
          z-index: 1;
        }

        .feazto-mandala-outer {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 100%;
          height: 100%;
          animation: feaztoSpin 32s linear infinite;
          filter: drop-shadow(0 0 18px rgba(251, 191, 36, 0.55));
        }

        .feazto-mandala-inner {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 82%;
          height: 82%;
          animation: feaztoSpinReverse 24s linear infinite;
          opacity: 0.65;
        }

        /* Kathakali Performer Group */
        .feazto-dancer-group {
          position: absolute;
          left: 3.91%;
          top: 1.28%;
          width: 40.43%;
          height: 97.54%;
          z-index: 10;
          pointer-events: none;
        }

        .feazto-dancer-body {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
          transform-origin: 55% 92%;
          animation: feaztoBodyBreathe 6.8s ease-in-out infinite;
          filter: drop-shadow(-8px 14px 28px rgba(0, 0, 0, 0.35))
                  drop-shadow(0 0 20px rgba(234, 88, 12, 0.25));
        }

        .feazto-dancer-head {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
          transform-origin: 68.5% 31.2%;
          animation: feaztoHeadLeftRight 6.8s ease-in-out infinite;
          filter: drop-shadow(0 8px 14px rgba(0, 0, 0, 0.25));
        }

        /* Stationary FEAZTO Mobile UI */
        .feazto-phone-static {
          position: absolute;
          left: 41.89%;
          top: 2.14%;
          width: 43.46%;
          height: 94.76%;
          z-index: 30;
          pointer-events: none;
          filter: drop-shadow(-14px 20px 32px rgba(0, 0, 0, 0.28))
                  drop-shadow(0 0 24px rgba(251, 191, 36, 0.25));
        }

        .feazto-phone-static img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
        }

        /* Floating Base Cloud Elements at the Backside Bottom (z-index: 5, behind Kathakali & Mobile) */
        .feazto-clouds-container-back {
          position: absolute;
          bottom: -6%;
          left: 0;
          width: 100%;
          height: 48%;
          z-index: 5;
          pointer-events: none;
          display: flex;
          align-items: flex-end;
          justify-content: center;
        }

        .feazto-cloud-layer {
          position: absolute;
          object-fit: contain;
          user-select: none;
          pointer-events: none;
        }

        .feazto-cloud-back-primary {
          bottom: -4%;
          left: 8%;
          width: 95%;
          height: auto;
          opacity: 0.95;
          filter: drop-shadow(0 16px 36px rgba(0, 0, 0, 0.14));
          animation: feaztoCloudDrift 8.5s ease-in-out infinite alternate;
        }

        .feazto-cloud-back-ambient {
          bottom: 2%;
          right: -6%;
          width: 78%;
          height: auto;
          opacity: 0.65;
          filter: blur(4px) drop-shadow(0 10px 24px rgba(245, 183, 0, 0.2));
          animation: feaztoCloudDriftReverse 11s ease-in-out infinite alternate;
        }

        @keyframes feaztoCloudDrift {
          0% {
            transform: translate3d(-10px, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(8px, -6px, 0) scale(1.03);
          }
          100% {
            transform: translate3d(-6px, 3px, 0) scale(0.98);
          }
        }

        @keyframes feaztoCloudDriftReverse {
          0% {
            transform: translate3d(12px, 0, 0) scale(0.97);
          }
          50% {
            transform: translate3d(-8px, -4px, 0) scale(1.02);
          }
          100% {
            transform: translate3d(10px, 4px, 0) scale(1);
          }
        }

        @keyframes feaztoHeadLeftRight {
          0%, 100% {
            transform: translate3d(-8.5px, 1px, 0) rotate(-3.2deg);
          }
          50% {
            transform: translate3d(8.5px, 1px, 0) rotate(3.2deg);
          }
        }

        @keyframes feaztoBodyBreathe {
          0%, 100% {
            transform: translate3d(-1.5px, 0px, 0) scaleY(1);
          }
          50% {
            transform: translate3d(1.5px, -2px, 0) scaleY(1.006);
          }
        }

        @keyframes feaztoSpin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }

        @keyframes feaztoSpinReverse {
          from { transform: translate(-50%, -50%) rotate(360deg); }
          to { transform: translate(-50%, -50%) rotate(0deg); }
        }

        @keyframes feaztoPulseAura {
          0% { transform: scale(0.94); opacity: 0.65; }
          100% { transform: scale(1.08); opacity: 0.95; }
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
