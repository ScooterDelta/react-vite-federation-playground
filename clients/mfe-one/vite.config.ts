import federation from '@originjs/vite-plugin-federation';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'mfe-one',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/App',
        './Button': './src/button/Button',
        './Remote': './src/Remote',
      },
      shared: ['react', 'react-dom', 'react-router', 'react-router-dom'],
    }),
  ],
});
