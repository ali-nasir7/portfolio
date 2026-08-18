import type { Metadata } from 'next';
import { Download, ArrowUpRight } from 'lucide-react';
import { site } from '@/data/site';
import { Reveal } from '@/components/Reveal';
import { MagneticButton } from '@/components/MagneticButton';

export const metadata: Metadata = {
  title: 'Resume',
  description: 'Resume of Muhammad Ali Nasir — Software Engineer & Java Backend Developer.',
};

export default function ResumePage() {
  return (
    <main className="mx-auto max-w-6xl px-6 pb-28 pt-36 sm:px-8">
      <Reveal>
        <p className="font-mono-tech text-[11px] tracking-[0.28em] text-fg-faint">RESUME</p>
        <h1 className="font-display mt-5 text-5xl font-bold tracking-tightest text-fg sm:text-7xl">
          THE RECORD<span className="text-accent">.</span>
        </h1>
        <p className="mt-6 max-w-xl text-base text-fg-muted">
          The concise, recruiter-ready version of everything on this site. View it inline or grab the PDF.
        </p>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="mt-10 flex flex-wrap gap-4">
          <MagneticButton href={site.resumePdf} variant="primary" external>
            <Download size={16} /> Download PDF
          </MagneticButton>
          <MagneticButton href={site.resumePdf} variant="outline" external>
            Open in new tab <ArrowUpRight size={16} />
          </MagneticButton>
        </div>
      </Reveal>

      <Reveal delay={0.12}>
        <div className="surface mt-12 overflow-hidden rounded-2xl">
          <div className="flex items-center justify-between border-b border-line px-5 py-3">
            <span className="font-mono-tech text-[10px] tracking-[0.2em] text-fg-faint">Muhammad_Ali_Nasir_Resume.pdf</span>
            <span className="font-mono-tech text-[10px] tracking-[0.2em] text-fg-faint">2 PAGES</span>
          </div>
          <iframe src={site.resumePdf} title="Muhammad Ali Nasir Resume" className="h-[70vh] w-full bg-bg-900" />
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-12 grid gap-3 sm:grid-cols-3">
          {[
            { k: 'EXPERIENCE', v: 'SSGC — Software Engineering Intern', s: 'Field Activity Reporting System' },
            { k: 'EDUCATION', v: 'BSCS · Hamdard University', s: 'CGPA 3.10 / 4.00 · Final year' },
            { k: 'CERTIFICATION', v: 'Cloud Computing', s: 'NED University of Engineering & Technology' },
          ].map((f) => (
            <div key={f.k} className="surface rounded-xl p-5">
              <p className="font-mono-tech text-[10px] tracking-[0.2em] text-fg-faint">{f.k}</p>
              <p className="mt-2 text-sm font-medium text-fg">{f.v}</p>
              <p className="mt-1 text-xs text-fg-muted">{f.s}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </main>
  );
}
