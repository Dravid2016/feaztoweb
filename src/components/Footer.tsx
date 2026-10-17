import React from 'react';
import { Heart, Sparkles, MapPin, Mail, ShieldCheck, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  navigate: (route: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ navigate }) => {
  const handleNavClick = (route: string) => {
    navigate(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="feazto-footer">
      <div className="container footer-container">
        {/* Top Brand Banner */}
        <div className="footer-top-row">
          <div className="footer-brand-column">
            <img 
              src="/brand/feazto-logo.svg" 
              alt="FEAzTO — Food • Culture • Connect" 
              className="footer-logo-img"
            />
            <p className="footer-brand-mission">
              FEAzTO is a food discovery and home-kitchen ecosystem connecting passionate FoodPreneurs with customers seeking authentic regional culinary provenance, crafted with cloud-kitchen precision.
            </p>
            <div className="footer-tagline-badge">
              <Sparkles size={14} className="sparkle-icon" />
              <span>FOOD • CULTURE • CONNECT</span>
            </div>
          </div>

          <div className="footer-links-grid">
            {/* Column 1: Ecosystem */}
            <div className="footer-col">
              <h4 className="footer-col-title">Ecosystem</h4>
              <ul className="footer-col-list">
                <li><button type="button" onClick={() => handleNavClick('/')} className="footer-link">Home Experience</button></li>
                <li><button type="button" onClick={() => handleNavClick('/our-story')} className="footer-link">Our Heritage Story</button></li>
                <li><button type="button" onClick={() => handleNavClick('/discover')} className="footer-link">Regional Food Discovery</button></li>
                <li><button type="button" onClick={() => handleNavClick('/home-kitchens')} className="footer-link">Home Kitchens & Cooks</button></li>
                <li><button type="button" onClick={() => handleNavClick('/book-a-cook')} className="footer-link">Book a Cook (Pilot)</button></li>
              </ul>
            </div>

            {/* Column 2: Partners & Apps */}
            <div className="footer-col">
              <h4 className="footer-col-title">Community & Tech</h4>
              <ul className="footer-col-list">
                <li><button type="button" onClick={() => handleNavClick('/partners')} className="footer-link">Partner With FEAzTO</button></li>
                <li><button type="button" onClick={() => handleNavClick('/partners')} className="footer-link">Become a FoodPreneur</button></li>
                <li><button type="button" onClick={() => handleNavClick('/download')} className="footer-link">Download Customer App</button></li>
                <li><button type="button" onClick={() => handleNavClick('/download')} className="footer-link">Cloud Kitchen Partner App</button></li>
                <li><button type="button" onClick={() => handleNavClick('/faq')} className="footer-link">Frequently Asked Questions</button></li>
              </ul>
            </div>

            {/* Column 3: Contact & Trust */}
            <div className="footer-col">
              <h4 className="footer-col-title">Trust & Contact</h4>
              <ul className="footer-col-list">
                <li>
                  <div className="footer-info-item">
                    <MapPin size={16} />
                    <span>Bengaluru, Karnataka, India</span>
                  </div>
                </li>
                <li>
                  <div className="footer-info-item">
                    <Mail size={16} />
                    <span>hello@feazto.com</span>
                  </div>
                </li>
                <li>
                  <div className="footer-info-item">
                    <ShieldCheck size={16} />
                    <span>FSSAI Hygiene Audited Kitchens</span>
                  </div>
                </li>
                <li>
                  <button type="button" onClick={() => handleNavClick('/contact')} className="btn btn-white btn-sm mt-2">
                    <span>Contact Team</span>
                    <ArrowUpRight size={14} />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Legal Row */}
        <div className="footer-bottom-row">
          <div className="footer-copy-left">
            <p>© {new Date().getFullYear()} FEAzTO Technologies Pvt. Ltd. All rights reserved.</p>
            <p className="footer-subtext">Brand positioning: Home food with cloud-kitchen precision.</p>
          </div>

          <div className="footer-legal-links">
            <button type="button" onClick={() => handleNavClick('/privacy')} className="footer-legal-link">Privacy Policy</button>
            <span className="divider">•</span>
            <button type="button" onClick={() => handleNavClick('/terms')} className="footer-legal-link">Terms of Service</button>
            <span className="divider">•</span>
            <span className="footer-crafted-by">
              Crafted with <Heart size={12} className="heart-icon" /> for Indian Food Traditions
            </span>
          </div>
        </div>
      </div>

      <style>{`
        .feazto-footer {
          background-color: #111111;
          color: #FAFAFA;
          padding-top: 80px;
          padding-bottom: 40px;
          border-top: 4px solid var(--color-brand-yellow);
          position: relative;
          overflow: hidden;
        }

        .feazto-footer::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: radial-gradient(circle at 10% 20%, rgba(255, 210, 51, 0.04) 0%, transparent 60%);
          pointer-events: none;
        }

        .footer-container {
          position: relative;
          z-index: 1;
        }

        .footer-top-row {
          display: grid;
          grid-template-columns: 1.3fr 2fr;
          gap: 60px;
          padding-bottom: 60px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .footer-brand-column {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .footer-logo-img {
          height: 52px;
          width: auto;
          align-self: flex-start;
          border-radius: 12px;
        }

        .footer-brand-mission {
          color: #A0A0A0;
          font-size: 0.92rem;
          line-height: 1.7;
          max-width: 440px;
        }

        .footer-tagline-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 210, 51, 0.12);
          border: 1px solid rgba(255, 210, 51, 0.3);
          color: var(--color-brand-yellow);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          padding: 6px 14px;
          border-radius: 9999px;
          width: fit-content;
        }

        .sparkle-icon {
          color: var(--color-brand-yellow);
        }

        .footer-links-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 36px;
        }

        .footer-col-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: #FFFFFF;
          margin-bottom: 20px;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .footer-col-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-link {
          font-size: 0.88rem;
          color: #B5B5B5;
          text-align: left;
          transition: color 0.2s ease, transform 0.2s ease;
          display: inline-block;
        }

        .footer-link:hover {
          color: var(--color-brand-yellow);
          transform: translateX(3px);
        }

        .footer-info-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.86rem;
          color: #A0A0A0;
        }

        .btn-sm {
          padding: 8px 16px;
          font-size: 0.82rem;
        }

        .mt-2 {
          margin-top: 8px;
        }

        /* Bottom Row */
        .footer-bottom-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 36px;
          font-size: 0.82rem;
          color: #777777;
        }

        .footer-copy-left p {
          color: #888888;
        }

        .footer-subtext {
          font-size: 0.78rem;
          color: #666666;
          margin-top: 2px;
        }

        .footer-legal-links {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .footer-legal-link {
          color: #888888;
          font-size: 0.82rem;
          transition: color 0.2s ease;
        }

        .footer-legal-link:hover {
          color: #FFFFFF;
        }

        .divider {
          color: #444444;
        }

        .footer-crafted-by {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          color: #A0A0A0;
        }

        .heart-icon {
          color: #E26D2D;
          fill: #E26D2D;
        }

        @media (max-width: 960px) {
          .footer-top-row {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .footer-links-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .footer-links-grid {
            grid-template-columns: 1fr;
          }
          .footer-bottom-row {
            flex-direction: column;
            gap: 18px;
            text-align: center;
          }
          .footer-legal-links {
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
};
