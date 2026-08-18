'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowLeft, Github, Globe, ArrowRight } from 'lucide-react';
import type { Project } from '@/data/projects';
import { projects } from '@/data/projects';
import { ProjectVisual } from './ProjectVisual';
import { MagneticButton } from './MagneticButton';
import { cn } from '@/lib/utils';

const statusCls: Record<Project['status'], string> = {
  ongoing: 'text-steel border-steel/30 bg-steel/[0.07]',
  deployed: 'text-emerald-500 border-emerald-500/30 bg-emerald-500/[0.07]',
  internal: 'text-accent border-accent/30 bg-accent/[0.07]',
  'in-development': 'text-rose-500 border-rose-500/30 bg-rose-500/[0.07]',
  client: 'text-pink-500 border-pink-500/30 bg-pink-500/[0.07]',
};

/** Project case study — light theme, two-column layout with system map. */
export function ProjectDetail({ project }: { project: Project }) {
  const reduce = useReducedMotion();
  const idx = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <main className="mx-auto max-w-6xl px-6 pb-28 pt-32 sm:px-8">
      <motion.div initial={reduce ? false : { opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
        <Link href="/projects" className="group inline-flex items-center gap-2 text-sm text-fg-muted transition-colors hover:text-fg">
          <ArrowLeft size={15} className="transition-transform group-hover:-translate-x-0.5" />
          All projects
        </Link>
      </motion.div>

      <header className="mt-10">
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-mono-tech text-[11px] tracking-[0.24em] text-fg-faint">{project.category.toUpperCase()}</span>
          <span className={cn('font-mono-tech rounded-full border px-3 py-1 text-[10px] tracking-[0.14em]', statusCls[project.status])}>
            {project.statusLabel}
          </span>
        </div>
        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
          className="font-display mt-6 max-w-4xl text-5xl font-bold leading-[0.95] tracking-tightest text-fg sm:text-7xl"
        >
          {project.name}
        </motion.h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-7 max-w-2xl text-lg leading-relaxed text-fg-muted"
        >
          {project.summary}
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="mt-7 flex flex-wrap gap-2"
        >
          {project.stack.map((s) => (
            <span
              key={s}
              className="inline-flex items-center rounded-full border border-line bg-bg-700 px-3 py-1 font-mono-tech text-xs text-fg-muted"
            >
              {s}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          {project.links.github && (
            <MagneticButton href={project.links.github} variant="outline" external>
              <Github size={16} /> {project.links.githubNote ?? 'View source'}
            </MagneticButton>
          )}
          {project.links.website && (
            <MagneticButton href={project.links.website} variant="outline" external>
              <Globe size={16} /> Live site
            </MagneticButton>
          )}
        </motion.div>
      </header>

      {/* Conceptual system map */}
      <div className="mt-14 overflow-hidden rounded-3xl border border-line bg-bg-700 shadow-[0_20px_60px_-24px_rgba(0,0,0,0.12)]">
        <ProjectVisual project={project} className="h-64 w-full sm:h-80" />
      </div>

      {/* Problem / Approach */}
      <div className="mt-20 grid gap-12 md:grid-cols-2">
        <div>
          <p className="font-mono-tech mb-5 flex items-center gap-3 text-xs text-fg-faint">
            <span className="text-accent">01</span>
            <span className="h-px w-8 bg-line-strong" />
            <span className="text-fg-muted">THE PROBLEM</span>
          </p>
          <p className="text-lg leading-relaxed text-fg-muted">{project.problem}</p>
        </div>
        <div>
          <p className="font-mono-tech mb-5 flex items-center gap-3 text-xs text-fg-faint">
            <span className="text-accent">02</span>
            <span className="h-px w-8 bg-line-strong" />
            <span className="text-fg-muted">THE APPROACH</span>
          </p>
          <p className="text-lg leading-relaxed text-fg-muted">{project.approach}</p>
        </div>
      </div>

      {/* Challenge / Solution */}
      <div className="mt-14 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-line bg-bg-700 p-7 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.08)]">
          <p className="font-mono-tech mb-5 flex items-center gap-3 text-xs text-fg-faint">
            <span className="text-accent">03</span>
            <span className="h-px w-8 bg-line-strong" />
            <span className="text-fg-muted">ENGINEERING CHALLENGE</span>
          </p>
          <p className="text-base leading-relaxed text-fg">{project.challenge}</p>
        </div>
        <div className="rounded-2xl border border-accent/25 bg-accent/[0.04] p-7">
          <p className="font-mono-tech mb-5 flex items-center gap-3 text-xs text-fg-faint">
            <span className="text-accent">04</span>
            <span className="h-px w-8 bg-accent/40" />
            <span className="text-fg-muted">THE SOLUTION</span>
          </p>
          <p className="text-base leading-relaxed text-fg">{project.solution}</p>
        </div>
      </div>

      {/* Architecture */}
      <section className="mt-24">
        <p className="font-mono-tech mb-5 flex items-center gap-3 text-xs text-fg-faint">
          <span className="text-accent">05</span>
          <span className="h-px w-8 bg-line-strong" />
          <span className="text-fg-muted">ARCHITECTURE</span>
        </p>
        <h2 className="font-display text-3xl font-semibold tracking-tightest text-fg sm:text-4xl">How the system flows.</h2>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {project.architecture.map((node, i) => (
            <div
              key={node.id}
              className="rounded-xl border border-line bg-bg-700 p-4 shadow-[0_4px_12px_-6px_rgba(0,0,0,0.06)]"
              style={{ borderLeftWidth: '3px', borderLeftColor: project.accent }}
            >
              <p className="font-mono-tech text-[10px] tracking-[0.16em] text-fg-faint">
                {String(i + 1).padStart(2, '0')}
              </p>
              <p className="font-display mt-1 text-sm font-semibold tracking-tightest text-fg">{node.label}</p>
              {node.sub && <p className="font-mono-tech mt-0.5 text-[10px] tracking-[0.08em] text-fg-muted">{node.sub}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* Engineering decisions */}
      <section className="mt-24">
        <p className="font-mono-tech mb-5 flex items-center gap-3 text-xs text-fg-faint">
          <span className="text-accent">06</span>
          <span className="h-px w-8 bg-line-strong" />
          <span className="text-fg-muted">ENGINEERING DECISIONS</span>
        </p>
        <h2 className="font-display text-3xl font-semibold tracking-tightest text-fg sm:text-4xl">Decisions that mattered.</h2>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {project.engineeringDecisions.map((d, i) => (
            <div key={d} className="flex gap-3 rounded-xl border border-line bg-bg-700 p-4">
              <span className="font-mono-tech text-xs text-accent">0{i + 1}</span>
              <p className="text-sm leading-relaxed text-fg-muted">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Result */}
      <section className="mt-24">
        <div className="rounded-3xl border border-line bg-bg-700 p-8 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.08)] sm:p-10">
          <p className="font-mono-tech mb-5 flex items-center gap-3 text-xs text-fg-faint">
            <span className="text-accent">07</span>
            <span className="h-px w-8 bg-line-strong" />
            <span className="text-fg-muted">RESULT</span>
          </p>
          <p className="font-display max-w-3xl text-2xl font-medium leading-snug tracking-tight text-fg sm:text-3xl">
            {project.impact}
          </p>
          <p className="font-mono-tech mt-5 text-[11px] tracking-[0.2em] text-fg-faint">ROLE — {project.role.toUpperCase()}</p>
        </div>
      </section>

      {/* Next project */}
      <div className="mt-20 flex items-center justify-between border-t border-line pt-8">
        <Link href={`/projects/${next.slug}`} className="group text-left">
          <p className="font-mono-tech text-[10px] tracking-[0.22em] text-fg-faint">NEXT PROJECT</p>
          <p className="font-display mt-1 flex items-center gap-2 text-xl font-semibold text-fg transition-colors group-hover:text-accent">
            {next.name}
            <ArrowRight size={18} className="text-accent transition-transform group-hover:translate-x-1" />
          </p>
        </Link>
        <Link href="/projects" className="font-mono-tech text-[11px] tracking-[0.18em] text-fg-faint transition-colors hover:text-fg">
          VIEW ALL
        </Link>
      </div>
    </main>
  );
}
