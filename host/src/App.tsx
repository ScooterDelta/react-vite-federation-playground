import MfeOneApp from 'mfe-one/app';
import MfeTwoApp from 'mfe-two/app';
import './App.css';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Host</h1>
      <div className="card">
        <MfeOneApp />
        <MfeTwoApp />
      </div>
    </>
  );
}

export default App;
