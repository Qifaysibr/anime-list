// next.config.mjs

const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'cdn.myanimelist.net' },
      { hostname: 'lh3.googleusercontent.com' },
      { hostname: 'm.media-amazon.com' },
    ],
  },
};

export default nextConfig; // Export konfigurasi dengan benar