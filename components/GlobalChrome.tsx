'use client';

import { useApp, useAmbientSound } from '@/lib/app-context';
import { ScrollProgress } from './ScrollProgress';
import { Navigation } from './Navigation';
import { CommandPalette } from './CommandPalette';
import { HiddenTerminal } from './HiddenTerminal';
import { DeveloperMode } from './DeveloperMode';
import { AIOrb } from './AIOrb';

/** Persistent, app-wide UI chrome mounted once in the root layout. */
export function GlobalChrome() {
  const { soundOn } = useApp();
  useAmbientSound(soundOn);

  return (
    <>
      <ScrollProgress />
      <Navigation />
      <CommandPalette />
      <HiddenTerminal />
      <DeveloperMode />
      <AIOrb />
    </>
  );
}
