import { ApplicationRoutes } from '@react-playground/federation';
import App from './App';
import { Buttons } from './routes/buttons';

export const routes: ApplicationRoutes[] = [
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
