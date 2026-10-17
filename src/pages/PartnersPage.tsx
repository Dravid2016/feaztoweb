import React, { useState } from 'react';
import { Sparkles, Building2, ChefHat, CheckCircle2 } from 'lucide-react';

export const PartnersPage: React.FC = () => {
  const [partnerType, setPartnerType] = useState<'cook' | 'kitchen'>('cook');
  const [submitted, setSubmitted] = useState(false);
  const [partnerForm, setPartnerForm] = useState({
    name: '',
    phone: '',
    email: '',
    experienceYears: '5-10 Years',
    specialty: '',
    kitchenType: 'Home Kitchen Pod',
    cityArea: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="secondary-page partners-page">
      <section className="page-hero-banner">
        <div className="container">
          <div className="badge-tag">
            <Sparkles size={13} />
            <span>Co-Create Culinary Wealth</span>
          </div>
          <h1 className="page-hero-title">Partner with FEAzTO</h1>
          <p className="page-hero-subtitle">
            Whether you are a seasoned home cook with secret family recipes or a cloud kitchen operator seeking verified regional brands, FEAzTO provides the tools for lasting success.
          </p>
        </div>
      </section>

      <section className="partners-detail-section">
        <div className="container">
          {/* Models Overview */}
          <div className="partner-tracks-grid">
            <div className="track-card">
              <div className="track-icon-badge">
                <ChefHat size={24} />
              </div>
              <h3>For FoodPreneurs & Home Cooks</h3>
              <p>You bring the culinary passion and authentic generational techniques. We handle ingredient quality control, food safety auditing, cloud kitchen facility access, order dispatch, and customer service.</p>
              <ul className="track-points">
                <li><CheckCircle2 size={16} /> 100% Recipe Ownership & Integrity</li>
                <li><CheckCircle2 size={16} /> Direct Profit Sharing from Batch 1</li>
                <li><CheckCircle2 size={16} /> FSSAI Compliance & Lab Audit Support</li>
              </ul>
            </div>

            <div className="track-card">
              <div className="track-icon-badge">
                <Building2 size={24} />
              </div>
              <h3>For Cloud Kitchen Infrastructure Operators</h3>
              <p>Monetize underutilized commercial cooking space by hosting authenticated FEAzTO FoodPreneur batches during off-peak hours with standardized SOPs and telemetry.</p>
              <ul className="track-points">
                <li><CheckCircle2 size={16} /> Predictable Guaranteed Utilization</li>
                <li><CheckCircle2 size={16} /> High Hygiene Standards & Oversight</li>
                <li><CheckCircle2 size={16} /> Integrated Kitchen OS & POS Tablet</li>
              </ul>
            </div>
          </div>

          {/* Registration Form */}
          <div className="partner-form-wrapper">
            <div className="partner-form-card">
              <div className="form-heading-area">
                <h2>Begin Your Partnership Application</h2>
                <p>Fill out this preliminary onboarding questionnaire. Our partner success team will review your profile and schedule a kitchen audit.</p>
              </div>

              {/* Type Switcher */}
              <div className="type-toggle-switch">
                <button
                  type="button"
                  onClick={() => setPartnerType('cook')}
                  className={`toggle-btn ${partnerType === 'cook' ? 'active' : ''}`}
                >
                  <ChefHat size={16} />
                  <span>I am a FoodPreneur / Home Cook</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPartnerType('kitchen')}
                  className={`toggle-btn ${partnerType === 'kitchen' ? 'active' : ''}`}
                >
                  <Building2 size={16} />
                  <span>I am a Cloud Kitchen Operator</span>
                </button>
              </div>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="partner-actual-form">
                  <div className="form-grid-2">
                    <div className="input-field-group">
                      <label>Applicant Full Name</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="e.g. Farida Begum"
                        value={partnerForm.name}
                        onChange={(e) => setPartnerForm({ ...partnerForm, name: e.target.value })}
                      />
                    </div>
                    <div className="input-field-group">
                      <label>Contact Phone Number</label>
                      <input 
                        type="tel" 
                        required 
                        placeholder="+91 98765 43210"
                        value={partnerForm.phone}
                        onChange={(e) => setPartnerForm({ ...partnerForm, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-grid-2">
                    <div className="input-field-group">
                      <label>Email Address</label>
                      <input 
                        type="email" 
                        required 
                        placeholder="chef@gmail.com"
                        value={partnerForm.email}
                        onChange={(e) => setPartnerForm({ ...partnerForm, email: e.target.value })}
                      />
                    </div>
                    <div className="input-field-group">
                      <label>Years of Culinary Experience</label>
                      <select 
                        value={partnerForm.experienceYears}
                        onChange={(e) => setPartnerForm({ ...partnerForm, experienceYears: e.target.value })}
                      >
                        <option>3 - 5 Years</option>
                        <option>5 - 10 Years</option>
                        <option>10 - 20 Years</option>
                        <option>20+ Years Heirloom Master</option>
                      </select>
                    </div>
                  </div>

                  <div className="input-field-group">
                    <label>
                      {partnerType === 'cook' ? 'Primary Regional Cuisine & Signature Dish' : 'Kitchen Infrastructure Facility Details'}
                    </label>
                    <input 
                      type="text" 
                      required 
                      placeholder={partnerType === 'cook' ? 'e.g. Rayalaseema Gongura Mamsam & Pappu Charu' : 'e.g. 600 sq ft commercial facility in HSR Layout'}
                      value={partnerForm.specialty}
                      onChange={(e) => setPartnerForm({ ...partnerForm, specialty: e.target.value })}
                    />
                  </div>

                  <div className="input-field-group">
                    <label>Operating City Area / Pin Code</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. Koramangala 4th Block, Bengaluru"
                      value={partnerForm.cityArea}
                      onChange={(e) => setPartnerForm({ ...partnerForm, cityArea: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="btn btn-yellow btn-submit-partner">
                    <span>Submit Partner Onboarding Profile</span>
                  </button>
                </form>
              ) : (
                <div className="submission-success-pane">
                  <CheckCircle2 size={44} className="check-success-icon" />
                  <h3>Application Successfully Submitted!</h3>
                  <p>
                    Thank you, {partnerForm.name}. Your partner interest profile for FEAzTO {partnerType === 'cook' ? 'FoodPreneur' : 'Cloud Kitchen'} has been recorded. Our regional operations team will reach out within 2 business days for document verification.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .partners-detail-section {
          padding: 80px 0 100px 0;
          background: #FFFFFF;
        }

        .partner-tracks-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 36px;
          margin-bottom: 64px;
        }

        .track-card {
          background: var(--color-warm-white);
          border-radius: var(--radius-lg);
          padding: 36px;
          border: 1px solid rgba(0, 0, 0, 0.08);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.03);
        }

        .track-icon-badge {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: var(--color-brand-yellow-subtle);
          color: #8C6500;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        .track-card h3 {
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--color-ink-black);
          margin-bottom: 12px;
        }

        .track-card p {
          font-size: 0.92rem;
          color: var(--color-text-secondary);
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .track-points {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .track-points li {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--color-ink-black);
        }

        .track-points li svg {
          color: #2E7D32;
        }

        /* Form */
        .partner-form-wrapper {
          max-width: 800px;
          margin: 0 auto;
        }

        .partner-form-card {
          background: #FAFAFA;
          border-radius: var(--radius-lg);
          border: 1.5px solid rgba(0, 0, 0, 0.08);
          padding: 44px;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.04);
        }

        .form-heading-area {
          text-align: center;
          margin-bottom: 32px;
        }

        .form-heading-area h2 {
          font-size: 1.8rem;
          font-weight: 800;
          color: var(--color-ink-black);
          margin-bottom: 8px;
        }

        .form-heading-area p {
          font-size: 0.95rem;
          color: var(--color-text-secondary);
        }

        .type-toggle-switch {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          background: #EAEAEA;
          padding: 6px;
          border-radius: var(--radius-capsule);
          margin-bottom: 32px;
        }

        .toggle-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px;
          border-radius: var(--radius-capsule);
          font-size: 0.86rem;
          font-weight: 700;
          color: #555555;
          transition: all 0.2s;
        }

        .toggle-btn.active {
          background: #FFFFFF;
          color: var(--color-ink-black);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        }

        .partner-actual-form {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .form-grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .input-field-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .input-field-group label {
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--color-ink-black);
        }

        .input-field-group input, .input-field-group select {
          padding: 12px 14px;
          border-radius: 8px;
          border: 1px solid rgba(0, 0, 0, 0.15);
          font-family: inherit;
          font-size: 0.92rem;
          background: #FFFFFF;
          outline: none;
        }

        .input-field-group input:focus, .input-field-group select:focus {
          border-color: var(--color-ink-black);
        }

        .btn-submit-partner {
          margin-top: 10px;
          padding: 16px;
          font-size: 1rem;
        }

        .submission-success-pane {
          text-align: center;
          padding: 40px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .check-success-icon {
          color: #2E7D32;
          margin-bottom: 16px;
        }

        .submission-success-pane h3 {
          font-size: 1.4rem;
          font-weight: 800;
          margin-bottom: 8px;
        }

        .submission-success-pane p {
          color: var(--color-text-secondary);
          line-height: 1.6;
          max-width: 540px;
        }

        @media (max-width: 768px) {
          .partner-tracks-grid {
            grid-template-columns: 1fr;
          }
          .type-toggle-switch {
            grid-template-columns: 1fr;
            border-radius: 12px;
          }
          .form-grid-2 {
            grid-template-columns: 1fr;
          }
          .partner-form-card {
            padding: 24px;
          }
        }
      `}</style>
    </div>
  );
};
