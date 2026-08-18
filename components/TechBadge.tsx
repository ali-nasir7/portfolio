import { cn } from '@/lib/utils';

interface TechBadgeProps {
  label: string;
  className?: string;
  mono?: boolean;
}

export function TechBadge({ label, className, mono = true }: TechBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-line bg-fg/[0.02] px-3 py-1 text-xs text-fg-muted',
        mono && 'font-mono-tech',
        className
      )}
    >
      {label}
    </span>
  );
}
