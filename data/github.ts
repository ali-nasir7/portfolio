/**
 * GitHub data.
 *
 * The GitHub section fetches live data from the public GitHub API at runtime and
 * falls back to this static snapshot if the request fails (rate-limited, offline).
 * The snapshot is a factual record of the public profile — never fabricated counts.
 */
export const github = {
  username: 'ali-nasir7',
  url: 'https://github.com/ali-nasir7',
};

/** Accurate snapshot of public profile as of build time. */
export const githubSnapshot = {
  login: 'ali-nasir7',
  publicRepos: 20,
  followers: 1,
  following: 3,
  createdAt: '2024-03-27T13:09:51Z',
  updatedAt: '2026-08-06T19:31:31Z',
};

/** Public repositories (name + primary language only — no invented descriptions). */
export const githubReposSnapshot = [
  { name: 'smartTrust', language: 'Java' },
  { name: 'NexusERP-Cloud', language: null },
  { name: 'BuildSense-AI', language: null },
  { name: 'Ali-s-repo', language: 'JavaScript' },
  { name: 'Ai-Resume-ATS-Builder-', language: null },
  { name: 'abc_school', language: 'Java' },
  { name: 'livlong-MD-Final', language: 'JavaScript' },
  { name: 'hello-world-project', language: 'TypeScript' },
  { name: 'Medical_website', language: null },
  { name: 'MD_Website', language: null },
  { name: 'livlong-', language: null },
  { name: 'multi_Agent', language: 'Python' },
  { name: 'football-website', language: 'TypeScript' },
  { name: 'webiste', language: 'TypeScript' },
  { name: 'Abroad-School', language: 'Java' },
  { name: 'FARS', language: 'Java' },
  { name: 'Devvault', language: 'Java' },
  { name: 'NoteBook-API', language: 'Java' },
  { name: 'fileManagementSystem', language: 'CSS' },
  { name: 'empower-ems', language: 'Java' },
] as const;

/** Repos worth surfacing by name (mapped to real snapshot metadata only). */
export const featuredRepos = ['NexusERP-Cloud', 'FARS', 'Abroad-School', 'smartTrust', 'Devvault', 'BuildSense-AI'];
