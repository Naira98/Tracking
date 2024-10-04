export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      red: { primary: "#e30818", secondary: "#ef4444", tertiary: "#b91c1c" },
      gray: { primary: "#a1a1a1", secondary: "#fafafa" },
      green: "#22c55e",
      yellow: "#facc15",
      white: "#ffffff",
      slate: "#f1f5f9",
      black: "#0f172a",
      sky: '#f3fafb'
    },
    fontFamily: {
      cairo: ["Cairo"],
    },
  },
  plugins: [],
};
