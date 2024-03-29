import { buildApplicationRoutes } from '@react-playground/federation';
import { createBrowserRouter } from 'react-router-dom';
import { routes } from './routes';
import { Standalone } from './routes/standalone';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Standalone />,
  },
  ...buildApplicationRoutes(routes),
]);
