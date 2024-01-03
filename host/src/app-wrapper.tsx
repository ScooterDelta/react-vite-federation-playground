import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { themeChange } from 'theme-change';
import { router } from './router';

export const AppWrapper = () => {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

  return <RouterProvider router={router} />;
};
