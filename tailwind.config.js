/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    fontFamily: {
      Poppins: ["Poppins, sans-serif"],
      DM: "[DM Sans, sans-serif]",
      playfair: ["Playfair Display, serif"],
    },

    extend: {
      spacing: {
        "1px": "1px",
        "70%": "70%",
      },

      colors: {
        body: "#F4F7FA",
        primary: "#019668",
        primaryDark: "#004630",
        accent: "#FFD628",
        accent1: "#071226",
        typefill: "#0066f546",
        typefilltrans: "#0066f510",
        typeGray: "#909090",
        inner: "#E8F0FE",
        innerAccent: "#fff5c8",
        gray1: "#1a1a1a",
        gray2: "#1e1e1e",
        gray4: "#505050",
      },

      screens: {
        "mini-screen": { raw: "(max-height: 715px) and (max-width: 640px)" },
        "min-wide-screen": {
          raw: "(max-height: 833px) and (min-width: 1024px)",
        },
      },
    },

    // container: {
    //   center: true,
    //   maxWidth:
    // },
  },
  plugins: [],
};
