'use client';

import { useState } from 'react';
import { Mail, Linkedin, Github, Loader2, Check, AlertCircle, ArrowUpRight } from 'lucide-react';
import { site } from '@/data/site';
import { Reveal } from './Reveal';
import { MagneticButton } from './MagneticButton';
import { cn } from '@/lib/utils';

const CONTACT_ENDPOINT = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT ?? '';

type Status = 'idle' | 'loading' | 'success' | 'error';

export function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.subject.trim()) e.subject = 'Subject is required';
    if (form.message.trim().length < 10) e.message = 'Message should be at least 10 characters';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('loading');

    if (CONTACT_ENDPOINT) {
      try {
        const res = await fetch(CONTACT_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        });
        if (!res.ok) throw new Error();
        setStatus('success');
      } catch {
        setStatus('error');
      }
    } else {
      const body = encodeURIComponent(`${form.message}\n\n— ${form.name}`);
      const subject = encodeURIComponent(form.subject);
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
      setStatus('success');
    }
  };

  const inputCls = (err?: string) =>
    cn(
      'w-full rounded-xl border bg-bg-700 px-4 py-3 text-sm text-fg outline-none transition-colors placeholder:text-fg-faint focus:border-accent/60',
      err ? 'border-rose-500/50' : 'border-line'
    );

  return (
    <section id="contact" className="relative scroll-mt-24">
      <div className="pointer-events-none absolute right-0 top-0 h-[400px] w-[500px] rounded-full bg-accent/[0.05] blur-[140px]" />
      <div className="mx-auto max-w-6xl px-6 py-28 sm:px-8 md:py-36">
        <Reveal>
          <p className="font-mono-tech text-[11px] tracking-[0.28em] text-fg-faint">07 / CONTACT</p>
          <h2 className="font-display mt-5 max-w-3xl text-5xl font-bold leading-[0.98] tracking-tightest text-fg sm:text-6xl md:text-7xl">
            LET&apos;S BUILD SOMETHING
            <br />
            <span className="serif-accent text-accent">worth shipping.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal delay={0.05}>
            <div className="space-y-4">
              {[
                { icon: <Mail size={18} />, label: 'EMAIL', value: site.email, href: `mailto:${site.email}` },
                { icon: <Linkedin size={18} />, label: 'LINKEDIN', value: 'linkedin.com/in/ali-nasir7', href: site.socials.linkedin, external: true },
                { icon: <Github size={18} />, label: 'GITHUB', value: 'github.com/ali-nasir7', href: site.socials.github, external: true },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="group flex items-center justify-between rounded-2xl border border-line bg-bg-700 px-6 py-5 transition-all hover:border-accent/40"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-fg/[0.03] text-accent">{c.icon}</span>
                    <div>
                      <p className="font-mono-tech text-[10px] tracking-[0.2em] text-fg-faint">{c.label}</p>
                      <p className="mt-0.5 text-sm text-fg">{c.value}</p>
                    </div>
                  </div>
                  <ArrowUpRight size={16} className="text-fg-faint transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              ))}
              <p className="font-mono-tech px-1 pt-2 text-[10px] leading-relaxed tracking-[0.08em] text-fg-faint">
                Prefer a direct email? {site.email} · I usually reply within a couple of days.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={onSubmit} noValidate className="rounded-2xl border border-line bg-bg-700 p-6 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.08)] sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="font-mono-tech mb-1.5 block text-[10px] tracking-[0.18em] text-fg-faint">NAME</label>
                  <input id="name" value={form.name} onChange={set('name')} placeholder="Your name" className={inputCls(errors.name)} />
                  {errors.name && <p className="mt-1 text-xs text-rose-400">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="font-mono-tech mb-1.5 block text-[10px] tracking-[0.18em] text-fg-faint">EMAIL</label>
                  <input id="email" type="email" value={form.email} onChange={set('email')} placeholder="you@company.com" className={inputCls(errors.email)} />
                  {errors.email && <p className="mt-1 text-xs text-rose-400">{errors.email}</p>}
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="subject" className="font-mono-tech mb-1.5 block text-[10px] tracking-[0.18em] text-fg-faint">SUBJECT</label>
                <input id="subject" value={form.subject} onChange={set('subject')} placeholder="What's this about?" className={inputCls(errors.subject)} />
                {errors.subject && <p className="mt-1 text-xs text-rose-400">{errors.subject}</p>}
              </div>
              <div className="mt-4">
                <label htmlFor="message" className="font-mono-tech mb-1.5 block text-[10px] tracking-[0.18em] text-fg-faint">MESSAGE</label>
                <textarea id="message" value={form.message} onChange={set('message')} rows={4} placeholder="Tell me about the role, project or idea…" className={cn(inputCls(errors.message), 'resize-none')} />
                {errors.message && <p className="mt-1 text-xs text-rose-400">{errors.message}</p>}
              </div>

              <div className="mt-6">
                <MagneticButton type="submit" variant="primary" className="w-full">
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={16} className="animate-spin" /> Sending…
                    </>
                  ) : status === 'success' ? (
                    <>
                      <Check size={16} /> {CONTACT_ENDPOINT ? 'Message sent' : 'Opening your email client…'}
                    </>
                  ) : (
                    'Send message'
                  )}
                </MagneticButton>
              </div>

              {status === 'success' && !CONTACT_ENDPOINT && (
                <p className="mt-3 flex items-center gap-2 text-xs text-emerald-500">
                  <Check size={13} /> Your email client should open with the message pre-filled.
                </p>
              )}
              {status === 'error' && (
                <p className="mt-3 flex items-center gap-2 text-xs text-rose-400">
                  <AlertCircle size={13} /> Something went wrong — try emailing me directly at {site.email}.
                </p>
              )}
              {status === 'success' && CONTACT_ENDPOINT && (
                <p className="mt-3 flex items-center gap-2 text-xs text-emerald-500">
                  <Check size={13} /> Thanks — I&apos;ll get back to you shortly.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
