import React from 'react';
import { Heart, MapPin, Mail, ShieldCheck, ArrowUpRight } from 'lucide-react';

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
      {/* Intricate Heritage Temple Tower (Gopuram) extending up across footer boundary */}
      <div className="footer-temple-tower-anchor" aria-hidden="true">
        <img 
          src="/brand/temple-tower-transparent.png" 
          alt="" 
          className="footer-temple-tower-img" 
        />
      </div>
      <div className="container footer-container">
        {/* Top Brand Banner */}
        <div className="footer-top-row">
          <div className="footer-brand-column">
            <img 
              src="/brand/feazto-brand-logo-yellow.jpg" 
              alt="feazto — Food • Culture • Connect" 
              className="footer-logo-img"
            />
            <p className="footer-brand-mission">
              feazto is a food discovery and home kitchen ecosystem connecting passionate FoodPreneurs with customers seeking authentic regional culinary provenance, crafted with cloud kitchen precision.
            </p>
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
                <li><button type="button" onClick={() => handleNavClick('/partners')} className="footer-link">Partner With feazto</button></li>
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
                  <a href="mailto:feazto26@gmail.com" className="footer-info-item" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Mail size={16} />
                    <span>feazto26@gmail.com</span>
                  </a>
                </li>
                <li>
                  <div className="footer-info-item">
                    <ShieldCheck size={16} />
                    <span>FSSAI Hygiene Audited Kitchens</span>
                  </div>
                </li>
                <li>
                  <button type="button" onClick={() => handleNavClick('/contact')} className="btn btn-primary btn-sm mt-2">
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
            <p>© {new Date().getFullYear()} feazto Technologies Pvt. Ltd. All rights reserved.</p>
            <p className="footer-subtext">Brand positioning: Home food with cloud kitchen precision.</p>
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
          background-color: transparent;
          color: #222222;
          padding-top: 70px;
          padding-bottom: 40px;
          border-top: 1.5px solid rgba(181, 132, 0, 0.22);
          position: relative;
          /* Allow temple tower to reach high up into the section above the footer */
          overflow: visible;
        }

        /* ── HERITAGE TEMPLE TOWER STRADDLING FOOTER & UPPER SECTION ── */
        .footer-temple-tower-anchor {
          position: absolute;
          right: 0; /* Cleanly anchored on the right */
          bottom: 0;
          top: -380px; /* Proportionally scaled down */
          width: 440px; /* Scaled down from 720px */
          max-width: 40vw;
          pointer-events: none;
          z-index: 0; /* Sits naturally as an architectural backdrop behind footer content */
          display: flex;
          align-items: flex-end;
          justify-content: flex-end;
          opacity: 0.95;
        }

        .footer-temple-tower-img {
          width: 100%;
          height: auto;
          max-height: 920px;
          object-fit: contain;
          object-position: bottom right;
          filter: drop-shadow(0 -12px 36px rgba(230, 160, 0, 0.2)) drop-shadow(0 20px 45px rgba(0, 0, 0, 0.1));
          mask-image: linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,1) 30%, rgba(0,0,0,1) 85%, transparent 100%),
                      linear-gradient(to right, transparent 0%, rgba(0,0,0,1) 18%);
          -webkit-mask-image: linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,1) 30%, rgba(0,0,0,1) 85%, transparent 100%),
                              linear-gradient(to right, transparent 0%, rgba(0,0,0,1) 18%);
        }

        .footer-container {
          position: relative;
          z-index: 1;
        }

        .footer-top-row {
          display: grid;
          grid-template-columns: 1.3fr 2fr;
          gap: 60px;
          padding-bottom: 50px;
          border-bottom: 1px solid rgba(181, 132, 0, 0.18);
        }

        .footer-brand-column {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .footer-logo-img {
          height: 48px;
          width: auto;
          align-self: flex-start;
          border-radius: 8px;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
        }

        .footer-brand-mission {
          color: #4A3B12;
          font-size: 0.94rem;
          line-height: 1.7;
          max-width: 440px;
        }

        .footer-tagline-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(181, 132, 0, 0.25);
          color: #7A5B00;
          font-size: 0.76rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          padding: 6px 14px;
          border-radius: 9999px;
          width: fit-content;
          box-shadow: 0 2px 8px rgba(181, 132, 0, 0.08);
        }

        .sparkle-icon {
          color: #A87000;
        }

        .footer-links-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 36px;
        }

        .footer-col-title {
          font-size: 0.92rem;
          font-weight: 800;
          color: #1A1A1A;
          margin-bottom: 20px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        .footer-col-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding: 0;
          margin: 0;
        }

        .footer-link {
          font-size: 0.88rem;
          color: #554823;
          text-align: left;
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
          font-weight: 500;
          transition: color 0.2s ease, transform 0.2s ease;
          display: inline-block;
        }

        .footer-link:hover {
          color: #8C6500;
          transform: translateX(3px);
        }

        .footer-info-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.86rem;
          color: #554823;
          font-weight: 500;
        }

        .footer-info-item svg {
          color: #8C6500;
          flex-shrink: 0;
        }

        .btn-sm {
          padding: 8px 18px;
          font-size: 0.84rem;
        }

        .mt-2 {
          margin-top: 8px;
        }

        /* Bottom Row */
        .footer-bottom-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 32px;
          font-size: 0.84rem;
          color: #6C5A28;
        }

        .footer-copy-left p {
          color: #5C4B1E;
          margin: 0;
        }

        .footer-subtext {
          font-size: 0.78rem;
          color: #7D6B3C;
          margin-top: 3px;
        }

        .footer-legal-links {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .footer-legal-link {
          color: #6C5A28;
          font-size: 0.84rem;
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
          font-weight: 500;
          transition: color 0.2s ease;
        }

        .footer-legal-link:hover {
          color: #111111;
        }

        .divider {
          color: rgba(181, 132, 0, 0.4);
        }

        .footer-crafted-by {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          color: #6C5A28;
        }

        .heart-icon {
          color: #E26D2D;
          fill: #E26D2D;
        }

        @media (max-width: 960px) {
          .footer-temple-tower-anchor {
            top: -240px;
            width: 320px;
            right: 0;
            opacity: 0.48;
          }
        }

        @media (max-width: 600px) {
          .footer-temple-tower-anchor {
            top: -160px;
            width: 220px;
            right: 0;
            opacity: 0.38;
          }
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
