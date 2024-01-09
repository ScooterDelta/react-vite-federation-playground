import {
  ArchiveBoxArrowDownIcon,
  ChatBubbleBottomCenterTextIcon,
  CursorArrowRaysIcon,
  DocumentCheckIcon,
  HomeIcon,
} from '@heroicons/react/24/outline';
import { Link, Outlet } from 'react-router-dom';
import { RouteConstants } from './constants/routes';

function App() {
  return (
    <div className="mfe1d-flex mfe1d-w-full">
      <div className="mfe1d-flex-none mfe1d-x-auto mfe1d-h-full mfe1d-bg-base-200">
        <ul className="mfe1d-menu mfe1d-w-48">
          <li>
            <Link to={RouteConstants.HOME}>
              <HomeIcon className="mfe1d-h-5 mfe1d-w-5" /> Home
            </Link>
          </li>
          <li>
            <Link to={RouteConstants.BUTTONS}>
              <CursorArrowRaysIcon className="mfe1d-h-5 mfe1d-w-5" /> Buttons
            </Link>
          </li>
          <li>
            <Link to={RouteConstants.CHAT}>
              <ChatBubbleBottomCenterTextIcon className="mfe1d-h-5 mfe1d-w-5" />{' '}
              Chat
            </Link>
          </li>
          <li>
            <Link to={RouteConstants.FORMS}>
              <ArchiveBoxArrowDownIcon className="mfe1d-h-5 mfe1d-w5" /> Forms
            </Link>
            <ul>
              <li>
                <Link to={RouteConstants.FORMS_FIRST}>
                  <DocumentCheckIcon className="mfe1d-h-5 mfe1d-w-5" /> First
                  Form
                </Link>
              </li>
              <li>
                <Link to={RouteConstants.FORMS_SECOND}>
                  <DocumentCheckIcon className="mfe1d-h-5 mfe1d-w-5" /> Second
                  Form
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="mfe1d-flex-auto mfe1d-container mfe1d-overflow-auto mfe1d-mx-auto mfe1d-px-4 mfe1d-pt-4">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
