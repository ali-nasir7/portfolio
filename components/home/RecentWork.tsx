'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { projects } from '@/data/projects';
import { ProjectVisual } from '@/components/ProjectVisual';

const FEATURED_SLUGS = [
  'nexuserp-cloud',
  'pipelineiq',
  'fars',
  'abroad-school',
  'smarttrust',
  'livlongmd',
];

/**
 * "Recent Work" — a horizontal-scrolling rail of featured project cards,
 * with a centered header and a "View All Work" CTA. Matches the target's
 * home-page composition.
 */
export function RecentWork() {
  const reduce = useReducedMotion();
  const items = projects.filter((p) => FEATURED_SLUGS.includes(p.slug));

  return (
    <section className="relative overflow-hidden border-t border-line py-20 sm:py-28" id="work">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        {/* Header */}
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-mono-tech text-[11px] tracking-[0.28em] text-fg-faint">Recent Work</p>
            <h2 className="font-display mt-3 text-4xl font-semibold leading-[0.98] tracking-tightest text-fg sm:text-5xl md:text-6xl">
              Selected <span className="serif-accent text-accent">systems</span>.
            </h2>
          </motion.div>
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 rounded-full border border-fg/80 px-6 py-3 text-sm font-medium text-fg transition-colors hover:bg-fg hover:text-bg"
          >
            View All Work
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Project rail */}
        <div className="-mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 sm:gap-6 sm:px-8 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0">
          {items.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.7, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="group relative w-[80vw] shrink-0 snap-start sm:w-[60vw] md:w-auto"
            >
              <Link
                href={`/projects/${p.slug}`}
                className="block overflow-hidden rounded-3xl border border-line bg-bg-700 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.08)] transition-shadow hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.18)]"
              >
                <div className="relative overflow-hidden border-b border-line">
                  <ProjectVisual project={p} className="h-48 w-full transition-transform duration-700 ease-out group-hover:scale-[1.04] sm:h-56" />
                  <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-bg-700/80 text-fg opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
                    <ArrowUpRight size={15} />
                  </span>
                  <span className="absolute left-4 top-4 rounded-full border border-line bg-bg-700/80 px-2.5 py-1 font-mono-tech text-[10px] tracking-[0.14em] text-fg-muted backdrop-blur">
                    {p.category.toUpperCase()}
                  </span>
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="font-display text-xl font-semibold tracking-tightest text-fg transition-colors group-hover:text-accent sm:text-2xl">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted">{p.statusLabel}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
