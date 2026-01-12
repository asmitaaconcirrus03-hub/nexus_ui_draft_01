/** @type {import('tailwindcss').Config} */
const { designTokens } = require('./config/design-tokens.ts');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand colors
        'hot-pink': designTokens.colors.hotPink,
        'blue': designTokens.colors.blue,
        'navy-blue': designTokens.colors.navyBlue,
        'ice-blue': designTokens.colors.iceBlue,
        'green': designTokens.colors.green,
        
        // Neutral colors
        'white': designTokens.colors.white,
        'background-blue': designTokens.colors.backgroundBlue,
        'stone-grey': designTokens.colors.stoneGrey,
        'cloud-grey': designTokens.colors.cloudGrey,
        
        // Semantic colors
        'text': designTokens.colors.text,
        'icon': designTokens.colors.icon,
        'fill': designTokens.colors.fill,
        'stroke': designTokens.colors.stroke,
        'layout': designTokens.colors.layout,
      },
      fontFamily: {
        title: designTokens.fontFamily.title,
        body: designTokens.fontFamily.body,
        secondary: designTokens.fontFamily.secondary,
      },
      fontSize: {
        '12': designTokens.fontSize['12'],
        '14': designTokens.fontSize['14'],
        '16': designTokens.fontSize['16'],
        '20': designTokens.fontSize['20'],
        '24': designTokens.fontSize['24'],
        '32': designTokens.fontSize['32'],
      },
      fontWeight: {
        regular: designTokens.fontWeight.regular,
        medium: designTokens.fontWeight.medium,
      },
      spacing: {
        '0': designTokens.spacing['0'],
        '4': designTokens.spacing['4'],
        '8': designTokens.spacing['8'],
        '12': designTokens.spacing['12'],
        '14': designTokens.spacing['14'],
        '16': designTokens.spacing['16'],
        '22': designTokens.spacing['22'],
        '24': designTokens.spacing['24'],
        '40': designTokens.spacing['40'],
      },
      padding: {
        '2': designTokens.padding['2'],
        '4': designTokens.padding['4'],
        '8': designTokens.padding['8'],
        '12': designTokens.padding['12'],
        '14': designTokens.padding['14'],
        '16': designTokens.padding['16'],
        '22': designTokens.padding['22'],
      },
      borderRadius: {
        '4': designTokens.borderRadius['4'],
        '6': designTokens.borderRadius['6'],
        '8': designTokens.borderRadius['8'],
        '24': designTokens.borderRadius['24'],
      },
    },
  },
  plugins: [],
};
