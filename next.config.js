/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [75, 80, 100],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "yupawzoegpjfrnenlprn.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/**",
      },
    ],
  },
  reactCompiler: true,
  // output: "export",
};

module.exports = nextConfig;
