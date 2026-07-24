import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#05070d",
        graphite: "#0b1020",
        cyanGlow: "#21f5ff",
        limeGlow: "#b7ff4a",
        violetGlow: "#8d5cff"
      },
      boxShadow: {
        glow: "0 0 40px rgba(33, 245, 255, 0.18)",
        card: "0 24px 80px rgba(0, 0, 0, 0.35)"
      },
      backgroundImage: {
        mesh: "radial-gradient(circle at 15% 10%, rgba(33,245,255,.22), transparent 28%), radial-gradient(circle at 85% 0%, rgba(183,255,74,.13), transparent 30%), radial-gradient(circle at 50% 80%, rgba(141,92,255,.2), transparent 34%)"
      }
    }
  },
  plugins: []
};

export default config;
