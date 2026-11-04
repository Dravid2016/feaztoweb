import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import Strands from './Strands';
import { useAudioPlayer, FEAZTO_ORB_COLORS } from '../context/AudioPlayerContext';

interface HeaderProps {
  currentRoute: string;
  navigate: (route: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentRoute, navigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isPlaying, audioLevel, togglePlayback } = useAudioPlayer();

  useEffect(() => {
    const handleScroll = () => {
      // Trigger floating / merged pill state when scrolling past 40px
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Our Story', route: '/our-story' },
    { label: 'Download', route: '/download' },
    { label: 'Blog', route: '/blog' },
    { label: 'Business Sign Up', route: '/business-signup' },
    { label: 'Careers', route: '/careers' },
    { label: 'Contact Us', route: '/contact' },
  ];

  const handleNavClick = (route: string) => {
    navigate(route);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`feazto-header-outer ${scrolled ? 'is-scrolled' : 'at-top'}`}>
      <div className="header-island-wrapper">
        {/* Left Pill: Official Brand Logo - Navigates to Home */}
        <button 
          type="button"
          onClick={() => handleNavClick('/')} 
          className="brand-pill-island"
          aria-label="feazto Home"
        >
          <img 
            src="/brand/feazto-logo.svg" 
            alt="feazto — Food • Culture • Connect" 
            className="brand-logo-img"
          />
        </button>

        {/* Center Pill: Navigation Menu */}
        <nav className="nav-pill-island" aria-label="Main Navigation">
          <ul className="nav-pill-list">
            {navLinks.map((item) => (
              <li key={item.route}>
                <button
                  type="button"
                  onClick={() => handleNavClick(item.route)}
                  className={`nav-pill-link ${currentRoute === item.route ? 'active' : ''}`}
                >
                  <span>{item.label}</span>
                  {currentRoute === item.route && <span className="active-pill-dot" />}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Pill: Audio Reactive Sound Orb & Actions */}
        <div className="actions-pill-island">
          {/* Sound Orb Toggle: Clicking directly toggles sound on/off */}
          <button
            type="button"
            onClick={togglePlayback}
            className={`header-sound-orb-btn ${isPlaying ? 'is-active' : 'is-muted'}`}
            title={isPlaying ? 'Click to Mute Sound' : 'Click to Play Sound'}
            aria-label={isPlaying ? 'Click to Mute Sound' : 'Click to Play Sound'}
          >
            <div className="header-orb-canvas-wrap">
              <Strands
                colors={FEAZTO_ORB_COLORS}
                count={3}
                speed={isPlaying ? 1.2 : 0.25}
                amplitude={isPlaying ? 0.9 + audioLevel * 0.8 : 0.35}
                waviness={isPlaying ? 0.9 + audioLevel * 0.6 : 0.35}
                glow={isPlaying ? 1.0 + audioLevel * 1.2 : 0.25}
                glass={true}
                glassSize={1.0}
                refraction={1.2}
                dispersion={1.1}
                energy={isPlaying ? 0.3 + audioLevel * 0.7 : 0.08}
                level={audioLevel}
                interactive={false}
                clickPulse={false}
                intro={false}
              />
            </div>
            {/* Dynamic Aura Ring */}
            <span 
              className="header-orb-aura"
              style={{
                opacity: isPlaying ? 0.45 + audioLevel * 0.55 : 0,
                transform: `scale(${1 + audioLevel * 0.3})`
              }}
            />
            {/* Subtle muted slash indicator overlay when sound is off */}
            {!isPlaying && (
              <span className="orb-muted-indicator" title="Muted" />
            )}
          </button>

          {/* iOS App Store Icon Button */}
          <button
            type="button"
            onClick={() => handleNavClick('/download')}
            className="store-quick-badge"
            title="Download on Apple App Store"
            aria-label="Apple App Store"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.38c.62-.75 1.04-1.8 0.92-2.85-.9.04-1.99.6-2.63 1.35-.57.65-.07 1.73.05 2.76 1.01.08 2.04-.51 2.66-1.26z"/>
            </svg>
          </button>

          {/* Google Play Store Icon Button */}
          <button
            type="button"
            onClick={() => handleNavClick('/download')}
            className="store-quick-badge"
            title="Get it on Google Play"
            aria-label="Google Play Store"
          >
            <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.609 1.814L13.793 12 3.61 22.186c-.367-.346-.61-.84-.61-1.402V3.216c0-.562.243-1.056.61-1.402zM15.207 13.414l2.586 2.586-12.06 6.94 9.474-9.526zm2.586-5.414L15.207 10.586 5.733 1.06l12.06 6.94zm1.414 1.414l3.18 1.83c.78.45.78 1.18 0 1.63l-3.18 1.83-2.293-2.646 2.293-2.644z"/>
            </svg>
          </button>

          {/* Mobile Toggle Button */}
          <button
            type="button"
            className="mobile-pill-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer" role="dialog" aria-modal="true">
          <div className="mobile-nav-inner">
            <div className="mobile-brand-row">
              <button
                type="button"
                onClick={() => handleNavClick('/')}
                className="mobile-drawer-brand-btn"
                aria-label="feazto Home"
              >
                <img 
                  src="/brand/feazto-logo.svg" 
                  alt="feazto Logo" 
                  style={{ height: '32px', width: 'auto' }} 
                />
              </button>
              <button 
                type="button"
                className="close-drawer-btn" 
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            <ul className="mobile-nav-list">
              {navLinks.map((item) => (
                <li key={item.route}>
                  <button
                    type="button"
                    onClick={() => handleNavClick(item.route)}
                    className={`mobile-nav-link ${currentRoute === item.route ? 'active' : ''}`}
                  >
                    <span>{item.label}</span>
                    {currentRoute === item.route && <span className="mobile-active-pill">Active</span>}
                  </button>
                </li>
              ))}
            </ul>

            <div className="mobile-drawer-footer">
              <button
                type="button"
                onClick={() => handleNavClick('/download')}
                className="btn btn-yellow btn-full-width"
              >
                <span>Get feazto App</span>
                <ArrowRight size={16} />
              </button>
              <p className="mobile-copy-tagline">The taste of home, wherever life takes you.</p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        /* ── OUTER HEADER CONTAINER (100% Identical Background with Homepage) ── */
        .feazto-header-outer {
          position: sticky;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 18px 24px 10px 24px;
          background: transparent !important;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          pointer-events: none; /* Allows click-through outside floating pills */
        }

        /* When scrolling, keep the background transparent and let the pills float over the page smoothly */
        .feazto-header-outer.is-scrolled {
          padding-top: 10px;
          padding-bottom: 8px;
          background: transparent !important;
        }

        /* ── 3-PILL ISLAND ROW ── */
        .header-island-wrapper {
          max-width: 1360px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          pointer-events: auto;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* When scrolled, the islands gently pull toward each other */
        .feazto-header-outer.is-scrolled .header-island-wrapper {
          max-width: 1220px;
          gap: 12px;
        }

        /* ── 1. LEFT PILL: BRAND LOGO (Full Button Yellow as in screenshot) ── */
        .brand-pill-island {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, rgba(255, 222, 89, 0.72) 0%, rgba(250, 201, 33, 0.55) 60%, rgba(229, 168, 0, 0.65) 100%) !important;
          backdrop-filter: blur(24px) saturate(190%) !important;
          -webkit-backdrop-filter: blur(24px) saturate(190%) !important;
          padding: 7px 18px;
          border-radius: 9999px;
          border: none !important;
          box-shadow: 0 12px 32px rgba(250, 201, 33, 0.32), 
                      inset 0 1.5px 3px rgba(255, 255, 255, 0.6), 
                      inset 0 -2px 4px rgba(180, 130, 0, 0.2);
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
          flex-shrink: 0;
        }

        .brand-pill-island:hover {
          transform: translateY(-2px) scale(1.02);
          background: linear-gradient(135deg, rgba(255, 222, 89, 0.85) 0%, rgba(250, 201, 33, 0.72) 60%, rgba(229, 168, 0, 0.8) 100%) !important;
          box-shadow: 0 16px 40px rgba(250, 201, 33, 0.45), 
                      inset 0 2px 4px rgba(255, 255, 255, 0.85), 
                      inset 0 -2px 5px rgba(180, 130, 0, 0.25);
          border: none !important;
        }

        .brand-logo-img {
          height: 38px;
          width: auto;
          object-fit: contain;
          display: block;
        }

        /* ── 2. CENTER PILL: NAVIGATION MENU ── */
        .nav-pill-island {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.65) 0%, rgba(255, 255, 255, 0.35) 100%) !important;
          backdrop-filter: blur(26px) saturate(180%) !important;
          -webkit-backdrop-filter: blur(26px) saturate(180%) !important;
          padding: 6px 18px;
          border-radius: 9999px;
          border: 1px solid rgba(255, 255, 255, 0.6) !important;
          box-shadow: 0 14px 36px rgba(0, 0, 0, 0.06), 
                      inset 0 1.5px 3px rgba(255, 255, 255, 0.85), 
                      inset 0 -1.5px 3px rgba(0, 0, 0, 0.03);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          flex-grow: 0;
        }

        /* Scroll Interaction: The nav pill extends smoothly with rich contrast */
        .feazto-header-outer.is-scrolled .nav-pill-island {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.82) 0%, rgba(255, 255, 255, 0.58) 100%) !important;
          backdrop-filter: blur(28px) saturate(200%) !important;
          -webkit-backdrop-filter: blur(28px) saturate(200%) !important;
          padding: 8px 24px;
          box-shadow: 0 16px 42px rgba(0, 0, 0, 0.09), 
                      inset 0 1.5px 3px #FFFFFF;
          border-color: rgba(255, 255, 255, 0.85) !important;
        }

