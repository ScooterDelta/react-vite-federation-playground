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
  - Alternative lib: [originjs/vite-plugin-federation](https://github.com/originjs/vite-plugin-federation)
- [vite](https://vitejs.dev/guide/)
- Linting tools:
  - [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
  - [typescript-eslint](https://typescript-eslint.io/linting/configs/)
  - [eslint-plugin-jsdoc](https://www.npmjs.com/package/eslint-plugin-jsdoc)
  - [Prettier - Integrating with Linters](https://prettier.io/docs/en/integrating-with-linters.html)
  - [ESLint flat configuration](https://eslint.org/blog/2022/08/new-config-system-part-2/)
- [NPM Workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces)
  - This is used to accelerate the POC process, so independent dependencies are easier to manage.
- [React Query](https://tanstack.com/query/latest)
  - [React Query with GraphQL](https://tanstack.com/query/latest/docs/react/graphql) - use an open GraphQL API to test.

## Rough Notes

- Scaffolding applications was done with `Vite`
  - `npm create vite@latest @react-playground/<app> -- --template react-ts`
- Getting Started:
  - `npm install` in root
  - `npm run build --workspaces` (Runs in all workspaces)
    - `npm run build -w clients/mfe-one`

### First Time Setup

- By default services will run on `localhost`, with the following ports
  - Host -> `http://localhost:5400`
  - MFE One -> `http://localhost:5401`
  - MFE Two -> `http://localhost:5402`
- Ports can be customized by setting the `SERVER_HOST` and `SERVER_PORT` variables
  - These can be easily adjusted by creating a `.env` file from the `.env.example` in each module.
