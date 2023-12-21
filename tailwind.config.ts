import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/common/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          "gray-900": "#161E2E",
          "gray-800": "#252F3F",
          "gray-700": "#374151",
          "gray-600": "#4B5563",
          "gray-500": "#6B7280",
          "gray-400": "#9FA6B2",
          "gray-300": "#D2D6DC",
          "gray-200": "#E5E7EB",
          "gray-100": "#F4F5F7",
          "gray-50": "#F9FAFB",
        },
      },
    },
  },
  plugins: [],
};
export default config;
