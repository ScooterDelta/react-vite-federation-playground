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
    <div className="flex">
      <div className="flex-none x-auto h-screen bg-base-200">
        <ul className="menu w-48">
          <li>
            <Link to={RouteConstants.HOME}>
              <HomeIcon className="h-5 w-5" /> Home
            </Link>
          </li>
          <li>
            <Link to={RouteConstants.BUTTONS}>
              <CursorArrowRaysIcon className="h-5 w-5" /> Buttons
            </Link>
          </li>
          <li>
            <Link to={RouteConstants.CHAT}>
              <ChatBubbleBottomCenterTextIcon className="h-5 w-5" /> Chat
            </Link>
          </li>
          <li>
            <Link to={RouteConstants.FORMS}>
              <ArchiveBoxArrowDownIcon className="h-5 w5" /> Forms
            </Link>
            <ul>
              <li>
                <Link to={RouteConstants.FORMS_FIRST}>
                  <DocumentCheckIcon className="h-5 w-5" /> First Form
                </Link>
              </li>
              <li>
                <Link to={RouteConstants.FORMS_SECOND}>
                  <DocumentCheckIcon className="h-5 w-5" /> Second Form
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="flex-auto container mx-auto px-4 pt-4">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
