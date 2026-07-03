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
        void: "#05060f",
        abyss: "#0a0d1f",
        surface: "rgba(255,255,255,0.04)",
        zen: {
          cyan: "#38e8ff",
          teal: "#2dd4bf",
          violet: "#8b7cf6",
          pink: "#f472b6",
          gold: "#fbbf24",
        },
        ink: {
          DEFAULT: "#e8ecf8",
          muted: "#94a0c6",
          faint: "#5c6890",
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        aurora:
          "linear-gradient(120deg, #38e8ff 0%, #8b7cf6 50%, #f472b6 100%)",
        "aurora-soft":
          "linear-gradient(120deg, rgba(56,232,255,0.15), rgba(139,124,246,0.15), rgba(244,114,182,0.15))",
      },
      boxShadow: {
        glow: "0 0 40px rgba(139,124,246,0.35)",
        "glow-cyan": "0 0 40px rgba(56,232,255,0.25)",
        card: "0 8px 32px rgba(0,0,0,0.45)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px) rotate(-2deg)" },
          "50%": { transform: "translateY(-22px) rotate(2deg)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "spin-reverse": {
          from: { transform: "rotate(360deg)" },
          to: { transform: "rotate(0deg)" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.15" },
          "50%": { opacity: "0.9" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        dash: {
          to: { strokeDashoffset: "-100" },
        },
        "rise-fade": {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 9s ease-in-out infinite",
        "spin-slow": "spin-slow 30s linear infinite",
        "spin-slower": "spin-slow 50s linear infinite",
        "spin-reverse": "spin-reverse 40s linear infinite",
        twinkle: "twinkle 3.5s ease-in-out infinite",
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        "gradient-x": "gradient-x 8s ease infinite",
        dash: "dash 3s linear infinite",
        "rise-fade": "rise-fade 0.8s ease-out both",
      },
    },
  },
  plugins: [],
};
