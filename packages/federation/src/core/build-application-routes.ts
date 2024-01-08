import { RouteObject } from 'react-router-dom';
import { ApplicationRoutes } from '..';

export const buildApplicationRoutes = (
  microApplicationPrefix: string,
  applicationRoutes: ApplicationRoutes[]
): RouteObject[] => {
  const mapToRouteObject = (
    applicationRoute: ApplicationRoutes
  ): RouteObject => {
    const { lazyMfe, children, ...oldRouteObject } = applicationRoute;
    const updatedRouteObject: RouteObject = { ...oldRouteObject };
    if (lazyMfe) {
      const lazyImportPath = `${microApplicationPrefix}/${lazyMfe}`;
      const lazy = async () => {
        // WARN - Failing since the import comes from a variable, currently dynamic imports must be coded at compile time
        // - see issue: https://github.com/originjs/vite-plugin-federation/issues/401
        // - see discussion: https://github.com/originjs/vite-plugin-federation/discussions/193
        const lazyModule = await import(lazyImportPath);
        return { Component: lazyModule.default };
      };
      updatedRouteObject.lazy = lazy;
    }
    updatedRouteObject.children = children?.map(child =>
      mapToRouteObject(child)
    );
    return updatedRouteObject;
  };
  return applicationRoutes.map(applicationRoute =>
    mapToRouteObject(applicationRoute)
  );
};
