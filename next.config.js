/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  redirects() {
    return [
      {
        source: "/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/:path*",
        destination: "/:path*",
        permanent: true,
      },
    ];
  },
};
