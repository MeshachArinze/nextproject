/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // domains: [
    //   process.env.WORDPRESS_API_URL.match(/(?!(w+)\.)\w*(?:\w+\.)+\w+/)[0], // Valid WP Image domain.
    //   "0.gravatar.com",
    //   "1.gravatar.com",
    //   "2.gravatar.com",
    //   "secure.gravatar.com",
    // ],

    remotePatterns: [
      {
        protocol: "https",
        hostname: "panel.000webhost.com/graphql",
        port: "",
        pathname: "/image/145426814/**",
      },
      
    ],
  },
};

export default nextConfig;
