'use client';

import Link from 'next/link';
import { ArrowUpRight, Mail, Linkedin, Github } from 'lucide-react';
import { site } from '@/data/site';
import { profile } from '@/data/profile';
import { Monogram } from './Monogram';
import { MagneticButton } from './MagneticButton';

/** Final transition into the footer — identity, contact and navigation. */
export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-bg-900/50">
      <div className="grid-bg absolute inset-0 opacity-40" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-accent/[0.05] blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-6 py-20 sm:px-8">
        {/* CTA */}
        <div className="mb-16 flex flex-col items-center text-center">
          <h2 className="font-display text-4xl font-bold leading-[0.98] tracking-tightest text-fg sm:text-6xl">
            LET&apos;S BUILD SOMETHING
            <br />
            <span className="serif-accent text-accent">worth shipping.</span>
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <MagneticButton href="/contact" variant="accent">
              Start a conversation
              <ArrowUpRight size={16} />
            </MagneticButton>
            <MagneticButton href="/resume" variant="outline">
              View resume
            </MagneticButton>
          </div>
        </div>

        {/* identity */}
        <div className="flex flex-col items-center border-t border-line pt-14 text-center">
          <Monogram className="h-9 w-[4.2rem] text-fg" />
          <p className="font-display mt-5 text-3xl font-bold tracking-tightest text-fg sm:text-4xl">
            {profile.fullName.toUpperCase()}
          </p>
          <p className="font-mono-tech mt-2 text-[11px] tracking-[0.26em] text-fg-muted">
            {profile.role.toUpperCase()}
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            {[
              { href: `mailto:${site.email}`, icon: <Mail size={15} />, label: site.email },
              { href: site.socials.linkedin, icon: <Linkedin size={15} />, label: 'linkedin.com/in/ali-nasir7', external: true },
              { href: site.socials.github, icon: <Github size={15} />, label: 'github.com/ali-nasir7', external: true },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                {...(s.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="inline-flex items-center gap-2 rounded-full border border-line bg-fg/[0.02] px-4 py-2 text-xs text-fg-muted transition-colors hover:border-line-strong hover:text-fg"
              >
                {s.icon}
                <span className="font-mono-tech text-[10px] tracking-[0.08em]">{s.label}</span>
              </a>
            ))}
          </div>

          <nav className="mt-8 flex flex-wrap justify-center gap-x-7 gap-y-2 text-sm text-fg-muted">
            {[
              { href: '/', label: 'Home' },
              { href: '/projects', label: 'Work' },
              { href: '/about', label: 'About' },
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
