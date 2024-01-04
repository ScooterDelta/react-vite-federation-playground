import { RouteObject } from 'react-router-dom';
import App from './App';
import { Buttons } from './routes/buttons';

export const routes: RouteObject[] = [
  {
    path: '/mfe-two',
    element: <App />,
    children: [
      {
        path: '',
        element: <Buttons />,
      },
    ],
  },
];

export default routes;
