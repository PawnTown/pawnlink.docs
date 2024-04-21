const withNextra = require("nextra")({
  output: "export",
  basePath: "/pawnlink.docs",
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
  images: {
    unoptimized: true,
  },
});

module.exports = withNextra();
