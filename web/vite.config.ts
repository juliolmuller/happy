import reactSwcPlugin from '@vitejs/plugin-react-swc';
import path from 'node:path';
import rollupAnalyzerPlugin from 'rollup-plugin-analyzer';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactSwcPlugin()],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      plugins: [rollupAnalyzerPlugin()],
    },
  },
});
