import CounterButton from '../components/counter-button';

export const Buttons = () => {
  return (
    <div className="mfe1-prose">
      <h1>MFE One</h1>
      <h2>Some Styled Buttons!</h2>
      <CounterButton
        title="Click Me (Primary)"
        className="mfe1-btn mfe1-btn-primary"></CounterButton>
      <CounterButton
        title="Click Me (Secondary)"
        className="mfe1-btn mfe1-btn-secondary"></CounterButton>
      <CounterButton
        title="Click Me (Ghost)"
        className="mfe1-btn mfe1-btn-ghost"></CounterButton>
    </div>
  );
};
