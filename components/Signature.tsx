'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

/**
 * Signature-style SVG animation that draws "Ali Nasir" stroke by stroke.
 * Original mark. Draws on scroll into view. Current color inherits theme.
 */
export function Signature({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  const stroke = 'currentColor';

  const letters = [
    'M 30 150 C 34 100 52 74 84 72 C 114 70 126 92 122 116 C 118 138 100 152 78 152 C 56 152 44 162 42 176',
    'M 42 176 C 40 130 46 78 56 66 C 62 58 70 60 68 70 C 66 84 64 130 64 150',
    'M 64 150 C 70 132 72 120 76 116 C 80 112 82 116 80 124 C 78 134 78 144 82 150',
    'M 84 150 C 88 100 92 78 100 74 C 108 70 114 84 112 100 C 110 118 108 130 112 138 C 118 100 124 76 134 72 C 144 68 150 84 148 100 C 146 120 142 142 146 152',
    'M 150 150 C 152 128 158 116 168 116 C 178 116 182 128 180 138 C 178 150 168 154 158 154',
    'M 184 138 C 182 122 188 114 196 116 C 202 118 202 128 196 132 C 190 136 186 144 190 152',
    'M 194 152 C 200 134 202 122 206 118 C 210 114 212 118 210 126 C 208 136 208 144 212 150',
    'M 214 150 C 216 130 220 118 226 118 C 232 118 234 124 232 130 C 230 136 226 140 224 146',
  ];

  const dots = [
    { cx: 88, cy: 106 },
    { cx: 218, cy: 108 },
  ];

  return (
    <div className={cn('select-none', className)}>
      <motion.svg viewBox="0 0 560 200" fill="none" className="h-auto w-full max-w-xs sm:max-w-sm" role="img" aria-label="Ali Nasir signature">
        {letters.map((d, i) => (
          <motion.path
            key={i}
            d={d}
            stroke={stroke}
            strokeWidth={3.4}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={reduce ? { pathLength: 1 } : { pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.7, delay: 0.15 + i * 0.24, ease: 'easeInOut' }}
          />
        ))}
        {dots.map((dot, i) => (
          <motion.circle
            key={`dot-${i}`}
            cx={dot.cx}
            cy={dot.cy}
            r={3.4}
            fill={stroke}
            initial={reduce ? { opacity: 1 } : { opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.3, delay: 1.3 + i * 0.5, ease: 'backOut' }}
          />
        ))}
      </motion.svg>
    </div>
  );
}
