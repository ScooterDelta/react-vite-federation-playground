import { buildApplicationRoutes } from '@react-playground/federation';
import MfeOneDynRoutes from 'external/mfe-one-dyn/routes';
import MfeOneRoutes from 'external/mfe-one/routes';
import MfeTwoRoutes from 'external/mfe-two/routes';
import { RouteObject } from 'react-router-dom';
import { routeInitializerModuleFederation } from './federation-helpers/route-initializer-module-federation';
import { AppBar } from './routes/app-bar';
import { Overview } from './routes/overview';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <AppBar />,
    children: [
      {
        path: '/',
        element: <Overview />,
      },
      ...buildApplicationRoutes(
        MfeOneRoutes,
        'external/mfe-one',
        routeInitializerModuleFederation(
          'http://localhost:5401/assets/remoteEntry.js'
        )
      ),
      ...buildApplicationRoutes(
        MfeTwoRoutes,
        'external/mfe-two',
        routeInitializerModuleFederation(
          'http://localhost:5402/assets/remoteEntry.js'
        )
      ),
      ...buildApplicationRoutes(
        MfeOneDynRoutes,
        'external/mfe-one-dyn',
        routeInitializerModuleFederation(
          'http://localhost:5403/assets/remoteEntry.js'
        )
      ),
    ],
  },
];

export default routes;
