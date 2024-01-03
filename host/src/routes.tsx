import MfeOneRoutes from 'mfe-one/routes';
import MfeTwoRoutes from 'mfe-two/routes';
import { RouteObject } from 'react-router-dom';
import { AppBar } from './routes/app-bar';
import { Root } from './routes/root';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <AppBar />,
    children: [
      {
        path: '/home',
        element: <Root />,
      },
      ...MfeOneRoutes,
      ...MfeTwoRoutes,
    ],
  },
];

export default routes;
