import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
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

  const handleDismissAndPlay = () => {
    try {
      sessionStorage.setItem('feazto_welcome_seen', 'true');
    } catch {
      // Ignore
    }
    setIsOpen(false);
    // Clicking anywhere on the card or overlay activates background audio
    startAudioWithSound();
  };

  const handleCloseOnly = (e: React.MouseEvent) => {
    e.stopPropagation();
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
    <div
      className="feazto-welcome-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="welcome-title"
      onClick={handleDismissAndPlay}
    >
      <div
        className="feazto-welcome-card"
        onClick={handleDismissAndPlay}
      >
        {/* Top close button */}
        <button
          type="button"
          onClick={handleCloseOnly}
          className="feazto-welcome-close"
          aria-label="Close welcome dialog"
          title="Close"
        >
          <X size={18} />
        </button>

        {/* Brand Logo centered cleanly without inner button/square background */}
        <div className="feazto-welcome-logo-wrap">
          <img
            src="/brand/feazto-logo.svg"
            alt="Feazto"
            className="feazto-welcome-logo-img"
          />
        </div>

        {/* Heading */}
        <h2 id="welcome-title" className="feazto-welcome-heading">
          Welcome to Feazto!
        </h2>
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
          background: rgba(18, 14, 5, 0.65);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          cursor: pointer;
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
          max-width: 400px;
          /* Yellow gradient card background matching Feazto gold/turmeric palette */
          background: linear-gradient(145deg, #FFDF40 0%, #FAC921 45%, #F5B700 100%);
          border-radius: 28px;
          padding: 44px 32px 38px;
          text-align: center;
          box-shadow: 
            0 24px 60px rgba(220, 150, 0, 0.4),
            0 12px 28px rgba(0, 0, 0, 0.22),
            inset 0 1px 2px rgba(255, 255, 255, 0.6);
          border: 1.5px solid rgba(255, 255, 255, 0.45);
          animation: welcomeCardPop 0.38s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          cursor: pointer;
          transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s ease;
        }

        .feazto-welcome-card:hover {
          transform: translateY(-2px) scale(1.01);
          box-shadow: 
            0 28px 70px rgba(220, 150, 0, 0.48),
            0 14px 32px rgba(0, 0, 0, 0.25);
        }

        @keyframes welcomeCardPop {
          from {
            opacity: 0;
            transform: scale(0.92) translateY(18px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .feazto-welcome-close {
          position: absolute;
          top: 16px;
          right: 16px;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 1px solid rgba(0, 0, 0, 0.12);
          background: rgba(255, 255, 255, 0.25);
          color: #1A1A1A;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          backdrop-filter: blur(8px);
        }

        .feazto-welcome-close:hover {
          background: rgba(0, 0, 0, 0.15);
          color: #000000;
          transform: rotate(90deg);
        }

        /* Centered logo without button / square card background */
        .feazto-welcome-logo-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 18px;
          width: 100%;
        }

        .feazto-welcome-logo-img {
          height: 58px;
          width: auto;
          max-width: 160px;
          object-fit: contain;
          filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.12));
        }

        .feazto-welcome-heading {
          font-family: 'Poppins', sans-serif;
          font-size: 26px;
          font-weight: 800;
          color: #1A1A1A;
          margin: 0;
          letter-spacing: -0.02em;
          text-shadow: 0 1px 2px rgba(255, 255, 255, 0.35);
        }

        @media (max-width: 480px) {
          .feazto-welcome-card {
            padding: 38px 24px 32px;
            border-radius: 24px;
            max-width: 340px;
          }

          .feazto-welcome-logo-img {
            height: 50px;
          }

          .feazto-welcome-heading {
            font-size: 22px;
          }
        }
      `}</style>
    </div>
  );
};
