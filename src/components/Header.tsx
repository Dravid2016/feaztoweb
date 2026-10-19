import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';

interface HeaderProps {
  currentRoute: string;
  navigate: (route: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentRoute, navigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
    { label: 'Home', route: '/' },
    { label: 'Our Story', route: '/our-story' },
    { label: 'Discover Food', route: '/discover' },
    { label: 'Home Kitchens', route: '/home-kitchens' },
    { label: 'Partners', route: '/partners' },
    { label: 'Download', route: '/download' },
    { label: 'FAQ', route: '/faq' },
    { label: 'Contact', route: '/contact' },
  ];

  const handleNavClick = (route: string) => {
    navigate(route);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`feazto-header-outer ${scrolled ? 'is-scrolled' : 'at-top'}`}>
      <div className="header-island-wrapper">
        {/* Left Pill: Official Brand Logo */}
        <a 
          href="#home" 
          onClick={(e) => { e.preventDefault(); handleNavClick('/'); }} 
          className="brand-pill-island"
          aria-label="FEAzTO Home"
        >
          <img 
            src="/brand/feazto-logo.svg" 
            alt="FEAzTO — Food • Culture • Connect" 
            className="brand-logo-img"
          />
        </a>

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

        {/* Right Pill: App Store / Play Store Badges & Actions */}
        <div className="actions-pill-island">
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
              <span className="badge-tag">
                <Sparkles size={12} /> Food • Culture • Connect
              </span>
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
                <span>Get FEAzTO App</span>
                <ArrowRight size={16} />
              </button>
              <p className="mobile-copy-tagline">The taste of home, wherever life takes you.</p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        /* ── OUTER HEADER CONTAINER ── */
        .feazto-header-outer {
          position: sticky;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 18px 24px 10px 24px;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          pointer-events: none; /* Allows click-through outside pills */
        }

        .feazto-header-outer.is-scrolled {
          padding-top: 10px;
          padding-bottom: 10px;
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
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

        /* When scrolled, the islands gently pull toward each other and gain polished glassmorphic elevation */
        .feazto-header-outer.is-scrolled .header-island-wrapper {
          max-width: 1220px;
          gap: 12px;
        }

        /* ── 1. LEFT PILL: BRAND LOGO ── */
        .brand-pill-island {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #FFFFFF;
          padding: 7px 18px;
          border-radius: 9999px;
          box-shadow: 0 8px 24px rgba(135, 71, 0, 0.12), 0 2px 6px rgba(0, 0, 0, 0.04);
          border: 1.5px solid rgba(255, 255, 255, 0.9);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
          flex-shrink: 0;
        }

        .brand-pill-island:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 12px 28px rgba(135, 71, 0, 0.18);
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
          background: #FFFFFF;
          padding: 6px 18px;
          border-radius: 9999px;
          box-shadow: 0 8px 24px rgba(135, 71, 0, 0.12), 0 2px 6px rgba(0, 0, 0, 0.04);
          border: 1.5px solid rgba(255, 255, 255, 0.9);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          flex-grow: 0;
        }

        /* Scroll Interaction: The nav pill extends smoothly and displays rich glassmorphic contrast */
        .feazto-header-outer.is-scrolled .nav-pill-island {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          padding: 8px 24px;
          box-shadow: 0 12px 32px rgba(135, 71, 0, 0.16), 0 3px 8px rgba(0, 0, 0, 0.06);
          border-color: rgba(245, 183, 0, 0.35);
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
          background-color: rgba(245, 183, 0, 0.14);
        }

        .nav-pill-link.active {
          color: #111111;
          font-weight: 700;
          background-color: rgba(245, 183, 0, 0.2);
        }

        .active-pill-dot {
          display: inline-block;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background-color: #E26D2D;
        }

        /* ── 3. RIGHT PILL: STORE BUTTONS & ACTIONS ── */
        .actions-pill-island {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #FFFFFF;
          padding: 6px 10px;
          border-radius: 9999px;
          box-shadow: 0 8px 24px rgba(135, 71, 0, 0.12), 0 2px 6px rgba(0, 0, 0, 0.04);
          border: 1.5px solid rgba(255, 255, 255, 0.9);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          flex-shrink: 0;
        }

        .feazto-header-outer.is-scrolled .actions-pill-island {
          box-shadow: 0 12px 32px rgba(135, 71, 0, 0.16);
          border-color: rgba(245, 183, 0, 0.35);
        }

        .store-quick-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background-color: #F1ECE0;
          color: #111111;
          border: none;
          cursor: pointer;
          transition: all 0.22s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .store-quick-badge:hover {
          background-color: #111111;
          color: #FFFFFF;
          transform: translateY(-2px) scale(1.06);
        }

        .mobile-pill-toggle {
          display: none;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background-color: #F1ECE0;
          color: #111111;
          border: none;
          cursor: pointer;
          transition: background 0.2s ease;
        }

        .mobile-pill-toggle:hover {
          background-color: #E2DAC8;
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
            display: none;
          }
          .mobile-pill-toggle {
            display: inline-flex;
          }
          .feazto-header-outer {
            padding: 12px 16px;
          }
        }
      `}</style>
    </header>
  );
};
