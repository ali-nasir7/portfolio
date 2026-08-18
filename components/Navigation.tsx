'use client';

import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Monogram } from './Monogram';
import { site } from '@/data/site';

const links = [
  { href: '/', label: 'Home', section: '#home' },
  { href: '/projects', label: 'Work', section: '#work' },
  { href: '/about', label: 'About', section: '#about' },
  { href: '/contact', label: 'Contact', section: '#contact' },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const hrefFor = (link: (typeof links)[number]) => {
    if (link.href.startsWith('/#')) return pathname === '/' ? link.section : link.href;
    return link.href;
  };

  return (
    <>
      <header className={cn('fixed inset-x-0 top-0 z-[80] transition-all duration-500', scrolled ? 'py-2.5' : 'py-5')}>
        <nav
          className={cn(
            'mx-3 flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 sm:px-6 md:mx-auto',
            scrolled ? 'border border-line bg-bg-900/80 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.6)] backdrop-blur-xl' : 'border border-transparent'
          )}
        >
          <Link href="/" className="group flex items-center gap-2.5">
            <Monogram className="h-6 w-11 text-fg" />
            <span className="hidden text-sm font-semibold tracking-wide text-fg sm:inline">ALI NASIR</span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <Link
                key={l.label}
                href={hrefFor(l)}
                className={cn(
                  'rounded-full px-3.5 py-2 text-[13px] font-medium transition-colors',
                  pathname === l.href ? 'text-fg' : 'text-fg-muted hover:bg-fg/[0.04] hover:text-fg'
                )}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/resume"
              className="ml-2 inline-flex items-center gap-1.5 rounded-full bg-fg px-4 py-2 text-[13px] font-medium text-bg transition-colors hover:bg-white"
            >
              View resume
              <ArrowUpRight size={14} />
            </Link>
          </div>

          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-fg md:hidden"
          >
            <Menu size={18} />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex flex-col bg-bg md:hidden"
          >
            <div className="flex items-center justify-between px-6 py-5">
              <Monogram className="h-6 w-11 text-fg" />
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-fg"
              >
                <X size={18} />
              </button>
            </div>
            <div className="flex flex-1 flex-col justify-center gap-1 px-8">
              {links.map((l, i) => (
                <motion.div
                  key={l.label}
                  initial={reduce ? false : { opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: reduce ? 0 : 0.05 * i, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={hrefFor(l)}
                    onClick={() => setOpen(false)}
                    className="font-display group flex items-center justify-between border-b border-line py-4 text-3xl font-semibold tracking-tightest text-fg"
                  >
                    {l.label}
                    <ArrowUpRight size={20} className="text-fg-faint transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={reduce ? false : { opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: reduce ? 0 : 0.3, duration: 0.4 }}
                className="pt-6"
              >
                <Link
                  href="/resume"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-1.5 rounded-full bg-fg px-6 py-3 text-sm font-medium text-bg"
                >
                  View resume <ArrowUpRight size={15} />
                </Link>
              </motion.div>
            </div>
            <div className="px-8 py-8">
              <a href={`mailto:${site.email}`} className="font-mono-tech text-sm text-fg-muted">
                {site.email}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
