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
        // primary: '#F5C767',
        // secondary: '#75B4BC',
        // primaryLight: '#F9D99E',
        // secondaryLight: '#8DCAC9',
        primary: '#FDF5ED',
        secondary: '#F8D7C8',
        terciary: '#C66B4D',
        darkBrown: '#6D5050',
      },
      backgroundImage: {},
    },
  },
  plugins: [],
};
export default config;
