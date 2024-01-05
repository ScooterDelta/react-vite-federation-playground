import { RouteObject } from 'react-router-dom';
import { ApplicationRoutes } from '..';

export const useApplicationRoutes = (
  microApplicationPrefix: string,
  applicationRoutes: ApplicationRoutes[]
): RouteObject[] => {
  const mapToRouteObject = (
    applicationRoute: ApplicationRoutes
  ): RouteObject => {
    const { lazyMfe, children, ...oldRouteObject } = applicationRoute;
    const updatedRouteObject: RouteObject = { ...oldRouteObject };
    if (lazyMfe) {
      const lazy = () => import(`${microApplicationPrefix}/${lazyMfe}`);
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
