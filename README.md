# react-multi-module-exports-example

## Config used

This example is to export multiple modules using vite + rollup config

```
//vite.config.ts
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
```

## Usage

This library can be consumed as

```
//Example of usage
import Button from 'react-multi-module-exports-example/button'
```
