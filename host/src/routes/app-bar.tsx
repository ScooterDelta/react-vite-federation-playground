import { Link, Outlet } from 'react-router-dom';

export const AppBar = () => {
  return (
    <>
      <div className="navbar bg-base-300">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl">
            React Microfrontends Playground
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/mfe-one">MFE One</Link>
            </li>
            <li>
              <Link to="/mfe-two">MFE Two</Link>
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
