'use client';

import { cn } from '@/lib/utils';
import { Reveal } from './Reveal';

interface SectionHeadingProps {
  index?: string;
  label?: string;
  title: string;
  titleAccent?: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

/** Editorial section opener — index, technical label, oversized title. */
export function SectionHeading({
  index,
  label,
  title,
  titleAccent,
  description,
  align = 'left',
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn('mb-12 md:mb-16', align === 'center' && 'text-center', className)}>
      {(index || label) && (
        <Reveal>
          <div className={cn('flex items-center gap-3', align === 'center' && 'justify-center')}>
            {index && <span className="font-mono-tech text-xs text-fg-faint">{index}</span>}
            <span className="h-px w-8 bg-line-strong" aria-hidden />
            {label && <span className="tech-label">{label}</span>}
          </div>
        </Reveal>
      )}
      <Reveal delay={0.08}>
        <h2 className="font-display mt-5 text-4xl font-semibold leading-[1.02] tracking-tightest text-fg sm:text-5xl md:text-6xl">
          {title}
          {titleAccent && (
            <>
              {' '}
              <span className="serif-accent text-accent">{titleAccent}</span>
            </>
          )}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p className={cn('mt-5 max-w-xl text-base text-fg-muted', align === 'center' && 'mx-auto')}>{description}</p>
        </Reveal>
      )}
    </div>
  );
}
