import React from 'react';
import { AppDownloadSection } from '../components/AppDownloadSection';
import { Sparkles, ShieldCheck, Smartphone, Cpu } from 'lucide-react';

interface DownloadPageProps {
  navigate: (route: string) => void;
}

export const DownloadPage: React.FC<DownloadPageProps> = ({ navigate }) => {
  return (
    <div className="secondary-page download-page">
      <section className="page-hero-banner">
        <div className="container">
          <div className="badge-tag">
            <Sparkles size={13} />
            <span>Staged Mobile Suite</span>
          </div>
          <h1 className="page-hero-title">FEAzTO Mobile Applications</h1>
          <p className="page-hero-subtitle">
            An integrated four-part ecosystem: Customer Food Discovery, Cloud Kitchen Kitchen-OS, Delivery Partner, and Operations Dispatch.
          </p>
        </div>
      </section>

      {/* Embedded Reference G pattern with full features */}
      <AppDownloadSection navigate={navigate} />

      {/* Tech Specifications from UI/UX Team Documentation */}
      <section className="app-ecosystem-suite-section">
        <div className="container">
          <h2 className="suite-title">The Four Ecosystem Pillars</h2>
          <div className="suite-grid">
            <div className="suite-card">
              <div className="suite-icon-box">
                <Smartphone size={24} />
              </div>
              <h3>Customer App</h3>
              <p>Regional dish storytelling, live kitchen preparation progress bar, transparent ingredient provenance, and scheduled feast booking.</p>
              <span className="suite-status-tag">Pilot Staging • v1.1</span>
            </div>

            <div className="suite-card">
              <div className="suite-icon-box">
                <Cpu size={24} />
              </div>
              <h3>Cloud Kitchen OS</h3>
              <p>Built with React Native & Expo. Kitchen order queue, batch timing management, dynamic menu stock toggle, and instant earnings audit.</p>
              <span className="suite-status-tag">Internal Beta • v1.0</span>
            </div>

            <div className="suite-card">
              <div className="suite-icon-box">
                <ShieldCheck size={24} />
              </div>
              <h3>Rider Dispatch App</h3>
              <p>Thermal box pickup confirmation, optimized regional route guidance, tamper-seal verification, and instant delivery earnings.</p>
              <span className="suite-status-tag">Staged Rollout</span>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .app-ecosystem-suite-section {
          padding: 80px 0 100px 0;
          background: #FAFAFA;
          border-top: 1px solid rgba(0, 0, 0, 0.06);
        }

        .suite-title {
          text-align: center;
          font-size: 2.2rem;
          font-weight: 800;
          color: var(--color-ink-black);
          margin-bottom: 48px;
        }

        .suite-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 28px;
        }

        .suite-card {
          background: #FFFFFF;
          padding: 32px 26px;
          border-radius: var(--radius-lg);
          border: 1px solid rgba(0, 0, 0, 0.08);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.03);
          display: flex;
          flex-direction: column;
        }

        .suite-icon-box {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          background: var(--color-brand-yellow-subtle);
          color: #8C6500;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
        }

        .suite-card h3 {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--color-ink-black);
          margin-bottom: 8px;
        }

        .suite-card p {
          font-size: 0.9rem;
          color: var(--color-text-secondary);
          line-height: 1.6;
          margin-bottom: 24px;
        }

        .suite-status-tag {
          margin-top: auto;
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 700;
          color: #8C6500;
          background: var(--color-brand-yellow-subtle);
          padding: 4px 12px;
          border-radius: 9999px;
          border: 1px solid rgba(255, 210, 51, 0.4);
          width: fit-content;
        }
      `}</style>
    </div>
  );
};
