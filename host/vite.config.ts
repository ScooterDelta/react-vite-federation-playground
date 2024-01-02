import federation from '@originjs/vite-plugin-federation';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'host-app',
      remotes: {
        mfe_one: 'http://localhost:3501/assets/remoteEntry.js',
        mfe_two: 'http://localhost:3502/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom', 'react-router', 'react-router-dom'],
    }),
  ],
});
