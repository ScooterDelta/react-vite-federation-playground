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
        <CounterButton
          title="Click Me (Primary)"
          className="host-btn host-btn-primary"></CounterButton>
        <CounterButton
          title="Click Me (Secondary)"
          className="host-btn host-btn-secondary"></CounterButton>
        <CounterButton
          title="Click Me (Ghost)"
          className="host-btn host-btn-ghost"></CounterButton>
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
