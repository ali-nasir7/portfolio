export const site = {
  name: 'Ali Nasir',
  fullName: 'Muhammad Ali Nasir',
  monogram: 'AN',
  role: 'Software Engineer',
  secondaryRole: 'Java Backend Developer',
  email: 'alinasir.cse@gmail.com',
  location: 'Karachi, Pakistan',
  // Canonical URL placeholder — set the production domain when you have one.
  url: 'https://ali-nasir.dev',
  socials: {
    github: 'https://github.com/ali-nasir7',
    linkedin: 'https://linkedin.com/in/ali-nasir7',
    email: 'mailto:alinasir.cse@gmail.com',
  },
  seo: {
    title: 'Ali Nasir — Software Engineer',
    description:
      'Software Engineer and Java Backend Developer building real-world backend systems, enterprise applications, AI-powered platforms, and production software.',
    keywords: [
      'Software Engineer',
      'Java Backend Developer',
      'Spring Boot',
      'Kafka',
      'PostgreSQL',
      'REST APIs',
      'Enterprise SaaS',
      'Karachi',
    ],
  },
  // Intro video — the hero visual. Drop a file at /public/media/ali-intro.mp4
  // (autoplays muted in the hero; elegant unmute control). A cinematic
  // portrait sequence plays as a graceful fallback when the file is absent.
  introVideo: '/media/ali-intro.mp4',
  portrait: '/media/alinasir.webp',
  portraitJpg: '/media/alinasir.jpg',
  // Dedicated About-page image. Drop /public/media/alinasirabout.jpg (or webp)
  // and point this at it; falls back to the portrait automatically.
  aboutImage: '/media/alinasirabout.jpg',
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
