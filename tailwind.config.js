const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        primary: '#2bc4d4',
        secondary: colors.teal['500'],
      },
    },
  },
  variants: {},
  plugins: [],
};
