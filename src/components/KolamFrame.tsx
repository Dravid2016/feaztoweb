import React from 'react';

interface KolamFrameProps {
  variant?: 'turmeric' | 'light' | 'dark' | 'border-only';
  children: React.ReactNode;
  className?: string;
  hasCorners?: boolean;
}

export const KolamFrame: React.FC<KolamFrameProps> = ({
  variant = 'turmeric',
  children,
  className = '',
  hasCorners = true,
}) => {
  return (
    <div className={`kolam-frame-wrapper kolam-frame-${variant} ${className}`}>
      {/* Kolam geometric boundary lines */}
      <div className="kolam-top-pattern" aria-hidden="true">
        <svg viewBox="0 0 1200 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="kolam-svg-border">
          <path 
            d="M0,12 Q30,0 60,12 T120,12 T180,12 T240,12 T300,12 T360,12 T420,12 T480,12 T540,12 T600,12 T660,12 T720,12 T780,12 T840,12 T900,12 T960,12 T1020,12 T1080,12 T1140,12 T1200,12" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            fill="none" 
            strokeDasharray="4 2" 
          />
          <circle cx="60" cy="12" r="2.5" fill="currentColor" />
          <circle cx="180" cy="12" r="2.5" fill="currentColor" />
          <circle cx="300" cy="12" r="2.5" fill="currentColor" />
          <circle cx="420" cy="12" r="2.5" fill="currentColor" />
          <circle cx="540" cy="12" r="2.5" fill="currentColor" />
          <circle cx="660" cy="12" r="2.5" fill="currentColor" />
          <circle cx="780" cy="12" r="2.5" fill="currentColor" />
          <circle cx="900" cy="12" r="2.5" fill="currentColor" />
          <circle cx="1020" cy="12" r="2.5" fill="currentColor" />
          <circle cx="1140" cy="12" r="2.5" fill="currentColor" />
        </svg>
      </div>

      {hasCorners && (
        <>
          <div className="kolam-corner corner-top-left" aria-hidden="true">
            <img src="/brand/kolam-1.png" alt="" />
          </div>
          <div className="kolam-corner corner-top-right" aria-hidden="true">
            <img src="/brand/kolam-1.png" alt="" />
          </div>
          <div className="kolam-corner corner-bottom-left" aria-hidden="true">
            <img src="/brand/kolam-1.png" alt="" />
          </div>
          <div className="kolam-corner corner-bottom-right" aria-hidden="true">
            <img src="/brand/kolam-1.png" alt="" />
          </div>
        </>
      )}

      <div className="kolam-frame-content">
        {children}
      </div>

      <div className="kolam-bottom-pattern" aria-hidden="true">
        <svg viewBox="0 0 1200 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="kolam-svg-border">
          <path 
            d="M0,12 Q30,24 60,12 T120,12 T180,12 T240,12 T300,12 T360,12 T420,12 T480,12 T540,12 T600,12 T660,12 T720,12 T780,12 T840,12 T900,12 T960,12 T1020,12 T1080,12 T1140,12 T1200,12" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            fill="none" 
            strokeDasharray="4 2" 
          />
          <circle cx="60" cy="12" r="2.5" fill="currentColor" />
          <circle cx="180" cy="12" r="2.5" fill="currentColor" />
          <circle cx="300" cy="12" r="2.5" fill="currentColor" />
          <circle cx="420" cy="12" r="2.5" fill="currentColor" />
          <circle cx="540" cy="12" r="2.5" fill="currentColor" />
          <circle cx="660" cy="12" r="2.5" fill="currentColor" />
          <circle cx="780" cy="12" r="2.5" fill="currentColor" />
          <circle cx="900" cy="12" r="2.5" fill="currentColor" />
          <circle cx="1020" cy="12" r="2.5" fill="currentColor" />
          <circle cx="1140" cy="12" r="2.5" fill="currentColor" />
        </svg>
      </div>

      <style>{`
        .kolam-frame-wrapper {
          position: relative;
          border-radius: var(--radius-lg);
          padding: 40px;
          overflow: hidden;
          transition: transform 0.28s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.28s ease;
        }

        .kolam-frame-turmeric {
          background-color: var(--color-brand-yellow);
          color: var(--color-ink-black);
          border: 2px solid #E5B81C;
        }
        .kolam-frame-turmeric .kolam-svg-border {
          color: #FFFFFF;
        }

        .kolam-frame-light {
          background-color: #FFFFFF;
          color: var(--color-ink-black);
          border: 1.5px solid rgba(255, 210, 51, 0.4);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.04);
        }
        .kolam-frame-light .kolam-svg-border {
          color: #E5B81C;
        }

        .kolam-frame-dark {
          background-color: #111111;
          color: #FFFFFF;
          border: 1.5px solid rgba(255, 210, 51, 0.3);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
        }
        .kolam-frame-dark .kolam-svg-border {
          color: var(--color-brand-yellow);
        }

        .kolam-top-pattern, .kolam-bottom-pattern {
          width: 100%;
          line-height: 0;
          opacity: 0.75;
        }
        .kolam-top-pattern {
          margin-bottom: 20px;
        }
        .kolam-bottom-pattern {
          margin-top: 20px;
        }

        .kolam-svg-border {
          width: 100%;
          height: 18px;
        }

        .kolam-corner {
          position: absolute;
          width: 60px;
          height: 60px;
          opacity: 0.25;
          pointer-events: none;
        }
        .kolam-corner img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .corner-top-left {
          top: 8px;
          left: 8px;
        }
        .corner-top-right {
          top: 8px;
          right: 8px;
          transform: scaleX(-1);
        }
        .corner-bottom-left {
          bottom: 8px;
          left: 8px;
          transform: scaleY(-1);
        }
        .corner-bottom-right {
          bottom: 8px;
          right: 8px;
          transform: scale(-1);
        }

        .kolam-frame-content {
          position: relative;
          z-index: 1;
        }

        @media (max-width: 768px) {
          .kolam-frame-wrapper {
            padding: 24px 16px;
          }
          .kolam-corner {
            width: 40px;
            height: 40px;
          }
        }
      `}</style>
    </div>
  );
};
