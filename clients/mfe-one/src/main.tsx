import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import { router } from './router.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="mfe1-overflow-auto">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
