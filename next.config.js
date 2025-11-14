/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  outputFileTracingRoot: __dirname,

  // ✅ Prevent Next.js from treating JS inside /app/assets as routes
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'], // only treat these under /app/ as pages
  webpack(config) {
    config.module.rules.push({
      test: /\.js$/,
      include: /app[\\/]assets[\\/]/,
      type: 'javascript/auto',
    });
    return config;
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
