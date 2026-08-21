import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        crust: {
          black: "#181210",
          charcoal: "#2A211D",
          cream: "#FBF3E6",
          paper: "#F5EADA",
          ember: "#D6491F",
          "ember-dark": "#B23A17",
          gold: "#E2A94C",
          olive: "#5B6B3F",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 30px -12px rgba(24, 18, 16, 0.35)",
        lift: "0 20px 45px -15px rgba(24, 18, 16, 0.45)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      backgroundImage: {
        "grain": "url('/grain.png')",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-14px) rotate(3deg)" },
        },
      },
      animation: {
        marquee: "marquee 22s linear infinite",
        floatSlow: "floatSlow 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
