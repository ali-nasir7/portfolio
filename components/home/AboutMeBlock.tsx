'use client';

import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { site } from '@/data/site';
import { profile } from '@/data/profile';

const PHRASES = [
  'Building AI agents, workflow automations, and scalable web applications that automate operations, generate leads, and solve real business challenges.',
  'Designing backend systems, distributed pipelines, and AI-powered platforms that turn ideas into shipped, working software.',
  'Architecting multi-tenant SaaS, REST APIs, and event-driven systems that run reliably in production.',
];

/**
 * The big "Turning ideas into AI-Powered Solutions" headline + subhead +
 * Resume / Contact buttons + an "AboutMe" section with a continuously
 * scrolling/rotating description and a "See More" link to /about.
 * Matches the target's home-page composition.
 */
export function AboutMeBlock() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const [phraseIdx, setPhraseIdx] = useState(0);

  // Cycle the description when the block is in view
  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setPhraseIdx((i) => (i + 1) % PHRASES.length), 3500);
    return () => clearInterval(t);
  }, [reduce]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-20 sm:py-28" id="about-me">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        {/* Big headline */}
        <div className="text-center">
          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-5xl font-bold leading-[0.98] tracking-tightest text-fg sm:text-7xl md:text-8xl"
          >
            {profile.aboutHeadline}
            <br />
            <span className="serif-accent text-accent">{profile.aboutHeadlineAccent}</span>
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-fg-muted"
          >
            {profile.aboutSubhead}
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href={site.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-fg px-7 py-3.5 text-sm font-medium text-bg transition-colors hover:bg-fg-strong"
            >
              Resume
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full border border-fg/80 px-7 py-3.5 text-sm font-medium text-fg transition-colors hover:bg-fg hover:text-bg"
            >
              Contact
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>
        </div>

        {/* About Me block */}
        <div className="mt-24 grid items-start gap-12 lg:grid-cols-[1fr_auto] lg:gap-20">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <p className="font-mono-tech text-[11px] tracking-[0.28em] text-fg-faint">About Me</p>
            <h3 className="font-display mt-4 text-3xl font-semibold tracking-tightest text-fg sm:text-4xl">
              Hi, I&apos;m <span className="serif-accent text-accent">Ali Nasir</span>
            </h3>
            <div className="relative mt-6 min-h-[120px] overflow-hidden sm:min-h-[96px]">
              <AnimatePresence mode="wait">
                <motion.p
                  key={phraseIdx}
                  initial={reduce ? false : { y: 20, opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
                  animate={{ y: 0, opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
                  exit={{ y: -20, opacity: 0, clipPath: 'inset(100% 0 0 0)' }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="text-base leading-relaxed text-fg-muted sm:text-lg"
                >
                  {PHRASES[phraseIdx]}
                </motion.p>
              </AnimatePresence>
            </div>

            <Link
              href="/about"
              className="group mt-8 inline-flex items-center gap-2 rounded-full border border-fg/80 px-6 py-3 text-sm font-medium text-fg transition-colors hover:bg-fg hover:text-bg"
            >
              See More About Me
              <ArrowDown size={15} className="transition-transform group-hover:translate-y-0.5" />
            </Link>
          </motion.div>

          {/* Right column — small contact card */}
          <motion.aside
            initial={reduce ? false : { opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:pt-10"
          >
            <div className="flex w-full max-w-xs flex-col gap-3 sm:max-w-sm">
              <a
                href={`mailto:${site.email}`}
                className="group flex items-center justify-between rounded-2xl border border-line bg-bg-700 px-5 py-4 transition-colors hover:border-fg/30"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-10 5L2 7" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-mono-tech text-[10px] tracking-[0.18em] text-fg-faint">EMAIL</p>
                    <p className="text-sm font-medium text-fg">{site.email}</p>
                  </div>
                </div>
                <ArrowUpRight size={14} className="text-fg-faint transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href={site.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-line bg-bg-700 px-5 py-4 transition-colors hover:border-fg/30"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.37 4.28 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-mono-tech text-[10px] tracking-[0.18em] text-fg-faint">LINKEDIN</p>
                    <p className="text-sm font-medium text-fg">ali-nasir7</p>
                  </div>
                </div>
                <ArrowUpRight size={14} className="text-fg-faint transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href={site.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-line bg-bg-700 px-5 py-4 transition-colors hover:border-fg/30"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.49 2.87 8.3 6.84 9.65.5.09.68-.22.68-.49 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.46-1.18-1.11-1.49-1.11-1.49-.91-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.36-2.22-.26-4.55-1.13-4.55-5.04 0-1.11.39-2.02 1.03-2.74-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05.8-.23 1.65-.34 2.5-.34s1.7.12 2.5.34c1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.74 0 3.92-2.34 4.78-4.57 5.03.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.49A10.03 10.03 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-mono-tech text-[10px] tracking-[0.18em] text-fg-faint">GITHUB</p>
                    <p className="text-sm font-medium text-fg">ali-nasir7</p>
                  </div>
                </div>
                <ArrowUpRight size={14} className="text-fg-faint transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
