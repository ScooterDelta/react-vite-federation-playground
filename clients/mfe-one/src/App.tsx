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
    <div className="mfe1-flex">
      <div className="mfe1-flex-none mfe1-x-auto mfe1-h-screen mfe1-bg-base-200">
        <ul className="mfe1-menu mfe1-w-48">
          <li>
            <Link to={RouteConstants.HOME}>
              <HomeIcon className="mfe1-h-5 mfe1-w-5" /> Home
            </Link>
          </li>
          <li>
            <Link to={RouteConstants.BUTTONS}>
              <CursorArrowRaysIcon className="mfe1-h-5 mfe1-w-5" /> Buttons
            </Link>
          </li>
          <li>
            <Link to={RouteConstants.CHAT}>
              <ChatBubbleBottomCenterTextIcon className="mfe1-h-5 mfe1-w-5" />{' '}
              Chat
            </Link>
          </li>
          <li>
            <Link to={RouteConstants.FORMS}>
              <ArchiveBoxArrowDownIcon className="mfe1-h-5 mfe1-w5" /> Forms
            </Link>
            <ul>
              <li>
                <Link to={RouteConstants.FORMS_FIRST}>
                  <DocumentCheckIcon className="mfe1-h-5 mfe1-w-5" /> First Form
                </Link>
              </li>
              <li>
                <Link to={RouteConstants.FORMS_SECOND}>
                  <DocumentCheckIcon className="mfe1-h-5 mfe1-w-5" /> Second
                  Form
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="mfe1-flex-auto mfe1-container mfe1-mx-auto mfe1-px-4 mfe1-pt-4">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
