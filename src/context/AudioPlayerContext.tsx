import React, { createContext, useContext, useState, useRef, useEffect, useCallback } from 'react';

export const FEAZTO_ORB_COLORS = [
  '#FAC921', // Saffron Gold
  '#F5B700', // Deep Turmeric
  '#E5A300', // Warm Amber
  '#FFF8D6', // Cream Silk
  '#FF8A3D', // Terracotta Spice
  '#D48800', // Rich Cardamom Honey
  '#FFFDF2', // Luminous Pearl
];

interface AudioPlayerContextType {
  isPlaying: boolean;
  audioLevel: number;
  togglePlayback: () => void;
  openOrbModal: () => void;
  closeOrbModal: () => void;
  isOrbModalOpen: boolean;
}

const AudioPlayerContext = createContext<AudioPlayerContextType | null>(null);

export const useAudioPlayer = () => {
  const context = useContext(AudioPlayerContext);
  if (!context) {
    throw new Error('useAudioPlayer must be used within an AudioPlayerProvider');
  }
  return context;
};

export const AudioPlayerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
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

  // Setup initial audio volume & robust instant auto-start handling
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.3;

    // Direct attempt to play unmuted as soon as the website loads
    const attemptDirectPlay = () => {
      audio.volume = 0.3;
      audio.muted = false;
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            initAudioAnalyser();
            cleanupListeners();
          })
          .catch(() => {
            // If browser autoplay policy strictly blocked audible autoplay without a gesture,
            // play muted immediately so playback is already running in sync, then unmute on first gesture
            audio.muted = true;
            audio.play().then(() => {
              setIsPlaying(true);
            }).catch(() => {});
          });
      }
    };

    attemptDirectPlay();

    // Universal gesture unlock: immediately unmute and ensure full 30% playback
    const handleFirstInteraction = () => {
      if (audio.muted) {
        audio.muted = false;
      }
      audio.volume = 0.3;
      if (audio.paused) {
        audio
          .play()
          .then(() => {
            setIsPlaying(true);
            initAudioAnalyser();
            cleanupListeners();
          })
          .catch(() => {});
      } else {
        setIsPlaying(true);
        initAudioAnalyser();
        cleanupListeners();
      }
    };

    const cleanupListeners = () => {
      window.removeEventListener('click', handleFirstInteraction, true);
      window.removeEventListener('pointerdown', handleFirstInteraction, true);
      window.removeEventListener('touchstart', handleFirstInteraction, true);
      window.removeEventListener('keydown', handleFirstInteraction, true);
      window.removeEventListener('scroll', handleFirstInteraction, true);
      window.removeEventListener('wheel', handleFirstInteraction, true);
      window.removeEventListener('mousemove', handleFirstInteraction, true);
      document.removeEventListener('visibilitychange', handleFirstInteraction);
    };

    // Use capture phase (true) so it intercepts the very first touch/click instantly
    window.addEventListener('click', handleFirstInteraction, { capture: true, passive: true });
    window.addEventListener('pointerdown', handleFirstInteraction, { capture: true, passive: true });
    window.addEventListener('touchstart', handleFirstInteraction, { capture: true, passive: true });
    window.addEventListener('keydown', handleFirstInteraction, { capture: true, passive: true });
    window.addEventListener('scroll', handleFirstInteraction, { capture: true, passive: true });
    window.addEventListener('wheel', handleFirstInteraction, { capture: true, passive: true });
    window.addEventListener('mousemove', handleFirstInteraction, { capture: true, passive: true, once: true });
    document.addEventListener('visibilitychange', handleFirstInteraction, { passive: true });

    return () => {
      cleanupListeners();
      if (audioContextRef.current) {
        audioContextRef.current.close().catch(() => {});
      }
    };
  }, [initAudioAnalyser]);

  const togglePlayback = () => {
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

  const openOrbModal = () => setIsOrbModalOpen(true);
  const closeOrbModal = () => setIsOrbModalOpen(false);

  return (
    <AudioPlayerContext.Provider
      value={{
        isPlaying,
        audioLevel,
        togglePlayback,
        openOrbModal,
        closeOrbModal,
        isOrbModalOpen,
      }}
    >
      <audio
        ref={audioRef}
        src="/brand/feazto-ambient.mp3"
        loop
        preload="auto"
        crossOrigin="anonymous"
      />
      {children}
    </AudioPlayerContext.Provider>
  );
};

