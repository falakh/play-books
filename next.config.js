/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  redirects() {
    return [
      {
        source: "/",
        destination: "/favorite",
        permanent: true,
      },
      {
        source: "/favorite",
        destination: "/",
        permanent: true,
      },
    ];
  },
};
