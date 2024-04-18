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
      animation: {
        blob: 'blob 7s infinite',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(20px, -20px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-40px, 30px) scale(0.9)',
          },
          '100%': {
            transform: 'tranlate(20px, -10px) scale(1)',
          },
        },
      },
      colors: {
        // primary: '#F5C767',
        // secondary: '#75B4BC',
        // primaryLight: '#F9D99E',
        // secondaryLight: '#8DCAC9',
        // prev secondary #F8D7C8

        primary: '#FDF5ED',
        secondary: '#EDCAB7',
        terciary: '#A77166',
        // '#C66B4D',
        lightBrown: '#A08175',
        darkBrown: '#6D5050',
      },
      backgroundImage: {},
    },
  },
  plugins: [],
};
export default config;
