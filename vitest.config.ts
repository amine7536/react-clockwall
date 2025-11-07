import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // @ts-expect-error - Vite version mismatch between vite and vitest
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './test/setup.ts',
    css: true,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html', 'lcov'],
      include: ['src/**/*.{js,jsx,ts,tsx}'],
      exclude: [
        'node_modules/',
        'test/',
        'dist/',
        'lib/',
        'docs/',
        'demo/',
        '*.config.js',
        '*.config.ts',
        '**/*.config.js',
        '**/*.config.ts',
        'gulpfile.babel.js',
      ],
    },
  },
});
