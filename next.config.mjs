/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: '/projects/anime',
  basePath: '/projects/anime', // Menentukan basePath untuk semua routing dan asset
  images: {
    domains: ['cdn.myanimelist.net'], // Mendukung domain untuk memuat gambar eksternal
  },
};

export default nextConfig; // Export konfigurasi dengan benar
