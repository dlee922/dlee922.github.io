/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // For GitHub Pages deployment at username.github.io
  // If deploying to a subpath like username.github.io/repo-name,
  // uncomment and set: basePath: '/repo-name',
};

module.exports = nextConfig;
