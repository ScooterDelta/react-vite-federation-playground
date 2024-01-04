import { RouteObject } from 'react-router-dom';
import App from './App';
import { Buttons } from './routes/buttons';

export const routes: RouteObject[] = [
  {
    path: '/mfe-one',
    element: <App />,
    children: [
      {
        path: '',
        element: <Buttons />,
      },
      {
        path: 'buttons',
        element: <Buttons />,
      },
    ],
  },
];

export default routes;
