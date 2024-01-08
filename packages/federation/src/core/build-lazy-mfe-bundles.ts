import { ApplicationRoutes } from '..';

export const buildLazyMfeBundles = (
  pathPrefix: string,
  applicationRoutes: ApplicationRoutes[]
): { [key: string]: string } => {
  const extractLazyMfeRoutes = (routes: ApplicationRoutes[]): string[] => {
    let mfeRoutes: string[] = [];

    for (const route of routes) {
      if (route.lazyMfe) {
        mfeRoutes = mfeRoutes.concat(route.lazyMfe);
      }
      if (route.children) {
        mfeRoutes = mfeRoutes.concat(extractLazyMfeRoutes(route.children));
      }
    }
    return mfeRoutes;
  };
  const routes = extractLazyMfeRoutes(applicationRoutes);
  return routes.reduce(
    (mappingObject, route) => {
      return { [`./${route}`]: `./${pathPrefix}/${route}`, ...mappingObject };
    },
    {} as { [key: string]: string }
  );
};
