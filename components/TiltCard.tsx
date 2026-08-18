'use client';

import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '@/lib/utils';

/**
 * A "physical" card with 3D tilt, layered shadows and subtle parallax.
 * Feels tactile without glassmorphism gimmicks.
 */
export function TiltCard({
  children,
  className,
  intensity = 6,
}: {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 160, damping: 20 });
  const sry = useSpring(ry, { stiffness: 160, damping: 20 });

  const onMove = (e: React.MouseEvent) => {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    ry.set(px * intensity);
    rx.set(-py * intensity);
  };
  const onLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <motion.div style={reduce ? undefined : { perspective: 1100 }} className={cn('group', className)}>
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={reduce ? undefined : { rotateX: srx, rotateY: sry, transformStyle: 'preserve-3d' }}
        className="relative will-change-transform"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
