import { Hero } from '@/components/Hero';
import { IdentitySection } from '@/components/IdentitySection';
import { Introduction } from '@/components/Introduction';
import { ProjectShowcase } from '@/components/ProjectShowcase';
import { CodeToSystem } from '@/components/CodeToSystem';
import { Desk3D } from '@/components/Desk3D';
import { FullName } from '@/components/FullName';

export default function HomePage() {
  return (
    <main>
      {/* Video hero */}
      <Hero />
      {/* AN identity → creative ID card → hire me */}
      <IdentitySection />
      {/* Philosophy / positioning */}
      <Introduction />
      {/* Selected work — immersive case studies */}
      <ProjectShowcase />
      {/* Code → system → product */}
      <CodeToSystem />
      {/* Interactive 3D workspace */}
      <Desk3D />
      {/* Full-name reveal, transitioning into the footer */}
      <FullName />
    </main>
  );
}
