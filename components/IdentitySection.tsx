'use client';

import { motion, useReducedMotion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Fingerprint, QrCode } from 'lucide-react';
import { Monogram } from './Monogram';
import { MagneticButton } from './MagneticButton';
import { Reveal } from './Reveal';
import { TiltCard } from './TiltCard';
import { profile } from '@/data/profile';
import { site } from '@/data/site';

const marqueeItems = [
  'JAVA 21',
  'SPRING BOOT',
  'SPRING SECURITY',
  'JPA / HIBERNATE',
  'POSTGRESQL',
  'MYSQL',
  'ORACLE',
  'REDIS',
  'APACHE KAFKA',
  'DOCKER',
  'GITHUB ACTIONS',
  'SWAGGER',
  'OPENAI API',
];

const idMetadata = [
  'SYSTEMS_ENGINEER_v1.0',
  'BACKEND: JAVA / SPRING',
  'MODE: PRODUCTION',
  'STATUS: OPEN_TO_WORK',
];

/**
 * The continuous identity moment that follows the hero:
 *   AN mark assembles → creative digital ID card → "hire me" engineer band.
 */
export function IdentitySection() {
  const reduce = useReducedMotion();
  const markRef = useRef<HTMLDivElement>(null);
  const markInView = useInView(markRef, { once: true, margin: '-15% 0px' });
  const [metaIdx, setMetaIdx] = useState(0);

  // cycle animated technical metadata on the ID card
  useEffect(() => {
    const t = setInterval(() => setMetaIdx((i) => (i + 1) % idMetadata.length), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative overflow-hidden border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-28 sm:px-8 md:py-40">
        {/* ---------- AN identity moment ---------- */}
        <div ref={markRef} className="flex flex-col items-center text-center">
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.85 }}
            animate={markInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <Monogram className="h-20 w-40 text-fg sm:h-24 sm:w-48" animate={markInView} />
          </motion.div>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={markInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-mono-tech mt-8 text-[11px] tracking-[0.3em] text-fg-faint"
          >
            A SOFTWARE ENGINEER&apos;S DIGITAL WORLD
          </motion.p>
        </div>

        {/* ---------- Creative ID card ---------- */}
        <div className="mt-16 grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
          <Reveal>
            <div className="max-w-md">
              <h2 className="font-display text-4xl font-bold leading-[1.02] tracking-tightest text-fg sm:text-5xl">
                YOUR NEXT
                <br />
                <span className="serif-accent text-accent">engineer.</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-fg-muted">
                {profile.positioning}
              </p>
              <div className="mt-8">
                <MagneticButton href="/contact" variant="accent">
                  Hire me
                  <ArrowUpRight size={16} />
                </MagneticButton>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <TiltCard intensity={5}>
              <div className="relative overflow-hidden rounded-3xl border border-line bg-surface shadow-[0_40px_100px_-30px_rgba(0,0,0,0.8)]">
                {/* gradient border glow */}
                <div className="pointer-events-none absolute inset-0 rounded-3xl" style={{ background: 'radial-gradient(120% 60% at 50% 0%, rgba(227,168,86,0.12), transparent 60%)' }} />
                {/* shine sweep */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
                  <div className="absolute top-0 h-full w-1/3 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent animate-shine" />
                </div>

                <div className="relative p-7 sm:p-8">
                  {/* header */}
                  <div className="flex items-center justify-between">
                    <Monogram className="h-7 w-14 text-fg" />
                    <span className="font-mono-tech flex items-center gap-1.5 text-[10px] tracking-[0.2em] text-fg-faint">
                      <Fingerprint size={13} /> DIGITAL ID
                    </span>
                  </div>

                  {/* identity */}
                  <div className="mt-7 flex items-center gap-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={site.portrait} alt="" className="h-16 w-16 rounded-2xl object-cover ring-1 ring-line-strong" draggable={false} />
                    <div>
                      <p className="font-display text-2xl font-bold tracking-tightest text-fg">{profile.idCard.name}</p>
                      <p className="font-mono-tech mt-0.5 text-[10px] tracking-[0.2em] text-accent">{profile.idCard.role}</p>
                    </div>
                  </div>

                  {/* tags */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {profile.idCard.tags.map((t) => (
                      <span key={t} className="font-mono-tech rounded-full border border-line bg-fg/[0.03] px-3 py-1 text-[10px] tracking-[0.12em] text-fg-muted">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* animated metadata */}
                  <div className="mt-6 flex items-center justify-between border-t border-line pt-4">
                    <motion.span
                      key={metaIdx}
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      className="font-mono-tech text-[10px] tracking-[0.14em] text-fg-faint"
                    >
                      {idMetadata[metaIdx]}
                    </motion.span>
                    <span className="flex items-center gap-1.5">
                      <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      <span className="font-mono-tech text-[10px] tracking-[0.14em] text-fg-muted">{profile.idCard.status}</span>
                    </span>
                  </div>

                  {/* footer strip */}
                  <div className="mt-5 flex items-center justify-between">
                    <div className="flex items-end gap-[2px]" aria-hidden>
                      {Array.from({ length: 22 }).map((_, i) => (
                        <span key={i} className="w-[2px] bg-fg/25" style={{ height: `${6 + ((i * 7) % 18)}px` }} />
                      ))}
                    </div>
                    <QrCode size={28} className="text-fg-faint" />
                  </div>
                </div>
              </div>
            </TiltCard>
          </Reveal>
        </div>

        {/* ---------- Hire-me / software engineer band ---------- */}
        <div className="mt-20 overflow-hidden border-t border-line pt-12">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="tech-label">{profile.hireMe.sub.toUpperCase()}</p>
                <h3 className="font-display mt-3 text-5xl font-bold tracking-tightest text-fg sm:text-7xl">
                  {profile.hireMe.headline}
                </h3>
              </div>
              <p className="flex items-center gap-2 font-mono-tech text-[11px] tracking-[0.14em] text-fg-muted">
                <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-emerald-400" />
                {profile.hireMe.availability.toUpperCase()}
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      {/* tech marquee */}
      <div className="relative border-y border-line bg-bg-900/40 py-4">
        <div className="flex overflow-hidden" aria-hidden>
          <div className="flex shrink-0 animate-marquee gap-10 pr-10">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className="font-mono-tech flex items-center gap-10 whitespace-nowrap text-[12px] tracking-[0.2em] text-fg-faint">
                {item}
                <span className="text-accent">•</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
