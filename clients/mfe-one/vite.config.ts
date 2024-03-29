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
      : 5401;

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
        name: 'mfe-one',
        filename: 'remoteEntry.js',
        exposes: {
          './routes': './src/routes',
          './routes/buttons': './src/routes/buttons',
          './routes/chat': './src/routes/chat',
          './routes/forms': './src/routes/forms',
          './routes/forms/first-form': './src/routes/forms/first-form',
          './routes/forms/second-form': './src/routes/forms/second-form',
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
