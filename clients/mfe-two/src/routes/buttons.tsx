import CounterButton from '../components/counter-button';

export const Buttons = () => {
  return (
    <div className="mfe2-prose mfe2-max-w-none">
      <h1>MFE Two</h1>
      <h2>Some Styled Buttons!</h2>
      <CounterButton
        title="Click Me (Primary)"
        className="mfe2-btn mfe2-btn-primary"></CounterButton>
      <CounterButton
        title="Click Me (Secondary)"
        className="mfe2-btn mfe2-btn-secondary"></CounterButton>
      <CounterButton
        title="Click Me (Ghost)"
        className="mfe2-btn mfe2-btn-ghost"></CounterButton>
    </div>
  );
};
