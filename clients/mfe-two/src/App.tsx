import CounterButton from './components/counter-button';

function App() {
  return (
    <div className="container mx-auto">
      <br />
      <h1>MFE Two</h1>
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
    </div>
  );
}

export default App;
