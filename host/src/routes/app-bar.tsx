import { PlayCircleIcon } from '@heroicons/react/24/solid';
import { Link, Outlet } from 'react-router-dom';
import { RouteIcons } from './app-bar/route-icons';

export const AppBar = () => {
  return (
    <div className="host-h-dvh host-w-dvw host-flex host-flex-col">
      <div className="host-navbar host-bg-base-300 host-h-20 host-flex-none">
        <div className="host-flex-1">
          <Link to="/" className="host-btn host-btn-ghost host-text-xl">
            <PlayCircleIcon className="host-h-7 host-w-7" />
            React Micro Frontends Playground
          </Link>
        </div>
        <div className="host-flex-none">
          <RouteIcons />
        </div>
      </div>
      <div className="host-flex host-flex-grow host-overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};
