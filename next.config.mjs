/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/webp', 'image/avif'],
    // Allow images from the target site (used in the "About" page sections for visual fidelity).
    // Local self-hosted copies live under /public/about/* and are preferred.
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'aliyan-jabbar-portfolio.vercel.app',
      },
    ],
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion', 'gsap'],
  },
};

export default nextConfig;
