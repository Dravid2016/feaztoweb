import React, { useState } from 'react';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';

interface HeaderProps {
  currentRoute: string;
  navigate: (route: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentRoute, navigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', route: '/' },
    { label: 'Our Story', route: '/our-story' },
    { label: 'Discover Food', route: '/discover' },
    { label: 'Home Kitchens', route: '/home-kitchens' },
    { label: 'Book a Cook', route: '/book-a-cook' },
    { label: 'Partners', route: '/partners' },
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
        {/* Brand Logo */}
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
                  {currentRoute === item.route && <span className="active-dot" />}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Primary CTA Button */}
        <div className="header-actions">
          <button 
            type="button"
            onClick={() => handleNavClick('/download')}
            className="btn btn-yellow header-cta-btn"
          >
            <span>Get the App</span>
            <ArrowRight size={16} />
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
                onClick={() => handleNavClick('/download')}
                className="btn btn-yellow btn-full-width"
              >
                <span>Download Early Access</span>
                <ArrowRight size={16} />
              </button>
              <p className="mobile-copy-tagline">Home food with cloud-kitchen precision.</p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .feazto-header {
          position: sticky;
          top: 0;
          z-index: 1000;
          background: rgba(250, 250, 250, 0.94);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(0, 0, 0, 0.06);
          transition: var(--transition-smooth);
        }

        .header-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 76px;
        }

        .brand-logo-link {
          display: flex;
          align-items: center;
          outline: none;
        }

        .header-logo-img {
          height: 48px;
          width: auto;
          object-fit: contain;
          transition: transform 0.2s ease;
        }

        .brand-logo-link:hover .header-logo-img {
          transform: scale(1.03);
        }

        .desktop-nav {
          display: flex;
          align-items: center;
        }

        .nav-list {
          display: flex;
          align-items: center;
          gap: 24px;
          list-style: none;
        }

        .nav-link {
          position: relative;
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--color-ink-black);
          padding: 8px 4px;
          transition: color 0.2s ease;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .nav-link:hover {
          color: #A37900;
        }

        .nav-link.active {
          font-weight: 700;
          color: var(--color-ink-black);
        }

        .active-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background-color: var(--color-brand-yellow);
          box-shadow: 0 0 8px rgba(255, 210, 51, 0.8);
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .header-cta-btn {
          padding: 10px 20px;
          font-size: 0.88rem;
        }

        .mobile-toggle-btn {
          display: none;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.05);
          color: var(--color-ink-black);
          transition: background 0.2s ease;
        }

        .mobile-toggle-btn:hover {
          background: rgba(0, 0, 0, 0.1);
        }

        /* Mobile Drawer */
        .mobile-nav-drawer {
          position: fixed;
          top: 76px;
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
          border-bottom: 2px solid var(--color-brand-yellow);
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
          color: var(--color-ink-black);
          text-align: left;
          transition: background 0.2s;
        }

        .mobile-nav-link:hover, .mobile-nav-link.active {
          background: var(--color-cream-surface);
        }

        .mobile-active-pill {
          font-size: 0.72rem;
          font-weight: 700;
          background: var(--color-brand-yellow);
          padding: 3px 8px;
          border-radius: 9999px;
          color: var(--color-ink-black);
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
          font-size: 0.8rem;
          color: var(--color-text-muted);
          text-align: center;
        }

        @media (max-width: 1024px) {
          .desktop-nav {
            display: none;
          }
          .mobile-toggle-btn {
            display: flex;
          }
          .header-cta-btn {
            display: none;
          }
        }
      `}</style>
    </header>
  );
};
