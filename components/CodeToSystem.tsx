'use client';

import { motion, useReducedMotion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';

const CODE_LINES = [
  { t: '@RestController', c: 'text-accent' },
  { t: 'class ServiceController {', c: 'text-fg' },
  { t: '    @GetMapping("/services")', c: 'text-steel' },
  { t: '    public List<Service> getServices() {', c: 'text-fg' },
  { t: '        return serviceService.findAll();', c: 'text-fg-muted' },
  { t: '    }', c: 'text-fg' },
  { t: '}', c: 'text-fg' },
];

const NODES = [
  { id: 'api', label: 'REST API', sub: 'Spring Boot', detail: 'Receives the request, validates it, hands off to the service layer.', accent: '#e3a856' },
  { id: 'service', label: 'SERVICE', sub: 'business logic', detail: 'Where the actual work happens — orchestration and rules.', accent: '#e3a856' },
  { id: 'db', label: 'POSTGRESQL', sub: 'persistent data', detail: 'Persistent application data, indexed and paginated.', accent: '#9db4d0' },
  { id: 'cache', label: 'REDIS', sub: 'caching layer', detail: 'Caching layer for faster data access on hot reads.', accent: '#9db4d0' },
  { id: 'queue', label: 'KAFKA', sub: 'event stream', detail: 'Event-driven communication between services, asynchronous.', accent: '#9db4d0' },
  { id: 'ai', label: 'AI', sub: 'OpenAI API', detail: 'AI baked into the workflow — analysis and recommendations.', accent: '#e3a856' },
  { id: 'cloud', label: 'DOCKER', sub: 'deployment', detail: 'Containerized and deployed — shipped, not just written.', accent: '#9db4d0' },
];

/**
 * "CODE → SYSTEM → PRODUCT" — a short Java snippet visually transforms into a
 * live system diagram as it scrolls into view. The message: I understand what
 * happens after the code.
 */
export function CodeToSystem() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-20% 0px' });
  const [active, setActive] = useState<string | null>(null);

  // auto-cycle the highlighted node after the transform completes
  useEffect(() => {
    if (!inView || reduce) return;
    const t = setInterval(() => {
      setActive((a) => {
        const idx = NODES.findIndex((n) => n.id === a);
        return NODES[(idx + 1) % NODES.length].id;
      });
    }, 1800);
    return () => clearInterval(t);
  }, [inView, reduce]);

  return (
    <section ref={ref} className="relative overflow-hidden border-t border-line bg-bg-900/30">
      <div className="grid-bg absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-6xl px-6 py-28 sm:px-8 md:py-36">
        <SectionHeading
          index="03"
          label="How I Think"
          title="FROM CODE,"
          titleAccent="to systems."
          description="I don't just write code — I understand what happens after it. Watch a line of code become a system."
        />

        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Code editor that dissolves into nodes */}
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)]">
              {/* editor chrome */}
              <div className="flex items-center gap-1.5 border-b border-line px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-500/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/60" />
                <span className="font-mono-tech ml-3 text-[10px] tracking-[0.16em] text-fg-faint">ServiceController.java</span>
              </div>
              <div className="p-6 font-mono-tech text-sm leading-relaxed">
                {CODE_LINES.map((l, i) => (
                  <motion.div
                    key={i}
                    initial={reduce ? false : { opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.4 }}
                    className={l.c}
                  >
                    <span className="mr-4 inline-block w-4 text-right text-fg-faint">{i + 1}</span>
                    {l.t}
                  </motion.div>
                ))}
              </div>

              {/* dissolve overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 1.2, duration: 1 }}
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-transparent via-bg/30 to-accent/[0.08]"
              />
            </div>
          </Reveal>

          {/* System diagram */}
          <div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {NODES.map((n, i) => {
                const isActive = active === n.id;
                return (
                  <motion.div
                    key={n.id}
                    initial={reduce ? false : { opacity: 0, scale: 0.85, y: 16 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: '-10% 0px' }}
                    transition={{ delay: 0.5 + i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <button
                      onMouseEnter={() => setActive(n.id)}
                      onFocus={() => setActive(n.id)}
                      onClick={() => setActive(isActive ? null : n.id)}
                      className={`group relative w-full rounded-xl border p-4 text-left transition-all duration-300 ${
                        isActive ? 'border-accent/50 bg-accent/[0.06]' : 'border-line bg-fg/[0.02] hover:border-line-strong'
                      }`}
                    >
                      <span className="block h-2 w-2 rounded-full" style={{ background: n.accent }} />
                      <span className="font-mono-tech mt-2 block text-[11px] font-semibold tracking-[0.1em] text-fg">{n.label}</span>
                      <span className="font-mono-tech mt-0.5 block text-[9px] tracking-[0.08em] text-fg-faint">{n.sub}</span>

                      {isActive && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="mt-2 overflow-hidden text-[11px] leading-relaxed text-fg-muted"
                        >
                          {n.detail}
                        </motion.p>
                      )}
                    </button>
                  </motion.div>
                );
              })}
            </div>

            {/* connecting copy */}
            <Reveal delay={0.4}>
              <div className="mt-8 space-y-3">
                <p className="font-display text-2xl font-semibold tracking-tightest text-fg sm:text-3xl">
                  FROM CODE TO <span className="serif-accent text-accent">systems.</span>
                </p>
                <p className="font-display text-2xl font-semibold tracking-tightest text-fg-muted sm:text-3xl">
                  FROM SYSTEMS TO <span className="serif-accent text-accent">products.</span>
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
