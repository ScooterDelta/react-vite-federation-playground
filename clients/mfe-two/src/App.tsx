import CounterButton from './components/counter-button';

function App() {
  return (
    <div className="mfe2-container mfe2-mx-auto">
      <br />
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
}

export default App;
