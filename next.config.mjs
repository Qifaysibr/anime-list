/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.myanimelist.net','lh3.googleusercontent.com','m.media-amazon.com'], // Mendukung domain untuk memuat gambar eksternal
  },
  async headers() {
    return [
      {
        // Apply to every page by default
        source: '/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'no-store' }, // Set to 'no-store' to disable caching
        ],
      },
    ]
  },
};

export default nextConfig; // Export konfigurasi dengan benar