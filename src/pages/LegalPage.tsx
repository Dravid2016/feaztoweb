import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const LegalPage: React.FC<{ type: 'privacy' | 'terms' }> = ({ type }) => {
  const isPrivacy = type === 'privacy';

  return (
    <div className="secondary-page legal-page">
      <section className="page-hero-banner">
        <div className="container">
          <div className="badge-tag">
            <ShieldCheck size={13} />
            <span>Compliance & Trust</span>
          </div>
          <h1 className="page-hero-title">
            {isPrivacy ? 'Privacy & Data Protection Policy' : 'Terms & Conditions of Service'}
          </h1>
          <p className="page-hero-subtitle">
            Last Updated: 16 October 2026 • Governing FEAzTO Technologies Pvt. Ltd. operations in India.
          </p>
        </div>
      </section>

      <section className="legal-body-section">
        <div className="container legal-container">
          <div className="legal-article">
            {isPrivacy ? (
              <>
                <h2>1. Commitment to Privacy</h2>
                <p>
                  FEAzTO Technologies Pvt. Ltd. respects user confidentiality and digital integrity. This policy governs how customer contact information, delivery geolocation, and FoodPreneur profile metrics are collected and secured.
                </p>

                <h2>2. Information We Collect</h2>
                <p>
                  During waitlist registration, pilot signups, or kitchen partner onboarding, we collect:
                </p>
                <ul>
                  <li>Contact details including full name, telephone number, and verified email address.</li>
                  <li>Approximate delivery location and pin code to match nearby cloud kitchens.</li>
                  <li>Culinary preferences, dietary restrictions, and festival event schedules.</li>
                </ul>

                <h2>3. How Information Is Handled</h2>
                <p>
                  We never sell customer or partner data to third-party ad brokers. Data is strictly utilized to coordinate food discovery, dispatch orders, maintain FSSAI food-safety records, and deliver pilot notifications.
                </p>

                <h2>4. Data Security & Storage</h2>
                <p>
                  All data is encrypted in transit using industry-standard TLS 1.3 protocols and securely stored in compliance with the Digital Personal Data Protection (DPDP) Act of India.
                </p>
              </>
            ) : (
              <>
                <h2>1. Acceptance of Terms</h2>
                <p>
                  By accessing the FEAzTO web portal, submitting waitlist interest, or interacting with our mobile applications, you agree to be bound by these Terms of Service.
                </p>

                <h2>2. Food Safety & Kitchen Standards</h2>
                <p>
                  FEAzTO acts as a food discovery and cloud-kitchen enablement platform. All participating FoodPreneurs and cloud kitchen pods adhere to mandatory FSSAI food hygiene certifications. Ingredients are verified for absence of artificial chemical colors and unauthorized preservatives.
                </p>

                <h2>3. Pilot Scope & Availability</h2>
                <p>
                  Select services, including "Book a Cook" and early customer mobile applications, are operating in controlled pilot releases in Bengaluru. Submission of waitlist interest constitutes an inquiry and does not guarantee immediate slot allocation until confirmed by operations dispatch.
                </p>

                <h2>4. Intellectual Property</h2>
                <p>
                  The FEAzTO brand, official logo artwork, "FOOD • CULTURE • CONNECT" tagline, custom cultural imagery, and platform code are proprietary assets of FEAzTO Technologies Pvt. Ltd.
                </p>
              </>
            )}
          </div>
        </div>
      </section>

      <style>{`
        .legal-body-section {
          padding: 80px 0 100px 0;
          background: #FFFFFF;
        }

        .legal-container {
          max-width: 800px;
        }

        .legal-article h2 {
          font-size: 1.45rem;
          font-weight: 800;
          color: var(--color-ink-black);
          margin-top: 36px;
          margin-bottom: 12px;
        }

        .legal-article p {
          font-size: 1rem;
          color: var(--color-text-secondary);
          line-height: 1.75;
          margin-bottom: 16px;
        }

        .legal-article ul {
          margin-left: 24px;
          margin-bottom: 24px;
          color: var(--color-text-secondary);
          line-height: 1.75;
        }
      `}</style>
    </div>
  );
};
