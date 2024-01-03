import MfeOneRoutes from 'mfe-one/routes';
import MfeTwoRoutes from 'mfe-two/routes';
import { RouteObject } from 'react-router-dom';
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
      ...MfeOneRoutes,
      ...MfeTwoRoutes,
    ],
  },
];

export default routes;
