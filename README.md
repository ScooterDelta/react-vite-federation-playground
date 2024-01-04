# React Vite Federation (Micro Frontends) Playground

This repo is for experimenting and creating a basic Proof of Concept (PoC) of utilizing Module Federation in a Vite project, with React as the rendering framework.

The project is currently configured as a [Monorepo](https://monorepo.tools/) to accelerate initial development and experimentation, however this will likely be split into a Polyrepo when a full production implementation is created.

## How does it Work?

This application uses [originjs/vite-plugin-federation](https://github.com/originjs/vite-plugin-federation), [react](https://react.dev/) and [react-router](https://reactrouter.com/en/main) to provide a cohesive micro frontend playground application. This allows the application harness (or `host`) to pull in other applications via their `remoteEntry.js` entrypoints.

![Micro Frontend Harness](./assets/microfrontend-harness.png)

Currently, the external applications are loaded via their `routes` configuration, meaning that all applications are retrieved when the router is initialized. See [Roadmap / Stretch Goals](#stretch-goals) for some possible improvements around this.

## How to consume this playground?

## Getting Started

1. Install dependencies, by running `npm install` in the root folder.
1. Start the applications by opening the project in [VSCode](https://code.visualstudio.com/) and using the `Watch All MFE Applications` debug configuration.
    - Alternatively, the applications can be started manually by following the steps in [Starting Manaully](#starting-manually) below.
1. Open the Host Application on <http://localhost:5400> (default port)
    - The Micro Frontend applications can be accessed directly on <http://localhost:5401> for `mfe-one` and <http://localhost:5402> for `mfe-two`

> **Note**: Currently the Vite Plugin for Module Federation does not support live reloading via `vite dev` on client (MFE) applications, only on the host. Due to this the MFE Applications run with `vite build --watch` and `vite preview` commands, meaning that changes are only loaded after a browser refresh.

### Debugging

It is possible to debug the applications while they are running locally since the micro frontend applications are built with `sourcemap` enabled (see [host/vite.config.js](./host/vite.config.ts)). In order to debug just follow the below steps:

1. Ensure the applications are running (see [Getting Started](#getting-started) or [Starting Manually](#starting-manually)).
1. In [VSCode](https://code.visualstudio.com/) start the `Edge: Debug Host Application` configuration.
    - This will open an instance of the Edge Browser with a debug session open, attach breakpoints across files in each application and they will execute as expected.

If you would like to see more of how this works, see the [.vscode/launch.json](./.vscode/launch.json) in the root of this repository.

### Starting Manually

Starting the application manually is as simple as starting each of the component applications, which can be done with the following:

- Start the Host application by running `npm run dev` in the `host/` folder.
- Start MFE One by running `npm run build:watch` and `npm run preview` in the `clients/mfe-one/` folder.
- Start MFE Two by running `npm run build:watch` and `npm run preview` in the `clients/mfe-two/` folder.

> **Note**: `npm run build:watch` will start a file watcher and automatically rebuild the application, `npm run preview` will serve the assets. They will need to be run in separate terminals as `npm run build:watch` will continue to watch for changes.

## Findings and Concerns

### Dev Mode and Development Experience

### Styling

### Routing and Lazy Evaluation

### Server-Side Rendering (SSR) and Edge-Side Rendering (ESR)

## Tools Overview

## Roadmap

- [x] Configure and integrate sample host application and multiple micro-applications.
- [x] Configure best practices development tooling (VSCode, ESLint, Prettier, Markdownlint, Editor Config).
- [x] Set up Client Side Routing using [react-router](https://reactrouter.com/en/main).
  - [x] Allow routes to be configured by client Micro Frontend Applications (MFE).
  - [x] Add deeply nested routes from Micro Applications that can be navigated by host (see `mfe-one`).
- [x] Set up CSS Framework to experiment with styling interactions and side effects (using [tailwindcss](https://tailwindcss.com/) and [DaisyUI](https://daisyui.com)).
- [x] Enable Debug configuration for UI Applications with VSCode (one-click development experience).
  - [x] Enable source maps while working locally to enable client side debugging across all apps.
  - [x] Enable file watching across all Micro Applications for easier development experience.
- [x] Set up inter-application communication via a simple event bus (using [browser document API](https://developer.mozilla.org/en-US/docs/Web/API/Document) and [event listeners](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget)).
- [ ] Docker Container for micro frontend applications and `docker-compose` configuration to allow easy development of Micro Applications in isolated repositories

### Stretch Goals

- [ ] Set up dynamic routing support - loading Micro Applications from API Endpoint registry and lazy initialization of micro frontend applications.
- [ ] Create plugin based interface for registering applications ([A Plugin-Based Frontend using Module Federation](https://malcolmkee.com/blog/a-plugin-based-frontend-with-module-federation/))
- [ ] Set up SSR or Edge SSR for initial page load and router initialization support
- [ ] Add monorepo import restrictions and boundaries ([eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import) and [eslint-plugin-boundaries](https://www.npmjs.com/package/eslint-plugin-boundaries))
