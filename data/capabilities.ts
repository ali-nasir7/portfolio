/**
 * "What I do" — capabilities, not a skill dump. Each reveals contextual detail.
 * `level` communicates honest proficiency; never imply expertise beyond reality.
 */
export type CapLevel = 'core' | 'solid' | 'growing';

export interface Capability {
  id: string;
  title: string;
  level: CapLevel;
  blurb: string;
  detail: string;
  tech: string[];
  accent: string;
}

const A = { orange: '#ff4d1f', indigo: '#2b3fd6', teal: '#0f8f78', amber: '#d97706', rose: '#e11d48' };

export const capabilities: Capability[] = [
  {
    id: 'backend',
    title: 'Backend Engineering',
    level: 'core',
    blurb: 'Production-grade services in Java and Spring Boot.',
    detail:
      'Designing and building secure, scalable backend services — Spring Boot, Spring Security, Hibernate/JPA — following Clean Architecture and SOLID principles.',
    tech: ['Java 21', 'Spring Boot', 'Spring Security', 'JPA/Hibernate'],
    accent: A.orange,
  },
  {
    id: 'api',
    title: 'API Development',
    level: 'core',
    blurb: 'REST APIs with authentication and access control.',
    detail:
      'Building REST APIs with JWT authentication and role-based access control — ~20–25 endpoints delivered for SSGC FARS, dozens more across NexusERP and PipelineIQ.',
    tech: ['REST', 'JWT', 'RBAC', 'Swagger/OpenAPI'],
    accent: A.indigo,
  },
  {
    id: 'system',
    title: 'System Design',
    level: 'solid',
    blurb: 'Architecture that scales from day one.',
    detail:
      'Decomposing problems into services, data models and message flows — multi-tenant boundaries, event-driven communication and clean module separation.',
    tech: ['Multi-tenancy', 'Clean Architecture', 'Event-driven', 'SOLID'],
    accent: A.teal,
  },
  {
    id: 'database',
    title: 'Database Engineering',
    level: 'core',
    blurb: 'Relational data layers that stay fast at scale.',
    detail:
      'Working across PostgreSQL, MySQL and Oracle — schema design, indexing, server-side pagination and hierarchical filtering for large operational datasets.',
    tech: ['PostgreSQL', 'MySQL', 'Oracle', 'Redis'],
    accent: A.amber,
  },
  {
    id: 'distributed',
    title: 'Distributed Systems',
    level: 'solid',
    blurb: 'Asynchronous, event-driven services.',
    detail:
      'Event-driven architecture with Apache Kafka — decoupling log ingestion from analysis so systems scale under load, as built in PipelineIQ.',
    tech: ['Apache Kafka', 'Event streaming', 'Async messaging'],
    accent: A.rose,
  },
  {
    id: 'ai',
    title: 'AI Integration',
    level: 'solid',
    blurb: 'Weaving AI into real product workflows.',
    detail:
      'Integrating the OpenAI API into production logic — AI-powered log analysis that identifies root causes, classifies failures and recommends fixes.',
    tech: ['OpenAI API', 'Log analysis', 'Classification'],
    accent: A.orange,
  },
  {
    id: 'devops',
    title: 'Cloud / DevOps',
    level: 'solid',
    blurb: 'Containerized, automated, deployable.',
    detail:
      'Docker for consistent environments, GitHub Actions for CI/CD, and VPS deployment — shipping software that actually runs in production.',
    tech: ['Docker', 'GitHub Actions', 'Maven', 'VPS'],
    accent: A.indigo,
  },
  {
    id: 'product',
    title: 'Product Development',
    level: 'core',
    blurb: 'Owning a product from idea to production.',
    detail:
      'Taking projects end-to-end: planning, architecture, build, deployment and delivery — the difference between writing code and shipping working software.',
    tech: ['Ownership', 'Delivery', 'End-to-end'],
    accent: A.teal,
  },
  {
    id: 'client',
    title: 'Client Software',
    level: 'solid',
    blurb: 'Building for real users and clients.',
    detail:
      'Self-employed software development — translating real requirements into deployed, working products for clients, not just portfolio demos.',
    tech: ['Client delivery', 'Real requirements', 'Live deployment'],
    accent: A.rose,
  },
];

export const levelLabel: Record<CapLevel, string> = {
  core: 'CORE',
  solid: 'SOLID',
  growing: 'GROWING',
};
