/**
 * Interactive engineering stack — categorized, with honest proficiency levels
 * and real usage context. Never presents every technology as expert.
 */
export type SkillLevel = 'core' | 'solid' | 'familiar';

export interface Skill {
  name: string;
  category: SkillCategory;
  level: SkillLevel;
  tagline: string;
  context: string;
}

export type SkillCategory =
  | 'Core'
  | 'Backend'
  | 'Database'
  | 'Distributed Systems'
  | 'DevOps'
  | 'Observability'
  | 'Frontend'
  | 'AI / Integration';

export const categories: SkillCategory[] = [
  'Core',
  'Backend',
  'Database',
  'Distributed Systems',
  'DevOps',
  'Observability',
  'Frontend',
  'AI / Integration',
];

export const skills: Skill[] = [
  // CORE
  { name: 'Java', category: 'Core', level: 'core', tagline: 'PRIMARY LANGUAGE', context: 'The language behind NexusERP, PipelineIQ, FARS and Abroad School.' },
  { name: 'SQL', category: 'Core', level: 'core', tagline: 'DATA ACCESS', context: 'Complex queries, indexing and pagination across PostgreSQL, MySQL and Oracle.' },
  { name: 'Python', category: 'Core', level: 'familiar', tagline: 'SCRIPTING', context: 'Used for scripting — e.g. the multi_Agent project on GitHub.' },
  { name: 'OOP & SOLID', category: 'Core', level: 'core', tagline: 'DESIGN', context: 'Clean Architecture and SOLID applied across enterprise services.' },
  { name: 'Data Structures & Algorithms', category: 'Core', level: 'solid', tagline: 'FOUNDATIONS', context: 'Strong CS fundamentals behind every system-level decision.' },

  // BACKEND
  { name: 'Spring Boot', category: 'Backend', level: 'core', tagline: 'APPLICATION FRAMEWORK', context: 'REST services for NexusERP, PipelineIQ, FARS and Abroad School.' },
  { name: 'Spring Security', category: 'Backend', level: 'core', tagline: 'AUTH & AUTHZ', context: 'JWT authentication and RBAC on SSGC FARS and every major project.' },
  { name: 'Spring Data JPA', category: 'Backend', level: 'core', tagline: 'PERSISTENCE', context: 'Repository abstractions and entity mapping across the stack.' },
  { name: 'Hibernate', category: 'Backend', level: 'core', tagline: 'ORM', context: 'Object-relational mapping and fetch strategies in production apps.' },
  { name: 'REST APIs', category: 'Backend', level: 'core', tagline: 'API DESIGN', context: '~20–25 endpoints for FARS; dozens more across NexusERP and PipelineIQ.' },
  { name: 'JWT Authentication', category: 'Backend', level: 'core', tagline: 'TOKEN AUTH', context: 'Tenant-aware JWTs in NexusERP; stateless auth in PipelineIQ.' },
  { name: 'RBAC', category: 'Backend', level: 'core', tagline: 'ACCESS CONTROL', context: 'Role hierarchies for org admins, HR, finance, inventory, sales and employees.' },

  // DATABASE
  { name: 'PostgreSQL', category: 'Database', level: 'core', tagline: 'PRIMARY DB', context: 'Tenant-aware data layer and indexing in NexusERP and PipelineIQ.' },
  { name: 'MySQL', category: 'Database', level: 'solid', tagline: 'RELATIONAL DB', context: 'Backing store for the Abroad School Management System.' },
  { name: 'Oracle Database', category: 'Database', level: 'solid', tagline: 'ENTERPRISE DB', context: 'SSGC production database integrated into the FARS application.' },
  { name: 'Redis', category: 'Database', level: 'solid', tagline: 'CACHING', context: 'Performance optimization layer in NexusERP and PipelineIQ.' },

  // DISTRIBUTED SYSTEMS
  { name: 'Apache Kafka', category: 'Distributed Systems', level: 'solid', tagline: 'EVENT STREAMING', context: 'Asynchronous service communication in PipelineIQ — log events to analysis service.' },

  // DEVOPS
  { name: 'Docker', category: 'DevOps', level: 'core', tagline: 'CONTAINERIZATION', context: 'Containerized NexusERP and PipelineIQ for consistent deploys.' },
  { name: 'GitHub Actions', category: 'DevOps', level: 'core', tagline: 'CI/CD', context: 'Automated build workflows for NexusERP and PipelineIQ.' },
  { name: 'Maven', category: 'DevOps', level: 'core', tagline: 'BUILD', context: 'Dependency and build management across Java projects.' },
  { name: 'Git', category: 'DevOps', level: 'core', tagline: 'VERSION CONTROL', context: 'Every project versioned and tracked on GitHub.' },
  { name: 'AWS', category: 'DevOps', level: 'familiar', tagline: 'CLOUD', context: 'Cloud fundamentals — certifications and modern cloud practices.' },
  { name: 'VPS Deployment', category: 'DevOps', level: 'solid', tagline: 'DEPLOYMENT', context: 'Deployed Abroad School on a VPS for real-time operational use.' },

  // OBSERVABILITY
  { name: 'Swagger / OpenAPI', category: 'Observability', level: 'core', tagline: 'API DOCS', context: 'Interactive API documentation across enterprise projects.' },
  { name: 'Prometheus', category: 'Observability', level: 'familiar', tagline: 'METRICS', context: 'Metrics instrumentation planned for PipelineIQ monitoring.' },
  { name: 'Grafana', category: 'Observability', level: 'familiar', tagline: 'DASHBOARDS', context: 'Operational dashboards planned for PipelineIQ.' },

  // FRONTEND
  { name: 'JavaScript', category: 'Frontend', level: 'solid', tagline: 'LANGUAGE', context: 'Client-side logic and interactive dashboards.' },
  { name: 'Chart.js', category: 'Frontend', level: 'solid', tagline: 'VISUALIZATION', context: 'Interactive field-activity dashboards in SSGC FARS.' },
  { name: 'HTML', category: 'Frontend', level: 'solid', tagline: 'MARKUP', context: 'Semantic structure across web projects.' },
  { name: 'CSS', category: 'Frontend', level: 'solid', tagline: 'STYLING', context: 'Responsive, polished interfaces for client and internal tools.' },
  { name: 'React', category: 'Frontend', level: 'familiar', tagline: 'UI LIBRARY', context: 'Component-based UI work and this very portfolio.' },
  { name: 'Flutter', category: 'Frontend', level: 'familiar', tagline: 'MOBILE', context: 'Exploring cross-platform mobile development.' },

  // AI / INTEGRATION
  { name: 'OpenAI API', category: 'AI / Integration', level: 'solid', tagline: 'AI INTEGRATION', context: 'AI-powered log analysis in PipelineIQ — root cause, severity, fixes.' },
  { name: 'AI / LLMs', category: 'AI / Integration', level: 'solid', tagline: 'AI SYSTEMS', context: 'Designing and building software with AI baked in — chatbots, analysis, automation.' },
];
