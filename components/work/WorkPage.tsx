'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/projects';
import { ProjectVisual } from '@/components/ProjectVisual';

type Filter = 'All' | 'Frontend' | 'Fullstack' | 'AI Integrations';

const CATEGORIES: Filter[] = ['All', 'Frontend', 'Fullstack', 'AI Integrations'];

/**
 * Map a project's status to one of the target's filter categories
 * (Frontend / Fullstack / AI Integrations).
 */
function categoryFor(p: (typeof projects)[number]): Filter {
  const stackStr = p.stack.join(' ').toLowerCase();
  if (stackStr.includes('openai') || stackStr.includes('ai') || stackStr.includes('langchain') || p.name.toLowerCase().includes('pipelineiq') || p.name.toLowerCase().includes('buildsense') || p.name.toLowerCase().includes('smarttrust')) {
    return 'AI Integrations';
  }
  if (stackStr.includes('javascript') || stackStr.includes('html') || stackStr.includes('react') || stackStr.includes('css') || p.category === 'Client Work · International') {
    return 'Frontend';
  }
  return 'Fullstack';
}

export function WorkPage() {
  const reduce = useReducedMotion();
  const [filter, setFilter] = useState<Filter>('All');

  const filtered = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => categoryFor(p) === filter)),
    [filter]
  );

  return (
    <main className="relative overflow-hidden">
      <section className="relative overflow-hidden pt-32 sm:pt-40">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-5xl font-bold leading-[0.95] tracking-tightest text-fg sm:text-7xl md:text-8xl"
          >
            When Ideas
            <br />
            Meet <span className="serif-accent text-accent">Implementation</span>
          </motion.h1>

          {/* Filter tabs */}
          <div className="mt-10 flex flex-wrap items-center gap-2 sm:gap-3">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={
                  'rounded-full px-5 py-2 text-sm font-medium transition-colors ' +
                  (filter === c
                    ? 'bg-fg text-bg'
                    : 'border border-line bg-bg-700 text-fg-muted hover:border-fg/40 hover:text-fg')
                }
              >
                {c}
              </button>
            ))}
          </div>

          {/* Cards */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            <AnimatePresence mode="popLayout">
              {filtered.map((p, i) => (
                <motion.div
                  key={p.slug}
                  layout
                  initial={reduce ? false : { opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.6, delay: Math.min(i * 0.05, 0.4), ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={`/projects/${p.slug}`}
                    className="group block overflow-hidden rounded-2xl border border-line bg-bg-700 transition-shadow hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.18)]"
                  >
                    <div className="relative overflow-hidden border-b border-line">
                      <ProjectVisual project={p} className="h-48 w-full transition-transform duration-700 ease-out group-hover:scale-[1.04] sm:h-56" />
                      <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-bg-700/80 text-fg opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
                        <ArrowUpRight size={15} />
                      </span>
                      <span className="absolute left-4 top-4 rounded-full border border-line bg-bg-700/80 px-2.5 py-1 font-mono-tech text-[10px] tracking-[0.14em] text-fg-muted backdrop-blur">
                        {categoryFor(p).toUpperCase()}
                      </span>
                    </div>
                    <div className="p-5 sm:p-6">
                      <h3 className="font-display text-2xl font-semibold tracking-tightest text-fg transition-colors group-hover:text-accent">
                        {p.name}
                      </h3>
                      <p className="font-mono-tech mt-1 text-[10px] tracking-[0.18em] text-fg-faint">
                        {p.statusLabel}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-fg-muted">{p.summary}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filtered.length === 0 && (
            <p className="mt-12 text-center text-base text-fg-muted">
              No projects in this category yet.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
