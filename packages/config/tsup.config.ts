import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['./src/**/*.ts'],
  splitting: true,
  outDir: 'dist',
  target: 'node16',
  platform: 'node',
  format: ['esm', 'cjs'],
  sourcemap: false,
  treeshake: true,
  minify: false,
  clean: true,
  shims: true,
  dts: true,
});
