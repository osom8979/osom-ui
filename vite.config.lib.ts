import {defineConfig} from 'vite';
import {resolve} from 'path';
import react from '@vitejs/plugin-react-swc';
import dts from 'vite-plugin-dts';

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    dts({
      outDir: resolve(__dirname, 'dist', 'lib'),
      entryRoot: resolve(__dirname, 'src', 'lib'),
      insertTypesEntry: true,
    }),
  ],
  build: {
    outDir: resolve(__dirname, 'dist', 'lib'),
    lib: {
      entry: resolve(__dirname, 'src', 'lib', 'index.ts'),
      name: 'osom-ui',
      formats: ['es', 'umd'],
      fileName: format => `osom-ui.${format}.js`,
    },
    rollupOptions: {
      external: [
        '@fontsource-variable/hahmlet',
        '@fontsource-variable/noto-sans-kr',
        '@fontsource/nanum-gothic-coding',
        'react',
        'react-dom',
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
