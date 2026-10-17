import React, { useState } from 'react';
import { FAQS } from '../data/feaztoData';
import { Sparkles, ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';

interface FAQPageProps {
  navigate: (route: string) => void;
}

export const FAQPage: React.FC<FAQPageProps> = ({ navigate }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const categories = ['All', 'About', 'Kitchens', 'App'];

  const filteredFaqs = activeCategory === 'All' 
    ? FAQS 
    : FAQS.filter(f => f.category === activeCategory);

  return (
    <div className="secondary-page faq-page">
      <section className="page-hero-banner">
        <div className="container">
          <div className="badge-tag">
            <Sparkles size={13} />
            <span>Knowledge Base</span>
          </div>
          <h1 className="page-hero-title">Frequently Asked Questions</h1>
          <p className="page-hero-subtitle">
            Grounded answers regarding FEAzTO’s mission, food discovery model, FoodPreneur standards, and app release roadmap.
          </p>
        </div>
      </section>

      <section className="faq-page-content">
        <div className="container">
          <div className="faq-category-pills">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => { setActiveCategory(cat); setOpenIndex(0); }}
                className={`category-pill-btn ${activeCategory === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="faq-accordion-box">
            {filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className={`faq-card-row ${isOpen ? 'open' : ''}`}>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="faq-q-btn"
                  >
                    <span className="faq-question-label">{faq.question}</span>
                    <div className={`faq-arrow-wrapper ${isOpen ? 'rotated' : ''}`}>
                      <ChevronDown size={18} />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="faq-a-pane">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="faq-still-help-box">
            <HelpCircle size={24} className="help-icon" />
            <div>
              <h4>Still have a question?</h4>
              <p>Our team is available to answer inquiries about recipes, hygiene, or onboarding.</p>
            </div>
            <button 
              type="button" 
              onClick={() => navigate('/contact')}
              className="btn btn-primary"
            >
              <MessageSquare size={16} />
              <span>Contact Us</span>
            </button>
          </div>
        </div>
      </section>

      <style>{`
        .faq-page-content {
          padding: 60px 0 100px 0;
          background: var(--color-warm-white);
        }

        .faq-category-pills {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }

        .category-pill-btn {
          padding: 10px 22px;
          border-radius: var(--radius-capsule);
          background: #FFFFFF;
          border: 1px solid rgba(0, 0, 0, 0.1);
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--color-text-secondary);
          cursor: pointer;
          transition: all 0.2s;
        }

        .category-pill-btn:hover {
          border-color: var(--color-ink-black);
          color: var(--color-ink-black);
        }

        .category-pill-btn.active {
          background: var(--color-ink-black);
          color: #FFFFFF;
          border-color: var(--color-ink-black);
        }

        .faq-accordion-box {
          max-width: 820px;
          margin: 0 auto 56px auto;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .faq-card-row {
          background: #FFFFFF;
          border-radius: var(--radius-md);
          border: 1px solid rgba(0, 0, 0, 0.08);
          overflow: hidden;
          transition: border-color 0.2s;
        }

        .faq-card-row.open {
          border-color: rgba(255, 210, 51, 0.8);
          box-shadow: 0 8px 24px rgba(255, 210, 51, 0.1);
        }

        .faq-q-btn {
          width: 100%;
          padding: 22px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          text-align: left;
          background: none;
          cursor: pointer;
        }

        .faq-question-label {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--color-ink-black);
        }

        .faq-arrow-wrapper {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--color-warm-white);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: transform 0.28s, background 0.2s;
        }

        .faq-arrow-wrapper.rotated {
          transform: rotate(180deg);
          background: var(--color-brand-yellow);
        }

        .faq-a-pane {
          padding: 0 24px 22px 24px;
        }

        .faq-a-pane p {
          font-size: 0.95rem;
          color: var(--color-text-secondary);
          line-height: 1.65;
        }

        .faq-still-help-box {
          max-width: 820px;
          margin: 0 auto;
          background: #FFFFFF;
          padding: 28px 32px;
          border-radius: var(--radius-lg);
          border: 1px solid rgba(0, 0, 0, 0.08);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          flex-wrap: wrap;
        }

        .help-icon {
          color: #8C6500;
        }

        .faq-still-help-box h4 {
          font-size: 1.15rem;
          font-weight: 700;
          margin-bottom: 4px;
        }

        .faq-still-help-box p {
          font-size: 0.88rem;
          color: var(--color-text-secondary);
        }
      `}</style>
    </div>
  );
};
