/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'scontent-lhr8-2.cdninstagram.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'scontent-lhr8-1.cdninstagram.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'scontent-lhr6-2.cdninstagram.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'scontent-lhr6-1.cdninstagram.com',
        port: '',
      },
    ],
  },
};

export default nextConfig;
