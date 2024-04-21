/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,md,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,md,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,md,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#121212",
        foreground: "#FEFEFE",
        divider: "#A3A3A3",
        content1: "#1D1D1D",
        content2: "#262626",
        primary: {
          DEFAULT: "#C38FFF",
          foreground: "#FFFFFF",
          background: "#000000",
        },
        secondary: {
          DEFAULT: "#C05569",
          foreground: "#FFFFFF",
          background: "#000000",
        },
        success: {
          DEFAULT: "#93BF0F",
          foreground: "#FFFFFF",
          background: "#000000",
        },
        warning: {
          DEFAULT: "#FDC84C",
          foreground: "#FFFFFF",
          background: "#000000",
        },
        error: {
          DEFAULT: "#FF3B30",
          foreground: "#FFFFFF",
          background: "#000000",
        },
      },
    },
  },
  plugins: [],
};
