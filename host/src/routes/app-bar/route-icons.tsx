import { ServerIcon, ServerStackIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEventBus } from '../../utilities/use-event-bus';

export const RouteIcons = () => {
  const [notifications, setNotifications] = useState(0);
  void useEventBus('mfe.two.notification', event => {
    if (event === 'notification created') {
      setNotifications(notifications + 1);
    } else if (event === 'notifications cleared') {
      setNotifications(0);
    }
  });
  return (
    <ul className="host-menu host-menu-md host-menu-horizontal host-p-1">
      <li className="host-py-1">
        <Link to="/mfe-one">
          <div className="host-indicator">
            <ServerIcon className="host-h-6 host-w-6 host-text-primary" /> MFE
            One
            {notifications > 0 && (
              <span className="host-badge host-badge-sm host-indicator-item">
                {notifications}
              </span>
            )}
          </div>
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
  );
};
