import type { Metadata } from 'next';
import { projects } from '@/data/projects';
import { ProjectCard } from '@/components/ProjectCard';
import { Reveal } from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Systems Ali Nasir has engineered — enterprise SaaS, AI platforms, and production software built with Java and Spring Boot.',
};

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 pb-28 pt-36 sm:px-8">
      <Reveal>
        <p className="font-mono-tech text-[11px] tracking-[0.28em] text-fg-faint">PROJECT ARCHIVE</p>
        <h1 className="font-display mt-5 text-5xl font-bold tracking-tightest text-fg sm:text-7xl">
          EVERY SYSTEM,
          <br />
          <span className="serif-accent text-accent">one archive.</span>
        </h1>
        <p className="mt-6 max-w-xl text-base text-fg-muted">
          {projects.length} projects — enterprise SaaS, AI platforms, deployed client work. Open any to see the
          problem, the architecture, and the engineering decisions.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 2) * 0.06}>
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>
    </main>
  );
}
