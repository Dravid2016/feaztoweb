import React from 'react';
import { Sparkles, Search, UtensilsCrossed, ChefHat, Bike, Heart } from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      stepNum: '01',
      icon: <Search size={22} />,
      title: 'Discover Heritage Menus',
      desc: 'Browse by culinary region, heirloom specialties, or certified local FoodPreneurs around your neighborhood.'
    },
    {
      stepNum: '02',
      icon: <UtensilsCrossed size={22} />,
      title: 'Order with Dietary Transparency',
      desc: 'View comprehensive ingredient lists, cold-pressed oil origins, spice heat profiles, and zero-additive assurances.'
    },
    {
      stepNum: '03',
      icon: <ChefHat size={22} />,
      title: 'Small-Batch Preparation',
      desc: 'Food is prepared fresh to order in certified cloud kitchens following calibrated slow-cooking protocols.'
    },
    {
      stepNum: '04',
      icon: <Bike size={22} />,
      title: 'Thermal Precision Dispatch',
      desc: 'Delivered in tamper-proof thermal packaging to preserve aroma, crispness, and temperature integrity.'
    },
    {
      stepNum: '05',
      icon: <Heart size={22} />,
      title: 'Relish & Support Cooks',
      desc: 'Enjoy authentic home food while directly supporting regional cooks and keeping family traditions alive.'
    }
  ];

  return (
    <section className="how-it-works-section">
      <div className="container">
        <div className="how-header">
          <div className="badge-tag">
            <Sparkles size={13} />
            <span>The Product Journey</span>
          </div>
          <h2 className="how-title">How FEAzTO Works</h2>
          <p className="how-subtitle">
            From heirloom recipes to your dining table: a coordinated ecosystem balancing kitchen precision, food safety, and customer delight.
          </p>
        </div>

        <div className="steps-flow-grid">
          {steps.map((st) => (
            <div key={st.stepNum} className="step-card">
              <div className="step-num-pill">{st.stepNum}</div>
              <div className="step-icon-circle">{st.icon}</div>
              <h3 className="step-title">{st.title}</h3>
              <p className="step-text">{st.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .how-it-works-section {
          padding-top: 100px;
          padding-bottom: 100px;
          background: linear-gradient(180deg, #FDECB9 0%, #FEF8E6 50%, #FFFDF7 100%);
        }

        .how-header {
          text-align: center;
          max-width: 680px;
          margin: 0 auto 56px auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .how-title {
          font-size: clamp(2rem, 3.4vw, 2.8rem);
          font-weight: 800;
          color: var(--color-ink-black);
          margin-top: 18px;
          margin-bottom: 14px;
        }

        .how-subtitle {
          font-size: 1.05rem;
          color: var(--color-text-secondary);
          line-height: 1.6;
        }

        .steps-flow-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
          gap: 24px;
          position: relative;
        }

        .step-card {
          background: var(--color-warm-white);
          border-radius: var(--radius-lg);
          padding: 30px 22px;
          border: 1px solid rgba(0, 0, 0, 0.06);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          position: relative;
          transition: transform 0.25s ease;
        }

        .step-card:hover {
          transform: translateY(-4px);
        }

        .step-num-pill {
          font-size: 0.76rem;
          font-weight: 800;
          color: #8C6500;
          background: var(--color-brand-yellow-subtle);
          padding: 4px 10px;
          border-radius: var(--radius-capsule);
          margin-bottom: 16px;
          border: 1px solid rgba(255, 210, 51, 0.4);
        }

        .step-icon-circle {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-ink-black);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          margin-bottom: 18px;
        }

        .step-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--color-ink-black);
          margin-bottom: 10px;
          line-height: 1.3;
        }

        .step-text {
          font-size: 0.88rem;
          color: var(--color-text-secondary);
          line-height: 1.55;
        }
      `}</style>
    </section>
  );
};
