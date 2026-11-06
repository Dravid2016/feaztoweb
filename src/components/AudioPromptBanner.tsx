import React from 'react';
import { Volume2, X } from 'lucide-react';
import { useAudioPlayer } from '../context/AudioPlayerContext';

export const AudioPromptBanner: React.FC = () => {
  const { needsInteraction, togglePlayback, dismissPrompt, isPlaying, isMuted } = useAudioPlayer();

  if (!needsInteraction || (isPlaying && !isMuted)) {
    return null;
  }

  return (
    <aside 
      className="audio-prompt-banner"
      role="region"
      aria-label="Sound Experience Notification"
    >
      <button 
        type="button"
        className="audio-prompt-action-pill"
        onClick={togglePlayback}
        aria-label="Click to enable Feazto background audio"
      >
        <span className="audio-prompt-icon-bubble">
          <Volume2 size={16} className="audio-pulse-icon" />
        </span>
        <span className="audio-prompt-text-group">
          <strong className="audio-prompt-title">Sound Available</strong>
          <span className="audio-prompt-subtitle">Click the audio button to enable authentic regional culinary audio</span>
        </span>
      </button>

      <button
        type="button"
        className="audio-prompt-close-btn"
        onClick={dismissPrompt}
        title="Dismiss audio prompt"
        aria-label="Dismiss audio prompt"
      >
        <X size={15} />
      </button>

      <style>{`
        .audio-prompt-banner {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 9999;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 6px 8px 6px 6px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 246, 215, 0.92) 100%);
          border-radius: 9999px;
          box-shadow: 
            0 14px 40px rgba(181, 132, 0, 0.28),
            0 4px 12px rgba(0, 0, 0, 0.08),
            inset 0 1px 2px #FFFFFF;
          border: 1.5px solid rgba(245, 183, 0, 0.45);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          animation: slideUpAudioBanner 0.45s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          max-width: calc(100vw - 32px);
        }

        @keyframes slideUpAudioBanner {
          from {
            opacity: 0;
            transform: translateY(24px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .audio-prompt-action-pill {
          display: flex;
          align-items: center;
          gap: 12px;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 4px 12px 4px 4px;
          border-radius: 9999px;
          text-align: left;
          transition: transform 0.2s ease;
        }

        .audio-prompt-action-pill:hover {
          transform: translateY(-1px);
        }

        .audio-prompt-icon-bubble {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: linear-gradient(135deg, #F5B700 0%, #E5A300 100%);
          color: #111111;
          box-shadow: 0 4px 12px rgba(245, 183, 0, 0.45);
          flex-shrink: 0;
        }

        .audio-pulse-icon {
          animation: pulseIconSoft 2s infinite ease-in-out;
        }

        @keyframes pulseIconSoft {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.12); }
        }

        .audio-prompt-text-group {
          display: flex;
          flex-direction: column;
          line-height: 1.25;
        }

        .audio-prompt-title {
          font-family: var(--font-heading, 'Poppins', sans-serif);
          font-size: 0.88rem;
          font-weight: 700;
          color: #111111;
          letter-spacing: -0.01em;
        }

        .audio-prompt-subtitle {
          font-size: 0.72rem;
          color: #6A4E00;
          font-weight: 500;
        }

        .audio-prompt-close-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: none;
          background: rgba(0, 0, 0, 0.05);
          color: #7A5700;
          cursor: pointer;
          transition: all 0.2s ease;
          flex-shrink: 0;
        }

        .audio-prompt-close-btn:hover {
          background: rgba(0, 0, 0, 0.1);
          color: #111111;
          transform: scale(1.08);
        }

        @media (max-width: 600px) {
          .audio-prompt-banner {
            bottom: 16px;
            right: 16px;
            left: 16px;
            justify-content: space-between;
            max-width: none;
          }
          .audio-prompt-subtitle {
            display: none;
          }
        }
      `}</style>
    </aside>
  );
};

