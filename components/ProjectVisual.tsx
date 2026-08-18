'use client';

import { motion } from 'framer-motion';
import type { Project } from '@/data/projects';

/**
 * Deterministic SVG "system map" generated from a project's architecture nodes.
 * Multiple compositions (orbit / flow / grid / stack) give each project a
 * distinct visual. Conceptual artwork — not a fabricated screenshot.
 */
export function ProjectVisual({ project, className }: { project: Project; className?: string }) {
  const nodes = project.architecture;
  const n = nodes.length;
  const W = 400;
  const H = 260;
  const variant = project.variant ?? 'orbit';
  const labelColor = 'rgba(20,20,20,0.45)';
  const edgeColor = project.accent;

  const pos = (i: number): { x: number; y: number } => {
    if (variant === 'flow') {
      const perRow = Math.ceil(n / 2);
      const col = i % perRow;
      const row = Math.floor(i / perRow);
      const gapX = (W - 80) / (perRow - 1);
      return { x: 40 + col * gapX, y: row === 0 ? 70 : 190 };
    }
    if (variant === 'stack') {
      const gapY = (H - 60) / (n - 1);
      return { x: i % 2 === 0 ? 90 : W - 90, y: 30 + i * gapY };
    }
    if (variant === 'grid') {
      const cols = 4;
      const col = i % cols;
      const row = Math.floor(i / cols);
      return { x: (W / (cols + 1)) * (col + 1), y: (H / (Math.ceil(n / cols) + 1)) * (row + 1) };
    }
    // orbit (default)
    const cx = W / 2;
    const cy = H / 2 - 6;
    const r = n > 6 ? 92 : 78;
    const angle = (i / n) * Math.PI * 2 - Math.PI / 2;
    return { x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) };
  };

  const points = nodes.map((_, i) => pos(i));

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className={className}
      role="img"
      aria-label={`${project.name} system architecture`}
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id={`pv-${project.slug}`} cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor={project.accent} stopOpacity="0.16" />
          <stop offset="100%" stopColor={project.accent} stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width={W} height={H} fill="#faf6ee" />
      <circle cx={W / 2} cy={H / 2} r={180} fill={`url(#pv-${project.slug})`} />

      {points.map((p, i) => {
        const q = points[(i + 1) % n];
        return (
          <g key={`e-${i}`}>
            <line x1={p.x} y1={p.y} x2={q.x} y2={q.y} stroke={edgeColor} strokeOpacity={0.35} strokeWidth={1.2} />
            <motion.circle
              r={2.4}
              fill={edgeColor}
              animate={{ opacity: [0.1, 1, 0.1] }}
              transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.25, ease: 'easeInOut' }}
            >
              <animateMotion dur="2.2s" begin={`${i * 0.25}s`} repeatCount="indefinite" path={`M ${p.x} ${p.y} L ${q.x} ${q.y}`} />
            </motion.circle>
          </g>
        );
      })}

      {points.map((p, i) => {
        const node = nodes[i];
        const isEndpoint = i === 0 || i === n - 1;
        const r = isEndpoint ? 7 : 5.5;
        return (
          <g key={`n-${i}`}>
            <circle cx={p.x} cy={p.y} r={r + 5} fill={edgeColor} opacity={0.08} />
            <circle cx={p.x} cy={p.y} r={r} fill="white" stroke={edgeColor} strokeWidth={1.6} />
            <circle cx={p.x} cy={p.y} r={2.2} fill={edgeColor} />
            <text x={p.x} y={p.y + r + 13} textAnchor="middle" fill={labelColor} fontSize="7.5" fontFamily="ui-monospace, monospace" letterSpacing="0.4">
              {node.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
