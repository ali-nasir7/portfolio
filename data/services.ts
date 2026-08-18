/**
 * Services / capabilities — presented as cards (matching the target about page).
 * Each card pairs a title with a single-line subtitle (per the target layout).
 */
export interface Service {
  id: string;
  title: string;
  subtitle: string;
  /** which about-image (1-6) is used for this card */
  imageKey: 1 | 2 | 3 | 4 | 5 | 6;
}

export const services: Service[] = [
  {
    id: 'custom',
    title: 'Custom Development',
    subtitle: 'UI/UX Developer',
    imageKey: 5,
  },
  {
    id: 'chatbots',
    title: 'Chatbots Development',
    subtitle: 'AI Chatbot Engineer',
    imageKey: 1,
  },
  {
    id: 'website',
    title: 'Website Development',
    subtitle: 'Next.js Developer',
    imageKey: 4,
  },
  {
    id: 'ai-systems',
    title: 'AI System Engineering',
    subtitle: 'Backend · AI Integration',
    imageKey: 3,
  },
  {
    id: 'ai-agents',
    title: 'AI Agents Development',
    subtitle: 'Agents Developer',
    imageKey: 2,
  },
  {
    id: 'automation',
    title: 'Workflow Automation',
    subtitle: 'Distributed Systems',
    imageKey: 6,
  },
];

/** "Followed Approach" — the three phases of how I work (01 / 02 / 03). */
export const journey = [
  {
    num: '01',
    title: 'Plan the workflow',
    phase: 'Phase 1',
    body: 'I map the problem before writing a line of code — architecture, data boundaries and the flows between them.',
  },
  {
    num: '02',
    title: 'Build with Passion',
    phase: 'Phase 2',
    body: 'Backend systems, APIs, databases and AI integrations — built for maintainability, not just to work once.',
  },
  {
    num: '03',
    title: 'Deliver the best',
    phase: 'Phase 3',
    body: 'Deployment, integration and delivery. I take ownership until the software is live and actually solves the problem.',
  },
];

/** Three key areas of expertise (matches target's "Areas of Expertise" block). */
export const expertise = [
  {
    num: '01',
    title: 'Web Development',
    body: 'We build scalable, high-performance web applications using modern technologies like Next.js and FastAPI. Our code is clean, maintainable, and built to last.',
  },
  {
    num: '02',
    title: 'AI Chatbots & Agents',
    body: 'We build intelligent AI-powered chatbots that automate support, improve customer experience, and deliver instant, human-like responses across your platforms.',
  },
  {
    num: '03',
    title: 'AI Automations',
    body: 'We develop end-to-end automation systems that streamline business processes, reduce manual effort, and improve productivity using AI-driven workflows.',
  },
];
