'use client';

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowUpRight, Mail, Linkedin, Github } from 'lucide-react';
import { profile } from '@/data/profile';
import { journey, expertise } from '@/data/services';
import { site } from '@/data/site';
import { Reveal } from '@/components/Reveal';
import { Signature } from '@/components/Signature';
import { Services } from '@/components/Services';
import { StackSection } from '@/components/StackSection';
import { MagneticButton } from '@/components/MagneticButton';
import { TechBadge } from '@/components/TechBadge';

const socials = [
  { label: 'EMAIL', value: site.email, href: `mailto:${site.email}`, icon: <Mail size={16} /> },
  { label: 'LINKEDIN', value: 'linkedin.com/in/ali-nasir7', href: site.socials.linkedin, icon: <Linkedin size={16} />, external: true },
  { label: 'GITHUB', value: 'github.com/ali-nasir7', href: site.socials.github, icon: <Github size={16} />, external: true },
];

function AboutImage({ className }: { className?: string }) {
  const [src, setSrc] = useState<string>(site.aboutImage);
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={site.fullName} onError={() => setSrc(site.portrait)} className={className} draggable={false} />
  );
}

/** Phase block with a big outlined number. */
function Phase({ num, phase, title, body, flip }: { num: string; phase: string; title: string; body: string; flip: boolean }) {
  const reduce = useReducedMotion();
  return (
    <div className={`grid items-center gap-8 md:grid-cols-[auto_1fr] md:gap-12 ${flip ? 'md:text-right md:[direction:rtl]' : ''}`}>
      <motion.div
        initial={reduce ? false : { opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-10% 0px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="[direction:ltr]"
      >
        <span className="font-display text-7xl font-bold leading-none tracking-tightest text-transparent sm:text-8xl md:text-9xl" style={{ WebkitTextStroke: '1.5px rgba(244,242,239,0.25)' }}>
          {num}
        </span>
      </motion.div>
      <motion.div
        initial={reduce ? false : { opacity: 0, x: flip ? 40 : -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-10% 0px' }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="[direction:ltr]"
      >
        <p className="font-mono-tech text-[10px] tracking-[0.24em] text-accent">{phase}</p>
        <h3 className="font-display mt-2 text-3xl font-semibold tracking-tightest text-fg sm:text-4xl">{title}</h3>
        <p className="mt-3 max-w-lg text-base leading-relaxed text-fg-muted">{body}</p>
      </motion.div>
    </div>
  );
}

export function AboutContent() {
  const reduce = useReducedMotion();
  const imgWrapRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: imgWrapRef, offset: ['start end', 'end start'] });
  const yImg = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);

  return (
    <main className="relative overflow-hidden pb-28 pt-32">
      {/* ---------- WHO I AM hero ---------- */}
      <section className="relative">
        <div className="pointer-events-none absolute inset-x-0 top-6 -z-10 select-none overflow-hidden" aria-hidden>
          <div className="whitespace-nowrap font-display text-[16vw] font-bold leading-none tracking-tightest text-fg/[0.04]">
            WHO I AM · WHO I AM · WHO I AM
          </div>
        </div>

        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Reveal>
              <p className="font-mono-tech text-[11px] tracking-[0.28em] text-fg-faint">WHO I AM</p>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="font-display mt-5 text-6xl font-bold leading-[0.92] tracking-tightest text-fg sm:text-7xl md:text-8xl">
                ALI
                <br />
                NASIR
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-4 flex items-center gap-3">
                <span className="h-px w-10 bg-accent" />
                <span className="font-mono-tech text-[12px] tracking-[0.22em] text-fg-muted">
                  SOFTWARE ENGINEER · <span className="text-accent">JAVA BACKEND</span>
                </span>
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mt-7 max-w-md text-lg leading-relaxed text-fg-muted">{profile.about[0]}</p>
            </Reveal>
            <Reveal delay={0.22}>
              <div className="mt-8 flex flex-wrap gap-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    {...(s.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="inline-flex items-center gap-2 rounded-full border border-line bg-fg/[0.02] px-4 py-2 text-xs text-fg-muted transition-colors hover:border-line-strong hover:text-fg"
                  >
                    {s.icon}
                    <span className="font-mono-tech text-[10px] tracking-[0.12em]">{s.label}</span>
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div ref={imgWrapRef} className="relative mx-auto max-w-sm lg:max-w-none">
              <div className="absolute -inset-3 -z-10 rounded-[2rem] border border-line-strong" />
              <div className="absolute -inset-3 -z-10 translate-x-4 translate-y-4 rounded-[2rem] bg-accent/10" />
              <div className="relative overflow-hidden rounded-[1.75rem] shadow-[0_40px_100px_-30px_rgba(0,0,0,0.8)]">
                <motion.div style={reduce ? undefined : { y: yImg }}>
                  <AboutImage className="aspect-[4/5] w-full scale-110 object-cover" />
                </motion.div>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-line bg-bg-900/70 px-4 py-3 backdrop-blur-md">
                  <p className="font-mono-tech text-[9px] tracking-[0.18em] text-fg-faint">LOCATION</p>
                  <p className="font-display mt-0.5 text-sm font-semibold text-fg">{profile.location}</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- scrolling story strip ---------- */}
      <div className="mt-20 overflow-hidden border-y border-line bg-bg-900/40 py-5">
        <div className="flex animate-marquee whitespace-nowrap" aria-hidden>
          {[0, 1].map((k) => (
            <span key={k} className="flex shrink-0 items-center">
              <span className="font-display text-2xl font-medium tracking-tightest text-fg-muted sm:text-3xl">
                &nbsp;I TAKE SOFTWARE FROM IDEA TO PRODUCTION · JAVA · SPRING BOOT · DISTRIBUTED SYSTEMS · AI ·
              </span>
            </span>
          ))}
        </div>
      </div>

      {/* ---------- Story ---------- */}
      <section className="mx-auto mt-24 max-w-6xl px-6 sm:px-8">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <Reveal>
            <p className="text-xl leading-relaxed text-fg">{profile.about[0]}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-xl leading-relaxed text-fg-muted">{profile.about[1]}</p>
          </Reveal>
        </div>
        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-wrap gap-2">
            {profile.ownershipAreas.map((a) => (
              <span key={a} className="font-mono-tech rounded-full border border-line bg-fg/[0.02] px-3.5 py-1.5 text-xs tracking-[0.1em] text-fg-muted">
                {a}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ---------- Followed Approach ---------- */}
      <section className="mx-auto mt-32 max-w-6xl px-6 sm:px-8">
        <Reveal>
          <p className="font-mono-tech text-[11px] tracking-[0.28em] text-fg-faint">FOLLOWED APPROACH</p>
          <h2 className="font-display mt-4 text-4xl font-semibold tracking-tightest text-fg sm:text-5xl">
            HOW I <span className="serif-accent text-accent">operate.</span>
          </h2>
        </Reveal>
        <div className="mt-16 space-y-20">
          {journey.map((j, i) => (
            <Phase key={j.num} num={j.num} phase={j.phase} title={j.title} body={j.body} flip={i % 2 === 1} />
          ))}
        </div>
      </section>

      {/* ---------- Services ---------- */}
      <div className="mt-32">
        <Services />
      </div>

      {/* ---------- Areas of expertise ---------- */}
      <section className="mx-auto mt-24 max-w-6xl px-6 sm:px-8">
        <Reveal>
          <p className="font-mono-tech text-[11px] tracking-[0.28em] text-fg-faint">AREAS OF EXPERTISE</p>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {expertise.map((e, i) => (
            <Reveal key={e.num} delay={i * 0.08}>
              <div className="surface group h-full rounded-2xl p-7 transition-all duration-300 hover:border-accent/30">
                <span className="font-display text-4xl font-bold tracking-tightest text-accent">{e.num}</span>
                <h3 className="font-display mt-4 text-xl font-semibold tracking-tightest text-fg">{e.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-fg-muted">{e.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- Education ---------- */}
      <section className="mx-auto mt-24 max-w-6xl px-6 sm:px-8">
        <Reveal>
          <p className="font-mono-tech text-[11px] tracking-[0.28em] text-fg-faint">EDUCATION</p>
        </Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <Reveal>
            <div className="surface rounded-2xl p-6">
              <p className="font-mono-tech text-[10px] tracking-[0.2em] text-fg-faint">BSCS · 2023 – 2027</p>
              <h3 className="font-display mt-2 text-xl font-semibold tracking-tightest text-fg">Hamdard University</h3>
              <p className="mt-1 text-sm text-fg-muted">CGPA 3.10 / 4.00 · Final year</p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="surface rounded-2xl p-6">
              <p className="font-mono-tech text-[10px] tracking-[0.2em] text-fg-faint">CERTIFICATION · 2025</p>
              <h3 className="font-display mt-2 text-xl font-semibold tracking-tightest text-fg">Cloud Computing</h3>
              <p className="mt-1 text-sm text-fg-muted">NED University of Engineering &amp; Technology</p>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <div className="mt-6 flex flex-wrap gap-2">
            <TechBadge label="Java" />
            <TechBadge label="Spring Boot" />
            <TechBadge label="PostgreSQL" />
            <TechBadge label="Kafka" />
            <TechBadge label="Redis" />
            <TechBadge label="Docker" />
            <TechBadge label="OpenAI API" />
          </div>
        </Reveal>
      </section>

      {/* ---------- Tech stack ---------- */}
      <StackSection />

      {/* ---------- Signature + CTA ---------- */}
      <section className="mx-auto mt-28 flex max-w-6xl flex-col items-center px-6 text-center sm:px-8">
        <Reveal>
          <h2 className="font-display text-4xl font-bold leading-[0.98] tracking-tightest text-fg sm:text-6xl">
            LET&apos;S BUILD SOMETHING
            <br />
            <span className="serif-accent text-accent">worth shipping.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-9">
            <MagneticButton href="/contact" variant="accent">
              Start a conversation
              <ArrowUpRight size={16} />
            </MagneticButton>
          </div>
        </Reveal>
        <Reveal delay={0.16}>
          <Signature className="mt-20 text-fg-muted" />
        </Reveal>
        <Reveal delay={0.2}>
          <p className="font-mono-tech mt-4 text-[10px] tracking-[0.24em] text-fg-faint">ALI NASIR</p>
        </Reveal>
      </section>
    </main>
  );
}
