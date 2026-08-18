import type { Metadata } from 'next';
import { AboutPage } from '@/components/about/AboutPage';

export const metadata: Metadata = {
  title: 'About — Ali Nasir',
  description:
    'Full Stack AI Engineer and Java Backend Developer taking software from idea to production. Java, Spring Boot, distributed systems, AI integration.',
};

export default function About() {
  return <AboutPage />;
}
