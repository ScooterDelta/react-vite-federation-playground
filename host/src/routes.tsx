import MfeOneRoutes from 'mfe-one/routes';
import MfeTwoRoutes from 'mfe-two/routes';
import { RouteObject } from 'react-router-dom';
import { Root } from './routes/root';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Root />,
  },
  ...MfeOneRoutes,
  ...MfeTwoRoutes,
];

export default routes;
