import CounterButton from '../components/counter-button';

export const Buttons = () => {
  return (
    <div className="mfe1-prose mfe1-max-w-none">
      <h1>MFE One Buttons</h1>
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
      <h2>Some Styled Buttons!</h2>
      <div className="mfe1-px-6">
        <CounterButton
          title="Click Me (Primary)"
          className="mfe1-btn mfe1-btn-primary"></CounterButton>
      </div>
      <div className="mfe1-px-6 mfe1-pt-4">
        <CounterButton
          title="Click Me (Secondary)"
          className="mfe1-btn mfe1-btn-secondary"></CounterButton>
      </div>
      <div className="mfe1-px-6 mfe1-pt-4">
        <CounterButton
          title="Click Me (Accent)"
          className="mfe1-btn mfe1-btn-accent"></CounterButton>
      </div>
      <div className="mfe1-px-6 mfe1-pt-4">
        <CounterButton
          title="Click Me (Info)"
          className="mfe1-btn mfe1-btn-info"></CounterButton>
      </div>
      <div className="mfe1-px-6 mfe1-pt-4">
        <CounterButton
          title="Click Me (Warning)"
          className="mfe1-btn mfe1-btn-warning"></CounterButton>
      </div>
      <div className="mfe1-px-6 mfe1-pt-4">
        <CounterButton
          title="Click Me (Error)"
          className="mfe1-btn mfe1-btn-error"></CounterButton>
      </div>
    </div>
  );
};

export default Buttons;
