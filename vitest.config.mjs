import { defineConfig } from 'vitest/config';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    include: ['tests/**/*.test.mjs'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: ['node_modules/', 'tests/']
    }
  },
  resolve: {
    alias: {
      '@root': path.resolve(__dirname, './'),
      '@apps': path.resolve(__dirname, './apps'),
      '@sessions': path.resolve(__dirname, './sessions'),
      '@shared': path.resolve(__dirname, './packages/shared-assets'),
    }
  }
});
