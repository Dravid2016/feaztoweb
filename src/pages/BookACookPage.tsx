import React, { useState } from 'react';
import { Sparkles, Calendar, Users, ShieldCheck, CheckCircle2, Clock } from 'lucide-react';

export const BookACookPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    cuisine: 'South Indian Sattvic Feast',
    guestCount: '10-15 Guests',
    occasion: 'Family Festival / Puja',
    cityArea: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="secondary-page book-cook-page">
      <section className="page-hero-banner">
        <div className="container">
          <div className="badge-tag">
            <Sparkles size={13} />
            <span>Pilot Registry</span>
          </div>
          <h1 className="page-hero-title">Book a Cook Experience</h1>
          <p className="page-hero-subtitle">
            An intimate private dining offering currently in controlled pilot phase. Invite an authenticated FEAzTO FoodPreneur to curate an authentic regional feast in your home.
          </p>
        </div>
      </section>

      <section className="book-cook-details-section">
        <div className="container">
          <div className="pilot-notice-strip">
            <Clock size={18} />
            <span>
              <strong>Pilot Availability Status:</strong> Book a Cook is currently accepting preliminary host expressions of interest for Bengaluru residential clusters.
            </span>
          </div>

          <div className="booking-layout-grid">
            {/* Left Column: Scope & Safeguards */}
            <div className="booking-info-pane">
              <h2 className="booking-section-title">How the In-Home Experience Works</h2>

              <div className="booking-pillars">
                <div className="bp-card">
                  <ShieldCheck size={22} className="bp-icon" />
                  <div>
                    <h4>Background & Health Certified</h4>
                    <p>Every visiting cook undergoes police background verification, FSSAI medical fitness tests, and strict sanitation audits.</p>
                  </div>
                </div>

                <div className="bp-card">
                  <Calendar size={22} className="bp-icon" />
                  <div>
                    <h4>Pre-Planned Ingredient Sourcing</h4>
                    <p>The FoodPreneur brings freshly cold-pressed oils, stone-ground spice handis, and authenticated artisanal grains.</p>
                  </div>
                </div>

                <div className="bp-card">
                  <Users size={22} className="bp-icon" />
                  <div>
                    <h4>Focused on Intimate Gatherings</h4>
                    <p>Specially calibrated for 8 to 25 guests—ideal for traditional griha pravesh, wedding feasts, Diwali, and family milestones.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interest Registration Form */}
            <div className="booking-form-pane">
              <div className="form-card-box">
                <h3>Register Pilot Host Interest</h3>
                <p>Submit your event requirements to join our priority pilot reservation list.</p>

                {!submitted ? (
                  <form onSubmit={handleSubmit} className="cook-interest-form">
                    <div className="form-group">
                      <label>Your Full Name</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="e.g. Ramesh Kulkarni"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div className="form-row-2">
                      <div className="form-group">
                        <label>Phone Number</label>
                        <input 
                          type="tel" 
                          required 
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                      <div className="form-group">
                        <label>Email Address</label>
                        <input 
                          type="email" 
                          required 
                          placeholder="name@domain.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="form-row-2">
                      <div className="form-group">
                        <label>Desired Heritage Cuisine</label>
                        <select 
                          value={formData.cuisine}
                          onChange={(e) => setFormData({ ...formData, cuisine: e.target.value })}
                        >
                          <option>South Indian Sattvic Feast</option>
                          <option>Hyderabadi Deccani Dum</option>
                          <option>Awadhi & Rampuri Feast</option>
                          <option>Coastal Andhra Seafood Heritage</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label>Guest Count</label>
                        <select 
                          value={formData.guestCount}
                          onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                        >
                          <option>8 - 12 Guests</option>
                          <option>12 - 20 Guests</option>
                          <option>20 - 30 Guests</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label>Location / Area (Bengaluru)</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="e.g. Indiranagar, Jayanagar, Whitefield"
                        value={formData.cityArea}
                        onChange={(e) => setFormData({ ...formData, cityArea: e.target.value })}
                      />
                    </div>

                    <button type="submit" className="btn btn-yellow btn-full-width">
                      <span>Submit Pilot Registry Application</span>
                    </button>
                  </form>
                ) : (
                  <div className="form-success-box">
                    <CheckCircle2 size={36} className="success-icon-big" />
                    <h4>Application Received</h4>
                    <p>
                      Thank you, {formData.name}. Our culinary team has recorded your interest for {formData.cuisine}. We will contact you once an authenticated cook is available for your neighborhood.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .book-cook-details-section {
          padding: 60px 0 100px 0;
          background: #FFFFFF;
        }

        .pilot-notice-strip {
          display: flex;
          align-items: center;
          gap: 12px;
          background: #FFF9E6;
          border: 1px solid rgba(255, 210, 51, 0.6);
          padding: 16px 20px;
          border-radius: var(--radius-md);
          font-size: 0.92rem;
          color: #7A5B00;
          margin-bottom: 48px;
        }

        .booking-layout-grid {
          display: grid;
          grid-template-columns: 1.1fr 1.3fr;
          gap: 50px;
          align-items: flex-start;
        }

        .booking-section-title {
          font-size: 1.8rem;
          font-weight: 800;
          color: var(--color-ink-black);
          margin-bottom: 24px;
        }

        .booking-pillars {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .bp-card {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          background: var(--color-warm-white);
          padding: 22px;
          border-radius: var(--radius-md);
          border: 1px solid rgba(0, 0, 0, 0.06);
        }

        .bp-icon {
          color: #8C6500;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .bp-card h4 {
          font-size: 1.05rem;
          font-weight: 700;
          margin-bottom: 4px;
        }

        .bp-card p {
          font-size: 0.88rem;
          color: var(--color-text-secondary);
          line-height: 1.5;
        }

        .form-card-box {
          background: var(--color-warm-white);
          border-radius: var(--radius-lg);
          border: 1.5px solid rgba(0, 0, 0, 0.08);
          padding: 36px;
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.04);
        }

        .form-card-box h3 {
          font-size: 1.4rem;
          font-weight: 800;
          margin-bottom: 6px;
        }

        .form-card-box p {
          font-size: 0.88rem;
          color: var(--color-text-secondary);
          margin-bottom: 24px;
        }

        .cook-interest-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .form-row-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-group label {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--color-ink-black);
        }

        .form-group input, .form-group select {
          padding: 12px 14px;
          border-radius: 8px;
          border: 1px solid rgba(0, 0, 0, 0.15);
          font-family: inherit;
          font-size: 0.9rem;
          background: #FFFFFF;
          outline: none;
        }

        .form-group input:focus, .form-group select:focus {
          border-color: var(--color-ink-black);
        }

        .form-success-box {
          text-align: center;
          padding: 40px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .success-icon-big {
          color: #2E7D32;
          margin-bottom: 16px;
        }

        .form-success-box h4 {
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 8px;
        }

        @media (max-width: 860px) {
          .booking-layout-grid {
            grid-template-columns: 1fr;
          }
          .form-row-2 {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};
