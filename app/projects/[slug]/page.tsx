import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { projects, getProject } from '@/data/projects';
import { ProjectDetail } from '@/components/ProjectDetail';
import { site } from '@/data/site';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = getProject(params.slug);
  if (!project) return { title: 'Project not found' };
  return {
    title: project.name,
    description: project.summary,
    openGraph: {
      title: `${project.name} — ${site.name}`,
      description: project.summary,
    },
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) notFound();
  return <ProjectDetail project={project} />;
}
