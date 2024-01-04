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
            title="Click Me (Ghost)"
            className="mfe2-btn mfe2-btn-ghost"></CounterButton>
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
