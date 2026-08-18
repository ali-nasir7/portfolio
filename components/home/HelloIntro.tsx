'use client';

import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const ROTATING = ['NextJS', 'UI/UX', 'Web Developer', 'AI Engineer', 'Java', 'Spring Boot'];

/**
 * Matches the target's "Hello / [rotating] / Hire Me" intro that sits between
 * the hero and the main headline. Centered, with a small AN circle and a
 * subtle tag-line "Full Stack AI Engineer" above the rotating word.
 */
export function HelloIntro() {
  const reduce = useReducedMotion();
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % ROTATING.length), 2000);
    return () => clearInterval(t);
  }, []);

  const word = ROTATING[idx];

  return (
    <section className="relative overflow-hidden py-12 sm:py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-6 sm:px-8">
        {/* Top: Hello */}
        <motion.h2
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-2xl font-medium tracking-tightest text-fg sm:text-3xl"
        >
          Hello
        </motion.h2>

        {/* Middle: rotating word + AN circle + Hire Me button (matches target layout) */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-4 sm:mt-8 sm:gap-x-10">
          {/* Rotating word with clipPath reveal */}
          <div className="relative flex h-10 items-center justify-center overflow-hidden sm:h-12">
            <AnimatePresence mode="popLayout">
              <motion.span
                key={word}
                initial={{ y: '110%', opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
                animate={{ y: '0%', opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
                exit={{ y: '-110%', opacity: 0, clipPath: 'inset(100% 0 0 0)' }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="font-display block text-2xl font-medium tracking-tightest text-fg sm:text-3xl"
              >
                {word}*
              </motion.span>
            </AnimatePresence>
          </div>

          {/* AN circle */}
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-fg/80 bg-bg-700 text-fg shadow-[0_8px_20px_-8px_rgba(0,0,0,0.12)] sm:h-16 sm:w-16">
              <span className="font-display text-sm font-bold tracking-tightest sm:text-base">AN</span>
            </div>
          </motion.div>

          {/* Hire Me button */}
          <motion.a
            initial={reduce ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            href="/contact"
            className="group inline-flex items-center gap-1.5 rounded-full border border-fg/80 px-5 py-2.5 text-sm font-medium text-fg transition-colors hover:bg-fg hover:text-bg"
          >
            Hire Me
            <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.a>
        </div>

        {/* Bottom: Full Stack AI Engineer */}
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="font-display mt-6 text-xl font-medium tracking-tightest text-fg sm:mt-8 sm:text-2xl"
        >
          Full Stack <span className="serif-accent">AI Engineer</span>
        </motion.p>
      </div>
    </section>
  );
}
