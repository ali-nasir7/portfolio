/**
 * Inline brand icons for the about-page Tech Stack grid.
 * Each icon is a tiny, brand-faithful SVG (no external image fetches).
 */
import type { TechItem } from '@/data/about-tech';

export function TechIcon({ name, className = 'h-12 w-12' }: { name: TechItem['icon']; className?: string }) {
  switch (name) {
    case 'html':
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none">
          <path d="M6 6l3.5 36 14.5 4 14.5-4L42 6H6z" fill="#e34f26" />
          <path d="M24 11.6v32.4l11.7-3.2 2.9-29.2H24z" fill="#f06529" />
          <path d="M14 19h20l-1 10H19.4l.5 5.5 4.1 1.1 4.1-1.1.2-3.5h-3.4v-4H28l-.4 6.8L24 35.2l-4.1-1.1L19.4 28H24.3l.3 1.3 1.4.4 1.5-.4.3-3.5h-9.4L18 19z" fill="#fff" />
        </svg>
      );
    case 'css':
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none">
          <path d="M6 6l3.5 36 14.5 4 14.5-4L42 6H6z" fill="#1572b6" />
          <path d="M24 11.6v32.4l11.7-3.2 2.9-29.2H24z" fill="#33a9dc" />
          <path d="M14 19h20l-.5 5H19l.4 4h9.4l-.6 6.4L24 35.2l-3.7-1-1.3-9.2h4.4l.4 2.4 2.2.6 2.2-.6.5-4.4h-10L14 19z" fill="#fff" />
        </svg>
      );
    case 'js':
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none">
          <rect width="48" height="48" rx="6" fill="#f7df1e" />
          <path d="M27 35.5c1 1.6 2.3 2.8 4.6 2.8 1.9 0 3-1 3-2.3 0-1.6-1.3-2.1-3.4-3.1l-1.2-.5c-3.4-1.4-5.6-3.3-5.6-7.1 0-3.5 2.7-6.2 6.8-6.2 3 0 5.1 1 6.6 3.7l-3.6 2.3c-.8-1.4-1.6-2-3-2-1.4 0-2.2.9-2.2 2 0 1.4.9 2 2.9 2.9l1.2.5c4 1.7 6.2 3.4 6.2 7.3 0 4.2-3.3 6.5-7.7 6.5-4.3 0-7-2-8.4-4.7l3.8-2.1zM13 36c.7 1.2 1.4 2.3 2.9 2.3 1.5 0 2.4-.6 2.4-2.9V20h4.4v15.6c0 4.5-2.6 6.5-6.5 6.5-3.5 0-5.5-1.8-6.5-4l3.3-2.1z" fill="#000" />
        </svg>
      );
    case 'ts':
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none">
          <rect width="48" height="48" rx="6" fill="#3178c6" />
          <path d="M28.4 30.7c.5 2.5 2.3 4.2 5.2 4.2 2.7 0 4.5-1.4 4.5-3.4 0-1.7-1-2.8-3.3-3.5l-2.6-.7c-3.7-1-5.6-2.7-5.6-5.9 0-3.7 3-6.1 7.4-6.1 4.2 0 6.8 2.1 7.3 5.3l-3.8 1c-.4-1.7-1.6-2.5-3.5-2.5-1.9 0-3 .9-3 2.3 0 1.3.9 1.9 3 2.5l2.4.7c4 1.1 6.1 2.9 6.1 6.2 0 4-3.3 6.7-8 6.7-4.4 0-7.3-2.1-8.2-5.4l4.1-1.4zM19 22.3h-7.2V19h19.2v3.3h-7.2V42H19V22.3z" fill="#fff" />
        </svg>
      );
    case 'react':
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none">
          <circle cx="24" cy="24" r="4" fill="#61dafb" />
          <g stroke="#61dafb" strokeWidth="2.4" fill="none">
            <ellipse cx="24" cy="24" rx="20" ry="8" />
            <ellipse cx="24" cy="24" rx="20" ry="8" transform="rotate(60 24 24)" />
            <ellipse cx="24" cy="24" rx="20" ry="8" transform="rotate(120 24 24)" />
          </g>
        </svg>
      );
    case 'next':
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none">
          <circle cx="24" cy="24" r="22" fill="#000" />
          <path d="M19 16v16l11-16h-2.5L19 27.4V16h-1.5z" fill="#fff" />
        </svg>
      );
    case 'tailwind':
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none">
          <path d="M24 12c-7 0-11 4-12 11 2.5-4 5.5-5.5 9-4.5 2 .6 3.4 2 5 3.7 2.2 2.4 4.7 5 10 5 7 0 11-4 12-11-2.5 4-5.5 5.5-9 4.5-2-.6-3.4-2-5-3.7C31.8 14.6 29.3 12 24 12zm-12 16c-7 0-11 4-12 11 2.5-4 5.5-5.5 9-4.5 2 .6 3.4 2 5 3.7 2.2 2.4 4.7 5 10 5 7 0 11-4 12-11-2.5 4-5.5 5.5-9 4.5-2-.6-3.4-2-5-3.7-2.2-2.4-4.7-5-10-5z" fill="#06b6d4" />
        </svg>
      );
    case 'shadcn':
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none">
          <path d="M14 30l10-18 10 18H14z" fill="#000" />
          <line x1="14" y1="34" x2="34" y2="34" stroke="#000" strokeWidth="2" />
        </svg>
      );
    case 'framer':
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none">
          <path d="M12 6h24v12H24L12 6zm0 12h24l-12 12H12V18zm12 12h12v12L24 30z" fill="#bb86fc" />
        </svg>
      );
    case 'gsap':
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none">
          <rect width="48" height="48" rx="8" fill="#88ce02" />
          <text x="24" y="32" textAnchor="middle" fontFamily="Arial Black" fontWeight="900" fontSize="16" fill="#0d2601">GSAP</text>
        </svg>
      );
    case 'vite':
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none">
          <path d="M24 4L4 14l4 24 16 8 16-8 4-24L24 4z" fill="#646cff" />
          <path d="M24 4L4 14l4 24 16 8 16-8 4-24L24 4zm0 6.5l14 7-3 18-11 5.5L13 35.5l-3-18 14-7z" fill="#fff" opacity=".15" />
          <path d="M18 20l6 4-6 4 6 4 6-4-6-4 6-4-6-4-6 4 6 4z" fill="#fff" />
        </svg>
      );
    case 'figma':
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none">
          <path d="M16 6h8v12h-8a6 6 0 110-12z" fill="#f24e1e" />
          <path d="M16 18h8v12h-8a6 6 0 110-12z" fill="#ff7262" />
          <path d="M16 30h8v6a6 6 0 11-8 0v-6z" fill="#a259ff" />
          <path d="M24 6h8a6 6 0 010 12h-8V6z" fill="#ff7262" />
          <path d="M24 18h8a6 6 0 010 12h-8V18z" fill="#1abcfe" />
        </svg>
      );
    case 'three':
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none">
          <rect width="48" height="48" rx="6" fill="#000" />
          <path d="M24 12c-6 0-9 4-9 9 0 4 2 7 5 8 0 2-1 3-2 4 4 0 8-3 8-7 4-1 6-4 6-8 0-3-3-6-8-6zm-1 4c2 0 3 1 3 2s-1 2-3 2-3-1-3-2 1-2 3-2z" fill="#fff" />
        </svg>
      );
    case 'node':
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none">
          <path d="M24 4L6 14v20l18 10 18-10V14L24 4z" fill="#3c873a" />
          <path d="M22 16v8l6 3.5-6 3.5V34l10-5.8V19L22 16z" fill="#fff" />
        </svg>
      );
    case 'fastapi':
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none">
          <rect width="48" height="48" rx="6" fill="#009688" />
          <path d="M14 34h20M14 14h20l-7 10 7 10" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'redux':
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none">
          <ellipse cx="24" cy="24" rx="20" ry="8" stroke="#764abc" strokeWidth="2.4" fill="none" />
          <ellipse cx="24" cy="24" rx="20" ry="8" stroke="#764abc" strokeWidth="2.4" fill="none" transform="rotate(60 24 24)" />
          <ellipse cx="24" cy="24" rx="20" ry="8" stroke="#764abc" strokeWidth="2.4" fill="none" transform="rotate(120 24 24)" />
          <circle cx="24" cy="24" r="3" fill="#764abc" />
        </svg>
      );
    case 'sanity':
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none">
          <path d="M14 34c4-2 6-6 6-12s-2-10-6-12h6c4 2 6 6 6 12s-2 10-6 12h-6zm20 0c-4-2-6-6-6-12s2-10 6-12h-6c-4 2-6 6-6 12s2 10 6 12h6z" fill="#f03e2f" />
        </svg>
      );
    case 'thunder':
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none">
          <rect width="48" height="48" rx="6" fill="#1a1a1a" />
          <path d="M26 8L14 26h8l-2 14 14-18h-8l2-14z" fill="#7c3aed" />
        </svg>
      );
    case 'python':
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none">
          <path d="M24 6c-8 0-9 4-9 6v4h9v2H12c-3 0-6 2-6 8s3 8 6 8h4v-4c0-3 2-6 6-6h10c3 0 6-2 6-6v-8c0-3-2-4-6-4h-8zm-4 4c1 0 2 1 2 2s-1 2-2 2-2-1-2-2 1-2 2-2z" fill="#3776ab" />
          <path d="M24 42c8 0 9-4 9-6v-4h-9v-2h12c3 0 6-2 6-8s-3-8-6-8h-4v4c0 3-2 6-6 6H16c-3 0-6 2-6 6v8c0 3 2 4 6 4h8zm4-4c-1 0-2-1-2-2s1-2 2-2 2 1 2 2-1 2-2 2z" fill="#ffd43b" />
        </svg>
      );
    case 'express':
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none">
          <rect width="48" height="48" rx="6" fill="#000" />
          <text x="24" y="32" textAnchor="middle" fontFamily="Arial" fontWeight="700" fontSize="14" fill="#fff">ex</text>
        </svg>
      );
    case 'openai':
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none">
          <path d="M24 6c-7 0-12 4-12 9 0 1 .1 2 .4 2.8C8 19 6 22 6 25c0 4 3 7 7 7.5-.3 1-.4 2-.4 2.5 0 4 5 7 11 7 5 0 9-2 10-5 1 3 5 5 10 5 6 0 11-3 11-7 0-.5-.1-1.5-.4-2.5 4-.5 7-3.5 7-7.5 0-3-2-6-6.4-7.2.3-.8.4-1.8.4-2.8 0-5-5-9-12-9-3 0-5 .8-7 2-2-1.2-4-2-7-2z" fill="#10a37f" />
          <circle cx="18" cy="22" r="2" fill="#fff" />
          <circle cx="30" cy="22" r="2" fill="#fff" />
        </svg>
      );
    case 'gemini':
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none">
          <path d="M24 4l4 16h16l-13 9 5 16-12-9-12 9 5-16-13-9h16l4-16z" fill="#4285f4" />
        </svg>
      );
    case 'n8n':
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none">
          <rect width="48" height="48" rx="10" fill="#ea4b71" />
          <path d="M14 16h20l-6 8 6 8H14l6-8-6-8z" fill="#fff" />
        </svg>
      );
    case 'langchain':
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none">
          <rect width="48" height="48" rx="6" fill="#1c3c3c" />
          <path d="M14 24c0-5 4-9 10-9s10 4 10 9-4 9-10 9" stroke="#1de9b6" strokeWidth="2.4" fill="none" />
          <circle cx="24" cy="24" r="3" fill="#1de9b6" />
        </svg>
      );
    case 'claude':
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none">
          <circle cx="24" cy="24" r="20" fill="#d97757" />
          <path d="M18 16c0 4 4 8 8 8s-4 8-8 8" stroke="#fff" strokeWidth="2.4" fill="none" strokeLinecap="round" />
        </svg>
      );
    case 'mcp':
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none">
          <rect width="48" height="48" rx="6" fill="#000" />
          <text x="24" y="32" textAnchor="middle" fontFamily="Arial Black" fontWeight="900" fontSize="14" fill="#fff">MCP</text>
        </svg>
      );
    case 'langgraph':
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none">
          <rect width="48" height="48" rx="6" fill="#1c3c3c" />
          <circle cx="16" cy="16" r="3" fill="#1de9b6" />
          <circle cx="32" cy="16" r="3" fill="#1de9b6" />
          <circle cx="24" cy="32" r="3" fill="#1de9b6" />
          <line x1="16" y1="16" x2="32" y2="16" stroke="#1de9b6" strokeWidth="1.6" />
          <line x1="16" y1="16" x2="24" y2="32" stroke="#1de9b6" strokeWidth="1.6" />
          <line x1="32" y1="16" x2="24" y2="32" stroke="#1de9b6" strokeWidth="1.6" />
        </svg>
      );
    case 'mongo':
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none">
          <path d="M24 4c-1 8-3 12-6 16 0 6 3 14 6 24 3-10 6-18 6-24-3-4-5-8-6-16z" fill="#47a248" />
          <ellipse cx="24" cy="22" rx="3" ry="4" fill="#b8e486" />
        </svg>
      );
    case 'postgres':
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none">
          <path d="M24 4c-6 0-12 2-12 8 0 4 2 8 2 12 0 6-2 12 4 18 3 3 8 2 10-2-2-4-2-8 0-12 1-3 4-4 4-8 0-6-2-16-8-16z" fill="#336791" />
          <circle cx="20" cy="22" r="1.5" fill="#fff" />
          <circle cx="26" cy="22" r="1.5" fill="#fff" />
          <ellipse cx="24" cy="30" rx="3" ry="2" fill="#fff" />
        </svg>
      );
    case 'mysql':
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none">
          <rect width="48" height="48" rx="6" fill="#00758f" />
          <path d="M16 12c2 8 6 12 8 18 1 4 0 6-2 6 0-3 1-5 0-7-2-3-4-7-6-17z" fill="#f29111" />
          <ellipse cx="20" cy="22" rx="3" ry="2" fill="#fff" />
        </svg>
      );
    case 'redis':
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none">
          <path d="M24 6L8 14v20l16 8 16-8V14L24 6z" fill="#dc382d" />
          <path d="M24 14l-8 4v8l8 4 8-4v-8l-8-4z" fill="#fff" />
          <path d="M20 22h8v4h-8z" fill="#dc382d" />
        </svg>
      );
    case 'kafka':
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none">
          <rect width="48" height="48" rx="6" fill="#231f20" />
          <circle cx="14" cy="24" r="3" fill="#fff" />
          <circle cx="24" cy="24" r="3" fill="#fff" />
          <circle cx="34" cy="24" r="3" fill="#fff" />
          <line x1="17" y1="24" x2="21" y2="24" stroke="#fff" strokeWidth="1.6" />
          <line x1="27" y1="24" x2="31" y2="24" stroke="#fff" strokeWidth="1.6" />
        </svg>
      );
    case 'docker':
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none">
          <path d="M6 22h36v8c0 6-6 10-14 10H18c-6 0-12-4-12-10v-8z" fill="#2496ed" />
          <g fill="#fff">
            <rect x="10" y="14" width="6" height="6" rx="1" />
            <rect x="18" y="14" width="6" height="6" rx="1" />
            <rect x="26" y="14" width="6" height="6" rx="1" />
            <rect x="18" y="6" width="6" height="6" rx="1" />
            <rect x="26" y="6" width="6" height="6" rx="1" />
          </g>
        </svg>
      );
    case 'aws':
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none">
          <rect width="48" height="48" rx="6" fill="#232f3e" />
          <path d="M14 32c4 2 8 3 12 3 4 0 8-1 10-3" stroke="#ff9900" strokeWidth="2.4" fill="none" strokeLinecap="round" />
          <text x="24" y="22" textAnchor="middle" fontFamily="Arial Black" fontWeight="900" fontSize="10" fill="#ff9900">aws</text>
        </svg>
      );
    case 'vercel':
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none">
          <path d="M24 8L8 38h32L24 8z" fill="#000" />
        </svg>
      );
    case 'git':
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none">
          <path d="M24 4L8 20l16 16 16-16L24 4z" fill="#f05032" />
          <path d="M16 22l-4 4 4 4 4-4-4-4zm16 0l-4 4 4 4 4-4-4-4z" fill="#fff" />
        </svg>
      );
    case 'java':
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none">
          <path d="M14 34c4 2 8 3 12 0 0-2-2-3-6-4 4 1 6 2 6 4 4 1 8 0 8-3-2 1-4 1-6 0 0 0-2-2-6-2s-8 3-8 5z" fill="#e68a00" />
          <path d="M14 28c4 1 8 1 12 0 0-2-2-3-6-3s-6 1-6 3z" fill="#f89820" />
          <path d="M22 14c-4 1-6 3-6 5 0 1 1 2 3 2 1 0 2-1 2-2 0 0 1 1 3 1s3-1 3-2c0-1-1-2-2-3 0 0-1 1-3 1s-3-1-3-1l3-1z" fill="#5382a1" />
        </svg>
      );
    case 'spring':
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none">
          <circle cx="24" cy="24" r="20" fill="#6db33f" />
          <path d="M14 24c4-2 8 0 12 0s4 4 4 4 0 2-2 2-2-2-4-2-2 2-4 2-4-2-6-2 0-4 0-4z" fill="#fff" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none">
          <rect width="48" height="48" rx="6" fill="#ddd" />
          <text x="24" y="32" textAnchor="middle" fontFamily="Arial" fontSize="12" fill="#666">T</text>
        </svg>
      );
  }
}
