import CounterButton from '../components/counter-button';

export const Overview = () => {
  return (
    <div className="host-container host-mx-auto">
      <br />
      <article className="host-prose host-max-w-none">
        <h1>Host Application Root</h1>
        <p>
          Content on the host is rendered by the host container, and will not be
          visible on the MFE Client Applications unless loaded by the host
        </p>
        <h2>Some Styled Buttons!</h2>
        <div className="host-px-6">
          <CounterButton
            title="Click Me (Primary)"
            className="host-btn host-btn-primary"></CounterButton>
        </div>
        <div className="host-px-6 host-pt-4">
          <CounterButton
            title="Click Me (Secondary)"
            className="host-btn host-btn-secondary"></CounterButton>
        </div>
        <div className="host-px-6 host-pt-4">
          <CounterButton
            title="Click Me (Accent)"
            className="host-btn host-btn-accent"></CounterButton>
        </div>
        <div className="host-px-6 host-pt-4">
          <CounterButton
            title="Click Me (Info)"
            className="host-btn host-btn-info"></CounterButton>
        </div>
        <div className="host-px-6 host-pt-4">
          <CounterButton
            title="Click Me (Warning)"
            className="host-btn host-btn-warning"></CounterButton>
        </div>
        <div className="host-px-6 host-pt-4">
          <CounterButton
            title="Click Me (Error)"
            className="host-btn host-btn-error"></CounterButton>
        </div>
        <h2>
          Playing around with code snippets, for example adding a new Microapp:
        </h2>
        <div className="host-mockup-code">
          <pre data-prefix="$">
            <code>
              npm create vite@latest @react-playground/app -- --template
              react-ts
            </code>
          </pre>
        </div>
      </article>
    </div>
  );
};
