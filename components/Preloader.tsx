'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';
import { greetings, finalGreeting } from '@/data/profile';
import { Monogram } from './Monogram';

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Full-screen preloader — a cinematic multilingual greeting sequence.
 * Each greeting masks in/out with opacity, blur, scale and a clip reveal;
 * resolves into the AN monogram + ALI NASIR, ends on SALAM, then the curtain
 * lifts. Once per session.
 */
export function Preloader({ onComplete }: { onComplete: () => void }) {
  const [stage, setStage] = useState<'greeting' | 'name' | 'done'>('greeting');
  const [idx, setIdx] = useState(0);
  const reduce = useReducedMotion();
  const doneRef = useRef(false);

  const finish = useCallback(() => {
    if (doneRef.current) return;
    doneRef.current = true;
    setStage('done');
    onComplete();
  }, [onComplete]);

  useEffect(() => {
    if (sessionStorage.getItem('preloader-played')) {
      finish();
      return;
    }
    let i = 0;
    setIdx(0);
    const step = reduce ? 100 : 320;
    const interval = setInterval(() => {
      i += 1;
      if (i < greetings.length) {
        setIdx(i);
      } else {
        clearInterval(interval);
        setStage('name');
      }
    }, step);
    return () => clearInterval(interval);
  }, [reduce, finish]);

  useEffect(() => {
    if (stage === 'name') {
      const t = setTimeout(() => {
        sessionStorage.setItem('preloader-played', '1');
        finish();
      }, reduce ? 500 : 1300);
      return () => clearTimeout(t);
    }
  }, [stage, reduce, finish]);

  const word = greetings[idx % greetings.length];

  return (
    <AnimatePresence>
      {stage !== 'done' && (
        <motion.div
          className="fixed inset-0 z-[160] flex items-center justify-center overflow-hidden bg-bg"
          exit={{ y: '-100%', transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } }}
        >
          <div className="grid-bg absolute inset-0 opacity-50" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[60vh] w-[60vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.07] blur-[130px]" />

          <div className="relative flex flex-col items-center px-6">
            {stage === 'greeting' ? (
              <div className="relative flex h-28 items-center justify-center overflow-hidden sm:h-32">
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={word}
                    initial={{ opacity: 0, y: 60, scale: 0.9, filter: 'blur(10px)', clipPath: 'inset(0 0 100% 0)' }}
                    animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)', clipPath: 'inset(0 0 0% 0)' }}
                    exit={{ opacity: 0, y: -60, scale: 1.05, filter: 'blur(10px)', clipPath: 'inset(100% 0 0 0)' }}
                    transition={{ duration: reduce ? 0 : 0.5, ease: EASE }}
                    className="font-display text-6xl font-semibold tracking-tightest text-fg sm:text-8xl"
                  >
                    {word}
                  </motion.span>
                </AnimatePresence>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: EASE }}
                className="flex flex-col items-center"
              >
                <Monogram className="h-14 w-28 text-fg" animate />
                <motion.h1
                  initial={{ opacity: 0, y: 16, clipPath: 'inset(0 0 100% 0)' }}
                  animate={{ opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)' }}
                  transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
                  className="font-display mt-6 text-4xl font-bold tracking-tightest text-fg sm:text-6xl"
                >
                  ALI NASIR
                </motion.h1>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.45 }}
                  className="tech-label mt-4"
                >
                  {finalGreeting} · SOFTWARE ENGINEER
                </motion.span>
              </motion.div>
            )}

            {/* progress line */}
            <div className="absolute -bottom-14 left-1/2 h-px w-44 -translate-x-1/2 overflow-hidden bg-line-strong">
              <motion.div
                className="h-full bg-accent"
                initial={{ width: '0%' }}
                animate={{ width: stage === 'greeting' ? `${((idx + 1) / greetings.length) * 100}%` : '100%' }}
                transition={{ duration: 0.3, ease: 'linear' }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
