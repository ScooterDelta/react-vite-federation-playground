import { federation } from '@module-federation/vite';
import { createEsBuildAdapter } from '@softarc/native-federation-esbuild';
import { reactReplacements } from '@softarc/native-federation-esbuild/src/lib/react-replacements';
import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';

// https://vitejs.dev/config/
export default ({ mode, command }) => {
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
    preview: {
      host: SERVER_HOST,
      port: SERVER_PORT,
    },
    plugins: [
      react(),
      federation({
        options: {
          workspaceRoot: __dirname,
          outputPath: 'dist',
          tsConfig: 'tsconfig.json',
          federationConfig: `module-federation/federation.config.cjs`,
          verbose: false,
          dev: command === 'serve',
        },
        adapter: createEsBuildAdapter({
          plugins: [],
          fileReplacements: reactReplacements.dev,
        }),
      }),
    ],
    build: {
      target: 'esnext',
      cssCodeSplit: false,
      sourcemap: true,
    },
  });
};
