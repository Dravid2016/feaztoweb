import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Volume2, VolumeX, Sparkles, X, Music } from 'lucide-react';
import Strands from './Strands';

// feazto authentic brand color palette for Strands orb (Turmeric, saffron, warm cream, terracotta, cardamom, golden honey)
const FEAZTO_ORB_COLORS = [
  '#FAC921', // Saffron Gold
  '#F5B700', // Deep Turmeric
  '#E5A300', // Warm Amber
  '#FFF8D6', // Cream Silk
  '#FF8A3D', // Terracotta Spice
  '#D48800', // Rich Cardamom Honey
  '#FFFDF2', // Luminous Pearl
];

export const AmbientMusicPlayer: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const sourceNodeRef = useRef<MediaElementAudioSourceNode | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [audioLevel, setAudioLevel] = useState<number>(0);
  const [isOrbModalOpen, setIsOrbModalOpen] = useState<boolean>(false);

  // Smooth filter for audio level tracking to eliminate visual jumps
  const smoothedLevelRef = useRef<number>(0);

  // Initialize Web Audio API AnalyserNode connected to the <audio> element
  const initAudioAnalyser = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!audioContextRef.current) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioContextClass) return;

      const ctx = new AudioContextClass();
      audioContextRef.current = ctx;

      const analyser = ctx.createAnalyser();
      analyser.fftSize = 256;
      analyser.smoothingTimeConstant = 0.85; // smooth FFT response
      analyserRef.current = analyser;

      try {
        const source = ctx.createMediaElementSource(audio);
        sourceNodeRef.current = source;
        source.connect(analyser);
        analyser.connect(ctx.destination);
      } catch (err) {
        console.warn('Web Audio source connection warning:', err);
      }
    }

    if (audioContextRef.current.state === 'suspended') {
      audioContextRef.current.resume().catch(() => {});
    }
  }, []);

  // Audio analysis frame loop
  useEffect(() => {
    const updateAudioLevel = () => {
      const analyser = analyserRef.current;
      const audio = audioRef.current;

      if (analyser && audio && !audio.paused && !audio.muted) {
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);
        analyser.getByteFrequencyData(dataArray);

        // Emphasize bass & beat energy (first 24 frequency bins) + overall RMS
        let bassSum = 0;
        const bassCount = Math.min(24, bufferLength);
        for (let i = 0; i < bassCount; i++) {
          bassSum += dataArray[i];
        }
        const bassAvg = bassSum / (bassCount * 255);

        let totalSum = 0;
        for (let i = 0; i < bufferLength; i++) {
          totalSum += dataArray[i];
        }
        const totalAvg = totalSum / (bufferLength * 255);

        // Combined normalized audio energy (0 to 1) with bass weighting
        const rawEnergy = Math.min(1.0, bassAvg * 0.7 + totalAvg * 0.5);

        // Smooth interpolation to avoid abrupt visual flickering
        smoothedLevelRef.current += (rawEnergy - smoothedLevelRef.current) * 0.22;
      } else {
        // Smoothly decay to idle (0) when paused or stopped
        smoothedLevelRef.current += (0 - smoothedLevelRef.current) * 0.08;
      }

      setAudioLevel(Number(smoothedLevelRef.current.toFixed(4)));
      animationFrameRef.current = requestAnimationFrame(updateAudioLevel);
    };

    animationFrameRef.current = requestAnimationFrame(updateAudioLevel);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  // Setup initial audio volume & auto-start handling
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.3;

    const startAudio = () => {
      audio.volume = 0.3;
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
          initAudioAnalyser();
        })
        .catch(() => {
          setIsPlaying(false);
        });
    };

    startAudio();

    const handleFirstInteraction = () => {
      initAudioAnalyser();
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
      if (audioContextRef.current) {
        audioContextRef.current.close().catch(() => {});
      }
    };
  }, [initAudioAnalyser]);

  const togglePlayback = (e: React.MouseEvent) => {
    e.stopPropagation();
    const audio = audioRef.current;
    if (!audio) return;

    initAudioAnalyser();

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
    <>
      <audio
        ref={audioRef}
        src="/brand/feazto-ambient.mp3"
        loop
        preload="auto"
        crossOrigin="anonymous"
      />

      {/* Floating Bottom-Right Controls with Strands Micro-Orb & Fullscreen Modal Launcher */}
      <div className="ambient-audio-island">
        {/* Visualizer Trigger Orb */}
        <button
          type="button"
          onClick={() => setIsOrbModalOpen(true)}
          className="audio-orb-trigger-btn"
          title="Open Audio-Reactive Strands Visualizer"
          aria-label="Open Audio-Reactive Strands Visualizer"
        >
          <div className="trigger-orb-canvas-wrap">
            <Strands
              colors={FEAZTO_ORB_COLORS}
              count={3}
              speed={isPlaying ? 1.2 : 0.4}
              amplitude={isPlaying ? 1.0 + audioLevel * 0.8 : 0.6}
              waviness={isPlaying ? 1.0 + audioLevel * 0.6 : 0.6}
              glow={isPlaying ? 1.0 + audioLevel * 1.2 : 0.5}
              glass={true}
              glassSize={1.0}
              refraction={1.2}
              dispersion={1.1}
              energy={isPlaying ? 0.3 + audioLevel * 0.7 : 0.15}
              level={audioLevel}
              interactive={false}
              clickPulse={false}
              intro={false}
            />
          </div>
          <Sparkles size={13} className="trigger-sparkle-badge" />
        </button>

        {/* Mute / Play Toggle Pill */}
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
      </div>

      {/* ── IMMERSIVE AUDIO-REACTIVE STRANDS ORB MODAL ── */}
      {isOrbModalOpen && (
        <div className="strands-modal-backdrop" onClick={() => setIsOrbModalOpen(false)}>
          <div className="strands-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header-bar">
              <div className="modal-title-pill">
                <Music size={14} className="title-music-icon" />
                <span>feazto Acoustic Resonance • Audio-Reactive Orb</span>
              </div>
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setIsOrbModalOpen(false)}
                aria-label="Close Visualizer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Central Responsive Audio Visualizer Canvas */}
            <div className="strands-visualizer-stage">
              <div className="strands-orb-frame">
                <Strands
                  colors={FEAZTO_ORB_COLORS}
                  count={4}
                  speed={isPlaying ? 1.0 + audioLevel * 0.9 : 0.35}
                  amplitude={isPlaying ? 1.0 + audioLevel * 1.1 : 0.5}
                  waviness={isPlaying ? 1.0 + audioLevel * 0.8 : 0.6}
                  thickness={1.1}
                  glow={isPlaying ? 1.1 + audioLevel * 1.5 : 0.6}
                  taper={1.0}
                  spread={1.05}
                  intensity={1.2}
                  saturation={1.15}
                  scale={1.0}
                  glass={true}
                  glassSize={1.0}
                  refraction={1.25}
                  dispersion={1.2}
                  rim={1.15}
                  energy={isPlaying ? 0.4 + audioLevel * 0.8 : 0.2}
                  level={audioLevel}
                  interactive={true}
                  clickPulse={true}
                  intro={true}
                />
              </div>

              {/* Ambient Glass Reflections & Glow */}
              <div 
                className="orb-ambient-glow" 
                style={{ 
                  opacity: 0.35 + audioLevel * 0.65,
                  transform: `scale(${1 + audioLevel * 0.25})`
                }} 
              />
            </div>

            {/* Modal Footer with Live Metrics & Controls */}
            <div className="modal-footer-controls">
              <div className="live-energy-metric">
                <span className="metric-label">Reactive Intensity:</span>
                <div className="energy-bar-track">
                  <div 
                    className="energy-bar-fill" 
                    style={{ width: `${Math.round(audioLevel * 100)}%` }} 
                  />
                </div>
                <span className="metric-val">{Math.round(audioLevel * 100)}%</span>
              </div>

              <button
                type="button"
                onClick={togglePlayback}
                className="btn btn-yellow modal-playback-btn"
              >
                {isPlaying ? <VolumeX size={16} /> : <Volume2 size={16} />}
                <span>{isPlaying ? 'Pause Audio' : 'Resume Audio'}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .ambient-audio-island {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 9999;
          display: flex;
          align-items: center;
          gap: 12px;
          pointer-events: auto;
        }

        /* ── CIRCULAR STRANDS MICRO-ORB TRIGGER ── */
        .audio-orb-trigger-btn {
          position: relative;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: 1.5px solid rgba(255, 255, 255, 0.9);
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.85) 0%, rgba(250, 201, 33, 0.4) 100%);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          box-shadow: 
            0 8px 24px rgba(181, 132, 0, 0.26),
            inset 0 1.5px 2px rgba(255, 255, 255, 0.95);
          cursor: pointer;
          padding: 0;
          overflow: visible;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease;
        }

        .audio-orb-trigger-btn:hover {
          transform: translateY(-2px) scale(1.08);
          box-shadow: 0 12px 30px rgba(181, 132, 0, 0.36);
        }

        .trigger-orb-canvas-wrap {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          overflow: hidden;
        }

        .trigger-sparkle-badge {
          position: absolute;
          top: -3px;
          right: -3px;
          background: #FAC921;
          color: #111111;
          border-radius: 50%;
          padding: 2px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
        }

        /* ── LIQUID MORPHISM AUDIO TOGGLE PILL ── */
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

        .bar-1 { height: 60%; animation-delay: 0.1s; }
        .bar-2 { height: 100%; animation-delay: 0.35s; }
        .bar-3 { height: 40%; animation-delay: 0.2s; }

        @keyframes wavePulse {
          0% { height: 25%; }
          100% { height: 100%; }
        }

        .audio-label-text {
          font-size: 0.78rem;
          color: #382B00;
        }

        /* ── FULLSCREEN STRANDS MODAL VISUALIZER ── */
        .strands-modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(18, 14, 5, 0.65);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          z-index: 10000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          animation: fadeInModal 0.3s ease;
        }

        @keyframes fadeInModal {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .strands-modal-card {
          width: 100%;
          max-width: 680px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.94) 0%, rgba(255, 251, 238, 0.92) 100%);
          border-radius: 32px;
          border: 1.5px solid rgba(255, 255, 255, 0.95);
          box-shadow: 
            0 24px 60px rgba(0, 0, 0, 0.25),
            0 0 0 1px rgba(181, 132, 0, 0.12),
            inset 0 2px 4px rgba(255, 255, 255, 1);
          padding: 28px 32px 32px 32px;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          overflow: hidden;
        }

        .modal-header-bar {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .modal-title-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #FFF3C4;
          border: 1px solid rgba(181, 132, 0, 0.25);
          color: #7A5B00;
          font-family: var(--font-heading);
          font-size: 0.8rem;
          font-weight: 800;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          padding: 6px 14px;
          border-radius: 9999px;
        }

        .title-music-icon {
          color: #8C6500;
        }

        .modal-close-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #FFFFFF;
          border: 1px solid rgba(0, 0, 0, 0.08);
          color: #222222;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: transform 0.2s ease, background 0.2s ease;
        }

        .modal-close-btn:hover {
          background: #FAC921;
          color: #111111;
          transform: rotate(90deg);
        }

        /* Central Responsive Strands Stage */
        .strands-visualizer-stage {
          width: 100%;
          height: 480px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .strands-orb-frame {
          width: 100%;
          height: 100%;
          position: relative;
          z-index: 2;
        }

        .orb-ambient-glow {
          position: absolute;
          width: 320px;
          height: 320px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(250, 201, 33, 0.5) 0%, rgba(229, 163, 0, 0.2) 50%, transparent 75%);
          pointer-events: none;
          z-index: 1;
          transition: transform 0.12s ease-out, opacity 0.12s ease-out;
        }

        /* Modal Footer Controls */
        .modal-footer-controls {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          margin-top: 16px;
          padding-top: 18px;
          border-top: 1px solid rgba(181, 132, 0, 0.15);
          flex-wrap: wrap;
        }

        .live-energy-metric {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .metric-label {
          font-size: 0.82rem;
          font-weight: 700;
          color: #554823;
        }

        .energy-bar-track {
          width: 120px;
          height: 8px;
          border-radius: 9999px;
          background: #EFE8D3;
          overflow: hidden;
        }

        .energy-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, #F5B700, #E58200);
          border-radius: 9999px;
          transition: width 0.08s ease-out;
        }

        .metric-val {
          font-size: 0.82rem;
          font-weight: 800;
          color: #111111;
          min-width: 36px;
        }

        .modal-playback-btn {
          padding: 10px 22px;
          font-size: 0.88rem;
          box-shadow: 0 4px 14px rgba(250, 201, 33, 0.35);
        }

        /* ── RESPONSIVE ADAPTATIONS ── */
        @media (max-width: 768px) {
          .strands-modal-card {
            padding: 20px;
            border-radius: 24px;
          }
          .strands-visualizer-stage {
            height: 360px;
          }
          .orb-ambient-glow {
            width: 240px;
            height: 240px;
          }
        }

        @media (max-width: 480px) {
          .ambient-audio-island {
            bottom: 18px;
            right: 16px;
            gap: 8px;
          }
          .audio-toggle-pill {
            padding: 7px 12px;
            font-size: 0.74rem;
          }
          .audio-label-text {
            display: none;
          }
          .strands-visualizer-stage {
            height: 300px;
          }
          .modal-footer-controls {
            flex-direction: column;
            gap: 14px;
            align-items: stretch;
          }
          .modal-playback-btn {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
};
