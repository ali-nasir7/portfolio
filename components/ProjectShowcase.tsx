'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Github, Globe } from 'lucide-react';
import { projects } from '@/data/projects';
import { ProjectVisual } from './ProjectVisual';
import { SectionHeading } from './SectionHeading';
import { TechBadge } from './TechBadge';
import { cn } from '@/lib/utils';

const statusColor: Record<string, string> = {
  ongoing: 'text-steel border-steel/30 bg-steel/[0.07]',
  deployed: 'text-emerald-400 border-emerald-400/30 bg-emerald-400/[0.07]',
  internal: 'text-accent border-accent/30 bg-accent/[0.07]',
  'in-development': 'text-rose-400 border-rose-400/30 bg-rose-400/[0.07]',
  client: 'text-pink-400 border-pink-400/30 bg-pink-400/[0.07]',
};

/**
 * Selected Work — immersive, alternating case-study rows. Each preview carries
 * its visual, status, category, stack, problem, approach and result — and
 * opens the full case study.
 */
export function ProjectShowcase() {
  const featured = projects.filter((p) => p.featured);
  const reduce = useReducedMotion();

  return (
    <section id="work" className="relative scroll-mt-24 border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-28 sm:px-8 md:py-36">
        <SectionHeading
          index="02"
          label="Selected Work"
          title="BUILT TO"
          titleAccent="ship."
          description="Systems I designed, architected and delivered — enterprise SaaS, AI platforms, and deployed client work."
        />

        <div className="space-y-24 md:space-y-32">
          {featured.map((p, i) => {
            const flip = i % 2 === 1;
            return (
              <div key={p.slug} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
                {/* artwork */}
                <motion.div
                  initial={reduce ? false : { opacity: 0, x: flip ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-10% 0px' }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className={cn('relative', flip && 'lg:order-2')}
                >
                  <Link href={`/projects/${p.slug}`} className="group block">
                    <div className="relative overflow-hidden rounded-3xl border border-line bg-surface shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)]">
                      <ProjectVisual project={p} className="h-60 w-full transition-transform duration-700 ease-out group-hover:scale-[1.03] sm:h-72" />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-bg/90 to-transparent p-4 pt-10">
                        <span className="font-mono-tech text-[10px] tracking-[0.2em] text-fg-muted">{p.category.toUpperCase()}</span>
                      </div>
                      <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface/80 opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
                        <ArrowUpRight size={17} className="text-fg" />
                      </span>
                    </div>
                    <div className="absolute -bottom-2 left-6 right-6 h-1 rounded-full opacity-40" style={{ background: p.accent }} />
                  </Link>
                </motion.div>

                {/* text */}
                <motion.div
                  initial={reduce ? false : { opacity: 0, x: flip ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-10% 0px' }}
                  transition={{ duration: 0.8, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className={cn(flip && 'lg:order-1')}
                >
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="font-mono-tech text-[10px] tracking-[0.22em] text-fg-faint">
                      {String(i + 1).padStart(2, '0')} / {p.category.toUpperCase()}
                    </span>
                    <span className={cn('font-mono-tech rounded-full border px-2.5 py-0.5 text-[10px] tracking-[0.14em]', statusColor[p.status])}>
                      {p.statusLabel}
                    </span>
                  </div>

                  {p.internship && (
                    <p className="mt-3 font-mono-tech text-[10px] tracking-[0.16em] text-accent">
                      SOFTWARE ENGINEERING INTERN — {p.internship.org.toUpperCase()} · {p.internship.period.toUpperCase()}
                    </p>
                  )}

                  <Link href={`/projects/${p.slug}`} className="group mt-3 block">
                    <h3 className="font-display text-3xl font-bold tracking-tightest text-fg transition-colors group-hover:text-white sm:text-4xl">
                      {p.name}
                    </h3>
                  </Link>

                  <p className="mt-4 text-base leading-relaxed text-fg-muted">{p.summary}</p>

                  {/* problem → approach → result */}
                  <div className="mt-5 space-y-3">
                    <div className="rounded-xl border border-line bg-fg/[0.02] p-4">
                      <p className="font-mono-tech text-[10px] tracking-[0.2em] text-accent">THE PROBLEM</p>
                      <p className="mt-1.5 text-sm leading-relaxed text-fg-muted">{p.problem}</p>
                    </div>
                    <div className="rounded-xl border border-line bg-fg/[0.02] p-4">
                      <p className="font-mono-tech text-[10px] tracking-[0.2em] text-steel">THE APPROACH</p>
                      <p className="mt-1.5 text-sm leading-relaxed text-fg-muted">{p.approach}</p>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {p.stack.slice(0, 6).map((s) => (
                      <TechBadge key={s} label={s} />
                    ))}
                    {p.stack.length > 6 && <TechBadge label={`+${p.stack.length - 6}`} />}
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-4">
                    <Link href={`/projects/${p.slug}`} className="group/link inline-flex items-center gap-2 text-sm font-semibold text-fg">
                      <span className="link-underline">Open case study</span>
                      <ArrowUpRight size={15} className="text-accent transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </Link>
                    {p.links.github && (
                      <a href={p.links.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-fg-muted transition-colors hover:text-fg">
                        <Github size={14} /> {p.links.githubNote ?? 'Source'}
                      </a>
                    )}
                    {p.links.website && (
                      <a href={p.links.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-fg-muted transition-colors hover:text-fg">
                        <Globe size={14} /> Live site
                      </a>
                    )}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 flex justify-center">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 rounded-full border border-line-strong px-7 py-3.5 text-sm font-medium text-fg transition-colors hover:border-fg/40 hover:bg-fg/[0.03]"
          >
            View all projects
            <ArrowUpRight size={16} className="text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
