import { RouteObject } from 'react-router-dom';
import { ApplicationRoutes } from '..';
import { RouteInitializer } from '../types/route-initializer.type';
import { routeInitializerESModule } from './route-initializers/route-initializer-es-module';

export const buildApplicationRoutes = (
  applicationRoutes: ApplicationRoutes[],
  microApplicationPrefix?: string,
  moduleInitializer: RouteInitializer = routeInitializerESModule
): RouteObject[] => {
  const mapToRouteObject = (
    applicationRoute: ApplicationRoutes
  ): RouteObject => {
    const { lazyMfe, children, ...oldRouteObject } = applicationRoute;
    const updatedRouteObject: RouteObject = { ...oldRouteObject };
    if (lazyMfe) {
      updatedRouteObject.lazy = moduleInitializer(
        lazyMfe,
        microApplicationPrefix
      );
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
