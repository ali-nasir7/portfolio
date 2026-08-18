'use client';

import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '@/data/projects';
import { ProjectVisual } from './ProjectVisual';
import { TechBadge } from './TechBadge';
import { cn } from '@/lib/utils';

const statusColor: Record<string, string> = {
  ongoing: 'text-steel border-steel/30 bg-steel/[0.07]',
  deployed: 'text-emerald-400 border-emerald-400/30 bg-emerald-400/[0.07]',
  internal: 'text-accent border-accent/30 bg-accent/[0.07]',
  'in-development': 'text-rose-400 border-rose-400/30 bg-rose-400/[0.07]',
  client: 'text-pink-400 border-pink-400/30 bg-pink-400/[0.07]',
};

/** Grid card with 3D tilt and architecture-map preview, for the archive page. */
export function ProjectCard({ project }: { project: Project }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLAnchorElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 160, damping: 20 });
  const sry = useSpring(ry, { stiffness: 160, damping: 20 });

  const onMove = (e: React.MouseEvent) => {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    ry.set(((e.clientX - rect.left) / rect.width - 0.5) * 5);
    rx.set(-((e.clientY - rect.top) / rect.height - 0.5) * 5);
  };
  const onLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <motion.div style={reduce ? undefined : { perspective: 1000 }}>
      <motion.div style={reduce ? undefined : { rotateX: srx, rotateY: sry }}>
        <Link
          ref={ref}
          href={`/projects/${project.slug}`}
          onMouseMove={onMove}
          onMouseLeave={onLeave}
          className="surface group relative flex h-full flex-col overflow-hidden rounded-2xl transition-shadow duration-500 hover:shadow-[0_30px_80px_-24px_rgba(0,0,0,0.7)]"
        >
          <div className="relative overflow-hidden border-b border-line">
            <div className="absolute inset-0 opacity-40 transition-opacity duration-500 group-hover:opacity-70" style={{ background: `radial-gradient(80% 80% at 50% 0%, ${project.accent}22, transparent 60%)` }} />
            <ProjectVisual project={project} className="h-44 w-full transition-transform duration-700 ease-out group-hover:scale-[1.04]" />
            <span className="absolute left-4 top-4">
              <span className={cn('font-mono-tech rounded-full border px-2.5 py-1 text-[10px] tracking-[0.14em]', statusColor[project.status])}>
                {project.statusLabel}
              </span>
            </span>
            <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-line bg-surface/80 opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
              <ArrowUpRight size={16} className="text-fg" />
            </span>
          </div>

          <div className="flex flex-1 flex-col p-6">
            <p className="font-mono-tech text-[10px] tracking-[0.22em] text-fg-faint">{project.category.toUpperCase()}</p>
            <h3 className="font-display mt-2 text-2xl font-semibold tracking-tightest text-fg transition-colors group-hover:text-white">
              {project.name}
            </h3>
            <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-fg-muted">{project.summary}</p>
            <div className="mt-5 flex flex-wrap gap-1.5 pt-1">
              {project.stack.slice(0, 4).map((s) => (
                <TechBadge key={s} label={s} />
              ))}
              {project.stack.length > 4 && <TechBadge label={`+${project.stack.length - 4}`} />}
            </div>
          </div>
        </Link>
      </motion.div>
    </motion.div>
  );
}
