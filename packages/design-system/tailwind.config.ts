import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './node_modules/@repo/design-system/components/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './providers/**/*.{ts,tsx}',
  ],
  theme: {},
  plugins: [],
};

export default config;
