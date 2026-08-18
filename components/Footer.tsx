'use client';

import Link from 'next/link';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';
import { site } from '@/data/site';
import { profile } from '@/data/profile';
import { MagneticButton } from './MagneticButton';

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-bg-800">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[260px] w-[600px] -translate-x-1/2 rounded-full bg-accent/[0.05] blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-6 py-20 sm:px-8">
        <div className="mb-16 flex flex-col items-center text-center">
          <h2 className="font-display text-4xl font-bold leading-[0.98] tracking-tightest text-fg sm:text-6xl">
            LET&apos;S BUILD SOMETHING
            <br />
            <span className="serif-accent text-accent">worth shipping.</span>
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <MagneticButton href="/contact" variant="accent">
              Start a conversation
            </MagneticButton>
            <MagneticButton href="/resume" variant="outline">
              View resume
            </MagneticButton>
          </div>
        </div>

        <div className="flex flex-col items-center border-t border-line pt-14 text-center">
          <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-fg font-display text-base font-bold tracking-tightest text-fg">
            AN
          </span>
          <p className="font-display mt-5 text-2xl font-bold tracking-tightest text-fg sm:text-3xl">
            {profile.fullName.toUpperCase()}
          </p>
          <p className="font-mono-tech mt-2 text-[11px] tracking-[0.26em] text-fg-muted">
            {profile.role.toUpperCase()}
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            {[
              { href: `mailto:${site.email}`, icon: <Mail size={15} />, label: site.email, external: false },
              { href: site.socials.linkedin, icon: <Linkedin size={15} />, label: 'linkedin.com/in/ali-nasir7', external: true },
              { href: site.socials.github, icon: <Github size={15} />, label: 'github.com/ali-nasir7', external: true },
              { href: site.socials.twitter, icon: <Twitter size={15} />, label: 'twitter', external: true },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                {...(s.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="inline-flex items-center gap-2 rounded-full border border-line bg-bg-700 px-4 py-2 text-xs text-fg-muted transition-colors hover:border-fg/40 hover:text-fg"
              >
                {s.icon}
                <span className="font-mono-tech text-[10px] tracking-[0.08em]">{s.label}</span>
              </a>
            ))}
          </div>

          <nav className="mt-8 flex flex-wrap justify-center gap-x-7 gap-y-2 text-sm text-fg-muted">
            {[
              { href: '/', label: 'Home' },
              { href: '/about', label: 'About' },
              { href: '/projects', label: 'Work' },
              { href: '/resume', label: 'Resume' },
              { href: '/contact', label: 'Contact' },
            ].map((l) => (
              <Link key={l.label} href={l.href} className="link-underline transition-colors hover:text-fg">
                {l.label}
              </Link>
            ))}
          </nav>

          <p className="font-mono-tech mt-10 text-[11px] text-fg-faint">
            © {new Date().getFullYear()} {site.fullName}. Designed &amp; engineered end-to-end.
          </p>
        </div>
      </div>
    </footer>
  );
}
