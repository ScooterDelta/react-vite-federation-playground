# react-vite-federation-playground

A playground for experiments with React 18+ Native Federation using Vite.

This project is configured as a mono repo, but configuration should be kept specific to different modules.

## Goals

- [x] Set up a micro frontend host supporting React with Vite
  - [x] The host should supply a rendered header menu
  - [x] The host should provide top level routing
  - [x] Set up collapsible sidebar nav for Nested Route Applications (see [drawer.css](https://github.com/saadeghi/daisyui/blob/master/src/components/styled/drawer.css))
- [x] Set up deeply nested routes between host and microapps
- [x] Set up two micro frontend clients supporting React with Vite
- [x] Set up best practices for general purpose tools
  - [x] ESLint, Vite, React Router, React Query, Prettier, Editor Config
- [ ] Set up a Docker Container for the root application than can be easily "run" by the clients for debugging.
  - [ ] Focus on a clean developer experience for independent UI apps outside of the container.
- [x] Set up Source Maps for working (and debugging) locally
  - [x] Disable in higher environments / production builds (opt-in locally).
- [x] Test CSS / Tailwind CSS conflicting definition between host and MicroApps
  - Enabling different columns causes a styling conflict wtih the different applications
  - See blog post below highlighting the issues
- [x] Add demo app that shows conflicting styles - easiest way to do this is rename prefix in `mfe1-` to `host-` and demo

### Stretch Goals

- [ ] Set up SSR or Edge SSR for initial page load and router initialization support
- [ ] Set up MonoRepo supporting / restrictive tools (e.g. `eslint-plugin-import` and `eslint-plugin-boundaries`)
- [ ] Set up dynamic routing support - loading Micro Applications from API Endpoint registry.
  - [ ] Set up [A Plugin-Based Frontend using Module Federation](https://malcolmkee.com/blog/a-plugin-based-frontend-with-module-federation/) so each application can define its routes with display names for top level nav bar
- [ ] Tailwind prettier

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

#### CSS Frameworks

- [daisy UI](https://daisyui.com) is a simple Tailwind framework
  - Using instead of material tailwind due to bug [material-tailwind/issues/299](https://github.com/creativetimofficial/material-tailwind/issues/299)
  - Adds [heroicons](https://heroicons.com/) for style points
- [material-tailwind](https://www.material-tailwind.com) and [github/material-tailwind](https://github.com/creativetimofficial/material-tailwind?ref=material-tailwind)
  - Using this as an experiment to avoid using Material UI and test out Tailwind.
  - Can set up the prettier plugin [prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)
  - [material-tailwind/issues/528](https://github.com/creativetimofficial/material-tailwind/issues/528) causes `placeholder` to be required on all types, can be fixed by downgrading `@types/react` to `18.2.42`
    - Currently fixing by providing `placeholder={undefined}` on components requiring it - remove this when possible.
- Possible issue with overwriting styles with the same name from different applications
  - Possible solutions in blog post [using-tailwindcss-with-module-federation](https://malcolmkee.com/blog/using-tailwindcss-with-module-federation/) - likely best option is to set a tailwind css prefix per app
  - Above blog post used [postcss-prefixer](https://www.npmjs.com/package/postcss-prefixer) as a postprocess step to add prefixes.
  - Test with both calculated tailwind styles and [custom styles](https://tailwindcss.com/docs/adding-custom-styles).

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
- Each app implements its own `<div className="container mx-auto">` in their relative context roots
  - This is to avoid injecting unnecessary padding from the parent application, so if apps want their own sidenav / topnav they can.

### Concerns and Issues

- Router loads all microapps on initial load - this causes concerns around downtime of single apps
  - Could be mitigated by only loading those nested routes once the app loads, and wrap the entire router in a changeable context.
  - Async loading of single pages in the router does not work (with initial tests) - mitigated same as above
- Styles can conflict between hosts and client applications (or between client apps)
  - This is replicable by taking the styles prefix (current workaround) in MFE One (`mfe1-`) and making it `host-`. This will cause render issues in the host application.
  - Possible better solution on [using-tailwindcss-with-module-federation](https://malcolmkee.com/blog/using-tailwindcss-with-module-federation/).
- No interop is provided between host and clients at the moment - this can be changed or made more dynamic.

### First Time Setup

- By default services will run on `localhost`, with the following ports
  - Host -> `http://localhost:5400`
  - MFE One -> `http://localhost:5401`
  - MFE Two -> `http://localhost:5402`
- Ports can be customized by setting the `SERVER_HOST` and `SERVER_PORT` variables
  - These can be easily adjusted by creating a `.env` file from the `.env.example` in each module.

### Routing

- Routing is defined by submodules / MFE Applications, and is loaded via the `routes` file.
  - **NOTE** Conflicting routes will not be loaded, only the first will be loaded (if an MFE is misconfigured, it will not load)
- Lazy Evaluation of sub-routes within applications is currently unsupported
  - Since the application routes need to be loaded when `remoteEntry.js` is initialized
  - This can be mitigated by lazy-loading the micro app sub routes only when that application is loaded (otherwise keep as is)
