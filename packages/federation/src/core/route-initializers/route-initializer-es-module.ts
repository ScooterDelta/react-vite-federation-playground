import { RouteInitializer } from '../../types/route-initializer.type';

export const routeInitializerESModule: RouteInitializer =
  (importPath, microApplicationPrefix) => async () => {
    const shouldIncludePrefix = !!microApplicationPrefix;
    const qualifiedPrefix = shouldIncludePrefix
      ? `${microApplicationPrefix}/`
      : '';

    // WARN - Failing since the import comes from a variable, currently dynamic imports must be coded at compile time
    // - see issue: https://github.com/originjs/vite-plugin-federation/issues/401
    // - see discussion: https://github.com/originjs/vite-plugin-federation/discussions/193
    const lazyModule = await import(`${qualifiedPrefix}${importPath}`);
    return { Component: lazyModule.default };
  };
