import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export const AmbientMusicPlayer: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Set volume strictly to 30% per user requirement
    audio.volume = 0.3;

    // Attempt autoplay upon website open
    const startAudio = () => {
      audio.volume = 0.3;
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          // If browser policy blocked unmuted autoplay before interaction,
          // wait for first user gesture anywhere on the window.
          setIsPlaying(false);
        });
    };

    startAudio();

    // Browser Autoplay Policy Fallback: play on first user interaction (click, scroll, touch, keydown)
    const handleFirstInteraction = () => {
      if (audio.paused) {
        audio.volume = 0.3;
        audio
          .play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {});
      }
      cleanupListeners();
    };

    const cleanupListeners = () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
      window.removeEventListener('scroll', handleFirstInteraction);
    };

    window.addEventListener('click', handleFirstInteraction, { once: true });
    window.addEventListener('touchstart', handleFirstInteraction, { once: true });
    window.addEventListener('keydown', handleFirstInteraction, { once: true });
    window.addEventListener('scroll', handleFirstInteraction, { once: true });

    return () => {
      cleanupListeners();
    };
  }, []);

  const togglePlayback = (e: React.MouseEvent) => {
    e.stopPropagation();
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.volume = 0.3;
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    }
  };

  return (
    <div className="ambient-audio-island">
      <audio
        ref={audioRef}
        src="/brand/feazto-ambient.mp3"
        loop
        preload="auto"
      />

      <button
        type="button"
        onClick={togglePlayback}
        className={`audio-toggle-pill ${isPlaying ? 'is-playing' : 'is-paused'}`}
        title={isPlaying ? 'Mute background audio (30% volume)' : 'Play background audio'}
        aria-label="Background Ambient Audio Toggle"
      >
        <span className="audio-icon-wrap">
          {isPlaying ? <Volume2 size={16} /> : <VolumeX size={16} />}
        </span>

        {/* Animated Sound Equalizer Waves when Playing */}
        {isPlaying && (
          <div className="audio-sound-wave" aria-hidden="true">
            <span className="wave-bar bar-1" />
            <span className="wave-bar bar-2" />
            <span className="wave-bar bar-3" />
          </div>
        )}

        <span className="audio-label-text">
          {isPlaying ? 'feazto Radio (30%)' : 'Sound Off'}
        </span>
      </button>

      <style>{`
        .ambient-audio-island {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 9999;
          pointer-events: auto;
        }

        .audio-toggle-pill {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 8px 16px 8px 12px;
          border-radius: 9999px;
          border: 1px solid rgba(255, 255, 255, 0.7);
          background: linear-gradient(
            135deg, 
            rgba(255, 255, 255, 0.92) 0%, 
            rgba(255, 250, 230, 0.78) 60%,
            rgba(250, 201, 33, 0.45) 100%
          );
          backdrop-filter: blur(18px) saturate(180%);
          -webkit-backdrop-filter: blur(18px) saturate(180%);
          color: #261D00;
          font-family: var(--font-heading, inherit);
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.02em;
          box-shadow: 
            0 8px 24px rgba(181, 132, 0, 0.22),
            0 2px 6px rgba(0, 0, 0, 0.06),
            inset 0 1.5px 2px rgba(255, 255, 255, 0.9);
          cursor: pointer;
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease;
          user-select: none;
        }

        .audio-toggle-pill:hover {
          transform: translateY(-2px) scale(1.03);
          box-shadow: 
            0 12px 30px rgba(181, 132, 0, 0.32),
            0 4px 10px rgba(0, 0, 0, 0.08),
            inset 0 2px 3px rgba(255, 255, 255, 1);
        }

        .audio-icon-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          color: #8C6500;
        }

        /* Equalizer Animation */
        .audio-sound-wave {
          display: inline-flex;
          align-items: flex-end;
          gap: 2.5px;
          height: 14px;
        }

        .wave-bar {
          width: 2.5px;
          background: #8C6500;
          border-radius: 9999px;
          animation: wavePulse 1s ease-in-out infinite alternate;
        }

        .bar-1 {
          height: 60%;
          animation-delay: 0.1s;
        }

        .bar-2 {
          height: 100%;
          animation-delay: 0.35s;
        }

        .bar-3 {
          height: 40%;
          animation-delay: 0.2s;
        }

        @keyframes wavePulse {
          0% {
            height: 25%;
          }
          100% {
            height: 100%;
          }
        }

        .audio-label-text {
          font-size: 0.78rem;
          color: #382B00;
        }

        @media (max-width: 640px) {
          .ambient-audio-island {
            bottom: 18px;
            right: 16px;
          }
          .audio-toggle-pill {
            padding: 7px 12px;
            font-size: 0.74rem;
          }
          .audio-label-text {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};
