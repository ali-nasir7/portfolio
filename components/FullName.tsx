'use client';

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { profile } from '@/data/profile';

/**
 * Cinematic full-name identity reveal — MUHAMMAD ALI NASIR drawn word-by-word
 * as it scrolls into view. Feels like a personal signature, but it's my own
 * typographic design, not a script.
 */
export function FullName() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  const words = profile.fullName.split(' ');

  return (
    <section ref={ref} className="relative overflow-hidden border-t border-line">
      <div className="grid-bg absolute inset-0 opacity-40" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[50vh] w-[50vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.06] blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-6 py-28 text-center sm:px-8 md:py-36">
        <motion.p
          initial={reduce ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono-tech text-[11px] tracking-[0.3em] text-fg-faint"
        >
          THE NAME BEHIND THE WORK
        </motion.p>

        <motion.div style={reduce ? undefined : { y }} className="mt-8">
          <h2 className="font-display text-[10vw] font-bold leading-[0.95] tracking-tightest text-fg sm:text-6xl md:text-7xl lg:text-8xl">
            {words.map((w, i) => (
              <span key={i} className="inline-block overflow-hidden pb-1 align-bottom">
                <motion.span
                  className="inline-block"
                  initial={reduce ? false : { y: '100%', rotate: 2 }}
                  whileInView={{ y: '0%', rotate: 0 }}
                  viewport={{ once: true, margin: '-10% 0px' }}
                  transition={{ duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                >
                  {w}
                </motion.span>
                {i < words.length - 1 && <span className="inline-block">&nbsp;</span>}
              </span>
            ))}
          </h2>
        </motion.div>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="font-mono-tech mt-6 text-[12px] tracking-[0.28em] text-fg-muted"
        >
          {profile.role.toUpperCase()} · {profile.secondaryRole.toUpperCase()}
        </motion.p>
      </div>
    </section>
  );
}
