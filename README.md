# React Vite Federation (Micro Frontends) Playground

This repo is for experimenting and creating a basic Proof of Concept (PoC) of utilizing Module Federation in a Vite project, with React as the rendering framework.

The project is currently configured as a [Monorepo](https://monorepo.tools/) to accelerate initial development and experimentation, however this will likely be split into a Polyrepo when a full production implementation is created.

## How does it Work?

This application uses [@originjs/vite-plugin-federation](https://github.com/originjs/vite-plugin-federation), [react](https://react.dev/) and [react-router](https://reactrouter.com/en/main) to provide a cohesive micro frontend playground application. This allows the application harness (or `host`) to pull in other applications via their `remoteEntry.js` entrypoints.

![Micro Frontend Harness](./assets/microfrontend-harness.png)

Currently, the external applications are loaded via their `routes` configuration, meaning that all applications are retrieved when the router is initialized. See [Roadmap / Stretch Goals](#stretch-goals) for some possible improvements around this.

## How to consume this playground?

This project serves as a bit of a sample application to show a possible configuration of Micro Frontend Applications in React using Vite. There are additional example applications available on the [vite-plugin-federation](https://github.com/originjs/vite-plugin-federation#example-projects) docs for reference.

If you would just like to run the playground to experiment, feel free to fork this repository and run the [Getting Started](#getting-started) guide. Otherwise a detailed guide is provided on how to [Scaffold Applications](#scaffolding-applications), and another on [Findings and Concerns](#findings-and-concerns). Please see the below contents for more.

- [Getting Started](#getting-started)
  - [Debugging](#debugging)
  - [Starting Manually](#starting-manually)
  - [Customizing Ports and URLs](#customizing-ports-and-urls)
  - [Project Layout](#project-layout)
- [Scaffolding Applications](#scaffolding-applications)
  - [Configuring Module Federation](#configuring-module-federation)
  - [Configuring React Router](#configuring-react-router)
  - [Configuring Tailwind](#configuring-tailwind)
- [Findings and Concerns](#findings-and-concerns)
  - [Typescript and Type Safety](#typescript-and-type-safety)
  - [Dev Mode and Development Experience](#dev-mode-and-development-experience)
  - [Styling](#styling)
    - [Tailwind Prefix](#tailwind-prefix)
    - [Twin.Macro](#twinmacro)
    - [Postcss Build-time Prefixer](#postcss-build-time-prefixer)
  - [Routing and Lazy Evaluation](#routing-and-lazy-evaluation)
    - [Opinionated Initialization](#opinionated-initialization)
    - [Extended Routing](#extended-routing)
  - [Alternatives - Native Federation](#alternatives---native-federation)
  - [Host and Client Interop](#host-and-client-interop)
  - [Server-Side Rendering (SSR) and Edge-side Rendering (ESR)](#server-side-rendering-ssr-and-edge-side-rendering-esr)
  - [Browser Compatibility](#browser-compatibility)
- [Roadmap](#roadmap)
  - [Stretch Goals](#stretch-goals)

## Getting Started

1. Install dependencies, by running `npm install` in the root folder.
1. Start the applications by opening the project in [VSCode](https://code.visualstudio.com/) and using the `Watch All MFE Applications` debug configuration.
    - Alternatively, the applications can be started manually by following the steps in [Starting Manaully](#starting-manually) below.
1. Open the Host Application on <http://localhost:5400> (default port)
    - The Micro Frontend applications can be accessed directly on <http://localhost:5401> for `mfe-one` and <http://localhost:5402> for `mfe-two`

> **Note**: Currently the Vite Plugin for Module Federation does not support live reloading via `vite dev` on client (MFE) applications, only on the host. Due to this the MFE Applications run with `vite build --watch` and `vite preview` commands, meaning that changes are only loaded after a browser refresh.

### Debugging

It is possible to debug the applications while they are running locally since the micro frontend applications are built with `sourcemap` enabled (see [host/vite.config.ts](./host/vite.config.ts)). In order to debug just follow the below steps:

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

### Customizing Ports and URLs

The default ports for applications for local development are selected to work together, however they can be updated at any time. They are currently driven by the following Environment Variables in each application:

- `SERVER_HOST` - Currently defaulted to `0.0.0.0`.
- `SERVER_PORT` - Currently defaulted for each application:
  - `host` -> `5400`
  - `clients/mfe-one` -> `5401`
  - `clients/mfe-two` -> `5402`

Additionally, the `host` application must be made aware of the client applications new routes, which can be customized with the following environment variables on the `host` application:

- `MFE_ONE_URL` - Currently defaulted to `http://localhost:5401/assets/remoteEntry.js`
- `MFE_TWO_URL` - Currently defaulted to `http://localhost:5402/assets/remoteEntry.js`
- `MFE_ONE_DYN_URL` - Currently defaulted to `http://localhost:5403/assets/remoteEntry.js`

These can all be customized with the use of a `.env` file in each directory, an `.env.example` file is provided to copy-paste and customize.

### Project Layout

The application is currently split between the purposes of the applications, which ends with the following:

- [host](./host/README.md)
- `clients/`
  - [mfe-one](./clients/mfe-one/README.md)
  - [mfe-two](./clients/mfe-two/README.md)
  - [mfe-one-dyn](./clients/mfe-one-dyn/README.md)
- `packages/`
  - [federation](./packages/federation/README.md)

The `host` application contains the logic to initialize and call out to the micro frontend applications defined in the `clients/*` folder. Each of these forms a specific purpose:

- `clients/mfe-one` - This application provides a view of how nested routing would work in a simple application.
- `clients/mfe-one-dyn` - This is a duplicate of `mfe-one`, except that the initial loading is chunked between the top level routes, allowing for dynamic / lazy loading of application modules (see [Opinionated Initialization](#opinionated-initialization) for more).
- `clients/mfe-two` - This provides a very simple Micro Frontend application, which shows how inter-module communication can work (see [Host and Client Interop](#host-and-client-interop) for more)

The `packages/*` folder currently only contains one package:

- `packages/federation` provides a basic set of tools and utility methods for the applications to consume for module federation.

## Scaffolding Applications

Creating a new application is as simple as invoking the [Vite](https://vitejs.dev/guide/#scaffolding-your-first-vite-project) template method with the `react-ts` template:

```sh
npm create vite@latest @react-playground/<app> -- --template react-ts
```

Once the application is added, you can make any initial changes required, but otherwise the application is runnable as a standalone app with `vite dev`. Once the application is scaffolded, you can enable [Module Federation](#configuring-module-federation).

### Configuring Module Federation

This playground uses the `@originjs/vite-plugin-federation` package to handle module federation, which has an extensive [Usage Guide](https://github.com/originjs/vite-plugin-federation#usage) on their docs. It is recommended to look that over, however a TL;DR of the configuration applied in this project is below - assuming we are adding `mfe-two` to our application.

1. Install `@originjs/vite-plugin-federation` with `npm install @originjs/vite-plugin-federation --save-dev`.

2. Update the [clients/mfe-two/vite.config.ts](./clients/mfe-two/vite.config.ts) to enable module federation in the application.

```diff
  return defineConfig({
    ...,
    plugins: [
      react(),
+     federation({
+       name: 'mfe-two',
+       filename: 'remoteEntry.js',
+       exposes: {
+         './routes': './src/routes',
+       },
+       shared: ['react', 'react-dom', 'react-router-dom'],
+     }),
    ],
    ...,
  });
```

3. Update the [host/vite.config.ts](./host/vite.config.ts) to make it aware of your new application, for example if we were adding `mfe-two`.

```diff
  return defineConfig({
    ...
    plugins: [
      react(),
      federation({
        name: 'host-app',
        remotes: {
          'external/mfe-one': MFE_ONE_URL,
+         'external/mfe-two': MFE_TWO_URL,
        },
        shared: ['react', 'react-dom', 'react-router-dom'],
      }),
    ],
    ...
  });
```

> **Note** The `shared` module list which defines any production dependencies that are shared across all applications at runtime, in our case these are [react](https://react.dev/) and [react-router](https://reactrouter.com/en/main). This can be extended to include other shared dependencies as needed (for example [react-hook-form](https://react-hook-form.com/)).

4. It is now possible to import the application via the route configured in the [host/vite.config.ts](./host/vite.config.ts) above, for example:

```tsx
import MfeOneRoutes from 'external/mfe-one/routes';

export const MfeOne = () => (<MfeOneRoutes />)
```

> **Note** Without additional configuration, Typescript will complain that no declaration is provided for `external/mfe-one/routes`, see [Findings and Concerns / Typescript and Type Safety](#typescript-and-type-safety) for how we solved this.

### Configuring React Router

Once the above is all configured, Module Federation is working! You can now import and utilize components from external applications, the next step is configuring this to integrate with [react-router](https://reactrouter.com/en/main) to handle our navigation on the host module.

1. Install `react-router-dom` with `npm install react-router-dom`.

2. Export a list of available routes from your new Micro Frontend application, for example in `mfe-two` we have [clients/mfe-two/src/routes.tsx](./clients/mfe-two/src/routes.tsx). These routes currently implement the [Route Object](https://reactrouter.com/en/main/route/route#type-declaration) from react router.

```tsx
// routes.tsx
export const routes: RouteObject[] = [
  {
    path: '/mfe-two',
    element: <App />,
    children: [
      {
        path: '',
        element: <Buttons />,
      },
    ],
  },
];
```

> **Note** The top level `path` is currently configured by the microapplications, if this conflicts with an existing route on the host then your module will not load.

3. Add router configuration to the Micro Frontend application so that it will behave in the same fashion in `standalone` mode (hitting its port directly), this is done by adding a [clients/mfe-two/src/router.tsx](./clients/mfe-two/src/router.tsx) and adding it to the [clients/mfe-two/src/main.tsx](./clients/mfe-two/src/main.tsx).

```tsx
// main.tsx
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="mfe1-h-screen mfe1-flex">
      <div className="mfe1-flex mfe1-flex-grow mfe1-overflow-auto">
        <RouterProvider router={router} />
      </div>
    </div>
  </React.StrictMode>
);
```

```tsx
// router.tsx
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Standalone />,
  },
  ...routes,
]);
```

### Configuring Tailwind

Tailwind was selected as the styling engine in order to test how different styles interact across the micro applications. Due to these findings each micro application requires its own `prefix` configured, see the [Findings and Concerns / Styling](#styling) section below for more. Otherwise [Tailwind](https://tailwindcss.com/) and [DaisyUI](https://daisyui.com) are configured by the following.

1. Follow the Getting Started guide on [Tailwind](https://tailwindcss.com/docs/guides/vite) for Vite. This should create a [clients/mfe-two/tailwind.config.js](./clients/mfe-two/tailwind.config.js) and [clients/mfe-two/postcss.config.js](./clients/mfe-two/postcss.config.js).

2. Follow the Installation guide on [DaisyUI](https://daisyui.com/docs/install/) to set up DaisyUI, this allows the use of the DaisyUI CSS Component Library.

3. Configure a prefix to avoid styling conflicts with other applications, how this works is documented on the [tailwind configuration](https://tailwindcss.com/docs/configuration#prefix). Make the following changes to the `tailwind.config.js` file to add `prefix` with an appropriate value for your micro application.

```diff
export default {
+ prefix: 'mfe2-',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  ...
};
```

4. Configure any [DaisyUI Themes](https://daisyui.com/docs/themes/), [Typography Settings](https://tailwindcss.com/docs/typography-plugin) or other that you may need for this application.

> **Note** Adding a prefix to `tailwind` is a workaround currently, and means that all styles applied in the application need to include the prefix. Additional details are provided in the [Findings and Concerns / Styling](#styling) section below.

## Findings and Concerns

This section provides an overview of all the findings, workarounds and concerns discovered through this PoC process. It is recommended to look each section over and decide if they impact you before taking inspiration from this setup.

### Typescript and Type Safety

Since the [@originjs/vite-plugin-federation](https://github.com/originjs/vite-plugin-federation) plugin allows us to use native ES Module Imports (`import mfe from 'external/mfe/app`), we start running into some complaints from Typescript. There is a section on their docs talking about [error TS2307: Cannot find module](https://github.com/originjs/vite-plugin-federation#error-ts2307-cannot-find-module). This was addressed in the solution with two simple steps.

1. Prefixing all external applications with the `external/` keyword

```js
export default ({ mode }) => {
  return defineConfig({
    ...,
    plugins: [
      react(),
      federation({
        ...,
        remotes: {
          'external/mfe-one': MFE_ONE_URL,
          'external/mfe-two': MFE_TWO_URL,
        },
      }),
    ],
    ...,
  });
```

```tsx
import MfeOneRoutes from 'external/mfe-one/routes';
```

2. Adding a type declaration to [host/src/@types/external.d.ts](./host/src/@types/external.d.ts) to tell typescript what the expected structure of these modules is when imported. The wildcard in the module path `external/*/routes`, means this type will apply to any import matching that pattern.

```ts
declare module 'external/*/routes' {
  const Routes: import('react-router-dom').RouteObject[];
  export default Routes;
}
```

### Dev Mode and Development Experience

Due to a limitation in the [@originjs/vite-plugin-federation](https://github.com/originjs/vite-plugin-federation) as it relates to running a [Development Server](https://vitejs.dev/guide/cli.html#dev-server) with `vite`. This is documented on the [Module Federation Docs](https://github.com/originjs/vite-plugin-federation#vite-dev-mode), and an open issue is open on [issues/525](https://github.com/originjs/vite-plugin-federation/issues/525) and [issues/281](https://github.com/originjs/vite-plugin-federation/issues/281).

This is worked around in this application as shown in the [Starting Manually](#starting-manually) section above, the `client` applications are build using `vite build --watch`, which creates a file watcher build process to automatically rebuild static assets on change. The assets are then served using `vite preview`.

It is recommended to start the application with the `Watch All MFE Applications` debug configuration in [VSCode](https://code.visualstudio.com/) as it wraps all the complexity up for you, and provides a seamless experience (See [Getting Started](#getting-started) for more).

> **Note** This solution does allow changes to be detected and automatically rebuilt while running as a client application, however [Hot Module Replacement](https://vitejs.dev/guide/features.html#hot-module-replacement) will not work for client apps, meaning a manual refresh is required.

### Styling

One of the larger issues with Module Federation is styling, and what side effects could manifest from loading a micro application with conflicting style sheets to the host or other micro applications. Tailwind is still susceptible to this issue, as the style sheets are generated at build time with no awareness of the other applications. This can cause [Functions and Directives](https://tailwindcss.com/docs/functions-and-directives) to mutate the behaviour of CSS Classes of the same name.

A nice overview of this behaviour and possible solutions is available on a blog post [Using TailwindCSS with Module Federation](https://malcolmkee.com/blog/using-tailwindcss-with-module-federation/) by Malcolm Kee.

Based on this we have boiled down two viable solutions, one "cheap and cheerful" with a negative impact on Developer Experience is to add a [Tailwind Prefix](#tailwind-prefix) to each application. Another option is to use a Component Styles / `CSS-in-JS` library such as [Twin.Macro](#twinmacro) and the final is to create a [Postcss Build-time Prefixer](#postcss-build-time-prefixer).

Within this playground application we have opted for the [tailwind prefix](https://tailwindcss.com/docs/configuration#prefix) to keep things simple, however I would recommend a more robust solution with a better developer experience for a full production implementation.

> **Note** These options are non-exhaustive, and these solutions are quite specific to `tailwindcss`, if a different styling system is selected then it is likely that similar CSS Side Effects could be experienced if the same class names are used - additional investigation recommended.

#### Tailwind Prefix

This option uses a [tailwind prefix](https://tailwindcss.com/docs/configuration#prefix) that is unique in each application, which enforces that our CSS Class Names are always unique. The implication of this is that the developer must always be aware of the prefix when using tailwind.

For example in the `host` application, the [host/tailwind.config.js](./host/tailwind.config.js) specifies the `prefix` as `host-`. This means I will need to prefix **any** styles with `host-` before they will be picked up and applied.

If I wanted to use the [Grid System of Columns](https://tailwindcss.com/docs/grid-template-columns), in normal tailwind I would just use `className="grid grid-cols-4"` for a grid of 4 columns. However, due to the prefix, this would instead become `className="host-grid host-grid-cols-4"`. This creates a negative development experience as the developer will need to keep this in mind across all applied styles, including for plugins like [daisy UI](https://daisyui.com).

Luckily the [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) extension for VSCode is aware of the prefix, and will provide intellisense to validate.

#### Twin.Macro

This option uses the library [Twin.Macro](https://github.com/ben-rogerson/twin.macro) which provides runtime CSS Processing that generate unique class names at runtime, avoiding the risk of build time class name / function conflicts.

Usage of the library boils down to using the custom `JSX` property of `tw` instead of `className`.

```jsx
import 'twin.macro'

const Input = () => <input tw="border hover:border-black" />
```

This solution is straightforward and flexible, providing a strong developer experience however it could introduce a slowdown at runtime as styles are processed for each component. This is likely negligible in most cases, and would probably be the easiest solution to implement.

#### Postcss Build-time Prefixer

Part of the [Using TailwindCSS with Module Federation](https://malcolmkee.com/blog/using-tailwindcss-with-module-federation/) blog post, he highlighted [a new solution](https://malcolmkee.com/blog/using-tailwindcss-with-module-federation/#a-new-solution) to improve the developer experience around this.

That is using a postcss plugin like [postcss-prefixer](https://www.npmjs.com/package/postcss-prefixer) to inject prefixes to all styles at build time, and equivalently add a wrapper method to your `className` definitions in code to inject the same prefix.

```js
// tailwind-prefixer.ts
const prefix = 'mfe1';
export const tw = (...classes) =>
  classes
    .map((cls) =>
      cls
        .split(' ')
        .map((className) => `${prefix}-${className}`)
        .join(' ')
    )
    .join(' ');
```

```jsx
// some-usage.jsx
import tw from 'tailwind-prefixer'
const someUsage = () => (
  <div className={tw('sm:hidden md:block')}>
    <span></span>
  </div>
);
```

### Routing and Lazy Evaluation

Currently in this playground, when loading up the host application it will initialize [react-router](https://reactrouter.com/en/main), which will then fetch the `routes` from each of the micro applications. Since none of these routes are chunked, but are rather the entire client module - this means on page initialization we are fetching the `host` application bundles, as well as the bundles for `mfe-one` and `mfe-two`.

This causes concerns when some micro-applications should be loaded "on demand", instead of whenever the host application is loaded. Unfortunately just adding a `React.lazy(() => import('some.module'))` in the Micro Frontend routes does not work - as the chunking is not configured to break up the application on these imports, and the host application will attempt to fetch this chunk from the wrong location (itself).

Some recommendations on how to improve the initialization of lazy routes and dynamic routes is provided below in [Opinionated Initialization](#opinionated-initialization) and [Extended Routing](#extended-routing).

#### Opinionated Initialization

If we introduced a shared basic type of what we expect the top level routes to look like, where we can simply extend the basic `RouteObject` from react router to also include a key to lazily initialize MFE Modules, e.g: `lazyMfe?: string`. This is implemented in the [packages/federation/src/types/application-routes.type.ts](./packages/federation/src/types/application-routes.type.ts) to show how it may look.

These application routes can be converted back to standard `RouteObject` with the [build-application-routes](./packages/federation/src/core/build-application-routes.ts) method, which will build the application routes from a `lazyMfe` initializer. One of the Micro Frontend Applications take advantage of this: `clients/mfe-one-dyn`.

This method exposes an underlying issue in the [@originjs/vite-plugin-federation](https://github.com/originjs/vite-plugin-federation) library, discussed in the following threads:

- [issues/401 - Importing federated module name via variable](https://github.com/originjs/vite-plugin-federation/issues/401)
- [discussions/193 - Dynamic/runtime remotes](https://github.com/originjs/vite-plugin-federation/discussions/193)

The core of this change is to remove direct imports from the [clients/mfe-one/src/routes.tsx](./clients/mfe-one/src/routes.tsx), so those routes can be tree shaken out of the application. They are then lazy loaded when the micro frontend application is initialized in the host container, which will fetch the bundles from the remote.

The initialization logic relies on internal runtime methods from the module [@originjs/vite-plugin-federation](https://github.com/originjs/vite-plugin-federation), specifically `__federation__.__federation_method_getRemote` and `__federation__.__federation_method_setRemote`. Since these methods are not available at runtime, we introduce a module declaration for them in the host (see [host/src/@types/\_\_federation\_\_.d.ts](./host/src/@types/__federation__.d.ts)):

```ts
// @types/__federation__.d.ts
declare module '__federation__' {
  const __federation_method_getRemote: (
    remoteName: string,
    componentName: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ) => any;
  const __federation_method_setRemote: (
    remoteName: string,
    remoteConfig: {
      url: string;
      format: 'esm' | 'systemjs' | 'var';
      from?: 'vite' | 'webpack';
    }
  ) => void;
}
```

This will tell TypeScript what these methods are when we try to utilize them in the `route-initializer-module-federation.ts` method, which will provide a lazy load construct for [react-router](https://reactrouter.com/en/main) to consume (see [host/src/federation-helpers/route-initializer-module-federation.ts](./host/src/federation-helpers/route-initializer-module-federation.ts)).

```ts
// route-initializer-module-federation.ts
export const routeInitializerModuleFederation =
  (remoteEntryUrl: string): RouteInitializer =>
  (importPath, microApplicationPrefix) =>
  async () => {
    const federation = await import('__federation__');
    federation.__federation_method_setRemote(microApplicationPrefix!, {
      url: remoteEntryUrl,
      format: 'esm',
      from: 'vite',
    });
    const module = await federation.__federation_method_getRemote(
      microApplicationPrefix!,
      `./${importPath}`
    );
    return { Component: module.default };
  };
```

Once that is complete, we update the routes definition to use our overridden [packages/federation/src/types/application-routes.type.ts]('./packages/federation/src/types/application-routes.type.ts) to provide `lazyMfe` initialization strings (see [clients/mfe-one-dyn/src/routes.tsx](./clients/mfe-one-dyn/src/routes.tsx)):

```ts
// routes.tsx
export const routes: ApplicationRoutes[] = [
  {
    path: '/mfe-one',
    element: <App />,
    children: [
      ...,
      {
        path: 'buttons',
        lazyMfe: 'routes/buttons',
      },
      {
        path: 'chat',
        lazyMfe: 'routes/chat',
      },
      ...,
    ],
  },
];
```

All modules that we want to lazily initialize **must** be exposed in the `vite.config.ts` of that micro-application, so the bundles are split appropriately for lazy loading (see [clients/mfe-one-dyn/vite.config.ts](./clients/mfe-one-dyn/vite.config.ts)):

```diff
// mfe-one - vite.config.ts
export default ({ mode }) => {
  ...;
  return defineConfig({
    ...,
    plugins: [
      react(),
      federation({
        name: 'mfe-one',
        filename: 'remoteEntry.js',
        exposes: {
          './routes': './src/routes',
+         './routes/buttons': './src/routes/buttons',
+         './routes/chat': './src/routes/chat',
+         './routes/forms': './src/routes/forms',
+         './routes/forms/first-form': './src/routes/forms/first-form',
+         './routes/forms/second-form': './src/routes/forms/second-form',
        },
        shared: ['react', 'react-dom', 'react-router-dom'],
      }),
    ],
    ...,
  });
};
```

On the host we update our router to convert these module loader prefixes back into module paths with our wrapper function [packages/federation/src/core/build-application-routes.ts](./packages/federation/src/core/build-application-routes.ts) (see [host/src/routes.tsx](./host/src/routes.tsx)):

```ts
// host - src/routes.tsx
export const routes: RouteObject[] = [
  {
    path: '/',
    element: <AppBar />,
    children: [
      {
        path: '/',
        element: <Overview />,
      },
      ...buildApplicationRoutes(
        MfeOneRoutes,
        'external/mfe-one',
        routeInitializerModuleFederation(
          'http://localhost:5401/assets/remoteEntry.js'
        )
      ),
      ...buildApplicationRoutes(
        MfeTwoRoutes,
        'external/mfe-two',
        routeInitializerModuleFederation(
          'http://localhost:5402/assets/remoteEntry.js'
        )
      ),
    ],
  },
];
```

Once this is all wired up, the application should now load these modules on-demand instead of upfront. Optimizing the bundle loading of the application.

**Issues with this approach**:

- Currently this implementation does not allow "standalone" development of the applications, as there is no current stub for a loader method to load the `lazyMfe` modules outside of the `__federation__` methods. The current [packages/federation/src/core/route-initializers/route-initializer-es-module.ts](./packages/federation/src/core/route-initializers/route-initializer-es-module.ts) does not work without bringing in [import-maps](https://github.com/WICG/import-maps) (similar to how module federation itself works).
  - A possible *Workaround*  is duplication of the `routes.tsx` object for standalone development, which loads via direct import would allow this to work, but fragments the application initialization even further.
  - Another possible *workaround* is to introduce a `vite` plugin to map the imports appropriately for the standalone mode, so the module development is more straightforward.

#### Extended Routing

There is a possible need to extend the routing configured by each micro application to provide additional metadata around what is being loaded, this could be useful for top level navigation bars, side navigation menus or mega menus.

This metadata would be quite easy to introduce by extending the basic `RouteObject` ([Route Object]((https://reactrouter.com/en/main/route/route#type-declaration)) with additional data such as `name`, `description`, etc. A nice overview of a similar pluggable implementation is available on [A Plugin-Based Frontend using Module Federation](https://malcolmkee.com/blog/a-plugin-based-frontend-with-module-federation/) by Malcolm Kee.

An example of the type system override and import changes are shown in [packages/federation/src/types/ApplicationRoutes.type.ts](./packages/federation/src/types/ApplicationRoutes.type.ts) and [packages/federation/src/core/build-application-routes.ts](./packages/federation/src/core/build-application-routes.ts).

### Alternatives - Native Federation

As shown in the [Routing and Lazy Evaluation](#routing-and-lazy-evaluation) section above, there are limitations with the [@originjs/vite-plugin-federation](https://github.com/originjs/vite-plugin-federation) library around how modules are dynamically loaded.

An alternative library exists that is much more optimized around dynamic loading of modules with [@module-federation/vite](https://github.com/module-federation/vite) which leverages [@softarc/native-federation](https://www.npmjs.com/package/@softarc/native-federation) under the hood to achieve module federation with vite.

This method should address concerns around dynamic loading of modules, as this mechanism is designed to load modules from a manifest file. This method is much more optimized around runtime control of imports, through methods like [initFederation](https://www.npmjs.com/package/@softarc/native-federation#initializing-a-host).

Once federation is initialized, imports can be handled through a utility method [loadRemoteModule](https://www.npmjs.com/package/@softarc/native-federation#initializing-a-remote).

A possible example of this configuration is provided on the branch `feature/native-federation` - however it runs into some other issues:

- The library itself is not highly utilized or actively contributed.
- Various issues after the latest release of the underlying [@softarc/native-federation](com/package/@softarc/native-federation) library
  - [@module-federation/vite/issues/11 - Empty react in production build](https://github.com/module-federation/vite/issues/11)
  - [@module-federation/vite/issues/16 - The entry point "react" cannot be marked as external](https://github.com/module-federation/vite/issues/16)

### Host and Client Interop

It is recommended to keep the bridge between Host Application and Client Applications strongly opinionated, but loosely coupled. Currently this playground has a very limited interface on how to register applications, just requiring the routes to be provided for [react-router](https://reactrouter.com/en/main) (and perhaps some metadata and lazy evaluation logic as documented in [Routing and Lazy Evaluation](#routing-and-lazy-evaluation) above).

Avoid bringing in direct talking points between host and client applications as much as possible, and limit ways for applications to communicate directly. A good mechanism to allow for inter-application communication is to use a simple event listener or event bus, for example in this project a simple [Document](https://developer.mozilla.org/en-US/docs/Web/API/Document) [Event Listener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget).

An example implementation is available in [packages/federation/src/hooks/use-event-bus.ts](./packages/federation/src/hooks/use-event-bus.ts), and example usage is provided below:

Publishing an event:

```tsx
// clients/mfe-two/src/routes/buttons.tsx
export const Buttons = () => {
  const sendNotification = useEventBus('mfe.two.notification');
  ...;
  return (
  <>
    ...
    <button
      onClick={() => sendNotification('notification created')}>
      Send Notification
    </button>
    ...
  </>);
};
```

Subscribing to an event:

```tsx
// host/src/routes/app-bar/route-icons.tsx
export const RouteIcons = () => {
  const [notifications, setNotifications] = useState(0);
  void useEventBus('mfe.two.notification', event => {
    if (event === 'notification created') {
      setNotifications(notifications + 1);
    } else if (event === 'notifications cleared') {
      setNotifications(0);
    }
  });
  return (<>...</>)
};
```

### Server-Side Rendering (SSR) and Edge-Side Rendering (ESR)

Server side rendering (SSR) and Edge-side Rendering (ESR) should be possible with the host application in particular, this could help with [SEO](https://moz.com/learn/seo/what-is-seo) and [Largest Contentful Paint (LCP)](https://web.dev/articles/lcp). While it hasn't been tested in this Playground, it should be possible to introduce tools to improve the load experience of the applications through tools like:

- [Vitedge](https://vitedge.js.org/)
- [Vite SSR](https://github.com/frandiox/vite-ssr)

Various other `vite` tools and frameworks that could help with this are also documented on [Awesome Vite](https://github.com/vitejs/awesome-vite).

### Browser Compatibility

Due to the nature of the [@originjs/vite-plugin-federation](https://github.com/originjs/vite-plugin-federation) plugin, it requires the use of [top-level await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await). This can limit browser compatibility, which for this application is currently set to `esnext` (see [host/vite.config.ts](./host/vite.config.ts)).

Some workarounds are available for this if additional compatibility is required, such as setting the build targets to the minimum browsers supporting top level await:

```ts
 build: {
    target: ["chrome89", "edge89", "firefox89", "safari15"]
 }
```

Alternatively, you can look at bringing in the [vite-plugin-top-level-await](https://github.com/Menci/vite-plugin-top-level-await) to polyfill the required function for larger compatibility.

For more information see the documentation on [vite-plugin-federation / ERROR: Top-level await is not available in the configured target environment](https://github.com/originjs/vite-plugin-federation#error-top-level-await-is-not-available-in-the-configured-target-environment).

## Tools Overview

### UI Dependencies

- [react](https://react.dev/)
- [react-hook-form](https://www.react-hook-form.com)
- [react-router-dom](https://reactrouter.com/en/main)

### Build and Process

- [VSCode](https://code.visualstudio.com/)
- [vite](https://vitejs.dev/guide/)
  - [originjs/vite-plugin-federation](https://github.com/originjs/vite-plugin-federation)
- [Tailwindcss](https://tailwindcss.com/)
  - [DaisyUI](https://daisyui.com/)
  - [Hero Icons](https://heroicons.com/)
- [NPM Workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces)

### Static Code Analysis

- [ESLint](https://eslint.org/):
  - [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
  - [typescript-eslint](https://typescript-eslint.io/linting/configs/)
  - [Prettier - Integrating with Linters](https://prettier.io/docs/en/integrating-with-linters.html)
- [Markdownlint](https://github.com/DavidAnson/markdownlint)
- [Prettier](https://prettier.io/)

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
- [x] Implement alternative module federation library to use [@module-federation/vite](https://www.npmjs.com/package/@module-federation/vite) and [@softarc/native-federation](https://www.npmjs.com/package/@softarc/native-federation) (see [Alternatives - Native Federation](#alternatives---native-federation) for more).
- [x] Set up dynamic routing support - loading Micro Applications from API Endpoint registry and lazy initialization of micro frontend applications.
- [x] Create plugin based interface for registering applications ([A Plugin-Based Frontend using Module Federation](https://malcolmkee.com/blog/a-plugin-based-frontend-with-module-federation/))

### Stretch Goals

- [ ] Docker Container for micro frontend applications and `docker-compose` configuration to allow easy development of Micro Applications in isolated repositories
- [ ] Enable [eslint-plugin-tailwindcss](https://www.npmjs.com/package/eslint-plugin-tailwindcss) and [prettier-plugin-tailwindcss](https://www.npmjs.com/package/prettier-plugin-tailwindcss) for stronger CI Validation
- [ ] Introduce more comprehensive [VSCode Background Task Problem Matcher](https://code.visualstudio.com/Docs/editor/tasks#_background-watching-tasks), see example on [vite-plugin-checker/issues/95](https://github.com/fi3ework/vite-plugin-checker/issues/95).
- [ ] Set up SSR or Edge SSR for initial page load and router initialization support
- [ ] Add monorepo import restrictions and boundaries ([eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import) and [eslint-plugin-boundaries](https://www.npmjs.com/package/eslint-plugin-boundaries))
