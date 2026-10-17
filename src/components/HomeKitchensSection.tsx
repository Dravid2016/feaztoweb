import React from 'react';
import { KITCHEN_STORIES } from '../data/feaztoData';
import { Sparkles, Award, MapPin, ArrowRight } from 'lucide-react';

interface HomeKitchensSectionProps {
  navigate: (route: string) => void;
}

export const HomeKitchensSection: React.FC<HomeKitchensSectionProps> = ({ navigate }) => {
  return (
    <section className="kitchens-section">
      <div className="container">
        {/* Section Header */}
        <div className="kitchens-header">
          <div className="badge-tag">
            <Sparkles size={13} />
            <span>The FoodPreneurs</span>
          </div>
          <h2 className="kitchens-title">Home Kitchens & Certified Cooks</h2>
          <p className="kitchens-desc">
            We partner with home-food custodians who have perfected their regional heritage over decades. FEAzTO provides food safety certifications, precision kitchen tech, and guaranteed hygiene.
          </p>
        </div>

        {/* Kitchen Cards Grid with Cultural Framing */}
        <div className="kitchen-stories-grid">
          {KITCHEN_STORIES.map((cook) => (
            <div key={cook.id} className="cultural-cook-card">
              {/* Kolam Geometric Header Strip */}
              <div className="cook-card-kolam-strip" aria-hidden="true">
                <svg viewBox="0 0 500 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0,6 Q25,0 50,6 T100,6 T150,6 T200,6 T250,6 T300,6 T350,6 T400,6 T450,6 T500,6" 
                        stroke="#FFD233" strokeWidth="1.2" fill="none" strokeDasharray="4 2" />
                  <circle cx="250" cy="6" r="2.5" fill="#E5B81C" />
                </svg>
              </div>

              <div className="cook-image-side">
                <img src={cook.image} alt={cook.title} className="cook-visual-img" />
                <div className="cook-experience-badge">
                  <Award size={14} />
                  <span>{cook.experienceYears} Years Heritage</span>
                </div>
              </div>

              <div className="cook-info-side">
                <div className="cook-meta-location">
                  <MapPin size={14} />
                  <span>{cook.locationArea}</span>
                </div>

                <h3 className="cook-kitchen-name">{cook.title}</h3>
                <h4 className="cook-master-name">Lead Cook: {cook.cookName}</h4>
                <p className="cook-specialty"><strong>Specialty:</strong> {cook.regionSpecialty}</p>

                <blockquote className="cook-quote-box">
                  “{cook.quote}”
                </blockquote>

                <p className="cook-narrative-story">{cook.story}</p>

                <div className="signature-dish-row">
                  <span className="signature-label">Signature Dish:</span>
                  <span className="signature-pill">{cook.signatureDish}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section Action */}
        <div className="kitchens-action-row">
          <button 
            type="button" 
            onClick={() => navigate('/home-kitchens')}
            className="btn btn-primary"
          >
            <span>Explore All Home Kitchens</span>
            <ArrowRight size={16} />
          </button>
          
          <button 
            type="button" 
            onClick={() => navigate('/partners')}
            className="btn btn-outline"
          >
            <span>Apply as a FoodPreneur Partner</span>
          </button>
        </div>
      </div>

      <style>{`
        .kitchens-section {
          padding-top: 100px;
          padding-bottom: 100px;
          background-color: var(--color-pure-white);
        }

        .kitchens-header {
          text-align: center;
          max-width: 720px;
          margin: 0 auto 56px auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .kitchens-title {
          font-size: clamp(2rem, 3.4vw, 2.8rem);
          font-weight: 800;
          color: var(--color-ink-black);
          margin-top: 18px;
          margin-bottom: 14px;
        }

        .kitchens-desc {
          font-size: 1.05rem;
          color: var(--color-text-secondary);
          line-height: 1.6;
        }

        .kitchen-stories-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(480px, 1fr));
          gap: 36px;
          margin-bottom: 50px;
        }

        .cultural-cook-card {
          background: var(--color-warm-white);
          border-radius: var(--radius-lg);
          border: 1.5px solid rgba(255, 210, 51, 0.45);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform 0.28s ease, box-shadow 0.28s ease, border-color 0.28s ease;
          position: relative;
        }

        .cultural-cook-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 44px rgba(255, 210, 51, 0.16);
          border-color: rgba(255, 210, 51, 0.9);
        }

        .cook-card-kolam-strip {
          width: 100%;
          line-height: 0;
          padding: 4px 16px;
          background: #FFFDF5;
        }
        .cook-card-kolam-strip svg {
          width: 100%;
          height: 12px;
        }

        .cook-image-side {
          position: relative;
          height: 240px;
          overflow: hidden;
        }

        .cook-visual-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .cultural-cook-card:hover .cook-visual-img {
          transform: scale(1.05);
        }

        .cook-experience-badge {
          position: absolute;
          bottom: 16px;
          left: 16px;
          background: rgba(17, 17, 17, 0.88);
          backdrop-filter: blur(8px);
          color: var(--color-brand-yellow);
          padding: 6px 14px;
          border-radius: var(--radius-capsule);
          font-size: 0.78rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 6px;
          border: 1px solid rgba(255, 210, 51, 0.4);
        }

        .cook-info-side {
          padding: 28px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .cook-meta-location {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.8rem;
          font-weight: 600;
          color: #8C6500;
          margin-bottom: 8px;
        }

        .cook-kitchen-name {
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--color-ink-black);
          margin-bottom: 4px;
        }

        .cook-master-name {
          font-size: 0.95rem;
          color: var(--color-text-secondary);
          font-weight: 600;
          margin-bottom: 8px;
        }

        .cook-specialty {
          font-size: 0.88rem;
          color: var(--color-ink-black);
          margin-bottom: 16px;
        }

        .cook-quote-box {
          font-style: italic;
          font-size: 0.9rem;
          color: #333333;
          background: #FFFFFF;
          padding: 14px 18px;
          border-radius: 8px;
          border-left: 3px solid var(--color-brand-yellow);
          margin-bottom: 16px;
          line-height: 1.5;
        }

        .cook-narrative-story {
          font-size: 0.92rem;
          color: var(--color-text-secondary);
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .signature-dish-row {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: auto;
          padding-top: 14px;
          border-top: 1px dashed rgba(255, 210, 51, 0.4);
        }

        .signature-label {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--color-ink-black);
        }

        .signature-pill {
          font-size: 0.8rem;
          font-weight: 600;
          background: var(--color-brand-yellow-subtle);
          color: #7A5B00;
          padding: 4px 10px;
          border-radius: 4px;
          border: 1px solid rgba(255, 210, 51, 0.3);
        }

        .kitchens-action-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        @media (max-width: 600px) {
          .kitchen-stories-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
