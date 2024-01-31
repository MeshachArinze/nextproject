/** @type {import('next').NextConfig} */

import { withContentlayer } from "next-contentlayer";

const nextConfig = {
  compiler: {
    removeConsole: true,
  },
  reactStrictMode: true,
  swcMinify: true,
};

export default withContentlayer({ ...nextConfig });
