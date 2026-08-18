'use client';

import { useApp, useAmbientSound } from '@/lib/app-context';
import { Navigation } from './Navigation';
import { SmoothScroll } from './SmoothScroll';

/**
 * App-wide UI chrome mounted once in the root layout.
 * In the new (target-style) design, the only persistent chrome is the
 * top navigation — the AI orb, command palette, hidden terminal and
 * developer-mode easter eggs were part of the old dark design and have
 * been removed for visual consistency.
 */
export function GlobalChrome() {
  const { soundOn } = useApp();
  useAmbientSound(soundOn);

  return (
    <>
      <SmoothScroll />
      <Navigation />
    </>
  );
}
