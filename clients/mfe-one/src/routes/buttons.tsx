import CounterButton from '../components/counter-button';

export const Buttons = () => {
  return (
    <>
      <h1>MFE One</h1>
      <h2>Some Styled Buttons!</h2>
      <CounterButton
        title="Click Me (Primary)"
        className="btn btn-primary"></CounterButton>
      <CounterButton
        title="Click Me (Secondary)"
        className="btn btn-secondary"></CounterButton>
      <CounterButton
        title="Click Me (Ghost)"
        className="btn btn-ghost"></CounterButton>
    </>
  );
};
