import { site } from './site';

export const profile = {
  displayName: site.name,
  fullName: site.fullName,
  monogram: site.monogram,
  role: site.role,
  shortRole: 'Full Stack',
  roleBig: 'AI ENGINEER',
  secondaryRole: site.secondaryRole,
  email: site.email,
  location: site.location,

  // Hero (home page) — video hero is untouched
  heroHeadline: ['I BUILD', 'SYSTEMS.'],
  heroSupport:
    'Software engineer. I design, build and ship backend systems — taking ownership from architecture to production.',

  // About page — matches target's "Full Stack AI Engineer" headline
  aboutHeadline: 'Turning ideas into',
  aboutHeadlineAccent: 'AI-Powered Solutions',
  aboutSubhead:
    'As a passionate Full Stack AI Engineer, I bring ideas to life through cutting-edge web applications & AI solutions.',
  aboutStory:
    'Full Stack AI Engineer, bringing ideas to life with the help of modern technologies + AI features to enhance user experience. With over 3 years of learning advanced web technologies, I\'m always seeking new and innovative ways to transform my clients\' ideas into reality.',

  // Hero (home) — matches target's "Hello / NextJS / UI/UX / Web Developer / Hire Me / AJ" intro
  helloRotator: ['Hello', 'Java', 'Spring Boot', 'AI', 'Backend'],

  // Positioning (short, confident, philosophical)
  positioning: 'I take software from idea to production.',
  positioningLines: [
    'I build systems, not fragments.',
    'I take ownership from architecture to delivery.',
    'I ship software that has to work — not demos.',
  ],

  // Stats (about page counters)
  stats: {
    techSkills: 35,
    projects: 8,
    linkedin: 500,
  },

  // Creative ID card (legacy — kept for compatibility)
  idCard: {
    name: 'ALI NASIR',
    role: 'SOFTWARE ENGINEER',
    tags: ['JAVA / SPRING BOOT', 'BACKEND SYSTEMS', 'AI / AUTOMATION'],
    status: 'AVAILABLE FOR HIRE',
  },

  hireMe: {
    headline: 'SOFTWARE ENGINEER',
    sub: 'Java Backend Developer · Computer Science undergraduate',
    availability: 'Available for internships & freelance work',
  },

  // About story paragraphs
  about: [
    "I'm a Computer Science undergraduate and Software Engineer who takes ownership of projects from idea through architecture, development, integration and delivery.",
    "I care about backend systems, databases, APIs, AI and deployment — but most of all, I care about building complete products that actually solve a problem.",
  ],
  ownershipAreas: ['planning', 'architecture', 'development', 'databases', 'APIs', 'deployment', 'integration', 'delivery'],
};

/**
 * Preloader greeting sequence — cinematic, multilingual, ends on SALAM.
 * (Kept for legacy, not used in the new target-style home page.)
 */
export const greetings = [
  'CIAO',
  '안녕하세요',
  'ПРИВЕТ',
  'BONJOUR',
  'HALO',
  'MERHABA',
  'HOLA',
  'HELLO',
  'SALAM',
] as const;

export const finalGreeting = 'SALAM';
