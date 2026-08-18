'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import { services, type Service } from '@/data/services';

/**
 * "Offered Services" — 2-column grid of 6 service cards, each with a
 * background image and a title + subtitle overlay. Matches the target's
 * about-page block.
 */
const imageFor: Record<Service['imageKey'], string> = {
  1: '/about/img1.png',
  2: '/about/img2.jpg',
  3: '/about/img3.jpg',
  4: '/about/img4.jpg',
  5: '/about/img5.jpg',
  6: '/about/img6.jpg',
};

export function OfferedServices() {
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
          Offered <span className="serif-accent text-accent">Services</span>
        </h2>
      </motion.div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {services.map((s, i) => (
          <motion.div
            key={s.id}
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.7, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="group relative overflow-hidden rounded-2xl border border-line bg-bg-700 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.08)] transition-shadow hover:shadow-[0_16px_40px_-12px_rgba(0,0,0,0.18)]"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={imageFor[s.imageKey]}
                alt={s.title}
                width={800}
                height={500}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-fg/60 via-fg/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="font-display text-2xl font-semibold tracking-tightest text-bg-700 sm:text-3xl">
                  {s.title}
                </h3>
                <p className="mt-1 text-sm text-bg-700/80 sm:text-base">{s.subtitle}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
