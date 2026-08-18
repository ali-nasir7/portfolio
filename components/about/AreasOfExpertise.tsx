'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { expertise } from '@/data/services';

/**
 * "Areas of Expertise" — three numbered cards (01 / 02 / 03), each with
 * a title and a body paragraph. Matches the target's about-page block.
 */
export function AreasOfExpertise() {
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
          Areas of <span className="serif-accent text-accent">Expertise</span>
        </h2>
      </motion.div>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {expertise.map((e, i) => (
          <motion.div
            key={e.num}
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl border border-line bg-bg-700 p-7 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.08)]"
          >
            <span className="font-display text-4xl font-bold tracking-tightest text-fg sm:text-5xl">
              {e.num}
            </span>
            <h3 className="font-display mt-5 text-xl font-semibold tracking-tightest text-fg sm:text-2xl">
              {e.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-fg-muted">{e.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
