'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { services, type Service } from '@/data/services';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';
import { cn } from '@/lib/utils';

/**
 * Services — an interactive experience, not a grid. A horizontal rail of
 * service nodes; hovering/clicking reveals a live detail panel. The active
 * service also drives an accent glow.
 */
export function Services() {
  const [active, setActive] = useState<Service | null>(null);
  const reduce = useReducedMotion();

  return (
    <section id="services" className="relative overflow-hidden border-t border-line">
      <div className="pointer-events-none absolute -left-32 top-1/3 h-[400px] w-[400px] rounded-full bg-accent/[0.06] blur-[140px]" />
      <div className="mx-auto max-w-6xl px-6 py-28 sm:px-8 md:py-36">
        <SectionHeading
          label="Offered Services"
          title="WHAT I"
          titleAccent="offer."
          description="Twelve capabilities I bring to a project — hover any to see what it actually means."
        />

        <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr]">
          {/* rail */}
          <div>
            <div className="flex flex-wrap gap-2">
              {services.map((s, i) => {
                const isActive = active?.id === s.id;
                return (
                  <Reveal key={s.id} delay={i * 0.02}>
                    <button
                      onMouseEnter={() => setActive(s)}
                      onFocus={() => setActive(s)}
                      onClick={() => setActive(isActive ? null : s)}
                      className={cn(
                        'group rounded-full border px-5 py-2.5 text-sm transition-all duration-200',
                        isActive
                          ? 'border-accent/60 bg-accent/10 text-fg'
                          : 'border-line bg-fg/[0.02] text-fg-muted hover:border-line-strong hover:text-fg'
                      )}
                    >
                      {s.title}
                    </button>
                  </Reveal>
                );
              })}
            </div>
          </div>

          {/* detail */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="relative min-h-[240px] overflow-hidden rounded-2xl border border-line bg-surface p-7">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
              <AnimatePresence mode="wait">
                {active ? (
                  <motion.div
                    key={active.id}
                    initial={reduce ? false : { opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono-tech text-[10px] tracking-[0.22em] text-accent">SERVICE</span>
                      <ArrowUpRight size={16} className="text-fg-faint" />
                    </div>
                    <h3 className="font-display mt-3 text-3xl font-semibold tracking-tightest text-fg">{active.title}</h3>
                    <p className="mt-2 text-sm font-medium text-fg-muted">{active.short}</p>
                    <p className="mt-4 text-sm leading-relaxed text-fg-muted">{active.description}</p>
                  </motion.div>
                ) : (
                  <motion.div key="empty" initial={false} className="flex h-full min-h-[180px] flex-col items-center justify-center text-center">
                    <span className="font-display text-4xl text-fg-faint">⌘</span>
                    <p className="font-mono-tech mt-4 text-[11px] tracking-[0.2em] text-fg-faint">
                      HOVER A SERVICE
                      <br />
                      TO SEE WHAT IT MEANS
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
