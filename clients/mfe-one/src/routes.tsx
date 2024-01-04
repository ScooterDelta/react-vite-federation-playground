import { RouteObject } from 'react-router-dom';
import App from './App';
import { Buttons } from './routes/buttons';
import { Forms } from './routes/forms';

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
      {
        path: 'forms',
        element: <Forms />,
      },
    ],
  },
];

export default routes;
