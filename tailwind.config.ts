// tailwind.config.ts
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        destructive: "var(--destructive)",
        "sidebar-border": "var(--sidebar-border)",
      },
    },
  },
  plugins: [],
};
