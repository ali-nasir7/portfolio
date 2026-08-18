import { Hero } from '@/components/Hero';
import { HelloIntro } from '@/components/home/HelloIntro';
import { AboutMeBlock } from '@/components/home/AboutMeBlock';
import { RecentWork } from '@/components/home/RecentWork';
import { SkillsMarquee } from '@/components/home/SkillsMarquee';
import { GetInTouch } from '@/components/home/GetInTouch';

export default function HomePage() {
  return (
    <main>
      {/* Video hero — UNTOUCHED per user request. Dark region preserved. */}
      <div className="hero-region">
        <Hero />
      </div>

      {/* "Hello / NextJS / UI/UX / Web Developer" intro + AJ circle + Hire Me button */}
      <HelloIntro />

      {/* "Turning ideas into AI-Powered Solutions" + Resume / Contact + About Me */}
      <AboutMeBlock />

      {/* "AI ✦ Websites ✦ Automation ✦ ..." marquee */}
      <SkillsMarquee />

      {/* "Recent Work" — featured projects, horizontal scroll on mobile, marquee on desktop */}
      <RecentWork />

      {/* "GET IN Touch" contact form */}
      <GetInTouch />
    </main>
  );
}
