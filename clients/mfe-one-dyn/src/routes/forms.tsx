import { DocumentCheckIcon } from '@heroicons/react/24/outline';
import { Link, Outlet } from 'react-router-dom';
import { RouteConstants } from '../constants/routes';

export const Forms = () => {
  return (
    <div className="mfe1d-flex mfe1d-flex-col mfe1d-w-full">
      <div className="mfe1d-prose mfe1d-max-w-none mfe1d-flex-none">
        <h1>MFE One (Dynamic) Forms</h1>
        <p>
          This module is configured to utilize `react-hook-form` in different
          examples
        </p>
        <ul></ul>
      </div>
      <div className="mfe1d-divider">Forms</div>
      <ul className="mfe1d-menu mfe1d-menu-horizontal mfe1d-flex-none mfe1d-bg-base-200">
        <li>
          <Link to={RouteConstants.FORMS_FIRST}>
            <DocumentCheckIcon className="mfe1d-h-5 mfe1d-w-5" /> First Form
          </Link>
        </li>
        <li>
          <Link to={RouteConstants.FORMS_SECOND}>
            <DocumentCheckIcon className="mfe1d-h-5 mfe1d-w-5" /> Second Form
          </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Forms;
