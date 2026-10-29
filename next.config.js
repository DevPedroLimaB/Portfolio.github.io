/** @type {import('next').NextConfig} */

// Vercel: site na raiz do dominio.
// GitHub Pages: export estatico dentro de /Portfolio.github.io.
const isVercel = !!process.env.VERCEL;

const nextConfig = isVercel
  ? {
      images: { unoptimized: true },
    }
  : {
      output: 'export',
      distDir: 'out',
      images: { unoptimized: true },
      trailingSlash: true,
      basePath: '/Portfolio.github.io',
    };

module.exports = nextConfig;
