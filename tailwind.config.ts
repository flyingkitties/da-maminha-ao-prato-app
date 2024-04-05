import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      poppins: ['var(--font-poppins)'],
    },
    extend: {
      colors: {
        powder: '#BFD8D2',
        peach: '#FEDCD2',
        lightGreen: '#ebfed2',
        lightPurple: '#d2dafe',
        brown1: '#a9928c',
        brown2: '#d3b7af',
        greyScale: '#e8e8e8',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
