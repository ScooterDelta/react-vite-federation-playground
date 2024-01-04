import { DocumentCheckIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { RouteConstants } from '../constants/routes';

export const Forms = () => {
  return (
    <div className="mfe1-flex mfe1-flex-col">
      <div className="host-prose mfe1-max-w-none mfe1-flex-none mfe1-w-max">
        <h1>MFE One Forms</h1>
        <p>
          This module is configured to utilize `react-hook-form` in different
          examples
        </p>
        <ul></ul>
      </div>
      <div className="mfe1-flex mfe1-flex-grow mfe1-w-max">
        <ul className="mfe1-menu mfe1-menu-horizontal mfe1-bg-base-200">
          <li>
            <Link to={RouteConstants.FORMS_FIRST}>
              <DocumentCheckIcon className="mfe1-h-5 mfe1-w-5" /> First Form
            </Link>
          </li>
          <li>
            <Link to={RouteConstants.FORMS_SECOND}>
              <DocumentCheckIcon className="mfe1-h-5 mfe1-w-5" /> Second Form
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
