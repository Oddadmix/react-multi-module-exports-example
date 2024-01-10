# react-multi-module-exports-example

## Config used

This example is to export multiple modules using vite + rollup config
Update config to the entry file and once for each module

```ts
//vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({ include: ['lib'] })],
  build: {
    lib: {
      entry: [
        resolve(__dirname, 'lib/main.ts'),
        resolve(__dirname, 'lib/Button'),
        resolve(__dirname, 'lib/Input'),
      ],
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
    },
  },
});
```

- Make sure to create a file to each set to exports in a module similar to `lib/Button.ts` and `lib/Input.ts` (This will generate the `Module.d.ts` to be used for types for the module)
- Run `npm run build`
- Copy `package.json` to `dist/`
- cd to `dist` and run `npm pack`
- then run `npm publish` to publish to the configured registry or `npm install tar.gz` file generated directly

## Usage

This library can be consumed as

```
//Example of usage
import { Button } from 'react-multi-module-exports-example/Button'
```
