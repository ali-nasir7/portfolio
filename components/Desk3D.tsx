'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';

/**
 * "Step into the engineer's workspace" — a lazy-loaded interactive 3D desk.
 * The heavy canvas is only mounted when the section scrolls near the viewport
 * and on capable devices; mobile and reduced-motion users get a lightweight
 * static concept instead.
 */

// Lazy-load the actual 3D scene so it never blocks initial load.
const Scene = dynamic(() => import('./DeskScene'), { ssr: false, loading: () => <DeskFallback /> });

function DeskFallback() {
  return (
    <div className="flex aspect-[16/9] w-full items-center justify-center rounded-3xl border border-line bg-surface">
      <p className="font-mono-tech text-[11px] tracking-[0.2em] text-fg-faint">LOADING WORKSPACE…</p>
    </div>
  );
}

export function Desk3D() {
  const [mode, setMode] = useState<'loading' | '3d' | 'static'>('loading');

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const small = window.innerWidth < 768;
    setMode(reduce || small ? 'static' : '3d');
  }, []);

  return (
    <section className="relative overflow-hidden border-t border-line bg-bg-900/30">
      <div className="grid-bg absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-6xl px-6 py-28 sm:px-8 md:py-36">
        <SectionHeading
          index="04"
          label="The Workspace"
          title="WHERE THE"
          titleAccent="building happens."
          description="Step into the environment where systems get designed — hover the objects."
        />

        {mode === '3d' ? (
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-line bg-gradient-to-b from-bg-800 to-bg shadow-[0_40px_120px_-40px_rgba(0,0,0,0.9)]">
              <div className="h-[420px] sm:h-[480px]">
                <Scene />
              </div>
              <span className="font-mono-tech pointer-events-none absolute left-4 top-4 z-10 rounded-full border border-line bg-bg-900/60 px-3 py-1 text-[10px] tracking-[0.2em] text-fg-muted backdrop-blur">
                INTERACTIVE · HOVER OBJECTS
              </span>
            </div>
          </Reveal>
        ) : (
          <Reveal>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { icon: '💻', title: 'LAPTOP', sub: 'BUILDING · Java · Spring Boot · APIs' },
                { icon: '🖥️', title: 'MONITOR', sub: 'ARCHITECTING · Distributed Systems · Databases' },
                { icon: '🎧', title: 'HEADPHONES', sub: 'IN THE ZONE · Focus · Build · Ship' },
              ].map((o) => (
                <div key={o.title} className="surface rounded-2xl p-6 text-center">
                  <span className="text-3xl">{o.icon}</span>
                  <p className="font-display mt-3 text-sm font-semibold tracking-[0.12em] text-fg">{o.title}</p>
                  <p className="font-mono-tech mt-1.5 text-[10px] tracking-[0.08em] text-fg-muted">{o.sub}</p>
                </div>
              ))}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
