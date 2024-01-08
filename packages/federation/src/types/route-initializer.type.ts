import { LazyRouteFunction, RouteObject } from 'react-router-dom';

export type RouteInitializer = (
  importPath: string,
  microApplicationPrefix?: string
) => LazyRouteFunction<RouteObject>;
