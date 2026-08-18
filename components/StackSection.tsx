'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { skills, categories, type Skill, type SkillLevel } from '@/data/skills';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';

const levelStyle: Record<SkillLevel, { label: string; cls: string }> = {
  core: { label: 'CORE', cls: 'text-accent border-accent/30 bg-accent/[0.07]' },
  solid: { label: 'PRODUCTION', cls: 'text-steel border-steel/30 bg-steel/[0.07]' },
  familiar: { label: 'GROWING', cls: 'text-fg-faint border-line bg-fg/[0.02]' },
};

/** Interactive engineering ecosystem — hover a technology for its real role. */
export function StackSection() {
  const [active, setActive] = useState<Skill | null>(null);
  const reduce = useReducedMotion();

  return (
    <section id="stack" className="relative scroll-mt-24 border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-28 sm:px-8 md:py-36">
        <SectionHeading
          index="08"
          label="Tech Stack"
          title="THE TOOLCHAIN."
          description="Technologies I actually build with — categorized honestly, with the context of where each one is used."
        />

        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-9">
            {categories.map((cat) => {
              const items = skills.filter((s) => s.category === cat);
              if (items.length === 0) return null;
              return (
                <Reveal key={cat}>
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="font-mono-tech text-[11px] tracking-[0.24em] text-fg-faint">{cat.toUpperCase()}</h3>
                      <span className="h-px flex-1 bg-line" />
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {items.map((s) => {
                        const isActive = active?.name === s.name;
                        return (
                          <button
                            key={s.name}
                            onMouseEnter={() => setActive(s)}
                            onFocus={() => setActive(s)}
                            onClick={() => setActive(s)}
                            className={cn(
                              'rounded-lg border px-3.5 py-2 text-left font-mono-tech text-[13px] transition-all duration-200',
                              isActive
                                ? 'border-accent/60 bg-accent/[0.08] text-fg'
                                : 'border-line bg-fg/[0.02] text-fg-muted hover:border-line-strong hover:text-fg'
                            )}
                          >
                            {s.name}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="relative min-h-[220px] overflow-hidden rounded-2xl border border-line bg-surface p-6">
              <div className="absolute right-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
              <AnimatePresence mode="wait">
                {active ? (
                  <motion.div
                    key={active.name}
                    initial={reduce ? false : { opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono-tech text-[10px] tracking-[0.24em] text-fg-faint">{active.category.toUpperCase()}</span>
                      <span className={cn('rounded-full border px-2.5 py-0.5 font-mono-tech text-[10px] tracking-[0.16em]', levelStyle[active.level].cls)}>
                        {levelStyle[active.level].label}
                      </span>
                    </div>
                    <h3 className="font-display mt-4 text-3xl font-semibold tracking-tightest text-fg">{active.name}</h3>
                    <p className="font-mono-tech mt-2 text-[11px] tracking-[0.2em] text-accent">{active.tagline}</p>
                    <p className="mt-4 text-sm leading-relaxed text-fg-muted">{active.context}</p>
                  </motion.div>
                ) : (
                  <motion.div key="empty" initial={false} className="flex h-full min-h-[180px] flex-col items-center justify-center text-center">
                    <span className="font-display text-2xl text-fg-faint">⌘</span>
                    <p className="font-mono-tech mt-4 text-[11px] tracking-[0.2em] text-fg-faint">
                      HOVER A TECHNOLOGY
                      <br />
                      TO INSPECT ITS ROLE
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
