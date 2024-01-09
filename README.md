# react-multi-module-exports-example

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

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
