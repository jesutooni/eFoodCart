module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          green: "#2DCA73",
          gray: "#828E87",
          black: "#081E12",
        },
        secondary: {
          lightWhite: "rgba(253, 254, 253, 0.8)",
          white: "rgba(253, 254, 253, 1)",
        },
      },
      fontFamily: {
        "product-sans": ["'product sans'"],
      },
      padding: {
        p8: "8%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
