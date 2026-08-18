'use client';

/**
 * Continuous marquee — "AI ✦ Websites ✦ Automation ✦ Agents ✦ Full Stack"
 * Matches the target's home-page rotating skill band.
 */

const ITEMS = [
  'AI',
  'Websites',
  'Automation',
  'Agents',
  'Full Stack',
  'Java',
  'Spring Boot',
  'AI Systems',
  'SaaS',
  'Cloud',
];

export function SkillsMarquee() {
  return (
    <section className="relative overflow-hidden border-y border-line bg-bg-800 py-8">
      <div className="flex overflow-hidden" aria-hidden>
        <div className="flex shrink-0 animate-marquee-slow items-center gap-10 pr-10 sm:gap-14 sm:pr-14">
          {[...Array(3)].flatMap((_, k) =>
            ITEMS.map((item, i) => (
              <span
                key={`${k}-${i}`}
                className="font-display flex shrink-0 items-center gap-10 whitespace-nowrap text-3xl font-medium tracking-tightest text-fg/85 sm:gap-14 sm:text-4xl"
              >
                {item}
                <span className="text-accent">✦</span>
              </span>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
