'use client';

import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { site } from '@/data/site';

/**
 * The opening hero of the about page — a sitting portrait with a parallax
 * background, a bold outlined "Ali" word, and a "Full Stack / AI ENGINEER"
 * label. Matches the target's about page opening.
 */
export function SittingHero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const yBg = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);
  const yFg = useTransform(scrollYProgress, [0, 1], ['4%', '-4%']);

  return (
    <section ref={ref} className="relative overflow-hidden pt-28 sm:pt-32">
      {/* Outline "WHO AM I" repeated text in background */}
      <div className="pointer-events-none absolute inset-x-0 top-2 -z-10 select-none overflow-hidden sm:top-4" aria-hidden>
        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="flex flex-col items-center gap-2"
        >
          {['WHO AM I', 'WHO AM I', 'WHO AM I'].map((t, i) => (
            <span
              key={i}
              className="whitespace-nowrap font-display text-[18vw] font-bold leading-none tracking-tightest text-fg/[0.04] sm:text-[14vw]"
              style={{ WebkitTextStroke: '0' }}
            >
              {t}
            </span>
          ))}
        </motion.div>
      </div>

      <div className="mx-auto grid max-w-6xl items-end gap-10 px-6 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left text */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="pb-12"
        >
          <h1 className="font-display text-7xl font-bold leading-[0.95] tracking-tightest text-fg sm:text-8xl md:text-9xl">
            Ali
          </h1>
          <p className="font-display mt-6 text-2xl font-medium tracking-tightest text-fg sm:text-3xl">
            Full Stack
          </p>
          <p className="font-mono-tech mt-1 text-sm tracking-[0.22em] text-fg-muted sm:text-base">
            AI ENGINEER
          </p>
        </motion.div>

        {/* Right sitting image with parallax bg */}
        <div className="relative">
          <motion.div
            style={reduce ? undefined : { y: yBg }}
            className="absolute inset-0 -z-10 overflow-hidden rounded-3xl"
          >
            <Image
              src={site.sittingBg}
              alt=""
              width={900}
              height={1200}
              className="h-[110%] w-full object-cover"
              priority
            />
            <div className="absolute inset-0 bg-bg/[0.4]" />
          </motion.div>
          <motion.div style={reduce ? undefined : { y: yFg }} className="relative z-10">
            <Image
              src={site.sitting}
              alt="Ali Nasir"
              width={900}
              height={1200}
              className="h-auto w-full object-cover"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
