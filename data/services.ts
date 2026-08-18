/**
 * Services / capabilities — presented as an interactive experience, not a grid.
 * Honest: these describe what I offer, tied to real experience where applicable.
 */
export interface Service {
  id: string;
  title: string;
  short: string;
  description: string;
  accent?: boolean;
}

export const services: Service[] = [
  {
    id: 'se',
    title: 'Software Engineering',
    short: 'End-to-end product engineering',
    description: 'Taking a problem from idea to a working product — architecture, build, integration and delivery.',
  },
  {
    id: 'backend',
    title: 'Backend Development',
    short: 'Robust, secure server-side systems',
    description: 'Production-grade services in Java and Spring Boot, following Clean Architecture and SOLID principles.',
    accent: true,
  },
  {
    id: 'java',
    title: 'Java / Spring Boot',
    short: 'Enterprise-grade application development',
    description: 'Spring Security, JPA/Hibernate, REST APIs, JWT auth and RBAC — the stack behind my real production work.',
  },
  {
    id: 'web',
    title: 'Web Development',
    short: 'Responsive, polished interfaces',
    description: 'HTML, CSS and JavaScript — building the client side of web products, including interactive dashboards.',
  },
  {
    id: 'ai-systems',
    title: 'AI Systems',
    short: 'Software with intelligence baked in',
    description: 'Designing systems that integrate AI meaningfully — like PipelineIQ\u2019s AI-powered failure analysis.',
    accent: true,
  },
  {
    id: 'chatbots',
    title: 'AI Chatbots',
    short: 'Conversational, automated assistants',
    description: 'Building chatbot-style experiences on top of the OpenAI API and language models.',
  },
  {
    id: 'ai-integration',
    title: 'AI Integration',
    short: 'Weaving AI into real workflows',
    description: 'Connecting the OpenAI API to production logic — root cause, classification, recommendations.',
  },
  {
    id: 'automation',
    title: 'Workflow Automation',
    short: 'Reducing manual effort with systems',
    description: 'Event-driven pipelines (Kafka) and CI/CD that automate repetitive work — as built in PipelineIQ.',
    accent: true,
  },
  {
    id: 'architecture',
    title: 'System Architecture',
    short: 'Design that scales from day one',
    description: 'Multi-tenancy, service decomposition and clean module boundaries for maintainable systems.',
  },
  {
    id: 'api',
    title: 'API Development',
    short: 'REST APIs with auth & access control',
    description: '~20–25 endpoints delivered for SSGC FARS; dozens more across NexusERP and PipelineIQ.',
    accent: true,
  },
  {
    id: 'database',
    title: 'Database Systems',
    short: 'Relational data layers that stay fast',
    description: 'PostgreSQL, MySQL and Oracle — schema design, indexing and server-side pagination.',
  },
  {
    id: 'cloud',
    title: 'Cloud / Deployment',
    short: 'Containerized, automated, live',
    description: 'Docker, GitHub Actions CI/CD and VPS deployment — shipping software that runs in production.',
    accent: true,
  },
];

/** "Followed Approach" — the three phases of how I work (01 / 02 / 03). */
export const journey = [
  {
    num: '01',
    title: 'Plan the workflow',
    phase: 'PHASE 1',
    body: 'I map the problem before writing a line of code — architecture, data boundaries and the flows between them.',
  },
  {
    num: '02',
    title: 'Build with purpose',
    phase: 'PHASE 2',
    body: 'Backend systems, APIs, databases and AI integrations — built for maintainability, not just to work once.',
  },
  {
    num: '03',
    title: 'Deliver the product',
    phase: 'PHASE 3',
    body: 'Deployment, integration and delivery. I take ownership until the software is live and actually solves the problem.',
  },
];

/** Three key areas of expertise (numbered list). */
export const expertise = [
  { num: '01', title: 'Backend Engineering', body: 'Production-grade Java and Spring Boot services — secure, scalable, and built to last.' },
  { num: '02', title: 'AI Systems & Integration', body: 'Weaving the OpenAI API and LLMs into real workflows — analysis, chatbots and automation.' },
  { num: '03', title: 'System Architecture', body: 'Multi-tenancy, event-driven design and clean module boundaries for maintainable systems.' },
];
