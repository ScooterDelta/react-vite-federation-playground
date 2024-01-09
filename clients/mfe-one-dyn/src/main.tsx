import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import { router } from './router.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="mfe1d-h-screen mfe1d-flex">
      <div className="mfe1d-flex mfe1d-flex-grow mfe1d-overflow-auto">
        <RouterProvider router={router} />
      </div>
    </div>
  </React.StrictMode>
);
