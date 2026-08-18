'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import { site } from '@/data/site';
import { profile } from '@/data/profile';

const socials = [
  { label: 'Email', href: `mailto:${site.email}`, icon: 'mail' as const },
  { label: 'Linkedin', href: site.socials.linkedin, icon: 'linkedin' as const, external: true },
  { label: 'Github', href: site.socials.github, icon: 'github' as const, external: true },
  { label: 'Twitter', href: site.socials.twitter, icon: 'twitter' as const, external: true },
];

function Icon({ name }: { name: 'mail' | 'linkedin' | 'github' | 'twitter' }) {
  if (name === 'mail') {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-10 5L2 7" />
      </svg>
    );
  }
  if (name === 'linkedin') {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.37 4.28 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
      </svg>
    );
  }
  if (name === 'github') {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.49 2.87 8.3 6.84 9.65.5.09.68-.22.68-.49 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.46-1.18-1.11-1.49-1.11-1.49-.91-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.36-2.22-.26-4.55-1.13-4.55-5.04 0-1.11.39-2.02 1.03-2.74-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05.8-.23 1.65-.34 2.5-.34s1.7.12 2.5.34c1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.74 0 3.92-2.34 4.78-4.57 5.03.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.49A10.03 10.03 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" />
      </svg>
    );
  }
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

/**
 * About-card block: name, role, profile photo, bio, social pills.
 * Matches the target's "About Aliyan Jabbar" block.
 */
export function ProfileCard() {
  const reduce = useReducedMotion();

  return (
    <section className="relative mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-24">
      <div className="grid items-start gap-12 lg:grid-cols-[0.7fr_1.3fr]">
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto w-full max-w-sm"
        >
          <div className="overflow-hidden rounded-3xl border border-line bg-bg-700 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.18)]">
            <Image
              src={site.aboutImage}
              alt={site.fullName}
              width={600}
              height={600}
              className="h-auto w-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-display text-3xl font-semibold tracking-tightest text-fg sm:text-4xl">
            {profile.fullName}
          </h2>
          <p className="font-mono-tech mt-2 text-[11px] tracking-[0.2em] text-fg-faint">
            About {profile.fullName}
          </p>
          <p className="mt-6 text-base leading-relaxed text-fg-muted sm:text-lg">{profile.aboutStory}</p>

          <div className="mt-7 flex flex-wrap gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                {...(s.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="inline-flex items-center gap-2 rounded-full border border-line bg-bg-700 px-4 py-2 text-sm text-fg-muted transition-colors hover:border-fg/40 hover:text-fg"
              >
                <Icon name={s.icon} />
                <span>{s.label}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
