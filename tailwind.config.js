/** @type {import("tailwindcss").Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        sand: "#f6efe7",
        ink: "#152033",
        sage: "#b8c8bb",
        blush: "#f3d6cf",
        mist: "#e7eff1",
      },
      boxShadow: {
        card: "0 24px 80px rgba(15, 23, 42, 0.12)",
        float: "0 18px 50px rgba(148, 163, 184, 0.16)",
      },
      fontFamily: {
        display: ["Georgia", "serif"],
        body: ["ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
