import typography from '@tailwindcss/typography';
import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  prefix: 'mfe1d-',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [typography(), daisyui],
  daisyui: {
    themes: ['light', 'dark', 'coffee', 'halloween', 'cyberpunk', 'valentine'],
  },
};
