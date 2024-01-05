import { RouteObject } from 'react-router-dom';

export type ApplicationRoutes = Omit<RouteObject, 'children'> & {
  lazyMfe?: string;
  children?: ApplicationRoutes[];
  moduleName?: string;
};
