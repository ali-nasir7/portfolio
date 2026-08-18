'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useApp } from '@/lib/app-context';

const KONAMI = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

/** Konami-code easter egg — live system-status HUD with real runtime values. */
export function DeveloperMode() {
  const { developerMode, toggleDeveloperMode } = useApp();
  const pathname = usePathname();
  const [seq, setSeq] = useState<string[]>([]);
  const [hud, setHud] = useState({ fps: 0, scroll: 0, vw: 0, vh: 0, dpr: 1 });

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const next = [...seq, e.key];
      if (next.length > KONAMI.length) next.shift();
      setSeq(next);
      if (next.join(',') === KONAMI.join(',')) {
        toggleDeveloperMode();
        setSeq([]);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [seq, toggleDeveloperMode]);

  useEffect(() => {
    if (!developerMode) return;
    let raf = 0;
    let frames = 0;
    let last = performance.now();
    const tick = (now: number) => {
      frames++;
      if (now - last >= 1000) {
        setHud((h) => ({
          fps: frames,
          scroll: Math.round(window.scrollY),
          vw: window.innerWidth,
          vh: window.innerHeight,
          dpr: window.devicePixelRatio,
        }));
        frames = 0;
        last = now;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [developerMode]);

  return (
    <AnimatePresence>
      {developerMode && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pointer-events-none fixed inset-0 z-[220]"
          >
            <div className="grid-bg absolute inset-0 opacity-50" />
            <div className="absolute inset-x-0 h-40" style={{ background: 'linear-gradient(to bottom, transparent, rgba(227,168,86,0.05) 45%, rgba(227,168,86,0.08) 50%, rgba(227,168,86,0.05) 55%, transparent)' }} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="fixed right-4 top-24 z-[230] hidden w-56 rounded-xl border border-line bg-surface p-4 font-mono-tech text-[11px] leading-relaxed text-fg-muted shadow-[0_16px_50px_rgba(0,0,0,0.5)] sm:block"
          >
            <div className="flex items-center justify-between">
              <span className="tracking-[0.2em] text-accent">DEV MODE</span>
              <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </div>
            <dl className="mt-3 space-y-1">
              <Row k="ROUTE" v={pathname} />
              <Row k="FPS" v={`${hud.fps}`} />
              <Row k="SCROLL" v={`${hud.scroll}px`} />
              <Row k="VIEWPORT" v={`${hud.vw}×${hud.vh}`} />
              <Row k="DPR" v={`${hud.dpr}x`} />
            </dl>
            <p className="mt-3 text-[9px] tracking-[0.08em] text-fg-faint">↑↑↓↓←→←→BA to exit</p>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between">
      <dt className="text-fg-faint">{k}</dt>
      <dd className="text-fg">{v}</dd>
    </div>
  );
}
