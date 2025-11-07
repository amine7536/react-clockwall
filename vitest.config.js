import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './test/setup.js',
    css: true,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html', 'lcov'],
      include: ['src/**/*.{js,jsx}'],
      exclude: [
        'node_modules/',
        'test/',
        'dist/',
        'lib/',
        'docs/',
        'demo/',
        '*.config.js',
        '**/*.config.js',
        'gulpfile.babel.js',
      ],
    },
  },
});
