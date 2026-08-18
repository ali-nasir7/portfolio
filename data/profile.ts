import { site } from './site';

export const profile = {
  displayName: site.name,
  fullName: site.fullName,
  monogram: site.monogram,
  role: site.role,
  secondaryRole: site.secondaryRole,
  email: site.email,
  location: site.location,

  // Hero
  heroHeadline: ['I BUILD', 'SYSTEMS.'],
  heroSupport:
    'Software engineer. I design, build and ship backend systems — taking ownership from architecture to production.',

  // Positioning (short, confident, philosophical)
  positioning: 'I take software from idea to production.',
  positioningLines: [
    'I build systems, not fragments.',
    'I take ownership from architecture to delivery.',
    'I ship software that has to work — not demos.',
  ],

  // Creative ID card
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

  // About story
  about: [
    "I'm a Computer Science undergraduate and Software Engineer who takes ownership of projects from idea through architecture, development, integration and delivery.",
    "I care about backend systems, databases, APIs, AI and deployment — but most of all, I care about building complete products that actually solve a problem.",
  ],
  ownershipAreas: ['planning', 'architecture', 'development', 'databases', 'APIs', 'deployment', 'integration', 'delivery'],
};

/**
 * Preloader greeting sequence — cinematic, multilingual, ends on SALAM.
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
