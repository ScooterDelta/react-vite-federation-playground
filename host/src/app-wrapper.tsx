import { useEffect, useState } from 'react';
import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import { themeChange } from 'theme-change';
import { routes, routesSync } from './routes';

export const AppWrapper = () => {
  const [appRoutes, setAppRoutes] = useState<RouteObject[]>(routesSync);

  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project

    const fetchAppRoutes = async () => {
      setAppRoutes(await routes());
    };
    void fetchAppRoutes();
  }, []);

  const router = createBrowserRouter(appRoutes);

  return <RouterProvider router={router} />;
};
