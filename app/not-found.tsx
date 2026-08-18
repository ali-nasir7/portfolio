import { MagneticButton } from '@/components/MagneticButton';

export default function NotFound() {
  return (
    <main className="flex min-h-[100svh] flex-col items-center justify-center px-6 text-center">
      <p className="font-mono-tech text-[11px] tracking-[0.3em] text-fg-faint">404 — NULL POINTER</p>
      <h1 className="font-display mt-6 text-7xl font-bold tracking-tightest text-fg sm:text-8xl">
        NOT FOUND<span className="text-accent">.</span>
      </h1>
      <p className="mt-5 max-w-md text-fg-muted">This route doesn&apos;t exist in the system. The request returned 404 — no such resource.</p>
      <div className="mt-8">
        <MagneticButton href="/" variant="primary">
          Return home
        </MagneticButton>
      </div>
    </main>
  );
}
