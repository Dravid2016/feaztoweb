import React, { useState, useEffect } from 'react';
import { Sparkles, Volume2, VolumeX, ArrowRight, X } from 'lucide-react';
import { useAudioPlayer } from '../context/AudioPlayerContext';

export const WelcomeModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { startAudioWithSound, muteAudio } = useAudioPlayer();

  useEffect(() => {
    // Show only on a new browser session / fresh visit
    try {
      const hasSeenWelcome = sessionStorage.getItem('feazto_welcome_seen');
      if (!hasSeenWelcome) {
        // Small delay for natural entrance after initial paint
        const timer = setTimeout(() => {
          setIsOpen(true);
        }, 350);
        return () => clearTimeout(timer);
      }
    } catch {
      setIsOpen(true);
    }
  }, []);

  const handleExplore = () => {
    try {
      sessionStorage.setItem('feazto_welcome_seen', 'true');
    } catch {
      // Ignore
    }
    setIsOpen(false);
    // Directly and synchronously call startAudioWithSound on the user click event thread
    startAudioWithSound();
  };

  const handleContinueWithoutSound = () => {
    try {
      sessionStorage.setItem('feazto_welcome_seen', 'true');
    } catch {
      // Ignore
    }
    setIsOpen(false);
    muteAudio();
  };

  if (!isOpen) return null;

  return (
    <div className="feazto-welcome-overlay" role="dialog" aria-modal="true" aria-labelledby="welcome-title">
      <div className="feazto-welcome-card">
        {/* Subtle top close button */}
        <button
          type="button"
          onClick={handleContinueWithoutSound}
          className="feazto-welcome-close"
          aria-label="Close welcome dialog"
        >
          <X size={18} />
        </button>

        {/* Brand Icon Badge */}
        <div className="feazto-welcome-badge">
          <img src="/brand/feazto-logo.svg" alt="Feazto" className="feazto-welcome-logo" />
          <span className="feazto-welcome-sparkle">
            <Sparkles size={14} />
          </span>
        </div>

        {/* Content */}
        <h2 id="welcome-title" className="feazto-welcome-heading">
          Welcome to Feazto!
        </h2>
        <p className="feazto-welcome-desc">
          Discover a smarter way to experience fresh food, crafted with care and delivered with trust.
        </p>

        {/* Primary Action Button: Let's Explore */}
        <button
          type="button"
          onClick={handleExplore}
          className="feazto-welcome-btn-primary"
        >
          <span className="btn-sound-icon">
            <Volume2 size={18} />
          </span>
          <span className="btn-text">Let's Explore</span>
          <ArrowRight size={17} className="btn-arrow" />
        </button>

        {/* Secondary Action Option: Continue Without Sound */}
        <button
          type="button"
          onClick={handleContinueWithoutSound}
          className="feazto-welcome-btn-secondary"
        >
          <VolumeX size={15} />
          <span>Continue Without Sound</span>
        </button>
      </div>

      <style>{`
        .feazto-welcome-overlay {
          position: fixed;
          inset: 0;
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          background: rgba(15, 12, 5, 0.65);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          animation: welcomeFadeIn 0.35s ease-out forwards;
        }

        @keyframes welcomeFadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .feazto-welcome-card {
          position: relative;
          width: 100%;
          max-width: 440px;
          background: linear-gradient(145deg, #FFFFFF 0%, #FFFDF7 60%, #FFF8E7 100%);
          border-radius: 28px;
          padding: 38px 32px 30px;
          text-align: center;
          box-shadow: 
            0 24px 60px rgba(181, 132, 0, 0.22),
            0 12px 30px rgba(0, 0, 0, 0.18),
            inset 0 1px 2px #FFFFFF;
          border: 1.5px solid rgba(245, 183, 0, 0.4);
          animation: welcomeCardPop 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes welcomeCardPop {
          from {
            opacity: 0;
            transform: scale(0.92) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .feazto-welcome-close {
          position: absolute;
          top: 18px;
          right: 18px;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          border: 1px solid rgba(0, 0, 0, 0.08);
          background: rgba(0, 0, 0, 0.04);
          color: #666666;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .feazto-welcome-close:hover {
          background: rgba(0, 0, 0, 0.08);
          color: #111111;
          transform: rotate(90deg);
        }

        .feazto-welcome-badge {
          position: relative;
          width: 72px;
          height: 72px;
          margin: 0 auto 20px;
          border-radius: 24px;
          background: linear-gradient(135deg, #FFEFB8 0%, #FAC921 50%, #F5B700 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 24px rgba(245, 183, 0, 0.38);
        }

        .feazto-welcome-logo {
          width: 44px;
          height: 44px;
          object-fit: contain;
        }

        .feazto-welcome-sparkle {
          position: absolute;
          top: -4px;
          right: -4px;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #111111;
          color: #FAC921;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 6px rgba(0,0,0,0.2);
        }

        .feazto-welcome-heading {
          font-family: 'Poppins', sans-serif;
          font-size: 26px;
          font-weight: 700;
          color: #1A1A1A;
          margin: 0 0 10px;
          letter-spacing: -0.02em;
        }

        .feazto-welcome-desc {
          font-family: 'Inter', sans-serif;
          font-size: 14.5px;
          line-height: 1.55;
          color: #555555;
          margin: 0 0 28px;
        }

        .feazto-welcome-btn-primary {
          width: 100%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 15px 24px;
          border-radius: 9999px;
          background: linear-gradient(135deg, #181B20 0%, #000000 100%);
          color: #FAC921;
          font-family: 'Poppins', sans-serif;
          font-size: 15.5px;
          font-weight: 600;
          border: 1px solid rgba(250, 201, 33, 0.35);
          cursor: pointer;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.22);
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .feazto-welcome-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.3);
          background: #000000;
          color: #FFE680;
        }

        .btn-sound-icon {
          display: flex;
          align-items: center;
          color: #FAC921;
        }

        .btn-arrow {
          transition: transform 0.2s ease;
        }

        .feazto-welcome-btn-primary:hover .btn-arrow {
          transform: translateX(3px);
        }

        .feazto-welcome-btn-secondary {
          margin-top: 14px;
          background: transparent;
          border: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          color: #777777;
          cursor: pointer;
          padding: 6px 12px;
          border-radius: 9999px;
          transition: all 0.2s ease;
        }

        .feazto-welcome-btn-secondary:hover {
          color: #1A1A1A;
          background: rgba(0, 0, 0, 0.04);
        }

        @media (max-width: 480px) {
          .feazto-welcome-card {
            padding: 32px 22px 24px;
            border-radius: 24px;
          }

          .feazto-welcome-heading {
            font-size: 22px;
          }

          .feazto-welcome-desc {
            font-size: 13.5px;
            margin-bottom: 22px;
          }

          .feazto-welcome-btn-primary {
            padding: 13px 20px;
            font-size: 14.5px;
          }
        }
      `}</style>
    </div>
  );
};
