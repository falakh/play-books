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
    ];
  },
};
