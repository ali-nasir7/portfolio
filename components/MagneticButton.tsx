'use client';

import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'accent' | 'outline' | 'ghost';

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  variant?: Variant;
  className?: string;
  external?: boolean;
}

/** A button that subtly pulls toward the cursor with a spring return. */
export function MagneticButton({
  children,
  href,
  onClick,
  type = 'button',
  variant = 'primary',
  className,
  external,
}: MagneticButtonProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18 });
  const sy = useSpring(y, { stiffness: 200, damping: 18 });

  const onMove = (e: React.MouseEvent) => {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * 0.3);
    y.set((e.clientY - (rect.top + rect.height / 2)) * 0.3);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  const base =
    'group relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-colors duration-300 select-none';
  const variants: Record<Variant, string> = {
    primary: 'bg-fg text-bg hover:bg-fg-strong',
    accent: 'bg-accent text-bg hover:bg-accent-dim',
    outline: 'border border-fg/60 text-fg hover:border-fg hover:bg-fg hover:text-bg',
    ghost: 'text-fg hover:text-accent',
  };

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {(variant === 'primary' || variant === 'accent') && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: 'radial-gradient(60% 120% at 50% 0%, rgba(0,0,0,0.14), transparent)' }}
        />
      )}
    </>
  );

  const motionProps = {
    style: reduce ? undefined : { x: sx, y: sy },
    onMouseMove: onMove,
    onMouseLeave: onLeave,
    whileTap: { scale: 0.97 },
  };

  const classes = cn(base, variants[variant], className);

  if (href) {
    return (
      <motion.a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        onClick={onClick}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        className={classes}
        {...motionProps}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button ref={ref as React.Ref<HTMLButtonElement>} type={type} onClick={onClick} className={classes} {...motionProps}>
      {content}
    </motion.button>
  );
}