        .nav-pill-list {
          display: flex;
          align-items: center;
          gap: clamp(8px, 1.4vw, 22px);
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nav-pill-link {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 7px 12px;
          border-radius: 9999px;
          font-family: var(--font-body);
          font-size: 0.9rem;
          font-weight: 500;
          color: #2D2214;
          cursor: pointer;
          transition: all 0.22s ease;
          white-space: nowrap;
        }

        .nav-pill-link:hover {
          color: #111111;
          background-color: rgba(250, 201, 33, 0.18);
        }

        .nav-pill-link.active {
          color: #111111;
          font-weight: 700;
          background-color: rgba(250, 201, 33, 0.28);
        }

        .active-pill-dot {
          display: inline-block;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background-color: #E26D2D;
        }

        /* ── 3. RIGHT PILL: STORE BUTTONS & ACTIONS (With Brand Yellow) ── */
        .actions-pill-island {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, rgba(255, 222, 89, 0.72) 0%, rgba(250, 201, 33, 0.55) 60%, rgba(229, 168, 0, 0.65) 100%) !important;
          backdrop-filter: blur(24px) saturate(190%) !important;
          -webkit-backdrop-filter: blur(24px) saturate(190%) !important;
          padding: 6px 12px;
          border-radius: 9999px;
          border: none !important;
          box-shadow: 0 12px 32px rgba(250, 201, 33, 0.32), 
                      inset 0 1.5px 3px rgba(255, 255, 255, 0.6), 
                      inset 0 -2px 4px rgba(180, 130, 0, 0.2);
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          flex-shrink: 0;
        }

