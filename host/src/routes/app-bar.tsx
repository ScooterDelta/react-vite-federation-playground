import {
  PlayCircleIcon,
  ServerIcon,
  ServerStackIcon,
} from '@heroicons/react/24/solid';
import { Link, Outlet } from 'react-router-dom';

export const AppBar = () => {
  return (
    <>
      <div className="navbar bg-base-300">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl">
            <PlayCircleIcon className="h-7 w-7 " />
            React Microfrontends Playground
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/mfe-one">
                <ServerIcon className="h-6 w-6 text-blue-500" /> MFE One
              </Link>
            </li>
            <li>
              <Link to="/mfe-two">
                <ServerStackIcon className="h-6 w-6 text-blue-500" />
                MFE Two
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <br />
      <div className="text-center">
        <Outlet />
      </div>
    </>
  );
};
