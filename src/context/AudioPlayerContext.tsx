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

  // User manual mute flag (true when visitor has explicitly muted and preserved in localStorage)
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

  // ── AUTOPLAY & FIRST INTERACTION (TOUCH, SCROLL, WHEEL, CLICK) PLAYBACK ──
  // 1. Initial Opening / Reload: immediately attempt to play background audio with sound.
  // 2. If browser autoplay is permitted, audio starts automatically.
  // 3. If autoplay is blocked: wait for the visitor's first genuine interaction.
  //    - On mobile: touchstart, touchend, touchmove (mobile scroll).
  //    - On desktop: wheel (mouse scroll), scroll, pointerup, click, keydown.
  //    - Crucial: audio.play() is called SYNCHRONOUSLY directly inside the event handler stack
  //      so modern browsers (iOS Safari, Android Chrome, Desktop Chrome/Firefox) do NOT drop
  //      transient user activation due to microtasks or Promise delays.
  //    - Listeners stay active until audio successfully starts producing sound.
  //    - If audio.play() throws NotAllowedError on a passive gesture (e.g. desktop wheel without click),
  //      we catch the error without breaking, log the browser diagnostic, and keep waiting for
  //      a qualifying interaction or direct click on the circular Orb button.
  //    - Once audio successfully starts, remove all temporary listeners immediately.
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.35;

    // If visitor previously clicked to mute, preserve mute preference and do not force playback
    if (userMutedRef.current) {
      audio.muted = true;
      setIsMuted(true);
      return;
    }

    // Direct synchronous playback trigger
    const triggerAudioPlayback = (triggerSource: string): Promise<boolean> => {
      if (!audio) return Promise.resolve(false);
      if (userMutedRef.current) return Promise.resolve(false);

      try {
        if (audioContextRef.current && audioContextRef.current.state === 'suspended') {
          audioContextRef.current.resume().catch(() => {});
        }

        audio.muted = false;
        audio.volume = 0.35;

        // Synchronous call to audio.play() preserving current event call stack
        const playPromise = audio.play();

        if (playPromise !== undefined) {
          return playPromise
            .then(() => {
              console.info(`[Feazto Audio] Playback started successfully via: ${triggerSource}`);
              setIsPlaying(true);
              setIsMuted(false);
              initAudioAnalyser();
              return true;
            })
            .catch((err: unknown) => {
              const error = err as Error;
              console.warn(
                `[Feazto Audio] Playback attempt via ${triggerSource} rejected by browser autoplay policy:`,
                error.name,
                error.message
              );
              return false;
            });
        } else {
          setIsPlaying(true);
          setIsMuted(false);
          initAudioAnalyser();
          return Promise.resolve(true);
        }
      } catch (err: unknown) {
        const error = err as Error;
        console.warn(`[Feazto Audio] Playback call error via ${triggerSource}:`, error);
        return Promise.resolve(false);
      }
    };

    let cleanupListeners: (() => void) | null = null;
    let hasSuccessfullyStarted = false;

    // 1. Immediate unmuted autoplay attempt on initial opening / reload
    triggerAudioPlayback('initial-autoplay').then((started) => {
      if (started) {
        hasSuccessfullyStarted = true;
        return;
      }

      console.info('[Feazto Audio] Initial autoplay blocked by browser policy. Registering first-interaction listeners.');

      const removeTemporaryListeners = () => {
        if (cleanupListeners) {
          cleanupListeners();
          cleanupListeners = null;
        }
      };

      const handleUserGesture = (evt: Event) => {
        if (hasSuccessfullyStarted) return;
        if (userMutedRef.current) {
          removeTemporaryListeners();
          return;
        }

        // Call play synchronously in the event dispatch thread
        triggerAudioPlayback(`event:${evt.type}`).then((success) => {
          if (success) {
            hasSuccessfullyStarted = true;
            removeTemporaryListeners();
          }
        });
      };

      // Events for:
      // - First desktop scroll: 'wheel', 'scroll'
      // - First mobile touch: 'touchstart', 'touchend', 'pointerup', 'pointerdown'
      // - First mobile scroll: 'touchmove', 'scroll'
      // - First interaction: 'click', 'keydown'
      const targetEvents = [
        'touchstart',
        'touchend',
        'touchmove',
        'wheel',
        'scroll',
        'pointerup',
        'pointerdown',
        'click',
        'keydown',
      ];

      targetEvents.forEach((evtName) => {
        window.addEventListener(evtName, handleUserGesture, { capture: true, passive: true });
        document.addEventListener(evtName, handleUserGesture, { capture: true, passive: true });
      });

      cleanupListeners = () => {
        targetEvents.forEach((evtName) => {
          window.removeEventListener(evtName, handleUserGesture, true);
          document.removeEventListener(evtName, handleUserGesture, true);
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
      if (cleanupListeners) {
        cleanupListeners();
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
