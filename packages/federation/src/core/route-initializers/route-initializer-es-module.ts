import { RouteInitializer } from '../../types/route-initializer.type';

export const routeInitializerESModule: RouteInitializer =
  (importPath, microApplicationPrefix) => async () => {
    const shouldIncludePrefix = !!microApplicationPrefix;
    const qualifiedPrefix = shouldIncludePrefix
      ? `${microApplicationPrefix}/`
      : '';
    const lazyModule = await import(`${qualifiedPrefix}${importPath}`);
    return { Component: lazyModule.default };
  };
