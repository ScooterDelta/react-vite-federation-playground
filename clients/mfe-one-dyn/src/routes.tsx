import { ApplicationRoutes } from '@react-playground/federation';
import App from './App';
import { LandingPage } from './routes/landing-page';

export const routes: ApplicationRoutes[] = [
  {
    path: '/mfe-one-dyn',
    element: <App />,
    children: [
      {
        path: '',
        element: <LandingPage />,
      },
      {
        path: 'buttons',
        lazyMfe: 'routes/buttons',
      },
      {
        path: 'chat',
        lazyMfe: 'routes/chat',
      },
      {
        path: 'forms',
        lazyMfe: 'routes/forms',
        children: [
          { path: '', lazyMfe: 'routes/forms/first-form' },
          { path: 'first', lazyMfe: 'routes/forms/first-form' },
          { path: 'second', lazyMfe: 'routes/forms/second-form' },
        ],
      },
    ],
  },
];

export default routes;
