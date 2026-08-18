export const site = {
  name: 'Ali Nasir',
  fullName: 'Muhammad Ali Nasir',
  monogram: 'AN',
  monogramMark: 'AJ', // not used; kept for compatibility
  role: 'Software Engineer',
  roleShort: 'Full Stack AI Engineer',
  secondaryRole: 'Java Backend Developer',
  tagline: 'Full Stack AI Engineer',
  email: 'alinasir.cse@gmail.com',
  location: 'Karachi, Pakistan',
  // Canonical URL placeholder — set the production domain when you have one.
  url: 'https://ali-nasir.dev',
  socials: {
    github: 'https://github.com/ali-nasir7',
    linkedin: 'https://linkedin.com/in/ali-nasir7',
    twitter: 'https://x.com/alinasir_',
    email: 'mailto:alinasir.cse@gmail.com',
  },
  seo: {
    title: 'Ali Nasir — Software Engineer · Full Stack AI Engineer',
    description:
      'Software Engineer and Java Backend Developer building real-world backend systems, enterprise applications, AI-powered platforms, and production software.',
    keywords: [
      'Software Engineer',
      'Full Stack AI Engineer',
      'Java Backend Developer',
      'Spring Boot',
      'Kafka',
      'PostgreSQL',
      'REST APIs',
      'Enterprise SaaS',
      'AI',
      'Karachi',
    ],
  },
  // Intro video (home page hero — DO NOT TOUCH per user request)
  introVideo: '/media/ali-intro.mp4',
  portrait: '/media/alinasir.webp',
  portraitJpg: '/media/alinasir.jpg',
  aboutImage: '/about/aliyan.png',
  sittingBg: '/about/sittingBg.png',
  sitting: '/about/sitting.png',
  resumePdf: '/resume/Muhammad_Ali_Nasir_Resume.pdf',
} as const;

/**
 * Analytics — intentionally left unconfigured. Drop in your provider IDs when ready.
 */
export const analytics = {
  googleAnalyticsId: '',
  plausibleDomain: '',
  posthogKey: '',
} as const;
