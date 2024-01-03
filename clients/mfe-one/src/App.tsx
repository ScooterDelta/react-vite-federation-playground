import CounterButton from './components/counter-button';

function App() {
  return (
    <div className="container mx-auto">
      <br />
      <h2>Some Styled Buttons!</h2>
      <CounterButton accent="primary"></CounterButton>
      <CounterButton accent="secondary"></CounterButton>
    </div>
  );
}

export default App;
