/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "image.cnbcfm.com",
      "moz.com",
      "www.washingtonpost.com",
      "media.wired.com",
      "static01.nyt.com",
      "www.peacemakersnetwork.org",
    ],
  },
  plugins: [require("@tailwindcss/line-clamp")],
  // reactStrictMode: true,
};

// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "**",
//       },
//     ],
//   },
// };

module.exports = nextConfig;
