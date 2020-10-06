module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      fontSize: {
        "8xl": "6rem",
      },
      colors: {
        "primary-red": "#ef0d33",
        "secondary-red": "#cb0b2b",
      },
    },
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "group-hover"],
    translate: ["responsive", "hover", "focus", "active", "group-hover"],
  },
  plugins: [],
};
