/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: "#fff",
      black: "#000",
      primary: {
        DEFAULT: "#049E76",
        light: "#00FFBD",
      },
      secondary: "#000",
      red: {
        DEFAULT: "#D92832",
        light: "#F3C1C3",
      },
      green: {
        light: "#E7F3E3",
        dark: "#A1B999",
        darker: "#2C322B",
      },
      orange: {
        light: "#FFE7D2",
      },
      blue: {
        DEFAULT: "#4285F4",
        light: "#C8EAF4",
      },
      cyan: {
        DEFAULT: "#007AA0",
      },
      yellow: {
        light: "#FFFAC2",
      },
      orange: {
        light: "#FFE7D2",
      },
      pink: {
        DEFAULT: "#EC008C",
        light: "#FFE9F6",
      },
      gray: {
        DEFAULT: "#00FFBD",
        light: "#D0D0D0",
        dark: "#3A3A3A",
        100: "#f8f8f8",
        200: "#eeeeee",
        300: "#dee2e6",
        400: "#c4c4c4",
        500: "#8e8e8e",
        600: "#666666",
        700: "#4d4d4d",
        800: "#3a3a3a",
        900: "#2b2b2b",
      },
    },

    backgroundImage: {
      "primary-gradient": "linear-gradient(to bottom, #22856B, #049E76)",
      "light-gradient": "radial-gradient(circle, #f249c817 -15%, #2d5f5217 50%)",
      "dark-gradient1": "radial-gradient(ellipse at top right, #EBABE9, #020202);",
      "dark-gradient2": "radial-gradient(ellipse at top right, #A3A3CA, #020202);",
      "dark-gradient3": "radial-gradient(ellipse at top right, #7C67B0, #020202);",
      "dark-gradient4": "radial-gradient(ellipse at top right, #37A184, #020202);",
    },

    fontFamily: {
      sans: ['"Neue Haas Grotesk Display Pro"', "sans-serif"],
    },

    fontSize: {
      xs: "0.75rem", //12px
      sm: "0.875rem", //14px
      base: "1rem", //16px
      md: "1.125rem", //18px
      lg: "1.25rem", //20px
      xl: "1.375rem", //22px
      h1: "5.5rem", //88px
      h2: "4.5rem", //72px
      h3: "3.5rem", //56px
      h4: "2.625rem", //42px
      h5: "2rem", //32px
      h6: "1.5rem", //24px
    },

    fontWeight: {
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
    },

    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        sm: "1.5rem",
        md: "1.5rem",
        lg: "1.5rem",
        xl: "1.5rem",
        xxl: "4.375rem",
      },

      screens: {
        sm: "100%",
        md: "100%",
        lg: "100%",
        xl: "100%",
        xxl: "1440px",
      },
    },

    spacing: {
      0: "0",
      1: "0.25rem",
      2: "0.5rem",
      3: "0.75rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem",
      11: "2.75rem",
      12: "3rem",
      13: "3.25rem",
      14: "3.5rem",
      15: "3.75rem",
      16: "4rem",
      17: "4.25rem",
      18: "4.5rem",
      19: "4.75rem",
      20: "5rem",
      21: "5.25rem",
      22: "5.5rem",
      23: "5.75rem",
      24: "6rem",
      25: "6.25rem",
      26: "6.5rem",
      27: "6.75rem",
      28: "7rem",
      30: "7.5rem",
    },

    borderRadius: {
      none: "0",
      sm: ".125rem",
      DEFAULT: "0.25rem",
      lg: ".5rem",
      xl: "2rem",
      full: "9999px",
    },
  },

  plugins: [],
};
