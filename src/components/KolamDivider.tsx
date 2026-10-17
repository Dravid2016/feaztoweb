import React from 'react';

interface KolamDividerProps {
  color?: string;
  variant?: 'single' | 'floral' | 'continuous';
  className?: string;
}

export const KolamDivider: React.FC<KolamDividerProps> = ({
  color = '#E5B81C',
  variant = 'continuous',
  className = '',
}) => {
  return (
    <div className={`kolam-divider-container ${className}`} aria-hidden="true">
      <div className="kolam-divider-line" style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }} />
      
      {variant === 'continuous' && (
        <div className="kolam-center-motif">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Traditional 4-fold Pulli Kolam Loop */}
            <path
              d="M24,6 C28,12 36,12 42,24 C36,36 28,36 24,42 C20,36 12,36 6,24 C12,12 20,12 24,6 Z"
              stroke={color}
              strokeWidth="1.8"
              fill="none"
            />
            <circle cx="24" cy="24" r="3" fill={color} />
            <circle cx="24" cy="14" r="1.5" fill={color} />
            <circle cx="24" cy="34" r="1.5" fill={color} />
            <circle cx="14" cy="24" r="1.5" fill={color} />
            <circle cx="34" cy="24" r="1.5" fill={color} />
          </svg>
        </div>
      )}

      <div className="kolam-divider-line" style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }} />

      <style>{`
        .kolam-divider-container {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin: 36px 0;
          width: 100%;
        }

        .kolam-divider-line {
          height: 1.5px;
          flex-grow: 1;
          max-width: 240px;
          opacity: 0.5;
        }

        .kolam-center-motif {
          display: flex;
          align-items: center;
          justify-content: center;
          animation: subtlePulse 4s ease-in-out infinite;
        }

        @keyframes subtlePulse {
          0%, 100% { transform: scale(1); opacity: 0.85; }
          50% { transform: scale(1.05); opacity: 1; }
        }
      `}</style>
    </div>
  );
};
