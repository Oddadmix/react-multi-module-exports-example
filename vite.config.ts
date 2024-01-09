import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({ include: ['lib'] })],
  build: {
    rollupOptions: {
      input: {
        //Entry points for the library, so that it cane be imported as:
        // import Button from 'my-lib/Button'
        button: resolve(__dirname, 'lib/components/Button/index.tsx'),
        input: resolve(__dirname, 'lib/components/Input/index.tsx'),
      },
      external: ['react', 'react/jsx-runtime'],
    },
  },
});
