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
      : 5402;

  return defineConfig({
    server: {
      host: SERVER_HOST,
      port: SERVER_PORT,
    },
    plugins: [
      react(),
      federation({
        name: 'mfe-two',
        filename: 'remoteEntry.js',
        exposes: {
          './App': './src/App',
          './Button': './src/button/Button',
          './Remote': './src/Remote',
        },
        shared: ['react', 'react-dom'],
      }),
    ],
    build: {
      target: 'esnext',
    },
  });
};
