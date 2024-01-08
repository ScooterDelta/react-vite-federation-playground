import { loadRemoteModule } from '@softarc/native-federation';
import { RouteObject } from 'react-router-dom';
import { AppBar } from './routes/app-bar';
import { Overview } from './routes/overview';

export const hostRoute: RouteObject = {
  path: '/',
  element: <AppBar />,
  children: [
    {
      path: '/',
      element: <Overview />,
    },
  ],
};

export const routes = async (): Promise<RouteObject[]> => [
  {
    ...hostRoute,
    children: [
      ...(hostRoute.children ?? []),
      ...(await loadRemoteModule({
        remoteName: 'external/mfe-one',
        exposedModule: './routes',
      })),
      ...(await loadRemoteModule({
        remoteName: 'external/mfe-two',
        exposedModule: './routes',
      })),
    ],
  },
];
