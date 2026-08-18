'use client';

import { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react';

/**
 * Global app state: reduced motion, sound, and the developer-mode easter egg.
 * Kept tiny and stable to avoid unnecessary re-renders across the tree.
 */
interface AppState {
  reducedMotion: boolean;
  soundOn: boolean;
  developerMode: boolean;
  toggleSound: () => void;
  toggleReducedMotion: () => void;
  toggleDeveloperMode: () => void;
}

const AppContext = createContext<AppState | null>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [systemReduced, setSystemReduced] = useState(false);
  const [overrideReduced, setOverrideReduced] = useState(false);
  const [soundOn, setSoundOn] = useState(false);
  const [developerMode, setDeveloperMode] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setSystemReduced(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setSystemReduced(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const reducedMotion = systemReduced || overrideReduced;

  const value = useMemo<AppState>(
    () => ({
      reducedMotion,
      soundOn,
      developerMode,
      toggleSound: () => setSoundOn((s) => !s),
      toggleReducedMotion: () => setOverrideReduced((r) => !r),
      toggleDeveloperMode: () => setDeveloperMode((d) => !d),
    }),
    [reducedMotion, soundOn, developerMode]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}

/**
 * A subtle, procedurally generated ambient pad (Web Audio API) for the
 * "Toggle Sound" command. Off by default; never blocks the main thread.
 */
export function useAmbientSound(enabled: boolean) {
  const ctxRef = useRef<AudioContext | null>(null);
  const nodesRef = useRef<{ gain: GainNode; stop: () => void } | null>(null);

  useEffect(() => {
    if (!enabled) {
      nodesRef.current?.stop();
      nodesRef.current = null;
      return;
    }
    try {
      const Ctx = window.AudioContext || (window as any).webkitAudioContext;
      const ctx = ctxRef.current ?? new Ctx();
      ctxRef.current = ctx;
      const gain = ctx.createGain();
      gain.gain.value = 0;
      gain.connect(ctx.destination);

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = 320;
      filter.connect(gain);

      const freqs = [55, 110, 164.8];
      const oscs = freqs.map((f, i) => {
        const o = ctx.createOscillator();
        o.type = i === 0 ? 'sine' : 'triangle';
        o.frequency.value = f;
        o.detune.value = i * 3;
        const og = ctx.createGain();
        og.gain.value = i === 0 ? 0.5 : 0.16;
        o.connect(og).connect(filter);
        o.start();
        return o;
      });

      gain.gain.linearRampToValueAtTime(0.05, ctx.currentTime + 2);
      nodesRef.current = {
        gain,
        stop: () => {
          gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 1);
          oscs.forEach((o) => o.stop(ctx.currentTime + 1.2));
        },
      };
    } catch {
      /* audio unavailable — ignore */
    }
  }, [enabled]);
}
