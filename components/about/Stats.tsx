'use client';

import { motion, useInView, useReducedMotion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { profile } from '@/data/profile';

function Counter({ to, suffix = '+' }: { to: number; suffix?: string }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });
  const value = useMotionValue(0);
  const display = useTransform(value, (v) => Math.round(v).toString());
  const [val, setVal] = useState('0');

  useEffect(() => {
    if (reduce) {
      setVal(String(to));
      return;
    }
    if (!inView) return;
    const controls = animate(value, to, { duration: 1.6, ease: [0.16, 1, 0.3, 1] });
    const unsub = display.on('change', setVal);
    return () => {
      controls.stop();
      unsub();
    };
  }, [inView, to, value, display, reduce]);

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

const stats = [
  { num: profile.stats.techSkills, label: 'Tech Skills Mastered' },
  { num: profile.stats.projects, label: 'Projects Completed' },
  { num: profile.stats.linkedin, label: 'LinkedIn Connections' },
];

export function Stats() {
  const reduce = useReducedMotion();
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-12 sm:px-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl border border-line bg-bg-700 p-7 text-center shadow-[0_8px_24px_-12px_rgba(0,0,0,0.08)]"
          >
            <div className="font-display text-5xl font-bold tracking-tightest text-fg sm:text-6xl">
              <Counter to={s.num} />
            </div>
            <p className="font-mono-tech mt-3 text-[11px] tracking-[0.18em] text-fg-muted">
              {s.label.toUpperCase()}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
