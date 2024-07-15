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
    domains: ["app.timbu.cloud"], 
  },
};
