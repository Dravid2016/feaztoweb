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
  ArrowRight,
  HeartHandshake,
  Flame
} from 'lucide-react';

interface KitchenVerificationPageProps {
  navigate?: (route: string) => void;
}

export const KitchenVerificationPage: React.FC<KitchenVerificationPageProps> = ({ navigate }) => {
  const steps = [
    {
      step: '01',
      title: 'Cook Hygiene Verification',
      subtitle: 'Personal Standards & Food Handling',
      icon: <UtensilsCrossed size={28} className="step-icon-svg" />,
      tag: 'Sanitation Baseline',
      description:
        'FEAZTO strictly verifies personal hygiene standards and safe food handling practices for every cook. This includes clean attire, grooming, handwashing protocols, cross-contamination prevention, and clean workstations.',
      keyPoints: [
        'Mandatory grooming & clean apron protocols',
        'Handwashing & glove usage compliance',
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
    <div className="secondary-page kitchen-verification-page">
      {/* Editorial Header */}
      <section className="page-hero-banner">
        <div className="container">
          <div className="badge-tag">
            <Sparkles size={13} />
            <span>Customer Promise & Verification Standards</span>
          </div>
          <h1 className="page-hero-title">
            OUR PROMISE. YOUR TRUST.
          </h1>
          <p className="page-hero-subtitle">
            Every kitchen deserves to be checked. Every customer deserves quality.
          </p>
          <p className="verification-page-intro-text">
            At FEAZTO, trust is not an afterthought—it is our foundation. Before any cloud kitchen or culinary partner lists a single dish on the FEAZTO customer app, they undergo our structured, mandatory <strong>Five-Step Verification Process</strong> to safeguard hygiene, authentic taste, and operational integrity.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="verification-page-body-section">
        <div className="container">

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
                <div className="commitment-badges-wrap">
                  <span className="commitment-eyebrow">Onboarding Commitment</span>
                  <span className="women-empowerment-badge">
                    <Flame size={13} className="flame-icon" />
                    <span>EMPOWERING WOMEN HOME CHEFS & FOODPRENEURS</span>
                  </span>
                </div>

                <h2 className="commitment-title">Rigorous Gatekeeping & Re-Inspection Protocol</h2>

                <div className="women-spotlight-quote">
                  <strong>Empowering Women Cloud Kitchen Leaders:</strong> We are especially committed to backing women culinary champions, homemakers, and culinary artists—giving them a professional, verified launchpad to turn heirloom kitchen traditions into thriving, independent food businesses.
                </div>

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
                  <HeartHandshake size={16} />
                  <span>Partner With Us</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* The 5 Verification Steps Displayed Fully on this Dedicated Page */}
          <div className="verification-steps-header">
            <span className="steps-eyebrow">Comprehensive Protocol</span>
            <h2 className="steps-title">The Five-Step Verification Process</h2>
            <p className="steps-subtitle">Every onboarding cloud kitchen partner is independently evaluated across each benchmark.</p>
          </div>

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

          {/* Customer Trust Message */}
          <div className="customer-trust-banner">
            <div className="trust-banner-badge">Our Covenant with Food Lovers</div>
            <h3 className="trust-banner-title">A CLEAR AND RESPONSIBLE PROMISE</h3>
            <p className="trust-banner-text">
              FEAZTO is committed to checking its cloud kitchen partners against the verification standards described above. These checks are intended to support customer confidence in kitchen hygiene, food quality, and operational readiness.
            </p>
          </div>

          {/* Important Regulatory Note & Statutory Clarity */}
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
      </section>

      <style>{`
        .kitchen-verification-page {
          padding-bottom: 120px;
        }

        .verification-page-intro-text {
          font-size: 1.05rem;
          line-height: 1.7;
          color: #4A4A4A;
          max-width: 820px;
          margin: 18px auto 0;
          font-weight: 500;
        }

        .verification-page-intro-text strong {
          color: #874700;
        }

        .verification-page-body-section {
          padding-top: 30px;
        }

        /* Liquid Glass Yellow Gradient Approval Commitment Card */
        .approval-commitment-card {
          position: relative;
          background: linear-gradient(135deg, rgba(255, 238, 160, 0.88) 0%, rgba(254, 215, 78, 0.78) 50%, rgba(245, 183, 0, 0.88) 100%);
          backdrop-filter: blur(28px) saturate(200%);
          -webkit-backdrop-filter: blur(28px) saturate(200%);
          border: 1.5px solid rgba(255, 255, 255, 0.85);
          color: #111111;
          border-radius: 28px;
          padding: 40px 42px;
          margin-bottom: 56px;
          overflow: hidden;
          box-shadow: 0 24px 60px rgba(180, 115, 0, 0.22),
                      inset 0 2px 4px rgba(255, 255, 255, 0.9),
                      inset 0 -2px 6px rgba(180, 120, 0, 0.15);
        }

        .commitment-card-glow {
          position: absolute;
          top: -30%;
          right: -10%;
          width: 50%;
          height: 160%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.5) 0%, rgba(254, 215, 78, 0.25) 45%, rgba(0,0,0,0) 70%);
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
          background: #111111;
          color: #F5B700;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.18), inset 0 1px 2px rgba(255, 255, 255, 0.2);
        }

        .commitment-content-col {
          flex: 1;
          min-width: 280px;
        }

        .commitment-badges-wrap {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 8px;
        }

        .commitment-eyebrow {
          display: inline-block;
          font-size: 0.78rem;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #7A4D00;
        }

        .women-empowerment-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 12px;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.85);
          border: 1px solid rgba(180, 115, 0, 0.35);
          color: #874700;
          font-size: 0.72rem;
          font-weight: 900;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          box-shadow: 0 2px 8px rgba(180, 115, 0, 0.12);
        }

        .flame-icon {
          color: #EA580C;
        }

        .commitment-title {
          font-size: clamp(1.4rem, 2.4vw, 1.95rem);
          font-weight: 900;
          color: #0A0A0A;
          margin: 0 0 12px;
          line-height: 1.25;
          letter-spacing: -0.025em;
        }

        .women-spotlight-quote {
          background: rgba(255, 255, 255, 0.45);
          backdrop-filter: blur(24px) saturate(180%);
          -webkit-backdrop-filter: blur(24px) saturate(180%);
          border: 1.5px solid rgba(255, 255, 255, 0.85);
          border-left: 4px solid #C07000;
          border-radius: 16px;
          padding: 16px 20px;
          margin: 14px 0 18px;
          font-size: 0.9rem;
          line-height: 1.6;
          color: #1A1A1A;
          box-shadow: 0 10px 30px rgba(180, 115, 0, 0.12),
                      inset 0 1.5px 3px rgba(255, 255, 255, 0.9),
                      inset 0 -1.5px 2px rgba(180, 115, 0, 0.08);
        }

        .women-spotlight-quote strong {
          color: #7A4200;
          font-weight: 900;
        }

        .commitment-body {
          font-size: 0.98rem;
          line-height: 1.6;
          color: #222222;
          margin: 0 0 8px;
          font-weight: 600;
        }

        .commitment-body strong {
          color: #000000;
          font-weight: 800;
        }

        .commitment-subbody {
          font-size: 0.88rem;
          line-height: 1.6;
          color: #444444;
          margin: 0;
          font-weight: 500;
        }

        .commitment-action-col {
          flex-shrink: 0;
        }

        .commitment-partner-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 14px 26px;
          font-weight: 900;
          font-size: 0.94rem;
          background: #111111 !important;
          color: #FFFFFF !important;
          border: 1.5px solid #111111 !important;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
        }

        .commitment-partner-btn:hover {
          background: #2b2b2b !important;
          transform: translateY(-2px);
        }

        /* Steps Section Header */
        .verification-steps-header {
          text-align: center;
          margin-bottom: 36px;
        }

        .steps-eyebrow {
          font-size: 0.78rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #874700;
          display: block;
          margin-bottom: 8px;
        }

        .steps-title {
          font-size: clamp(1.6rem, 2.8vw, 2.2rem);
          font-weight: 900;
          color: #111111;
          letter-spacing: -0.02em;
          margin: 0 0 8px;
        }

        .steps-subtitle {
          font-size: 0.98rem;
          color: #666666;
          max-width: 640px;
          margin: 0 auto;
        }

        /* 5-Step Process Cards Grid */
        .verification-steps-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 18px;
          margin-bottom: 50px;
          position: relative;
        }

        .verification-step-card {
          background: rgba(255, 255, 255, 0.95);
          border: 1.5px solid rgba(245, 183, 0, 0.35);
          border-radius: 20px;
          padding: 24px 20px;
          display: flex;
          flex-direction: column;
          position: relative;
          box-shadow: 0 10px 28px rgba(135, 71, 0, 0.08);
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease, border-color 0.3s ease;
        }

        .verification-step-card:hover {
          transform: translateY(-6px);
          border-color: #F5B700;
          box-shadow: 0 16px 36px rgba(245, 183, 0, 0.22);
        }

        .step-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 18px;
        }

        .step-number-bubble {
          font-family: var(--font-heading, inherit);
          font-size: 0.88rem;
          font-weight: 900;
          color: #FFFFFF;
          background: #111111;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .step-tag-pill {
          font-size: 0.68rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          color: #874700;
          background: rgba(245, 183, 0, 0.16);
          padding: 4px 10px;
          border-radius: 9999px;
        }

        .step-icon-wrapper {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: linear-gradient(135deg, rgba(255, 244, 204, 0.9) 0%, rgba(255, 222, 89, 0.5) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #874700;
          margin-bottom: 16px;
        }

        .step-card-title {
          font-size: 1.05rem;
          font-weight: 800;
          color: #111111;
          margin: 0 0 6px;
          line-height: 1.3;
        }

        .step-card-subtitle {
          font-size: 0.76rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.03em;
          color: #B47300;
          margin-bottom: 12px;
        }

        .step-card-description {
          font-size: 0.85rem;
          line-height: 1.55;
          color: #555555;
          margin-bottom: 18px;
          flex-grow: 1;
        }

        .step-points-list {
          border-top: 1px dashed rgba(0, 0, 0, 0.1);
          padding-top: 14px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .step-point-row {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 0.78rem;
          color: #333333;
          line-height: 1.4;
        }

        .step-check-bullet {
          color: #16A34A;
          flex-shrink: 0;
          margin-top: 1px;
        }

        /* Customer Trust Message Banner */
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
          background: rgba(255, 255, 255, 0.85);
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

        @media (max-width: 1100px) {
          .verification-steps-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
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

          .verification-steps-grid {
            grid-template-columns: 1fr;
          }

          .customer-trust-banner {
            padding: 26px 20px;
          }
        }
      `}</style>
    </div>
  );
};
