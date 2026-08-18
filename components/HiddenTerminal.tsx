'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { site } from '@/data/site';
import { projects } from '@/data/projects';

/** Hidden terminal (easter egg) — press ` (backtick) to open. */
export function HiddenTerminal() {
  const [open, setOpen] = useState(false);
  const [lines, setLines] = useState<string[]>(['ali-os v3.0 — type "help" for commands']);
  const [input, setInput] = useState('');
  const reduce = useReducedMotion();
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === '`' && !e.metaKey && !e.ctrlKey && !e.altKey) {
        const t = e.target as HTMLElement;
        if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable)) return;
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 30);
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [open, lines]);

  const run = (raw: string) => {
    const cmd = raw.trim().toLowerCase();
    const out: string[] = [];
    const print = (...a: string[]) => out.push(...a);

    if (!cmd) return;
    if (cmd === 'help') {
      print('whoami — about me', 'projects — what I build', 'stack — core toolchain', 'contact — reach me', 'github — open my GitHub', 'neofetch — system info', 'sudo … — try it', 'clear — wipe', 'exit — close');
    } else if (cmd === 'whoami') {
      print(`${site.fullName} — ${site.role}`, `Java Backend Developer · ${site.location}`);
    } else if (cmd === 'projects' || cmd === 'ls') {
      projects.forEach((p) => print(`  ${p.slug.padEnd(16)} ${p.statusLabel}`));
    } else if (cmd === 'stack') {
      print('Java · Spring Boot · Spring Security · JPA/Hibernate · PostgreSQL · MySQL · Oracle · Redis · Kafka · Docker · GitHub Actions · Swagger');
    } else if (cmd === 'contact') {
      print(`email    ${site.email}`, `linkedin ${site.socials.linkedin}`);
    } else if (cmd === 'github') {
      window.open(site.socials.github, '_blank');
      print('opening github.com/ali-nasir7 …');
    } else if (cmd === 'neofetch') {
      print('            ▄▄▄▄', '        ▄▄▀▀▀▀▀▀▄▄', '       ▄▀  SOFTWARE  ▀▄', '       █   ENGINEER   █', `       █  ${site.fullName.toUpperCase()}`, '       ▀▄  Java · Spring  ▄▀', '        ▀▄▄▄▄▄▄▄▄▄▄▀', '  os: ali-os v3.0 · uptime: since idea → production');
    } else if (cmd.startsWith('sudo')) {
      print('Permission denied. Nice try. 😏');
    } else if (cmd === 'clear') {
      setLines([]);
      return;
    } else if (cmd === 'exit' || cmd === 'close') {
      setOpen(false);
      return;
    } else {
      print(`command not found: ${raw} — try "help"`);
    }
    setLines((l) => [...l, `$ ${raw}`, ...out]);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 16, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.98 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-6 left-1/2 z-[210] w-[min(92vw,620px)] -translate-x-1/2 overflow-hidden rounded-xl border border-line bg-bg-900/95 shadow-[0_24px_80px_rgba(0,0,0,0.7)] backdrop-blur-xl"
        >
          <div className="flex items-center justify-between border-b border-line px-4 py-2">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-500/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
            </div>
            <span className="font-mono-tech text-[10px] tracking-[0.2em] text-fg-faint">ali@os — zsh</span>
            <button onClick={() => setOpen(false)} className="text-fg-faint hover:text-fg">✕</button>
          </div>
          <div ref={scrollRef} className="h-56 overflow-y-auto px-4 py-3 font-mono-tech text-[12.5px] leading-relaxed">
            {lines.map((l, i) => (
              <p key={i} className={l.startsWith('$') ? 'text-accent' : 'text-fg-muted'}>
                {l}
              </p>
            ))}
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              run(input);
              setInput('');
            }}
            className="flex items-center gap-2 border-t border-line px-4 py-2.5"
          >
            <span className="font-mono-tech text-accent">$</span>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full bg-transparent font-mono-tech text-[12.5px] text-fg outline-none placeholder:text-fg-faint"
              placeholder="type a command…"
              autoComplete="off"
              spellCheck={false}
            />
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
