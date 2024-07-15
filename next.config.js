module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination:
          "https://timbu-get-all-products.reavdev.workers.dev/:path*",
      },
    ];
  },
  images: {
    domains: ["timbu-get-all-products.reavdev.workers.dev", "api.timbu.cloud"],
  },
};
