import CounterButton from '../components/counter-button';

export const Buttons = () => {
  return (
    <div className="mfe1d-prose mfe1d-max-w-none">
      <h1>MFE One (Dynamic) Buttons</h1>
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
      <div className="mfe1d-px-6">
        <CounterButton
          title="Click Me (Primary)"
          className="mfe1d-btn mfe1d-btn-primary"></CounterButton>
      </div>
      <div className="mfe1d-px-6 mfe1d-pt-4">
        <CounterButton
          title="Click Me (Secondary)"
          className="mfe1d-btn mfe1d-btn-secondary"></CounterButton>
      </div>
      <div className="mfe1d-px-6 mfe1d-pt-4">
        <CounterButton
          title="Click Me (Accent)"
          className="mfe1d-btn mfe1d-btn-accent"></CounterButton>
      </div>
      <div className="mfe1d-px-6 mfe1d-pt-4">
        <CounterButton
          title="Click Me (Info)"
          className="mfe1d-btn mfe1d-btn-info"></CounterButton>
      </div>
      <div className="mfe1d-px-6 mfe1d-pt-4">
        <CounterButton
          title="Click Me (Warning)"
          className="mfe1d-btn mfe1d-btn-warning"></CounterButton>
      </div>
      <div className="mfe1d-px-6 mfe1d-pt-4">
        <CounterButton
          title="Click Me (Error)"
          className="mfe1d-btn mfe1d-btn-error"></CounterButton>
      </div>
    </div>
  );
};

export default Buttons;
