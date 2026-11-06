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
  isMuted: boolean;
  audioLevel: number;
  togglePlayback: () => void;
  needsInteraction: boolean;
  dismissPrompt: () => void;
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
  const animationFrameRef = useRef<number | null>(null);

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [needsInteraction, setNeedsInteraction] = useState<boolean>(false);
  const [audioLevel, setAudioLevel] = useState<number>(0);
  const [isOrbModalOpen, setIsOrbModalOpen] = useState<boolean>(false);

  // User manual mute flag (only true when user explicitly taps orb to mute in current session)
  const userMutedRef = useRef<boolean>(false);

  const setManualMuteState = (muted: boolean) => {
    userMutedRef.current = muted;
    setIsMuted(muted);
  };

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
          source.connect(analyser);
          analyser.connect(ctx.destination);
        } catch {
          // If already connected or restricted, continue
        }
      }

      if (audioContextRef.current && audioContextRef.current.state === 'suspended') {
        audioContextRef.current.resume().catch(() => {});
      }
    } catch {
      // Graceful fallback: audio still plays directly via HTMLAudioElement
    }
  }, []);

  // Audio analysis frame loop for reactive orb
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

        const rawEnergy = Math.min(1.0, bassAvg * 0.7 + totalAvg * 0.5);
        smoothedLevelRef.current += (rawEnergy - smoothedLevelRef.current) * 0.22;
      } else {
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

  // ── AUTOPLAY & ANYWHERE TOUCH/CLICK/SCROLL ACTIVATION ──
  // 1. On fresh opening or reload: attempt unmuted autoplay immediately.
  // 2. If blocked by browser: listen for user interaction anywhere (touch, click, scroll).
  // 3. On interaction: start audio playback immediately.
  // 4. Orb button controls manual mute/unmute normally.
  // 5. If user manually muted via orb button, respect preference.
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.35;

    // If visitor previously clicked to mute, respect it strictly
    if (userMutedRef.current) {
      audio.muted = true;
      setIsMuted(true);
      setNeedsInteraction(false);
      return;
    }

    // Helper: controlled attempt to start audio with sound
    const attemptStartAudio = async (): Promise<boolean> => {
      if (!audio) return false;
      if (userMutedRef.current) return false;

      try {
        if (audioContextRef.current && audioContextRef.current.state === 'suspended') {
          audioContextRef.current.resume().catch(() => {});
        }

        audio.muted = false;
        audio.volume = 0.35;
        const playPromise = audio.play();
        if (playPromise !== undefined) {
          await playPromise;
        }

        setIsPlaying(true);
        setIsMuted(false);
        setNeedsInteraction(false);
        initAudioAnalyser();
        return true;
      } catch {
        return false;
      }
    };

    let cleanupInteractionListener: (() => void) | null = null;

    // First: attempt unmuted autoplay on initial load / reload
    attemptStartAudio().then((success) => {
      if (success) {
        // Autoplay succeeded right away
        return;
      }

      // If autoplay was blocked by browser (mobile / desktop autoplay policy):
      // Listen for the visitor's interaction anywhere on the website.
      let activated = false;

      const onUserInteractionAnywhere = () => {
        if (activated) return;
        if (userMutedRef.current) {
          if (cleanupInteractionListener) {
            cleanupInteractionListener();
            cleanupInteractionListener = null;
          }
          return;
        }

        attemptStartAudio().then((fallbackSuccess) => {
          if (fallbackSuccess) {
            activated = true;
            if (cleanupInteractionListener) {
              cleanupInteractionListener();
              cleanupInteractionListener = null;
            }
          }
        });
      };

      const interactionEvents = ['pointerdown', 'touchstart', 'touchend', 'click', 'scroll', 'wheel', 'keydown'];
      interactionEvents.forEach((evt) => {
        window.addEventListener(evt, onUserInteractionAnywhere, { capture: true, passive: true });
        document.addEventListener(evt, onUserInteractionAnywhere, { capture: true, passive: true });
      });

      cleanupInteractionListener = () => {
        interactionEvents.forEach((evt) => {
          window.removeEventListener(evt, onUserInteractionAnywhere, true);
          document.removeEventListener(evt, onUserInteractionAnywhere, true);
        });
      };
    });

    // Sync isPlaying state with audio element events
    const onPlay = () => {
      setIsPlaying(true);
      setIsMuted(audio.muted);
    };
    const onPause = () => {
      setIsPlaying(false);
    };

    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);

    return () => {
      if (cleanupInteractionListener) {
        cleanupInteractionListener();
      }
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
      if (audioContextRef.current) {
        audioContextRef.current.close().catch(() => {});
      }
    };
  }, [initAudioAnalyser]);

  // Dedicated Audio Button Controller (Strictly the only manual trigger)
  const togglePlayback = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audioContextRef.current && audioContextRef.current.state === 'suspended') {
      audioContextRef.current.resume().catch(() => {});
    }

    // If currently producing sound -> mute it immediately
    if (isPlaying && !audio.paused && !audio.muted) {
      audio.muted = true;
      setManualMuteState(true);
      setIsPlaying(false);
      audio.pause();
    } else {
      // If currently muted/paused -> unmute and play immediately
      audio.muted = false;
      audio.volume = 0.35;
      setManualMuteState(false);
      setNeedsInteraction(false);

      const p = audio.play();
      if (p !== undefined) {
        p.then(() => {
          setIsPlaying(true);
          initAudioAnalyser();
        }).catch(() => {});
      } else {
        setIsPlaying(true);
        initAudioAnalyser();
      }
    }
  };

  const dismissPrompt = () => {
    setNeedsInteraction(false);
  };

  const openOrbModal = () => setIsOrbModalOpen(true);
  const closeOrbModal = () => setIsOrbModalOpen(false);

  return (
    <AudioPlayerContext.Provider
      value={{
        isPlaying,
        isMuted,
        audioLevel,
        togglePlayback,
        needsInteraction,
        dismissPrompt,
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
