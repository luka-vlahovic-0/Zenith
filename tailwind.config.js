/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "zenfi-purple": "#271259",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'zenfi-gradient': 'linear-gradient(to right, #0a0228, #2a0d45)', 
      },
    },
  },
  plugins: [],
};
