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
        // TODO Failing since the import comes from a variable, see issue: https://github.com/originjs/vite-plugin-federation/issues/401
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
