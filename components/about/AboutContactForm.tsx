'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useState } from 'react';
import { site } from '@/data/site';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
  privacy: boolean;
}

const initial: FormState = { name: '', email: '', subject: '', message: '', privacy: false };

export function AboutContactForm() {
  const reduce = useReducedMotion();
  const [form, setForm] = useState<FormState>(initial);
  const [sent, setSent] = useState(false);

  const set = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const v = e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value;
    setForm((f) => ({ ...f, [k]: v }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.privacy) return;
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    const subject = encodeURIComponent(form.subject || 'Hello from your portfolio');
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const inputCls =
    'w-full rounded-xl border border-line bg-bg-700 px-4 py-3 text-sm text-fg outline-none transition-colors placeholder:text-fg-faint focus:border-accent/60';

  return (
    <section className="relative mx-auto max-w-3xl px-6 py-20 sm:px-8 sm:py-28">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-10% 0px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="text-center"
      >
        <h2 className="font-display text-5xl font-bold leading-[0.95] tracking-tightest text-fg sm:text-7xl md:text-8xl">
          GET IN
          <br />
          <span className="serif-accent text-accent">Touch</span>
        </h2>
        <p className="mx-auto mt-5 max-w-md text-base text-fg-muted">
          Have a project, role or idea? Let&apos;s talk.
        </p>
      </motion.div>

      <motion.form
        initial={reduce ? false : { opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-10% 0px' }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        onSubmit={onSubmit}
        className="mt-12 space-y-4"
      >
        <input
          type="text"
          required
          value={form.name}
          onChange={set('name')}
          placeholder="Your name"
          className={inputCls}
        />
        <input
          type="email"
          required
          value={form.email}
          onChange={set('email')}
          placeholder="Your email address"
          className={inputCls}
        />
        <input
          type="text"
          required
          value={form.subject}
          onChange={set('subject')}
          placeholder="What can I help you with?"
          className={inputCls}
        />
        <textarea
          required
          value={form.message}
          onChange={set('message')}
          rows={5}
          placeholder="Tell me about your project, role or idea…"
          className={`${inputCls} resize-none`}
        />

        <label className="flex items-start gap-3 text-sm text-fg-muted">
          <input
            type="checkbox"
            required
            checked={form.privacy}
            onChange={set('privacy')}
            className="mt-1 h-4 w-4 rounded border-line accent-accent"
          />
          <span>
            I&apos;ve accepted the{' '}
            <a href="#" className="link-underline text-fg">privacy policy</a>.
          </span>
        </label>

        <div className="pt-2">
          <button
            type="submit"
            disabled={sent}
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-fg px-7 py-3.5 text-sm font-medium text-bg transition-colors hover:bg-fg-strong disabled:opacity-60"
          >
            {sent ? 'Opening your email client…' : 'Submit Message'}
          </button>
        </div>
      </motion.form>

      <motion.div
        initial={reduce ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-10% 0px' }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="mt-12 flex flex-col items-center gap-4"
      >
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href={site.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-line bg-bg-700 px-4 py-2 text-sm text-fg-muted transition-colors hover:border-fg/30 hover:text-fg"
          >
            Linkedin
          </a>
          <a
            href={site.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-line bg-bg-700 px-4 py-2 text-sm text-fg-muted transition-colors hover:border-fg/30 hover:text-fg"
          >
            Github
          </a>
          <a
            href={site.socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-line bg-bg-700 px-4 py-2 text-sm text-fg-muted transition-colors hover:border-fg/30 hover:text-fg"
          >
            Twitter
          </a>
        </div>
        <p className="text-sm text-fg-muted">You can also contact me at</p>
        <a
          href={`mailto:${site.email}`}
          className="font-mono-tech text-sm text-fg underline decoration-line underline-offset-4 hover:text-accent"
        >
          {site.email}
        </a>
      </motion.div>
    </section>
  );
}
