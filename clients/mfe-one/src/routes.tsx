import { ApplicationRoutes } from '@react-playground/federation';
import App from './App';
import { Buttons } from './routes/buttons';
import { Chat } from './routes/chat';
import { Forms } from './routes/forms';
import { FirstForm } from './routes/forms/first-form';
import { SecondForm } from './routes/forms/second-form';
import { LandingPage } from './routes/landing-page';

export const routes: ApplicationRoutes[] = [
  {
    path: '/mfe-one',
    element: <App />,
    children: [
      {
        path: '',
        element: <LandingPage />,
      },
      {
        path: 'buttons',
        element: <Buttons />,
      },
      {
        path: 'chat',
        element: <Chat />,
      },
      {
        path: 'forms',
        element: <Forms />,
        children: [
          { path: '', element: <FirstForm /> },
          { path: 'first', element: <FirstForm /> },
          { path: 'second', element: <SecondForm /> },
        ],
      },
    ],
  },
];

export default routes;
