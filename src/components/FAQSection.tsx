import React, { useState } from 'react';
import { FAQS } from '../data/feaztoData';
import { Sparkles, ChevronDown } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="faq-header">
          <div className="badge-tag">
            <Sparkles size={13} />
            <span>Got Questions?</span>
          </div>
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <p className="faq-subtitle">
            Transparent answers about our food discovery platform, home kitchens, cloud standards, and app release roadmap.
          </p>
        </div>

        <div className="faq-accordion-list">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className={`faq-item-card ${isOpen ? 'open' : ''}`}>
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="faq-question-btn"
                  aria-expanded={isOpen}
                >
                  <span className="faq-q-text">{faq.question}</span>
                  <div className={`faq-icon-arrow ${isOpen ? 'rotated' : ''}`}>
                    <ChevronDown size={18} />
                  </div>
                </button>

                {isOpen && (
                  <div className="faq-answer-pane">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .faq-section {
          padding-top: 100px;
          padding-bottom: 100px;
          background-color: var(--color-warm-white);
        }

        .faq-header {
          text-align: center;
          max-width: 680px;
          margin: 0 auto 56px auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .faq-title {
          font-size: clamp(2rem, 3.4vw, 2.8rem);
          font-weight: 800;
          color: var(--color-ink-black);
          margin-top: 18px;
          margin-bottom: 14px;
        }

        .faq-subtitle {
          font-size: 1.05rem;
          color: var(--color-text-secondary);
          line-height: 1.6;
        }

        .faq-accordion-list {
          max-width: 820px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .faq-item-card {
          background: #FFFFFF;
          border-radius: var(--radius-md);
          border: 1px solid rgba(0, 0, 0, 0.07);
          overflow: hidden;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .faq-item-card.open {
          border-color: rgba(255, 210, 51, 0.8);
          box-shadow: 0 8px 24px rgba(255, 210, 51, 0.1);
        }

        .faq-question-btn {
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

        .faq-q-text {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--color-ink-black);
          line-height: 1.4;
        }

        .faq-icon-arrow {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--color-warm-white);
          color: var(--color-ink-black);
          flex-shrink: 0;
          transition: transform 0.28s cubic-bezier(0.16, 1, 0.3, 1), background 0.2s;
        }

        .faq-icon-arrow.rotated {
          transform: rotate(180deg);
          background: var(--color-brand-yellow);
        }

        .faq-answer-pane {
          padding: 0 24px 22px 24px;
        }

        .faq-answer-pane p {
          font-size: 0.95rem;
          color: var(--color-text-secondary);
          line-height: 1.65;
        }
      `}</style>
    </section>
  );
};
