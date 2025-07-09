// const { i18n } = require('./next-i18next.config');

const nextConfig = {
  // i18n,
  reactStrictMode: true,
  output: 'export', // penting untuk Netlify
  images: {
    unoptimized: true, // wajib agar <Image /> bisa dipakai di Netlify
  },
};

module.exports = nextConfig;
