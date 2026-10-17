import React, { useState } from 'react';
import { Sparkles, Mail, MapPin, Send, CheckCircle2, ShieldCheck } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    subject: 'Customer Query',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="secondary-page contact-page">
      <section className="page-hero-banner">
        <div className="container">
          <div className="badge-tag">
            <Sparkles size={13} />
            <span>Connect with Us</span>
          </div>
          <h1 className="page-hero-title">Contact the FEAzTO Team</h1>
          <p className="page-hero-subtitle">
            Have questions about our culinary heritage, pilot kitchen rollout, or enterprise catering? We are here to help.
          </p>
        </div>
      </section>

      <section className="contact-detail-section">
        <div className="container contact-grid-layout">
          {/* Left Column: Direct Info */}
          <div className="contact-info-pane">
            <h2 className="contact-subhead">Headquarters & Operations</h2>
            <p className="contact-lead-text">
              FEAzTO Technologies operates regional culinary hubs with central food safety and quality testing facilities.
            </p>

            <div className="contact-channels-list">
              <div className="channel-box">
                <MapPin size={22} className="ch-icon" />
                <div>
                  <strong>Registered Office</strong>
                  <p>FEAzTO Technologies Pvt. Ltd.<br />Bengaluru Central, Karnataka 560001, India</p>
                </div>
              </div>

              <div className="channel-box">
                <Mail size={22} className="ch-icon" />
                <div>
                  <strong>Email Inquiries</strong>
                  <p>hello@feazto.com • partners@feazto.com</p>
                </div>
              </div>

              <div className="channel-box">
                <ShieldCheck size={22} className="ch-icon" />
                <div>
                  <strong>Food Safety & Hygiene Grievance</strong>
                  <p>hygiene@feazto.com • FSSAI Compliance Desk</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Working Contact Form */}
          <div className="contact-form-pane">
            <div className="contact-form-card">
              <h3>Send an In-Depth Message</h3>
              <p>Our concierge responds within 24 operational hours.</p>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="contact-actual-form">
                  <div className="form-group">
                    <label>Your Name</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. Anandita Sen"
                      value={contactData.name}
                      onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label>Email Address</label>
                    <input 
                      type="email" 
                      required 
                      placeholder="name@domain.com"
                      value={contactData.email}
                      onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label>Subject</label>
                    <select 
                      value={contactData.subject}
                      onChange={(e) => setContactData({ ...contactData, subject: e.target.value })}
                    >
                      <option>Customer & Early Pilot Access</option>
                      <option>FoodPreneur & Kitchen Partnership</option>
                      <option>Hygiene & Dietary Verification</option>
                      <option>Media & Press Inquiry</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Your Message</label>
                    <textarea 
                      required 
                      rows={4}
                      placeholder="Please let us know how we can assist you..."
                      value={contactData.message}
                      onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary btn-submit-contact">
                    <Send size={16} />
                    <span>Send Message</span>
                  </button>
                </form>
              ) : (
                <div className="contact-success-pane">
                  <CheckCircle2 size={40} className="contact-success-icon" />
                  <h4>Message Dispatched!</h4>
                  <p>Thank you, {contactData.name}. Your message regarding "{contactData.subject}" has been delivered to our support desk.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .contact-detail-section {
          padding: 80px 0 100px 0;
          background: #FFFFFF;
        }

        .contact-grid-layout {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 60px;
          align-items: flex-start;
        }

        .contact-subhead {
          font-size: 1.8rem;
          font-weight: 800;
          color: var(--color-ink-black);
          margin-bottom: 12px;
        }

        .contact-lead-text {
          font-size: 1.05rem;
          color: var(--color-text-secondary);
          line-height: 1.6;
          margin-bottom: 36px;
        }

        .contact-channels-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .channel-box {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          background: var(--color-warm-white);
          padding: 20px;
          border-radius: var(--radius-md);
          border: 1px solid rgba(0, 0, 0, 0.06);
        }

        .ch-icon {
          color: #8C6500;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .channel-box strong {
          display: block;
          font-size: 0.95rem;
          color: var(--color-ink-black);
          margin-bottom: 4px;
        }

        .channel-box p {
          font-size: 0.88rem;
          color: var(--color-text-secondary);
          line-height: 1.45;
        }

        .contact-form-card {
          background: var(--color-warm-white);
          border-radius: var(--radius-lg);
          padding: 36px;
          border: 1px solid rgba(0, 0, 0, 0.08);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.04);
        }

        .contact-form-card h3 {
          font-size: 1.4rem;
          font-weight: 800;
          margin-bottom: 6px;
        }

        .contact-form-card p {
          font-size: 0.88rem;
          color: var(--color-text-secondary);
          margin-bottom: 24px;
        }

        .contact-actual-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-group label {
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--color-ink-black);
        }

        .form-group input, .form-group select, .form-group textarea {
          padding: 12px 14px;
          border-radius: 8px;
          border: 1px solid rgba(0, 0, 0, 0.15);
          font-family: inherit;
          font-size: 0.92rem;
          background: #FFFFFF;
          outline: none;
        }

        .form-group input:focus, .form-group select:focus, .form-group textarea:focus {
          border-color: var(--color-ink-black);
        }

        .btn-submit-contact {
          padding: 14px;
          font-size: 0.95rem;
          margin-top: 8px;
        }

        .contact-success-pane {
          text-align: center;
          padding: 40px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .contact-success-icon {
          color: #2E7D32;
          margin-bottom: 16px;
        }

        @media (max-width: 860px) {
          .contact-grid-layout {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};
