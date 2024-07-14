module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://api.timbu.cloud/:path*", // Proxy to Backend
      },
    ];
  },
  images: {
    domains: ["api.timbu.cloud"], // Add your image domain here
  },
};
