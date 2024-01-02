import MfeOneApp from 'mfe-one/app';
import MfeTwoApp from 'mfe-two/app';
import { createBrowserRouter } from 'react-router-dom';
import { Root } from './routes/root';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
  {
    path: '/mfe-one',
    element: <MfeOneApp />,
  },
  {
    path: '/mfe-two',
    element: <MfeTwoApp />,
  },
]);
