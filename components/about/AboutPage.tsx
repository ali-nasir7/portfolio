'use client';

import { SittingHero } from './SittingHero';
import { ProfileCard } from './ProfileCard';
import { Stats } from './Stats';
import { FollowedApproach } from './FollowedApproach';
import { OfferedServices } from './OfferedServices';
import { AreasOfExpertise } from './AreasOfExpertise';
import { TechStack } from './TechStack';
import { AboutContactForm } from './AboutContactForm';

/**
 * The complete about page — laid out to match the target's about page.
 * Composition (in order):
 *   1. Sitting hero with parallax image + "WHO AM I" outline text
 *   2. Profile card (photo + name + bio + social pills)
 *   3. Stats counters (Tech Skills / Projects / LinkedIn Connections)
 *   4. Followed Approach (3 numbered phases)
 *   5. Offered Services (6 image cards in 2 cols)
 *   6. Areas of Expertise (3 numbered cards)
 *   7. Tech Stack (tabbed category grid)
 *   8. GET IN Touch contact form
 */
export function AboutPage() {
  return (
    <main className="relative overflow-hidden">
      <SittingHero />
      <ProfileCard />
      <Stats />
      <FollowedApproach />
      <OfferedServices />
      <AreasOfExpertise />
      <TechStack />
      <AboutContactForm />
    </main>
  );
}
