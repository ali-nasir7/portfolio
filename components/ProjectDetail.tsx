'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Github, Globe, ArrowRight } from 'lucide-react';
import type { Project } from '@/data/projects';
import { projects } from '@/data/projects';
import { FlowDiagram } from './FlowDiagram';
import { ProjectVisual } from './ProjectVisual';
import { MagneticButton } from './MagneticButton';
import { Reveal } from './Reveal';
import { TechBadge } from './TechBadge';
import { cn } from '@/lib/utils';

const statusCls: Record<Project['status'], string> = {
  ongoing: 'text-steel border-steel/30 bg-steel/[0.07]',
  deployed: 'text-emerald-400 border-emerald-400/30 bg-emerald-400/[0.07]',
  internal: 'text-accent border-accent/30 bg-accent/[0.07]',
  'in-development': 'text-rose-400 border-rose-400/30 bg-rose-400/[0.07]',
  client: 'text-pink-400 border-pink-400/30 bg-pink-400/[0.07]',
};

function BlockLabel({ index, label }: { index: string; label: string }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <span className="font-mono-tech text-xs text-accent">{index}</span>
      <span className="h-px w-8 bg-line-strong" />
      <span className="tech-label">{label}</span>
    </div>
  );
}

/** Immersive case-study page with scroll-driven reveals and an animated architecture map. */
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
            <TechBadge key={s} label={s} />
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
      <Reveal className="mt-14">
        <div className="relative overflow-hidden rounded-3xl border border-line bg-surface shadow-[0_20px_60px_-24px_rgba(0,0,0,0.7)]">
          <ProjectVisual project={project} className="h-64 w-full sm:h-80" />
          <span className="absolute bottom-4 left-4 font-mono-tech rounded-full border border-line bg-surface/80 px-3 py-1 text-[10px] tracking-[0.16em] text-fg-faint backdrop-blur">
            CONCEPTUAL SYSTEM MAP
          </span>
        </div>
      </Reveal>

      {/* Problem / Approach */}
      <div className="mt-20 grid gap-12 md:grid-cols-2">
        <Reveal>
          <BlockLabel index="01" label="The Problem" />
          <p className="text-lg leading-relaxed text-fg-muted">{project.problem}</p>
        </Reveal>
        <Reveal delay={0.08}>
          <BlockLabel index="02" label="The Approach" />
          <p className="text-lg leading-relaxed text-fg-muted">{project.approach}</p>
        </Reveal>
      </div>

      {/* Challenge / Solution */}
      <div className="mt-14 grid gap-6 md:grid-cols-2">
        <Reveal>
          <div className="surface h-full rounded-2xl p-7">
            <BlockLabel index="03" label="Engineering Challenge" />
            <p className="text-base leading-relaxed text-fg">{project.challenge}</p>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="h-full rounded-2xl border border-accent/25 bg-accent/[0.05] p-7">
            <BlockLabel index="04" label="The Solution" />
            <p className="text-base leading-relaxed text-fg">{project.solution}</p>
          </div>
        </Reveal>
      </div>

      {/* Architecture */}
      <section className="mt-24">
        <Reveal>
          <BlockLabel index="05" label="Architecture" />
          <h2 className="font-display text-3xl font-semibold tracking-tightest text-fg sm:text-4xl">How the system flows.</h2>
          <p className="mt-3 max-w-xl text-sm text-fg-muted">Hover any node to inspect its role in the system.</p>
        </Reveal>
        <Reveal delay={0.06}>
          <div className="mt-8 rounded-2xl border border-line bg-surface p-6 sm:p-8">
            <FlowDiagram items={project.architecture} accent={project.accent} />
          </div>
        </Reveal>
      </section>

      {/* Engineering decisions */}
      <section className="mt-24">
        <Reveal>
          <BlockLabel index="06" label="Engineering Decisions" />
          <h2 className="font-display text-3xl font-semibold tracking-tightest text-fg sm:text-4xl">Decisions that mattered.</h2>
        </Reveal>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {project.engineeringDecisions.map((d, i) => (
            <Reveal key={d} delay={i * 0.04}>
              <div className="flex gap-3 rounded-xl border border-line bg-surface p-4">
                <span className="font-mono-tech text-xs text-accent">0{i + 1}</span>
                <p className="text-sm leading-relaxed text-fg-muted">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Result */}
      <section className="mt-24">
        <Reveal>
          <div className="surface rounded-3xl p-8 sm:p-10">
            <BlockLabel index="07" label="Result" />
            <p className="font-display max-w-3xl text-2xl font-medium leading-snug tracking-tight text-fg sm:text-3xl">{project.impact}</p>
            <p className="font-mono-tech mt-5 text-[11px] tracking-[0.2em] text-fg-faint">ROLE — {project.role.toUpperCase()}</p>
          </div>
        </Reveal>
      </section>

      {/* Next project */}
      <div className="mt-20 flex items-center justify-between border-t border-line pt-8">
        <Link href={`/projects/${next.slug}`} className="group text-left">
          <p className="font-mono-tech text-[10px] tracking-[0.22em] text-fg-faint">NEXT PROJECT</p>
          <p className="font-display mt-1 flex items-center gap-2 text-xl font-semibold text-fg transition-colors group-hover:text-white">
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
