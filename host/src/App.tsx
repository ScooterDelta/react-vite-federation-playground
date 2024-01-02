import MfeOneApp from 'mfe-one/app';
import MfeTwoApp from 'mfe-two/app';
import './App.css';

function App() {
  return (
    <>
      <h1>Host</h1>
      <p>
        Content on the host is rendered by the host container, and will not be
        visible on the MFE Client Applications unless loaded by the host
      </p>

      <MfeOneApp />
      <MfeTwoApp />
    </>
  );
}

export default App;
