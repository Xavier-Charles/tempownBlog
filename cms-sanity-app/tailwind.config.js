const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Campton", ...defaultTheme.fontFamily.sans],
        serif: ["dm-serif", ...defaultTheme.fontFamily.serif],
        mono: [...defaultTheme.fontFamily.mono],
      },
      fontSize: {
        "sm-15": "0.9375rem", //15px
      },
      colors: {
        "temp-primary": "var(--color-primary)",
        "temp-secondary": "var(--color-secondary)",
        "temp-green": {
          DEFAULT: "var(--color-green-default)",
          light: "var(--color-light-green)",
          100: "var(--color-light-green-100)",
          200: "var(--color-light-green-200)",
          500: "var(--color-light-green-500)",
        },
        "temp-info": "var(--color-info)",
        "temp-gray": {
          DEFAULT: "var(--color-gray)",
          light: "var(--color-light-gray)",
        },
        "temp-white": "var(--color-white)",
        "temp-orange": "var(--color-orange)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
