import { useEffect, useState } from 'react';
import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import { themeChange } from 'theme-change';
import { hostRoute, routes } from './routes';

export const AppWrapper = () => {
  const [appRoutes, setAppRoutes] = useState<RouteObject[]>([hostRoute]);

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
