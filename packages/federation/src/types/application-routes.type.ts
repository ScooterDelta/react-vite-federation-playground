import { RouteObject } from 'react-router-dom';

export type ApplicationRoutes = Omit<RouteObject, 'children'> & {
  /**
   * Allows module routes to be defined by their relative path, so they can be loaded through lazy loading modules in the Micro Frontend Host application
   * - Current implementation will loop over the properties and inject the lazy loaded component via an ESModule Import
   * - An implementation is available in the `host` application tha twill inject the lazy loaded component via Module Federated Import (Import Maps).
   */
  lazyMfe?: string;
  /**
   * Overrides the `children` object provided by {@link RouteObject}, allowing all the children to instead utilize the {@link ApplicationRoutes} object.
   * - Allows all children access to the `lazyMfe` and `moduleName` properties while configuring routes.
   */
  children?: ApplicationRoutes[];
  /**
   * The module name of the route, this can be used by the `host` application to display information about routes.
   * - Allows the route names and navigation bars to be defined by the client applications
   */
  moduleName?: string;
};
