/**
 * Experience, education and certifications — pulled directly from the resume.
 * No invented metrics, titles, or dates.
 */
export interface ExperienceItem {
  kind: 'work' | 'education' | 'certification';
  role: string;
  org: string;
  period: string;
  location?: string;
  summary: string;
  highlights?: string[];
  flow?: string[];
  tech?: string[];
  featured?: boolean;
}

export const experience: ExperienceItem[] = [
  {
    kind: 'work',
    role: 'Software Engineering Intern',
    org: 'Sui Southern Gas Company (SSGC)',
    period: 'Aug 2025 – Sep 2025',
    location: 'Karachi, Pakistan',
    summary:
      'Developed the Field Activity Reporting System (FARS) — an internal web application that streamlined access to operational field-activity data, reducing dependence on manually written SQL queries for recurring information requests.',
    highlights: [
      'Built the FARS backend in Java with Spring Boot, Spring Security and Hibernate/JPA.',
      'Implemented server-side pagination and optimized data retrieval for large datasets.',
      'Developed hierarchical filtering across regions, units and sub-units.',
      'Integrated SSGC\u2019s production Oracle database and delivered the app for internal deployment.',
      'Actively used by supervisors and management for field-activity tracking and reporting.',
    ],
    flow: ['USER', 'SPRING SECURITY', 'REST API', 'SERVICE', 'JPA / HIBERNATE', 'ORACLE DB', 'DASHBOARD'],
    tech: ['Java', 'Spring Boot', 'Spring Security', 'Hibernate', 'Oracle', 'Chart.js'],
    featured: true,
  },
  {
    kind: 'work',
    role: 'Self-Employed / Software Development',
    org: 'Freelance · Client Projects',
    period: 'Ongoing',
    location: 'Karachi, Pakistan',
    summary:
      'Building software for real users and clients — not just portfolio demos. Taking real requirements and turning them into deployed, working products.',
    highlights: [
      'Designed and built the LivLongMD website for an international medical client — live in production.',
      'Translated real client requirements into shipped, working software.',
    ],
    tech: ['JavaScript', 'HTML', 'CSS', 'Web'],
  },
  {
    kind: 'certification',
    role: 'Cloud Computing Certification',
    org: 'NED University of Engineering & Technology',
    period: 'Sep 2025 – Nov 2025',
    summary: 'Formal certification program covering cloud computing fundamentals and modern cloud practices.',
  },
  {
    kind: 'education',
    role: 'Bachelor of Science in Computer Science (BSCS)',
    org: 'Hamdard University',
    period: 'Jan 2023 – Jan 2027',
    location: 'Karachi, Pakistan',
    summary: 'CGPA 3.10 / 4.00 — currently in the 7th semester (final year).',
  },
  {
    kind: 'education',
    role: 'Pre-Engineering',
    org: 'Govt. Dehli College',
    period: 'Jan 2021 – Jan 2023',
    location: 'Karachi, Pakistan',
    summary: 'Pre-engineering foundation prior to computer science studies.',
  },
];

export const selfEmployed = {
  title: 'Self-Employed / Software Development',
  positioning: 'Building software for real users, not just portfolio demos.',
  blurb:
    'Beyond internships and coursework, I build and ship software for clients — taking real requirements and turning them into deployed, working products.',
};
