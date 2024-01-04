import CounterButton from '../components/counter-button';
import { useEventBus } from '../utilities/use-event-bus';

export const Buttons = () => {
  const sendNotification = useEventBus('mfe.two.notification');

  return (
    <div className="mfe2-prose mfe2-max-w-none">
      <h1>MFE Two Buttons</h1>
      <h2>Some Text</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum.
      </p>
      <h2>Send Notifications Between Apps</h2>
      <div className="mfe2-join">
        <button
          className="mfe2-btn mfe2-btn-primary mfe2-join-item"
          onClick={() => sendNotification('notification created')}>
          Send Notification
        </button>
        <button
          className="mfe2-btn mfe2-btn-secondary mfe2-join-item"
          onClick={() => sendNotification('notification cleared')}>
          Clear Notifications
        </button>
      </div>
      <h2>Some Styled Buttons!</h2>
      <div className="mfe2-px-6">
        <CounterButton
          title="Click Me (Primary)"
          className="mfe2-btn mfe2-btn-primary"></CounterButton>
      </div>
      <div className="mfe2-px-6 mfe2-pt-4">
        <CounterButton
          title="Click Me (Secondary)"
          className="mfe2-btn mfe2-btn-secondary"></CounterButton>
      </div>
      <div className="mfe2-px-6 mfe2-pt-4">
        <CounterButton
          title="Click Me (Accent)"
          className="mfe2-btn mfe2-btn-accent"></CounterButton>
      </div>
      <div className="mfe2-px-6 mfe2-pt-4">
        <CounterButton
          title="Click Me (Info)"
          className="mfe2-btn mfe2-btn-info"></CounterButton>
      </div>
      <div className="mfe2-px-6 mfe2-pt-4">
        <CounterButton
          title="Click Me (Warning)"
          className="mfe2-btn mfe2-btn-warning"></CounterButton>
      </div>
      <div className="mfe2-px-6 mfe2-pt-4">
        <CounterButton
          title="Click Me (Error)"
          className="mfe2-btn mfe2-btn-error"></CounterButton>
      </div>
    </div>
  );
};
