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
        accent: "#FFD628",
        accent1: "#071226",
        typefill: "#0066f546",
        inner: "#E8F0FE",
        gray1: "#1a1a1a",
        gray4: "#1a1a1a",
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
