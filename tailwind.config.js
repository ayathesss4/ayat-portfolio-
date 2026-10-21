/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
      },
      colors: {
        paper: "#F7F7F4",
        ink: "#15171C",
        muted: "#5B5F6B",
        line: "#E4E3DE",
        surface: "#FFFFFF",
        accent: {
          DEFAULT: "#3457D5",
          soft: "#EEF1FD",
          dark: "#6E86F5",
        },
        night: {
          bg: "#12141A",
          surface: "#1B1E27",
          line: "#2B2F3B",
          text: "#EDEEF2",
          muted: "#9096A6",
        },
      },
      maxWidth: {
        content: "1120px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(21,23,28,0.04), 0 8px 24px -12px rgba(21,23,28,0.12)",
        cardDark: "0 1px 2px rgba(0,0,0,0.2), 0 8px 24px -12px rgba(0,0,0,0.5)",
      },
    },
  },
  plugins: [],
};
