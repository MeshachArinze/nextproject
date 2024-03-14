/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["lucide-react"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bayut-production.s3.eu-central-1.amazonaws.com",
        port: "",
        pathname: "/image/145426814/**",
      },
      {
        protocol: "https",
        hostname: "bayut-production.s3.eu-central-1.amazonaws.com",
        port: "",
        pathname: "/image/110993385/**",
      },
    ],
  },
};

export default nextConfig;
