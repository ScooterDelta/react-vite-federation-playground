import {
  PlayCircleIcon,
  ServerIcon,
  ServerStackIcon,
} from '@heroicons/react/24/solid';
import { Link, Outlet } from 'react-router-dom';

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
          <ul className="host-menu host-menu-md host-menu-horizontal host-p-1">
            <li className="host-py-1">
              <Link to="/mfe-one">
                <ServerIcon className="host-h-6 host-w-6 host-text-primary" />{' '}
                MFE One
              </Link>
            </li>
            <li className="host-py-1">
              <Link to="/mfe-two">
                <ServerStackIcon className="host-h-6 host-w-6 host-text-primary" />
                MFE Two
              </Link>
            </li>
            <li>
              <select
                className="host-select host-select-md host-w-full host-max-w-xs"
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
      <div className="host-flex host-flex-grow host-overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};
