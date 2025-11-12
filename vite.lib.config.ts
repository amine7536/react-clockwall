import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';
import { readFileSync } from 'fs';

// Read package.json to get peerDependencies
const packageJson = JSON.parse(
  readFileSync(resolve(__dirname, 'package.json'), 'utf-8')
);

// https://vitejs.dev/guide/build.html#library-mode
export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ['src/components/**/*'],
      exclude: ['src/components/**/*.test.ts', 'src/components/**/*.test.tsx'],
      outDir: 'lib',
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/components/Clock.tsx'),
      name: 'Clock',
      formats: ['es', 'cjs'],
      fileName: (format) => `Clock.${format === 'es' ? 'js' : 'cjs'}`,
    },
    outDir: 'lib',
    sourcemap: true,
    rollupOptions: {
      // Externalize dependencies that shouldn't be bundled
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        ...Object.keys(packageJson.dependencies || {}),
      ],
      output: {
        // Provide global variables to use in the UMD build
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        // Preserve original module structure for better tree-shaking
        preserveModules: false,
      },
    },
  },
});
