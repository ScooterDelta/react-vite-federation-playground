import { RouteObject } from 'react-router-dom';
import { ApplicationRoutes } from '..';
import { RouteInitializer } from '../types/route-initializer.type';
import { routeInitializerESModule } from './route-initializers/route-initializer-es-module';

/**
 * Build {@link ApplicationRoutes} into a {@link RouteObject} so that they can be consumed by [react-router](https://reactrouter.com/en/main).
 *
 * @example
 * // Will build the Route imports using the default `routeInitializerESModule` for the relative path `./`
 * ...buildApplicationRoutes(routes, './')
 * @example
 * // Will build the application routes using a custom route initializer: `routeInitializerModuleFederation`.
 * ...buildApplicationRoutes(
 *   MfeTwoRoutes,
 *   'external/mfe-two',
 *   routeInitializerModuleFederation(
 *     'http://localhost:5402/assets/remoteEntry.js'
 *   )
 * )
 *
 * @param applicationRoutes The list of Application Routes that need to be converted to {@link RouteObject}
 * @param microApplicationPrefix The prefix of the micro-application or relative path (depending on the initializer context)
 * @param moduleInitializer The module initializer that will be used when any `lazyMfe` paths are discovered during traversal, the default provided implementation will use {@link routeInitializerESModule} to use `import(...)` to initialize lazy modules.
 * @returns The converted list of {@see RouteObject} with all `lazyMfe` paths converted to `lazy` React Router initializers based on the `moduleInitializer` provided.
 */
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
