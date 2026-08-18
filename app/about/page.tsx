import type { Metadata } from 'next';
import { AboutContent } from '@/components/AboutContent';

export const metadata: Metadata = {
  title: 'About',
  description: 'Software Engineer and Java Backend Developer — I take ownership from idea to production.',
};

export default function AboutPage() {
  return <AboutContent />;
}
