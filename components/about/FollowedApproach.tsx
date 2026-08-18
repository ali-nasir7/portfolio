'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { journey } from '@/data/services';

/**
 * "Followed Approach" — three numbered phases (01 / 02 / 03), each with
 * a large outlined number, a phase label, a title, and a body paragraph.
 * Matches the target's about-page block.
 */
export function FollowedApproach() {
  const reduce = useReducedMotion();

  return (
    <section className="relative mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-10% 0px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className="font-display text-3xl font-semibold tracking-tightest text-fg sm:text-4xl md:text-5xl">
          Followed <span className="serif-accent text-accent">Approach</span>
        </h2>
      </motion.div>

      <div className="mt-16 space-y-20">
        {journey.map((j, i) => (
          <motion.div
            key={j.num}
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="grid items-center gap-8 md:grid-cols-[0.5fr_1fr] md:gap-12"
          >
            <span
              className="font-display block text-7xl font-bold leading-none tracking-tightest text-transparent sm:text-8xl md:text-9xl"
              style={{ WebkitTextStroke: '1.5px rgba(20,20,20,0.4)' }}
            >
              {j.num}
            </span>
            <div>
              <p className="font-mono-tech text-[11px] tracking-[0.24em] text-fg-faint">{j.phase}</p>
              <h3 className="font-display mt-2 text-2xl font-semibold tracking-tightest text-fg sm:text-3xl">
                {j.title}
              </h3>
              <p className="mt-3 max-w-lg text-base leading-relaxed text-fg-muted">{j.body}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
