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
            <PlayCircleIcon className="h-7 w-7" />
            React Microfrontends Playground
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-md menu-horizontal p-1">
            <li className="py-1">
              <Link to="/mfe-one">
                <ServerIcon className="h-6 w-6 text-primary" /> MFE One
              </Link>
            </li>
            <li className="py-1">
              <Link to="/mfe-two">
                <ServerStackIcon className="h-6 w-6 text-primary" />
                MFE Two
              </Link>
            </li>
            <li>
              <select
                className="select select-md w-full max-w-xs"
                data-choose-theme>
                <option value={''} disabled>
                  Select Theme:
                </option>
                <option value={'dark'}>Dark</option>
                <option value={'light'}>Light</option>
                <option value={'coffee'}>Coffee</option>
                <option value={'halloween'}>Halloween</option>
                <option value={'cyberpunk'}>Cyberpunk</option>
                <option value={'valentine'}>Valentine</option>
              </select>
            </li>
          </ul>
        </div>
      </div>
      <br />
      <div className="container mx-auto">
        <Outlet />
      </div>
    </>
  );
};
