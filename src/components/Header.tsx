import React, { useState } from 'react';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';

interface HeaderProps {
  currentRoute: string;
  navigate: (route: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentRoute, navigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Matched to target reference and real website routes
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
    <header className="feazto-header">
      <div className="container header-container">
        {/* Brand Logo with exact proportions */}
        <a 
          href="#home" 
          onClick={(e) => { e.preventDefault(); handleNavClick('/'); }} 
          className="brand-logo-link"
          aria-label="FEAzTO Home"
        >
          <img 
            src="/brand/feazto-logo.svg" 
            alt="FEAzTO — Food • Culture • Connect" 
            className="header-logo-img"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            {navLinks.map((item) => (
              <li key={item.route}>
                <button
                  type="button"
                  onClick={() => handleNavClick(item.route)}
                  className={`nav-link ${currentRoute === item.route ? 'active' : ''}`}
                >
                  {item.label}
                  {currentRoute === item.route && <span className="active-underline" />}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Primary CTA Button: "Explore feazto" in Turmeric Yellow */}
        <div className="header-actions">
          <button 
            type="button"
            onClick={() => handleNavClick('/discover')}
            className="header-turmeric-cta"
          >
            <span>Explore feazto</span>
          </button>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
                onClick={() => handleNavClick('/discover')}
                className="btn btn-yellow btn-full-width"
              >
                <span>Explore feazto</span>
                <ArrowRight size={16} />
              </button>
              <p className="mobile-copy-tagline">The taste of home, wherever life takes you.</p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .feazto-header {
          position: sticky;
          top: 0;
          z-index: 1000;
          background: rgba(255, 210, 51, 0.94);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-bottom: 1.5px solid rgba(135, 71, 0, 0.22);
          box-shadow: 0 4px 20px rgba(135, 71, 0, 0.08);
          transition: var(--transition-smooth);
        }

        .header-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 74px;
          max-width: 1320px;
        }

        .brand-logo-link {
          display: flex;
          align-items: center;
          outline: none;
        }

        .header-logo-img {
          height: 44px;
          width: auto;
          object-fit: contain;
          transition: transform 0.2s ease;
        }

        .brand-logo-link:hover .header-logo-img {
          transform: scale(1.02);
        }

        .desktop-nav {
          display: flex;
          align-items: center;
        }

        .nav-list {
          display: flex;
          align-items: center;
          gap: 26px;
          list-style: none;
        }

        .nav-link {
          position: relative;
          font-family: var(--font-body);
          font-size: 0.92rem;
          font-weight: 500;
          color: #222222;
          padding: 8px 2px;
          transition: color 0.2s ease;
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          cursor: pointer;
        }

        .nav-link:hover {
          color: #111111;
        }

        .nav-link.active {
          font-weight: 600;
          color: #111111;
        }

        .active-underline {
          position: absolute;
          bottom: 2px;
          left: 0;
          right: 0;
          height: 2px;
          background-color: #F5B700;
          border-radius: 2px;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .header-turmeric-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 10px 24px;
          border-radius: 9999px;
          background-color: #F5B700;
          color: #111111;
          font-family: var(--font-heading);
          font-size: 0.88rem;
          font-weight: 700;
          border: 1px solid #E5AA00;
          box-shadow: 0 4px 14px rgba(245, 183, 0, 0.3);
          transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
          cursor: pointer;
        }

        .header-turmeric-cta:hover {
          background-color: #E6A700;
          transform: translateY(-1.5px);
          box-shadow: 0 6px 18px rgba(245, 183, 0, 0.4);
        }

        .mobile-toggle-btn {
          display: none;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.05);
          color: #111111;
          transition: background 0.2s ease;
        }

        .mobile-toggle-btn:hover {
          background: rgba(0, 0, 0, 0.1);
        }

        /* Mobile Drawer */
        .mobile-nav-drawer {
          position: fixed;
          top: 74px;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(17, 17, 17, 0.6);
          backdrop-filter: blur(8px);
          z-index: 999;
          display: flex;
          flex-direction: column;
        }

        .mobile-nav-inner {
          background: #FFFFFF;
          padding: 24px 20px;
          border-bottom: 3px solid #F5B700;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
          max-height: 85vh;
          overflow-y: auto;
        }

        .mobile-brand-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
          padding-bottom: 12px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.06);
        }

        .close-drawer-btn {
          color: var(--color-text-secondary);
        }

        .mobile-nav-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .mobile-nav-link {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 14px;
          border-radius: 10px;
          font-size: 1.05rem;
          font-weight: 600;
          color: #111111;
          text-align: left;
          transition: background 0.2s;
        }

        .mobile-nav-link:hover, .mobile-nav-link.active {
          background: var(--color-cream-surface);
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

        @media (max-width: 1080px) {
          .desktop-nav {
            display: none;
          }
          .mobile-toggle-btn {
            display: flex;
          }
          .header-turmeric-cta {
            display: none;
          }
        }
      `}</style>
    </header>
  );
};
