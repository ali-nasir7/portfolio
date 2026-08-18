'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { profile } from '@/data/profile';
import { Reveal } from './Reveal';

/** Philosophy / positioning — short, confident, human. */
export function Introduction() {
  const reduce = useReducedMotion();
  const words = 'I BUILD SYSTEMS.'.split(' ');

  return (
    <section className="relative mx-auto max-w-6xl px-6 py-28 sm:px-8 md:py-40">
      <Reveal>
        <p className="font-mono-tech text-[11px] tracking-[0.28em] text-fg-faint">01 / POSITIONING</p>
      </Reveal>

      <h2 className="font-display mt-8 text-5xl font-bold leading-[1.02] tracking-tightest text-fg sm:text-7xl md:text-8xl">
        {words.map((w, i) => (
          <span key={i} className="inline-block overflow-hidden pb-1 align-bottom">
            <motion.span
              className="inline-block"
              initial={reduce ? false : { y: '100%' }}
              whileInView={{ y: '0%' }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.7, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            >
              {w}
            </motion.span>
            {i < words.length - 1 && <span className="inline-block">&nbsp;</span>}
          </span>
        ))}
      </h2>

      <div className="mt-12 max-w-2xl space-y-5">
        {profile.positioningLines.map((line, i) => (
          <Reveal key={line} delay={i * 0.1}>
            <p className="text-xl leading-relaxed text-fg-muted sm:text-2xl">
              <span className="serif-accent mr-3 text-accent">{String(i + 1).padStart(2, '0')}.</span>
              {line}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
