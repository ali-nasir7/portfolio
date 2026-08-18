'use client';

import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { site } from '@/data/site';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Work' },
];

export function Navigation() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-[80] transition-all duration-500',
        scrolled ? 'py-2.5' : 'py-4'
      )}
    >
      <nav
        className={cn(
          'mx-3 flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 sm:px-6 md:mx-auto',
          scrolled
            ? 'border border-line bg-bg-700/90 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.12)] backdrop-blur-xl'
            : 'border border-transparent bg-transparent'
        )}
      >
        {/* Brand — links home */}
        <Link href="/" className="group flex items-center gap-2" aria-label="Go to homepage">
          <span
            className={cn(
              'flex h-9 w-9 items-center justify-center rounded-full border border-fg/80 font-display text-sm font-bold tracking-tightest text-fg transition-colors',
              'group-hover:bg-fg group-hover:text-bg'
            )}
          >
            AN
          </span>
        </Link>

        {/* Center nav */}
        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => {
            const isActive = l.href === '/' ? pathname === '/' : pathname?.startsWith(l.href);
            return (
              <Link
                key={l.label}
                href={l.href}
                className={cn(
                  'relative rounded-full px-4 py-2 text-sm font-medium transition-colors',
                  isActive ? 'text-fg' : 'text-fg-muted hover:text-fg'
                )}
              >
                {l.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-3 -bottom-0.5 h-px bg-fg"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Right — Contact */}
        <a
          href={`mailto:${site.email}`}
          className="group inline-flex items-center gap-1.5 rounded-full bg-fg px-4 py-2 text-sm font-medium text-bg transition-colors hover:bg-fg-strong"
        >
          Contact
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            <path d="M7 17L17 7" />
            <path d="M7 7h10v10" />
          </svg>
        </a>
      </nav>
    </header>
  );
}
