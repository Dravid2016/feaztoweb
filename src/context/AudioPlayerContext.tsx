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

    try {
      if (!audioContextRef.current) {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (!AudioContextClass) return;

        const ctx = new AudioContextClass();
        audioContextRef.current = ctx;

        const analyser = ctx.createAnalyser();
        analyser.fftSize = 256;
        analyser.smoothingTimeConstant = 0.85;
        analyserRef.current = analyser;

        try {
          const source = ctx.createMediaElementSource(audio);
          sourceNodeRef.current = source;
          source.connect(analyser);
          analyser.connect(ctx.destination);
        } catch (err) {
          console.warn('Web Audio source connection notice:', err);
        }
      }

      if (audioContextRef.current && audioContextRef.current.state === 'suspended') {
        audioContextRef.current.resume().catch(() => {});
      }
    } catch {
      // Graceful fallback to standard HTML5 audio playback without visualizer if Web Audio throws
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

  // Multi-tier automatic playback strategy with zero-delay fallback
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.35;

    // Direct attempt to play unmuted immediately when site is visited
    const startAudio = () => {
      if (!audio) return;

      audio.muted = false;
      audio.volume = 0.35;
      const playPromise = audio.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            initAudioAnalyser();
            removeUnlockListeners();
          })
          .catch(() => {
            // If browser blocks audible autoplay before user engagement,
            // start muted in background so audio is immediately spinning and ready,
            // and unmute on the earliest interaction
            audio.muted = true;
            audio.play().then(() => {
              setIsPlaying(true);
            }).catch(() => {});
          });
      }
    };

    startAudio();

    // Universal gesture unlock for all mobile and desktop browsers:
    // Triggers on any touch, swipe, tap, scroll, click, mousemove, or keypress
    const unlockAndPlay = () => {
      if (!audio) return;

      // Resume AudioContext if suspended
      if (audioContextRef.current && audioContextRef.current.state === 'suspended') {
        audioContextRef.current.resume().catch(() => {});
      }

      if (audio.muted) {
        audio.muted = false;
      }
      audio.volume = 0.35;

      const p = audio.play();
      if (p !== undefined) {
        p.then(() => {
          setIsPlaying(true);
          initAudioAnalyser();
          removeUnlockListeners();
        }).catch(() => {});
      } else {
        setIsPlaying(true);
        initAudioAnalyser();
        removeUnlockListeners();
      }
    };

    const removeUnlockListeners = () => {
      const events = [
        'touchstart', 'touchend', 'touchmove', 
        'pointerdown', 'pointerup', 'pointermove',
        'click', 'mousedown', 'mouseup', 
        'keydown', 'scroll', 'wheel'
      ];
      events.forEach((evt) => {
        window.removeEventListener(evt, unlockAndPlay, true);
        document.removeEventListener(evt, unlockAndPlay, true);
      });
    };

    const events = [
      'touchstart', 'touchend', 'touchmove', 
      'pointerdown', 'pointerup', 'pointermove',
      'click', 'mousedown', 'mouseup', 
      'keydown', 'scroll', 'wheel'
    ];
    events.forEach((evt) => {
      window.addEventListener(evt, unlockAndPlay, { capture: true, passive: true });
      document.addEventListener(evt, unlockAndPlay, { capture: true, passive: true });
    });

    // Also retry unmuting on page visibility / focus change
    const onVisibilityOrFocus = () => {
      if (document.visibilityState === 'visible') {
        unlockAndPlay();
      }
    };
    document.addEventListener('visibilitychange', onVisibilityOrFocus);
    window.addEventListener('focus', onVisibilityOrFocus);

    return () => {
      removeUnlockListeners();
      document.removeEventListener('visibilitychange', onVisibilityOrFocus);
      window.removeEventListener('focus', onVisibilityOrFocus);
      if (audioContextRef.current) {
        audioContextRef.current.close().catch(() => {});
      }
    };
  }, [initAudioAnalyser]);

  const togglePlayback = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audioContextRef.current && audioContextRef.current.state === 'suspended') {
      audioContextRef.current.resume().catch(() => {});
    }

    if (isPlaying && !audio.paused && !audio.muted) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.muted = false;
      audio.volume = 0.35;
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
          initAudioAnalyser();
        })
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
        autoPlay
        playsInline
      />
      {children}
    </AudioPlayerContext.Provider>
  );
};
