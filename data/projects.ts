/**
 * Project data — single source of truth for the gallery and case-study pages.
 * Every claim is resume- or brief-supported. `status` drives honest labeling.
 */
export interface ArchNode {
  id: string;
  label: string;
  sub?: string;
  detail?: { title: string; body: string };
}

export interface ProjectLink {
  github?: string;
  githubNote?: string;
  live?: string;
  website?: string;
}

export type ProjectStatus = 'ongoing' | 'deployed' | 'internal' | 'in-development' | 'client';

export interface Project {
  slug: string;
  name: string;
  category: string;
  status: ProjectStatus;
  statusLabel: string;
  accent: string;
  stack: string[];
  summary: string;
  problem: string;
  approach: string;
  challenge: string; // the engineering challenge
  solution: string; // how it was solved
  role: string;
  impact: string;
  architecture: ArchNode[];
  engineeringDecisions: string[];
  links: ProjectLink;
  featured?: boolean;
  variant?: 'orbit' | 'flow' | 'grid' | 'stack'; // artwork composition
  /** Marks SSGC FARS as internship/enterprise work (shown in Work). */
  internship?: { org: string; period: string };
}

export const projects: Project[] = [
  {
    slug: 'nexuserp-cloud',
    name: 'NexusERP Cloud',
    category: 'Enterprise SaaS',
    status: 'ongoing',
    statusLabel: 'ONGOING · UNDER CONSTRUCTION',
    accent: '#9db4d0',
    stack: [
      'Java 21',
      'Spring Boot 3',
      'Spring Security',
      'Spring Data JPA',
      'Hibernate',
      'PostgreSQL',
      'Redis',
      'Docker',
      'GitHub Actions',
      'Swagger',
      'JWT',
      'RBAC',
    ],
    summary:
      'A multi-tenant enterprise ERP platform designed to centralize business operations — organization management, inventory, procurement, sales, HR, finance, employee management and audit logging — behind one modular, isolated system.',
    problem:
      'Businesses need a single ERP surface that cleanly separates each organization\u2019s data and access, while staying modular enough to grow with new departments.',
    approach:
      'A multi-tenant Spring Boot platform following Clean Architecture. Every tenant is isolated at the data layer, secured by tenant-aware JWT authentication and a granular RBAC model.',
    challenge:
      'Making tenancy bulletproof — a tenant\u2019s data must never leak into another tenant\u2019s context, no matter how the system is queried.',
    solution:
      'Tenant ID is extracted from a tenant-aware JWT and applied at the data layer on every query, backed by database indexing and Redis caching so isolation never costs performance.',
    role: 'Sole developer — system design, backend architecture and delivery.',
    impact:
      'A production-shaped ERP foundation: modular enterprise services, containerized deployment, automated CI/CD and end-to-end Swagger documentation.',
    architecture: [
      { id: 'org', label: 'ORGANIZATION', sub: 'root entity' },
      { id: 'tenant', label: 'TENANT', sub: 'isolation boundary' },
      {
        id: 'jwt',
        label: 'JWT AUTH',
        sub: 'tenant-aware',
        detail: {
          title: 'Authentication flow',
          body: 'Login issues a tenant-aware JWT. A request filter extracts the tenant claim and scopes every downstream query to that organization before it reaches a service.',
        },
      },
      {
        id: 'rbac',
        label: 'RBAC',
        sub: 'role hierarchy',
        detail: {
          title: 'Role hierarchy',
          body: 'Org admins, HR, finance, inventory, procurement, sales, managers and employees — each role grants only the modules it needs.',
        },
      },
      { id: 'modules', label: 'MODULES', sub: 'inventory · procurement · sales · HR · finance · audit' },
      {
        id: 'postgres',
        label: 'POSTGRESQL',
        sub: 'tenant-aware data',
        detail: {
          title: 'Tenant-aware data layer',
          body: 'Tenant ID applied to every query with indexing and server-side pagination to keep multi-tenant reads fast and isolated.',
        },
      },
      {
        id: 'redis',
        label: 'REDIS',
        sub: 'caching layer',
        detail: {
          title: 'Caching layer',
          body: 'Hot, frequently-read data cached in Redis to reduce database load and keep the platform responsive.',
        },
      },
      { id: 'deploy', label: 'DOCKER + CI/CD', sub: 'GitHub Actions' },
      { id: 'api', label: 'SWAGGER API', sub: 'OpenAPI docs' },
    ],
    engineeringDecisions: [
      'Tenant isolation enforced at the data layer, not in application logic.',
      'Tenant-aware JWT authentication with request filtering before services run.',
      'Redis caching + database indexing + server-side pagination for responsiveness.',
      'Clean Architecture and SOLID principles across all enterprise modules.',
      'Swagger/OpenAPI for self-documenting, testable APIs.',
      'Docker + GitHub Actions for reproducible, automated builds.',
    ],
    links: { github: 'https://github.com/ali-nasir7/NexusERP-Cloud' },
    featured: true,
    variant: 'grid',
  },
  {
    slug: 'pipelineiq',
    name: 'PipelineIQ',
    category: 'AI / Distributed Systems',
    status: 'ongoing',
    statusLabel: 'ONGOING',
    accent: '#e3a856',
    stack: [
      'Java 21',
      'Spring Boot',
      'Spring Security',
      'Apache Kafka',
      'PostgreSQL',
      'Redis',
      'Docker',
      'GitHub Actions',
      'Swagger',
      'OpenAI API',
      'Prometheus',
      'Grafana',
    ],
    summary:
      'An AI-powered CI/CD failure analysis platform that ingests pipeline logs, classifies failures, estimates severity and recommends resolutions — asynchronously, over Apache Kafka.',
    problem:
      'CI/CD failures are noisy and slow to triage. Engineers waste time reading raw logs to find a root cause that a machine could surface instantly.',
    approach:
      'An event-driven platform: pipeline log events stream through Kafka into an analysis service, where AI log analysis identifies the root cause, classifies the failure, estimates severity and proposes a fix.',
    challenge:
      'Keeping log ingestion from becoming a bottleneck — analysis must never slow down the pipeline it\u2019s observing.',
    solution:
      'Kafka decouples ingestion from analysis: producers publish log events and the analysis service consumes them asynchronously, so the platform scales under load without blocking builds.',
    role: 'Sole developer — event-driven architecture, AI integration and platform build.',
    impact:
      'Automated failure triage that turns raw build logs into root cause, severity and a recommended resolution.',
    architecture: [
      { id: 'pipeline', label: 'CI/CD PIPELINE', sub: 'build events' },
      { id: 'log', label: 'LOG EVENT', sub: 'raw output' },
      {
        id: 'kafka',
        label: 'KAFKA',
        sub: 'async transport',
        detail: {
          title: 'Asynchronous communication',
          body: 'Log events are published to Kafka topics and consumed asynchronously, decoupling ingestion from analysis.',
        },
      },
      { id: 'analysis', label: 'ANALYSIS SERVICE', sub: 'consumer' },
      {
        id: 'ai',
        label: 'AI LOG ANALYSIS',
        sub: 'OpenAI API',
        detail: {
          title: 'AI log analysis',
          body: 'The service sends normalized log context to the OpenAI API to identify root cause, classify the failure and estimate severity.',
        },
      },
      { id: 'root', label: 'ROOT CAUSE', sub: 'classification' },
      { id: 'severity', label: 'SEVERITY', sub: 'estimation' },
      { id: 'fix', label: 'RECOMMENDED FIX', sub: 'resolution' },
      { id: 'auth', label: 'JWT + RBAC', sub: 'secured APIs' },
    ],
    engineeringDecisions: [
      'Asynchronous Kafka messaging to decouple log ingestion from analysis.',
      'AI log analysis for root cause, failure classification, severity and resolutions.',
      'JWT authentication and RBAC to secure the API surface.',
      'Prometheus + Grafana for operational visibility (metrics & dashboards).',
      'Containerized services with Docker and automated GitHub Actions builds.',
    ],
    links: { github: 'https://github.com/ali-nasir7/BuildSense-AI', githubNote: 'Repo: BuildSense-AI' },
    featured: true,
    variant: 'flow',
  },
  {
    slug: 'fars',
    name: 'SSGC FARS',
    category: 'Enterprise Software / Internship',
    status: 'internal',
    statusLabel: 'INTERNAL DEPLOYMENT',
    accent: '#e8c07a',
    internship: { org: 'Sui Southern Gas Company (SSGC)', period: 'Aug 2025 – Sep 2025' },
    stack: ['Java', 'Spring Boot', 'Spring Security', 'Hibernate', 'JPA', 'Oracle', 'REST APIs', 'Chart.js'],
    summary:
      'The Field Activity Reporting System — an internal web application developed during a Software Engineering internship at Sui Southern Gas Company (SSGC), streamlining access to operational field-activity data.',
    problem:
      'Supervisors and management relied on manually written SQL queries for recurring field-activity information requests — slow, error-prone, and impossible to scale.',
    approach:
      'A secure Spring Boot application exposing ~20–25 REST APIs with server-side pagination, hierarchical filtering (region → unit → sub-unit) and interactive Chart.js dashboards over SSGC\u2019s production Oracle database.',
    challenge:
      'Handling large operational datasets without loading them into memory — while keeping filtering intuitive for non-technical management.',
    solution:
      'Server-side pagination plus hierarchical filtering across regions, units and sub-units, with Chart.js dashboards for at-a-glance visibility.',
    role: 'Software Engineering Intern — sole backend developer on the application.',
    impact:
      'Delivered for internal deployment and actively used by supervisors and management for field-activity tracking and reporting.',
    architecture: [
      { id: 'user', label: 'USER', sub: 'supervisor / management' },
      {
        id: 'security',
        label: 'SPRING SECURITY',
        sub: 'auth gate',
        detail: {
          title: 'Authentication gate',
          body: 'Spring Security authenticates every request before it reaches the API surface, protecting internal operational data.',
        },
      },
      { id: 'api', label: 'REST API', sub: '~20–25 endpoints' },
      { id: 'service', label: 'SERVICE LAYER', sub: 'business logic' },
      {
        id: 'jpa',
        label: 'JPA / HIBERNATE',
        sub: 'pagination + filtering',
        detail: {
          title: 'Data access layer',
          body: 'Server-side pagination and hierarchical filtering (region → unit → sub-unit) keep large datasets responsive.',
        },
      },
      { id: 'oracle', label: 'ORACLE DB', sub: 'SSGC production' },
      { id: 'dashboard', label: 'DASHBOARD', sub: 'Chart.js visuals' },
    ],
    engineeringDecisions: [
      'Server-side pagination to handle large operational datasets efficiently.',
      'Hierarchical filtering across regions, units and sub-units.',
      'Interactive Chart.js dashboards for management visibility.',
      'Integration with SSGC\u2019s production Oracle database.',
      'Delivered for internal deployment and real operational use.',
    ],
    links: { github: 'https://github.com/ali-nasir7/FARS' },
    featured: true,
    variant: 'orbit',
  },
  {
    slug: 'abroad-school',
    name: 'Abroad School Management System',
    category: 'Deployed Software',
    status: 'deployed',
    statusLabel: 'DEPLOYED',
    accent: '#a8c3a0',
    stack: ['Java', 'Spring Boot', 'Spring Security', 'MySQL', 'REST APIs', 'VPS Deployment'],
    summary:
      'A web-based school management platform supporting admissions, fee management, student records and staff administration — deployed on a VPS for real-time operational use.',
    problem:
      'A school needed a single system to manage admissions, fees, student records and staff — without exposing sensitive institutional data.',
    approach:
      'A Spring Boot platform with secure authentication and role-based access control, REST APIs for academic and administrative workflows, and a MySQL backend deployed on a VPS.',
    challenge:
      'Balancing ease of use for school staff with strict protection of sensitive institutional and student data.',
    solution:
      'Secure authentication and RBAC guard every workflow, while clean REST APIs keep admissions, fees and records simple to operate day-to-day.',
    role: 'Developer — backend services, APIs, authentication and deployment.',
    impact: 'Deployed on a VPS for real-time operational use by the school.',
    architecture: [
      { id: 'app', label: 'APPLICATION', sub: 'Spring Boot' },
      {
        id: 'api',
        label: 'REST API',
        sub: 'academic + admin',
        detail: {
          title: 'API surface',
          body: 'REST APIs manage core academic and administrative workflows — admissions, fees, records and staff.',
        },
      },
      { id: 'auth', label: 'SPRING SECURITY', sub: 'auth + RBAC' },
      { id: 'db', label: 'MYSQL', sub: 'relational store' },
      { id: 'vps', label: 'VPS', sub: 'production deployment' },
    ],
    engineeringDecisions: [
      'Secure authentication and RBAC to protect sensitive institutional data.',
      'Backend services and REST APIs for core academic workflows.',
      'Deployed on a VPS server for real-time operational use.',
    ],
    links: { github: 'https://github.com/ali-nasir7/Abroad-School' },
    featured: true,
    variant: 'stack',
  },
  {
    slug: 'smarttrust',
    name: 'SmartTrust',
    category: 'FYP / Software Engineering',
    status: 'in-development',
    statusLabel: 'IN DEVELOPMENT · BACKEND STARTED',
    accent: '#d9a9a0',
    stack: ['Java', 'Spring Boot', 'REST APIs', 'Trust Scoring', 'AI Ranking'],
    summary:
      'A smart home services marketplace connecting customers with verified service providers — AC technicians, electricians, plumbers, carpenters and maids — powered by a dynamic trust score and AI-assisted worker ranking.',
    problem:
      'Finding a trustworthy home-service provider is risky and opaque. Customers have no reliable signal of a worker\u2019s reliability.',
    approach:
      'A marketplace where customers raise service requests, workers submit quotations, and a dynamic trust score plus AI-assisted ranking surfaces the most reliable provider.',
    challenge:
      'Designing a trust score that meaningfully reflects reliability without gaming, and ranking workers fairly with AI assistance.',
    solution:
      'A dynamic trust score built from provider history, combined with AI-assisted ranking — the core engineering focus of the final-year project.',
    role: 'Final-year project — backend currently started.',
    impact:
      'Backend development is underway. The core concept — trust scoring + AI-assisted ranking — is the engineering focus. Not yet a finished product.',
    architecture: [
      { id: 'customer', label: 'CUSTOMER', sub: 'service seeker' },
      { id: 'request', label: 'SERVICE REQUEST', sub: 'what / when / where' },
      { id: 'workers', label: 'WORKERS', sub: 'AC · electrician · plumber · carpenter · maid' },
      { id: 'quote', label: 'QUOTATIONS', sub: 'provider bids' },
      {
        id: 'trust',
        label: 'TRUST / RANKING',
        sub: 'dynamic score',
        detail: {
          title: 'Dynamic trust score',
          body: 'Each worker carries a dynamic trust score built from their history, combined with AI-assisted ranking to surface the most reliable provider.',
        },
      },
      { id: 'service', label: 'SERVICE', sub: 'fulfillment' },
    ],
    engineeringDecisions: [
      'Dynamic trust score as the core reliability signal.',
      'AI-assisted worker ranking for provider recommendations.',
    ],
    links: { github: 'https://github.com/ali-nasir7/smartTrust' },
    featured: false,
    variant: 'orbit',
  },
  {
    slug: 'livlongmd',
    name: 'LivLongMD',
    category: 'Client Work · International',
    status: 'client',
    statusLabel: 'CLIENT PROJECT · LIVE',
    accent: '#c9b8d9',
    stack: ['JavaScript', 'HTML', 'CSS', 'Web'],
    summary:
      'A complete, working website designed and built for LivLongMD — an international medical client — delivered as part of self-employed software development work and live in production.',
    problem: 'A medical practice needed a professional, working web presence.',
    approach:
      'Designed and built the site to the client\u2019s requirements, delivered as a live website at livlongmd.com.',
    challenge:
      'Translating a real client\u2019s brief into a polished, shipped product — on the client\u2019s terms and timeline.',
    solution:
      'A complete website delivered end-to-end and deployed live for a real international client.',
    role: 'Self-employed developer — built and delivered the website.',
    impact: 'A live, client-facing website at livlongmd.com.',
    architecture: [
      { id: 'brand', label: 'CLIENT BRIEF', sub: 'requirements' },
      { id: 'build', label: 'BUILD', sub: 'design + development' },
      { id: 'ship', label: 'DEPLOY', sub: 'live site' },
      { id: 'live', label: 'LIVLONGMD.COM', sub: 'public website' },
    ],
    engineeringDecisions: ['Delivered a complete, working website for a real client.'],
    links: { website: 'https://livlongmd.com/' },
    featured: true,
    variant: 'stack',
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
