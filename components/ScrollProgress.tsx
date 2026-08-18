'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

/** Thin section-progress bar fixed to the top of the viewport. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      aria-hidden
      className="fixed left-0 right-0 top-0 z-[90] h-[2.5px] origin-left"
      style={{ scaleX, background: 'linear-gradient(90deg, #e3a856, #9db4d0)' }}
    />
  );
}
