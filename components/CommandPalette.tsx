'use client';

import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Home,
  FolderGit2,
  Briefcase,
  Layers,
  User,
  FileText,
  Github,
  Linkedin,
  Mail,
  Play,
  Volume2,
  Gauge,
  CornerDownLeft,
  Search,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { site } from '@/data/site';
import { useApp } from '@/lib/app-context';

interface Command {
  id: string;
  label: string;
  hint?: string;
  icon: React.ReactNode;
  run: () => void;
}

/** CTRL/CMD + K command palette. */
export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const { toggleSound, soundOn, toggleReducedMotion, reducedMotion } = useApp();
  const reduce = useReducedMotion();

  const commands = useMemo<Command[]>(
    () => [
      { id: 'home', label: 'Navigate Home', icon: <Home size={16} />, run: () => router.push('/') },
      { id: 'work', label: 'View Work', icon: <FolderGit2 size={16} />, run: () => router.push('/projects') },
      { id: 'experience', label: 'View Experience', icon: <Briefcase size={16} />, run: () => router.push('/#experience') },
      { id: 'stack', label: 'View Tech Stack', icon: <Layers size={16} />, run: () => router.push('/about#stack') },
      { id: 'about', label: 'View About', icon: <User size={16} />, run: () => router.push('/about') },
      { id: 'resume', label: 'View Resume', icon: <FileText size={16} />, run: () => router.push('/resume') },
      { id: 'github', label: 'Open GitHub', hint: '@ali-nasir7', icon: <Github size={16} />, run: () => window.open(site.socials.github, '_blank') },
      { id: 'linkedin', label: 'Open LinkedIn', hint: 'ali-nasir7', icon: <Linkedin size={16} />, run: () => window.open(site.socials.linkedin, '_blank') },
      { id: 'contact', label: 'Contact Ali', icon: <Mail size={16} />, run: () => router.push('/contact') },
      { id: 'intro', label: 'Replay Intro', icon: <Play size={16} />, run: () => { setOpen(false); window.dispatchEvent(new CustomEvent('play-intro')); } },
      { id: 'sound', label: soundOn ? 'Mute Sound' : 'Toggle Sound', hint: soundOn ? 'ON' : 'OFF', icon: <Volume2 size={16} />, run: () => toggleSound() },
      { id: 'motion', label: reducedMotion ? 'Enable Motion' : 'Toggle Reduced Motion', hint: reducedMotion ? 'ON' : 'OFF', icon: <Gauge size={16} />, run: () => toggleReducedMotion() },
    ],
    [router, soundOn, toggleSound, reducedMotion, toggleReducedMotion]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter((c) => c.label.toLowerCase().includes(q));
  }, [query, commands]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen((o) => !o);
        setQuery('');
      } else if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    if (open) {
      setActive(0);
      setTimeout(() => inputRef.current?.focus(), 30);
    }
  }, [open]);

  const run = (c: Command) => {
    c.run();
    setOpen(false);
    setQuery('');
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((a) => (a + 1) % filtered.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((a) => (a - 1 + filtered.length) % filtered.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filtered[active]) run(filtered[active]);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="fixed inset-0 z-[200] flex items-start justify-center bg-black/60 px-4 pt-[16vh] backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: reduce ? 0 : 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 8 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_24px_80px_rgba(0,0,0,0.6)]"
          >
            <div className="flex items-center gap-3 border-b border-line px-4 py-3.5">
              <Search size={16} className="text-fg-faint" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setActive(0);
                }}
                onKeyDown={onKeyDown}
                placeholder="Type a command or search…"
                className="w-full bg-transparent text-sm text-fg outline-none placeholder:text-fg-faint"
              />
              <kbd className="rounded border border-line bg-fg/[0.03] px-1.5 py-0.5 font-mono-tech text-[10px] text-fg-faint">ESC</kbd>
            </div>
            <div className="max-h-[50vh] overflow-y-auto py-2">
              {filtered.length === 0 && <p className="px-4 py-6 text-center text-sm text-fg-faint">No commands match “{query}”.</p>}
              {filtered.map((c, i) => (
                <button
                  key={c.id}
                  onMouseEnter={() => setActive(i)}
                  onClick={() => run(c)}
                  className={cn(
                    'flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm transition-colors',
                    i === active ? 'bg-fg/[0.06] text-fg' : 'text-fg-muted'
                  )}
                >
                  <span className={cn('text-fg-faint', i === active && 'text-accent')}>{c.icon}</span>
                  <span className="flex-1">{c.label}</span>
                  {c.hint && <span className="font-mono-tech text-[10px] text-fg-faint">{c.hint}</span>}
                  {i === active && <CornerDownLeft size={13} className="text-fg-faint" />}
                </button>
              ))}
            </div>
            <div className="flex items-center justify-between border-t border-line px-4 py-2.5">
              <span className="font-mono-tech text-[10px] text-fg-faint">↑↓ navigate · ↵ select</span>
              <span className="font-mono-tech text-[10px] text-fg-faint">ALI NASIR / OS v3.0</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
