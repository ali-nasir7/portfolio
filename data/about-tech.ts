/**
 * About-page Tech Stack. Each entry has a small inline-SVG icon
 * so we don't need image assets for every technology.
 */

export type TechCategory = 'Frontend' | 'Backend' | 'AI Agents' | 'Databases' | 'DevOps & Tools';

export const techCategories: TechCategory[] = ['Frontend', 'Backend', 'AI Agents', 'Databases', 'DevOps & Tools'];

export interface TechItem {
  name: string;
  category: TechCategory;
  /** Brand color */
  color: string;
  /** Inline SVG path/group — see TechIcon component */
  icon: 'html' | 'css' | 'js' | 'ts' | 'react' | 'next' | 'tailwind' | 'shadcn' | 'framer' | 'gsap' | 'vite' | 'figma' | 'three' | 'node' | 'fastapi' | 'redux' | 'sanity' | 'thunder' | 'python' | 'express' | 'openai' | 'gemini' | 'n8n' | 'langchain' | 'claude' | 'mcp' | 'langgraph' | 'mongo' | 'postgres' | 'mysql' | 'drizzle' | 'prisma' | 'docker' | 'aws' | 'vercel' | 'git' | 'java' | 'spring' | 'kafka' | 'redis' | 'openai-api';
}

export const techItems: TechItem[] = [
  // Frontend
  { name: 'HTML 5', category: 'Frontend', color: '#e34f26', icon: 'html' },
  { name: 'CSS 3', category: 'Frontend', color: '#1572b6', icon: 'css' },
  { name: 'JavaScript', category: 'Frontend', color: '#f7df1e', icon: 'js' },
  { name: 'TypeScript', category: 'Frontend', color: '#3178c6', icon: 'ts' },
  { name: 'React JS', category: 'Frontend', color: '#61dafb', icon: 'react' },
  { name: 'Next JS', category: 'Frontend', color: '#000000', icon: 'next' },
  { name: 'Tailwind CSS', category: 'Frontend', color: '#06b6d4', icon: 'tailwind' },
  { name: 'Framer Motion', category: 'Frontend', color: '#bb86fc', icon: 'framer' },
  { name: 'GSAP', category: 'Frontend', color: '#88ce02', icon: 'gsap' },
  { name: 'Vite', category: 'Frontend', color: '#646cff', icon: 'vite' },
  { name: 'Three JS', category: 'Frontend', color: '#000000', icon: 'three' },

  // Backend
  { name: 'Java', category: 'Backend', color: '#f89820', icon: 'java' },
  { name: 'Spring Boot', category: 'Backend', color: '#6db33f', icon: 'spring' },
  { name: 'Node JS', category: 'Backend', color: '#3c873a', icon: 'node' },
  { name: 'Python', category: 'Backend', color: '#3776ab', icon: 'python' },
  { name: 'Express JS', category: 'Backend', color: '#000000', icon: 'express' },

  // AI Agents
  { name: 'OpenAI Agents', category: 'AI Agents', color: '#10a37f', icon: 'openai' },
  { name: 'Gemini Models', category: 'AI Agents', color: '#4285f4', icon: 'gemini' },
  { name: 'n8n', category: 'AI Agents', color: '#ea4b71', icon: 'n8n' },
  { name: 'LangChain', category: 'AI Agents', color: '#1c3c3c', icon: 'langchain' },
  { name: 'Claude', category: 'AI Agents', color: '#d97757', icon: 'claude' },
  { name: 'MCPs', category: 'AI Agents', color: '#000000', icon: 'mcp' },
  { name: 'LangGraph', category: 'AI Agents', color: '#1c3c3c', icon: 'langgraph' },

  // Databases
  { name: 'Mongo DB', category: 'Databases', color: '#47a248', icon: 'mongo' },
  { name: 'Postgre SQL', category: 'Databases', color: '#336791', icon: 'postgres' },
  { name: 'My SQL', category: 'Databases', color: '#4479a1', icon: 'mysql' },
  { name: 'Redis', category: 'Databases', color: '#dc382d', icon: 'redis' },
  { name: 'Apache Kafka', category: 'Databases', color: '#231f20', icon: 'kafka' },

  // DevOps & Tools
  { name: 'Docker', category: 'DevOps & Tools', color: '#2496ed', icon: 'docker' },
  { name: 'AWS', category: 'DevOps & Tools', color: '#ff9900', icon: 'aws' },
  { name: 'Vercel', category: 'DevOps & Tools', color: '#000000', icon: 'vercel' },
  { name: 'Git', category: 'DevOps & Tools', color: '#f05032', icon: 'git' },
  { name: 'Swagger', category: 'DevOps & Tools', color: '#85ea2d', icon: 'thunder' },
];
