import federation from '@originjs/vite-plugin-federation';
import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd(), '') };

  const SERVER_HOST = process.env.SERVER_HOST ?? '0.0.0.0';
  const SERVER_PORT =
    process.env.SERVER_PORT != undefined
      ? parseInt(process.env.SERVER_PORT)
      : 5400;
  const MFE_ONE_URL =
    process.env.MFE_ONE_URL ?? 'http://localhost:5401/assets/remoteEntry.js';
  const MFE_TWO_URL =
    process.env.MFE_TWO_URL ?? 'http://localhost:5402/assets/remoteEntry.js';

  return defineConfig({
    server: {
      host: SERVER_HOST,
      port: SERVER_PORT,
    },
    preview: {
      host: SERVER_HOST,
      port: SERVER_PORT,
    },
    plugins: [
      react(),
      federation({
        name: 'host-app',
        remotes: {
          'external/mfe-one': MFE_ONE_URL,
          'external/mfe-two': MFE_TWO_URL,
        },
        shared: ['react', 'react-dom', 'react-router-dom'],
      }),
    ],
    build: {
      target: 'esnext',
      cssCodeSplit: false,
      sourcemap: true,
    },
  });
};
