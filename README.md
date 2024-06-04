# Starter App
This is my extension of the default Vite + TS starter app. I have included the following packages to help me get up and running quickly:
- [ShadCN](https://ui.shadcn.com/)
- [TanStack Query](https://tanstack.com/query/latest) (plus [DevTools](https://tanstack.com/query/latest/docs/framework/react/devtools))
- [Axios](https://axios-http.com/docs/intro)
- [Framer Motion](https://www.framer.com/motion/)
- [Auto-Animate](https://auto-animate.formkit.com/)
- [Vitest](https://vitest.dev/)
- [Zustand](https://docs.pmnd.rs/zustand)

The commands to get going are what you'd expect:
- `npm run dev` to start the dev server
- `npm run build` to build
- `npm test` to run tests

### Theming
Feel free to theme however you wish. I highly reccomend using [Shadcn UI Theme Generator](https://zippystarter.com/tools/shadcn-ui-theme-generator) as a base.
I have included an implementation of the [theme provider](https://ui.shadcn.com/docs/dark-mode/vite) as described on the ShadCn website.

### Icons
I have included `@radix-ui/react-icons` and `lucide-react` as they are reccomended and used by ShadCn.

## TODO:
###### My goal is for this repo to be an example of how to use these various tools for my own reference as well as a starting point for building apps in the future.

- [ ] Example of using TanStack Query with Axios
- [ ] Example Vitest Tests
- [ ] Example Usage of Framer Motion
- [ ] Example Zustand usage
- [x] Example AutoAnimate usage

###### The default README contents are below for reference:

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

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
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
