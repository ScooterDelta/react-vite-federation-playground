# react-vite-federation-playground

A playground for experiments with React 18+ Native Federation using Vite.

This project is configured as a mono repo, but configuration should be kept specific to different modules.

## Goals

- [ ] Set up a micro frontend host supporting React with Vite
  - [ ] The host should supply a rendered header menu
  - [ ] The host should provide top level routing
- [x] Set up two micro frontend clients supporting React with Vite
- [ ] Set up best practices for general purpose tools
  - [ ] ESLint, Vite, React Router, React Query, Prettier, Editor Config
- [ ] Set up a Docker Container for the root application than can be easily "run" by the clients for debugging.
  - [ ] Focus on a clean developer experience for independent UI apps outside of the container.

### Stretch Goals

- [ ] Set up SSR or Edge SSR for initial page load and router initialization support
- [ ] Set up MonoRepo supporting / restrictive tools (e.g. `eslint-plugin-import` and `eslint-plugin-boundaries`)
- [ ] Set up dynamic routing support - loading Micro Applications from API Endpoint registry.

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
  - [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)
    - [eslint-plugin-boundaries](https://www.npmjs.com/package/eslint-plugin-boundaries)
- [NPM Workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces)
  - This is used to accelerate the POC process, so independent dependencies are easier to manage.
- [React Query](https://tanstack.com/query/latest)
  - [React Query with GraphQL](https://tanstack.com/query/latest/docs/react/graphql) - use an open GraphQL API to test.
- [A Plugin-Based Frontend using Module Federation](https://malcolmkee.com/blog/a-plugin-based-frontend-with-module-federation/)
  - Useful blog post around how someone setup module federated react router

#### More Investigation Required

- [Vitedge](https://vitedge.js.org/)
  - A Vite ESR Framework - handles SSR for first load ONLY (might help with router initialization)
  - Alternatively, [Vite SSR](https://github.com/frandiox/vite-ssr) can be used to achieve similar (used by `Vitedge`)
- [vite-plugin-checker](https://vite-plugin-checker.netlify.app/introduction/getting-started.html) to enable `typescript` checks on build
  - Additionally add a [VSCode Background Task Problem Matcher](https://code.visualstudio.com/Docs/editor/tasks#_background-watching-tasks), see the template on [vite-plugin-checker/issues/95](https://github.com/fi3ework/vite-plugin-checker/issues/95).

## Rough Notes

- Scaffolding applications was done with `Vite`
  - `npm create vite@latest @react-playground/<app> -- --template react-ts`
- Getting Started:
  - `npm install` in root
  - `npm run build --workspaces` (Runs in all workspaces)
    - `npm run build -w clients/mfe-one`
- **NOTE**: Had to update the build target for vite to `esnext`
  - This may cause browser incompatability - check min browser requirements with Matt.
  - Can be limited through the [vite module federation plugin configuration](https://github.com/originjs/vite-plugin-federation#error-top-level-await-is-not-available-in-the-configured-target-environment) for top level await.
- **NOTE**: The vite server does not serve assets while running in `dev` mode, therefore client apps need to be run with `preview`
  - This is on the [vite-plugin-federation](https://github.com/originjs/vite-plugin-federation#testing-in-dev-mode) docs under "Testing in Dev"
- Adding new applications
  - Generate new application using Vite template
  - Configure `vite.config.ts` to set up module federation
  - Create `routes.tsx` which exports a list of `RouteObject`
  - Add the new microfrontend to the host `routes.tsx` and create a `<mfe-name>/routes` module declaration in `@types`
  - Add the new microfrontend to the host `vite.config.ts` and add configuration for environment variable

### First Time Setup

- By default services will run on `localhost`, with the following ports
  - Host -> `http://localhost:5400`
  - MFE One -> `http://localhost:5401`
  - MFE Two -> `http://localhost:5402`
- Ports can be customized by setting the `SERVER_HOST` and `SERVER_PORT` variables
  - These can be easily adjusted by creating a `.env` file from the `.env.example` in each module.

### Routing

- Routing is defined by submodules / MFE Applications, and is loaded via the `routes` file.
  - **NOTE** Conflicting routes will not be loaded, only the first will be loaded (if an MFE is misconfigured, it will not load).
