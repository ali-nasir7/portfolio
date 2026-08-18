'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  once?: boolean;
  className?: string;
}

/** Scroll-triggered reveal. Respects reduced-motion and animates once by default. */
export function Reveal({ children, delay = 0, y = 24, once = true, className }: RevealProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-12% 0px' }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
