import type { Metadata } from 'next';
import { WorkPage } from '@/components/work/WorkPage';

export const metadata: Metadata = {
  title: 'Work',
  description: 'Selected systems Ali Nasir has engineered — enterprise SaaS, AI platforms, and deployed software.',
};

export default function ProjectsPage() {
  return <WorkPage />;
}
