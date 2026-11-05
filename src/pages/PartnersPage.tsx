import { FeaztoSurplusSection } from '../components/FeaztoSurplusSection';
import React, { useState } from 'react';
import { Sparkles, Building2, ChefHat, CheckCircle2, Mail, Send, ExternalLink } from 'lucide-react';

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

    const subject = encodeURIComponent(
      `Cloud Kitchen Partner Registration: ${partnerForm.name} (${partnerType === 'cook' ? 'FoodPreneur Cook' : 'Cloud Kitchen Operator'})`
    );
    const body = encodeURIComponent(
      `Hi feazto Team,\n\nI would like to register as a Cloud Kitchen Partner on feazto.\n\n` +
      `── Partner Details ──\n` +
      `Partner Track: ${partnerType === 'cook' ? 'FoodPreneur / Home Cook' : 'Cloud Kitchen Operator'}\n` +
      `Full Name: ${partnerForm.name}\n` +
      `Phone: ${partnerForm.phone}\n` +
      `Email: ${partnerForm.email}\n` +
      `Experience: ${partnerForm.experienceYears}\n` +
      `Cuisine / Infrastructure Specialty: ${partnerForm.specialty}\n` +
      `Operating City / Area: ${partnerForm.cityArea}\n\n` +
      `Looking forward to the kitchen audit and onboarding process.\n\nBest regards,\n${partnerForm.name}`
    );

    // Open mail client addressed to feazto26@gmail.com
    window.location.href = `mailto:feazto26@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="secondary-page partners-page">
      <section className="page-hero-banner">
        <div className="container">
          <div className="badge-tag">
            <Sparkles size={13} />
            <span>Co Create Culinary Wealth</span>
          </div>
          <h1 className="page-hero-title">Partner with feazto</h1>
          <p className="page-hero-subtitle">
            Whether you are a seasoned home cook with secret family recipes or a cloud kitchen operator seeking verified regional brands, feazto provides the tools for lasting success.
          </p>
        </div>
      </section>

      <section className="partners-detail-section">
        <div className="container">
          {/* Models Overview */}
          <div className="partner-tracks-grid">
            <div className="track-card">
              <div className="track-icon-badge">
                <ChefHat size={24} fill="currentColor" />
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
                <Building2 size={24} fill="currentColor" />
              </div>
              <h3>For Cloud Kitchen Infrastructure Operators</h3>
              <p>Monetize underutilized commercial cooking space by hosting authenticated feazto FoodPreneur batches during off peak hours with standardized SOPs and telemetry.</p>
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
                <h2>Cloud Kitchen Partner Registration</h2>
                <p>Register your kitchen infrastructure or home cooking craft. Submit your details directly to our partner onboarding desk at <strong>feazto26@gmail.com</strong>.</p>
                <div className="mail-registration-badge">
                  <Mail size={15} />
                  <span>Official Onboarding Mail: <strong>feazto26@gmail.com</strong></span>
                </div>
              </div>

              {/* Type Switcher */}
              <div className="type-toggle-switch">
                <button
                  type="button"
                  onClick={() => setPartnerType('cook')}
                  className={`toggle-btn ${partnerType === 'cook' ? 'active' : ''}`}
                >
                  <ChefHat size={16} fill="currentColor" />
                  <span>I am a FoodPreneur / Home Cook</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPartnerType('kitchen')}
                  className={`toggle-btn ${partnerType === 'kitchen' ? 'active' : ''}`}
                >
                  <Building2 size={16} fill="currentColor" />
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
                    <Send size={16} />
                    <span>Send Registration</span>
                  </button>
                  <p className="partner-submit-hint">Sent directly to feazto26@gmail.com</p>
                </form>
              ) : (
                <div className="submission-success-pane">
                  <CheckCircle2 size={44} className="check-success-icon" />
                  <h3>Application Ready & Email Client Opened!</h3>
                  <p>
                    Thank you, {partnerForm.name}. Your partner interest profile for feazto {partnerType === 'cook' ? 'FoodPreneur' : 'Cloud Kitchen'} has been composed to <strong>feazto26@gmail.com</strong>.
                  </p>
                  <div className="mail-fallback-box">
                    <p className="fallback-hint">If your email client did not open automatically, you can send an email directly to:</p>
                    <a href="mailto:feazto26@gmail.com" className="direct-mail-chip">
                      <Mail size={16} />
                      <span>feazto26@gmail.com</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>
                  <button 
                    type="button" 
                    onClick={() => setSubmitted(false)} 
                    className="btn btn-sm mt-3"
                    style={{ background: '#ECECEC', color: '#222' }}
                  >
                    Edit Registration Info
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── FUTURE ADD-ON: FEAZTO SURPLUS & RESCUE REVENUE ENGINE ── */}
      <section className="partners-future-addons-section">
        <div className="container">
          <div className="future-addons-header">
            <div className="future-badge">
              <Sparkles size={13} />
              <span>Future Add-On For Registered Kitchens</span>
            </div>
            <h2 className="future-addons-title">feazto Surplus & Zero Food Waste Engine</h2>
            <p className="future-addons-subtitle">
              Coming to your kitchen dashboard: Monetize daily batch preparation surplus with instant neighborhood rescue orders, automated POS telemetry, and zero commission fees.
            </p>
          </div>

          <div className="future-addons-card-wrapper">
            <FeaztoSurplusSection navigate={() => {
              window.scrollTo({ top: 350, behavior: 'smooth' });
            }} />
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

        .mail-registration-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 14px;
          padding: 8px 18px;
          border-radius: 9999px;
          background: #FFF3C4;
          border: 1px solid rgba(181, 132, 0, 0.35);
          color: #7A5B00;
          font-size: 0.88rem;
          font-weight: 600;
        }

        .mail-registration-badge strong {
          color: #111111;
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
          padding: 14px 24px;
          font-size: 0.98rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          white-space: normal;
          text-align: center;
          line-height: 1.3;
        }

        .partner-submit-hint {
          text-align: center;
          font-size: 0.78rem;
          color: #7A5B00;
          font-weight: 600;
          margin-top: -8px;
          margin-bottom: 0;
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

        .mail-fallback-box {
          margin-top: 20px;
          padding: 16px 20px;
          background: #FFFFFF;
          border: 1px solid rgba(181, 132, 0, 0.25);
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }

        .fallback-hint {
          font-size: 0.84rem;
          color: #666666 !important;
          margin: 0;
        }

        .direct-mail-chip {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #FAC921;
          color: #111111;
          padding: 9px 18px;
          border-radius: 9999px;
          font-weight: 700;
          font-size: 0.92rem;
          text-decoration: none;
          box-shadow: 0 4px 12px rgba(250, 201, 33, 0.35);
          transition: transform 0.2s ease;
        }

        .direct-mail-chip:hover {
          transform: translateY(-2px);
          background: #F5B700;
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

        /* ── FUTURE ADD-ONS SECTION ── */
        .partners-future-addons-section {
          padding: 80px 0 100px 0;
          background: #FFFDF5;
          border-top: 1.5px dashed rgba(181, 132, 0, 0.3);
        }

        .future-addons-header {
          text-align: center;
          max-width: 760px;
          margin: 0 auto 48px auto;
        }

        .future-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 6px 16px;
          border-radius: var(--radius-capsule, 9999px);
          background: #FFF3C4;
          border: 1px solid rgba(181, 132, 0, 0.35);
          color: #7A5B00;
          font-family: var(--font-heading);
          font-size: 0.8rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 16px;
        }

        .future-addons-title {
          font-size: clamp(2rem, 3.8vw, 2.7rem);
          font-weight: 800;
          color: var(--color-ink-black);
          line-height: 1.25;
          margin-bottom: 14px;
          letter-spacing: -0.02em;
        }

        .future-addons-subtitle {
          font-size: 1.05rem;
          color: #555555;
          line-height: 1.65;
        }

        .future-addons-card-wrapper {
          width: 100%;
        }

        .future-addons-card-wrapper .feazto-surplus-section {
          padding-top: 0;
          padding-bottom: 0;
        }
      `}</style>
    </div>
  );
};
