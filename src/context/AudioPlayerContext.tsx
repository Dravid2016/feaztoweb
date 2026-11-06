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
  toggleMute: () => void;
  enableSound: () => Promise<void>;
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
  const [isMuted, setIsMuted] = useState<boolean>(() => {
    try {
      return localStorage.getItem('feazto_audio_muted') === 'true';
    } catch {
      return false;
    }
  });
  const [needsInteraction, setNeedsInteraction] = useState<boolean>(false);
  const [audioLevel, setAudioLevel] = useState<number>(0);
  const [isOrbModalOpen, setIsOrbModalOpen] = useState<boolean>(false);

  // Reference to track user manual mute intention across re-renders
  const userMutedRef = useRef<boolean>(
    typeof window !== 'undefined' && localStorage.getItem('feazto_audio_muted') === 'true'
  );

  const setManualMuteState = (muted: boolean) => {
    userMutedRef.current = muted;
    setIsMuted(muted);
    try {
      localStorage.setItem('feazto_audio_muted', muted ? 'true' : 'false');
    } catch {
      // Ignored
    }
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

  // Multi-tier immediate autoplay & un-mute orchestration
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Check if user previously chosen to mute
    const isUserMuted = userMutedRef.current;

    audio.volume = 0.35;
    if (isUserMuted) {
      audio.muted = true;
    }

    // Helper: start unmuted sound
    const playUnmuted = async () => {
      if (!audio) return false;
      if (userMutedRef.current) {
        return false;
      }
      try {
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

    // Helper: start muted sound as background fallback
    const playMuted = async () => {
      if (!audio) return;
      try {
        audio.muted = true;
        const playPromise = audio.play();
        if (playPromise !== undefined) {
          await playPromise;
        }
        // If user didn't intentionally mute, show prompt to let them enable sound with one tap
        if (!userMutedRef.current) {
          setNeedsInteraction(true);
        }
      } catch {
        if (!userMutedRef.current) {
          setNeedsInteraction(true);
        }
      }
    };

    if (!isUserMuted) {
      // 1. Immediate unmuted attempt on initial page load / refresh
      playUnmuted().then((success) => {
        if (!success) {
          // If browser policy rejects unmuted sound prior to user gesture,
          // start muted in background and present subtle prompt
          playMuted();
        }
      });
    }

    // 2. Universal gesture un-mute on mobile & desktop:
    // Any screen tap, touchstart, swipe, mouse move, pointer press, scroll, or keypress
    // un-mutes the running audio instantly without having to search for a button
    const unlockSound = () => {
      const curAudio = audioRef.current;
      if (!curAudio) return;

      // Never un-mute automatically if user manually muted
      if (userMutedRef.current) return;

      // Resume AudioContext if suspended (required by Safari / WebKit)
      if (audioContextRef.current && audioContextRef.current.state === 'suspended') {
        audioContextRef.current.resume().catch(() => {});
      }

      curAudio.muted = false;
      curAudio.volume = 0.35;

      const p = curAudio.play();
      if (p !== undefined) {
        p.then(() => {
          setIsPlaying(true);
          setIsMuted(false);
          setNeedsInteraction(false);
          initAudioAnalyser();
          detachUnlock();
        }).catch(() => {
          // If still blocked, wait for next user action
        });
      } else {
        setIsPlaying(true);
        setIsMuted(false);
        setNeedsInteraction(false);
        initAudioAnalyser();
        detachUnlock();
      }
    };

    const detachUnlock = () => {
      const events = [
        'touchstart', 'touchend', 'touchmove',
        'pointerdown', 'pointerup', 'pointermove',
        'click', 'mousedown', 'mouseup',
        'keydown', 'scroll', 'wheel'
      ];
      events.forEach((evt) => {
        window.removeEventListener(evt, unlockSound, true);
        document.removeEventListener(evt, unlockSound, true);
        document.body?.removeEventListener(evt, unlockSound, true);
      });
    };

    const events = [
      'touchstart', 'touchend', 'touchmove',
      'pointerdown', 'pointerup', 'pointermove',
      'click', 'mousedown', 'mouseup',
      'keydown', 'scroll', 'wheel'
    ];
    events.forEach((evt) => {
      window.addEventListener(evt, unlockSound, { capture: true, passive: true });
      document.addEventListener(evt, unlockSound, { capture: true, passive: true });
      document.body?.addEventListener(evt, unlockSound, { capture: true, passive: true });
    });

    // Also unmute when user switches back to tab or focuses window
    const handleVisibility = () => {
      if (document.visibilityState === 'visible' && !userMutedRef.current) {
        unlockSound();
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);
    window.addEventListener('focus', handleVisibility);

    // Sync isPlaying state with audio element events
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);

    return () => {
      detachUnlock();
      document.removeEventListener('visibilitychange', handleVisibility);
      window.removeEventListener('focus', handleVisibility);
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
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
      setManualMuteState(true);
    } else {
      audio.muted = false;
      audio.volume = 0.35;
      setManualMuteState(false);
      setNeedsInteraction(false);
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
          initAudioAnalyser();
        })
        .catch(() => {});
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audioContextRef.current && audioContextRef.current.state === 'suspended') {
      audioContextRef.current.resume().catch(() => {});
    }

    if (!audio.muted && isPlaying) {
      audio.muted = true;
      setManualMuteState(true);
    } else {
      audio.muted = false;
      audio.volume = 0.35;
      setManualMuteState(false);
      setNeedsInteraction(false);
      if (audio.paused) {
        audio.play().then(() => {
          setIsPlaying(true);
          initAudioAnalyser();
        }).catch(() => {});
      }
    }
  };

  const enableSound = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audioContextRef.current && audioContextRef.current.state === 'suspended') {
      audioContextRef.current.resume().catch(() => {});
    }

    audio.muted = false;
    audio.volume = 0.35;
    setManualMuteState(false);
    setNeedsInteraction(false);

    try {
      await audio.play();
      setIsPlaying(true);
      initAudioAnalyser();
    } catch {
      // Ignored
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
        toggleMute,
        enableSound,
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
