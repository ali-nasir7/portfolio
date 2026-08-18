'use client';

import { MotionConfig } from 'framer-motion';
import { useApp } from '@/lib/app-context';

/**
 * Bridges the app's reduced-motion state (system preference + the manual
 * "Toggle Reduced Motion" command) into Framer Motion, so every useReducedMotion()
 * call across the tree honors both.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  const { reducedMotion } = useApp();
  return <MotionConfig reducedMotion={reducedMotion ? 'always' : 'user'}>{children}</MotionConfig>;
}
