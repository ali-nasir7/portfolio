'use client';

import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { X, Sparkles } from 'lucide-react';

/**
 * AI core — a small, elegant ambient orb (NOT a chatbot). Breathes when idle,
 * reacts to cursor proximity, and expands on click into a tiny contextual menu.
 * Dismissible, respects reduced motion.
 */

interface OrbSuggestion {
  line: string;
  action: string;
  path: string;
}

function suggestionsFor(pathname: string): OrbSuggestion[] {
  if (pathname.startsWith('/projects')) {
    return [
      { line: 'Want to see the architecture?', action: 'EXPLORE ARCHITECTURE', path: pathname },
      { line: 'Curious about the full stack?', action: 'VIEW STACK', path: '/about#stack' },
      { line: 'Back to the beginning?', action: 'HOME', path: '/' },
    ];
  }
  if (pathname.startsWith('/about')) {
    return [
      { line: 'Want to see what I build?', action: 'VIEW WORK', path: '/projects' },
      { line: 'Curious how I think?', action: 'FROM CODE TO SYSTEMS', path: '/#think' },
      { line: 'Ready to talk?', action: 'CONTACT', path: '/contact' },
    ];
  }
  if (pathname.startsWith('/contact')) {
    return [
      { line: 'Ready to build?', action: 'CONTACT ALI', path: '#contact' },
      { line: 'Want to see the work first?', action: 'VIEW WORK', path: '/projects' },
    ];
  }
  // home / default
  return [
    { line: 'Looking for the interesting stuff?', action: 'EXPLORE WORK', path: '/projects' },
    { line: 'Want to see under the hood?', action: 'OPEN STACK', path: '/about#stack' },
    { line: 'Let\u2019s build something.', action: 'CONTACT', path: '/contact' },
  ];
}

export function AIOrb() {
  const [open, setOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [proximity, setProximity] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const reduce = useReducedMotion();
  const orbRef = useRef<HTMLButtonElement>(null);

  // cursor proximity detection
  useEffect(() => {
    if (reduce || dismissed) return;
    const onMove = (e: MouseEvent) => {
      const el = orbRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const d = Math.hypot(e.clientX - cx, e.clientY - cy);
      setProximity(d < 180);
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, [reduce, dismissed]);

  // don't show until scrolled a bit (never obstruct the hero)
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const suggestions = suggestionsFor(pathname);

  if (dismissed) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed bottom-6 right-6 z-[85]"
        >
          {/* expanded menu */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute bottom-16 right-0 w-72 overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_24px_80px_rgba(0,0,0,0.6)]"
              >
                <div className="flex items-center justify-between border-b border-line px-4 py-3">
                  <span className="font-mono-tech text-[10px] tracking-[0.2em] text-fg-faint">ALI CORE</span>
                  <button onClick={() => setDismissed(true)} aria-label="Dismiss" className="text-fg-faint hover:text-fg">
                    <X size={14} />
                  </button>
                </div>
                <div className="p-2">
                  {suggestions.map((s) => (
                    <button
                      key={s.action}
                      onClick={() => {
                        setOpen(false);
                        router.push(s.path);
                      }}
                      className="flex w-full flex-col items-start gap-0.5 rounded-lg px-3 py-2.5 text-left transition-colors hover:bg-fg/[0.05]"
                    >
                      <span className="text-sm text-fg">{s.line}</span>
                      <span className="font-mono-tech text-[9px] tracking-[0.18em] text-accent">{s.action}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* the orb */}
          <motion.button
            ref={orbRef}
            onClick={() => setOpen((o) => !o)}
            aria-label="Ali core — open quick navigation"
            animate={reduce ? undefined : { scale: proximity ? 1.12 : 1 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-surface/90 text-accent shadow-[0_16px_40px_-12px_rgba(0,0,0,0.6)] backdrop-blur-md"
          >
            {/* breathing halo */}
            <span className="absolute inset-0 rounded-full bg-accent/10 animate-pulse-dot" style={{ animationDuration: '3s' }} />
            {/* internal shimmer */}
            <span className="absolute inset-1 rounded-full border border-accent/20" />
            <Sparkles size={18} className={reduce ? undefined : 'animate-float-slow'} />
            {!open && (
              <span className="pointer-events-none absolute right-0 top-0 h-2 w-2 rounded-full bg-accent opacity-80" />
            )}
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
