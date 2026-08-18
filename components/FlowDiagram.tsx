'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface FlowItem {
  label: string;
  sub?: string;
  detail?: { title: string; body: string };
}

interface FlowDiagramProps {
  items: FlowItem[];
  accent?: string;
  className?: string;
}

/**
 * Reusable animated data-flow / architecture diagram. Horizontal on desktop,
 * vertical on mobile; packets pulse along the path; nodes with `detail` reveal
 * contextual panels on hover.
 */
export function FlowDiagram({ items, accent = '#e3a856', className }: FlowDiagramProps) {
  const reduce = useReducedMotion();
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className={cn('relative', className)}>
      <div className="flex flex-col items-stretch gap-2 md:flex-row md:items-center md:gap-0">
        {items.map((item, i) => (
          <div key={i} className="flex flex-col items-stretch md:flex-1 md:flex-row md:items-center">
            <div className="relative flex-1">
              <button
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(active === i ? null : i)}
                className={cn(
                  'group relative w-full rounded-xl border px-4 py-4 text-left transition-all duration-300',
                  'border-line bg-fg/[0.02]',
                  active === i ? 'border-accent/50' : 'hover:border-line-strong'
                )}
                style={active === i ? { boxShadow: `0 0 0 1px ${accent}44` } : undefined}
              >
                <span className="block font-mono-tech text-[11px] font-semibold tracking-[0.12em] text-fg">{item.label}</span>
                {item.sub && <span className="mt-1 block font-mono-tech text-[10px] tracking-[0.08em] text-fg-faint">{item.sub}</span>}
                {item.detail && (
                  <span className="absolute right-3 top-3 h-1.5 w-1.5 rounded-full transition-opacity" style={{ background: accent, opacity: active === i ? 1 : 0.3 }} />
                )}
              </button>

              {item.detail && active === i && (
                <div className="absolute left-0 right-0 top-full z-20 mt-2 rounded-lg border border-line bg-surface p-3.5 shadow-[0_16px_40px_rgba(0,0,0,0.5)]">
                  <p className="font-mono-tech text-[10px] tracking-[0.18em] text-accent">{item.detail.title}</p>
                  <p className="mt-1.5 text-xs leading-relaxed text-fg-muted">{item.detail.body}</p>
                </div>
              )}
            </div>

            {i < items.length - 1 && (
              <div className="relative flex items-center justify-center md:mx-1 md:h-10 md:w-8">
                <div className="relative flex h-6 w-full items-center justify-center md:hidden">
                  <motion.div className="absolute h-full w-px bg-line" />
                  <motion.span
                    className="absolute h-2 w-2 rounded-full"
                    style={{ background: accent }}
                    animate={reduce ? undefined : { y: [-8, 8], opacity: [1, 0.2, 1] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut', delay: i * 0.2 }}
                  />
                  <ArrowDown size={14} className="relative z-10 text-fg-faint" />
                </div>
                <div className="relative hidden h-full w-full items-center md:flex">
                  <motion.div className="absolute h-px w-full bg-line" />
                  <motion.span
                    className="absolute h-1.5 w-1.5 rounded-full"
                    style={{ background: accent }}
                    animate={reduce ? undefined : { x: [-8, 8], opacity: [1, 0.2, 1] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut', delay: i * 0.2 }}
                  />
                  <ArrowRight size={14} className="relative z-10 text-fg-faint" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
