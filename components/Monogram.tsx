'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

/**
 * The "AN" personal mark — kept from the original portfolio (the user
 * requested the video hero remain untouched, and the preloader uses this
 * mark). Build from circuit-like strokes and node points, not text.
 */
export function Monogram({
  className,
  animate = false,
  accent = '#e3a856',
}: {
  className?: string;
  animate?: boolean;
  accent?: string;
}) {
  const reduce = useReducedMotion();

  const stroke = 'currentColor';
  const aPaths = ['M 11 46 L 30 10', 'M 30 10 L 49 46', 'M 18 32 L 42 32'];
  const nPaths = ['M 55 46 L 55 10', 'M 55 10 L 91 46', 'M 91 46 L 91 10'];
  const nodes: Array<[number, number]> = [
    [11, 46],
    [30, 10],
    [49, 46],
    [18, 32],
    [42, 32],
    [55, 46],
    [55, 10],
    [91, 46],
    [91, 10],
  ];

  const paths = [...aPaths, ...nPaths];

  return (
    <svg
      viewBox="0 0 102 56"
      className={cn('block', className)}
      role="img"
      aria-label="AN monogram"
      fill="none"
    >
      {paths.map((d, i) => (
        <motion.path
          key={i}
          d={d}
          stroke={stroke}
          strokeWidth={3.2}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={reduce || !animate ? { pathLength: 1 } : { pathLength: 0 }}
          animate={animate ? { pathLength: 1 } : undefined}
          transition={{ duration: 0.7, delay: animate ? i * 0.12 : 0, ease: [0.16, 1, 0.3, 1] }}
        />
      ))}
      {nodes.map(([x, y], i) => (
        <motion.circle
          key={`n${i}`}
          cx={x}
          cy={y}
          r={i === 1 ? 2.6 : 2.2}
          fill={i === 1 ? accent : stroke}
          initial={reduce || !animate ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          animate={animate ? { scale: 1, opacity: 1 } : undefined}
          transition={{ duration: 0.3, delay: animate ? 0.7 + i * 0.05 : 0, ease: 'backOut' }}
        />
      ))}
      <motion.circle
        cx={30}
        cy={10}
        r={4}
        fill="none"
        stroke={accent}
        strokeWidth={1.4}
        initial={reduce || !animate ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.4 }}
        animate={animate ? { opacity: 1, scale: 1 } : undefined}
        transition={{ duration: 0.5, delay: animate ? 1 : 0, ease: 'easeOut' }}
      />
    </svg>
  );
}
