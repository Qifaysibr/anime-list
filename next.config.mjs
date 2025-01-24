/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/projects/anime', // Menentukan basePath untuk semua routing dan asset
  images: {
    domains: ['cdn.myanimelist.net'], // Mendukung domain untuk memuat gambar eksternal
  },
};

module.exports = nextConfig; // Export konfigurasi dengan benar
