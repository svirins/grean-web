/** @type {import("next").NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io", // Sanity images
      },
    ],
    // formats: ['image/webp']
  },
  // async headers() {
  //   return [
  //     {
  //       source: "/(.*)",
  //       headers: [
  //         {
  //           key: "Content-Security-Policy",
  //           value: cspHeader.replace(/\n/g, ""),
  //         },
  //       ],
  //     },
  //   ];
  // },
};

export default nextConfig;

const cspHeader = `
    default-src 'self';
    connect-src https://*.algolia.net https://*.algolianet.com https://*.algolia.io;
    script-src 'self' 'unsafe-eval' 'unsafe-inline';
    style-src 'self' 'unsafe-inline';
    img-src 'self' i.ytimg.com blob: data:;
    frame-src https://*.youtube-nocookie.com/;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    block-all-mixed-content;
    upgrade-insecure-requests;
`;
