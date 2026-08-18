'use client';

import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { techItems, techCategories, type TechCategory } from '@/data/about-tech';
import { TechIcon } from '@/components/TechIcon';

/**
 * "Tech Stack" — tabbed list of all technologies grouped by category
 * (Frontend / Backend / AI Agents / Databases / DevOps & Tools), with
 * each tech shown as a small icon + name. Matches the target's
 * about-page block.
 */
export function TechStack() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState<TechCategory | 'All'>('All');
  const [showCount, setShowCount] = useState(16);

  const filtered =
    active === 'All' ? techItems : techItems.filter((t) => t.category === active);

  const visible = filtered.slice(0, showCount);
  const hasMore = filtered.length > showCount;

  return (
    <section className="relative mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-10% 0px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="text-center"
      >
        <h2 className="font-display text-4xl font-semibold tracking-tightest text-fg sm:text-5xl md:text-6xl">
          Tech <span className="serif-accent text-accent">Stack</span>
        </h2>
        <p className="mx-auto mt-4 max-w-md text-base text-fg-muted">
          35+ Technologies I Work With
        </p>
      </motion.div>

      {/* Tabs */}
      <div className="mt-12 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        <TabButton label="All" active={active === 'All'} onClick={() => { setActive('All'); setShowCount(16); }} />
        {techCategories.map((c) => (
          <TabButton key={c} label={c} active={active === c} onClick={() => { setActive(c); setShowCount(16); }} />
        ))}
      </div>

      {/* Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
          className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
        >
          {visible.map((t, i) => (
            <motion.div
              key={t.name}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: Math.min(i * 0.02, 0.4) }}
              className="group flex flex-col items-center gap-2 rounded-2xl border border-line bg-bg-700 p-5 text-center transition-shadow hover:shadow-[0_8px_24px_-12px_rgba(0,0,0,0.12)]"
            >
              <TechIcon name={t.icon} className="h-12 w-12" />
              <span className="font-mono-tech text-[11px] tracking-[0.08em] text-fg">
                {t.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {hasMore && (
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setShowCount((c) => c + 16)}
            className="rounded-full border border-fg/80 px-6 py-2.5 text-sm font-medium text-fg transition-colors hover:bg-fg hover:text-bg"
          >
            Show more
          </button>
        </div>
      )}
    </section>
  );
}

function TabButton({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={
        'rounded-full px-5 py-2 text-sm font-medium transition-colors ' +
        (active
          ? 'bg-fg text-bg'
          : 'border border-line bg-bg-700 text-fg-muted hover:border-fg/40 hover:text-fg')
      }
    >
      {label}
    </button>
  );
}
