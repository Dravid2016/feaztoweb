import React from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  UtensilsCrossed, 
  Search, 
  FileText, 
  GraduationCap, 
  AlertTriangle,
  ArrowRight
} from 'lucide-react';

interface KitchenVerificationSectionProps {
  navigate?: (route: string) => void;
}

export const KitchenVerificationSection: React.FC<KitchenVerificationSectionProps> = ({ navigate }) => {
  const steps = [
    {
      step: '01',
      title: 'Cook Hygiene Verification',
      subtitle: 'Personal Standards & Food Handling',
      icon: <UtensilsCrossed size={28} className="step-icon-svg" />,
      tag: 'Sanitation Baseline',
      description:
        'FEAZTO strictly verifies personal hygiene standards and safe food-handling practices for every cook. This includes clean attire, grooming, handwashing protocols, cross-contamination prevention, and clean workstations.',
      keyPoints: [
        'Mandatory grooming & clean apron protocols',
        'Handwashing & glove-usage compliance',
        'Rigorous cross-contamination prevention'
      ]
    },
    {
      step: '02',
      title: 'Physical Kitchen Inspection',
      subtitle: 'Premises, Cleanliness & Safety',
      icon: <Search size={28} className="step-icon-svg" />,
      tag: 'On-Ground Audit',
      description:
        'A comprehensive physical inspection of kitchen premises, equipment maintenance, pest-control measures, ventilation, potable water supply, raw ingredient storage, and fire safety arrangements.',
      keyPoints: [
        'Appliance, surface & utensil sanitation audit',
        'Adequate ventilation & verified potable water',
        'Safe dry & cold storage temperature zones'
      ]
    },
    {
      step: '03',
      title: 'Food Quality & Taste Evaluation',
      subtitle: 'Sensory & Packaging Benchmark',
      icon: <ShieldCheck size={28} className="step-icon-svg" />,
      tag: 'Recipe Integrity',
      description:
        'Representative menu dishes are thoroughly evaluated for taste, ingredient freshness, presentation, portion sizing, recipe consistency, and secure spill-proof thermal delivery packaging.',
      keyPoints: [
        'Heirloom taste, freshness & portion sizing',
        'Authentic regional spices & raw produce review',
        'Spill-proof, eco-friendly delivery packaging test'
      ]
    },
    {
      step: '04',
      title: 'Legal & Document Verification',
      subtitle: 'Licensing & Identity Validation',
      icon: <FileText size={28} className="step-icon-svg" />,
      tag: 'Statutory Compliance',
      description:
        'Thorough validation of FSSAI registration or statutory licence, government-issued business identity documents, operating kitchen address proofs, and compliance paperwork.',
      keyPoints: [
        'Active FSSAI registration or licence authentication',
        'Verified kitchen address & premises legal title',
        'Owner KYC & business entity verification'
      ]
    },
    {
      step: '05',
      title: 'Mandatory FEAZTO Partner Workshop',
      subtitle: 'Operational Readiness & Kitchen-OS',
      icon: <GraduationCap size={28} className="step-icon-svg" />,
      tag: 'Academy Training',
      description:
        'Partners complete an intensive onboarding workshop covering advanced hygiene, food safety standards, Kitchen-OS dispatch workflows, customer service ethics, and courier handover routines.',
      keyPoints: [
        'Kitchen-OS order dispatch & prep-time management',
        'Temperature-safe courier handover procedure',
        'Customer satisfaction & zero-compromise hygiene'
      ]
    }
  ];

  return (
    <section className="kitchen-verification-section" id="kitchen-verification">
      <div className="verification-container">
        
        {/* Section Header */}
        <div className="verification-header-center">
          <div className="verification-badge">
            <Sparkles size={14} className="badge-sparkle-icon" />
            <span>Customer Promise & Verification</span>
          </div>

          <h2 className="verification-main-title">
            OUR PROMISE. YOUR TRUST.
          </h2>

          <p className="verification-subtitle">
            Every kitchen deserves to be checked. Every customer deserves quality.
          </p>

          <p className="verification-intro-text">
            At FEAZTO, trust is not an afterthought—it is our foundation. Before any cloud kitchen or culinary partner lists a single dish on the FEAZTO customer app, they undergo our structured, mandatory <strong>Five-Step Verification Process</strong> to safeguard hygiene, authentic taste, and operational integrity.
          </p>
        </div>

        {/* 5-Step Process Cards */}
        <div className="verification-steps-grid">
          {steps.map((item, idx) => (
            <div key={item.step} className="verification-step-card">
              <div className="step-card-header">
                <div className="step-number-bubble">{item.step}</div>
                <div className="step-tag-pill">{item.tag}</div>
              </div>

              <div className="step-icon-wrapper">
                {item.icon}
              </div>

              <h3 className="step-card-title">{item.title}</h3>
              <div className="step-card-subtitle">{item.subtitle}</div>
              <p className="step-card-description">{item.description}</p>

              <div className="step-points-list">
                {item.keyPoints.map((point, pIdx) => (
                  <div key={pIdx} className="step-point-row">
                    <CheckCircle2 size={15} className="step-check-bullet" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              {idx < steps.length - 1 && (
                <div className="step-card-connector-line" />
              )}
            </div>
          ))}
        </div>

        {/* Highlighted Approval Commitment Box */}
        <div className="approval-commitment-card">
          <div className="commitment-card-glow" />
          <div className="commitment-inner-layout">
            <div className="commitment-icon-col">
              <div className="commitment-shield-icon">
                <ShieldCheck size={36} />
              </div>
            </div>

            <div className="commitment-content-col">
              <span className="commitment-eyebrow">Onboarding Commitment</span>
              <h3 className="commitment-title">Rigorous Gatekeeping & Re-Inspection Protocol</h3>
              <p className="commitment-body">
                A cloud kitchen is considered for FEAZTO onboarding <strong>only after</strong> all mandatory physical checks, document verification, and the partner training workshop have been completely satisfied.
              </p>
              <p className="commitment-subbody">
                If any hygiene, infrastructural, or food safety discrepancy is detected during our audit, onboarding is paused immediately. The kitchen is required to rectify the issue and undergo a thorough re-inspection before customer orders can ever be received.
              </p>
            </div>

            <div className="commitment-action-col">
              <button 
                type="button"
                onClick={() => navigate?.('/partners')} 
                className="btn btn-yellow commitment-partner-btn"
              >
                <span>Partner With Us</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Customer Trust Message */}
        <div className="customer-trust-banner">
          <div className="trust-banner-badge">Our Covenant with Food Lovers</div>
          <h3 className="trust-banner-title">A CLEAR AND RESPONSIBLE PROMISE</h3>
          <p className="trust-banner-text">
            FEAZTO is committed to checking its cloud kitchen partners against the verification standards described above. These checks are intended to support customer confidence in kitchen hygiene, food quality, and operational readiness.
          </p>
        </div>

        {/* Important Statutory Disclaimer / Note */}
        <div className="verification-disclaimer-box">
          <div className="disclaimer-header">
            <AlertTriangle size={18} className="disclaimer-icon" />
            <h4 className="disclaimer-heading">Important Regulatory Note & Statutory Clarity</h4>
          </div>
          <p className="disclaimer-text">
            FEAZTO verification is an independent, additional platform quality and food-hygiene assessment designed to maintain high culinary standards across our community. It does not replace statutory government inspections, FSSAI regulatory enforcement, municipal licences, or the direct legal obligations and liabilities of independent food business operators under applicable law.
          </p>
        </div>

      </div>

      <style>{`
        .kitchen-verification-section {
          padding: 100px 0 120px;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 248, 220, 0.45) 25%, rgba(255, 244, 190, 0.55) 75%, rgba(255, 255, 255, 0) 100%);
          position: relative;
          width: 100%;
        }

        .verification-container {
          max-width: 1220px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* Header */
        .verification-header-center {
          text-align: center;
          max-width: 820px;
          margin: 0 auto 64px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .verification-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 6px 16px;
          border-radius: 9999px;
          background: rgba(245, 183, 0, 0.18);
          border: 1px solid rgba(245, 183, 0, 0.4);
          color: #8C6200;
          font-size: 0.84rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          margin-bottom: 16px;
        }

        .badge-sparkle-icon {
          color: #D97706;
        }

        .verification-main-title {
          font-size: clamp(2.3rem, 4.2vw, 3.4rem);
          font-weight: 900;
          color: var(--color-ink-black, #111111);
          letter-spacing: -0.03em;
          line-height: 1.15;
          margin: 0 0 14px;
          text-transform: uppercase;
        }

        .verification-subtitle {
          font-size: clamp(1.1rem, 2vw, 1.35rem);
          font-weight: 700;
          color: #925C00;
          margin: 0 0 20px;
          line-height: 1.4;
        }

        .verification-intro-text {
          font-size: 1.05rem;
          color: var(--color-text-secondary, #555555);
          line-height: 1.7;
          margin: 0;
        }

        /* 5-Step Process Grid */
        .verification-steps-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
          margin-bottom: 60px;
          position: relative;
        }

        @media (min-width: 1100px) {
          .verification-steps-grid {
            grid-template-columns: repeat(5, 1fr);
          }
        }

        .verification-step-card {
          background: rgba(255, 255, 255, 0.95);
          border: 1.5px solid rgba(245, 183, 0, 0.22);
          border-radius: 24px;
          padding: 26px 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.02);
          display: flex;
          flex-direction: column;
          position: relative;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease, border-color 0.3s ease;
        }

        .verification-step-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 18px 42px rgba(245, 183, 0, 0.16);
          border-color: rgba(245, 183, 0, 0.6);
        }

        .step-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 18px;
        }

        .step-number-bubble {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #111111;
          color: #FFFFFF;
          font-weight: 800;
          font-size: 0.88rem;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
        }

        .step-tag-pill {
          font-size: 0.68rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          padding: 4px 10px;
          border-radius: 9999px;
          background: rgba(245, 183, 0, 0.15);
          color: #8C6200;
        }

        .step-icon-wrapper {
          width: 58px;
          height: 58px;
          border-radius: 18px;
          background: linear-gradient(135deg, #FFF6D6 0%, #FFEBA3 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
          color: #B47300;
          box-shadow: inset 0 1px 2px rgba(255, 255, 255, 0.8);
          transition: transform 0.25s ease;
        }

        .verification-step-card:hover .step-icon-wrapper {
          transform: scale(1.08) rotate(4deg);
          color: #925C00;
        }

        .step-card-title {
          font-size: 1.15rem;
          font-weight: 800;
          color: #111111;
          line-height: 1.3;
          margin: 0 0 6px;
        }

        .step-card-subtitle {
          font-size: 0.78rem;
          font-weight: 700;
          color: #B47300;
          text-transform: uppercase;
          letter-spacing: 0.03em;
          margin-bottom: 12px;
        }

        .step-card-description {
          font-size: 0.85rem;
          color: #555555;
          line-height: 1.55;
          margin: 0 0 18px;
          flex-grow: 1;
        }

        .step-points-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding-top: 14px;
          border-top: 1px dashed rgba(0, 0, 0, 0.08);
        }

        .step-point-row {
          display: flex;
          align-items: flex-start;
          gap: 7px;
          font-size: 0.76rem;
          color: #333333;
          line-height: 1.35;
          font-weight: 500;
        }

        .step-check-bullet {
          color: #16A34A;
          flex-shrink: 0;
          margin-top: 1px;
        }

        /* Highlighted Approval Commitment Box */
        .approval-commitment-card {
          position: relative;
          background: #111111;
          color: #FFFFFF;
          border-radius: 28px;
          padding: 38px 40px;
          margin-bottom: 48px;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.22);
        }

        .commitment-card-glow {
          position: absolute;
          top: -30%;
          right: -10%;
          width: 50%;
          height: 160%;
          background: radial-gradient(circle, rgba(245, 183, 0, 0.22) 0%, rgba(234, 88, 12, 0.1) 45%, rgba(0,0,0,0) 70%);
          filter: blur(40px);
          pointer-events: none;
        }

        .commitment-inner-layout {
          display: flex;
          align-items: center;
          gap: 28px;
          position: relative;
          z-index: 1;
          flex-wrap: wrap;
        }

        .commitment-icon-col {
          flex-shrink: 0;
        }

        .commitment-shield-icon {
          width: 72px;
          height: 72px;
          border-radius: 22px;
          background: linear-gradient(135deg, #F5B700 0%, #EA580C 100%);
          color: #111111;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 24px rgba(245, 183, 0, 0.35);
        }

        .commitment-content-col {
          flex: 1;
          min-width: 280px;
        }

        .commitment-eyebrow {
          display: inline-block;
          font-size: 0.78rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #F5B700;
          margin-bottom: 6px;
        }

        .commitment-title {
          font-size: clamp(1.4rem, 2.4vw, 1.85rem);
          font-weight: 900;
          color: #FFFFFF;
          margin: 0 0 12px;
          line-height: 1.25;
          letter-spacing: -0.02em;
        }

        .commitment-body {
          font-size: 0.98rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.92);
          margin: 0 0 8px;
        }

        .commitment-body strong {
          color: #F5B700;
        }

        .commitment-subbody {
          font-size: 0.88rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.7);
          margin: 0;
        }

        .commitment-action-col {
          flex-shrink: 0;
        }

        .commitment-partner-btn {
          padding: 15px 28px;
          font-weight: 800;
          font-size: 0.94rem;
        }

        /* Customer Trust Message */
        .customer-trust-banner {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(255, 248, 224, 0.98) 100%);
          border: 2px solid #F5B700;
          border-radius: 24px;
          padding: 34px 36px;
          text-align: center;
          margin-bottom: 36px;
          box-shadow: 0 12px 36px rgba(245, 183, 0, 0.14);
        }

        .trust-banner-badge {
          display: inline-block;
          font-size: 0.78rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: #B47300;
          background: rgba(245, 183, 0, 0.14);
          padding: 5px 14px;
          border-radius: 9999px;
          margin-bottom: 12px;
        }

        .trust-banner-title {
          font-size: clamp(1.3rem, 2.2vw, 1.7rem);
          font-weight: 900;
          color: #111111;
          letter-spacing: -0.01em;
          margin: 0 0 12px;
        }

        .trust-banner-text {
          font-size: 1.02rem;
          line-height: 1.65;
          color: #444444;
          max-width: 860px;
          margin: 0 auto;
          font-weight: 500;
        }

        /* Statutory Disclaimer Box */
        .verification-disclaimer-box {
          background: rgba(255, 255, 255, 0.75);
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-left: 4px solid #D97706;
          border-radius: 14px;
          padding: 20px 24px;
        }

        .disclaimer-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 6px;
        }

        .disclaimer-icon {
          color: #D97706;
          flex-shrink: 0;
        }

        .disclaimer-heading {
          font-size: 0.92rem;
          font-weight: 800;
          color: #111111;
          margin: 0;
        }

        .disclaimer-text {
          font-size: 0.82rem;
          line-height: 1.6;
          color: #666666;
          margin: 0;
        }

        @media (max-width: 768px) {
          .kitchen-verification-section {
            padding: 70px 0 90px;
          }

          .approval-commitment-card {
            padding: 28px 24px;
          }

          .commitment-inner-layout {
            flex-direction: column;
            align-items: flex-start;
          }

          .commitment-action-col {
            width: 100%;
          }

          .commitment-partner-btn {
            width: 100%;
            justify-content: center;
          }

          .customer-trust-banner {
            padding: 26px 20px;
          }
        }
      `}</style>
    </section>
  );
};

