import React from 'react';
import { Volume2, VolumeX, X, Music } from 'lucide-react';
import Strands from './Strands';
import { useAudioPlayer, FEAZTO_ORB_COLORS } from '../context/AudioPlayerContext';

export const StrandsOrbModal: React.FC = () => {
  const { isOrbModalOpen, closeOrbModal, isPlaying, audioLevel, togglePlayback } = useAudioPlayer();

  if (!isOrbModalOpen) return null;

  return (
    <div className="strands-modal-backdrop" onClick={closeOrbModal}>
      <div className="strands-modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header-bar">
          <div className="modal-title-pill">
            <Music size={14} className="title-music-icon" />
            <span>feazto Acoustic Resonance • Audio-Reactive Orb</span>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={closeOrbModal}
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

      <style>{`
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
    </div>
  );
};
export default StrandsOrbModal;