        .feazto-header-outer.is-scrolled .actions-pill-island {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, rgba(255, 222, 89, 0.72) 0%, rgba(250, 201, 33, 0.55) 60%, rgba(229, 168, 0, 0.65) 100%) !important;
          backdrop-filter: blur(24px) saturate(190%) !important;
          -webkit-backdrop-filter: blur(24px) saturate(190%) !important;
          padding: 6px 12px;
          border-radius: 9999px;
          border: none !important;
          box-shadow: 0 12px 32px rgba(250, 201, 33, 0.32), 
                      inset 0 1.5px 3px rgba(255, 255, 255, 0.6), 
                      inset 0 -2px 4px rgba(180, 130, 0, 0.2);
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          flex-shrink: 0;
        }

        /* ── SOUND ORB INTERACTIVE TOGGLE IN HEADER ── */
        .header-sound-orb-btn {
          position: relative;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 1.5px solid rgba(255, 255, 255, 0.95);
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(250, 201, 33, 0.6) 100%);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          box-shadow: 
            0 4px 14px rgba(181, 132, 0, 0.28),
            inset 0 1px 2px rgba(255, 255, 255, 1);
          cursor: pointer;
          padding: 0;
          overflow: visible;
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease, opacity 0.25s ease, filter 0.25s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .header-sound-orb-btn:hover {
          transform: translateY(-2px) scale(1.08);
          box-shadow: 0 8px 22px rgba(181, 132, 0, 0.4);
        }

        .header-sound-orb-btn.is-muted {
          opacity: 0.65;
          filter: grayscale(40%);
        }

        .header-sound-orb-btn.is-muted:hover {
          opacity: 0.95;
          filter: grayscale(0%);
        }

        .header-orb-canvas-wrap {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          overflow: hidden;
          position: relative;
          z-index: 2;
        }

        .header-orb-aura {
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(250, 201, 33, 0.75) 0%, rgba(226, 109, 45, 0.4) 60%, transparent 80%);
          pointer-events: none;
          z-index: 1;
          transition: transform 0.15s ease-out, opacity 0.15s ease-out;
        }

        .orb-muted-indicator {
          position: absolute;
          bottom: -2px;
          right: -2px;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #E26D2D;
          border: 1.5px solid #FFFFFF;
          z-index: 3;
        }

        .store-quick-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.85) !important;
          color: #181B20;
          border: none !important;
          cursor: pointer;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08), inset 0 1px 2px #FFFFFF;
        }

        .store-quick-badge:hover {
          background-color: #111111;
          color: #FFFFFF;
          transform: translateY(-2px) scale(1.08);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        .mobile-pill-toggle {
          display: none;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background-color: #FFFFFF;
          color: #111111;
          border: none;
          cursor: pointer;
          transition: background 0.2s ease;
        }

        .mobile-pill-toggle:hover {
          background-color: #111111;
          color: #FFFFFF;
        }

        /* ── MOBILE DRAWER ── */
        .mobile-nav-drawer {
          position: fixed;
          top: 80px;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(17, 17, 17, 0.65);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          z-index: 999;
          display: flex;
          flex-direction: column;
          pointer-events: auto;
        }

        .mobile-nav-inner {
          background: #FFFFFF;
          padding: 24px 20px;
          border-radius: 0 0 24px 24px;
          border-bottom: 3px solid #F5B700;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
          max-height: 80vh;
          overflow-y: auto;
        }

        .mobile-brand-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 18px;
          padding-bottom: 12px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
        }

        .mobile-drawer-brand-btn {
          display: inline-flex;
          align-items: center;
          padding: 6px 14px;
          border-radius: 9999px;
          background: #FAC921;
          border: none;
          cursor: pointer;
        }

        .close-drawer-btn {
          color: var(--color-text-secondary);
        }

        .mobile-nav-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin: 0;
          padding: 0;
        }

        .mobile-nav-link {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 14px;
          border-radius: 12px;
          font-size: 1.05rem;
          font-weight: 600;
          color: #111111;
          text-align: left;
          transition: background 0.2s;
        }

        .mobile-nav-link:hover, .mobile-nav-link.active {
          background: #FDF6E2;
        }

        .mobile-active-pill {
          font-size: 0.72rem;
          font-weight: 700;
          background: #F5B700;
          padding: 3px 8px;
          border-radius: 9999px;
          color: #111111;
        }

        .mobile-drawer-footer {
          margin-top: 24px;
          padding-top: 18px;
          border-top: 1px solid rgba(0, 0, 0, 0.08);
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .btn-full-width {
          width: 100%;
        }

        .mobile-copy-tagline {
          font-size: 0.82rem;
          color: #666666;
          text-align: center;
        }

        /* ── RESPONSIVE MEDIA QUERIES ── */
        @media (max-width: 1100px) {
          .nav-pill-island {
            display: none !important;
          }
          .mobile-pill-toggle {
            display: inline-flex !important;
          }
          .feazto-header-outer {
            padding: 10px 14px;
          }
          .header-island-wrapper {
            width: 100%;
            justify-content: space-between;
          }
          .brand-logo-img {
            height: 28px;
          }
          .brand-pill-island {
            padding: 6px 14px;
          }
          .actions-pill-island {
            padding: 5px 8px;
            gap: 6px;
          }
          .header-sound-orb-btn {
            width: 34px;
            height: 34px;
          }
          .store-quick-badge {
            width: 34px;
            height: 34px;
          }
          .store-quick-badge svg {
            width: 17px;
            height: 17px;
          }
          .mobile-pill-toggle {
            width: 34px;
            height: 34px;
          }
        }

        @media (max-width: 480px) {
          .feazto-header-outer {
            padding: 8px 10px;
          }
          .brand-pill-island {
            padding: 5px 12px;
          }
          .brand-logo-img {
            height: 24px;
          }
          .store-quick-badge:first-of-type {
            display: none;
          }
        }
      `}</style>
    </header>
  );
};
