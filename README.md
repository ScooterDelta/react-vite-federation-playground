# react-vite-federation-playground

A playground for experiments with React 18+ Native Federation using Vite.

This project is configured as a mono repo, but configuration should be kept specific to different modules - this 

## Goals

- Set up a micro frontend host supporting React with Vite
  - The host should supply a rendered header menu
  - The host should provide top level routing
- Set up two micro frontend clients supoprting React with Vite
- Set up best practices for general purpose tools
  - ESLint, Vite, React Router, React Query, Prettier, Editor Config
- Set up a Docker Container for the root application than can be easily "run" by the clients for debugging.
  - Focus on a clean developer experience for independent UI apps outside of the container.

### Tools

- [@module-federation/vite](https://www.npmjs.com/package/@module-federation/vite)
- [vite](https://vitejs.dev/guide/)
- Linting tools:
  - [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
  - [typescript-eslint](https://typescript-eslint.io/linting/configs/)
  - [eslint-plugin-jsdoc](https://www.npmjs.com/package/eslint-plugin-jsdoc)
  - [Prettier - Integrating with Linters](https://prettier.io/docs/en/integrating-with-linters.html)
  - [ESLint flat configuration](https://eslint.org/blog/2022/08/new-config-system-part-2/)
- [NPM Workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces)
  - This is used to accelerate the POC process, so independent dependencies are easier to manage.

## Rough Notes

- Scaffolding applications was done with `Vite`
  - `npm create vite@latest @react-playground/<app> -- --template react-ts`
